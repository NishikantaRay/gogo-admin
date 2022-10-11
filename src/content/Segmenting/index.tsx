import * as React from 'react'
import { BodyWithTopBar } from '../../components/templates/BodyWithTopBar';
import { CustomCard } from '../../components/molecules/Card';
import { CustomSection, VerticalFlexDiv } from '../../components/templates/Wrappers';
import { tableData } from '../../placeholders/data';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { DynamicDataTable } from '../../components/organisms/DynamicDataTable';
import { useHistory } from 'react-router-dom';
import { ListQuickCreateSegments } from '../../components/molecules/ListQuickCreateSegments';
import { DefaultButton } from '../../components/atoms/SampleButton';


export const SegmentingPage: React.FC = () => {
    const history = useHistory()

    const segments = [{ name: 'First segment', size: 220 }]


    const goToSegment = (segmentId: string) => {
        history.push('/segments/' + segmentId)
    }

    const goToNewSegment = () => {
        history.push('/segments/new')
    }


    return (
        <BodyWithTopBar>
            <CustomSection container column style={{ marginTop: 10 }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">Dashboard</Link>
                    <Typography color="textPrimary">Segments</Typography>
                </Breadcrumbs>
            </CustomSection>
            <CustomSection container>
                <VerticalFlexDiv style={{ flexGrow: 1, width: 300 }}>
                    <CustomCard>
                        <h3>Create new segment</h3>
                        <DefaultButton style={{width: '100%'}} onClick={goToNewSegment}>CREATE NEW SEGMENT</DefaultButton>
                    </CustomCard>
                    <CustomCard>
                        <h3>Quick create notification</h3>
                        <ListQuickCreateSegments segments={segments} />
                    </CustomCard>
                </VerticalFlexDiv>

                <CustomCard style={{ flexGrow: 3 }}>
                    <DynamicDataTable title="Your segments" tableData={tableData} customLength={10} onRowPress={goToSegment} />
                </CustomCard>
            </CustomSection>

        </BodyWithTopBar>
    )
}
