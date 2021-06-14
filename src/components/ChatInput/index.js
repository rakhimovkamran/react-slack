import { useState } from "react"

import firebase from "firebase"
import { db } from "constants/firebase.config"

import { S } from "./index.styled"
import { Button } from "@material-ui/core"

export const ChatInput = ({ channelName, roomID, chatBottomRef }) => {
    const [input, setInput] = useState("")

    const sendMessage = (e) => {
        e.preventDefault()

        if (!roomID || !input) return false

        db.collection("rooms")
            .doc(roomID)
            .collection("messages")
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),

                user: {
                    email: "rakhimovkamran@gmail.com",
                    profileImage:
                        "https://avatars.githubusercontent.com/u/38936315?v=4",
                },
            })

        setInput("")

        chatBottomRef?.current.scrollIntoView({
            behavior: "smooth",
        })
    }

    return (
        <S.Container>
            <form>
                <input
                    value={input}
                    onChange={({ target }) => setInput(target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button hidden type="submit" onClick={sendMessage}></Button>
            </form>
        </S.Container>
    )
}
