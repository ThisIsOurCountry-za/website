// There is a lot going wrong in South Africa at the moment.
// The people who are most able to make a difference here are generally just leaving. They feel frightened and depressed about what the future might hold. They feel like there is nothing they can do to change things.
// The people who can't afford to leave are suffering. How many new faces do you see begging on the street? How many of those people were put there because of the economic damage caused by rampant corruption?
// We believe that if we fight corruption and address the electricity crisis then this country, our country, will be able to recover. This country and it's people have the potential to do great things.
// We believe that South African citizens will be willing to help if they knew how to, what we are lacking is a way for South Africans to stand together in a productive way.
// We believe that we don't have all the answers individually, but together we can prevail.
// Our first focus is the electricity crisis. How might we fix this? Other countries have overcome problems this big, we can too

import { Page } from "@/components/layout";
import { Title, Text, Stack, List } from "@mantine/core";
import CallToAction from "@/components/CallToAction";

export default function About() {
  return (
    <Page title="About Us">
      <Stack>
        <Title order={2}>We are...</Title>
        <Text>
          We are a group of South African citizens who have been watching the
          decline of our country for years. We believe that South Africa will
          fall unless there is a major change. We want to stay in South Africa -
          this is our home.{" "}
        </Text>
        <Text>
          We have been watching our friends, loved ones, colleagues and
          acquaintances leave the country. We have stayed and our lives have
          gotten harder and harder over time. We've seen so many new faces
          begging on the street. We are afraid of what might happen to us if we
          stay.
        </Text>
        <Text>
          Many of us have been tempted to leave - we've watched our currency
          lose its value over time. We know that the longer we wait the harder
          it will be to leave. We don't want to leave but we are afraid for
          ourselves, our children, and for those who are not in a position to
          get out. Our country feels like a ship that is sinking.{" "}
        </Text>

        <Text>
          We believe that if there are enough of us standing together and making
          the right demands in the right way we can turn things around.
        </Text>

        <CallToAction
          title="If this sounds like you"
          buttonLink="/get-involved"
          buttonText="Get Involved"
        />

        <Title order={2}>We're different</Title>
        <Text>
          There are organizations in South Africa that are already focused on
          fighting corruption and making our country a better place. We are big
          fans of their work. But we have a different way of doing things.{" "}
        </Text>
        <Text>
          We believe in the power of the South African people. Many people would
          want to lend a hand and help make our country better if only they knew
          how. Our goal is to empower those people.
        </Text>
        <Title order={2}>Be productive - not destructive</Title>
        <Text>
          We are suggesting protest, but not a violent destructive protest.
          There are people trying to fix things, we want to make it easier for
          them, not harder. Destroying things will only make things worse.
        </Text>
        <Text>
          There have been protests about service delivery and corruption in the
          past. But they haven't worked for many reasons. Many people who are
          outraged by corruption see those protests as destructive and dangerous
          rather than useful. Many people steer clear for their own physical
          safety.{" "}
        </Text>
        <Title order={2}>Our focus</Title>
        <Text>
          There is lot going wrong in South Africa, and a lot that deserves
          attention. We need to be strategic about where we focus our efforts.
        </Text>

        <Text>
          Our initial focus is to overcome the electricity crisis. Once we have
          made some headway into that issue we will move onto others.
        </Text>

        <Text>By impacting the electricity crisis aim to:</Text>

        <List>
          <List.Item>
            Make staying in South Africa less risky for individuals
          </List.Item>
          <List.Item>Lower the cost of living</List.Item>
          <List.Item>
            Improve all service delivery, everything relies on electricity
          </List.Item>
          <List.Item>
            Stop businesses from closing, empower people to do good work
          </List.Item>
        </List>

        <CallToAction
          title="Want to help?"
          buttonLink="/get-involved"
          buttonText="Get Involved"
        />
      </Stack>
    </Page>
  );
}
