import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Text-CCgJA5il.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),a={title:`Data Display/Text`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{children:{description:`String children are styled according to props`,table:{type:{summary:`ReactElement`},defaultValue:{summary:``}}},size:{description:`Set how big this text is depending on context`,table:{type:{summary:`string`},defaultValue:{summary:`body`}},options:[`body`,`body-large`,`caption`,`lead`,`section`,`title`],control:{type:`select`}},weight:{description:`Set this text's weight is depending on emphasis`,table:{type:{summary:`string`},defaultValue:{summary:`normal`}},options:[`normal`,`medium`,`semibold`,`bold`],control:{type:`select`}},leading:{description:`Set how far apart leading lines are depending on purpose/aesthetic`,table:{type:{summary:`string`},defaultValue:{summary:`monoline`}},options:[`monoline`,`tight`,`relaxed`,`loose`],control:{type:`select`}}},args:{}},o={render:({...e})=>(0,i.jsx)(r,{...e,children:e.children?e.children:`Lorem Ipsum`})},s={args:{size:`lead`,weight:`normal`},...o},c={parameters:{controls:{include:[`weight`]}},args:{size:`lead`,weight:`bold`},...o},l={parameters:{controls:{include:[`size`]}},args:{size:`lead`},...o},u={parameters:{controls:{include:[`size`,`leading`]}},argTypes:{size:{description:`Only applicable to body text`,table:{type:{summary:`string`},defaultValue:{summary:`body`}},control:!1}},args:{size:`body`,children:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vel repellendus, soluta error deserunt dolores cupiditate harum perferendis velit laudantium sit perspiciatis quam. Reprehenderit provident quam placeat officia, laudantium neque?`},...o},d={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-16px`,children:[(0,i.jsx)(r,{as:`h2`,size:`title`,children:`Heading semantics, independent size`}),(0,i.jsx)(r,{as:`p`,tone:`subtle`,children:`Supporting copy uses the same typography scale.`}),(0,i.jsx)(r,{as:`h6`,size:`body`,weight:`semibold`,children:`A sixth-level heading with body styling`})]})},f={render:()=>(0,i.jsxs)(`div`,{className:`text-danger text-caption font-semibold`,children:[(0,i.jsx)(r,{inherit:!0,children:`Inherit size, weight and color from the component.`}),(0,i.jsx)(r,{inherit:!0,tone:`success`,className:`block`,children:`Override just the semantic tone.`})]})},p={render:()=>(0,i.jsx)(r,{asChild:!0,tone:`primary`,weight:`medium`,children:(0,i.jsx)(`a`,{href:`#typography`,className:`underline`,children:`A styled link, without a wrapper`})})},m=[`Default`,`Weight`,`Size`,`Leading`,`Semantics`,`Inheritance`,`Composition`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-16px">
    <Text as="h2" size="title">Heading semantics, independent size</Text>
    <Text as="p" tone="subtle">Supporting copy uses the same typography scale.</Text>
    <Text as="h6" size="body" weight="semibold">A sixth-level heading with body styling</Text>
  </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="text-danger text-caption font-semibold">
    <Text inherit>Inherit size, weight and color from the component.</Text>
    <Text inherit tone="success" className="block">Override just the semantic tone.</Text>
  </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Text asChild tone="primary" weight="medium"><a href="#typography" className="underline">A styled link, without a wrapper</a></Text>
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Composition,s as Default,f as Inheritance,u as Leading,d as Semantics,l as Size,c as Weight,m as __namedExportsOrder,a as default};