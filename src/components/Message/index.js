import { S } from "./index.styled"

export const Message = ({ message, timestamp, user }) => {
    return (
        <S.Container>
            <S.UserAvatar variant="rounded" src={user?.profileImage} />

            <S.Info>
                <h4>
                    {user?.email}{" "}
                    <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>

                <p>{message}</p>
            </S.Info>
        </S.Container>
    )
}
