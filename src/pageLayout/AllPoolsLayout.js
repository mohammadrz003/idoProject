import React from 'react';
import ViewAllPools from "../pages/AllPools/viewAllPools";

const AllPoolsLayout = ({useDarkMode}) => {
    return (
        <>
            <ViewAllPools darkMode={useDarkMode} landingContainerWidth={''} navJustify={''}/>
        </>
    );
};

export default AllPoolsLayout;