import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{l as n,y as r}from"./dist-FsUpKabh.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i=t(),a={title:`Inputs/Input`,component:n,decorators:[e=>(0,i.jsx)(`div`,{style:{margin:`3em`},children:(0,i.jsx)(e,{})})],parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{label:{description:`Give a brief and meaningful label`,control:{type:`text`},table:{type:{summary:`string`},defaultValue:{summary:`Button`}}},type:{description:`Select an appropriate type for your use case`,options:[`text`,`password`,`email`,`number`,`tel`,`url`],control:{type:`select`},table:{type:{summary:`string`},defaultValue:{summary:`text`}}},helpText:{description:`Provide additional context and guide`,control:{type:`text`},table:{type:{summary:`string`}}},fullWidth:{description:`Have this input take up the whole space`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},disabled:{description:`Disable this input to prevent interactions`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},optional:{description:`Let the user know if this field is optional`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},loading:{description:`Give user system feedback regarding loading`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},error:{description:`Give user system feedback regarding errors`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},hideLabel:{description:`Hide input label`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}}},args:{label:`Input field`}},o={args:{type:`email`,label:`Input text`,fullWidth:!0,disabled:!1,loading:!1,hideLabel:!1}},s={parameters:{controls:{include:[`type`,`optional`]}},argTypes:{optional:{description:`A password field is never optional`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}},control:!1},type:{description:`Insert a password field to a form`,table:{type:{summary:`boolean`},defaultValue:{summary:`password`}},control:!1}},args:{type:`password`}},c={args:{type:`text`,label:`Input text`,helpText:`This is a help text`,fullWidth:!1,disabled:!1,loading:!1,hideLabel:!1},parameters:{controls:{include:[`helpText`]}}},l={args:{hideLabel:!0},parameters:{controls:{include:[`hasLabel`]}}},u={args:{type:`text`,label:`Input text`,fullWidth:!0},parameters:{controls:{include:[`label`,`fullWidth`]}}},d={parameters:{controls:{include:[`loading`,`error`,`disabled`]}}},f=[`Default`,`Password`,`withHelpText`,`hiddenLabel`,`fullWidth`,`status`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "email",
    label: "Input text",
    fullWidth: true,
    disabled: false,
    loading: false,
    hideLabel: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["type", "optional"]
    }
  },
  argTypes: {
    optional: {
      description: "A password field is never optional",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "false"
        }
      },
      control: false
    },
    type: {
      description: "Insert a password field to a form",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: "password"
        }
      },
      control: false
    }
  },
  args: {
    type: "password"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    label: "Input text",
    helpText: "This is a help text",
    fullWidth: false,
    disabled: false,
    loading: false,
    hideLabel: false
  },
  parameters: {
    controls: {
      include: ["helpText"]
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    hideLabel: true
  },
  parameters: {
    controls: {
      include: ["hasLabel"]
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    label: "Input text",
    fullWidth: true
  },
  parameters: {
    controls: {
      include: ["label", "fullWidth"]
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["loading", "error", "disabled"]
    }
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{o as Default,s as Password,f as __namedExportsOrder,a as default,u as fullWidth,l as hiddenLabel,d as status,c as withHelpText};