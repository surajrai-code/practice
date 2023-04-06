import { authAction } from '../Store';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  
  const AuthLogin = (e) => {
    e.preventDefault();

    dispatch(authAction.logIn());
  }

  return (
    <main>
      <section>
        <form onSubmit={AuthLogin}>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;