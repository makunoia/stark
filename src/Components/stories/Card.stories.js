import React from "react";
import Card from "../Card";
import Button from "../Button";
import Overline from "../molecules/Overline";
import Badge from "../molecules/Badge";

export default {
  title: "Containers/Card",
  component: Card,
};

const Template = (args) => (
  <Card {...args}>
    <Card.Body>This is the body</Card.Body>
    <Card.Footer>
      <Button variant="primary" />
      <Button type="text" />
    </Card.Footer>
  </Card>
);
export const Default = Template.bind({});
Default.args = {
  header: "Card Title",
  caption: "Briefly tell what this card can do for the user",
};

export const WithAction = Template.bind({});
WithAction.args = {
  header: "Card Title",
  caption: "Briefly tell what this card can do for the user",
  actionButton: { label: "Action Button", onClick: () => alert("Event") },
};

export const withSections = (args) => (
  <Card {...args}>
    <Card.Body>
      <Card.Section>
        <Overline
          label="First overline"
          tooltip="This is a helpful tooltip to describe this section"
        >
          <Badge label="Badge" variant="default" type="outline" circular />
        </Overline>
      </Card.Section>
      <Card.Section>
        <Overline
          label="What can you do"
          tooltip={{
            content:
              "This is another tooltip to make users understand what this section is for",
            position: "right",
          }}
        >
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
  </Card>
);
withSections.args = {
  header: "Card Title",
  caption: "Briefly tell what this card can do for the user",
};
