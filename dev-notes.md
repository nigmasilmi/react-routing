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

#### Using links to navigate

- Basic navigation with a header common to all pages and in the header a list with hrefs to the different possible paths inside our app. But this has a flaw that is loading the page every time one click is made over the anchor tags. That is why, instead, we use the Link component from react-router-dom:
  ```<li>
  <Link to="/welcome">Welcome</Link>
  </li>
  ```

#### Marking a menu item link as active

- To make use of that feature, instead of Link from react-router-dom, we must use NavLink with more features like adding a class to an active link

- The activeClassName prop is used for that purpose. It adds the set of rules of the class to the element if it is active.

#### Details page / Dynamic Routes

- Create the component in the pages folder
- Add this page to the list of routes with a special Syntax path="/product-detail/:productId"

#### Details page / Extracting route params

- That can be used with a custom hook provided by the react-router-dom, the useParams hook
- const params = useParams() returns an object with key/values that corresponds to the parameters and values present in the url

#### Specificity of the routes -- Switch

- The render runs from top to bottom, and all matching routes are considered
- /products and products/:productId will render both if products is first and products/:productId is second. The latter will be rendered below the first.

- If that is not the behavior we want, then we must use Switch, that renders the component with the first matching path.

- But if that is not the wanted behavior, in conjunction with using Switch,we can change the order in the list of Routes or we can add the prop `exact` to the less specific route.

#### Nested routes

- Routes can be defined anywhere, not just in one place (App.js)
- If the Routes are in an active component, those routes will be evaluated by react-router-dom

#### Redirects

- To redirect in certain cases, for instance, when the user inputs the wrong path, we can use the comoponent Redirect from react-router-dom

```
<Route path="/" exact>
    <Redirect to="/welcome" />
</Route>
```
