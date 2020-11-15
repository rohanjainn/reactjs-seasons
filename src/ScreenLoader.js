import React from 'react';

const ScreenLoader=(props)=>{

    return(
        <div className="ui active dimmer">
              <div className="ui big text loader">{props.message}</div>
         </div>
    );
};

//default props
ScreenLoader.defaultProps={
    message:'Loading...'
};

export default ScreenLoader;