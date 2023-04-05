import { Button } from "@mantine/core";
import { setAuth } from "modules/auth/redux/authSlice";
import { useAppDispatch } from "redux/hooks";

function PrivateRoutes() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(setAuth(false))}>Logout</Button>
    </div>
  );
}

export default PrivateRoutes;
