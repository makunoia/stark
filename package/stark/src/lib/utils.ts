import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "font-size": [
        "text-body",
        "text-body-large",
        "text-caption",
        "text-lead",
        "text-section",
        "text-title",
      ],
    },
    conflictingClassGroups: {},
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
