import React from "react";
import Card from "@makunoia/stark-ui/components/Card";
import Button from "@makunoia/stark-ui/components/Button";
import Overline from "@makunoia/stark-ui/components/molecules/Overline";
import Badge from "@makunoia/stark-ui/components/molecules/Badge";

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
  actionButton: {
    label: "Action Button",
    onClick: () => alert("Event"),
  },
};

export const withSections = (args) => (
  <Card {...args}>
    <Card.Body>
      <Card.Section>
        <Overline
          label="First overline"
          tooltip={{
            content: "This is a helpful tooltip to describe this section",
          }}
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

export const withDisclosures = (args) => (
  <Card {...args}>
    <Card.Body>
      <Card.Disclosure title="First disclosure">
        <Overline
          label="First overline"
          tooltip={{
            content: "This is a helpful tooltip to describe this section",
          }}
        >
          <Badge label="Badge" variant="default" type="outline" circular />
        </Overline>
      </Card.Disclosure>

      <Card.Disclosure title="Second disclosure">
        <Overline
          label="First overline"
          tooltip={{
            content: "This is a helpful tooltip to describe this section",
          }}
        >
          <Badge label="Badge" variant="default" type="outline" circular />
        </Overline>
      </Card.Disclosure>
      <Card.Disclosure title="Third disclosure">
        <Overline
          label="First overline"
          tooltip={{
            content: "This is a helpful tooltip to describe this section",
          }}
        >
          <Badge label="Badge" variant="default" type="outline" circular />
        </Overline>
      </Card.Disclosure>
      <Card.Disclosure title="Fourth disclosure">
        <Overline
          label="First overline"
          tooltip={{
            content: "This is a helpful tooltip to describe this section",
          }}
        >
          <Badge label="Badge" variant="default" type="outline" circular />
        </Overline>
      </Card.Disclosure>
    </Card.Body>
    {/* <Card.Footer>
      <Button variant="primary" label="Primary Button" />
      <Button type="text" label="Secondary" />
    </Card.Footer> */}
  </Card>
);
withDisclosures.args = {
  header: "Card Title",
  caption: "Briefly tell what this card can do for the user",
};

export const withDraggableList = (args) => (
  <Card {...args}>
    <Card.Body>
      <Card.DraggableList>
        <Card.Disclosure
          title="First disclosure"
          draggable={true}
          id="disclosure1"
        >
          <Overline
            label="First overline"
            tooltip={{
              content: "This is a helpful tooltip to describe this section",
            }}
          >
            <Badge label="Badge" variant="default" type="outline" circular />
          </Overline>
        </Card.Disclosure>

        <Card.Disclosure
          title="Second disclosure"
          draggable={true}
          id="disclosure2"
        >
          <Overline
            label="First overline"
            tooltip={{
              content: "This is a helpful tooltip to describe this section",
            }}
          >
            <Badge label="Badge" variant="default" type="outline" circular />
          </Overline>
        </Card.Disclosure>

        <Card.Disclosure
          title="Third disclosure"
          draggable={true}
          id="disclosure3"
        >
          <Overline
            label="First overline"
            tooltip={{
              content: "This is a helpful tooltip to describe this section",
            }}
          >
            <Badge label="Badge" variant="default" type="outline" circular />
          </Overline>
        </Card.Disclosure>

        <Card.Disclosure
          title="Fourth disclosure"
          draggable={true}
          id="disclosure4"
        >
          <Overline
            label="First overline"
            tooltip={{
              content: "This is a helpful tooltip to describe this section",
            }}
          >
            <Badge label="Badge" variant="default" type="outline" circular />
          </Overline>
        </Card.Disclosure>
      </Card.DraggableList>
    </Card.Body>
  </Card>
);
withDraggableList.args = {
  header: "Card Title",
  caption: "Briefly tell what this card can do for the user",
};
