import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{m as r,r as i,y as a}from"./dist-FsUpKabh.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{o=t(),a(),s=n(),c={title:`Inputs/Checkbox`,component:i,tags:[`autodocs`],args:{label:`Email updates`,helpText:`Receive product news and announcements.`},parameters:{layout:`padded`}},l={},u={args:{defaultChecked:!0}},d={args:{indeterminate:!0,label:`Select all notifications`,helpText:`Some notifications are selected.`}},f={args:{error:!0,required:!0,label:`Accept the terms`,helpText:`Accept the terms to continue.`}},p={render:e=>(0,s.jsxs)(r,{children:[(0,s.jsx)(i,{...e,disabled:!0}),(0,s.jsx)(i,{...e,disabled:!0,defaultChecked:!0,label:`Selected and disabled`})]})},m={render:function(e){let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(i,{...e,checked:t,onChange:e=>n(e.target.checked)})}},h=[`Default`,`Checked`,`Mixed`,`Error`,`Disabled`,`Controlled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: "Select all notifications",
    helpText: "Some notifications are selected."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    required: true,
    label: "Accept the terms",
    helpText: "Accept the terms to continue."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Stack><Checkbox {...args} disabled /><Checkbox {...args} disabled defaultChecked label="Selected and disabled" /></Stack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function ControlledCheckbox(args) {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{u as Checked,m as Controlled,l as Default,p as Disabled,f as Error,d as Mixed,h as __namedExportsOrder,c as default};