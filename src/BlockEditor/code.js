import Blockly from "blockly";

Blockly.JavaScript["setup"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code =
    "p5.setup = () => {\n  p5.createCanvas(CW, CH);\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["draw"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p5.draw = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["mouseX"] = function (block) {
  let code = "p5.mouseX";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mouseY"] = function (block) {
  let code = "p5.mouseY";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["ellipse"] = function (block) {
  let value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_y = Blockly.JavaScript.valueToCode(
    block,
    "y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_w = Blockly.JavaScript.valueToCode(
    block,
    "width",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_h = Blockly.JavaScript.valueToCode(
    block,
    "height",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code =
    "p5.ellipse(" +
    value_x +
    "," +
    value_y +
    "," +
    value_w +
    "," +
    value_h +
    ");\n";
  return code;
};

Blockly.JavaScript["rect"] = function (block) {
  let value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_y = Blockly.JavaScript.valueToCode(
    block,
    "y",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_w = Blockly.JavaScript.valueToCode(
    block,
    "width",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_h = Blockly.JavaScript.valueToCode(
    block,
    "height",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code =
    "p5.rect(" +
    value_x +
    "," +
    value_y +
    "," +
    value_w +
    "," +
    value_h +
    ");\n";
  return code;
};

Blockly.JavaScript["background"] = function (block) {
  let value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p5.background(" + value_name + ");\n";
  return code;
};

Blockly.JavaScript["fill"] = function (block) {
  let value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p5.fill(" + value_name + ");\n";
  return code;
};
