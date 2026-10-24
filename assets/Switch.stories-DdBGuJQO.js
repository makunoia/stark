import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t}from"./react-mGTKd6IE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Stack-gfmtHat6.js";import{n as a,t as o}from"./Switch-BhBMapot.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s=t(),a(),r(),c=n(),l={title:`Inputs/Switch`,component:o,tags:[`autodocs`],args:{label:`Push notifications`,helpText:`Get notified when a project changes.`},parameters:{layout:`padded`}},u={},d={args:{defaultChecked:!0}},f={args:{error:!0,helpText:`This preference could not be saved. Try again.`}},p={render:e=>(0,c.jsxs)(i,{children:[(0,c.jsx)(o,{...e,disabled:!0}),(0,c.jsx)(o,{...e,disabled:!0,defaultChecked:!0,label:`Enabled and disabled`})]})},m={render:function(e){let[t,n]=(0,s.useState)(!1);return(0,c.jsx)(o,{...e,checked:t,onChange:e=>n(e.target.checked)})}},h={render:function(e){let[t,n]=(0,s.useState)(!1);return(0,c.jsx)(o,{...e,checked:t,onCheckedChange:n})}},g=[`Default`,`Enabled`,`Error`,`Disabled`,`Controlled`,`BooleanCallback`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    helpText: "This preference could not be saved. Try again."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Stack><Switch {...args} disabled /><Switch {...args} disabled defaultChecked label="Enabled and disabled" /></Stack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function ControlledSwitch(args) {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Example(args) {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as BooleanCallback,m as Controlled,u as Default,p as Disabled,d as Enabled,f as Error,g as __namedExportsOrder,l as default};