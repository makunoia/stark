"use client";
import { textStyles } from "../lib/typography.js";
import Text from "../components/molecules/Text.js";

import React, { useEffect, useId, useState, type AnchorHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import IconButton from "../components/IconButton.js";
import { cn } from "../lib/utils.js";

export interface AdminNavigationItem { label: string; href: string; icon?: ReactNode; active?: boolean }
export interface AdminNavigationGroup { label?: string; items: AdminNavigationItem[] }
export type AdminLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
export interface AdminLayoutProps extends HTMLAttributes<HTMLDivElement> {
  branding?: ReactNode;
  navigation: AdminNavigationGroup[];
  sidebarFooter?: ReactNode;
  breadcrumb?: ReactNode;
  topbarActions?: ReactNode;
  renderLink?: (props: AdminLinkProps) => ReactNode;
}

function Navigation({ navigation, renderLink, onNavigate }: { navigation: AdminNavigationGroup[]; renderLink: (props: AdminLinkProps) => ReactNode; onNavigate: () => void }) {
  return <nav aria-label="Main navigation" className="stark-admin-nav">{navigation.map((group, index) => <div key={index}>
      {group.label && <Text as="p" inherit className="stark-nav-group">{group.label}</Text>}
      {group.items.map(item => <React.Fragment key={item.href}>{renderLink({ href: item.href, className: "stark-nav-link", "aria-current": item.active ? "page" : undefined, onClick: onNavigate, children: <>{item.icon && <Text as="span" inherit aria-hidden="true">{item.icon}</Text>}<Text inherit>{item.label}</Text></> })}</React.Fragment>)}
    </div>)}</nav>;
}

export function AdminLayout({ branding, navigation, sidebarFooter, breadcrumb, topbarActions, renderLink = props => <a {...props} />, children, className, ...props }: AdminLayoutProps) {
  const [open, setOpen] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const mainId = `stark-main-${useId()}`;
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const close = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  return <div {...props} className={cn(textStyles({ variant: "page-body" }), "stark-admin", className)}>
    <a className="stark-skip-link" href={`#${mainId}`}>Skip to content</a>
    <aside className="stark-admin-sidebar"><div className="stark-admin-logo">{branding}</div><Navigation navigation={navigation} renderLink={renderLink} onNavigate={() => setOpen(false)} /><div className="stark-sidebar-footer">{sidebarFooter}</div></aside>
    <div className="stark-admin-body">
      <header className="stark-admin-topbar">
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <span className="stark-mobile-menu"><Dialog.Trigger asChild><IconButton className="stark-template-icon" aria-label="Open navigation" type="button" icon={<Menu />} onClick={event => setKeyboard(event.detail === 0)} /></Dialog.Trigger></span>
          <Dialog.Portal><Dialog.Overlay className="stark-navigation-overlay" data-keyboard={keyboard || undefined} />
            <Dialog.Content className={textStyles({ variant: "page-body", className: "stark-mobile-sidebar" })} data-keyboard={keyboard || undefined} aria-describedby={undefined}>
              <div className="stark-admin-logo"><Dialog.Title asChild><div>{branding || "Navigation"}</div></Dialog.Title><Dialog.Close asChild><IconButton type="button" className="stark-template-icon" aria-label="Close navigation" icon={<X />} /></Dialog.Close></div>
              <Navigation navigation={navigation} renderLink={renderLink} onNavigate={() => setOpen(false)} /><div className="stark-sidebar-footer">{sidebarFooter}</div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <div className="stark-breadcrumb">{breadcrumb}</div><div className="stark-actions">{topbarActions}</div>
      </header>
      <main id={mainId} tabIndex={-1} className="stark-admin-content">{children}</main>
    </div>
  </div>;
}
