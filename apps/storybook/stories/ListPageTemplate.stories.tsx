import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListPageTemplate, Button, Input, PageSection, Badge } from "stark-lib";
const meta = {
  title: "Templates/ListPageTemplate",
  component: ListPageTemplate,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof ListPageTemplate>;
export default meta;
type Story = StoryObj;
export const Default: Story = {
  render: () => (
    <ListPageTemplate
      title="Products"
      description="Manage your catalog."
      actions={<Button label="Add product" intent="primary" />}
      toolbar={<Input label="Search products" />}
    >
      <PageSection title="Catalog">Your product list goes here.</PageSection>
    </ListPageTemplate>
  ),
};
