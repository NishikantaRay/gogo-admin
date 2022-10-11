type ApiEndpoint = {
    name: string,
    endpoint: string,
    region: string
}

type CognitoConfigs = {
    mandetorySignIn: boolean
    region: string
    userPoolId: string
    identityPoolId: string
    userPoolWebClientId: string
}

type StorageConfig = {
    region: string
    bucket: string
    identityPoolId: string
}

type AppConfigs = {
    Auth: CognitoConfigs,
    Storage?: StorageConfig,
    API: {
        endpoints: ApiEndpoint[]
    }

}

const defaultconfig: AppConfigs = {
    Auth: {
        mandetorySignIn: true,
        region: "",
        userPoolId: "",
        identityPoolId: "",
        userPoolWebClientId: "",
    },
    API: {
        endpoints: []
    }
};

export default defaultconfig