import { S } from "./index.styled"
import { Button } from "@material-ui/core"
import { auth, provider } from "constants/firebase.config"

export const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((e) => window.alert(e.message))
    }

    return (
        <S.Container>
            <S.LoginPaper>
                <img
                    height="100"
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/app-integrations/slack/Slack_logo_new.png"
                />
                <p>#Join Slack Community</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </S.LoginPaper>
        </S.Container>
    )
}
