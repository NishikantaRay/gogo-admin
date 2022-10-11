import { Breadcrumbs, Typography } from '@material-ui/core';
import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection } from '../../components/templates/Wrappers';


export const IndexPage: React.FC = () => {

    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="textPrimary">Dashboard</Typography>
                </Breadcrumbs>
                <h1>Dashboard</h1>
            </CustomSection>
        </BodyWithTopBar>
    )
}
