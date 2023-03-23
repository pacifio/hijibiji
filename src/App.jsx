import { AppShell, MantineProvider } from "@mantine/core";
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
          <BlockEditor />
        </AppShell>
      </NotificationsProvider>
    </MantineProvider>
  );
}
