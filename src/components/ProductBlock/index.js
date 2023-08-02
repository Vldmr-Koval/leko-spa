
import './product-block.scss'
import Image from '../ui/Image';
import { NavLink } from 'react-router-dom';

import products from '../../pages/Product/products_data'


const ProductBlock = () => {



    return (
        <>
        <section className='section section-product'>
            <div className='container'>
                <h2 className='section__header'>
                Які послуги надає Leko

                </h2>
                <div className='section-product__content'>

                {products.map((product)=> {
                    return (
                        <NavLink className="section-product__content_item" key={product.id}  to={`/product/${product.name}`}> 
                            <Image 
                            className="section-product__content_item_img"
                            src={product.srcIco}
                            />
                            <p>{product.textName}</p>
                            {(product.text2) ? <p>{product.text2}</p> : <></>}
                        </NavLink>
                    )

                })}

                </div>

            </div>
            

        

        </section>
        </>
        
      );
}

// Modal.propsTypes = {

// };

// Modal.defaultProps = {
    
     
// };

export default ProductBlock