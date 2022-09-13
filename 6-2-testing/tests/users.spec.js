import "@testing-library/jest-dom/extend-expect";

import { screen } from "@testing-library/dom";

import { printUsers } from "../src/index";

test("should render users in the document", async () => {
  const container = document.createElement("div");
  container.id = "users";

  document.body.appendChild(container);

  await printUsers();

  expect(screen.queryByText("Patata")).toBe(null);
  expect(screen.queryByText("Rafa")).toBeTruthy();
  expect(screen.queryByText("Núria")).toBeTruthy();
});
