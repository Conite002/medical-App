
import { Switch, Route, Redirect } from "react-router-dom";
import Home_Doctor from "./pagesDoctor/Home";
import Tables_Doctor from "./pagesDoctor/Tables";
import Billing_Doctor from "./pagesDoctor/Billing";
import Rtl_Doctor from "./pagesDoctor/Rtl";
import Profile_Doctor from "./pagesDoctor/Profile";
import SignUp_Doctor from "./pagesDoctor/SignUp";
import SignIn_Doctor from "./pagesDoctor/SignIn";

import Home_Secretaire from "./pagesSecretaire/Home";
import Tables_Secretaire from "./pagesSecretaire/Tables";
import Billing_Secretaire from "./pagesSecretaire/Billing";
import Rtl_Secretaire from "./pagesSecretaire/Rtl";
import Profile_Secretaire from "./pagesSecretaire/Profile";
import SignUp_Secretaire from "./pagesSecretaire/SignUp";
import SignIn_Secretaire from "./pagesSecretaire/SignIn";

import { Link } from "react-router-dom";


import Main from "./components/layout/Main";
import NotFound from "./pages/Notfound";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import SignUp from "./pagesDoctor/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp_Doctor} />
        <Route path="/sign-in" exact component={SignIn_Doctor} />

        <Route path="/secretaire/sign-up" exact component={SignUp_Secretaire} />
        <Route path="/secretaire/sign-in" exact component={SignIn_Secretaire} />
        <Main>

          {/* Docteur */}
          <Route exact path="/dashboard" component={Home_Doctor} />
          <Route exact path="/tables" component={Tables_Doctor} />
          <Route exact path="/billing" component={Billing_Doctor} />
          <Route exact path="/rtl" component={Rtl_Doctor} />
          <Route exact path="/profile" component={Profile_Doctor} />
          {/* <Route exact path="*" component={NotFound} /> */}

          {/* Secretaire */}
          <Route exact path="secretaire/dashboard" component={Home_Secretaire} />
          <Route exact path="secretaire/tables" component={Tables_Secretaire} />
          <Route exact path="secretaire/billing" component={Billing_Secretaire} />
          <Route exact path="secretaire/rtl" component={Rtl_Secretaire} />
          <Route exact path="secretaire/profile" component={Profile_Secretaire} />
          <Route exact path="/" component={SignUp} />


          {/* <Redirect from="*" to="/dashboard" /> */}
        </Main>
      </Switch>
    </div>
  );
}

export default App;
