import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "constants/firebase.config"

import { S } from "./index.styled"
import { I } from "./index.icons"

import { SidebarOption } from "components/SidebarOption"

export const Sidebar = () => {
    const [channels] = useCollection(db.collection("rooms"))

    return (
        <S.Container>
            <S.Header>
                <S.Info>
                    <h2>AppliedLabs</h2>
                    <h3>
                        <I.Circle />
                        Rakhimov Kamran
                    </h3>
                </S.Info>
                <I.Pen />
            </S.Header>

            <SidebarOption Icon={I.Insert} title="Threads" />
            <SidebarOption Icon={I.Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={I.Drafts} title="Saved items" />
            <SidebarOption Icon={I.Bookmark} title="Channel browser" />
            <SidebarOption Icon={I.People} title="People & user groups" />
            <SidebarOption Icon={I.Apps} title="Apps" />
            <SidebarOption Icon={I.File} title="File browser" />
            <SidebarOption Icon={I.ExpandLess} title="Show less" />
            <hr />
            <SidebarOption Icon={I.ExpandMore} title="Channels" />
            <hr />
            <SidebarOption Icon={I.Add} title="Add channel" addChannelOption />
            {channels?.docs.map((doc) => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            ))}
        </S.Container>
    )
}
