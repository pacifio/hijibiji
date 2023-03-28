const loadInitXml = () => {
  const saved = localStorage.getItem("xml");
  if (saved) {
    return saved;
  } else {
    return `
    <xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="setup">
        <value name="mode">
          <block type="mode2D"></block>
        </value>
        <statement name="do">
          <block type="background">
            <value name="NAME">
              <block type="colour_picker">
                <field name="COLOUR">#1a1a1e</field>
              </block>
            </value>
          </block>
        </statement>
        <next>
          <block type="draw">
            <statement name="do">
              <block type="fill">
                <value name="NAME">
                  <block type="colour_picker">
                    <field name="COLOUR">#ffffff</field>
                  </block>
                </value>
                <next>
                  <block type="ellipse">
                    <value name="x">
                      <block type="mouseX"></block>
                    </value>
                    <value name="y">
                      <block type="mouseY"></block>
                    </value>
                    <value name="width">
                      <block type="math_number">
                        <field name="NUM">50</field>
                      </block>
                    </value>
                    <value name="height">
                      <block type="math_number">
                        <field name="NUM">50</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </xml>
    `;
  }
};

export default loadInitXml;
