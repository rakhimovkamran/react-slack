import { S } from "./index.styled"
import { I } from "./index.icons"

export const Header = () => {
    const signOut = () => {} // Sign Out Action

    return (
        <S.Container>
            <S.HeaderLeft>
                <S.UserAvatar onClick={signOut} />
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
