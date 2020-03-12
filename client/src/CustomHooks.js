import { useState } from 'react';

const useAddMuseum = (formSubmitCB) => {
    const [inputs, setInputs] = useState({
        name: '',
        city: '',
        country: '',
        image: ''
    });

    const handleInputChange = e => {
        e.persist();
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        if (e) {
            e.preventDefault();
        }    
        formSubmitCB();
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    }
}

export {
    useAddMuseum
}