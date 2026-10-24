import React from "react";
import { Button } from "stark-lib";
const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header className="flex items-center justify-between border-b border-subtle p-24px">
    <h1>Stark</h1>
    <div className="flex gap-8px">
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          <Button label="Log out" onClick={onLogout} />
        </>
      ) : (
        <>
          <Button label="Log in" onClick={onLogin} />
          <Button label="Sign up" intent="primary" onClick={onCreateAccount} />
        </>
      )}
    </div>
  </header>
);
import { fn } from "storybook/test";

export default {
  title: "Examples/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
