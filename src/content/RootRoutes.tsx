import * as React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

type Route = {
    path: string
    name: string
    icon: JSX.Element
    secure: boolean
}

export const routes: Route[] = [
    {
        path: '/',
        name: 'Dashboard',
        icon: <HomeIcon/>,
        secure: false
    },
    {
        path: '/segments',
        name: 'Segments',
        icon: <GroupWorkIcon/>,
        secure: false
    },
    {
        path: '/users',
        name: 'Users',
        icon: <GroupIcon/>,
        secure: false
    },
]
