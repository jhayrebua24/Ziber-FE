import React, { useMemo, useState } from "react";
import { AppShell, Footer, useMantineTheme } from "@mantine/core";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

interface Props {
  children: JSX.Element | React.ReactNode;
}

export default function LayoutContainer({ children }: Props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const styles = useMemo(
    () => ({
      main: {
        background:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    }),
    [theme],
  );

  return (
    <AppShell
      styles={styles}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Navbar opened={opened} />}
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={<Header setOpened={setOpened} opened={opened} />}
    >
      <div className="w-full flex flex-col h-full">{children}</div>
    </AppShell>
  );
}
