import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t}from"./react-mGTKd6IE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./Text-CCgJA5il.js";import{n as s,t as c}from"./RemixIcon-qz_M35R2.js";import{n as l,t as u}from"./Badge-COF47dTB.js";import{n as d,t as f}from"./Button-Dnc2Kear.js";import{a as p,c as m,r as h,t as g,u as _}from"./react-BnMwm_Y_.js";import{n as v,t as y}from"./Overline-BZytF2i0.js";function b({header:e,caption:t,actionButton:n,children:r,className:i=``,...a}){return(0,O.jsxs)(`div`,{...a,className:`bg-surface border border-subtle rounded-4px ${i}`,children:[(e||t||n)&&(0,O.jsxs)(`div`,{className:`flex px-24px py-24px`,children:[(0,O.jsxs)(`div`,{className:`flex flex-col grow gap-2px`,children:[(0,O.jsx)(o,{as:`h6`,inherit:!0,weight:`bold`,tone:`default`,children:e}),(0,O.jsx)(o,{as:`span`,inherit:!0,size:`body`,tone:`subtle`,children:t})]}),n&&(0,O.jsx)(f,{...n})]}),r]})}function x({className:e=``,...t}){return(0,O.jsx)(`div`,{...t,className:`card-body w-full ${e}`})}function S({className:e=``,...t}){return(0,O.jsx)(`div`,{...t,className:`card-section w-full border-y border-subtle p-24px -mb-px last:mb-none ${e}`})}function C({className:e=``,...t}){return(0,O.jsx)(`div`,{...t,className:`card-footer px-24px py-16px flex items-center gap-16px ${e}`})}function w({id:e,title:t=`Disclosure`,children:n,className:i=``,draggable:a,dragControls:s,isDragging:l,onMove:u,...d}){return(0,O.jsx)(`div`,{...d,id:e,className:`card-disclosure w-full border-t border-subtle p-24px ${i} ${l?`select-none`:``}`,children:(0,O.jsxs)(`div`,{className:`flex items-start gap-16px`,children:[a&&(0,O.jsx)(`button`,{type:`button`,"aria-label":`Reorder ${t}; use up and down arrows`,className:`stark-icon-target cursor-grab touch-none`,onPointerDown:e=>s?.start(e),onKeyDown:e=>{(e.key===`ArrowUp`||e.key===`ArrowDown`)&&(e.preventDefault(),u?.(e.key===`ArrowUp`?-1:1))},children:(0,O.jsx)(c,{name:`draggable`})}),(0,O.jsxs)(`details`,{className:`w-full`,children:[(0,O.jsxs)(o,{as:`summary`,inherit:!0,size:`caption`,weight:`bold`,tone:`default`,className:`stark-disclosure-summary flex justify-between items-center cursor-pointer uppercase tracking-widest`,children:[t,(0,O.jsx)(c,{name:`arrow-up-s-line`})]}),(0,O.jsx)(`div`,{className:r({inherit:!0,size:`body`,className:`pt-16px`}),children:n})]})]})})}function T({item:e,move:t}){let n=m(),r=_();return(0,O.jsx)(h,{value:e.key,dragListener:!1,dragControls:n,dragMomentum:!1,transition:r?{duration:0}:{type:`spring`,duration:.25,bounce:0},className:`relative bg-surface list-none`,children:(0,D.cloneElement)(e,{draggable:!0,dragControls:n,onMove:t})})}function E({children:e,onReorder:t}){let n=D.Children.toArray(e).filter(D.isValidElement),[r,i]=(0,D.useState)([]),a=n.map(e=>String(e.key)),o=[...r.filter(e=>a.includes(e)),...a.filter(e=>!r.includes(e))],s=e=>{i(e),t?.(e.map(e=>{let t=n.find(t=>t.key===e);return t.props.id??t.props.title??e}))};return(0,O.jsx)(p,{axis:`y`,values:o,onReorder:s,className:`relative`,children:o.map((e,t)=>(0,O.jsx)(T,{item:n.find(t=>t.key===e),move:e=>{let n=t+e;if(n<0||n>=o.length)return;let r=[...o];[r[t],r[n]]=[r[n],r[t]],s(r)}},e))})}var D,O,k;function A(){return(A=e((()=>{a(),i(),D=t(),g(),d(),s(),O=n(),b.Body=x,b.Section=S,b.Footer=C,b.Disclosure=w,b.DraggableList=E,k=b})))()}var j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{t(),A(),d(),v(),l(),j=n(),M={title:`Layout/Card`,component:k},N=e=>(0,j.jsxs)(k,{...e,children:[(0,j.jsx)(k.Body,{children:`This is the body`}),(0,j.jsxs)(k.Footer,{children:[(0,j.jsx)(f,{variant:`primary`}),(0,j.jsx)(f,{type:`text`})]})]}),P=N.bind({}),P.args={header:`Card Title`,caption:`Briefly tell what this card can do for the user`},F=N.bind({}),F.args={header:`Card Title`,caption:`Briefly tell what this card can do for the user`,actionButton:{label:`Action Button`,onClick:()=>alert(`Event`)}},I=e=>(0,j.jsxs)(k,{...e,children:[(0,j.jsxs)(k.Body,{children:[(0,j.jsx)(k.Section,{children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})}),(0,j.jsx)(k.Section,{children:(0,j.jsx)(y,{label:`What can you do`,tooltip:{content:`This is another tooltip to make users understand what this section is for`,position:`right`},children:(0,j.jsx)(`span`,{children:`This section can be descriptive`})})}),(0,j.jsx)(k.Section,{children:`Section C`}),(0,j.jsx)(k.Section,{children:`Section D`})]}),(0,j.jsxs)(k.Footer,{children:[(0,j.jsx)(f,{variant:`primary`,label:`Primary Button`}),(0,j.jsx)(f,{type:`text`,label:`Secondary`})]})]}),I.args={header:`Card Title`,caption:`Briefly tell what this card can do for the user`},L=e=>(0,j.jsx)(k,{...e,children:(0,j.jsxs)(k.Body,{children:[(0,j.jsx)(k.Disclosure,{title:`First disclosure`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})}),(0,j.jsx)(k.Disclosure,{title:`Second disclosure`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})}),(0,j.jsx)(k.Disclosure,{title:`Third disclosure`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})}),(0,j.jsx)(k.Disclosure,{title:`Fourth disclosure`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})})]})}),L.args={header:`Card Title`,caption:`Briefly tell what this card can do for the user`},R=e=>(0,j.jsx)(k,{...e,children:(0,j.jsx)(k.Body,{children:(0,j.jsxs)(k.DraggableList,{children:[(0,j.jsx)(k.Disclosure,{title:`First disclosure`,draggable:!0,id:`disclosure1`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})}),(0,j.jsx)(k.Disclosure,{title:`Second disclosure`,draggable:!0,id:`disclosure2`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})}),(0,j.jsx)(k.Disclosure,{title:`Third disclosure`,draggable:!0,id:`disclosure3`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})}),(0,j.jsx)(k.Disclosure,{title:`Fourth disclosure`,draggable:!0,id:`disclosure4`,children:(0,j.jsx)(y,{label:`First overline`,tooltip:{content:`This is a helpful tooltip to describe this section`},children:(0,j.jsx)(u,{label:`Badge`,color:`default`,variant:`outline`,circular:!0})})})]})})}),R.args={header:`Card Title`,caption:`Briefly tell what this card can do for the user`},I.__docgenInfo={description:``,methods:[],displayName:`withSections`},L.__docgenInfo={description:``,methods:[],displayName:`withDisclosures`},R.__docgenInfo={description:``,methods:[],displayName:`withDraggableList`},z=[`Default`,`WithAction`,`withSections`,`withDisclosures`,`withDraggableList`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <Card {...args}>
    <Card.Body>This is the body</Card.Body>
    <Card.Footer>
      <Button variant="primary" />
      <Button type="text" />
    </Card.Footer>
  </Card>`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => <Card {...args}>
    <Card.Body>This is the body</Card.Body>
    <Card.Footer>
      <Button variant="primary" />
      <Button type="text" />
    </Card.Footer>
  </Card>`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`args => <Card {...args}>
    <Card.Body>
      <Card.Section>
        <Overline label="First overline" tooltip={{
        content: "This is a helpful tooltip to describe this section"
      }}>
          <Badge label="Badge" color="default" variant="outline" circular />
        </Overline>
      </Card.Section>
      <Card.Section>
        <Overline label="What can you do" tooltip={{
        content: "This is another tooltip to make users understand what this section is for",
        position: "right"
      }}>
          <span>This section can be descriptive</span>
        </Overline>
      </Card.Section>
      <Card.Section>Section C</Card.Section>
      <Card.Section>Section D</Card.Section>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary" label="Primary Button" />
      <Button type="text" label="Secondary" />
    </Card.Footer>
  </Card>`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`args => <Card {...args}>
    <Card.Body>
      <Card.Disclosure title="First disclosure">
        <Overline label="First overline" tooltip={{
        content: "This is a helpful tooltip to describe this section"
      }}>
          <Badge label="Badge" color="default" variant="outline" circular />
        </Overline>
      </Card.Disclosure>

      <Card.Disclosure title="Second disclosure">
        <Overline label="First overline" tooltip={{
        content: "This is a helpful tooltip to describe this section"
      }}>
          <Badge label="Badge" color="default" variant="outline" circular />
        </Overline>
      </Card.Disclosure>
      <Card.Disclosure title="Third disclosure">
        <Overline label="First overline" tooltip={{
        content: "This is a helpful tooltip to describe this section"
      }}>
          <Badge label="Badge" color="default" variant="outline" circular />
        </Overline>
      </Card.Disclosure>
      <Card.Disclosure title="Fourth disclosure">
        <Overline label="First overline" tooltip={{
        content: "This is a helpful tooltip to describe this section"
      }}>
          <Badge label="Badge" color="default" variant="outline" circular />
        </Overline>
      </Card.Disclosure>
    </Card.Body>
    {/* <Card.Footer>
      <Button variant="primary" label="Primary Button" />
      <Button type="text" label="Secondary" />
     </Card.Footer> */}
  </Card>`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <Card {...args}>
    <Card.Body>
      <Card.DraggableList>
        <Card.Disclosure title="First disclosure" draggable={true} id="disclosure1">
          <Overline label="First overline" tooltip={{
          content: "This is a helpful tooltip to describe this section"
        }}>
            <Badge label="Badge" color="default" variant="outline" circular />
          </Overline>
        </Card.Disclosure>

        <Card.Disclosure title="Second disclosure" draggable={true} id="disclosure2">
          <Overline label="First overline" tooltip={{
          content: "This is a helpful tooltip to describe this section"
        }}>
            <Badge label="Badge" color="default" variant="outline" circular />
          </Overline>
        </Card.Disclosure>

        <Card.Disclosure title="Third disclosure" draggable={true} id="disclosure3">
          <Overline label="First overline" tooltip={{
          content: "This is a helpful tooltip to describe this section"
        }}>
            <Badge label="Badge" color="default" variant="outline" circular />
          </Overline>
        </Card.Disclosure>

        <Card.Disclosure title="Fourth disclosure" draggable={true} id="disclosure4">
          <Overline label="First overline" tooltip={{
          content: "This is a helpful tooltip to describe this section"
        }}>
            <Badge label="Badge" color="default" variant="outline" circular />
          </Overline>
        </Card.Disclosure>
      </Card.DraggableList>
    </Card.Body>
  </Card>`,...R.parameters?.docs?.source}}}})))()}B();export{P as Default,F as WithAction,z as __namedExportsOrder,M as default,L as withDisclosures,R as withDraggableList,I as withSections};