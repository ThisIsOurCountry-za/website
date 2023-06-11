import type { MDXComponents } from "mdx/types";

import { Title, Text } from "@mantine/core";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  const headings = {};

  for (let i = 1; i <= 5; i++) {
    headings[`h${i}`] = ({ children }) => (
      <Title pb="md" order={i + 1}>
        {children}
      </Title>
    );
  }

  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    p: ({ children }) => <Text pb="md">{children}</Text>,
    ...headings,

    ...components,
  };
}
