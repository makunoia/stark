import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{r as n}from"./react-mGTKd6IE.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";import{i,n as a,r as o,t as s}from"./Text-CCgJA5il.js";import{n as c,t as l}from"./RemixIcon-qz_M35R2.js";import{n as u,t as d}from"./Button-Dnc2Kear.js";import{a as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y}from"./dist-BSKjKL-l.js";import{n as b,t as x}from"./TextField-C86RcF9J.js";function S({title:e,caption:t,children:n,size:r=`default`,style:a=`default`,centered:o,remixIcon:c,icon:u,primaryButton:m,secondaryButton:b,tertiaryButton:x,onClose:S,show:T}){let E=(0,C.useRef)(null),[D,O]=(0,C.useState)(!1),k=a===`brand`||a==="default"?`primary`:a,A={default:`text bg-subtle`,brand:`text-brand bg-brand-subtle`,danger:`text-danger bg-danger-subtle`,warning:`text-warning bg-warning-subtle`,info:`text-info bg-info-subtle`,success:`text-success bg-success-subtle`}[a],j=(e,t=!1)=>(0,w.jsx)(d,{type:`button`,variant:t?`outline`:`solid`,label:e.label,onClick:e.onClick,loading:e.isLoading,disabled:e.disabled,fullWidth:o,intent:t?`default`:k});return(0,w.jsx)(y,{open:T,onOpenChange:e=>{e||S()},children:(0,w.jsxs)(g,{children:[(0,w.jsx)(f,{"data-instant":D||void 0,className:`stark-modal-overlay fixed inset-[0px] z-[90] bg-inverse/80`}),(0,w.jsx)(`div`,{className:`fixed inset-[0px] z-[91] pointer-events-none flex items-center justify-center`,children:(0,w.jsxs)(_,{"data-instant":D||void 0,onOpenAutoFocus:()=>{E.current=document.activeElement,O(E.current?.matches(`:focus-visible`)??!1)},onCloseAutoFocus:e=>{e.preventDefault(),E.current?.isConnected&&E.current.focus()},className:`stark-modal relative pointer-events-auto max-h-[calc(100dvh-32px)] max-w-[calc(100vw-32px)] flex flex-col gap-16px bg-surface rounded-8px border border-subtle shadow-md overflow-auto ${o?``:`mb-[30%]`} ${{small:`w-[300px]`,default:`w-[450px]`,large:`w-[600px]`,"x-large":`w-[800px]`}[r]}`,children:[(0,w.jsxs)(`div`,{className:`flex justify-between gap-16px ${o?`p-24px pb-none text-center`:`p-20px pb-12px border-b border-subtle ${A}`}`,children:[(0,w.jsxs)(`div`,{className:`flex flex-col w-full gap-4px`,children:[o&&(c||u)&&(0,w.jsx)(s,{as:`span`,inherit:!0,className:`self-center flex items-center justify-center rounded-[9999px] p-20px mb-10px ${A}`,children:c?(0,w.jsx)(l,{name:c}):u}),(0,w.jsx)(s,{asChild:!0,inherit:!0,weight:`semibold`,tone:o?`default`:`inherit`,children:(0,w.jsx)(v,{children:e})}),t&&(0,w.jsx)(s,{asChild:!0,inherit:!0,size:o?`body`:`caption`,tone:`subtle`,children:(0,w.jsx)(p,{children:t})})]}),(0,w.jsx)(h,{asChild:!0,children:(0,w.jsx)(`button`,{type:`button`,className:`stark-icon-target self-start`,"aria-label":`Close dialog`,children:(0,w.jsx)(l,{name:`close-line`})})})]}),n&&(0,w.jsx)(`div`,{className:i({inherit:!0,size:`body`,tone:`subtle`,leading:`relaxed`,className:`px-20px`}),children:n}),(m||b||x)&&(0,w.jsxs)(`div`,{className:`p-20px pt-none flex gap-16px ${o?`flex-col`:`items-center justify-between`}`,children:[x&&(0,w.jsxs)(`div`,{className:`flex gap-2px items-center text-body text-subtle`,children:[(0,w.jsx)(s,{inherit:!0,children:x.message}),(0,w.jsx)(d,{label:x.label,onClick:x.onClick})]}),(0,w.jsxs)(`div`,{className:`flex gap-8px ${o?`w-full`:``}`,children:[o&&b&&j(b,!0),m&&j(m),!o&&b&&j(b,!0)]})]})]})})]})})}var C,w;function T(){return(T=t((()=>{o(),a(),C=n(),m(),u(),c(),w=r()})))()}function E(e){let[t,n]=(0,D.useState)(!1),[r,i]=(0,D.useState)(!1);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(d,{label:`Open modal`,onClick:()=>n(!0)}),(0,O.jsx)(S,{...e,show:t,onClose:()=>{n(!1),i(!1)},primaryButton:e.primaryButton?{...e.primaryButton,isLoading:r,onClick:()=>i(!0)}:void 0,secondaryButton:e.secondaryButton?{...e.secondaryButton,onClick:()=>n(!1)}:void 0,children:e.children})]})}var D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{D=e(n(),1),u(),T(),b(),O=r(),k={title:`Overlays/Modal`,component:S},A={title:`Modal Title`,caption:`A sentence that describes what's happening`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat facilisis turpis, non aliquam massa.`},j={render:e=>(0,O.jsx)(E,{...e}),args:A},M={render:e=>(0,O.jsx)(E,{...e}),args:{...A,title:`Login`,caption:`Enter your username and password`,children:(0,O.jsxs)(`div`,{className:`flex flex-col gap-12px`,children:[(0,O.jsx)(x,{label:`Username`}),(0,O.jsx)(x,{label:`Password`,type:`password`})]}),primaryButton:{label:`Login`},secondaryButton:{label:`Cancel`}}},N={render:e=>(0,O.jsx)(E,{...e}),args:{title:`Are you still there?`,caption:`You will automatically be logged out after 10 mins`,centered:!0,style:`warning`,remixIcon:`question-mark`,primaryButton:{label:`Yes, I am still here`},secondaryButton:{label:`Log me out`}}},P={render:e=>(0,O.jsx)(E,{...e}),args:{title:`Something went wrong`,caption:`Please try again`,centered:!0,style:`danger`,remixIcon:`error-warning-fill`,primaryButton:{label:`Okay`}}},F=[`DefaultModal`,`Modal_with_Form`,`CenteredModal`,`DangerModal_One_Button`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />,
  args: common
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />,
  args: {
    ...common,
    title: "Login",
    caption: "Enter your username and password",
    children: <div className="flex flex-col gap-12px">
        <TextField label="Username" />
        <TextField label="Password" type="password" />
      </div>,
    primaryButton: {
      label: "Login"
    },
    secondaryButton: {
      label: "Cancel"
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />,
  args: {
    title: "Are you still there?",
    caption: "You will automatically be logged out after 10 mins",
    centered: true,
    style: "warning",
    remixIcon: "question-mark",
    primaryButton: {
      label: "Yes, I am still here"
    },
    secondaryButton: {
      label: "Log me out"
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <Example {...args} />,
  args: {
    title: "Something went wrong",
    caption: "Please try again",
    centered: true,
    style: "danger",
    remixIcon: "error-warning-fill",
    primaryButton: {
      label: "Okay"
    }
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as CenteredModal,P as DangerModal_One_Button,j as DefaultModal,M as Modal_with_Form,F as __namedExportsOrder,k as default};