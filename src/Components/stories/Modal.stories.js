import React from "react";
import Modal from "../Modal";
import { useState } from "react";
import TextField from "../TextField";
import { useEffect } from "react";

export default {
  title: "Modal",
  component: Modal,
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  const closeModalHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsVisible(true);
    }, 1000);
  };

  const onPrimaryClick = () => {
    // alert("Primary Button Click");
    setIsSubmitting(true);
    setTimeout(() => {
      closeModalHandler();
    }, 1000);
  };

  const modal = (
    <Modal
      title={args.title}
      caption={args.caption}
      show={isVisible}
      onClose={closeModalHandler}
      size={args.size}
      style={args.style}
      icon={args.icon}
      remixIcon={args.remixIcon}
      centered={args.centered}
      primaryButton={{
        ...args?.primaryButton,
        onClick: onPrimaryClick,
        isLoading: isSubmitting,
      }}
      secondaryButton={args?.secondaryButton}
      tertiaryButton={args?.tertiaryButton}
    >
      {args.body}
    </Modal>
  );

  return (
    <div>
      {/* <Button onClick={() => setIsVisible(!isVisible)} label="Open Modal" /> */}
      {modal}
    </div>
  );
};

const Form_Template = (args) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  const closeModalHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  const onPrimaryClick = (e) => {
    setIsSubmitting(true);
    console.log("API calls");
    setTimeout(() => {
      setIsSubmitting(false);
      closeModalHandler();
    }, 3000);
  };

  const modal = (
    <Modal
      title={args.title}
      caption={args.caption}
      show={isVisible}
      onClose={closeModalHandler}
      size={args.size}
      style={args.style}
      icon={args.icon}
      remixIcon={args.remixIcon}
      centered={args.centered}
      primaryButton={{
        ...args?.primaryButton,
        onClick: onPrimaryClick,
        isLoading: isSubmitting,
      }}
      secondaryButton={{
        ...args?.secondaryButton,
        onClick: onPrimaryClick,
      }}
      tertiaryButton={args?.tertiaryButton}
    >
      {args.body}
    </Modal>
  );

  return <div>{modal}</div>;
};

const commonArgs = {
  title: "Modal Title",
  caption: "A sentence that describes what's happening",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat facilisis turpis, non aliquam massa. Ut eu risus ante. Aliquam sagittis pellentesque rhoncus. Suspendisse auctor laoreet sem, id pulvinar felis molestie et.",
  size: "default",
  centered: false,
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  ...commonArgs,
};

export const Modal_with_Form = Form_Template.bind({});
Modal_with_Form.args = {
  ...commonArgs,
  title: "Login",
  caption: "Enter your username and password",
  body: (
    <div className="flex flex-col gap-12px">
      <TextField label="Username" />
      <TextField label="Password" type="password" />
    </div>
  ),
  primaryButton: {
    label: "Login",
    isLoading: true,
  },
  secondaryButton: {
    label: "Cancel",
  },
};

export const CenteredModal = Template.bind({});
CenteredModal.args = {
  ...commonArgs,
  title: "Are you still there?",
  caption: "You will automatically be logged out after 10 mins",
  centered: true,
  style: "warning",
  remixIcon: "question-mark",
  primaryButton: {
    label: "Yes, I am still here",
  },
  secondaryButton: {
    label: "Log me out",
  },
};

export const DangerModal_One_Button = Template.bind({});
DangerModal_One_Button.args = {
  ...commonArgs,
  title: "Something went wrong",
  caption: "Please try again",
  centered: true,
  style: "danger",
  remixIcon: "error-warning-fill",
  primaryButton: {
    label: "Okay",
    onClick: () => setIsVisible(false),
  },
  secondaryButton: null,
};
