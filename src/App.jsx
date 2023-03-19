import { AppShell, MantineProvider, Tabs } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { IconCode, IconLayout2 } from "@tabler/icons-react";
import BlockEditor from "./BlockEditor";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        focusRing: "never",
        primaryColor: "blue",
        loader: "oval",
      }}
    >
      <NotificationsProvider>
        <AppShell
          header={<Navbar />}
          padding={0}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
          navbarOffsetBreakpoint="md"
        >
          <Tabs defaultValue="block">
            <Tabs.List>
              <Tabs.Tab value="block" icon={<IconLayout2 size="0.8rem" />}>
                ব্লক
              </Tabs.Tab>
              <Tabs.Tab value="script" icon={<IconCode size="0.8rem" />}>
                স্ক্রিপ্ট
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="block">
              <BlockEditor />
            </Tabs.Panel>

            <Tabs.Panel value="script">Scripts</Tabs.Panel>
          </Tabs>
        </AppShell>
      </NotificationsProvider>
    </MantineProvider>
  );
}
