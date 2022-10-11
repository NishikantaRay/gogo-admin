import * as React from 'react';
import { CustomCard } from '../molecules/Card';
import { HorizontalFlexDivSpaceBetween } from '../templates/Wrappers';
//@ts-ignore
import Trend from 'react-trend';
import { normallight, primary } from '../../globals/colors';
import { random } from '../../placeholders/data';

type Props = {
    ActivityData: any
}



export const ActivityList: React.FC<Props> = ({ ActivityData }) => {

    return (
        <div >
            {ActivityData.map((item: any, key: number) => (
                <div>
                    <HorizontalFlexDivSpaceBetween>
                        <h3 key={key} style={{ marginLeft: 0 }}>{item.date}</h3>
                        <Trend data={[random(10), random(13), random(8), random(10)]} width={200} height={40} gradient={[normallight, primary]} />
                    </HorizontalFlexDivSpaceBetween>
                    {item.activities.map((subItem: any, subKey: number) => (
                        <CustomCard style={{ marginLeft: 0, paddingLeft: 15 }} key={subKey}>
                            <h5 style={{ marginBottom: 0 }}>{subItem.header}</h5>
                            <p style={{ marginTop: 2, marginRight: 20 }}>{subItem.mainText}</p>
                            <p style={{ fontSize: 10, marginTop: 2 }}>{subItem.specificDate}</p>
                        </CustomCard>
                    ))
                    }
                </div>
            ))}
        </div>
    )
}
