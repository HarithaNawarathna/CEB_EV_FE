import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import SmartPlug from "layouts/Smartplug.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import SessionCheck from "views/SessionCheck";

ReactDOM.render(
  <BrowserRouter>
  <>
  <SessionCheck />
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      <Route path="/smartplug" component={SmartPlug} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/auth/login" exact component={Auth} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/auth/login" />
    </Switch>
  </>
  </BrowserRouter>,
  document.getElementById("root")
);
