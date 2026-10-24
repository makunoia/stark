import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Text-CCgJA5il.js";import{n as i,t as a}from"./Stack-gfmtHat6.js";import{n as o,t as s}from"./Button-Dnc2Kear.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),n(),o(),c=t(),l={title:`Layout/Stack`,component:a,tags:[`autodocs`],argTypes:{vertical:{description:`Stacks are by default vertical`,control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},horizontal:{description:`A flag for horizontal stacks`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},width:{description:`Set width for this stack`,options:[`auto`,`full`,`fit`],control:{type:`select`},table:{type:{summary:`string`},defaultValue:{summary:`auto`}}},gap:{description:`Set a gap for items in this stack`,table:{type:{summary:`string`},default:{summary:`auto`}},options:[`2px`,`4px`,`6px`,`8px`,`10px`,`12px`,`14px`,`16px`,`18px`,`20px`,`24px`,`28px`,`32px`,`40px`,`60px`],control:{type:`select`}},justify:{description:`Justify items in this stack`,table:{type:{summary:`string`},default:{summary:`normal`}},options:[`normal`,`end`,`start`,`center`],control:{type:`select`}},align:{description:`Align items in this stack`,table:{type:{summary:`string`},default:{summary:`auto`}},options:[`start`,`end`,`center`,`baseline`],control:{type:`select`}},distribute:{description:`Distribute items in this stack`,table:{type:{summary:`string`},default:{summary:`auto`}},options:[`normal`,`between`,`around`,`evenly`,`stretch`],control:{type:`select`}}},args:{vertical:!0,gap:`8px`}},u={decorators:[e=>(0,c.jsx)(`div`,{style:{margin:`3em`,height:`200px`},children:(0,c.jsx)(e,{})})],render:({...e})=>(0,c.jsxs)(a,{...e,className:`h-full`,children:[(0,c.jsx)(r,{size:`lead`,weight:`bold`,className:`whitespace-nowrap`,children:`Title card`}),(0,c.jsx)(r,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas molestias, vitae sit animi enim. Voluptatem libero consectetur eligendi commodi.`})]})},d={...u},f={args:{gap:`4px`},parameters:{controls:{include:[`vertical`,`horizontal`]}},...u},p={...u,parameters:{controls:{include:[`gap`,`vertical`,`horizontal`]}}},m={parameters:{controls:{include:[`width`]}},args:{horizontal:!0,width:`auto`,justify:`center`,align:`center`,gap:`8px`},render:({...e})=>(0,c.jsxs)(a,{...e,children:[(0,c.jsx)(s,{label:`Login`,fullWidth:!0}),(0,c.jsx)(s,{label:`Sign up for an account`,fullWidth:!0})]})},h={decorators:[e=>(0,c.jsx)(`div`,{style:{margin:`3em`,height:`200px`},children:(0,c.jsx)(e,{})})],parameters:{controls:{include:[`vertical`,`horizontal`,`justify`,`align`,`distribute`,`gap`]}},render:({...e})=>(0,c.jsxs)(a,{...e,className:`h-full`,children:[(0,c.jsx)(r,{size:`section`,children:`Stack Playground`}),(0,c.jsx)(s,{label:`Login`}),(0,c.jsx)(s,{label:`Sign up for an account`})]})},g=[`preview`,`direction`,`gap`,`width`,`positioning`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...StackTemplate
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    gap: "4px"
  },
  parameters: {
    controls: {
      include: ["vertical", "horizontal"]
    }
  },
  ...StackTemplate
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...StackTemplate,
  parameters: {
    controls: {
      include: ["gap", "vertical", "horizontal"]
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["width"]
    }
  },
  args: {
    horizontal: true,
    width: "auto",
    justify: "center",
    align: "center",
    gap: "8px"
  },
  render: ({
    ...args
  }) => <Stack {...args}>
      <Button label="Login" fullWidth />
      <Button label="Sign up for an account" fullWidth />
    </Stack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    margin: "3em",
    height: "200px"
  }}>
        <Story />
      </div>],
  parameters: {
    controls: {
      include: ["vertical", "horizontal", "justify", "align", "distribute", "gap"]
    }
  },
  render: ({
    ...args
  }) => <Stack {...args} className="h-full">
      <Text size="section">Stack Playground</Text>
      <Button label="Login" />
      <Button label="Sign up for an account" />
    </Stack>
}`,...h.parameters?.docs?.source}}}})))()}_();export{g as __namedExportsOrder,l as default,f as direction,p as gap,h as positioning,d as preview,m as width};