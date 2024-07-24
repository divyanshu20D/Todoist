import React from "react";
import FullDisplay from "./components/FullDisplay";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inbox from "./pages/inbox.jsx";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FullDisplay />,
    children: [
      {
        path: "/inbox",
        element: <Inbox />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
