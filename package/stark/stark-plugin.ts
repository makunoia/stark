import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";
const { fontFamily } = require("tailwindcss/defaultTheme");

export const Stark = plugin(
  function ({ addBase }: PluginAPI) {
    addBase({
      body: {
        margin: "0",
        fontFamily: "Geist Sans, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textSizeAdjust: "100%",
        textRendering: "optimizeLegibility",
      },
    });
  },

  {
    theme: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "brand-50": "hsl(var(--brand-50))",
        "brand-100": "hsl(var(--brand-100))",
        "brand-200": "hsl(var(--brand-200))",
        "brand-300": "hsl(var(--brand-300))",
        "brand-400": "hsl(var(--brand-400))",
        "brand-500": "hsl(var(--brand-500))",
        "brand-600": "hsl(var(--brand-600))",
        "brand-700": "hsl(var(--brand-700))",
        "brand-800": "hsl(var(--brand-800))",
        "brand-900": "hsl(var(--brand-900))",
        "brand-1000": "hsl(var(--brand-1000))",
        "brand-1100": "hsl(var(--brand-1100))",

        "blue-50": "hsl(var(--blue-50))",
        "blue-100": "hsl(var(--blue-100))",
        "blue-200": "hsl(var(--blue-200))",
        "blue-300": "hsl(var(--blue-300))",
        "blue-400": "hsl(var(--blue-400))",
        "blue-500": "hsl(var(--blue-500))",
        "blue-600": "hsl(var(--blue-600))",
        "blue-700": "hsl(var(--blue-700))",
        "blue-800": "hsl(var(--blue-800))",
        "blue-900": "hsl(var(--blue-900))",
        "blue-1000": "hsl(var(--blue-1000))",
        "blue-1100": "hsl(var(--blue-1100))",

        "green-50": "hsl(var(--green-50))",
        "green-100": "hsl(var(--green-100))",
        "green-200": "hsl(var(--green-200))",
        "green-300": "hsl(var(--green-300))",
        "green-400": "hsl(var(--green-400))",
        "green-500": "hsl(var(--green-500))",
        "green-600": "hsl(var(--green-600))",
        "green-700": "hsl(var(--green-700))",
        "green-800": "hsl(var(--green-800))",
        "green-900": "hsl(var(--green-900))",
        "green-1000": "hsl(var(--green-1000))",
        "green-1100": "hsl(var(--green-1100))",

        "yellow-50": "hsl(var(--yellow-50))",
        "yellow-100": "hsl(var(--yellow-100))",
        "yellow-200": "hsl(var(--yellow-200))",
        "yellow-300": "hsl(var(--yellow-300))",
        "yellow-400": "hsl(var(--yellow-400))",
        "yellow-500": "hsl(var(--yellow-500))",
        "yellow-600": "hsl(var(--yellow-600))",
        "yellow-700": "hsl(var(--yellow-700))",
        "yellow-800": "hsl(var(--yellow-800))",
        "yellow-900": "hsl(var(--yellow-900))",
        "yellow-1000": "hsl(var(--yellow-1000))",
        "yellow-1100": "hsl(var(--yellow-1100))",

        "red-50": "hsl(var(--red-50))",
        "red-100": "hsl(var(--red-100))",
        "red-200": "hsl(var(--red-200))",
        "red-300": "hsl(var(--red-300))",
        "red-400": "hsl(var(--red-400))",
        "red-500": "hsl(var(--red-500))",
        "red-600": "hsl(var(--red-600))",
        "red-700": "hsl(var(--red-700))",
        "red-800": "hsl(var(--red-800))",
        "red-900": "hsl(var(--red-900))",
        "red-1000": "hsl(var(--red-1000))",
        "red-1100": "hsl(var(--red-1100))",

        "neutral-50": "hsl(var(--neutral-50))",
        "neutral-100": "hsl(var(--neutral-100))",
        "neutral-200": "hsl(var(--neutral-200))",
        "neutral-300": "hsl(var(--neutral-300))",
        "neutral-400": "hsl(var(--neutral-400))",
        "neutral-500": "hsl(var(--neutral-500))",
        "neutral-600": "hsl(var(--neutral-600))",
        "neutral-700": "hsl(var(--neutral-700))",
        "neutral-800": "hsl(var(--neutral-800))",
        "neutral-900": "hsl(var(--neutral-900))",
        "neutral-1000": "hsl(var(--neutral-1000))",
        "neutral-1100": "hsl(var(--neutral-1100))",

        // Added for Gradients
        background: "hsl(var(--bg))",
        subtle: "hsl(var(--bg-subtle))",
        disabled: "hsl(var(--bg-disabled))",
      },
      backgroundColor: {
        transparent: "rgba(var(--bg), var(--opacity-0))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          sunken: "hsl(var(--surface-sunken))",
          raised: "hsl(var(--surface-raised))",
        },
        DEFAULT: "hsl(var(--bg))",
        subtle: "hsl(var(--bg-subtle))",
        hover: "hsl(var(--bg-hover))",
        active: "hsl(var(--bg-active))",
        disabled: "hsl(var(--bg-disabled))",

        selected: {
          DEFAULT: "hsl(var(--bg-selected-))",
          subtle: "hsl(var(--bg-selected-subtle))",
        },

        inverse: {
          DEFAULT: "hsl(var(--bg-inverse))",
          subtle: "hsl(var(--bg-inverse-subtle))",
          hover: "hsl(var(--bg-inverse-hover))",
          active: "hsl(var(--bg-inverse-active))",
          disabled: "hsl(var(--bg-inverse-disabled))",
        },

        brand: {
          DEFAULT: "hsl(var(--bg-brand))",
          hover: "hsl(var(--bg-brand-hover))",
          active: "hsl(var(--bg-brand-active))",
          disabled: "hsl(var(--bg-brand-disabled))",
          subtle: {
            DEFAULT: "hsl(var(--bg-brand-subtle))",
            hover: "hsl(var(--bg-brand-subtle-hover))",
            active: "hsl(var(--bg-brand-subtle-active))",
          },
        },

        info: {
          DEFAULT: "hsl(var(--bg-info))",
          hover: "hsl(var(--bg-info-hover))",
          active: "hsl(var(--bg-info-active))",
          disabled: "hsl(var(--bg-info-disabled))",
          subtle: {
            DEFAULT: "hsl(var(--bg-info-subtle))",
            hover: "hsl(var(--bg-info-subtle-hover))",
            active: "hsl(var(--bg-info-subtle-active))",
          },
        },

        success: {
          DEFAULT: "hsl(var(--bg-success))",
          hover: "hsl(var(--bg-success-hover))",
          active: "hsl(var(--bg-success-active))",
          disabled: "hsl(var(--bg-success-disabled))",
          subtle: {
            DEFAULT: "hsl(var(--bg-success-subtle))",
            hover: "hsl(var(--bg-success-subtle-hover))",
            active: "hsl(var(--bg-success-subtle-active))",
          },
        },

        warning: {
          DEFAULT: "hsl(var(--bg-warning))",
          hover: "hsl(var(--bg-warning-hover))",
          active: "hsl(var(--bg-warning-active))",
          disabled: "hsl(var(--bg-warning-disabled))",
          subtle: {
            DEFAULT: "hsl(var(--bg-warning-subtle))",
            hover: "hsl(var(--bg-warning-subtle-hover))",
            active: "hsl(var(--bg-warning-subtle-active))",
          },
        },

        danger: {
          DEFAULT: "hsl(var(--bg-danger))",
          hover: "hsl(var(--bg-danger-hover))",
          active: "hsl(var(--bg-danger-active))",
          disabled: "hsl(var(--bg-danger-disabled))",
          subtle: {
            DEFAULT: "hsl(var(--bg-danger-subtle))",
            hover: "hsl(var(--bg-danger-subtle-hover))",
            active: "hsl(var(--bg-danger-subtle-active))",
          },
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
        subtle: "hsl(var(--border-subtle))",
        disabled: "hsl(var(--border-disabled))",
        active: "hsl(var(--border-active))",
        selected: {
          DEFAULT: "hsl(var(--border-selected))",
          subtle: "hsl(var(--border-selected-subtle))",
        },
        inverse: {
          DEFAULT: "hsl(var(--border-inverse))",
          subtle: "hsl(var(--border-inverse-subtle))",
          disabled: "hsl(var(--border-inverse-disabled))",
        },
        brand: {
          DEFAULT: "hsl(var(--border-brand))",
          subtle: "hsl(var(--border-brand-subtle))",
        },
        info: {
          DEFAULT: "hsl(var(--border-info))",
          subtle: "hsl(var(--border-info-subtle))",
        },
        success: {
          DEFAULT: "hsl(var(--border-success))",
          subtle: "hsl(var(--border-success-subtle))",
        },
        warning: {
          DEFAULT: "hsl(var(--border-warning))",
          subtle: "hsl(var(--border-warning-subtle))",
        },
        danger: {
          DEFAULT: "hsl(var(--border-danger))",
          subtle: "hsl(var(--border-danger-subtle))",
        },
      },
      outlineColor: {
        DEFAULT: "hsl(var(--border))",
        subtle: "hsl(var(--border-subtle))",
        disabled: "hsl(var(--border-disabled))",
        active: "hsl(var(--border-active))",
        selected: {
          DEFAULT: "hsl(var(--border-selected))",
          subtle: "hsl(var(--border-selected-subtle))",
        },
        inverse: {
          DEFAULT: "hsl(var(--border-inverse))",
          subtle: "hsl(var(--border-inverse-subtle))",
          disabled: "hsl(var(--border-inverse-disabled))",
        },
        brand: {
          DEFAULT: "hsl(var(--border-brand))",
          subtle: "hsl(var(--border-brand-subtle))",
        },
        info: {
          DEFAULT: "hsl(var(--border-info))",
          subtle: "hsl(var(--border-info-subtle))",
        },
        success: {
          DEFAULT: "hsl(var(--border-success))",
          subtle: "hsl(var(--border-success-subtle))",
        },
        warning: {
          DEFAULT: "hsl(var(--border-warning))",
          subtle: "hsl(var(--border-warning-subtle))",
        },
        danger: {
          DEFAULT: "hsl(var(--border-danger))",
          subtle: "hsl(var(--border-danger-subtle))",
        },
      },
      ringColor: {
        DEFAULT: "hsl(var(--border))",
        subtle: "hsl(var(--border-subtle))",
        disabled: "hsl(var(--border-disabled))",
        active: "hsl(var(--border-active))",
        selected: {
          DEFAULT: "hsl(var(--border-selected))",
          subtle: "hsl(var(--border-selected-subtle))",
        },
        inverse: {
          DEFAULT: "hsl(var(--border-inverse))",
          subtle: "hsl(var(--border-inverse-subtle))",
          disabled: "hsl(var(--border-inverse-disabled))",
        },
        brand: {
          DEFAULT: "hsl(var(--border-brand))",
          subtle: "hsl(var(--border-brand-subtle))",
        },
        info: {
          DEFAULT: "hsl(var(--border-info))",
          subtle: "hsl(var(--border-info-subtle))",
        },
        success: {
          DEFAULT: "hsl(var(--border-success))",
          subtle: "hsl(var(--border-success-subtle))",
        },
        warning: {
          DEFAULT: "hsl(var(--border-warning))",
          subtle: "hsl(var(--border-warning-subtle))",
        },
        danger: {
          DEFAULT: "hsl(var(--border-danger))",
          subtle: "hsl(var(--border-danger-subtle))",
        },
      },
      textColor: {
        DEFAULT: "hsl(var(--text))",
        subtle: "hsl(var(--text-subtle))",
        disabled: "hsl(var(--text-disabled))",
        selected: "hsl(var(--text-selected))",

        brand: {
          DEFAULT: "hsl(var(--text-brand))",
          subtle: "hsl(var(--text-brand-subtle))",
        },

        info: {
          DEFAULT: "hsl(var(--text-info))",
          subtle: "hsl(var(--text-info-subtle))",
        },

        success: {
          DEFAULT: "hsl(var(--text-success))",
          subtle: "hsl(var(--text-success-subtle))",
        },

        warning: {
          DEFAULT: "hsl(var(--text-warning))",
          subtle: "hsl(var(--text-warning-subtle))",
        },

        danger: {
          DEFAULT: "hsl(var(--text-danger))",
          subtle: "hsl(var(--text-danger-subtle))",
        },

        onselected: {
          DEFAULT: "hsl(var(--text-onselected))",
          subtle: "hsl(var(--text-onselected-subtle))",
        },

        oninverse: {
          DEFAULT: "hsl(var(--text-oninverse))",
          subtle: "hsl(var(--text-oninverse-subtle))",
          disabled: "hsl(var(--text-oninverse-disabled))",
        },

        onbrand: {
          DEFAULT: "hsl(var(--text-onbrand))",
          subtle: "hsl(var(--text-onbrand-subtle))",
          disabled: "hsl(var(--text-onbrand-disabled))",
        },

        oninfo: {
          DEFAULT: "hsl(var(--text-oninfo))",
          subtle: "hsl(var(--text-oninfo-subtle))",
          disabled: "hsl(var(--text-oninfo-disabled))",
        },

        onsuccess: {
          DEFAULT: "hsl(var(--text-onsuccess))",
          subtle: "hsl(var(--text-onsuccess-subtle))",
          disabled: "hsl(var(--text-onsuccess-disabled))",
        },

        onwarning: {
          DEFAULT: "hsl(var(--text-onwarning))",
          subtle: "hsl(var(--text-onwarning-subtle))",
          disabled: "hsl(var(--text-onwarning-disabled))",
        },

        ondanger: {
          DEFAULT: "hsl(var(--text-ondanger))",
          subtle: "hsl(var(--text-ondanger-subtle))",
          disabled: "hsl(var(--text-ondanger-disabled))",
        },
      },
      fill: {
        DEFAULT: "hsl(var(--icon))",
        subtle: "hsl(var(--icon-subtle))",
        disabled: "hsl(var(--icon-disabled))",
        selected: "hsl(var(--icon-selected))",

        brand: {
          DEFAULT: "hsl(var(--icon-brand))",
          subtle: "hsl(var(--icon-brand-subtle))",
        },

        info: {
          DEFAULT: "hsl(var(--icon-info))",
          subtle: "hsl(var(--icon-info-subtle))",
        },

        success: {
          DEFAULT: "hsl(var(--icon-success))",
          subtle: "hsl(var(--icon-success-subtle))",
        },

        warning: {
          DEFAULT: "hsl(var(--icon-warning))",
          subtle: "hsl(var(--icon-warning-subtle))",
        },

        danger: {
          DEFAULT: "hsl(var(--icon-danger))",
          subtle: "hsl(var(--icon-danger-subtle))",
        },

        onselected: {
          DEFAULT: "hsl(var(--icon-onselected))",
          subtle: "hsl(var(--icon-onselected-subtle))",
        },

        oninverse: {
          DEFAULT: "hsl(var(--icon-oninverse))",
          subtle: "hsl(var(--icon-oninverse-subtle))",
          disabled: "hsl(var(--icon-oninverse-disabled))",
        },

        onbrand: {
          DEFAULT: "hsl(var(--icon-onbrand))",
          subtle: "hsl(var(--icon-onbrand-subtle))",
          disabled: "hsl(var(--icon-onbrand-disabled))",
        },

        oninfo: {
          DEFAULT: "hsl(var(--icon-oninfo))",
          subtle: "hsl(var(--icon-oninfo-subtle))",
          disabled: "hsl(var(--icon-oninfo-disabled))",
        },

        onsuccess: {
          DEFAULT: "hsl(var(--icon-onsuccess))",
          subtle: "hsl(var(--icon-onsuccess-subtle))",
          disabled: "hsl(var(--icon-onsuccess-disabled))",
        },

        onwarning: {
          DEFAULT: "hsl(var(--icon-onwarning))",
          subtle: "hsl(var(--icon-onwarning-subtle))",
          disabled: "hsl(var(--icon-onwarning-disabled))",
        },

        ondanger: {
          DEFAULT: "hsl(var(--icon-ondanger))",
          subtle: "hsl(var(--icon-ondanger-subtle))",
          disabled: "hsl(var(--icon-ondanger-disabled))",
        },
      },

      opacity: {
        0: "var(--opacity-0)",
        10: "var(--opacity-10)",
        20: "var(--opacity-20)",
        40: "var(--opacity-40)",
        60: "var(--opacity-60)",
        80: "var(--opacity-80)",
      },

      borderRadius: {
        none: "var(--corner-none)",
        "2px": "var(--corner-2px)",
        "4px": "var(--corner-4px)",
        "6px": "var(--corner-6px)",
        "8px": "var(--corner-8px)",
        "10px": "var(--corner-10px)",
        "12px": "var(--corner-12px)",
        "16px": "var(--corner-16px)",
        "24px": "var(--corner-24px)",
        rounded: "var(--corner-rounded)",
      },

      spacing: {
        none: "var(--spacing-none)",
        "2px": "var(--spacing-2px)",
        "4px": "var(--spacing-4px)",
        "6px": "var(--spacing-6px)",
        "8px": "var(--spacing-8px)",
        "10px": "var(--spacing-10px)",
        "12px": "var(--spacing-12px)",
        "14px": "var(--spacing-14px)",
        "16px": "var(--spacing-16px)",
        "20px": "var(--spacing-20px)",
        "24px": "var(--spacing-24px)",
        "28px": "var(--spacing-28px)",
        "32px": "var(--spacing-32px)",
        "40px": "var(--spacing-40px)",
        "60px": "var(--spacing-60px)",
      },

      gap: {
        none: "var(--spacing-none)",
        "2px": "var(--spacing-2px)",
        "4px": "var(--spacing-4px)",
        "6px": "var(--spacing-6px)",
        "8px": "var(--spacing-8px)",
        "10px": "var(--spacing-10px)",
        "12px": "var(--spacing-12px)",
        "14px": "var(--spacing-14px)",
        "16px": "var(--spacing-16px)",
        "20px": "var(--spacing-20px)",
        "24px": "var(--spacing-24px)",
        "28px": "var(--spacing-28px)",
        "32px": "var(--spacing-32px)",
        "40px": "var(--spacing-40px)",
        "60px": "var(--spacing-60px)",
      },

      padding: {
        none: "var(--spacing-none)",
        "2px": "var(--spacing-2px)",
        "4px": "var(--spacing-4px)",
        "6px": "var(--spacing-6px)",
        "8px": "var(--spacing-8px)",
        "10px": "var(--spacing-10px)",
        "12px": "var(--spacing-12px)",
        "14px": "var(--spacing-14px)",
        "16px": "var(--spacing-16px)",
        "20px": "var(--spacing-20px)",
        "24px": "var(--spacing-24px)",
        "28px": "var(--spacing-28px)",
        "32px": "var(--spacing-32px)",
        "40px": "var(--spacing-40px)",
        "60px": "var(--spacing-60px)",
      },

      margin: {
        none: "var(--spacing-none)",
        "2px": "var(--spacing-2px)",
        "4px": "var(--spacing-4px)",
        "6px": "var(--spacing-6px)",
        "8px": "var(--spacing-8px)",
        "10px": "var(--spacing-10px)",
        "12px": "var(--spacing-12px)",
        "14px": "var(--spacing-14px)",
        "16px": "var(--spacing-16px)",
        "20px": "var(--spacing-20px)",
        "24px": "var(--spacing-24px)",
        "28px": "var(--spacing-28px)",
        "32px": "var(--spacing-32px)",
        "40px": "var(--spacing-40px)",
        "60px": "var(--spacing-60px)",
      },

      fontSize: {
        caption: [
          "var(--font-caption)",
          {
            lineHeight: "var(--leading-body-monoline)",
          },
        ],

        body: [
          "var(--font-body)",
          {
            lineHeight: "var(--leading-body-monoline)",
          },
        ],

        "body-large": [
          "var(--font-body-large)",
          {
            lineHeight: "var(--leading-body-large)",
          },
        ],

        lead: [
          "var(--font-lead)",
          {
            lineHeight: "var(--leading-lead)",
          },
        ],

        section: [
          "var(--font-section)",
          {
            lineHeight: "var(--leading-section)",
          },
        ],

        title: [
          "var(--font-title)",
          {
            lineHeight: "var(--leading-title)",
          },
        ],
      },

      lineHeight: {
        monoline: "var(--leading-body-monoline)",
        tight: "var(--leading-body-tight)",
        relaxed: "var(--leading-body-relaxed)",
        loose: "var(--leading-body-loose)",
      },
    },
  }
);
