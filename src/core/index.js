import { Switch, Route } from "react-router-dom"

import { Header } from "components/Header"

export const Core = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact>
                    {/* Chat */}
                </Route>
            </Switch>
        </>
    )
}
