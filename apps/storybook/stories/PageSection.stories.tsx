import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageSection, Button, Input, Badge } from "stark-lib";
const meta = {
  title: "Templates/PageSection",
  component: PageSection,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof PageSection>;
export default meta;
type Story = StoryObj;
export const Default: Story = {
  render: () => (
    <PageSection
      title="Contact information"
      description="Keep your account details up to date."
      actions={<Button label="Edit" />}
    >
      <Input
        label="Email"
        type="email"
        fullWidth
        defaultValue="hello@example.com"
      />
    </PageSection>
  ),
};
