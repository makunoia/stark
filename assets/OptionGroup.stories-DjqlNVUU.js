import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n}from"./react-mGTKd6IE.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{n as i,t as a}from"./Text-CCgJA5il.js";import{n as o,t as s}from"./Checkbox-CCP5VFBJ.js";import{n as c,t as l}from"./RadioButton-DW3NX-n2.js";function u({id:e,type:t=`radio`,options:n,selectedValues:r=[],onChange:i,disabled:o,name:c,error:u,horizontal:p,className:m=``,label:h=`Options`}){let g=(0,d.useId)(),_=e??g;return(0,f.jsxs)(`div`,{id:_,role:t===`radio`?`radiogroup`:`group`,"aria-label":h,"aria-invalid":!!u||void 0,"aria-describedby":u?`${_}-error`:void 0,className:`flex flex-col gap-16px ${m}`,children:[(0,f.jsx)(`div`,{className:`flex items-start ${p?`flex-row gap-16px`:`flex-col gap-12px`}`,children:n.map((e,n)=>{let a=r.includes(e.id),u=n=>i?.(t===`radio`?[e.id]:n?[...r.filter(t=>t!==e.id),e.id]:r.filter(t=>t!==e.id)),d={id:`${_}-${n}`,label:e.label,helpText:e.helpText,disabled:o||e.disabled,checked:a,value:e.id};return t===`radio`?(0,f.jsx)(l,{...d,name:c??_,onChange:u},e.id):(0,f.jsx)(s,{...d,name:e.name??c,onChange:e=>u(e.target.checked)},e.id)})}),u&&(0,f.jsx)(a,{as:`p`,inherit:!0,id:`${_}-error`,size:`body`,tone:`danger`,children:u})]})}var d,f;function p(){return(p=t((()=>{i(),d=n(),o(),c(),f=r()})))()}var m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{m=e(n(),1),h=r(),p(),{fn:g}=__STORYBOOK_MODULE_TEST__,_=()=>g(),v={title:`Inputs/OptionGroup`,component:u},y=e=>{let t=[{id:`radio-1`,label:`Radio Option 1`},{id:`radio-2`,label:`Radio Option 2`},{id:`radio-3`,label:`Radio Option 3`,helpText:`You can also provide a helpText`}],[n,r]=(0,m.useState)();return(0,h.jsx)(u,{options:t,selectedValues:n,onChange:r,type:e.type,id:e.id,name:e.name})},b=y.bind({}),b.args={type:`radio`,name:`radio-options`,id:`radioList`},x=y.bind({}),x.args={type:`checkbox`,options:[{id:`1`,label:`Option 1`,helpText:`This is option 1`,name:`option1`},{id:`2`,label:`Option 2`,helpText:`This is option 2`,name:`option2`}],onChange:_(`changed`)},S=[`RadioOptionGroup`,`CheckboxOptionGroup`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const options = [{
    id: "radio-1",
    label: "Radio Option 1"
  }, {
    id: "radio-2",
    label: "Radio Option 2"
  }, {
    id: "radio-3",
    label: "Radio Option 3",
    helpText: "You can also provide a helpText"
  }];
  const [selectedvalues, setSelectedvalues] = useState();
  return <OptionGroup options={options} selectedValues={selectedvalues} onChange={setSelectedvalues} type={args.type} id={args.id} name={args.name} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => {
  const options = [{
    id: "radio-1",
    label: "Radio Option 1"
  }, {
    id: "radio-2",
    label: "Radio Option 2"
  }, {
    id: "radio-3",
    label: "Radio Option 3",
    helpText: "You can also provide a helpText"
  }];
  const [selectedvalues, setSelectedvalues] = useState();
  return <OptionGroup options={options} selectedValues={selectedvalues} onChange={setSelectedvalues} type={args.type} id={args.id} name={args.name} />;
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as CheckboxOptionGroup,b as RadioOptionGroup,S as __namedExportsOrder,v as default};