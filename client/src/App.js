import { Helmet } from 'react-helmet';
import { Switch, Route } from "react-router-dom";

import DynamicView from "./views/Dynamic";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Template</title>
      </Helmet>

      <Switch>

        {/*
        <Route exact={true} path="folder-path/:id" render={(props) => (
          <AnotherView {...props} />
        )} />
        */}

        <Route render={(props) => ( <DynamicView {...props} /> )} />
      </Switch>
    </>
  );
}

export default App;
