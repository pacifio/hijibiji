import "./Navbar.css";
import { ActionIcon, Anchor, Group, Header, Tooltip } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconMaximize,
  IconMinimize,
} from "@tabler/icons-react";
import { useFullscreen } from "@mantine/hooks";
import VerticalDivider from "./VerticalDivider";

export default function Navbar() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Header height={{ base: 60 }} p="md">
      <Group position="apart" align="center">
        <Group position="left">
          <div className="gradient-border">হিজিবিজি</div>
        </Group>
        <Group position="right">
          <Tooltip label="জাভাস্ক্রিপ্ট শিখো" position="bottom" withArrow>
            <ActionIcon onClick={toggle}>
              {fullscreen ? <IconMinimize /> : <IconMaximize />}
            </ActionIcon>
          </Tooltip>
          <VerticalDivider height={30} />
          <Anchor href="https://github.com/pacifio/hijibiji" target="_blank">
            <Tooltip label="আমাদের ফেসবুক পেইজ" position="bottom" withArrow>
              <ActionIcon>
                <IconBrandFacebook />
              </ActionIcon>
            </Tooltip>
          </Anchor>
          <Anchor href="https://github.com/pacifio/hijibiji" target="_blank">
            <Tooltip label="গিটহাবে কোড দেখো" position="bottom" withArrow>
              <ActionIcon>
                <IconBrandGithub />
              </ActionIcon>
            </Tooltip>
          </Anchor>
        </Group>
      </Group>
    </Header>
  );
}
