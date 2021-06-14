import { useState } from "react"

import firebase from "firebase"
import { db, auth } from "constants/firebase.config"

import { S } from "./index.styled"
import { Button } from "@material-ui/core"

import { useAuthState } from "react-firebase-hooks/auth"

export const ChatInput = ({ channelName, roomID, chatBottomRef }) => {
    const [input, setInput] = useState("")
    const [user] = useAuthState(auth)

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
                    displayName: user?.displayName,
                    profileImage: user?.photoURL,
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
