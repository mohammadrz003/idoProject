import React from 'react';
import NavBar from "../components/layout/navBar";
import PoolsDetail from "../pages/PoolsDetail/PoolsDetail";

const navigation = [
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
];

const PoolsDetailLayout = ({darkMode}) => {
    return (
        <>
            <PoolsDetail darkMode={darkMode} navigation={navigation}/>
        </>
    );
};

export default PoolsDetailLayout;