import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/home';
import Profile from '../components/Profile';
export const PageRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
};
