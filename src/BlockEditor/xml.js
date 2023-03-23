const INIT_XML = (w, h) => `
<xml xmlns="http://www.w3.org/1999/xhtml">
  <block type="setup">
    <statement name="do">
      <block type="background">
        <value name="NAME">
          <block type="math_number">
            <field name="NUM">255</field>
          </block>
        </value>
      </block>
    </statement>
  </block>
</xml>
`;

export default INIT_XML;
