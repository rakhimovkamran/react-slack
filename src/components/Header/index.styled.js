import styled from "styled-components"
import { Avatar } from "@material-ui/core"

const Container = styled.header`
    display: flex;
    position: fixed;

    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    background-color: var(--slack-color);
    color: white;
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;

        transition: all 0.2s;

        :hover {
            opacity: 0.5;
        }
    }
`

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    transition: all 0.2s;

    :hover {
        opacity: 0.8;
    }
`

const Search = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;

    display: flex;
    padding: 5px 50px;

    border: 1px solid rgba(255, 255, 255, 0.3);

    color: gray;

    > input {
        border: none;
        outline: none;
        background: transparent;

        text-align: center;
        min-width: 30vw;

        color: #fff;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;

    > .MuiSvgIcon-root {
        cursor: pointer;
        margin-left: auto;
        margin-right: 20px;
        transition: all 0.2s;

        :hover {
            opacity: 0.5;
        }
    }
`

export const S = {
    Container,
    HeaderLeft,
    UserAvatar,
    Search,
    HeaderRight,
}
