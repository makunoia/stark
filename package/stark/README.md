# Stark UI

Stark UI is a reusable and extendable UI component library built using React and Tailwind CSS. It aims to provide a consistent, accessible, and customizable set of components to help developers create modern and responsive applications.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To start using the Stark UI in your project, follow these steps:

1. Install the package via npm or yarn.
2. Import the necessary components from the library.
3. Customize the UI using the provided Tailwind CSS configuration.

## Installation

Install the Stark UI package using npm or yarn:

```bash
npm install stark-lib
```

or

```bash
yarn add stark-lib
```

## Usage

Install Tailwind CSS in your consuming app

```bash
npm install tailwindcss
```

Then import necessarry tailwind classess in your `index.css` file. Don't forget to include the tokens that come with the library.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
@import "stark-lib/dist/tokens.css";
```

Initialize Tailwind CSS in your consuming app

```bash
npx tailwindcss init
```

Edit your `tailwind.config.js` file to include Stark UI's Tailwind CSS configuration. You can do this by importing `Stark` from `stark-lib` and using it as a plugin in your Tailwind config file.

```js
import { Stark, libraryPath } from "stark-lib";
module.exports = {
  content: ["./src/*.{js,ts,jsx,tsx}", libraryPath],
  plugins: [Stark],
};
```

It's imperative to include `libraryPath` to your config content. This ensures that your customizations are correctly applied to the components imported from Stark UI.

Import and use the components from the Stark UI in your React application:

```jsx
import React from "react";
import { Button } from "stark-lib";

const App = () => {
  return (
    <div>
      <Button intent="primary" label="Click me" />
    </div>
  );
};

export default App;
```

## Customization

Stark UI comes with a default Tailwind CSS configuration, which can be easily customized to match your application's branding and design requirements.

To do this, you can either override or extend the theme in your config. I'll prepare an API documentation for this.

```js
import { Stark, libraryPath } from "stark-lib";
module.exports = {
  content: ["./src/*.{js,ts,jsx,tsx}", libraryPath],
  theme: {
    extend: {
      backgroundColor: {
        brand: "#FF0000",
      },
      // Add more custom theme configuration here
    },
  },
  plugins: [Stark],
};
```

You can also override the base color tokens in your main CSS file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-50: 0deg 0% 100%;
  --brand-100: 252.86deg 19.44% 85.88%;
  --brand-200: 252deg 19.38% 74.71%;
  --brand-300: 251.67deg 19.35% 63.53%;
  --brand-400: 252.5deg 20% 52.94%;
  --brand-500: 253.45deg 26.61% 42.75%;
  --brand-600: 252.54deg 40.12% 32.75%;
  --brand-700: 252.86deg 44.87% 30.59%;
  --brand-800: 252.5deg 49.32% 28.63%;
  --brand-900: 252.33deg 54.07% 26.47%;
  --brand-1000: 252.8deg 60% 24.51%;
  --brand-1100: 252.31deg 68.42% 22.35%;
}
```

## Contributing

We welcome contributions to improve the Stark UI. To contribute:

1. Fork the repository.
2. Create a new branch with your changes.
3. Submit a pull request with a detailed description of your changes.

Please ensure your changes follow the code style and conventions of the project.

## License

Stark UI is licensed under the [MIT License](LICENSE).
