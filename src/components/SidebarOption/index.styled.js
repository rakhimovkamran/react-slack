import styled from "styled-components"

const Container = styled.div`
    display: flex;
    align-items: center;

    font-size: 12px;
    padding: 2px;

    cursor: pointer;

    transition: all 0.2s;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`

const Channel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

    > span {
        opacity: 0.5;
    }
`

export const S = {
    Container,
    Channel,
}
