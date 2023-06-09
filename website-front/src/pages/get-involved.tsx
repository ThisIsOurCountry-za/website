import { Page } from "@/components/layout";
import { List, Stack, Text, Title } from "@mantine/core";
import CallToAction from "@/components/CallToAction";

export default function GetInvolved() {
  return (
    <Page title="Get Involved">
      <Stack>
        <Text>
          Thank you for your interest in helping out! We really appreciate it!
        </Text>
        <Text>
          This is a new project and we are still building all the basic
          mechanisms we need to make it work. So there are a few ways you can
          help out now, and there are some plans that you can plug into later
          on.
        </Text>
        <Title order={2}>Tell us about yourself</Title>
        <Text>
          If you want to be involved then please fill in this form. Once we have
          different mechanisms set up we will be able to reach out to you and
          plug you in.
        </Text>
        <Title order={2}>Spread the word</Title>
        <Text>
          Talk to the people around you - your friends, neighbors, colleagues -
          see how they feel about our country. Listen to them. Then share this
          with them.
        </Text>
        <Title order={2}>Collect hard-hitting stories</Title>
        <Text>
          We are looking for personal stories about how the electricity crisis
          has impacted people in serious ways. We hope to use these stories to
          inspire people to take action.
        </Text>
        <Text>Here are some examples of things we want to hear about:</Text>
        <List>
          <List.Item>
            People losing their jobs or income, and the consequences of that
          </List.Item>
          <List.Item>Businesses needing to close or fire people</List.Item>
          <List.Item>People's health being badly effected </List.Item>
          <List.Item>Education being disrupted</List.Item>
          <List.Item>Anything else that you think will move people</List.Item>
        </List>
        If you know anyone with such a story then please get them to share it.
        They can fill in this form:
        <Title order={2}>If you are a programmer, write some code</Title>
        <Text>
          If you have the skills to help out on some code then please go ahead.
          You can find our code{" "}
          <a href="https://github.com/orgs/ThisIsOurCountry-za/repositories">
            here
          </a>
          . It would be very nice to get a few more brains involved to speed
          this all up.
        </Text>
      </Stack>
    </Page>
  );
}
