"use client";

import React, { useId, useRef, useState, type CSSProperties, type FormHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";
import Button from "../components/Button.js";
import Input from "../components/Input.js";
import Checkbox from "../components/Checkbox.js";
import { cn } from "../lib/utils.js";

export interface PageSectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
}

export function PageSection({ title, description, actions, children, className, ...props }: PageSectionProps) {
  const id = useId();
  return <section aria-labelledby={title ? id : undefined} {...props} className={cn("stark-page-section", className)}>
    {(title || description || actions) && <div className="stark-page-heading">
      <div>{title && <h2 id={id}>{title}</h2>}{description && <p className="stark-muted">{description}</p>}</div>{actions}
    </div>}
    {children}
  </section>;
}

export interface LoginValues { email: string; password: string; rememberMe: boolean }
export interface LoginTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSubmit" | "title"> {
  title?: ReactNode;
  description?: ReactNode;
  branding?: ReactNode;
  supportingContent?: ReactNode;
  recoveryLink?: ReactNode;
  footer?: ReactNode;
  submitLabel?: string;
  error?: ReactNode;
  submitting?: boolean;
  onSubmit: (values: LoginValues) => void | Promise<void>;
}

export function LoginTemplate({ title = "Welcome back", description = "Sign in to your account to continue.", branding, supportingContent, recoveryLink, footer, submitLabel = "Sign in", error, submitting = false, onSubmit, className, ...props }: LoginTemplateProps) {
  const [pending, setPending] = useState(false);
  const [failure, setFailure] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const busy = submitting || pending;
  const id = useId();
  return <div {...props} className={cn("stark-login", className)}>
    <aside className="stark-login-brand"><div>{branding}</div><div className="stark-login-support">{supportingContent}</div><p>Thoughtful tools. Everyday work.</p></aside>
    <main className="stark-login-main">
      <div className="stark-login-form">
        <header><h1>{title}</h1><p className="stark-muted">{description}</p></header>
        <form noValidate aria-busy={busy} onSubmit={async event => {
          event.preventDefault();
          if (busy) return;
          const form = new FormData(event.currentTarget);
          const email = String(form.get("email") ?? "").trim();
          const password = String(form.get("password") ?? "");
          const next = { email: !email || !emailRef.current?.validity.valid ? "Enter a valid email address." : undefined, password: !password ? "Enter your password." : undefined };
          setErrors(next); setFailure("");
          if (next.email || next.password) { (next.email ? emailRef : passwordRef).current?.focus(); return; }
          setPending(true);
          try { await onSubmit({ email, password, rememberMe: form.get("rememberMe") === "on" }); }
          catch (cause) { setFailure(cause instanceof Error ? cause.message : "Unable to sign in. Please try again."); }
          finally { setPending(false); }
        }}>
          <Input ref={emailRef} label="Email address" placeholder="you@example.com" name="email" type="email" autoComplete="username" required fullWidth error={!!errors.email} helpText={errors.email} disabled={busy} />
          <Input ref={passwordRef} label="Password" placeholder="Enter your password" name="password" type="password" autoComplete="current-password" required fullWidth error={!!errors.password} helpText={errors.password} disabled={busy} />
          <div className="stark-login-options"><Checkbox label="Remember me" name="rememberMe" disabled={busy} />{recoveryLink}</div>
          {(error || failure) && <div role="alert" className="stark-error" id={`${id}-error`}>{error || failure}</div>}
          <Button className="stark-template-button" type="submit" label={busy ? "Signing in…" : submitLabel} intent="primary" disabled={busy} fullWidth />
          <span className="stark-sr-only" role="status">{busy ? "Signing in" : ""}</span>
        </form>
        {footer && <footer className="stark-muted">{footer}</footer>}
      </div>
    </main>
  </div>;
}

export interface ListPageTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  toolbar?: ReactNode;
}
export function ListPageTemplate({ title, description, actions, toolbar, children, className, ...props }: ListPageTemplateProps) {
  return <div {...props} className={cn("stark-list-page", className)}>
    <header className="stark-page-heading"><div><h1>{title}</h1>{description && <p className="stark-muted">{description}</p>}</div><div className="stark-actions">{actions}</div></header>
    {toolbar && <div className="stark-toolbar">{toolbar}</div>}{children}
  </div>;
}

export interface DetailPageTemplateProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  image?: ReactNode;
  status?: ReactNode;
  backLink?: ReactNode;
  actions?: ReactNode;
  supportingContent?: ReactNode;
  /** Defaults to the containing AdminLayout top bar, or 0 outside a portal. */
  stickyOffset?: CSSProperties["top"];
}
export function DetailPageTemplate({ title, image, status, backLink, actions, supportingContent, stickyOffset, children, className, ...props }: DetailPageTemplateProps) {
  return <div {...props} className={cn("stark-detail-page", className)}>
    <header className="stark-detail-header" style={{ top: stickyOffset ?? "var(--stark-topbar-height, 0px)" }}>
      {backLink && <div className="stark-detail-back">{backLink}</div>}
      <div className="stark-detail-heading">
        <div className="stark-detail-image">{image || <span aria-label="No image" role="img">◇</span>}</div>
        <div className="stark-detail-title"><h1>{title}</h1>{status}</div><div className="stark-actions">{actions}</div>
      </div>
    </header>
    <div className={cn("stark-detail-columns", !supportingContent && "stark-detail-single")}>
      <div className="stark-module-stack">{children}</div>
      {supportingContent && <aside aria-label="Supporting controls" className="stark-module-stack">{supportingContent}</aside>}
    </div>
  </div>;
}

export interface FormPageTemplateProps extends Omit<FormHTMLAttributes<HTMLFormElement>, "title"> {
  title: ReactNode;
  description?: ReactNode;
  backLink?: ReactNode;
  actions?: ReactNode;
  feedback?: ReactNode;
  submitting?: boolean;
}
export function FormPageTemplate({ title, description, backLink, actions, feedback, submitting = false, children, className, ...props }: FormPageTemplateProps) {
  return <form {...props} aria-busy={submitting} className={cn("stark-form-page", className)}>
    <header>{backLink}<h1>{title}</h1>{description && <p className="stark-muted">{description}</p>}</header>
    {feedback}<fieldset className="stark-form-fields" disabled={submitting}>{children}</fieldset>
    <footer className="stark-form-actions">{actions}</footer>
  </form>;
}
