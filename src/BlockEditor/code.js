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

Blockly.JavaScript["mousePressed"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p5.mousePressed = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["mouseDragged"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p5.mouseDragged = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["keyPressed"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p5.keyPressed = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["noStroke"] = function (block) {
  let code = "p5.noStroke();\n";
  return code;
};

Blockly.JavaScript["saveImage"] = function (block) {
  let code = "p5.save('sketch.png');\n";
  return code;
};

Blockly.JavaScript["saveGif"] = function (block) {
  let value_s = Blockly.JavaScript.valueToCode(
    block,
    "s",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p5.saveGif('sketch', " + value_s + ");\n";
  return code;
};

Blockly.JavaScript["translate"] = function (block) {
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

  let code = "p5.translate(" + value_x + "," + value_y + ");\n";
  return code;
};

Blockly.JavaScript["rotate"] = function (block) {
  let value_angle = Blockly.JavaScript.valueToCode(
    block,
    "angle",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p5.rotate(" + value_angle + ");\n";
  return code;
};

Blockly.JavaScript["stroke"] = function (block) {
  let value_colour = Blockly.JavaScript.valueToCode(
    block,
    "colour",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p5.stroke(" + value_colour + ");\n";
  return code;
};

Blockly.JavaScript["strokeWeight"] = function (block) {
  let value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p5.strokeWeight(" + value_x + ");\n";
  return code;
};

Blockly.JavaScript["width"] = function (block) {
  let code = "p5.width";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["height"] = function (block) {
  let code = "p5.height";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["frameCount"] = function (block) {
  let code = "p5.frameCount";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mouseX"] = function (block) {
  let code = "p5.mouseX";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mouseY"] = function (block) {
  let code = "p5.mouseY";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["keyCode"] = function (block) {
  let code = "p5.keyCode";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_backspace"] = function (block) {
  let code = "p5.BACKSPACE";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_delete"] = function (block) {
  let code = "p5.DELETE";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_enter"] = function (block) {
  let code = "p5.ENTER";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_return"] = function (block) {
  let code = "p5.RETURN";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_tab"] = function (block) {
  let code = "p5.TAB";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_esc"] = function (block) {
  let code = "p5.ESCAPE";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_shift"] = function (block) {
  let code = "p5.SHIFT";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_ctrl"] = function (block) {
  let code = "p5.CONTROL";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_option"] = function (block) {
  let code = "p5.OPTION";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_alt"] = function (block) {
  let code = "p5.ALT";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_up"] = function (block) {
  let code = "p5.UP_ARROW";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_down"] = function (block) {
  let code = "p5.DOWN_ARROW";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_left"] = function (block) {
  let code = "p5.LEFT_ARROW";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_right"] = function (block) {
  let code = "p5.RIGHT_ARROW";
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

Blockly.JavaScript["triangle"] = function (block) {
  let value_x_1 = Blockly.JavaScript.valueToCode(
    block,
    "x1",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_y_1 = Blockly.JavaScript.valueToCode(
    block,
    "y1",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let value_x_2 = Blockly.JavaScript.valueToCode(
    block,
    "x2",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_y_2 = Blockly.JavaScript.valueToCode(
    block,
    "y2",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let value_x_3 = Blockly.JavaScript.valueToCode(
    block,
    "x3",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_y_3 = Blockly.JavaScript.valueToCode(
    block,
    "y3",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code =
    "p5.triangle(" +
    value_x_1 +
    "," +
    value_y_1 +
    "," +
    value_x_2 +
    "," +
    value_y_2 +
    "," +
    value_x_3 +
    "," +
    value_y_3 +
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
