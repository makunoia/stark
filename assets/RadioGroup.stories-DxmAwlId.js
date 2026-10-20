import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{p as r,y as i}from"./dist-FsUpKabh.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{a=t(),i(),o=n(),s={title:`Inputs/RadioGroup`,component:r,tags:[`autodocs`],args:{label:`Email frequency`,name:`frequency`,defaultValue:`weekly`,options:[{value:`daily`,label:`Daily`,helpText:`A digest at the end of each day.`},{value:`weekly`,label:`Weekly`,helpText:`One summary every Monday.`},{value:`never`,label:`Never`}]},parameters:{layout:`padded`}},c={},l={args:{horizontal:!0,options:[{value:`daily`,label:`Daily`},{value:`weekly`,label:`Weekly`},{value:`never`,label:`Never`}]}},u={args:{defaultValue:void 0,error:!0,required:!0,helpText:`Choose an email frequency.`}},d={args:{disabled:!0}},f={args:{options:[{value:`daily`,label:`Daily`,disabled:!0},{value:`weekly`,label:`Weekly`},{value:`never`,label:`Never`}]}},p={render:function({defaultValue:e,...t}){let[n,i]=(0,a.useState)(e);return(0,o.jsx)(r,{...t,value:n,onValueChange:i})}},m=[`Default`,`Horizontal`,`Error`,`Disabled`,`DisabledOption`,`Controlled`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    options: [{
      value: "daily",
      label: "Daily"
    }, {
      value: "weekly",
      label: "Weekly"
    }, {
      value: "never",
      label: "Never"
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: undefined,
    error: true,
    required: true,
    helpText: "Choose an email frequency."
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "daily",
      label: "Daily",
      disabled: true
    }, {
      value: "weekly",
      label: "Weekly"
    }, {
      value: "never",
      label: "Never"
    }]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function ControlledRadioGroup({
    defaultValue,
    ...args
  }) {
    const [value, setValue] = useState(defaultValue);
    return <RadioGroup {...args} value={value} onValueChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{p as Controlled,c as Default,d as Disabled,f as DisabledOption,u as Error,l as Horizontal,m as __namedExportsOrder,s as default};