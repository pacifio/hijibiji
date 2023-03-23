import { useMantineTheme } from "@mantine/core";

export default function VerticalDivider({ height }) {
  const theme = useMantineTheme();

  return (
    <div
      style={{
        width: ".2px",
        height: height ?? "80%",
        backgroundColor: theme.colors.gray[8],
      }}
    ></div>
  );
}
