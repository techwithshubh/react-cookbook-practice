import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { vi } from "vitest";
import { AccountTab, PasswordTab, TabsLayout } from "./TabsLayout";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useMatch: () => ({
    params: {},
    pathname: "/recipe1/account",
    pathnameBase: "/recipe1/account",
    pattern: {
      path: "/recipe1/account",
      caseSensitive: false,
      end: true,
    },
  }),
}));

describe("Recipe1: TabsLayout", () => {
  it("should render account page by default", async () => {
    const routerConfig = [
      {
        path: "recipe1",
        element: <TabsLayout />,
        children: [
          {
            path: "account",
            element: <AccountTab />,
          },
          {
            path: "password",
            element: <PasswordTab />,
          },
        ],
      },
    ];
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ["/", "/recipe1/account"],
      initialIndex: 1,
    });
    render(<RouterProvider router={router} />);

    await userEvent.click(screen.getByText("Account"));
    await waitFor(() => {
      expect(
        screen.getByText("Make changes to your account here.")
      ).toBeInTheDocument();
    });
  });
});
