import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    //Si se pone solo la función en el onChange, ejecuta la función con el evento como argumento
    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        //setCategories(( categories ) => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input
            type='text'
            placeholder='Buscar gifs'
            value={ inputValue }
            onChange={  onInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

export default AddCategory
