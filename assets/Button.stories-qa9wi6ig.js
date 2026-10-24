import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t}from"./react-mGTKd6IE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Stack-gfmtHat6.js";import{n as a,t as o}from"./RemixIcon-qz_M35R2.js";import{n as s,t as c}from"./Button-Dnc2Kear.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{t(),s(),r(),a(),l=n(),u={title:`Actions/Button`,component:c,tags:[`autodocs`],args:{label:`Button`},argTypes:{variant:{options:[`solid`,`outline`,`text`],control:`select`},intent:{options:[`default`,`inverse`,`primary`,`info`,`success`,`warning`,`danger`],control:`select`},size:{options:[`small`,`default`,`large`],control:`select`}}},d={},f={args:{variant:`outline`,intent:`primary`}},p={args:{variant:`text`,intent:`info`}},m={render:()=>(0,l.jsx)(i,{horizontal:!0,align:`center`,gap:`12px`,children:[`small`,`default`,`large`].map(e=>(0,l.jsx)(c,{size:e,label:e,intent:`primary`},e))})},h={render:()=>(0,l.jsx)(i,{gap:`12px`,children:[`solid`,`outline`,`text`].map(e=>(0,l.jsx)(i,{horizontal:!0,gap:`12px`,className:`flex-wrap`,children:[`default`,`inverse`,`primary`,`info`,`success`,`warning`,`danger`].map(t=>(0,l.jsx)(c,{label:t,intent:t,variant:e},t))},e))})},g={args:{label:`Delete`,intent:`danger`,leadingIcon:(0,l.jsx)(o,{name:`delete-bin-fill`})}},_={args:{label:`Continue`,trailingIcon:(0,l.jsx)(o,{name:`arrow-right-line`})}},v={args:{disabled:!0,intent:`primary`}},y={args:{loading:!0,intent:`primary`}},b={args:{fullWidth:!0}},x={render:()=>(0,l.jsx)(c,{label:`View account`,asChild:!0,children:(0,l.jsx)(`a`,{href:`#account`,children:`View account`})})},S={args:{color:`success`,variant:`outline`,isLoading:!1,label:`Saved`}},C=[`Default`,`Outline`,`Text`,`Sizes`,`Intents`,`LeadingIcon`,`TrailingIcon`,`Disabled`,`Loading`,`FullWidth`,`Link`,`ArchivedProps`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    intent: "primary"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    intent: "info"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack horizontal align="center" gap="12px">
      {(["small", "default", "large"] as const).map(size => <Button key={size} size={size} label={size} intent="primary" />)}
    </Stack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="12px">
      {(["solid", "outline", "text"] as const).map(variant => <Stack key={variant} horizontal gap="12px" className="flex-wrap">
          {(["default", "inverse", "primary", "info", "success", "warning", "danger"] as const).map(intent => <Button key={intent} label={intent} intent={intent} variant={variant} />)}
        </Stack>)}
    </Stack>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Delete",
    intent: "danger",
    leadingIcon: <RemixIcon name="delete-bin-fill" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Continue",
    trailingIcon: <RemixIcon name="arrow-right-line" />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    intent: "primary"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    intent: "primary"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Button label="View account" asChild>
      <a href="#account">View account</a>
    </Button>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    color: "success",
    variant: "outline",
    isLoading: false,
    label: "Saved"
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as ArchivedProps,d as Default,v as Disabled,b as FullWidth,h as Intents,g as LeadingIcon,x as Link,y as Loading,f as Outline,m as Sizes,p as Text,_ as TrailingIcon,C as __namedExportsOrder,u as default};