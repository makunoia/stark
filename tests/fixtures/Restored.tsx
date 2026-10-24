import React, { useState } from "react";
import {
  Alert,
  AlertProvider,
  Avatar,
  Banner,
  Button,
  Card,
  Combobox,
  LegacyBadge,
  LegacySwitch,
  MaskedInput,
  Menu,
  Modal,
  OptionGroup,
  Overline,
  RichTextField,
  Select,
  StatusIndicator,
  TabGroup,
  TextField,
  ToastProvider,
  useAlert,
  useToast,
} from "stark-lib";
const options = [
  { id: "zero", value: 0, label: "Zero" },
  { id: "one", value: 1, label: "One" },
  { id: "two", value: 2, label: "Two", disabled: true },
];
function Notifications() {
  const { alert } = useAlert();
  const { toaster } = useToast();
  const [count, setCount] = useState(0);
  return (
    <>
      <Button
        label="Notify"
        onClick={() => {
          alert.success({
            title: "Saved",
            message: "Record saved",
            duration: 0,
            action: {
              label: "Undo",
              onClick: () => setCount((value) => value + 1),
            },
          });
          toaster.notify({ message: "Toast message", duration: 0 });
        }}
      />
      <Button
        label="Timed notification"
        onClick={() => toaster.info({ message: "Expires", duration: 500 })}
      />
      <output aria-label="Action count">{count}</output>
    </>
  );
}
export function RestoredFixture() {
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<(string | number)[]>([]);
  const [choice, setChoice] = useState<string | number>("");
  const [html, setHtml] = useState("<p>Initial content</p>");
  const [mask, setMask] = useState("");
  const [dismissed, setDismissed] = useState(false);
  return (
    <AlertProvider>
      <ToastProvider>
        <main className="p-24px max-w-[1000px] flex flex-col gap-24px">
          <div className="flex items-center gap-16px">
            <Avatar text="MN" size="large" />
            <StatusIndicator status="online" />
            <LegacyBadge
              label="Restored"
              color="primary"
              dismissible
              onDismiss={() => setDismissed(true)}
            />
            {dismissed && <span>Badge dismissed</span>}
          </div>
          <Overline label="Details" tooltip={{ content: "Helpful details" }}>
            <span>Archive components</span>
          </Overline>
          <Banner
            title="Welcome"
            message="Restored banner"
            variant="info"
            action={{ label: "Open dialog", onClick: () => setShow(true) }}
          />
          <TextField label="Legacy password" type="password" />
          <TextField
            label="Legacy notes"
            type="textarea"
            error="Check this field"
          />
          <MaskedInput
            label="Phone"
            mask="(999) 999-9999"
            value={mask}
            onChange={(event) => setMask(event.target.value)}
            onAccept={(value) => setMask(value)}
          />
          <output aria-label="Masked value">{mask}</output>
          <Select
            label="Number"
            options={options}
            onChange={(value) => setChoice(value as string | number)}
          />
          <output aria-label="Selected number">
            {typeof choice}:{choice}
          </output>
          <Select label="Multiple numbers" options={options} multiple />
          <Combobox
            label="Search numbers"
            options={options}
            onChange={setChoice}
          />
          <Select label="Disabled selection" options={options} disabled />
          <Combobox label="Disabled search" options={options} disabled />
          <OptionGroup
            label="Choices"
            type="checkbox"
            options={options.map((option) => ({
              id: option.value,
              label: option.label,
              disabled: option.disabled,
            }))}
            selectedValues={selected}
            onChange={setSelected}
          />
          <TabGroup
            tabs={[
              { label: "Account", content: "Account panel" },
              { label: "Security", content: "Security panel" },
            ]}
            activeTab={tab}
            handleTabClick={setTab}
          />
          <Card header="Card Title" caption="Restored card">
            <Card.Body>
              <Card.Section>Section content</Card.Section>
              <Card.DraggableList>
                <Card.Disclosure id="first" title="First">
                  First body
                </Card.Disclosure>
                <Card.Disclosure id="second" title="Second">
                  Second body
                </Card.Disclosure>
              </Card.DraggableList>
            </Card.Body>
            <Card.Footer>Footer content</Card.Footer>
          </Card>
          <Menu
            label="Actions"
            links={[
              {
                sectionTitle: "Records",
                items: [
                  { label: "View record", href: "#view" },
                  { label: "Unavailable", disabled: true, href: "#disabled" },
                ],
              },
            ]}
          />
          <Button label="Open modal" onClick={() => setShow(true)} />
          <Modal
            show={show}
            onClose={() => setShow(false)}
            title="Edit record"
            caption="Modal caption"
            primaryButton={{ label: "Save", onClick: () => setShow(false) }}
            secondaryButton={{ label: "Cancel", onClick: () => setShow(false) }}
          >
            <TextField label="Record name" />
          </Modal>
          <RichTextField
            label="Description"
            value={html}
            onChange={setHtml}
            helpText="Formatting supported"
          />
          <output aria-label="Editor value">{html}</output>
          <RichTextField
            label="Read only description"
            value="<p>Read only</p>"
            readOnly
          />
          <Alert
            title="Static alert"
            message="Check the notification styles"
            duration={0}
          />
          <Notifications />
        </main>
      </ToastProvider>
    </AlertProvider>
  );
}

export function LegacySwitchFixture() {
  const [checked, setChecked] = useState(false);
  return (
    <LegacySwitch
      label="Archived switch"
      checked={checked}
      onChange={(value) => setChecked(value === true)}
    />
  );
}
