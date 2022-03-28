import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h2>Welcome</h2>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
