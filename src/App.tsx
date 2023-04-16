import { useMemo } from "react";
import { MantineProvider } from "@mantine/core";
import AppGettingReady from "common/getting-ready/AppGettingReady";
import { selectScheme } from "common/layout/redux/selectors";
import useCheckAuth from "hooks/useCheckAuth";
import { selectIsAuth } from "modules/auth/redux/selectors";
import { useAppSelector } from "redux/hooks";
import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

function App(): JSX.Element {
  const isAuth = useAppSelector(selectIsAuth);
  const colorScheme = useAppSelector(selectScheme);
  const isAppReady = useCheckAuth();

  const routes = useMemo(() => {
    if (!isAppReady) return <AppGettingReady />;

    return isAuth ? <PrivateRoutes /> : <PublicRoutes />;
  }, [isAppReady]);

  return (
    <MantineProvider
      theme={{
        colorScheme,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="min-h-screen min-w-screen flex flex-col">{routes}</div>
    </MantineProvider>
  );
}

export default App;
