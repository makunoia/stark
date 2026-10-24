import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AdminLayout, Button, Input, PageSection, Badge } from "stark-lib";
const meta = {
  title: "Layout/AdminLayout",
  component: AdminLayout,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AdminLayout>;
export default meta;
type Story = StoryObj;
export const Default: Story = {
  render: () => (
    <AdminLayout
      branding="Stark"
      navigation={[
        {
          label: "Workspace",
          items: [
            { label: "Products", href: "#products", active: true },
            { label: "Settings", href: "#settings" },
          ],
        },
      ]}
      breadcrumb="Products"
      sidebarFooter="Team workspace"
    >
      <PageSection title="Overview">Workspace content</PageSection>
    </AdminLayout>
  ),
};
