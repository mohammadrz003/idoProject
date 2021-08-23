import React from 'react';
import ViewAllPools from "../pages/AllPools/viewAllPools";
import Footer from "../components/layout/footer";

const AllPoolsLayout = ({darkMode}) => {
    return (
        <>
            <ViewAllPools darkMode={darkMode} landingContainerWidth={''} navJustify={''}/>
        </>
    );
};

export default AllPoolsLayout;