"use client";
import { Button } from "@makunoia/stark";
export default function Home() {
  return (
    <>
      <Button
        label="Button"
        intent="primary"
        onClick={() => alert("it's working")}
      />
      <div className="bg-inverse text-oninverse">Test</div>
    </>
  );
}
