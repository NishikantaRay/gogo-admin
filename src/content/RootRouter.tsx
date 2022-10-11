import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AppContext } from '../globals/loadingContext'

import { IndexPage } from './Index'
import { SegmentingPage } from './Segmenting'
import { Loading } from '../components/molecules/Loading'
import { routes } from './RootRoutes'
import { NotificationCenterPage } from './Users'
import { DetailedSegmentingPage } from './Segmenting/Detailed'
import { SendNotificationPage } from './Segmenting/SendNotification'
import { DetailedNotificationPage } from './Segmenting/DetailedNotification'
import { UserInfo } from './Users/DetailedUser'
import { NewegmentingPage } from './Segmenting/NewSegment'
import { Auth, Hub } from 'aws-amplify'
import { LoginPage } from './Authentication'


const Authenticated: React.FC = () => (
    <Router>
        <Switch>
            <Route exact path={routes[0].path}>
                <IndexPage />
            </Route>
            <Route exact path={routes[1].path}>
                <SegmentingPage />
            </Route>
            <Route exact path={routes[1].path + '/new'}>
                <NewegmentingPage />
            </Route>
            <Route exact path={routes[1].path + '/:segment'}>
                <DetailedSegmentingPage />
            </Route>
            <Route exact path={routes[1].path + '/:segment/new'}>
                <SendNotificationPage />
            </Route>
            <Route exact path={routes[1].path + '/:segment/:id'}>
                <DetailedNotificationPage />
            </Route>
            <Route exact path={routes[2].path}>
                <NotificationCenterPage />
            </Route>
            <Route exact path={routes[2].path + '/:userid'}>
                <UserInfo />
            </Route>
        </Switch>
    </Router>
)

const NotAuthenticated: React.FC = () => (
    <Router>
        <Switch>
            <Route exact path='*'>
                <LoginPage/>
            </Route>
        </Switch>
    </Router>
)

export default function RootRouter() {
    const [loading, topLoading] = React.useState<boolean>(false);
    const [authenticated, setAuthenticated] = React.useState<boolean>(false);

    const setLoading = (state: boolean) => {
        topLoading(state)
        return 0;
    }

    const checkSignIn = async () => {
        setLoading(true)
        try {
            await Auth.currentAuthenticatedUser()
            setAuthenticated(true)
        } catch (error) {
            setAuthenticated(false)
        }
        setLoading(false)
    }
    Hub.listen('auth', checkSignIn)

    React.useEffect(() => {
        checkSignIn()
        // eslint-disable-next-line
    }, [])

    return (
        <AppContext.Provider value={setLoading}>
            {loading && <Loading />}
            {authenticated && <Authenticated />}
            {!authenticated && <NotAuthenticated />}
        </AppContext.Provider>
    )
}
