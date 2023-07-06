import React, { createContext, useContext, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import Alert from "../components/Alert";
import Toast from "../components/Toast";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { v4 as uuid } from "uuid"; // Import the uuid package

const AlertContext = createContext();
const ToastContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const hideAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  const showAlert = useCallback((variant, title, message, action, duration) => {
    const alertID = uuid();
    const newAlert = {
      id: alertID,
      title,
      message,
      variant,
      action,
      duration,
      onClose: () => hideAlert(alertID),
    };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  }, []);

  const value = {
    alert: {
      notify: ({ title, message, action, icon, duration }) => {
        showAlert("", title, message, action, icon, duration);
      },
      info: ({ title, message, action, icon, duration }) => {
        showAlert("info", title, message, action, icon, duration);
      },
      success: ({ title, message, action, icon, duration }) => {
        showAlert("success", title, message, action, icon, duration);
      },
      warning: ({ title, message, action, icon, duration }) => {
        showAlert("warning", title, message, action, icon, duration);
      },
      danger: ({ title, message, action, icon, duration }) => {
        showAlert("danger", title, message, action, icon, duration);
      },
    },
  };

  const wrappedAlert = (
    <AlertContext.Provider value={value}>
      {children}
      <LayoutGroup>
        <motion.div layout layoutRoot>
          <AlertWrapper>
            <AnimatePresence mode="popLayout">
              {alerts.map((alert) => (
                <motion.div
                  layout
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    ease: "easeInOut",
                  }}
                  key={alert.id}
                  className="pt-8px"
                >
                  <Alert {...alert} />
                </motion.div>
              ))}
            </AnimatePresence>
          </AlertWrapper>
        </motion.div>
      </LayoutGroup>
    </AlertContext.Provider>
  );

  return ReactDOM.createPortal(wrappedAlert, document.body);
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const hideToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showToast = useCallback(
    (variant, title, message, action, icon, duration) => {
      const toastID = uuid();
      const newToast = {
        id: toastID,
        title,
        message,
        variant,
        action,
        icon,
        duration,
        onClose: () => hideToast(toastID),
      };

      setToasts((prevToasts) => [...prevToasts, newToast]);
    },
    []
  );

  const value = {
    toaster: {
      notify: ({ title, message, action, icon, duration }) => {
        showToast("", title, message, action, icon, duration);
      },
      info: ({ title, message, action, icon, duration }) => {
        showToast("info", title, message, action, icon, duration);
      },
      success: ({ title, message, action, icon, duration }) => {
        showToast("success", title, message, action, icon, duration);
      },
      warning: ({ title, message, action, icon, duration }) => {
        showToast("warning", title, message, action, icon, duration);
      },
      danger: ({ title, message, action, icon, duration }) => {
        showToast("danger", title, message, action, icon, duration);
      },
    },
  };

  const wrappedToast = (
    <ToastContext.Provider value={value}>
      {children}
      <LayoutGroup>
        <motion.div layout layoutRoot>
          <ToastWrapper>
            <AnimatePresence mode="popLayout">
              {toasts.map((toast) => (
                <motion.div
                  layout
                  key={`toast-${toast.id}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    ease: "easeInOut",
                  }}
                  className="pt-8px"
                >
                  <Toast {...toast} layoutId={toast.id} />
                </motion.div>
              ))}
            </AnimatePresence>
          </ToastWrapper>
        </motion.div>
      </LayoutGroup>
    </ToastContext.Provider>
  );

  return ReactDOM.createPortal(wrappedToast, document.body);
};

const AlertWrapper = ({ children }) => (
  <div className="h-full w-full flex flex-col items-end content-start justify-start p-16px fixed top-0 left-0 bottom-0 right-0 z-10 pointer-events-none">
    {children}
  </div>
);

const ToastWrapper = ({ children }) => (
  <div className="h-full w-full flex flex-col items-center align-center justify-end p-40px fixed top-0 left-0 bottom-0 right-0 z-10 pointer-events-none">
    {children}
  </div>
);

export const useAlert = () => {
  return useContext(AlertContext);
};

export const useToast = () => {
  return useContext(ToastContext);
};
