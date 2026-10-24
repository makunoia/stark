import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n}from"./react-mGTKd6IE.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./RemixIcon-qz_M35R2.js";import{n as o,t as s}from"./Button-Dnc2Kear.js";import{n as c,t as l}from"./Input-CVvvYcKa.js";import{n as u,t as d}from"./TextField-C86RcF9J.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{f=e(n(),1),u(),c(),o(),i(),p=r(),m={title:`Inputs/TextField`,component:d,subcomponents:{Input:l},tags:[`autodocs`],args:{label:`Text field`,placeholder:`Enter text`,fullWidth:!0},parameters:{docs:{description:{component:`One field implementation: TextField supports text and textarea modes; Input retains its native input ref API. Both accept string/boolean errors, loading, adornments and attached actions.`}}}},h={},g={args:{type:`email`,label:`Email`,placeholder:`you@example.com`}},_={args:{type:`password`,label:`Password`,defaultValue:`password`}},v={args:{type:`number`,label:`Quantity`,min:0}},y={args:{type:`textarea`,rows:3,label:`Notes`}},b={args:{optional:!0}},x={args:{helpText:`Use your work email.`}},S={args:{error:`Please enter a valid value.`}},C={args:{disabled:!0,defaultValue:`Unavailable`}},w={args:{readOnly:!0,defaultValue:`Read only`}},T={args:{loading:!0,defaultValue:`Checking availability`}},E={args:{leadingItem:(0,p.jsx)(a,{name:`user-fill`}),trailingItem:(0,p.jsx)(a,{name:`check-line`})}},D={args:{attachedButton:{label:`Search`,remixIcon:`search-line`}}},O={render:function(e){let[t,n]=(0,f.useState)(``);return(0,p.jsx)(d,{...e,value:t,onChange:e=>n(e.target.value),labelAction:{label:`Reset`,action:()=>n(``)}})}},k={render:function(){let e=(0,f.useRef)(null);return(0,p.jsxs)(`div`,{className:`flex flex-col gap-12px`,children:[(0,p.jsx)(l,{ref:e,label:`Native input ref`,fullWidth:!0,error:!0,helpText:`Boolean errors retain the help text API`,trailingButton:{label:`Find`}}),(0,p.jsx)(s,{label:`Focus input`,onClick:()=>e.current?.focus()})]})}},A=[`Default`,`Email`,`Password`,`Number`,`Multiline`,`Optional`,`HelpText`,`Error`,`Disabled`,`ReadOnly`,`Loading`,`Adornments`,`AttachedAction`,`LabelAction`,`InputCompatibility`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: "email",
    label: "Email",
    placeholder: "you@example.com"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    label: "Password",
    defaultValue: "password"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number",
    label: "Quantity",
    min: 0
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: "textarea",
    rows: 3,
    label: "Notes"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    helpText: "Use your work email."
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Please enter a valid value."
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "Unavailable"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    defaultValue: "Read only"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    defaultValue: "Checking availability"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    leadingItem: <RemixIcon name="user-fill" />,
    trailingItem: <RemixIcon name="check-line" />
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    attachedButton: {
      label: "Search",
      remixIcon: "search-line"
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: function Example(args) {
    const [value, setValue] = useState("");
    return <TextField {...args} value={value} onChange={event => setValue(event.target.value)} labelAction={{
      label: "Reset",
      action: () => setValue("")
    }} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Example() {
    const ref = useRef<HTMLInputElement>(null);
    return <div className="flex flex-col gap-12px">
        <Input ref={ref} label="Native input ref" fullWidth error helpText="Boolean errors retain the help text API" trailingButton={{
        label: "Find"
      }} />
        <Button label="Focus input" onClick={() => ref.current?.focus()} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{E as Adornments,D as AttachedAction,h as Default,C as Disabled,g as Email,S as Error,x as HelpText,k as InputCompatibility,O as LabelAction,T as Loading,y as Multiline,v as Number,b as Optional,_ as Password,w as ReadOnly,A as __namedExportsOrder,m as default};