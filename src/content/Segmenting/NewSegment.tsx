import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import * as React from 'react'
import { CustomCard } from '../../components/molecules/Card';
import { NewSegmentCard } from '../../components/organisms/NewSegmentCard';
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection } from '../../components/templates/Wrappers';


export const NewegmentingPage: React.FC = () => {
    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Link color="inherit" href="/segments">Segments</Link>
                    <Typography color="textPrimary">New segment</Typography>
                </Breadcrumbs>
                <h1>Create new segment</h1>
            </CustomSection>

            <CustomSection container>
                <CustomCard style={{width: '100%'}}>
                    <NewSegmentCard/>
                </CustomCard>
            </CustomSection>
        </BodyWithTopBar>
    )
}
