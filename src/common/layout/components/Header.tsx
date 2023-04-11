import React from "react";
import { Burger, Header as Head, MediaQuery, Text, useMantineTheme } from "@mantine/core";

import ThemeButton from "./ThemeButton";

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ opened, setOpened }: Props) {
  const theme = useMantineTheme();
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
        <Text className="text-xl tracking-tighter text-white font-medium">
          Accounting
        </Text>
        <ThemeButton />
      </div>
    </Head>
  );
}

export default Header;
