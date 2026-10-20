import { useState } from "react";
import { Button, Checkbox, Input, RadioGroup, Stack, Switch, Text, Textarea } from "stark-lib";

export default {
  title: "Examples/Settings form",
  parameters: { layout: "padded" },
};

export const AccountSettings = {
  render: function AccountSettings() {
    const [saved, setSaved] = useState(false);
    return <form style={{ width: 440, maxWidth: "100%" }} onChange={() => setSaved(false)}
      onReset={() => setSaved(false)} onSubmit={event => { event.preventDefault(); setSaved(true); }}>
      <Stack gap="24px" className="border border-subtle rounded-8px p-24px">
        <Stack gap="4px">
          <Text as="h2" size="lead" weight="bold">Account settings</Text>
          <Text className="text-subtle" leading="tight">Manage your profile and notification preferences.</Text>
        </Stack>
        <Input label="Display name" name="displayName" defaultValue="Alex Morgan" fullWidth required />
        <Textarea label="Bio" name="bio" optional fullWidth defaultValue="Building thoughtful tools with Stark." helpText="A short introduction for your profile." />
        <RadioGroup label="Email frequency" name="frequency" defaultValue="weekly" options={[
          { value: "daily", label: "Daily" }, { value: "weekly", label: "Weekly" }, { value: "never", label: "Never" },
        ]} />
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
  },
};
