import { useState } from "react"

const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One punch', 'Dragon ball' ]);

  return (
    <>
        <h1>GifExpert App</h1>
        <ol>
            {   categories.map( category => {
                    return <li key={ category }>{ category }</li>
                } ) 
            }
        </ol>
    </>
  )
}

export default GifExpertApp
