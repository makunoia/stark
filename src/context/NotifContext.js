import React, { createContext, useContext, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import Alert from "../components/Alert";
import Toast from "../components/Toast";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuid } from "uuid"; // Import the uuid package

const AlertContext = createContext();
const ToastContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const hideAlert = (id) => {
    setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
  };

  const showAlert = useCallback((variant, title, message, action) => {
    const alertID = uuid();
    const newAlert = {
      id: alertID,
      title,
      message,
      variant,
      action,
      onClose: () => hideAlert(alertID),
    };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
  }, []);

  const value = {
    alert: {
      notify: ({ title, message, action }) => {
        showAlert("", title, message, action);
      },
      info: ({ title, message, action }) => {
        showAlert("info", title, message, action);
      },
      success: ({ title, message, action }) => {
        showAlert("success", title, message, action);
      },
      warning: ({ title, message, action }) => {
        showAlert("warning", title, message, action);
      },
      danger: ({ title, message, action }) => {
        showAlert("danger", title, message, action);
      },
    },
  };

  const wrappedAlert = (
    <AlertContext.Provider value={value}>
      {children}
      <AlertWrapper>
        <AnimatePresence mode="popLayout">
          {alerts.map((alert) => (
            <motion.div
              layout
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ type: "spring" }}
              key={alert.id}
              className="pt-8px"
            >
              <Alert {...alert} />
            </motion.div>
          ))}
        </AnimatePresence>
      </AlertWrapper>
    </AlertContext.Provider>
  );

  return ReactDOM.createPortal(wrappedAlert, document.body);
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const hideToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const showToast = useCallback((variant, title, message, action) => {
    const toastID = uuid();
    const newToast = {
      id: toastID,
      title,
      message,
      variant,
      action,
      onClose: () => hideToast(toastID),
    };

    setToasts((prevToasts) => [...prevToasts, newToast]);
  }, []);

  const value = {
    toaster: {
      notify: ({ title, message, action }) => {
        showToast("", title, message, action);
      },
      info: ({ title, message, action }) => {
        showToast("info", title, message, action);
      },
      success: ({ title, message, action }) => {
        showToast("success", title, message, action);
      },
      warning: ({ title, message, action }) => {
        showToast("warning", title, message, action);
      },
      danger: ({ title, message, action }) => {
        showToast("danger", title, message, action);
      },
    },
  };

  const wrappedToast = (
    <ToastContext.Provider value={value}>
      {children}
      <ToastWrapper>
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ y: 2, opacity: 0 }}
              transition={{ type: "spring" }}
              key={toast.id}
              className="pt-8px"
            >
              <Toast {...toast} />
            </motion.div>
          ))}
        </AnimatePresence>
      </ToastWrapper>
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
