import { Button, Divider, Image, Switch, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import FinanceSvg from "assets/img/finance.svg";
import ThemeButton from "common/Layout/components/ThemeButton";
import * as yup from "yup";

import { useLogin } from "./hooks";

const schema = yup.object().shape({
  username: yup.string().required().label("Username"),
  password: yup.string().required().label("Password"),
});

function AuthContainer(): JSX.Element {
  const [login, isLoading] = useLogin();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validate: yupResolver(schema),
  });

  return (
    <div className="flex flex-grow">
      <div className="w-full hidden md:flex justify-center items-center p-16">
        <Image src={FinanceSvg} maw={1278} />
      </div>
      <Divider orientation="vertical" />
      <div className="flex-shrink-0 shadow w-full md:max-w-lg flex flex-col sm:px-8 justify-center">
        <div className="absolute top-2 right-0">
          <ThemeButton />
        </div>
        <form onSubmit={form.onSubmit(login)} className="p-4 w-full rounded-lg space-y-4">
          <h1 className="font-thin tracking-tightest">Welcome!</h1>
          <TextInput
            withAsterisk
            label="Username"
            placeholder="juandelacruz"
            {...form.getInputProps("username")}
          />
          <TextInput
            withAsterisk
            label="Password"
            type="password"
            placeholder="********"
            {...form.getInputProps("password")}
          />
          <Switch
            checked={form.values.rememberMe}
            onChange={(e) => form.setFieldValue("rememberMe", e.target.checked)}
            label="Remember me?"
          />
          <Button color="teal" type="submit" loading={isLoading} fullWidth>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
export default AuthContainer;
