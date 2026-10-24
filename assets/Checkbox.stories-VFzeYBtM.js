import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t}from"./react-mGTKd6IE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Stack-gfmtHat6.js";import{n as a,t as o}from"./Checkbox-CCP5VFBJ.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{s=t(),a(),r(),c=n(),l={title:`Inputs/Checkbox`,component:o,tags:[`autodocs`],args:{label:`Email updates`,helpText:`Receive product news and announcements.`},parameters:{layout:`padded`}},u={},d={args:{defaultChecked:!0}},f={args:{indeterminate:!0,label:`Select all notifications`,helpText:`Some notifications are selected.`}},p={args:{error:!0,required:!0,label:`Accept the terms`,helpText:`Accept the terms to continue.`}},m={render:e=>(0,c.jsxs)(i,{children:[(0,c.jsx)(o,{...e,disabled:!0}),(0,c.jsx)(o,{...e,disabled:!0,defaultChecked:!0,label:`Selected and disabled`})]})},h={render:function(e){let[t,n]=(0,s.useState)(!1);return(0,c.jsx)(o,{...e,checked:t,onChange:e=>n(e.target.checked)})}},g={args:{contained:!0,label:`Selected option`,defaultChecked:!0}},_=[`Default`,`Checked`,`Mixed`,`Error`,`Disabled`,`Controlled`,`Contained`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Select all notifications",
    helpText: "Some notifications are selected."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    required: true,
    label: "Accept the terms",
    helpText: "Accept the terms to continue."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Stack><Checkbox {...args} disabled /><Checkbox {...args} disabled defaultChecked label="Selected and disabled" /></Stack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function ControlledCheckbox(args) {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    contained: true,
    label: "Selected option",
    defaultChecked: true
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{d as Checked,g as Contained,h as Controlled,u as Default,m as Disabled,p as Error,f as Mixed,_ as __namedExportsOrder,l as default};