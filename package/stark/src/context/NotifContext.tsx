"use client";
import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
  useId,
  useRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NotificationPresenceContext } from "../components/Notification.js";
import Alert from "../components/Alert.js";
import Toast from "../components/Toast.js";
import type {
  NotificationProps,
  NotificationVariant,
} from "../components/Notification.js";
export type NotificationOptions = Omit<NotificationProps, "variant" | "id">;
export type NotificationMethods = Record<
  "notify" | "info" | "success" | "warning" | "danger",
  (options: NotificationOptions) => string
> & { dismiss: (id: string) => void };
const AlertContext = createContext<{ alert: NotificationMethods } | null>(null);
const ToastContext = createContext<{ toaster: NotificationMethods } | null>(
  null,
);
function NotificationProvider({
  kind,
  children,
}: {
  kind: "alert" | "toast";
  children?: ReactNode;
}) {
  const [items, setItems] = useState<NotificationProps[]>([]);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  const prefix = useId();
  const counter = useRef(0);
  useEffect(() => {
    setMounted(true);
  }, []);
  const dismiss = useCallback(
    (id: string) =>
      setItems((previous) => previous.filter((item) => item.id !== id)),
    [],
  );
  const methods = useMemo(() => {
    const show = (
      variant: NotificationVariant,
      options: NotificationOptions,
    ) => {
      const id = `${prefix}-${++counter.current}`;
      setItems((previous) => [
        ...previous,
        {
          ...options,
          id,
          variant,
          onClose: () => {
            dismiss(id);
            options.onClose?.();
          },
        },
      ]);
      return id;
    };
    return {
      notify: (options: NotificationOptions) =>
        show(kind === "alert" ? "primary" : "default", options),
      info: (options: NotificationOptions) => show("info", options),
      success: (options: NotificationOptions) => show("success", options),
      warning: (options: NotificationOptions) => show("warning", options),
      danger: (options: NotificationOptions) => show("danger", options),
      dismiss,
    };
  }, [dismiss, kind, prefix]);
  const alerts = useMemo(() => ({ alert: methods }), [methods]);
  const toasts = useMemo(() => ({ toaster: methods }), [methods]);
  const Item = kind === "alert" ? Alert : Toast;
  const content = (
    <>
      {children}
      {mounted &&
        createPortal(
          <div
            className={`stark-notification-stack fixed inset-[0px] pointer-events-none flex flex-col p-16px gap-8px z-[100] ${kind === "alert" ? "items-end justify-start" : "items-center justify-end pb-40px"}`}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="stark-notification-position max-w-full"
                  layout={reduce ? false : "position"}
                  transition={{
                    layout: { type: "spring", duration: 0.28, bounce: 0 },
                  }}
                >
                  {/* Separate stack reflow from entrance/exit transforms. */}
                  <motion.div
                    className="stark-notification-motion"
                    initial={{
                      opacity: 0,
                      transform: reduce
                        ? "none"
                        : kind === "alert"
                          ? "translateX(16px)"
                          : "translateY(16px)",
                    }}
                    animate={{ opacity: 1, transform: "none" }}
                    exit={{
                      opacity: 0,
                      transform: reduce
                        ? "none"
                        : kind === "alert"
                          ? "translateX(16px)"
                          : "translateY(16px)",
                      transition: {
                        duration: 0.16,
                        ease: [0.23, 1, 0.32, 1],
                      },
                    }}
                    transition={{
                      type: "spring",
                      duration: 0.28,
                      bounce: 0,
                      opacity: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
                    }}
                  >
                    <NotificationPresenceContext.Provider value={true}>
                      <Item {...item} />
                    </NotificationPresenceContext.Provider>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>,
          document.body,
        )}
    </>
  );
  return kind === "alert" ? (
    <AlertContext.Provider value={alerts}>{content}</AlertContext.Provider>
  ) : (
    <ToastContext.Provider value={toasts}>{content}</ToastContext.Provider>
  );
}
export function AlertProvider({ children }: { children?: ReactNode }) {
  return <NotificationProvider kind="alert">{children}</NotificationProvider>;
}
export function ToastProvider({ children }: { children?: ReactNode }) {
  return <NotificationProvider kind="toast">{children}</NotificationProvider>;
}
export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert requires AlertProvider");
  return context;
}
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast requires ToastProvider");
  return context;
}
