import { Switch, Route ,Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {useContext} from 'react';
import Authcontext from './store/Auth-Context';

function App() {



  const ctx=useContext(Authcontext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!ctx.isLoggein && <Route path='/auth'>
          <AuthPage />
        </Route>}
         <Route path='/profile'>
          {ctx.isLoggein && <UserProfile />}
          {!ctx.isLoggein && <AuthPage />}
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
