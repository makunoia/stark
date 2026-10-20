import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{c as n,y as r}from"./dist-FsUpKabh.js";import"./remixicon-BHfWlSbF.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Inputs/Buttons/Icon Button`,component:n,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{icon:{description:`A React element used as an icon for this button, no icon is provided by default`,control:!1},intent:{description:`Set what this button's intent is`,options:[`default`,`primary`,`info`,`success`,`warning`,`danger`],control:{type:`select`},table:{type:{summary:[`string`]},defaultValue:{summary:`default`}}},size:{description:`Set how big this button is`,options:[`default`,`small`,`large`],desription:`Test`,control:{type:`select`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},disabled:{description:`Disable this button to prevent interactions`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},loading:{description:`Give user system feedback regarding loading`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}},attached:{description:`Used to nest button in other components`,control:{type:`boolean`},table:{type:{summary:`boolean`},defaultValue:{summary:!1}}}},args:{intent:`default`,onClick:a()}},s={render:({...e})=>(0,i.jsx)(n,{...e,icon:(0,i.jsx)(`i`,{className:`ri-user-fill`})})},c={args:{intent:`default`},...s},l={parameters:{controls:{include:[`label`,`size`]}},args:{size:`large`,label:`Button`,intent:`default`},...s},u={parameters:{controls:{include:[`intent`,`disabled`,`loading`]}},args:{intent:`default`},...s},d=[`Default`,`Size`,`Status`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    intent: "default"
  },
  ...IconButtonTemplate
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
  },
  ...IconButtonTemplate
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["intent", "disabled", "loading"]
    }
  },
  args: {
    intent: "default"
  },
  ...IconButtonTemplate
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Default,l as Size,u as Status,d as __namedExportsOrder,o as default};