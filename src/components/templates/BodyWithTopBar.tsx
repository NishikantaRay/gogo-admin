import { createStyles, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer, Theme } from '@material-ui/core';
import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react'
import { useHistory } from 'react-router-dom';
import { routes } from '../../content/RootRoutes';
import { lightest } from '../../globals/colors';
import { companyNameAllCaps } from '../../globals/dk_names';
import { Body } from './Body';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
            color: lightest,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 0
        },
        list: {
            width: 250,
        }
    }),
);


export const BodyWithTopBar: React.FC = ({ children }) => {

    const [openLeftBar, setOpenLeftBar] = React.useState(false)
    const barClickHandle = () => setOpenLeftBar(!openLeftBar)
    const classes = useStyles();
    const history = useHistory();


    return (
        <Body>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={barClickHandle} edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <h6 className={classes.title}>{companyNameAllCaps} ADMIN</h6>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer anchor='left' open={openLeftBar} onClose={barClickHandle} onOpen={barClickHandle} >
                <List className={classes.list}>
                    {routes.map(({ name, path, icon }, index) => (
                        <ListItem button key={index} onClick={() => history.push(path)}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={name} />
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            {children}
        </Body>
    )
}