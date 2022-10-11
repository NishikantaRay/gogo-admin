import { CircularProgress } from '@material-ui/core'
import * as React from 'react'
import { FixedLoading } from '../atoms/FixedLoading'

export const Loading: React.FC = () => {

    return (
        <FixedLoading>
            <div style={{ display: 'flex', justifyContent:'center', width: '100%', height: '60%', alignItems:'center' }}>
                <CircularProgress />

            </div>
        </FixedLoading>
    )
}
