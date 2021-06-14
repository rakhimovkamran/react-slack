import styled from "styled-components"

const Container = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 23px;
    border-bottom: 1px solid lightgray;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
    }

    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 20px;
    }
`

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`

const ChatMessages = styled.div``

const ChatBottom = styled.div`
    width: 100%;
    padding: 80px;
`

export const S = {
    Container,

    Header,
    HeaderLeft,
    HeaderRight,

    ChatMessages,
    ChatBottom,
}
