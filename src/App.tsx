import { useMemo } from "react";
import { MantineProvider } from "@mantine/core";
import { selectScheme } from "common/components/layout/redux/selectors";
import AppGettingReady from "common/getting-ready/AppGettingReady";
import useCheckAuth from "hooks/useCheckAuth";
import { selectIsAuth } from "modules/portal/auth/redux/selectors";
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
  }, [isAppReady, isAuth]);

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
