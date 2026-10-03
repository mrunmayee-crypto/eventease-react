import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

// GitHub Pages only serves static files, so a direct visit or refresh on /login
// would give a 404 page. HashRouter keeps the route after a "#"
// (for example  .../#/login ), which the browser never sends to the server,
// so refresh and direct links always work.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
