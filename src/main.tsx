import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "common/ErrorBoundary";
import store from "redux/store";

import App from "./App";

import "./App.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* error boundary */}
    <ErrorBoundary>
      {/* router */}
      <BrowserRouter>
        {/* app state */}
        <Provider store={store}>
          {/* server state */}
          <QueryClientProvider client={queryClient}>
            {/* ui lib */}
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <App />
              <ReactQueryDevtools initialIsOpen={false} />
            </MantineProvider>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
