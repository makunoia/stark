import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{r as t}from"./react-mGTKd6IE.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./Text-CCgJA5il.js";import{n as a,t as o}from"./Stack-gfmtHat6.js";import{n as s,t as c}from"./Button-Dnc2Kear.js";import{n as l,t as u}from"./Input-CVvvYcKa.js";import{n as d,t as f}from"./Checkbox-CCP5VFBJ.js";import{n as p,t as m}from"./Switch-BhBMapot.js";import{n as h,t as g}from"./RadioGroup-BdseWTek.js";import{n as _,t as v}from"./Textarea-Bir_vraT.js";var y,b,x,S,C;function w(){return(w=e((()=>{y=t(),s(),d(),l(),h(),a(),p(),r(),_(),b=n(),x={title:`Examples/Settings form`,parameters:{layout:`padded`}},S={render:function(){let[e,t]=(0,y.useState)(!1);return(0,b.jsx)(`form`,{style:{width:440,maxWidth:`100%`},onChange:()=>t(!1),onReset:()=>t(!1),onSubmit:e=>{e.preventDefault(),t(!0)},children:(0,b.jsxs)(o,{gap:`24px`,className:`border border-subtle rounded-8px p-24px`,children:[(0,b.jsxs)(o,{gap:`4px`,children:[(0,b.jsx)(i,{as:`h2`,size:`lead`,weight:`bold`,children:`Account settings`}),(0,b.jsx)(i,{className:`text-subtle`,leading:`tight`,children:`Manage your profile and notification preferences.`})]}),(0,b.jsx)(u,{label:`Display name`,name:`displayName`,defaultValue:`Alex Morgan`,fullWidth:!0,required:!0}),(0,b.jsx)(v,{label:`Bio`,name:`bio`,optional:!0,fullWidth:!0,defaultValue:`Building thoughtful tools with Stark.`,helpText:`A short introduction for your profile.`}),(0,b.jsx)(g,{label:`Email frequency`,name:`frequency`,defaultValue:`weekly`,options:[{value:`daily`,label:`Daily`},{value:`weekly`,label:`Weekly`},{value:`never`,label:`Never`}]}),(0,b.jsxs)(o,{children:[(0,b.jsx)(m,{name:`push`,label:`Push notifications`,helpText:`Get notified when a project changes.`,defaultChecked:!0}),(0,b.jsx)(f,{name:`news`,label:`Product updates`,helpText:`Receive news and occasional announcements.`})]}),(0,b.jsxs)(o,{horizontal:!0,gap:`8px`,children:[(0,b.jsx)(c,{type:`submit`,label:`Save changes`,intent:`primary`}),(0,b.jsx)(c,{type:`reset`,label:`Reset`})]}),(0,b.jsx)(i,{role:`status`,className:`text-success`,children:e?`Your settings have been saved.`:``})]})})}},C=[`AccountSettings`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function AccountSettings() {
    const [saved, setSaved] = useState(false);
    return <form style={{
      width: 440,
      maxWidth: "100%"
    }} onChange={() => setSaved(false)} onReset={() => setSaved(false)} onSubmit={event => {
      event.preventDefault();
      setSaved(true);
    }}>
      <Stack gap="24px" className="border border-subtle rounded-8px p-24px">
        <Stack gap="4px">
          <Text as="h2" size="lead" weight="bold">Account settings</Text>
          <Text className="text-subtle" leading="tight">Manage your profile and notification preferences.</Text>
        </Stack>
        <Input label="Display name" name="displayName" defaultValue="Alex Morgan" fullWidth required />
        <Textarea label="Bio" name="bio" optional fullWidth defaultValue="Building thoughtful tools with Stark." helpText="A short introduction for your profile." />
        <RadioGroup label="Email frequency" name="frequency" defaultValue="weekly" options={[{
          value: "daily",
          label: "Daily"
        }, {
          value: "weekly",
          label: "Weekly"
        }, {
          value: "never",
          label: "Never"
        }]} />
        <Stack>
          <Switch name="push" label="Push notifications" helpText="Get notified when a project changes." defaultChecked />
          <Checkbox name="news" label="Product updates" helpText="Receive news and occasional announcements." />
        </Stack>
        <Stack horizontal gap="8px">
          <Button type="submit" label="Save changes" intent="primary" />
          <Button type="reset" label="Reset" />
        </Stack>
        <Text role="status" className="text-success">{saved ? "Your settings have been saved." : ""}</Text>
      </Stack>
    </form>;
  }
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as AccountSettings,C as __namedExportsOrder,x as default};