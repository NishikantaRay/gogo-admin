import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import * as React from 'react'
import { InputField } from '../../components/atoms/InputField';
import { DefaultButton } from '../../components/atoms/SampleButton';
import { CustomCard } from '../../components/molecules/Card';
import { TagList } from '../../components/molecules/TagBubbleList';
import { ActivityList } from '../../components/organisms/ActivityList';
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection, VerticalFlexDiv } from '../../components/templates/Wrappers';


const fakeData = [
    {
        date: 'Marts 2021',
        activities: [
            {
                header: 'Page clicked',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '04/03/2021'
            },
            {
                header: 'Page opened',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '02/03/2021'
            },
        ]
    },
    {
        date: 'Februar 2021',
        activities: [
            {
                header: 'Notification sent',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '15/02/2021'
            },
            {
                header: 'Page loaded',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '23/02/2021'
            }
        ]
    },
    {
        date: 'Januar 2021',
        activities: [
            {
                header: 'Account signed in',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '06/01/2021'
            },
            {
                header: 'Account created',
                mainText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
                specificDate: '01/01/2021'
            }
        ]
    },
]

export const UserInfo: React.FC = () => {

    const [name, setName] = React.useState('Oliver Arnstein')
    const [email, setEmail] = React.useState('oliver@goco.dk')

    const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: any) => {
        if (event.target.value) setter(event.target.value)
    }

    const updateUser = () => {
        console.log(name, email)
    }


    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Link color="inherit" href="/users">Users</Link>
                    <Typography color="textPrimary">Oliver Arnstein</Typography>
                </Breadcrumbs>
            </CustomSection>
            <CustomSection container>
                <VerticalFlexDiv style={{ flexGrow: 2 }}>
                    <h1 style={{ marginBottom: 10 }}>Oliver Arnstein</h1>
                    <h2>Activity log</h2>
                    <ActivityList ActivityData={fakeData} />
                </VerticalFlexDiv>
                <VerticalFlexDiv style={{ flexGrow: 2 }}>
                    <h2>User information</h2>
                    <CustomCard style={{ width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h5>Edit user information</h5>
                            <InputField placeholder='First name' variant='small' margin onChange={handleChange(setName)} value={name}/>
                            <InputField placeholder='Email' variant='small' margin onChange={handleChange(setEmail)} value={email}/>
                            <TagList tags={["Generelle nyheder", "Fredericiagade-tranche-1", "Web nyheder", "Nye projekter"]} onDelete={(id) => console.log(id)} />
                            <DefaultButton onClick={updateUser}>SAVE CHANGES</DefaultButton>
                        </div>
                    </CustomCard>

                </VerticalFlexDiv>
            </CustomSection>
        </BodyWithTopBar>
    )
}