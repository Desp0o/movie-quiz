import React, { ReactNode } from 'react'

interface StatusDashBlockProps {
    icon: ReactNode;
    number: number;
    statusName: string;
}

const StatusDashBlock: React.FC<StatusDashBlockProps> = () => {
  return (
    <div className='status_dash_blcok_container'>
        <div className='status_dash_blcok BoxShadow'>

        </div>
        <div className='status_dash_blcok_txts'>
            <p className='status_dash_blcok_txts_p1'>27</p>
            <p className='status_dash_blcok_txts_p2'>quizz</p>
        </div>
    </div>
  )
}

export default StatusDashBlock