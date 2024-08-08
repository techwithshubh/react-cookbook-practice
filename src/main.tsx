import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {TabsLayout, AccountTab, PasswordTab} from "./recipes/TabsLayout.tsx";
import Important from "./recipes/Important.tsx";

export const routerConfig = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "recipe1",
    element: <TabsLayout />,
    children: [
      {
        path:"account",
        element: <AccountTab />
      },
      {
        path:"password",
        element: <PasswordTab />
      }
    ]
  },
  {
    path: "recipe3",
    element: <Important />
  }
]

const router = createBrowserRouter(routerConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
