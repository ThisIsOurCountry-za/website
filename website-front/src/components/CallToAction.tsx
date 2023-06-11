import Link from "next/link";
import { Text, Button, Group } from "@mantine/core";

export default function CallToAction({
  title,
  buttonText,
  buttonLink,
  newTab,
  icon,
}: {
  title: string;
  buttonText: string;
  buttonLink: string;
  newTab?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <Group position="center" mb="md">
      <Group>
        <Text fw={500} fz="xl">
          {title}
        </Text>
        <Link href={buttonLink} target={newTab ? "_blank" : "_self"}>
          <Button radius="xl" size="md" leftIcon={icon}>
            {buttonText}
          </Button>
        </Link>
      </Group>
    </Group>
  );
}
