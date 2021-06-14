import { S } from "./index.styled"
import Spinner from "react-spinkit"

export const Loading = () => {
    return (
        <S.Container>
            <Spinner name="three-bounce" fadeIn="none" color="purple" />
        </S.Container>
    )
}
