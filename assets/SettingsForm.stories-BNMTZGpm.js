import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{_ as r,h as i,l as a,m as o,n as s,p as c,r as l,v as u,y as d}from"./dist-FsUpKabh.js";var f,p,m,h,g;function _(){return(_=e((()=>{f=t(),d(),p=n(),m={title:`Examples/Settings form`,parameters:{layout:`padded`}},h={render:function(){let[e,t]=(0,f.useState)(!1);return(0,p.jsx)(`form`,{style:{width:440,maxWidth:`100%`},onChange:()=>t(!1),onReset:()=>t(!1),onSubmit:e=>{e.preventDefault(),t(!0)},children:(0,p.jsxs)(o,{gap:`24px`,className:`border border-subtle rounded-8px p-24px`,children:[(0,p.jsxs)(o,{gap:`4px`,children:[(0,p.jsx)(r,{as:`h2`,size:`lead`,weight:`bold`,children:`Account settings`}),(0,p.jsx)(r,{className:`text-subtle`,leading:`tight`,children:`Manage your profile and notification preferences.`})]}),(0,p.jsx)(a,{label:`Display name`,name:`displayName`,defaultValue:`Alex Morgan`,fullWidth:!0,required:!0}),(0,p.jsx)(u,{label:`Bio`,name:`bio`,optional:!0,fullWidth:!0,defaultValue:`Building thoughtful tools with Stark.`,helpText:`A short introduction for your profile.`}),(0,p.jsx)(c,{label:`Email frequency`,name:`frequency`,defaultValue:`weekly`,options:[{value:`daily`,label:`Daily`},{value:`weekly`,label:`Weekly`},{value:`never`,label:`Never`}]}),(0,p.jsxs)(o,{children:[(0,p.jsx)(i,{name:`push`,label:`Push notifications`,helpText:`Get notified when a project changes.`,defaultChecked:!0}),(0,p.jsx)(l,{name:`news`,label:`Product updates`,helpText:`Receive news and occasional announcements.`})]}),(0,p.jsxs)(o,{horizontal:!0,gap:`8px`,children:[(0,p.jsx)(s,{type:`submit`,label:`Save changes`,intent:`primary`}),(0,p.jsx)(s,{type:`reset`,label:`Reset`})]}),(0,p.jsx)(r,{role:`status`,className:`text-success`,children:e?`Your settings have been saved.`:``})]})})}},g=[`AccountSettings`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as AccountSettings,g as __namedExportsOrder,m as default};