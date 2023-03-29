import { AppShell, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
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
      <NotificationsProvider position="top-center">
        <ModalsProvider>
          <AppShell
            header={<Navbar />}
            padding={0}
            styles={(theme) => ({
              "*": {
                backgroundColor: theme.colors.dark[8],
              },
            })}
            navbarOffsetBreakpoint="md"
          >
            <BlockEditor />
          </AppShell>
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}
