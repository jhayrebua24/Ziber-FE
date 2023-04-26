import { useMemo } from "react";
import { MantineProvider } from "@mantine/core";
import { selectIsAuth } from "apps/portal/auth/redux/selectors";
import { selectScheme } from "common/components/layout/redux/selectors";
import { ModalProvider } from "common/components/modal";
import AppGettingReady from "common/getting-ready/AppGettingReady";
import useCheckAuth from "hooks/useCheckAuth";
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
      <ModalProvider>
        <div className="min-h-screen min-w-screen flex flex-col">{routes}</div>
      </ModalProvider>
      <div id="toast-root" />
    </MantineProvider>
  );
}

export default App;
