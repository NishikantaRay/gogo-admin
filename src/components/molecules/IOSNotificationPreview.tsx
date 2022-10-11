import * as React from 'react'
import { normallight } from '../../globals/colors';
import { companyName } from '../../globals/dk_names';
import { PushNotification } from '../../globals/Types';


// SOURCE: https://codepen.io/OliverK97/pen/wXEOaW

export const IOSNotificationPreview: React.FC<PushNotification> = ({title, subTitle, content}) => {

    return (
        <div style={{
            minHeight: '80px', maxHeight: '180px', borderRadius: '10px', marginBottom: '8px',
            overflow: 'hidden', boxShadow: "0 2px 5px rgba(0, 0, 0, 0.06)", backgroundColor:normallight
        }}>
            <div style={{ height: "100%", backgroundColor: "rgba(255, 255, 255, 0.8)", position: "absolute" }}></div>
            <div style={{ height: "25px", position: "relative", color: "black" }}>
                <div style={{ position: "inherit", zIndex: 100, fontSize: '0.8em' }}>
                    <div style={{ float: 'left', textAlign: 'left', padding: '3px 0 0 10px', fontFamily:'sans-serif' }}>{companyName}</div>
                    <div style={{ float: 'right', textAlign: 'right', padding: '3px 10px 0 0', fontFamily:'sans-serif' }}>{(new Date()).toDateString()}</div>
                </div>
            </div>
            <div style={{ position: "inherit", zIndex: 100, fontSize: '0.8em', lineHeight: '1.5em', padding: "8px 20px 10px 10px",  fontFamily:'sans-serif'}}>
                <strong>{title}</strong> <br />
                {subTitle && <strong>{subTitle}</strong>}
                {subTitle && <br />}
                {content}
            </div>
        </div>
    );
}