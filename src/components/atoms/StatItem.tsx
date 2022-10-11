import * as React from 'react'

import { primary } from '../../globals/colors';


export const StatItem: React.FC<{ content: (string | number), name: string }> = ({ content, name }) => (
    <div style={{marginBottom: 10}}>
        <h5 style={{ color: primary, margin: 0 }}>{content}</h5>
        <span>{name}</span>
    </div>
)