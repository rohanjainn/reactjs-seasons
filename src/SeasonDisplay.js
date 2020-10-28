import React from 'react';

const SeasonDisplay=(props)=>{
    console.log("inside SeasonDisplay")
    console.log(props.lat)

    return <div>Season Display :{props.lat}</div>
};

export default SeasonDisplay;