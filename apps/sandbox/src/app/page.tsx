"use client";
import { Button, Input, Stack, Text, TextButton } from "stark-lib/src";
export default function Home() {
  return (
    <>
      <Stack
        gap="16px"
        justify="center"
        align="center"
        className="w-[440px] border rounded-8px p-24px h-fit"
      >
        <Stack justify="center" gap="4px" className="w-full">
          <Text size="lead" weight="bold" className="text">
            Welcome to the Sandbox
          </Text>
          <Text className="text-subtle" leading="tight">
            This app is made to test Stark components, import from stark-lib to
            get started
          </Text>
        </Stack>
        <Input label="Enter a random text" fullWidth />
        <Stack horizontal gap="16px" className="w-full">
          <Button
            label="Go to Storybook"
            className="flex-1"
            intent="primary"
            onClick={() => alert("it's working")}
            fullWidth
          />
          <Button label="Go to Github" className="flex-1" />
        </Stack>
      </Stack>
    </>
  );
}
