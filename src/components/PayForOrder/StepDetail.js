import React, { useState } from 'react'
export default function StepDetail(props) {
    console.log('step detail', props)
    return (
        <div className={'stepBlock ' + (props.selected ? "selected" : '')} >
            <div className={"circleWrapper"}>
                <div className='circle'>{props.index + 1}</div>
            </div>
            <span className='circle-title'>{props.label}</span>
        </div>
    )
}
//  StepDetail
// onClick={props.updateStep(props.index + 1)}
// onClick={props.updateState(props.index + 1)}