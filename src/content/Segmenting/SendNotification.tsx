import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import * as React from 'react'
import { InputField, Textarea } from '../../components/atoms/InputField';
import { DefaultButton } from '../../components/atoms/SampleButton';
import { IOSNotificationPreview } from '../../components/molecules/IOSNotificationPreview';
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection, VerticalFlexDiv } from '../../components/templates/Wrappers';
import { Segment } from '../../globals/Types';


const segment: Segment = {
    name: "Investor Fredericiagade",
    size: 1000
}

export const SendNotificationPage: React.FC = () => {

    const [name, setName] = React.useState<string>('')
    const [title, setTitle] = React.useState<string>('')
    const [subTitle, setSubTitle] = React.useState<string>('')
    const [content, setContent] = React.useState<string>('')
    const [link, setLink] = React.useState<string>('')

    const handleChange = (setter:React.Dispatch<React.SetStateAction<string>>) => (event:any) =>{
        if(event.target.value) setter(event.target.value)
    }

    const onSubmit = () => {
        console.log(link, name)
    }


    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Link color="inherit" href="/segments">Segments</Link>
                    <Link color="inherit" href="/segments/test-segment">{segment.name}</Link>
                    <Typography color="textPrimary">New notifiaction</Typography>

                </Breadcrumbs>
                <h1>New notifiaction</h1>
            </CustomSection>

            <CustomSection container>
                <VerticalFlexDiv style={{ flexGrow: 1, margin: 10}}>
                    <InputField placeholder='Internal name' variant='small' margin onChange={handleChange(setName)}/>
                    <InputField placeholder='Title' variant='small' margin onChange={handleChange(setTitle)}/>
                    <InputField placeholder='Subtitle (Optional)' variant='small' margin onChange={handleChange(setSubTitle)}/>
                    <Textarea placeholder='Indhold' variant='default' margin onChange={handleChange(setContent)}/>
                    <InputField placeholder='Link' variant='small' margin onChange={handleChange(setLink)}/>
                    <InputField variant='small' margin type="datetime-local" id="birthdaytime" name="birthdaytime"/>
                    <DefaultButton onClick={onSubmit}>SEND NOTIFICATION</DefaultButton>
                </VerticalFlexDiv>
                <VerticalFlexDiv style={{ flexGrow: 1, maxWidth: 400}}>
                    <IOSNotificationPreview title={title} subTitle={subTitle} content={content}/>
                </VerticalFlexDiv>
            </CustomSection>
        </BodyWithTopBar>
    )
}
