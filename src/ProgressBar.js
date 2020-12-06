import React from 'react';

import StepZilla from "react-stepzilla";
import './progress_bar.css';

function ProgressBar() {
    const steps =
        [
            {name: 'Step 1', component: <Step1 />}
        ]

    return (
        <div className='step-progress'>
            <StepZilla steps={steps}/>
        </div>
    );
}

function Step1() {
    return <h1>Welcome back!</h1>;
}

export default ProgressBar;
