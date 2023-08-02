import { useEffect, useState } from 'react'
import axios from 'axios'
import './packagingBlock.scss'

import PackagingItem from '../PackagingItem'


const baseURL = 'https://6411a20ca7b02f6a03004928.mockapi.io/packaging'


const PackagingBlock = () => {  

    const [products, setProducts] = useState([])
    
    useEffect(() => {
      axios
        .get(baseURL)
        .then(data => setProducts(data.data))

    }, [])
    
    return (
        <section className='section container' >
            <h2 className='section__header'>Пакування вантажу при перевезеннях у Вінниці</h2>
            <div className='wrapper'>
                {products.map(product => {
                    return(
                        <PackagingItem product={product} key={product.id}/>
                    )
                })} 
            </div>

        </section>
       
    )
}


export default PackagingBlock