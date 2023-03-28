import Blockly from "blockly";

Blockly.Blocks["setup"] = {
  init: function () {
    this.appendDummyInput().appendField("সেটআপ");
    this.appendValueInput("mode").setCheck(null).appendField("জ্যামিতিক মোড");
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

Blockly.Blocks["mode2D"] = {
  init: function () {
    this.appendDummyInput().appendField("দ্বিমাত্রিক মোড");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["mode3D"] = {
  init: function () {
    this.appendDummyInput().appendField("ত্রিমাত্রিক মোড");
    this.setOutput(true, null);
    this.setColour(290);
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

Blockly.Blocks["saveImage"] = {
  init: function () {
    this.appendDummyInput().appendField("ইমেজ সেভ কর");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["saveGif"] = {
  init: function () {
    this.appendDummyInput().appendField("গিফ সেভ কর");
    this.appendValueInput("s")
      .setCheck("Number")
      .appendField("কত সেকেন্ড চলবে");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/saveGif");
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

Blockly.Blocks["rotateX"] = {
  init: function () {
    this.appendDummyInput().appendField("রোটেট এক্স এক্সিস");
    this.appendValueInput("angle").setCheck("Number").appendField("অ্যাংগেল");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rotate");
  },
};

Blockly.Blocks["rotateY"] = {
  init: function () {
    this.appendDummyInput().appendField("রোটেট য় এক্সিস");
    this.appendValueInput("angle").setCheck("Number").appendField("অ্যাংগেল");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rotate");
  },
};

Blockly.Blocks["rotateZ"] = {
  init: function () {
    this.appendDummyInput().appendField("রোটেট জেড এক্সিস");
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

Blockly.Blocks["frameCount"] = {
  init: function () {
    this.appendDummyInput().appendField("চলমান ফ্রেম");
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

Blockly.Blocks["mousePressed"] = {
  init: function () {
    this.appendDummyInput().appendField("মাউস বাটন চাপ দিলে");
    this.appendStatementInput("do").setCheck(null).appendField("চলবে");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("মাউস চাপ দিলে কোড চলবে");
    this.setHelpUrl("https://p5js.org/reference/#/p5/mousePressed");
  },
};

Blockly.Blocks["mouseReleased"] = {
  init: function () {
    this.appendDummyInput().appendField("মাউস বাটন ছেড়ে দিলে");
    this.appendStatementInput("do").setCheck(null).appendField("চলবে");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("মাউস চাপ দিলে কোড চলবে");
    this.setHelpUrl("https://p5js.org/reference/#/p5/mousePressed");
  },
};

Blockly.Blocks["mouseDragged"] = {
  init: function () {
    this.appendDummyInput().appendField("মাউস ধরে রাখলে");
    this.appendStatementInput("do").setCheck(null).appendField("চলবে");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("মাউস চাপ দিলে কোড চলবে");
    this.setHelpUrl("https://p5js.org/reference/#/p5/mousePressed");
  },
};

Blockly.Blocks["keyPressed"] = {
  init: function () {
    this.appendDummyInput().appendField("কিবোর্ড চাপলে");
    this.appendStatementInput("do").setCheck(null).appendField("চলবে");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("কিবোর্ডে কী চাপ দিলে কোড চলবে");
    this.setHelpUrl("https://p5js.org/reference/#/p5/keyPressed");
  },
};

Blockly.Blocks["keyCode"] = {
  init: function () {
    this.appendDummyInput().appendField("বর্তমান কী");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_backspace"] = {
  init: function () {
    this.appendDummyInput().appendField("ব্যাকস্পেস কী (backspace)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_delete"] = {
  init: function () {
    this.appendDummyInput().appendField("ডিলিট কী (delete)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_enter"] = {
  init: function () {
    this.appendDummyInput().appendField("এন্টার কী (enter)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_return"] = {
  init: function () {
    this.appendDummyInput().appendField("রিটার্ন কী (return)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_tab"] = {
  init: function () {
    this.appendDummyInput().appendField("ট্যাব কী (tab)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_esc"] = {
  init: function () {
    this.appendDummyInput().appendField("এস্কেপ কী (esc)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_shift"] = {
  init: function () {
    this.appendDummyInput().appendField("শিফট কী (shift)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_ctrl"] = {
  init: function () {
    this.appendDummyInput().appendField("কন্ট্রোল কী (ctrl)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_option"] = {
  init: function () {
    this.appendDummyInput().appendField("অপশন কী (option)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_alt"] = {
  init: function () {
    this.appendDummyInput().appendField("ওলট কী (alt)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_up"] = {
  init: function () {
    this.appendDummyInput().appendField("আপ অ্যারো কী (up)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_down"] = {
  init: function () {
    this.appendDummyInput().appendField("ডাউন অ্যারো কী কী (down)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_left"] = {
  init: function () {
    this.appendDummyInput().appendField("লেফট অ্যারো কী (left)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["key_right"] = {
  init: function () {
    this.appendDummyInput().appendField("রাইট অ্যারো কী (right)");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["line"] = {
  init: function () {
    this.appendDummyInput().appendField("সরলরেখা");
    this.appendValueInput("x1").setCheck("Number").appendField("এক্স ১");
    this.appendValueInput("y1").setCheck("Number").appendField("য় ১");
    this.appendValueInput("x2").setCheck("Number").appendField("এক্স ২");
    this.appendValueInput("y2").setCheck("Number").appendField("য় ২");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
  },
};

Blockly.Blocks["ellipse"] = {
  init: function () {
    this.appendDummyInput().appendField("উপবৃত্ত");
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

Blockly.Blocks["arc"] = {
  init: function () {
    this.appendDummyInput().appendField("বৃত্তচাপ");
    this.appendValueInput("x")
      .setCheck("Number")
      .appendField("এক্স (x) এক্সিস");
    this.appendValueInput("y").setCheck("Number").appendField("য় (y) এক্সিস");
    this.appendValueInput("width").setCheck("Number").appendField("দৈর্ঘ্য");
    this.appendValueInput("height").setCheck("Number").appendField("প্রস্থ");
    this.appendValueInput("start").setCheck("Number").appendField("শুরু");
    this.appendValueInput("stop").setCheck("Number").appendField("শেষ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি বৃত্ত আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
  },
};

Blockly.Blocks["circle"] = {
  init: function () {
    this.appendDummyInput().appendField("বৃত্ত");
    this.appendValueInput("x")
      .setCheck("Number")
      .appendField("এক্স (x) এক্সিস");
    this.appendValueInput("y").setCheck("Number").appendField("য় (y) এক্সিস");
    this.appendValueInput("r").setCheck("Number").appendField("পরিধি");
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

Blockly.Blocks["box"] = {
  init: function () {
    this.appendDummyInput().appendField("ঘনক");
    this.appendValueInput("width").setCheck("Number").appendField("দৈর্ঘ্য");
    this.appendValueInput("height").setCheck("Number").appendField("প্রস্থ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip("একটি ত্রিভুজ আঁকি");
    this.setHelpUrl("https://p5js.org/reference/#/p5/triangle");
  },
};

Blockly.Blocks["cylinder"] = {
  init: function () {
    this.appendDummyInput().appendField("সিলিন্ডার");
    this.appendValueInput("width").setCheck("Number").appendField("দৈর্ঘ্য");
    this.appendValueInput("height").setCheck("Number").appendField("প্রস্থ");
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
