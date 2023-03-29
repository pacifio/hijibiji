import Blockly from "blockly";

Blockly.JavaScript["setup"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code =
    "p.setup = () => {\n  p.createCanvas(CW, CH);\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["draw"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p.draw = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["mode2D"] = function (block) {
  let code = "p.P2D";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mode3D"] = function (block) {
  let code = "p.WEBGL";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mousePressed"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p.mousePressed = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["mouseReleased"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p.mouseReleased = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["mouseDragged"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p.mouseDragged = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["keyPressed"] = function (block) {
  let statements_do = Blockly.JavaScript.statementToCode(block, "do");
  let code = "p.keyPressed = () => {\n" + statements_do + "};\n";
  return code;
};

Blockly.JavaScript["noStroke"] = function (block) {
  let code = "p.noStroke();\n";
  return code;
};

Blockly.JavaScript["saveImage"] = function (block) {
  let code = "p.save('sketch.png');\n";
  return code;
};

Blockly.JavaScript["saveGif"] = function (block) {
  let value_s = Blockly.JavaScript.valueToCode(
    block,
    "s",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p.saveGif('sketch', " + value_s + ");\n";
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

  let code = "p.translate(" + value_x + "," + value_y + ");\n";
  return code;
};

Blockly.JavaScript["rotate"] = function (block) {
  let value_angle = Blockly.JavaScript.valueToCode(
    block,
    "angle",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p.rotate(" + value_angle + ");\n";
  return code;
};

Blockly.JavaScript["stroke"] = function (block) {
  let value_colour = Blockly.JavaScript.valueToCode(
    block,
    "colour",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p.stroke(" + value_colour + ");\n";
  return code;
};

Blockly.JavaScript["strokeWeight"] = function (block) {
  let value_x = Blockly.JavaScript.valueToCode(
    block,
    "x",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p.strokeWeight(" + value_x + ");\n";
  return code;
};

Blockly.JavaScript["width"] = function (block) {
  let code = "p.width";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["height"] = function (block) {
  let code = "p.height";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["frameCount"] = function (block) {
  let code = "p.frameCount";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mouseX"] = function (block) {
  let code = "p.mouseX";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["mouseY"] = function (block) {
  let code = "p.mouseY";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["keyCode"] = function (block) {
  let code = "p.keyCode";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_backspace"] = function (block) {
  let code = "p.BACKSPACE";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_delete"] = function (block) {
  let code = "p.DELETE";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_enter"] = function (block) {
  let code = "p.ENTER";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_return"] = function (block) {
  let code = "p.RETURN";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_tab"] = function (block) {
  let code = "p.TAB";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_esc"] = function (block) {
  let code = "p.ESCAPE";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_shift"] = function (block) {
  let code = "p.SHIFT";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_ctrl"] = function (block) {
  let code = "p.CONTROL";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_option"] = function (block) {
  let code = "p.OPTION";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_alt"] = function (block) {
  let code = "p.ALT";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_up"] = function (block) {
  let code = "p.UP_ARROW";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_down"] = function (block) {
  let code = "p.DOWN_ARROW";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_left"] = function (block) {
  let code = "p.LEFT_ARROW";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["key_right"] = function (block) {
  let code = "p.RIGHT_ARROW";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["line"] = function (block) {
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

  let code =
    "p.line(" +
    value_x_1 +
    "," +
    value_y_1 +
    "," +
    value_x_2 +
    "," +
    value_y_2 +
    ");\n";
  return code;
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
    "p.ellipse(" +
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

Blockly.JavaScript["arc"] = function (block) {
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
  let value_start = Blockly.JavaScript.valueToCode(
    block,
    "start",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  let value_stop = Blockly.JavaScript.valueToCode(
    block,
    "stop",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code =
    "p.arc(" +
    value_x +
    "," +
    value_y +
    "," +
    value_w +
    "," +
    value_h +
    "," +
    value_start +
    "," +
    value_stop +
    ");\n";
  return code;
};

Blockly.JavaScript["circle"] = function (block) {
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
  let value_r = Blockly.JavaScript.valueToCode(
    block,
    "r",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p.circle(" + value_x + "," + value_y + "," + value_r + ");\n";
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
    "p.rect(" +
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
    "p.triangle(" +
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

  let code = "p.background(" + value_name + ");\n";
  return code;
};

Blockly.JavaScript["fill"] = function (block) {
  let value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p.fill(" + value_name + ");\n";
  return code;
};

Blockly.JavaScript["textCanvas"] = function (block) {
  let value_text = Blockly.JavaScript.valueToCode(
    block,
    "text",
    Blockly.JavaScript.ORDER_ATOMIC
  );

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

  let code = "p.text(" + value_text + "," + value_x + "," + value_y + ");\n";
  return code;
};

Blockly.JavaScript["textSize"] = function (block) {
  let value_size = Blockly.JavaScript.valueToCode(
    block,
    "size",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  let code = "p.textSize(" + value_size + ");\n";
  return code;
};

Blockly.JavaScript["mousePositionDebug"] = function (block) {
  let text = `"(" + p.mouseX + "," + p.mouseY + ")"`;
  let code = `p.text(${text}, p.mouseX + 10, p.mouseY);\n`;
  return code;
};

Blockly.JavaScript["mouseGrid"] = function (block) {
  let line1 = `p.line(p.mouseX, 0, p.mouseX, p.height);\n`;
  let line2 = `p.line(0, p.mouseY, p.width, p.mouseY);\n`;
  let code = line1 + line2;
  return code;
};

Blockly.JavaScript["clear"] = function (block) {
  let code = `p.clear();\n`;
  return code;
};
