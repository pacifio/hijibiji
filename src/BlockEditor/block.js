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
