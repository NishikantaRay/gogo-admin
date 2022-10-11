import { Breadcrumbs, Chip, Link, Typography } from '@material-ui/core';
import * as React from 'react'
import { StatItem } from '../../components/atoms/StatItem';
import { CustomCard } from '../../components/molecules/Card';
import { IOSNotificationPreview } from '../../components/molecules/IOSNotificationPreview';
import { DynamicDataTable } from '../../components/organisms/DynamicDataTable';
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection, VerticalFlexDiv } from '../../components/templates/Wrappers';
import { warning } from '../../globals/colors';
import { PushNotification, Segment } from '../../globals/Types';
import { tableData } from '../../placeholders/data';


const segment: Segment = {
    name: "Investor Fredericiagade",
    size: 1000
}

const notification: PushNotification = {
    name: 'Fredericiagade opdatering',
    title: 'En lille weekend status på projektet i København K',
    content: 'Stålprojektet som er igangværende er forlænget en anelse grundet bygningens forhold. Der er fremkommet flere forhold der har forsinket processen, som det tit er med gamle bygninger 😊. ',
    sentDate: new Date(2021, 13, 4)
}

export const DetailedNotificationPage: React.FC = () => {


    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Link color="inherit" href="/segments">Segments</Link>
                    <Link color="inherit" href="/segments/test-segment">{segment.name}</Link>
                    <Typography color="textPrimary">{notification.name}</Typography>

                </Breadcrumbs>
                <Chip label="Scheduled" style={{ backgroundColor: warning }} />

                <h1>{notification.name}</h1>
            </CustomSection>

            <CustomSection container>
                <CustomCard style={{ flexGrow: 1 }}>
                    <DynamicDataTable title="Recipients" tableData={tableData} />
                </CustomCard>
                <VerticalFlexDiv style={{ flexGrow: 1, maxWidth: 400 }}>
                    <CustomCard>
                    <h3>Preview</h3>
                    <IOSNotificationPreview title={notification.title} content={notification.content} />
                    </CustomCard>
                    <CustomCard>
                        <h3>Statistics</h3>
                        <StatItem name='Contacts' content={segment.size} />
                        <StatItem name='Last notification' content='10/3/2021' />
                        <StatItem name='Notifications sent' content={30.291} />
                        <StatItem name='Segment created' content='10/12/2020' />
                    </CustomCard>
                </VerticalFlexDiv>
            </CustomSection>
        </BodyWithTopBar>
    )
}
