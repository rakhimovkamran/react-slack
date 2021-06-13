import { db } from "constants/firebase.config"

import { S } from "./index.styled"

export const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
    const addChannel = () => {
        const channelName = window.prompt("Please enter the channel name")

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        console.log(id)
    }

    return (
        <S.Container onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <S.Channel>
                    <span>#</span>
                    {title}
                </S.Channel>
            )}
        </S.Container>
    )
}
