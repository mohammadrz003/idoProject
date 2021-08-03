import React from 'react';
import ViewAllPools from "../pages/AllPools/viewAllPools";
import Footer from "../components/layout/footer";

const AllPoolsLayout = ({useDarkMode}) => {
    return (
        <>
            <ViewAllPools darkMode={useDarkMode} landingContainerWidth={''} navJustify={''}/>
        </>
    );
};

export default AllPoolsLayout;