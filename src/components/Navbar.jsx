import "./Navbar.css";
import {
  ActionIcon,
  Anchor,
  Button,
  Code,
  Group,
  Header,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandYoutube,
  IconMaximize,
  IconMinimize,
  IconQuestionMark,
} from "@tabler/icons-react";
import { useFullscreen } from "@mantine/hooks";
import VerticalDivider from "./VerticalDivider";
import { openModal } from "@mantine/modals";

function Brand() {
  return <div className="gradient-border">হিজিবিজি</div>;
}

function About() {
  return (
    <Stack align="center" spacing="xs">
      <Group position="center">
        <Brand />
      </Group>
      <Text size="lg" weight="bold">
        হিজিবিজি একটি উন্মুক্ত ভিসুয়াল প্রোগ্রামিং প্লাটফর্ম
      </Text>
      <Group>
        <Text>ভার্সন</Text>
        <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
      </Group>
      <Anchor href="https://github.com/pacifio" target="_blank">
        <Text size="xs" color="dimmed" weight="bolder">
          @pacifio
        </Text>
      </Anchor>
    </Stack>
  );
}

export default function Navbar() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Header height={{ base: 60 }} p="md">
      <Group position="apart" align="center">
        <Group position="left">
          <Brand />
        </Group>
        <Group position="right">
          <Tooltip
            label="ফুলস্ক্রিন কর অথবা মিনিমাইয কর"
            position="bottom"
            withArrow
          >
            <Button
              size="xs"
              leftIcon={fullscreen ? <IconMinimize /> : <IconMaximize />}
              variant="light"
              color="cyan"
              onClick={toggle}
            >
              {fullscreen ? "মিনিমাইয কর" : "ফুলস্ক্রিন কর"}
            </Button>
          </Tooltip>
          <VerticalDivider height={30} />
          <Button.Group>
            <Button
              onClick={() => window.open("", "_blank")}
              size="xs"
              leftIcon={<IconBrandYoutube />}
              variant="light"
              color="red"
            >
              ইউটিউব
            </Button>
            <Button
              onClick={() => window.open("", "_blank")}
              size="xs"
              leftIcon={<IconBrandFacebook />}
              variant="light"
              color="blue"
            >
              ফেসবুক
            </Button>
            <Button
              onClick={() =>
                window.open("https://github.com/pacifio/hijibiji", "_blank")
              }
              size="xs"
              leftIcon={<IconBrandGithub />}
              variant="light"
              color="gray"
            >
              গিটহাব
            </Button>
          </Button.Group>
          <Tooltip label="হিজিবিজির ব্যাপারে" position="bottom" withArrow>
            <ActionIcon
              variant="light"
              color="blue"
              radius="xl"
              onClick={() => {
                openModal({
                  title: "হিজিবিজির ব্যাপারে",
                  children: <About />,
                  padding: "xs",
                  size: "md",
                  overlayOpacity: 0.55,
                  overlayBlur: 3,
                });
              }}
            >
              <IconQuestionMark />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Header>
  );
}
