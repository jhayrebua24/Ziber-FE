import { useFetchPosts, useLogin } from 'modules/auth/hooks';

import { selectIsAuth } from 'redux/auth/selectors';
import { useAppSelector } from 'redux/hooks';
import './App.css';

function App(): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);

  const [login, isLoggingIn] = useLogin();
  const [posts, isLoadingPost] = useFetchPosts();

  return (
    <div className="App">
      qweqw
      {isLoadingPost ? 'Loading Post....' : posts.map((p) => <p key={p.id}>{p.title}</p>)}
      {isAuth ? 'naka auth' : 'hinde'}
      <button type="button" disabled={isLoggingIn} onClick={async () => await login()}>
        {isLoggingIn ? 'Naglalog in ' : 'mag login'}
      </button>
    </div>
  );
}

export default App;
