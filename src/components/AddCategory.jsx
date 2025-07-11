import React, { useState } from 'react'

const AddCategory = ( { setCategories } ) => {

    const [ inputValue, setInputValue ] = useState('');

    //Si se pone solo la función en el onChange, ejecuta la función con el evento como argumento
    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        setCategories(( categories ) => [inputValue, ...categories]);
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit } >
            <input
            type='text'
            placeholder='Buscar gifs'
            value={ inputValue }
            onChange={  onInputChange }
            />
        </form>
        
    )
}

export default AddCategory
