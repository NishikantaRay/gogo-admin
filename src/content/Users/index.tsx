import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomSection } from '../../components/templates/Wrappers';
import { tableData } from '../../placeholders/data';
import { CustomCard } from '../../components/molecules/Card';
import { DynamicDataTable } from '../../components/organisms/DynamicDataTable';
import { useHistory } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

export const NotificationCenterPage: React.FC = () => {
    const history = useHistory()

    const goToUser = (userId: string) => {
        history.push('/users/' + userId)
    }

    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Typography color="textPrimary">Users</Typography>
                </Breadcrumbs>
            </CustomSection>
            <CustomSection container>
                <CustomCard style={{ flexGrow: 1 }}>
                    <DynamicDataTable title="Notifications sent" tableData={tableData} customLength={10} onRowPress={goToUser} />
                </CustomCard>
            </CustomSection>
        </BodyWithTopBar>
    )
}
