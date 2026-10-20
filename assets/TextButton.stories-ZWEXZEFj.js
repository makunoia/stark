import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{g as n,y as r}from"./dist-FsUpKabh.js";import"./remixicon-BHfWlSbF.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Inputs/Buttons/Text Button`,component:n,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{label:{description:`Give a brief and meaningful label`,control:{type:`text`},table:{type:{summary:`string`},defaultValue:{summary:`Button`}}},intent:{description:`Set what this button's intent is`,options:[`default`,`primary`,`info`,`success`,`warning`,`danger`],control:{type:`select`},table:{type:{summary:[`string`]},defaultValue:{summary:`default`}}},size:{description:`Set how big this button is`,options:[`default`,`small`,`large`],desription:`Test`,control:{type:`select`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},leadingIcon:{description:`A React element used as an icon for this button, no icon is provided by default`,control:!1},trailingIcon:{description:`A React element used as an icon for this button, no icon is provided by default`,control:!1},fullWidth:{description:`Have this button take up the whole space`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},disabled:{description:`Disable this button to prevent interactions`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},loading:{description:`Give user system feedback regarding loading`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},attached:{description:`Used to nest button in other components`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}}},args:{label:`Button`,intent:`default`,onClick:a()}},s={args:{intent:`default`}},c={args:{intent:`primary`},parameters:{controls:{include:[`label`,`intent`]}}},l={parameters:{controls:{include:[`label`,`size`]}},args:{size:`large`,label:`Button`,intent:`default`}},u={parameters:{controls:{include:[`intent`,`disabled`,`loading`]}},args:{label:`Button`,intent:`default`}},d={args:{label:`Button`,intent:`default`},render:({...e})=>(0,i.jsx)(n,{...e,leadingIcon:(0,i.jsx)(`i`,{className:`ri-user-fill`})})},f={args:{label:`Button`,intent:`default`},render:({...e})=>(0,i.jsx)(n,{...e,trailingIcon:(0,i.jsx)(`i`,{className:`ri-arrow-right-line`})})},p={args:{label:`Button`,intent:`default`},render:({...e})=>(0,i.jsx)(n,{...e,trailingIcon:(0,i.jsx)(`i`,{className:`ri-arrow-right-line`}),leadingIcon:(0,i.jsx)(`i`,{className:`ri-user-fill`})})},m=[`Default`,`Intent`,`Size`,`Status`,`LeadingIcon`,`TrailingIcon`,`IconOnBothSides`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    intent: "default"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    intent: "primary"
  },
  parameters: {
    controls: {
      include: ["label", "intent"]
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["label", "size"]
    }
  },
  args: {
    size: "large",
    label: "Button",
    intent: "default"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["intent", "disabled", "loading"]
    }
  },
  args: {
    label: "Button",
    intent: "default"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button",
    intent: "default"
  },
  render: ({
    ...args
  }) => <TextButton {...args} leadingIcon={<i className="ri-user-fill"></i>} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button",
    intent: "default"
  },
  render: ({
    ...args
  }) => <TextButton {...args} trailingIcon={<i className="ri-arrow-right-line"></i>} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button",
    intent: "default"
  },
  render: ({
    ...args
  }) => <TextButton {...args} trailingIcon={<i className="ri-arrow-right-line"></i>} leadingIcon={<i className="ri-user-fill"></i>} />
}`,...p.parameters?.docs?.source}}}})))()}h();export{s as Default,p as IconOnBothSides,c as Intent,d as LeadingIcon,l as Size,u as Status,f as TrailingIcon,m as __namedExportsOrder,o as default};