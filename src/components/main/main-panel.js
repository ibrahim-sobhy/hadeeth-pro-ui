import React from 'react';
import AddNew from "../add-new/add-new";
import { Route, Switch } from "react-router-dom";
import Tasks from '../tasks/tasks';

function MainPanel() {
    return (
      <Switch>
        <Route exact path="/add" component={AddNew} />
        <Route exact path="/tasks" component={Tasks} />
      </Switch>
    );
}

export default MainPanel;