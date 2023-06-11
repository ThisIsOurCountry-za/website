import { Button, Container, Paper, Stack } from "@mantine/core";
import { Page } from "@/components/layout";
import { Title, Group, Text } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Page hero={<Hero />}>
      <Container></Container>
    </Page>
  );
}

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

export function getStaticProps() {
  return {
    props: {},
  };
}
