import React from 'react'

interface ProgressBarProps{
  trackWidth: number;
  barWidth: number;
}

const ProgressBar:React.FC<ProgressBarProps> = ({trackWidth, barWidth}) => {
  return (
    <div className='Progress_track BoxShadow' style={{width:`${trackWidth}px`}}>
        <div className='Progress_bar' style={{width:`${barWidth}px`}} />
    </div>
  )
}

export default ProgressBar