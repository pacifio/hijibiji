import Blockly from "blockly";

Blockly.Blocks["setup"] = {
  init: function () {
    this.appendDummyInput().appendField("সেটআপ");
    this.appendStatementInput("do").setCheck(null).appendField("চলবে");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("স্কেচ শুরু হওয়ার সময় শুধুমাত্র একবার কল হয়");
    this.setHelpUrl("https://p5js.org/reference/#/p5/setup");
  },
};

Blockly.Blocks["draw"] = {
  init: function () {
    this.appendDummyInput().appendField("ড্রয়িং");
    this.appendStatementInput("do").setCheck(null).appendField("চলবে");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["noStroke"] = {
  init: function () {
    this.appendDummyInput().appendField("কোন স্ট্রোক থাকবে না");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["translate"] = {
  init: function () {
    this.appendDummyInput().appendField("ট্রান্সলেট");
    this.appendValueInput("x")
      .setCheck("Number")
      .appendField("এক্স (x) এক্সিস");
    this.appendValueInput("y").setCheck("Number").appendField("য় (y) এক্সিস");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/translate");
  },
};

Blockly.Blocks["rotate"] = {
  init: function () {
    this.appendDummyInput().appendField("রোটেট");
    this.appendValueInput("angle").setCheck("Number").appendField("অ্যাংগেল");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rotate");
  },
};

Blockly.Blocks["stroke"] = {
  init: function () {
    this.appendDummyInput().appendField("স্ট্রোক");
    this.appendValueInput("colour").setCheck("Colour").appendField("রং");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rotate");
  },
};

Blockly.Blocks["strokeWeight"] = {
  init: function () {
    this.appendDummyInput().appendField("স্ট্রোকের ঘনত্ব");
    this.appendValueInput("x").setCheck("Number").appendField("ঘনত্বের পরিমাণ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rotate");
  },
};

Blockly.Blocks["width"] = {
  init: function () {
    this.appendDummyInput().appendField("ক্যানভাসের দৈর্ঘ্য");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["height"] = {
  init: function () {
    this.appendDummyInput().appendField("ক্যানভাসের প্রস্থ");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["mouseX"] = {
  init: function () {
    this.appendDummyInput().appendField("মাউস এক্স(x) এক্সিস");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["mouseY"] = {
  init: function () {
    this.appendDummyInput().appendField("মাউস য়(y) এক্সিস");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["ellipse"] = {
  init: function () {
    this.appendDummyInput().appendField("বৃত্ত");
    this.appendValueInput("x")
      .setCheck("Number")
      .appendField("এক্স (x) এক্সিস");
    this.appendValueInput("y").setCheck("Number").appendField("য় (y) এক্সিস");
    this.appendValueInput("width").setCheck("Number").appendField("দৈর্ঘ্য");
    this.appendValueInput("height").setCheck("Number").appendField("প্রস্থ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
  },
};

Blockly.Blocks["rect"] = {
  init: function () {
    this.appendDummyInput().appendField("চতুর্ভুজ");
    this.appendValueInput("x")
      .setCheck("Number")
      .appendField("এক্স (x) এক্সিস");
    this.appendValueInput("y").setCheck("Number").appendField("য় (y) এক্সিস");
    this.appendValueInput("width").setCheck("Number").appendField("দৈর্ঘ্য");
    this.appendValueInput("height").setCheck("Number").appendField("প্রস্থ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি চতুর্ভুজ আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rect");
  },
};

Blockly.Blocks["triangle"] = {
  init: function () {
    this.appendDummyInput().appendField("ত্রিভুজ");
    this.appendValueInput("x1").setCheck("Number").appendField("এক্স ১");
    this.appendValueInput("y1").setCheck("Number").appendField("য় ১");
    this.appendValueInput("x2").setCheck("Number").appendField("এক্স ২");
    this.appendValueInput("y2").setCheck("Number").appendField("য় ২");
    this.appendValueInput("x3").setCheck("Number").appendField("এক্স ৩");
    this.appendValueInput("y3").setCheck("Number").appendField("য় ৩");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি ত্রিভুজ আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/triangle");
  },
};

Blockly.Blocks["background"] = {
  init: function () {
    this.appendDummyInput().appendField("ব্যাকগ্রাউন্ড");
    this.appendValueInput("NAME").setCheck("Colour").appendField("রং");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("ব্যাকগ্রাউন্ড কালার সেট করি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/background");
  },
};

Blockly.Blocks["fill"] = {
  init: function () {
    this.appendDummyInput().appendField("ফিল");
    this.appendValueInput("NAME").setCheck("Colour").appendField("রং");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("https://p5js.org/reference/#/p5/fill");
  },
};
