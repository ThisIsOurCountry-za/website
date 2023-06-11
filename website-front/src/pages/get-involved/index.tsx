import { Page } from "@/components/layout";

import Content from "./content.mdx";

export default function GetInvolved() {
  return (
    <Page title="Get Involved">
      <Content />
    </Page>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
