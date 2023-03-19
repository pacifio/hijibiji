import Blockly from "blockly";

Blockly.JavaScript["createCanvas"] = function (block) {
  let value_width = Blockly.JavaScript.valueToCode(
    block,
    "width",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_height = Blockly.JavaScript.valueToCode(
    block,
    "height",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_canvas = Blockly.JavaScript.valueToCode(
    block,
    "canvas",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code =
    "let myCanvas = createCanvas(" +
    value_width +
    "," +
    value_height +
    ");\n" +
    "myCanvas.parent(" +
    value_canvas +
    ");\n";
  return code;
};

Blockly.JavaScript["setup"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "function setup() {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["draw"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "function draw() {\n" + statements_do + "};\n";
  return code;
};
