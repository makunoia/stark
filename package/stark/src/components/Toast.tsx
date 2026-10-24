"use client";
import React from "react";
import Notification, { type NotificationProps } from "./Notification.js";
export type ToastProps = NotificationProps;
export default function Toast(props: ToastProps) {
  return <Notification {...props} kind="toast" />;
}
