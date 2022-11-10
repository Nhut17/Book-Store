import React, { useState } from 'react'
import StepDetail from './StepDetail'
export default function StepNavigation(props) {
    console.log('step Navigation', props)
    return (
        <div className='stepWrapper'>
            {props.labelArray.map((item, index) =>
                <StepDetail
                    index={index}
                    key={index}
                    label={item}
                    selected={props.step === index }
                >
                </StepDetail>
            )}
        </div>

    )
}
//  StepNavigation
// updateStep={props.updateStep}