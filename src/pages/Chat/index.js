import { useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectRoomID } from "store/slices/app"

import { useCollection, useDocument } from "react-firebase-hooks/firestore"
import { db } from "constants/firebase.config"

import { S } from "./index.styled"
import { I } from "./index.icons"

import { ChatInput } from "components/ChatInput"
import { Message } from "components/Message"

export const Chat = () => {
    const roomID = useSelector(selectRoomID)
    const [roomDetails] = useDocument(
        roomID && db.collection("rooms").doc(roomID)
    )

    const chatBottomRef = useRef(null)

    const [messages, isLoading] = useCollection(
        roomID &&
            db
                .collection("rooms")
                .doc(roomID)
                .collection("messages")
                .orderBy("timestamp", "asc")
    )

    useEffect(() => {
        chatBottomRef?.current?.scrollIntoView({
            behavior: "smooth",
        })
    }, [roomID, isLoading])

    return (
        <S.Container>
            {roomDetails && messages && (
                <>
                    <S.Header>
                        <S.HeaderLeft>
                            <h4>
                                <strong>#{roomDetails?.data().name}</strong>
                            </h4>

                            <I.Star />
                        </S.HeaderLeft>

                        <S.HeaderRight>
                            <p>
                                <I.Info />
                                Details
                            </p>
                        </S.HeaderRight>
                    </S.Header>

                    <S.ChatMessages>
                        {messages?.docs.map((doc) => {
                            const { message, timestamp, user } = doc.data()

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                />
                            )
                        })}

                        <S.ChatBottom ref={chatBottomRef} />
                    </S.ChatMessages>

                    <ChatInput
                        chatBottomRef={chatBottomRef}
                        channelName={roomDetails?.data().name}
                        roomID={roomID}
                    />
                </>
            )}
        </S.Container>
    )
}
