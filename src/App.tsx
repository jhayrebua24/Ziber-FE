import { MantineProvider } from "@mantine/core";
import { selectScheme } from "common/layout/redux/selectors";
import { selectIsAuth } from "modules/auth/redux/selectors";
import { useAppSelector } from "redux/hooks";
import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

function App(): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);
  const colorScheme = useAppSelector(selectScheme);

  return (
    <MantineProvider
      theme={{
        colorScheme,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="min-h-screen min-w-screen flex flex-col">
        {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
      </div>
    </MantineProvider>
  );
}

export default App;
