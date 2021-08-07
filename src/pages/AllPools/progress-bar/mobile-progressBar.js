import React from 'react';
import {CircleBox, SemiCircle, SemiCircleTwo} from "./progress.style";

const MobileProgressBar = () => {
    return (
        <>
            <CircleBox>
                <SemiCircle percent={35}/>
                <SemiCircleTwo percent={35}/>
            </CircleBox>
        </>
    );
};

export default MobileProgressBar;