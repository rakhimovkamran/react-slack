import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: whitesmoke;
`

const LoginPaper = styled.div`
    width: 400px;
    height: 300px;

    background: #fff;
    border-radius: 5px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    padding: 10px 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    > button {
        background-color: #0a8d48 !important;
        color: white;

        padding: 10px 40px;

        margin-top: 50px;
    }
`

export const S = {
    Container,
    LoginPaper,
}
