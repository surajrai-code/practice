import { Fragment } from 'react';
import Counter from './componets/Counter';
import Header from './componets/Header'
import Auth from './componets/Auth'
import UserProfile from './componets/UserProfile'
import { useSelector } from 'react-redux';
function App() {
  const isAuth = useSelector(state=>state.Auth.isAuthenticated);
  return (
    <Fragment>
      <Header/>
      {!isAuth && <Auth/>}
     {isAuth && <UserProfile/>}
     {isAuth && <Counter />}
     
    </Fragment>
  );
}

export default App;
