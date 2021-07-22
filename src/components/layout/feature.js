import React from 'react';
import securityImg from '../../img/security.png';
import fastImg from '../../img/fast-time.png';
import experianceImg from '../../img/user.png';

const Feature = () => {
    return (
        <section className="bg-light-100">
            <div className="flex justify-around container mx-auto lg:px-20 py-20">
                <div className="flex flex-col items-center max-w-xxs">
                    <img className="w-12" src={securityImg} alt="" />
                    <h5 className="font-bold text-lg mt-1">Good Security</h5>
                    <p className="text-center text-sm text-gray-500 font-medium mt-3">We do our best to make sure we provide the most security for you</p>
                </div>
                <div className="flex flex-col items-center max-w-xxs">
                    <img className="w-12" src={fastImg} alt="" />
                    <h5 className="font-bold text-lg mt-1">High Speed</h5>
                    <p className="text-center text-sm text-gray-500 font-medium mt-3">We care about the speed of the site and we want you to reach your goal in the shortest time</p>
                </div>
                <div className="flex flex-col items-center max-w-xxs">
                    <img className="w-12" src={experianceImg} alt="" />
                    <h5 className="font-bold text-lg mt-1">Greate Experiance</h5>
                    <p className="text-center text-sm text-gray-500 font-medium mt-3">The most important thing for us is a good user experience in working with the site</p>
                </div>
            </div>
        </section>
    );
};

export default Feature;