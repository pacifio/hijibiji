import { Group, Header, Text } from "@mantine/core";

export default function Navbar() {
  return (
    <Header height={{ base: 60 }} px="md" py="sm">
      <Group position="apart" align="center">
        <Group position="left">
          <Text>হিজিবিজি</Text>
        </Group>
      </Group>
    </Header>
  );
}
