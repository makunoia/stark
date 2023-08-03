# Stark Design System

Stark Design System is a reusable and extendable UI component library built using React and Tailwind CSS. It aims to provide a consistent, accessible, and customizable set of components to help developers create modern and responsive applications.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To start using the Stark Design System in your project, follow these steps:

1. Install the package via npm or yarn.
2. Import the necessary components from the library.
3. Customize the design system using the provided Tailwind CSS configuration.

## Installation

Install the Stark Design System package using npm or yarn:

```bash
npm install @eventful-ph/stark
```

or

```bash
yarn add @eventful-ph/stark
```

## Usage

Install Tailwind CSS in your consuming app

```bash
npm install tailwindcss
```

Then import necessarry tailwind classess in your `index.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Initialize Tailwind CSS in your consuming app

```bash
npx tailwindcss init
```

Edit your `tailwind.config.js` file to include the Stark Design System's Tailwind CSS configuration

```js
import { Stark } from "@eventful-ph/stark";
module.exports = {
  content: [
    "./node_modules/@eventful-ph/stark/dist/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@eventful-ph/stark/dist/components/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme configuration here
    },
  },
  plugins: [Stark],
};
```

Import and use the components from the Stark Design System in your React application:

```jsx
import React from "react";
import { Button } from "@eventful-ph/stark";

const App = () => {
  return (
    <div>
      <Button color="primary">Click me</Button>
    </div>
  );
};

export default App;
```

## Customization

Stark Design System comes with a default Tailwind CSS configuration, which can be easily customized to match your application's branding and design requirements.

Create a `tailwind.config.js` file in your consuming app and import the `Stark` from "@eventful-ph/stark". Don't forget to include the component library's tailwind classes to the content .

```js
import { Stark } from "@eventful-ph/stark";
module.exports = {
  content: [
    "./node_modules/@eventful-ph/stark/dist/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@eventful-ph/stark/dist/components/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Your custom theme configuration here
    },
  },
  plugins: [Stark],
};
```

Make sure to point to the components in the `node_modules` folder in your `tailwind.config.js` file, as shown in the example above. This ensures that your customizations are correctly applied to the components imported from the Stark Design System.

## Contributing

We welcome contributions to improve the Stark Design System. To contribute:

1. Fork the repository.
2. Create a new branch with your changes.
3. Submit a pull request with a detailed description of your changes.

Please ensure your changes follow the code style and conventions of the project.

## License

Stark Design System is licensed under the [MIT License](LICENSE).
