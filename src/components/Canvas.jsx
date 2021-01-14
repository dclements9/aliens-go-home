import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';

const Canvas = () => {
    // const style = {
        // border: '1px solid black',
    // };
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

    return (
        <svg
        id="aliens-go-home-canvas"
        preserveAspectRatio="xMaxYMax none"
        // style={style}
        viewBox={viewBox}
        >
            <Sky />
            <Ground />
            {/* <circle cx={0} cy={0} r={50} /> */}
            <CannonPipe rotation={45} />
            <CannonBase />
        </svg>
    );
};

export default Canvas;