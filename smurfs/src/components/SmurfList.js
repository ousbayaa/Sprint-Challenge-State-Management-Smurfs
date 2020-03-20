import React, {useState, useEffect, useContext} from 'react';
import Smurf from './Smurf';
import { SmurfListContext } from '../contexts/SmurfListContext';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

const SmurfList = props => {
    const smurfs = useContext(SmurfListContext);

    return (
        <div className="stra-card">
            {smurfs.map(smurf => {
                return (
                    <SmurfContext.Provider value={smurf}>
                        <Smurf key={smurf.id}/>
                    </SmurfContext.Provider>
                );
            })}
        </div>
    );
};

export default SmurfList