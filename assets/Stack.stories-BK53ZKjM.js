import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{_ as n,m as r,n as i,y as a}from"./dist-FsUpKabh.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a(),o=t(),s={title:`Atoms/Stack`,component:r,tags:[`autodocs`],argTypes:{vertical:{description:`Stacks are by default vertical`,control:!1,table:{type:{summary:`boolean`},defaultValue:{summary:`true`}}},horizontal:{description:`A flag for horizontal stacks`,control:`boolean`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`}}},width:{description:`Set width for this stack`,options:[`auto`,`full`,`fit`],control:{type:`select`},table:{type:{summary:`string`},defaultValue:{summary:`auto`}}},gap:{description:`Set a gap for items in this stack`,table:{type:{summary:`string`},default:{summary:`auto`}},options:[`2px`,`4px`,`6px`,`8px`,`10px`,`12px`,`14px`,`16px`,`18px`,`20px`,`24px`,`28px`,`32px`,`40px`,`60px`],control:{type:`select`}},justify:{description:`Justify items in this stack`,table:{type:{summary:`string`},default:{summary:`normal`}},options:[`normal`,`end`,`start`,`center`],control:{type:`select`}},align:{description:`Align items in this stack`,table:{type:{summary:`string`},default:{summary:`auto`}},options:[`start`,`end`,`center`,`baseline`],control:{type:`select`}},distribute:{description:`Distribute items in this stack`,table:{type:{summary:`string`},default:{summary:`auto`}},options:[`normal`,`between`,`around`,`evenly`,`stretch`],control:{type:`select`}}},args:{vertical:!0,gap:`8px`}},c={decorators:[e=>(0,o.jsx)(`div`,{style:{margin:`3em`,height:`200px`},children:(0,o.jsx)(e,{})})],render:({...e})=>(0,o.jsxs)(r,{...e,className:`h-full`,children:[(0,o.jsx)(n,{size:`lead`,weight:`bold`,className:`whitespace-nowrap`,children:`Title card`}),(0,o.jsx)(n,{children:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas molestias, vitae sit animi enim. Voluptatem libero consectetur eligendi commodi.`})]})},l={...c},u={args:{gap:`4px`},parameters:{controls:{include:[`vertical`,`horizontal`]}},...c},d={...c,parameters:{controls:{include:[`gap`,`vertical`,`horizontal`]}}},f={parameters:{controls:{include:[`width`]}},args:{horizontal:!0,width:`auto`,justify:`center`,align:`center`,gap:`8px`},render:({...e})=>(0,o.jsxs)(r,{...e,children:[(0,o.jsx)(i,{label:`Login`,fullWidth:!0}),(0,o.jsx)(i,{label:`Sign up for an account`,fullWidth:!0})]})},p={decorators:[e=>(0,o.jsx)(`div`,{style:{margin:`3em`,height:`200px`},children:(0,o.jsx)(e,{})})],parameters:{controls:{include:[`vertical`,`horizontal`,`justify`,`align`,`distribute`,`gap`]}},render:({...e})=>(0,o.jsxs)(r,{...e,className:`h-full`,children:[(0,o.jsx)(n,{size:`section`,children:`Stack Playground`}),(0,o.jsx)(i,{label:`Login`}),(0,o.jsx)(i,{label:`Sign up for an account`})]})},m=[`preview`,`direction`,`gap`,`width`,`positioning`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...StackTemplate
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    gap: "4px"
  },
  parameters: {
    controls: {
      include: ["vertical", "horizontal"]
    }
  },
  ...StackTemplate
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...StackTemplate,
  parameters: {
    controls: {
      include: ["gap", "vertical", "horizontal"]
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{m as __namedExportsOrder,s as default,u as direction,d as gap,p as positioning,l as preview,f as width};