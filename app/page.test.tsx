import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

test("App Router: Works with Server Components", async () => {
  const page = await Page()
  render(page);
  expect(
    screen.getByRole("heading", { level: 1, name: "App Router" }),
  ).toBeDefined();
});
