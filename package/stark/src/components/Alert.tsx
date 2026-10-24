"use client";
import React from "react";
import Notification, { type NotificationProps } from "./Notification.js";
export type AlertProps = NotificationProps;
export default function Alert(props: AlertProps) {
  return <Notification {...props} kind="alert" />;
}
