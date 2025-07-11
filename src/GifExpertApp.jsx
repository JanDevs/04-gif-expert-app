import { useState } from "react"
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One punch', 'Dragon ball' ]);

    const onAddCategory = (newCategory) =>{
        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpert App</h1>
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={onAddCategory}
            />
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
