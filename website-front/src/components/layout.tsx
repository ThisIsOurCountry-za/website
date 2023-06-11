import {
  AppShell,
  Header,
  Text,
  Group,
  Center,
  Container,
  Button,
  Title,
  Footer,
  ThemeIcon,
  HoverCard,
} from "@mantine/core";
import blackFlag from "public/black-flag.jpg";

import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, GithubIcon, TwitterIcon } from "@/brand";

import { FACEBOOK_GROUP, GITHUB_REPO_URL, TWITTER_HANDLE } from "@/constants";

const socialLinks = [
  {
    Icon: FacebookIcon,
    href: FACEBOOK_GROUP,
    helpText: "Join our Facebook group",
  },
  {
    Icon: TwitterIcon,
    href: `https://twitter.com/${TWITTER_HANDLE}`,
    helpText: "Follow us on Twitter",
  },
  { Icon: GithubIcon, href: GITHUB_REPO_URL, helpText: "Contribute on GitHub" },
];

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
            fluid
            sx={{
              display: "flex",
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
              <Text fw={600} size="xl">
                This is our country
              </Text>
            </Group>

            <Group sx={{ marginLeft: "auto" }}>
              <Link href="/about">
                <Button variant="outline">About</Button>
              </Link>
              <Link href="/get-involved">
                <Button>Get involved</Button>
              </Link>
              {socialLinks.map(({ Icon, href, helpText }) => (
                <Link href={href} target="_blank" key={href}>
                  <ThemeIcon variant="outline" size={"lg"}>
                    <Icon />
                  </ThemeIcon>
                </Link>
              ))}
            </Group>
          </Container>
        </Header>
      }
      // footer={
      //   <Footer height={60} p="md">
      //     <Center>
      //       {socialLinks.map(({ Icon, href, helpText }) => (
      //         <a href={href} target="_blank" key={href}>
      //           <HoverCard>
      //             <HoverCard.Target>
      //               <ThemeIcon variant="blank">
      //                 <Icon />
      //               </ThemeIcon>
      //             </HoverCard.Target>
      //             <HoverCard.Dropdown>
      //               <Text>{helpText}</Text>
      //             </HoverCard.Dropdown>
      //           </HoverCard>
      //         </a>
      //       ))}
      //     </Center>
      //   </Footer>
      // }
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
