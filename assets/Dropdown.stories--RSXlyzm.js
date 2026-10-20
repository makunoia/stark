import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{o as i,y as a}from"./dist-FsUpKabh.js";var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{o=e(n(),1),a(),s=r(),c=[{value:`accessories`,label:`Accessories`},{value:`lighting`,label:`Lighting`},{value:`homeware`,label:`Homeware`},{value:`unavailable`,label:`Unavailable`,disabled:!0}],l={title:`Components/Dropdown`,component:i,parameters:{layout:`centered`,docs:{description:{component:`A Stark form control for single or multiple selections. Single selection uses a Radix listbox; multiple selection uses checkable menu items and stays open until dismissed. Both use Stark Button/TextButton, support native form submission and reset, and update instantly for keyboard and reduced-motion users.`}}},args:{label:`Category`,options:c,placeholder:`Choose categories`}},u={args:{placeholder:`Choose a category`,defaultValue:`lighting`}},d={args:{multiple:!0,defaultValue:[`accessories`,`homeware`],helpText:`Select more than one category.`}},f={args:{required:!0,helpText:`A category is required.`}},p={args:{disabled:!0,defaultValue:`accessories`}},m={args:{error:!0,helpText:`Choose an available category.`}},h={args:{options:[]}},g={render:function(){let[e,t]=(0,o.useState)([`lighting`]);return(0,s.jsx)(i,{label:`Controlled categories`,options:c,multiple:!0,value:e,onValueChange:t,helpText:`Current values: ${e.join(`, `)||`none`}`})}},_=[`SingleSelect`,`MultiSelect`,`Required`,`Disabled`,`Invalid`,`Empty`,`Controlled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Choose a category",
    defaultValue: "lighting"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    defaultValue: ["accessories", "homeware"],
    helpText: "Select more than one category."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    helpText: "A category is required."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "accessories"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    helpText: "Choose an available category."
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: []
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Controlled() {
    const [value, setValue] = useState(["lighting"]);
    return <Dropdown label="Controlled categories" options={options} multiple value={value} onValueChange={setValue} helpText={\`Current values: \${value.join(", ") || "none"}\`} />;
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{g as Controlled,p as Disabled,h as Empty,m as Invalid,d as MultiSelect,f as Required,u as SingleSelect,_ as __namedExportsOrder,l as default};