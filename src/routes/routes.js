import { Suspense } from "react";
import { Switch, Route,} from "react-router-dom";

//import Home from "../pages/home";

const Router = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>
    </Suspense>
  );
};

export default Router;