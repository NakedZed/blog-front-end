import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/app.scss';
import Home from './containers/Home';
import BlogDetails from './containers/BlogDetails';

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/:id" exact>
            <BlogDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
