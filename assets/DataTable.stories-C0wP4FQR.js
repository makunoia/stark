import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t}from"./react-mGTKd6IE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./DataTable-D-o1ft32.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),r(),a=n(),o={title:`Data Display/DataTable`,component:i,tags:[`autodocs`],parameters:{layout:`padded`}},s={render:()=>(0,a.jsx)(i,{data:[{id:`1`,name:`Notebook`,stock:18},{id:`2`,name:`Desk lamp`,stock:7}],getRowId:e=>e.id,columns:[{accessorKey:`name`,header:`Product`},{accessorKey:`stock`,header:`In stock`}],caption:`Product inventory`})},c={render:()=>(0,a.jsx)(i,{data:[],getRowId:()=>``,columns:[{accessorKey:`name`,header:`Product`}],caption:`Empty inventory`})},l=[`Default`,`Empty`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable data={[{
    id: "1",
    name: "Notebook",
    stock: 18
  }, {
    id: "2",
    name: "Desk lamp",
    stock: 7
  }]} getRowId={row => row.id} columns={[{
    accessorKey: "name",
    header: "Product"
  }, {
    accessorKey: "stock",
    header: "In stock"
  }]} caption="Product inventory" />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <DataTable data={[]} getRowId={() => ""} columns={[{
    accessorKey: "name",
    header: "Product"
  }]} caption="Empty inventory" />
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Default,c as Empty,l as __namedExportsOrder,o as default};