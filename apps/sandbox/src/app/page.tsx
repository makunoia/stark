"use client";
import { Button, Input, Stack, Text, TextButton } from "@makunoia/stark";
export default function Home() {
  return (
    <>
      <Stack>
        <Text variant="title" weight="bold">
          Test
        </Text>
        <Button
          label="Button"
          intent="primary"
          onClick={() => alert("it's working")}
        />
        <Text variant="title">test</Text>
        <TextButton label="Text Button" />
        <Input />
      </Stack>
      <div className="bg-inverse text-oninverse">Test</div>
    </>
  );
}
