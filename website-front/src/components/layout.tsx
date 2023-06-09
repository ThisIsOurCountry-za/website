import {
  AppShell,
  Navbar,
  Header,
  Text,
  Group,
  Center,
  Flex,
  createStyles,
  Menu,
  Container,
  Button,
  Burger,
  rem,
  Title,
} from "@mantine/core";
import blackFlag from "public/black-flag.jpg";

import Image from "next/image";
import Link from "next/link";

export function Page({
  hero,
  children,
  title,
}: {
  hero?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs" sx={{ borderBottom: 0 }} mb={120}>
          <Container
            // position="apart"
            fluid
            sx={{
              display: "flex",
              //   background: "red",
              position: "relative",
            }}
          >
            <Group>
              <Link href="/">
                <Image
                  src={blackFlag.src}
                  alt="black flag"
                  width="50"
                  height="40"
                />
              </Link>
              <Text>This is our country</Text>
            </Group>

            <Group sx={{ marginLeft: "auto" }}>
              <Link href="/about">
                <Button variant="outline">About</Button>
              </Link>
              <Link href="/get-involved">
                <Button>Get involved</Button>
              </Link>
            </Group>

            {/* <Group></Group> */}
          </Container>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {hero}
      {title ? <Title mb="lg">{title}</Title> : null}
      {children}
    </AppShell>
  );
}
