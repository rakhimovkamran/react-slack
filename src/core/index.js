import { Switch, Route } from "react-router-dom"

import { S } from "./index.styled"
import { Header } from "components/Header"
import { Sidebar } from "components/Sidebar"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "constants/firebase.config"

import { Chat } from "pages/Chat"
import { Login } from "pages/Login"
import { Loading } from "pages/Loading"

export const Core = () => {
    const [user, isLoading] = useAuthState(auth)

    return (
        <>
            {!user ? (
                <>{isLoading ? <Loading /> : <Login />}</>
            ) : (
                <>
                    <Header />
                    <S.ApplicationWrapper>
                        <Sidebar />
                        <Switch>
                            <Route path="/" exact>
                                <Chat />
                            </Route>
                        </Switch>
                    </S.ApplicationWrapper>
                </>
            )}
        </>
    )
}
