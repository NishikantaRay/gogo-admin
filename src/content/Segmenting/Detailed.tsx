import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import * as React from 'react'
import { useHistory } from 'react-router-dom';
import { StatItem } from '../../components/atoms/StatItem';
import { ActionList } from '../../components/molecules/ActionList';
import { CustomCard } from '../../components/molecules/Card';
import { DynamicDataTable } from '../../components/organisms/DynamicDataTable';
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection, VerticalFlexDiv } from '../../components/templates/Wrappers';
import { Segment } from '../../globals/Types';
import { tableData } from '../../placeholders/data';


const segment: Segment = {
    name: "Investor Fredericiagade",
    size: 9362
}

export const DetailedSegmentingPage: React.FC = () => {
    const history = useHistory()

    const goToNotification = (segmentId: string) => (notifiactionId: string) => {
        history.push('/segments/'+segmentId+'/'+notifiactionId)
    }
    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Link color="inherit" href="/segments">Segments</Link>
                    <Typography color="textPrimary">{segment.name}</Typography>
                </Breadcrumbs>
                <h1>{segment.name}</h1>
            </CustomSection>

            <CustomSection container>
                <VerticalFlexDiv style={{ flexGrow: 1 }}>
                    <CustomCard>
                        <h3>ACTIONS</h3>
                        <ActionList />
                    </CustomCard>
                    <CustomCard>
                        <h3>Statistics</h3>
                        <StatItem name='Contacts' content={segment.size} />
                        <StatItem name='Last notification' content='10/3/2021' />
                        <StatItem name='Notifications sent' content={30.291} />
                        <StatItem name='Segment created' content='10/12/2020' />
                    </CustomCard>
                </VerticalFlexDiv>
                <VerticalFlexDiv style={{ flexGrow: 2 }}>
                    <CustomCard>
                        <DynamicDataTable title="Notifications sent" tableData={tableData} customLength={10} onRowPress={goToNotification(segment.name)}/>
                    </CustomCard>
                    <CustomCard>
                        <DynamicDataTable title="Users in this segment" tableData={tableData} customLength={10} />
                    </CustomCard>
                </VerticalFlexDiv>
            </CustomSection>
        </BodyWithTopBar>
    )
}
