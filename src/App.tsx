import { selectIsAuth } from "modules/auth/redux/selectors";
import { useAppSelector } from "redux/hooks";
import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

function App(): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  );
}

export default App;
