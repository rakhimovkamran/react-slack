import { S } from "./index.styled"
import { I } from "./index.icons"

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "constants/firebase.config"

export const Header = () => {
    const [user] = useAuthState(auth)

    const signOut = () => {
        auth.signOut()
    }

    return (
        <S.Container>
            <S.HeaderLeft>
                <S.UserAvatar
                    alt={user?.displayName}
                    src={user?.photoURL}
                    onClick={signOut}
                />
                <I.Time />
            </S.HeaderLeft>

            <S.Search>
                <I.Search />
                <input spellCheck="false" placeholder="Search #channel" />
            </S.Search>

            <S.HeaderRight>
                <I.Help />
            </S.HeaderRight>
        </S.Container>
    )
}
