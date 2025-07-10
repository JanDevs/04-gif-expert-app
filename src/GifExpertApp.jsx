import { useState } from "react"

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One punch', 'Dragon ball' ]);

    const onAddCategory = () =>{
        setCategories([...categories, 'Nueva categoría']);
    }

    return (
        <>
            <h1>GifExpert App</h1>
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                { categories.map( category => {
                    return <li key={ category }>{ category }</li>
                    } ) 
                }
            </ol>
        </>
    )
}

export default GifExpertApp
