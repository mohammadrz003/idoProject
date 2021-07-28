import React from "react";
import mobileRoadCSS from '../../components/style/mobileRoadmap.module.css';

const MobileRoadmap = () => {
  return (
    <div className="bg-secondery-400 sm:hidden">
      <div className="container mx-auto px-4">
        <div className="pl-4 py-12">
          <div className={`${mobileRoadCSS.timelineBox} relative border-l-2 border-secondery-100 pl-8 pb-8`}>
            <div>
              <h5 className={"text-light-200 leading-none mb-0.5 font-semibold"}>Platform Launching</h5>
              <h6 className="text-secondery-500">August</h6>
            </div>
          </div>
          <div className={`${mobileRoadCSS.timelineBox} relative border-l-2 border-secondery-100 pl-8 pb-8`}>
            <div>
              <h5 className={"text-light-200 leading-none mb-0.5 font-semibold"}>Partnership Programm</h5>
              <h6 className="text-secondery-500">September</h6>
            </div>
          </div>
          <div className={`${mobileRoadCSS.timelineBox} relative border-l-2 border-secondery-100 pl-8 pb-8`}>
            <div>
              <h5 className={"text-light-200 leading-none mb-0.5 font-semibold"}>Staking Platform Making Start</h5>
              <h6 className="text-secondery-500">October</h6>
            </div>
          </div>
          <div className={`${mobileRoadCSS.timelineBox} relative border-l-2 border-secondery-100 pl-8 pb-8`}>
            <div>
              <h5 className={"text-light-200 leading-none mb-0.5 font-semibold"}>NFT Plans & development</h5>
              <h6 className="text-secondery-500">November</h6>
            </div>
          </div>
          <div className={`${mobileRoadCSS.timelineBox} relative border-l-2 border-secondery-400 pl-8`}>
            <div>
              <h5 className={"text-light-200 leading-none mb-0.5 font-semibold"}>Staking Platform Launch</h5>
              <h6 className="text-secondery-500">December</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileRoadmap;
