import Advantages from '../../components/Advantages'
import Feedback from '../../components/Feedback'
import TextArea from '../../components/TextArea'
import Image from '../../components/ui/Image'
import PriceList from '../../components/PriceList'
import WithForm from '../../components/HOC/WithForm'
import {useParams} from 'react-router-dom'

import './product.scss'
import products from './products_data'

const Product = () => {
   
    const params = useParams();
    const prodName = params.name;

    const product = products.find(({name})=> name === prodName)
    console.log(product)

    
    return (
        <>  
        {(!product) ? <>
                        <h1> Немає продукта із назвою {prodName} </h1>
                        <Advantages/>
                        <Feedback/>
                    </>
                    : <> 
                        <WithForm header={product.textName}>
                        <Image width={650} heigth={470} src={product.srcImg}/> 
                        </WithForm>
                        <PriceList product={product}/>
                        <Advantages/>
                        <Feedback/>
                        <TextArea size={450} children={product.textShow()} header={product.textName}/> 
                    </>
        }
            
        </>
       
    )
}


export default Product