import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n}from"./react-mGTKd6IE.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./SelectControl-BqgrtP8b.js";function o({value:e,defaultValue:t,multiple:n=!1,onChange:r,options:i,label:o=``,fullWidth:c=!0,className:l,...u}){let d=e=>`${typeof e}:${e}`,f=e=>{let t=i.find(t=>d(t.value)===e);return t?t.value:e.startsWith(`number:`)?Number(e.slice(7)):e.startsWith(`string:`)?e.slice(7):``},p=e=>(Array.isArray(e)?e:e===``?[]:[e]).map(d),m={...u,label:o||u.placeholder||`Select an option`,hideLabel:!o,formValue:e=>String(f(e)),fullWidth:c,containerClassName:l,options:i.map(e=>({...e,value:d(e.value)}))};return n?(0,s.jsx)(a,{...m,multiple:!0,value:e==null?void 0:p(e),defaultValue:t===void 0?void 0:p(t),onValueChange:e=>r?.(e.map(f))}):(0,s.jsx)(a,{...m,value:e==null?void 0:Array.isArray(e)?e.length?d(e[0]):``:e===``?``:d(e),defaultValue:t===void 0?void 0:Array.isArray(t)?t.length?d(t[0]):``:t===``?``:d(t),onValueChange:e=>r?.(f(e))})}var s;function c(){return(c=t((()=>{i(),s=r()})))()}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{l=e(n(),1),c(),i(),u=r(),d=[{id:`zero`,label:`Zero`,value:0},{id:`one`,label:`One`,value:1},{id:`disabled`,label:`Unavailable`,value:2,disabled:!0}],f={title:`Inputs/Select`,component:o,subcomponents:{Dropdown:a},tags:[`autodocs`],args:{label:`Choose a number`,options:d},parameters:{docs:{description:{component:`Select and Dropdown share selection, keyboard navigation and form behavior. Select preserves typed string/number values and onChange; Dropdown retains string values and onValueChange. Select popups share Combobox styling. Multi-select keeps the menu open, with checkable rows, a selection count and a fixed action footer. Selected badges can be hidden with showSelectedBadges.`}}}},p={},m={args:{multiple:!0,defaultValue:[0,1]}},h={args:{disabled:!0}},g={args:{error:`Select a number.`}},_={args:{optional:!0,helpText:`You can leave this empty.`}},v={render:function(e){let[t,n]=(0,l.useState)(0);return(0,u.jsx)(o,{...e,value:t,onChange:n})}},y={render:()=>(0,u.jsx)(a,{label:`Category`,options:[{value:`home`,label:`Home`},{value:`work`,label:`Work`}],defaultValue:`home`})},b={render:()=>(0,u.jsxs)(`form`,{onSubmit:e=>e.preventDefault(),className:`flex flex-col gap-12px`,children:[(0,u.jsx)(o,{label:`Required number`,options:d,name:`number`,required:!0}),(0,u.jsx)(`button`,{type:`submit`,children:`Submit`}),(0,u.jsx)(`button`,{type:`reset`,children:`Reset`})]})},x={args:{label:`Categories`,multiple:!0,defaultValue:[0,1,2],options:Array.from({length:40},(e,t)=>({value:t,label:`Category ${t+1}`,disabled:t===3})),helpText:`Choose any categories. Actions remain visible while scrolling.`},decorators:[e=>(0,u.jsx)(`div`,{style:{width:300,maxWidth:`100%`},children:(0,u.jsx)(e,{})})]},S={args:{multiple:!0,defaultValue:[0,1],showSelectedBadges:!1},parameters:{docs:{description:{story:`Compact multi-select: the first value and a +N count stay inside the control, with no badges below it.`}}}},C={render:()=>(0,u.jsx)(a,{label:`Status`,hideLabel:!0,multiple:!0,showSelectedBadges:!1,placeholder:`All statuses`,defaultValue:[`active`,`draft`],options:[{label:`Active`,value:`active`},{label:`Draft`,value:`draft`},{label:`Archived`,value:`archived`}]})},w=[`Default`,`Multiple`,`Disabled`,`Error`,`Optional`,`Controlled`,`DropdownCompatibility`,`RequiredForm`,`LongMultiSelect`,`WithoutSelectedBadges`,`CompactFilter`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultValue: [0, 1]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Select a number."
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true,
    helpText: "You can leave this empty."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Example(args) {
    const [value, setValue] = useState<string | number | (string | number)[]>(0);
    return <Select {...args} value={value} onChange={setValue} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown label="Category" options={[{
    value: "home",
    label: "Home"
  }, {
    value: "work",
    label: "Work"
  }]} defaultValue="home" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <form onSubmit={event => event.preventDefault()} className="flex flex-col gap-12px">
      <Select label="Required number" options={options} name="number" required />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Categories",
    multiple: true,
    defaultValue: [0, 1, 2],
    options: Array.from({
      length: 40
    }, (_, index) => ({
      value: index,
      label: \`Category \${index + 1}\`,
      disabled: index === 3
    })),
    helpText: "Choose any categories. Actions remain visible while scrolling."
  },
  decorators: [Story => <div style={{
    width: 300,
    maxWidth: "100%"
  }}><Story /></div>]
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultValue: [0, 1],
    showSelectedBadges: false
  },
  parameters: {
    docs: {
      description: {
        story: "Compact multi-select: the first value and a +N count stay inside the control, with no badges below it."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown label="Status" hideLabel multiple showSelectedBadges={false} placeholder="All statuses" defaultValue={["active", "draft"]} options={[{
    label: "Active",
    value: "active"
  }, {
    label: "Draft",
    value: "draft"
  }, {
    label: "Archived",
    value: "archived"
  }]} />
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as CompactFilter,v as Controlled,p as Default,h as Disabled,y as DropdownCompatibility,g as Error,x as LongMultiSelect,m as Multiple,_ as Optional,b as RequiredForm,S as WithoutSelectedBadges,w as __namedExportsOrder,f as default};