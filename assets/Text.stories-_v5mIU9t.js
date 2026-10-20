import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{_ as n,y as r}from"./dist-FsUpKabh.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),i=t(),a={title:`Atoms/Text`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{children:{description:`String children are styled according to props`,table:{type:{summary:`ReactElement`},defaultValue:{summary:``}}},size:{description:`Set how big this text is depending on context`,table:{type:{summary:`string`},defaultValue:{summary:`body`}},options:[`body`,`body-large`,`caption`,`lead`,`section`,`title`],control:{type:`select`}},weight:{description:`Set this text's weight is depending on emphasis`,table:{type:{summary:`string`},defaultValue:{summary:`normal`}},options:[`normal`,`medium`,`semibold`,`bold`],control:{type:`select`}},leading:{description:`Set how far apart leading lines are depending on purpose/aesthetic`,table:{type:{summary:`string`},defaultValue:{summary:`monoline`}},options:[`monoline`,`tight`,`relaxed`,`loose`],control:{type:`select`}}},args:{}},o={render:({...e})=>(0,i.jsx)(n,{...e,children:e.children?e.children:`Lorem Ipsum`})},s={args:{size:`lead`,weight:`normal`},...o},c={parameters:{controls:{include:[`weight`]}},args:{size:`lead`,weight:`bold`},...o},l={parameters:{controls:{include:[`size`]}},args:{size:`lead`},...o},u={parameters:{controls:{include:[`size`,`leading`]}},argTypes:{size:{description:`Only applicable to body text`,table:{type:{summary:`string`},defaultValue:{summary:`body`}},control:!1}},args:{size:`body`,children:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vel repellendus, soluta error deserunt dolores cupiditate harum perferendis velit laudantium sit perspiciatis quam. Reprehenderit provident quam placeat officia, laudantium neque?`},...o},d=[`Default`,`Weight`,`Size`,`Leading`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lead",
    weight: "normal"
  },
  ...TextTemplate
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["weight"]
    }
  },
  args: {
    size: "lead",
    weight: "bold"
  },
  ...TextTemplate
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["size"]
    }
  },
  args: {
    size: "lead"
  },
  ...TextTemplate
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["size", "leading"]
    }
  },
  argTypes: {
    size: {
      description: "Only applicable to body text",
      table: {
        type: {
          summary: "string"
        },
        defaultValue: {
          summary: "body"
        }
      },
      control: false
    }
  },
  args: {
    size: "body",
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vel repellendus, soluta error deserunt dolores cupiditate harum perferendis velit laudantium sit perspiciatis quam. Reprehenderit provident quam placeat officia, laudantium neque?"
  },
  ...TextTemplate
}`,...u.parameters?.docs?.source}}}})))()}f();export{s as Default,u as Leading,l as Size,c as Weight,d as __namedExportsOrder,a as default};