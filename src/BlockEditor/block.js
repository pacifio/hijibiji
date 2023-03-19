import Blockly from "blockly";

Blockly.Blocks["createCanvas"] = {
  init: function () {
    this.appendDummyInput().appendField("ক্যানভাস");
    this.appendValueInput("width").setCheck("Number").appendField("দৈর্ঘ্য");
    this.appendValueInput("height").setCheck("Number").appendField("প্রস্থ");
    this.appendValueInput("canvas")
      .setCheck("String")
      .appendField("ক্যানভাসের নাম");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

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
