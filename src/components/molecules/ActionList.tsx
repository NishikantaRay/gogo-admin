import * as React from 'react'
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const ListItemDelete: React.FC = () => {
    const [clicked, setClicked] = React.useState(false)

    const styles = clicked ? { backgroundColor: 'red', color: "#fff" } : {}

    return (
        <ListItem button style={styles} onClick={() => setClicked(!clicked)}>
            <ListItemIcon>
                <DeleteForeverIcon style={styles} />
            </ListItemIcon>
            <ListItemText primary={clicked ? "Delete?" : "Delete"} />
        </ListItem>
    )

}

const ListItemLink = (props: ListItemProps<'a', { button?: true }>) => {
    return <ListItem button component="a" {...props} />;
}

export const ActionList: React.FC = () => {

    return (
        <>
            <List component="nav">
                <ListItemLink button href='/segments/test-segment/new'>
                    <ListItemText primary="Create notification" />
                </ListItemLink>
                <ListItem button>
                    <ListItemText primary="Download users csv" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav">
                <ListItemDelete />
            </List>
        </>
    );
}