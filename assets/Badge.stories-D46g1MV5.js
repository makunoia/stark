import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n}from"./react-mGTKd6IE.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Stack-gfmtHat6.js";import{n as o,t as s}from"./RemixIcon-qz_M35R2.js";import{n as c,t as l}from"./Badge-COF47dTB.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{u=e(n(),1),c(),i(),o(),d=r(),f={title:`Data Display/Badge`,component:l,tags:[`autodocs`],args:{label:`Badge`},argTypes:{variant:{options:[`solid`,`outline`,`status`],control:`select`},intent:{options:[`default`,`inverse`,`primary`,`info`,`success`,`warning`,`danger`],control:`select`}}},p={},m={args:{variant:`outline`,intent:`success`}},h={args:{circular:!0,color:`primary`}},g={args:{leadingIcon:(0,d.jsx)(s,{name:`price-tag-3-line`})}},_={args:{trailingIcon:(0,d.jsx)(s,{name:`arrow-right-up-line`})}},v={args:{leadingItem:(0,d.jsx)(s,{name:`price-tag-3-line`}),trailingIcon:(0,d.jsx)(s,{name:`check-line`})}},y={args:{variant:`status`,intent:`success`,label:`Published`}},b={args:{variant:`status`,appearance:`outline`,intent:`success`,label:`Published`}},x={render:()=>(0,d.jsx)(a,{horizontal:!0,gap:`12px`,className:`flex-wrap`,children:[`default`,`inverse`,`primary`,`info`,`success`,`warning`,`danger`].map(e=>(0,d.jsx)(l,{label:e,intent:e},e))})},S={render:function(e){let[t,n]=(0,u.useState)(!0);return t?(0,d.jsx)(l,{...e,label:`Filter`,color:`primary`,dismissible:!0,onDismiss:()=>n(!1)}):(0,d.jsx)(`button`,{onClick:()=>n(!0),children:`Restore badge`})}},C=[`Default`,`Outline`,`Circular`,`LeadingIcon`,`TrailingIcon`,`BothIcons`,`Status`,`StatusOutline`,`Intents`,`Dismissible`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    intent: "success"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    circular: true,
    color: "primary"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    leadingIcon: <RemixIcon name="price-tag-3-line" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    trailingIcon: <RemixIcon name="arrow-right-up-line" />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    leadingItem: <RemixIcon name="price-tag-3-line" />,
    trailingIcon: <RemixIcon name="check-line" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "status",
    intent: "success",
    label: "Published"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "status",
    appearance: "outline",
    intent: "success",
    label: "Published"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack horizontal gap="12px" className="flex-wrap">
      {(["default", "inverse", "primary", "info", "success", "warning", "danger"] as const).map(intent => <Badge key={intent} label={intent} intent={intent} />)}
    </Stack>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Example(args) {
    const [visible, setVisible] = useState(true);
    return visible ? <Badge {...args} label="Filter" color="primary" dismissible onDismiss={() => setVisible(false)} /> : <button onClick={() => setVisible(true)}>Restore badge</button>;
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{v as BothIcons,h as Circular,p as Default,S as Dismissible,x as Intents,g as LeadingIcon,m as Outline,y as Status,b as StatusOutline,_ as TrailingIcon,C as __namedExportsOrder,f as default};