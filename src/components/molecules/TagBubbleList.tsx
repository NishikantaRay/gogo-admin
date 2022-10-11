import { Chip } from '@material-ui/core';
import * as React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { HorizontalFlexDiv } from '../templates/Wrappers';

type ListSegmentsProps = {
    tags: string[];
    onDelete: (id: string) => void
}

const chipStyles = { marginRight: 4, marginBottom: 6, marginTop: 4 }

export const TagList: React.FC<ListSegmentsProps> = ({ tags, onDelete }) => {

    return (
        <HorizontalFlexDiv style={{ flexWrap: 'wrap', margin: 1}}>
            {tags.map((name) => <Chip label={name} onDelete={() => onDelete(name)} style={chipStyles} />)}
            <Chip clickable label={"Ny"} style={chipStyles} onDelete={() => console.log("sjsj")} deleteIcon={<AddCircleOutlineIcon />} />
        </HorizontalFlexDiv>
    )
}
