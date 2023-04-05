import { Button } from "@mantine/core";

function App(): JSX.Element {
  return (
    <div>
      <Button compact>{import.meta.env.VITE_API_PROXY_URL}</Button>
    </div>
  );
}

export default App;
