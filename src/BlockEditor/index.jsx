/* eslint-disable no-new-func */

import "./block";
import "./code";
import "./Block.css";

import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  Paper,
  Tabs,
  ThemeIcon,
  Text,
} from "@mantine/core";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import {
  IconCode,
  IconLayout2,
  IconPlayerPlayFilled,
  IconX,
} from "@tabler/icons-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Prism } from "@mantine/prism";

import INIT_XML from "./xml";
import { useElementSize } from "@mantine/hooks";
import p5 from "p5";
import { showNotification } from "@mantine/notifications";

function BlockEditor() {
  let workspace;

  const [sketch, setSketch] = useState();

  const [code, setCode] = useState("");
  const [activeTab, setActiveTab] = useState("block");
  const { ref, width, height } = useElementSize();

  const genCode = useCallback(() => {
    if (workspace) {
      let code = Blockly.JavaScript.workspaceToCode(workspace);
      const mapObj = {
        CW: width.toString(),
        CH: height.toString(),
      };
      code = code.replace(/\b(?:CW|CH)\b/gi, (matched) => mapObj[matched]);
      setCode(code);
    }
  }, [workspace, width, height]);

  const runCode = () => {
    genCode();
    if (code.length > 0) {
      setSketch(code);
    }
  };

  useEffect(() => {
    if (activeTab === "script") {
      genCode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <Box p="xs">
      <Grid gutter="xs">
        <Grid.Col span={6}>
          <Tabs
            defaultValue="block"
            variant="pills"
            radius="xl"
            value={activeTab}
            onTabChange={setActiveTab}
          >
            <Group position="apart">
              <Tabs.List>
                <Tabs.Tab value="block" icon={<IconLayout2 size="0.8rem" />}>
                  ব্লক
                </Tabs.Tab>
                <Tabs.Tab value="script" icon={<IconCode size="0.8rem" />}>
                  স্ক্রিপ্ট
                </Tabs.Tab>
              </Tabs.List>
              <Button
                variant="subtle"
                size="xs"
                leftIcon={
                  <ThemeIcon color="green" variant="light" radius="xl">
                    <IconPlayerPlayFilled size={12} />
                  </ThemeIcon>
                }
                radius="xl"
                onClick={runCode}
              >
                রান কোড
              </Button>
            </Group>

            <Tabs.Panel value="block">
              <BlocklyWorkspace
                className="view-full"
                onWorkspaceChange={(w) => (workspace = w)}
                initialXml={INIT_XML(width, height)}
                workspaceConfiguration={{
                  grid: {
                    spacing: 20,
                    length: 3,
                    colour: "#ccc",
                    snap: true,
                  },
                  zoom: {
                    controls: true,
                    wheel: true,
                  },
                  theme: "dark",
                }}
                toolboxConfiguration={{
                  kind: "categoryToolbox",
                  contents: [
                    {
                      kind: "category",
                      name: "স্ট্রাকচার",
                      contents: [
                        {
                          kind: "block",
                          type: "setup",
                        },
                        {
                          kind: "block",
                          type: "draw",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "জ্যামিতি",
                      contents: [
                        {
                          kind: "block",
                          type: "ellipse",
                        },
                        {
                          kind: "block",
                          type: "rect",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "রং",
                      contents: [
                        {
                          kind: "block",
                          type: "background",
                        },
                        {
                          kind: "block",
                          type: "fill",
                        },
                        {
                          kind: "block",
                          type: "colour_picker",
                        },
                        {
                          kind: "block",
                          type: "colour_random",
                        },
                        {
                          kind: "block",
                          type: "colour_rgb",
                        },
                        {
                          kind: "block",
                          type: "colour_blend",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "লজিক",
                      colour: "%{BKY_LOGIC_HUE}",
                      contents: [
                        {
                          kind: "block",
                          type: "controls_if",
                        },
                        {
                          kind: "block",
                          type: "logic_compare",
                        },
                        {
                          kind: "block",
                          type: "logic_operation",
                        },
                        {
                          kind: "block",
                          type: "logic_negate",
                        },
                        {
                          kind: "block",
                          type: "logic_boolean",
                        },
                        {
                          kind: "block",
                          type: "logic_null",
                        },
                        {
                          kind: "block",
                          type: "logic_ternary",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "লুপ",
                      colour: "%{BKY_LOOPS_HUE}",
                      contents: [
                        {
                          kind: "block",
                          type: "controls_repeat_ext",
                        },
                        {
                          kind: "block",
                          type: "controls_whileUntil",
                        },
                        {
                          kind: "block",
                          type: "controls_for",
                        },
                        {
                          kind: "block",
                          type: "controls_forEach",
                        },
                        {
                          kind: "block",
                          type: "controls_flow_statements",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "গণিত",
                      colour: "%{BKY_MATH_HUE}",
                      contents: [
                        {
                          kind: "block",
                          type: "math_number",
                        },
                        {
                          kind: "block",
                          type: "math_single",
                        },
                        {
                          kind: "block",
                          type: "math_trig",
                        },
                        {
                          kind: "block",
                          type: "math_constant",
                        },
                        {
                          kind: "block",
                          type: "math_round",
                        },
                        {
                          kind: "block",
                          type: "math_on_list",
                        },
                        {
                          kind: "block",
                          type: "math_modulo",
                        },
                        {
                          kind: "block",
                          type: "math_constrain",
                        },
                        {
                          kind: "block",
                          type: "math_random_int",
                        },
                        {
                          kind: "block",
                          type: "math_random_float",
                        },
                      ],
                    },
                  ],
                }}
              />
            </Tabs.Panel>

            <Tabs.Panel value="script" className="view-full">
              <Paper withBorder mt={12} shadow="sm" radius={0}>
                <Prism language="javascript" withLineNumbers>
                  {code}
                </Prism>
              </Paper>
            </Tabs.Panel>
          </Tabs>
        </Grid.Col>
        <Grid.Col span={6}>
          <Preview sketch={sketch} sizeRef={ref} />
        </Grid.Col>
      </Grid>
    </Box>
  );
}

function Preview({ sketch, sizeRef }) {
  const p5Container = useRef();

  useEffect(() => {
    let p5Instance;
    try {
      p5Instance = new p5(new Function("p5", sketch), p5Container.current);
    } catch (_) {
      showNotification({
        title: "স্কেচে ভুল আছে",
        message: "তোমার স্কেচ কোডে কোথাও একটি ভুল রয়েছে",
        color: "red",
        icon: <IconX />,
      });
    }

    return () => {
      p5Instance?.remove();
    };
  }, [sketch]);

  return (
    <Box ref={sizeRef} w="100%" h="100%">
      {sketch ? (
        <div h="100%" ref={p5Container}></div>
      ) : (
        <Center h="100%">
          <Text>স্কেচ দেখতে কোড রান করুন</Text>
        </Center>
      )}
    </Box>
  );
}

export default BlockEditor;
