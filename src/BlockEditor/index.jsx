/* eslint-disable react-hooks/exhaustive-deps */
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
  IconBook,
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

  useEffect(() => {
    if (activeTab === "script") {
      genCode();
    }
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
                <Tabs.Tab value="tutorial" icon={<IconBook size="0.8rem" />}>
                  টিউটরিয়াল
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
                onClick={genCode}
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
                      colour: "#E64980",
                      contents: [
                        {
                          kind: "block",
                          type: "setup",
                        },
                        {
                          kind: "block",
                          type: "draw",
                        },
                        {
                          kind: "block",
                          type: "draw",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "ক্যানভাস ফাংশন",
                      colour: "#845EF7",
                      contents: [
                        {
                          kind: "block",
                          type: "noStroke",
                        },
                        {
                          kind: "block",
                          type: "stroke",
                        },
                        {
                          kind: "block",
                          type: "strokeWeight",
                        },
                        {
                          kind: "block",
                          type: "translate",
                        },
                        {
                          kind: "block",
                          type: "rotate",
                        },
                        {
                          kind: "block",
                          type: "width",
                        },
                        {
                          kind: "block",
                          type: "height",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "ইনপুট",
                      colour: "#15AABF",
                      contents: [
                        {
                          kind: "block",
                          type: "mouseX",
                        },
                        {
                          kind: "block",
                          type: "mouseY",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "জ্যামিতি",
                      colour: "#37B24D",
                      contents: [
                        {
                          kind: "block",
                          type: "ellipse",
                        },
                        {
                          kind: "block",
                          type: "rect",
                        },
                        {
                          kind: "block",
                          type: "triangle",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "রং",
                      colour: "#FAB005",
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
                          type: "math_arithmetic",
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
                    {
                      kind: "category",
                      name: "টেক্সট বা লিখা",
                      colour: "%{BKY_TEXTS_HUE}",
                      contents: [
                        {
                          kind: "block",
                          type: "text",
                        },
                        {
                          kind: "block",
                          type: "text_length",
                        },
                        {
                          kind: "block",
                          type: "text_join",
                        },
                        {
                          kind: "block",
                          type: "text_append",
                        },
                        {
                          kind: "block",
                          type: "text_length",
                        },
                        {
                          kind: "block",
                          type: "text_indexOf",
                        },

                        {
                          kind: "block",
                          type: "text_charAt",
                        },
                        {
                          kind: "block",
                          type: "text_getSubstring",
                        },
                        {
                          kind: "block",
                          type: "text_changeCase",
                        },
                        {
                          kind: "block",
                          type: "text_trim",
                        },
                        {
                          kind: "block",
                          type: "text_print",
                        },
                        {
                          kind: "block",
                          type: "text_prompt_ext",
                        },
                      ],
                    },
                    {
                      kind: "category",
                      name: "ভ্যারিয়েবলস",
                      colour: "%{BKY_VARIABLES_HUE}",
                      custom: "VARIABLE",
                    },
                    {
                      kind: "category",
                      name: "ফাংশন",
                      colour: "%{BKY_PROCEDURES_HUE}",
                      custom: "PROCEDURE",
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

            <Tabs.Panel value="tutorial" className="view-full">
              <Text color="dimmed" weight="bold">
                টিউটরিয়াল আসছে !
              </Text>
            </Tabs.Panel>
          </Tabs>
        </Grid.Col>
        <Grid.Col span={6}>
          <Preview sketch={code} sizeRef={ref} />
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
    <Paper withBorder ref={sizeRef} w="100%" h="100%" radius={0}>
      {sketch ? (
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
          ref={p5Container}
        ></div>
      ) : (
        <Center h="100%">
          <Text>স্কেচ দেখতে কোড রান করুন</Text>
        </Center>
      )}
    </Paper>
  );
}

export default BlockEditor;
