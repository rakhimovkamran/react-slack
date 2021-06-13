import { Switch, Route } from "react-router-dom"

import { S } from "./index.styled"
import { Header } from "components/Header"
import { Sidebar } from "components/Sidebar"

export const Core = () => {
    return (
        <>
            <Header />
            <S.ApplicationWrapper>
                <Sidebar />
                <Switch>
                    <Route path="/" exact>
                        {/* Chat */}
                    </Route>
                </Switch>
            </S.ApplicationWrapper>
        </>
    )
}
