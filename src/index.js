import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HashRouter>
    </HashRouter> */}
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createHashRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
// import "./index.css";

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: <App />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );