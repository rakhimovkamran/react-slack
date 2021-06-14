import styled from "styled-components"

const Container = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 20px;
        outline: none;
    }
`

export const S = {
    Container,
}
