import * as React from 'react'
//@ts-ignore
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';


export const LoginPage: React.FC = () => {

    return (
            <div style={{justifyContent:'center'}}>
                <AmplifyAuthenticator usernameAlias="email">
                    <AmplifySignIn slot="sign-in" usernameAlias="email" />
                </AmplifyAuthenticator>
            </div>
    )
}
