import React from 'react';
import Svg, { Path } from 'react-native-svg';

export type IconPropTypes = {
    color?: string;
};

const HomeIcon = ({ color }: IconPropTypes) => (
    <Svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" id="a" viewBox="0 0 567.3 487.1">
        <Path
            d="M104 487c-12 0-23-10-23-23l-1-180c0-7 4-14 10-19l182-139c9-7 21-7 29 0l127 104c7 5 13 18 12 26 0 7-9 15-16 19-22 12-48 33-59 45-56 63-53 70-58 79-5 8-24 31-33 31-10 0-23-6-27-14 0 0-29-46-59-61-12-6-14-20-8-31 5-12 20-17 31-11 21 12 41 27 57 46 12-17 21-34 49-65 13-14 27-28 43-40l-76-58-136 99h-1v139h272V302c0-12 22-23 35-24 13 0 33 11 33 24v161c0 13-10 24-23 24H104Z"
            className="b"
            fill={color || '#B3B4B5'}
            stroke={color || '#B3B4B5'} />
        <Path
            d="M305 9a34 34 0 0 0-42 0L22 195c-8 7-13 17-13 28 0 28 33 44 55 27L263 96c12-10 29-10 42 0l199 154c22 17 55 1 55-27 0-11-5-21-13-28L305 9a34 34 0 0 0-42 0"
            className="b"
            fill={color || '#B3B4B5'}
            stroke={color || '#B3B4B5'} />
    </Svg>

);

export default HomeIcon;
