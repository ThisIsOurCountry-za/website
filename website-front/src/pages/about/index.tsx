import { Page } from "@/components/layout";

import Content from "./content.mdx";

export default function About() {
  return (
    <Page title="About Us">
      <Content />
    </Page>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
