import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DetailPageTemplate,
  Button,
  Input,
  PageSection,
  Badge,
} from "stark-lib";
const meta = {
  title: "Templates/DetailPageTemplate",
  component: DetailPageTemplate,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof DetailPageTemplate>;
export default meta;
type Story = StoryObj;
export const Default: Story = {
  render: () => (
    <DetailPageTemplate
      title="Everyday notebook"
      status={<Badge label="Published" variant="status" color="success" />}
      backLink={<a href="#products">Back to products</a>}
      actions={<Button label="Edit" />}
      supportingContent={<PageSection title="Visibility">Public</PageSection>}
    >
      <PageSection title="Description">
        Designed for everyday notes.
      </PageSection>
    </DetailPageTemplate>
  ),
};
