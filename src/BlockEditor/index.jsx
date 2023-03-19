import "./block";
import "./code";
import "./Block.css";

import { Box, Grid } from "@mantine/core";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";

function BlockEditor() {
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code);
  }

  return (
    <Box p="xs">
      <Grid>
        <Grid.Col span={6}>
          <BlocklyWorkspace
            className="view-full"
            onWorkspaceChange={workspaceDidChange}
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
                      type: "createCanvas",
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
              ],
            }}
          />
        </Grid.Col>
        <Grid.Col span={6}></Grid.Col>
      </Grid>
    </Box>
  );
}

export default BlockEditor;
