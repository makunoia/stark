import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{h as r,m as i,y as a}from"./dist-FsUpKabh.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),a(),s=n(),c={title:`Inputs/Switch`,component:r,tags:[`autodocs`],args:{label:`Push notifications`,helpText:`Get notified when a project changes.`},parameters:{layout:`padded`}},l={},u={args:{defaultChecked:!0}},d={args:{error:!0,helpText:`This preference could not be saved. Try again.`}},f={render:e=>(0,s.jsxs)(i,{children:[(0,s.jsx)(r,{...e,disabled:!0}),(0,s.jsx)(r,{...e,disabled:!0,defaultChecked:!0,label:`Enabled and disabled`})]})},p={render:function(e){let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(r,{...e,checked:t,onChange:e=>n(e.target.checked)})}},m=[`Default`,`Enabled`,`Error`,`Disabled`,`Controlled`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    helpText: "This preference could not be saved. Try again."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Stack><Switch {...args} disabled /><Switch {...args} disabled defaultChecked label="Enabled and disabled" /></Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function ControlledSwitch(args) {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onChange={event => setChecked(event.target.checked)} />;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Controlled,l as Default,f as Disabled,u as Enabled,d as Error,m as __namedExportsOrder,c as default};