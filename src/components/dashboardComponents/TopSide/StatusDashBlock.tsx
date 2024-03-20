import React, { ReactNode } from 'react'

interface StatusDashBlockProps {
    icon: ReactNode;
    number: number;
    statusName: string;
}

const StatusDashBlock: React.FC<StatusDashBlockProps> = ({number, icon, statusName}) => {
  return (
    <div className='status_dash_blcok_container'>
        <div className='status_dash_blcok BoxShadow'>
            {icon}
        </div>
        <div className='status_dash_blcok_txts'>
            <p className='status_dash_blcok_txts_p1'>{number}</p>
            <p className='status_dash_blcok_txts_p2'>{statusName}</p>
        </div>
    </div>
  )
}

export default StatusDashBlock