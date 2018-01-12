import { Route, Switch } from 'react-router-dom'

import AuthView from '';
import DashboardView from '';
import ProfileView from '';
import SearchView from '';

export default (
    <Switch>
        <Route path="/auth" component={AuthView}></Route>
        <Route path="/dashboard" component={DashboardView}></Route>
        <Route path="/profile" component={ProfileView}></Route>
        <Route path="/search" component={SearchView}></Route>
    </Switch>
)