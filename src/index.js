import React from "react";
import ReactDOM from "react-dom";
import{ RouterProvider } from "react-router-dom";
import { router } from "./Router";

const route = ReactDOM.createRoot(document.getElementById("root"));
route.render(<RouterProvider router={router}/>)