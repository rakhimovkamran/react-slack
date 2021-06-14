import styled from "styled-components"
import { Avatar } from "@material-ui/core"

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`

const UserAvatar = styled(Avatar)`
    &&& {
        border-radius: 8px;
        width: 50px;
        height: 50px;
    }
`

const Info = styled.div`
    padding-left: 10px;

    > h4 {
        margin-bottom: 5px;
    }
    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`

export const S = {
    Container,
    UserAvatar,
    Info,
}
