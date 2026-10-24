import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormPageTemplate, Button, Input, PageSection, Badge } from "stark-lib";
const meta = {
  title: "Templates/FormPageTemplate",
  component: FormPageTemplate,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof FormPageTemplate>;
export default meta;
type Story = StoryObj;
export const Default: Story = {
  render: () => (
    <FormPageTemplate
      title="Edit product"
      description="Update the product details."
      onSubmit={(event) => event.preventDefault()}
      actions={<Button label="Save" type="submit" intent="primary" />}
    >
      <PageSection title="Details">
        <Input label="Product name" defaultValue="Notebook" fullWidth />
      </PageSection>
    </FormPageTemplate>
  ),
};
