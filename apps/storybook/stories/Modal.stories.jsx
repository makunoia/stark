import React, { useState } from "react";
import { Button, Modal, TextField } from "stark-lib";
export default { title: "Overlays/Modal", component: Modal };
function Example(args) {
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  return (
    <>
      <Button label="Open modal" onClick={() => setShow(true)} />
      <Modal
        {...args}
        show={show}
        onClose={() => {
          setShow(false);
          setBusy(false);
        }}
        primaryButton={
          args.primaryButton
            ? {
                ...args.primaryButton,
                isLoading: busy,
                onClick: () => setBusy(true),
              }
            : undefined
        }
        secondaryButton={
          args.secondaryButton
            ? { ...args.secondaryButton, onClick: () => setShow(false) }
            : undefined
        }
      >
        {args.children}
      </Modal>
    </>
  );
}
const common = {
  title: "Modal Title",
  caption: "A sentence that describes what's happening",
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat facilisis turpis, non aliquam massa.",
};
export const DefaultModal = {
  render: (args) => <Example {...args} />,
  args: common,
};
export const Modal_with_Form = {
  render: (args) => <Example {...args} />,
  args: {
    ...common,
    title: "Login",
    caption: "Enter your username and password",
    children: (
      <div className="flex flex-col gap-12px">
        <TextField label="Username" />
        <TextField label="Password" type="password" />
      </div>
    ),
    primaryButton: { label: "Login" },
    secondaryButton: { label: "Cancel" },
  },
};
export const CenteredModal = {
  render: (args) => <Example {...args} />,
  args: {
    title: "Are you still there?",
    caption: "You will automatically be logged out after 10 mins",
    centered: true,
    style: "warning",
    remixIcon: "question-mark",
    primaryButton: { label: "Yes, I am still here" },
    secondaryButton: { label: "Log me out" },
  },
};
export const DangerModal_One_Button = {
  render: (args) => <Example {...args} />,
  args: {
    title: "Something went wrong",
    caption: "Please try again",
    centered: true,
    style: "danger",
    remixIcon: "error-warning-fill",
    primaryButton: { label: "Okay" },
  },
};
