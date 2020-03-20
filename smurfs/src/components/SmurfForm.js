import React, { useContext, useState } from 'react';
import axios from 'axios';
import { SmurfFormContext } from '../contexts/SmurfFormContext';

function SmurfForm() {
    const [state, setState] = useState({
        name: "",
        age: "",
        height: ""
    });

    const smurfState = useContext(SmurfFormContext);

    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setState({...state,
        [name]: value
        });
    }
  
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit: ", state);
        axios.post('http://localhost:3333/smurfs', state).then(res => {
            console.log("Post response: ", res);
            smurfState(Date.now());
            setState({
                name: "",
                age: "",
                height: ""
            });
        })
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>Name: 
            <input type="text" name="name" value={state.name} onChange={handleInputChange} />
        </label>
        <label>Age:
            <input type="text" name="age" value={state.age} onChange={handleInputChange} />
        </label>
        <label>Height: 
            <input type="text" name="height" value={state.height} onChange={handleInputChange} />
        </label>
        <button>Add Smurf</button>
      </form>
    );

};

export default SmurfForm;