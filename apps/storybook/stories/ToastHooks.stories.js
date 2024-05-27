import React from "react";
import Button from "@makunoia/stark/components/Button";
import Toast from "@makunoia/stark/components/Toast";
import { ToastProvider, useToast } from "@makunoia/stark/context/NotifContext";

export default {
  title: "Hooks/Toast Hook",
  components: Toast,
};

const ToastHookSample = () => {
  const { toaster } = useToast();

  const handleDefaultButtonClick = () => {
    toaster.notify({
      // title: "Hey",
      message: "Welcome",
      action: { label: "Greet", onClick: () => alert("Hello there!") },
      onClose: () => alert("onClose works"),
    });
  };

  const handleInfoButtonClick = () => {
    toaster.info({
      title: "v10.1",
      message: "New update available",
      action: { label: "Update", onClick: () => alert("Updating...") },
    });
  };

  const handleSuccessButtonClick = () => {
    toaster.success({
      // title: "FYI",
      message: "Image uploaded",
      // action: { label: "Greet", onClick: () => alert("hey") },
    });
  };

  const handleWarningButtonClick = () => {
    toaster.warning({
      // title: "FYI",
      message: "This is an overdue application",
      // action: { label: "Greet", onClick: () => alert("hey") },
    });
  };

  const handleDangerButtonClick = () => {
    toaster.danger({
      title: "Bad Gateway",
      message: "We couldn't connect",
      action: { label: "Refresh", onClick: () => alert("Refreshing...") },
    });
  };

  return (
    <div className="flex flex-row gap-8px">
      <Button
        type="outline"
        variant="dark"
        label="Show Default Toast"
        onClick={handleDefaultButtonClick}
      />
      <Button
        type="outline"
        variant="info"
        label="Show Info Toast"
        onClick={handleInfoButtonClick}
      />
      <Button
        type="outline"
        variant="success"
        label="Show Success Toast"
        onClick={handleSuccessButtonClick}
      />
      <Button
        type="outline"
        variant="warning"
        label="Show Warning Toast"
        onClick={handleWarningButtonClick}
      />
      <Button
        type="outline"
        variant="danger"
        label="Show Danger Toast"
        onClick={handleDangerButtonClick}
      />
    </div>
  );
};
const ToastProviderSample = (args) => {
  return (
    <ToastProvider>
      <ToastHookSample />
    </ToastProvider>
  );
};
export const ToastHook = ToastProviderSample.bind({});
