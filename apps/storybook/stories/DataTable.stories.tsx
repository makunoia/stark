import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable, Button, Input, PageSection, Badge } from "stark-lib";
const meta = {
  title: "Data Display/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
} satisfies Meta<typeof DataTable>;
export default meta;
type Story = StoryObj;
export const Default: Story = {
  render: () => (
    <DataTable
      data={[
        { id: "1", name: "Notebook", stock: 18 },
        { id: "2", name: "Desk lamp", stock: 7 },
      ]}
      getRowId={(row) => row.id}
      columns={[
        { accessorKey: "name", header: "Product" },
        { accessorKey: "stock", header: "In stock" },
      ]}
      caption="Product inventory"
    />
  ),
};
export const Empty: Story = {
  render: () => (
    <DataTable
      data={[]}
      getRowId={() => ""}
      columns={[{ accessorKey: "name", header: "Product" }]}
      caption="Empty inventory"
    />
  ),
};
