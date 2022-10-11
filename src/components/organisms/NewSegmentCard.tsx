import * as React from 'react'
import { DefaultSelect } from '../atoms/Selectors'
import { InputField } from '../atoms/InputField'
import { DefaultButton } from '../atoms/SampleButton'
import { HorizontalFlexDiv } from '../templates/Wrappers'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button } from '@material-ui/core'

const FilterRow: React.FC = () => {
    const attributeOptions = ['Name', 'Gender']
    const opreatorOptions = ['=', '<', '>', '<=', '>=']

    const [attribute, setAttribute] = React.useState('')
    const [opreator, setOperator] = React.useState('')
    const [value, setValue] = React.useState('')

    return (
        <HorizontalFlexDiv style={{ flexWrap: 'wrap' }}>
            <DefaultSelect label='Attribute' set={setAttribute} value={attribute} options={attributeOptions} />
            <DefaultSelect label='Operator' set={setOperator} value={opreator} options={opreatorOptions} />
            <InputField placeholder='Value' variant='small' margin onChange={(e) => setValue(e.target.value)} value={value} />
        </HorizontalFlexDiv>
    )
}


export const NewSegmentCard: React.FC = () => {
    const [segmentName, setSegmentName] = React.useState<string>('')

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: any) => {
        if (event.target.value) setter(event.target.value)
    }

    const createSegment = () => {
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <InputField placeholder='Segment name' variant='small' margin onChange={handleChange(setSegmentName)} value={segmentName} style={{ maxWidth: 400 }} />
            <FilterRow />
            <Button style={{marginBottom: 10}} variant="outlined" color="secondary" size="large" startIcon={<AddCircleOutlineIcon />}>ADD MORE FILTERS</Button>
            <DefaultButton onClick={createSegment}>CREATE SEGMENT</DefaultButton>
        </div>
    )
}
