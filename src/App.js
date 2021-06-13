import { Switch, Route } from "react-router-dom"

import { Header } from "components/Header"

export const App = () => {
    return (
        <Switch>
            <Route path="/">
                <Header />
            </Route>
        </Switch>
    )
}
