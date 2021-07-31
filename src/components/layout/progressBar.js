import React from 'react';

const ProgressBar = ({progress}) => {
    return (
        <div className="w-full h-2.5 rounded-md bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <span
                      style={{width: `${progress}%`}}
                      className="absolute top-0 left-0 h-full inline-block bg-gradient-to-r from-orange-500 to-orange-300"
                  />
        </div>
    );
};

export default ProgressBar;