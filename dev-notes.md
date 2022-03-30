# React Routing

We need a way to manipulate the url, preventing the default behavior of requesting a new html page from the browser.

## React Router pckg

- install react-router-dom@5, start with version 5 the most used one
- react-router-dom is the version to manage routing in web apps
- The idea is that an url maps to a component

### to use react-router-dom

- import the component Route from the package
- The Route component must be part of the App.js
- The Route componenet receives the "path" prop and renders its children once the active path is the value for the props.path
- Remember to add the "/" as prefix for the string
- In order for this to work, we must wrap the Application with the BrowserRouter component
- It is by convention that a component implicated in the routing skeleton, must be in the pages folder

### Using links to navigate

- Basic navigation with a header common to all pages and in the header a list with hrefs to the different possible paths inside our app. But this has a flaw that is loading the page every time one click is made over the anchor tags. That is why, instead, we use the Link component from react-router-dom:
  ```<li>
  <Link to="/welcome">Welcome</Link>
  </li>
  ```

### Marking a menu item link as active

- To make use of that feature, instead of Link from react-router-dom, we must use NavLink with more features like adding a class to an active link

- The activeClassName prop is used for that purpose. It adds the set of rules of the class to the element if it is active.

### Details page / Dynamic Routes

- Create the component in the pages folder
- Add this page to the list of routes with a special Syntax path="/product-detail/:productId"

### Details page / Extracting route params

- That can be used with a custom hook provided by the react-router-dom, the useParams hook
- const params = useParams() returns an object with key/values that corresponds to the parameters and values present in the url

### Specificity of the routes -- Switch

- The render runs from top to bottom, and all matching routes are considered
- /products and products/:productId will render both if products is first and products/:productId is second. The latter will be rendered below the first.

- If that is not the behavior we want, then we must use Switch, that renders the component with the first matching path.

- But if that is not the wanted behavior, in conjunction with using Switch,we can change the order in the list of Routes or we can add the prop `exact` to the less specific route.

#### Nested routes

- Routes can be defined anywhere, not just in one place (App.js)
- If the Routes are in an active component, those routes will be evaluated by react-router-dom

### Redirects

- To redirect in certain cases, for instance, when the user inputs the wrong path, we can use the comoponent Redirect from react-router-dom

```
<Route path="/" exact>
    <Redirect to="/welcome" />
</Route>
```

### Programmatic navigation

- Navigation triggered by an user action, the natural course that the user must expect or an improvement in UX.

- To do that, we use the react-router-dom hook `useHistory()`
- `useHistory()` returns an object with the methods, push, replace and other methods to navigate programatically or to manipulate the browser's history.
- `push()` is used to add a path to the browser's history stack, with that, the user can go back.

```
history.push('/quotes')
```

- replace() substitutes the current url and also gives the output to navigate to that url but does not add the target url to the browser's history stack.

#### Preventing unwanted transitions with prompt()

- To prevent the loss of entered information into a form, for example.

- First manage a state that indicates that the form has focus onFocus

- Then show a warning to the user when the form has lost focus or tries to leave the page after started working in that form.

- To warn the user we use `Propt` component from `react-router-dom`

- Prompt receives two props, one is `when` meaning when the prompt should appear, whe can relate this value with the state related to lose focus. The other prop is `message` which receives a function with the location argument, that personalizes the message shown in the prompt.

- onSubmitting the form, prompt will also be triggered, so we can add an extra event handler onClick to set the focus related state to false. In a separate function to guarantee that the state is changed before the onSubmit event is triggered.

### Working with query parameters

- Extra parameters added to urls that helps the browser to perform different behaviors
- Starts with a `?`after the url and marks a sequence of key/value pairs that are the data to trigger specific functions to change the appeareance or behavior of the view.
- For example, we can pass query parameters to sort a data based on the preference of the user.
- First we need to implemente the base logic for the sorting.
- That base logic includes the change of the url to an url with query parameters, for that we use useHistory and push.
- Next we need to "read" that query parameter to perform the specific actions that those values trigger.
- For that we use the hook `useLocation()` from react-router-dom. That hook returns an object with the properties of the current location, one of those is `search`that contains the query parameters.
- To work with the search property in an object fashion, we use the built-in browser `URLSearchParams`class that we instantiate with the location.search string, and gives us the queryParam object

```
  const queryParams = new URLSearchParams(location.search);
```

from which we can use the get method and extract directly the value in which the key is setted

```
queryParams.get('sort')
```

- The rest are implementation details.

### Getting creative with nested routes

```
return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Show comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
```

### A more flexible way of constructing paths - useRouteMatch()

- With the current approach, if the routes changes for some reason, then we have to update all routes and nested routes.

- useRouteMatch() is similar to useLocation() but with more information about the currently loaded route. Including the current path but how we defined in the Router.

```
const match = useRoutMatch()
```

- So, in the route definition, we can replace the hardcoded value with match.path

```
  <Route path={`${match.path}/comments`}>
        <Comments />
  </Route>
```

- The same can be applied to the link inside nested routes, but using the property `url` of the match object

```
<Link className="btn--flat" to={`${match.url}/comments`}>
            Show comments
</Link>
```

- Following the same principle, the location object can also be used to construct dynamic links and routes, for example:

This:

```
const changeSortingHandler = () => {
    history.push(`/quotes?sort=${isSortingAscending ? 'desc' : 'asc'}`);
};
```

Can be transformed into this:

```
 const changeSortingHandler = () => {
    history.push(
      `${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`
    );
};
```

That can also be written as this:

```
 history.push({
        pathname: location.pathname,
        search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`,
        });
```
