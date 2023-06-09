import Link from "next/link";
import { Text, Button, Group } from "@mantine/core";

export default function CallToAction({
  title,
  buttonText,
  buttonLink,
}: {
  title: string;
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <Group position="center">
      {/* <Card shadow="sm" padding="lg" radius="md" withBorder> */}
      <Group>
        <Text fw={500} fz="xl">
          {title}
        </Text>
        <Link href={buttonLink}>
          <Button radius="xl" size="md">
            {buttonText}
          </Button>
        </Link>
      </Group>
      {/* </Card> */}
    </Group>
  );
}
