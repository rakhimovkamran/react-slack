import { db } from "constants/firebase.config"
import { useDispatch } from "react-redux"
import { enterRoom } from "store/slices/app"

import { S } from "./index.styled"

export const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
    const dispatch = useDispatch()

    const addChannel = () => {
        const channelName = window.prompt("Please enter the channel name")

        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(
                enterRoom({
                    roomID: id,
                })
            )
        }
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
