import { AppProps } from "next/app";
import Head from "next/head";
import { Container, MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>This is our country!</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          //   colorScheme: "dark",
        }}
      >
        <Container>
          <Component {...pageProps} />
        </Container>
      </MantineProvider>
    </>
  );
}
