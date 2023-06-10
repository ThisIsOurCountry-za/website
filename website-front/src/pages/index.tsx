import { Box, Button, Container, Paper, Stack } from "@mantine/core";
import { Page } from "@/components/layout";
import {
  createStyles,
  Image,
  Title,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import Link from "next/link";
// import { IconCheck } from "@tabler/icons-react";
// import image from "./image.svg";

import blackFlag from "public/black-flag.jpg";

export default function Home() {
  return (
    <Page hero={<Hero />}>
      <Container></Container>
    </Page>
  );
}

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    // backgroundImage: `url(${blackFlag.src})`,
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${blackFlag.src})`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    // color: theme.colorScheme === "dark" ? theme.white : theme.black,
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    // lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

function Hero() {
  return (
    <Paper withBorder p="xl">
      <Stack>
        <Title>
          This is <span>OUR COUNTRY</span> <br />
        </Title>

        <Title>Let's fix it together</Title>

        <Text>
          Talk to your friends and neighbors about South Africa, you will hear
          the same thing: "This country is hopeless, and we are helpless to
          change it".
        </Text>

        <Text>
          We, as South Africans, have a proud history of standing up against
          oppression.
        </Text>

        <Text>
          <b>We believe</b> in the power of the South African people
        </Text>

        <Text>
          <b>We believe</b> we can address <b>our country's</b> problems in a
          way that is productive and not destructive
        </Text>

        <Text>
          <b>We believe</b> that we are at a turning point. Now is the time to
          act
        </Text>

        <Group>
          <Link href="/about">
            <Button radius="xl" size="md">
              Find out more
            </Button>
          </Link>

          <Link href="/get-involved">
            <Button radius="xl" size="md">
              Get involved
            </Button>
          </Link>
        </Group>
      </Stack>
    </Paper>
  );
}
