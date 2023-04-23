import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  Burger,
  Button,
  Header as Head,
  MediaQuery,
  Menu,
  Text,
  useMantineTheme,
} from "@mantine/core";
import useGetProfile from "hooks/useGetProfile";

import ThemeButton from "./ThemeButton";

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  title: React.ReactNode;
}

Header.defaultProps = {
  title: "Welcome",
};

function Header({ opened, setOpened, title }: Props) {
  const theme = useMantineTheme();
  const user = useGetProfile();
  const nav = useNavigate();

  const logout = () => nav("/logout");

  return (
    <Head height={{ base: 50, md: 70 }} p="md" className="bg-forest-500">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        {typeof title === "string" ? (
          <Text className="text-xl tracking-tighter text-white font-medium">{title}</Text>
        ) : (
          title
        )}
        <div className="flex items-center">
          <div className="mt-2">
            <ThemeButton adjustColor={false} />
          </div>
          <Menu shadow="md" width={150}>
            <Menu.Target>
              <Button variant="teal" size="md" className="text-white capitalize">
                {`${user?.first_name ?? ""} ${user?.last_name ?? ""}`}{" "}
                <AiOutlineDown className="ml-1" size={18} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={logout}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </Head>
  );
}

export default Header;
