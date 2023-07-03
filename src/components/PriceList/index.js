
import './price-list.scss'


const PriceList = ({product}) => {
    
const details = product.details

    return (

        <section className='section section-pricelist'>
            <div className='container'>
                <h2 className='section__header'>
                    Вартість і деталі надання послуги

                </h2>
                <div className='section-pricelist__content'>
                    <ul className='section-pricelist__content__list'>
                        <li className='section-pricelist__content__list_item'>
                            <p className='section-pricelist__content__list_item_text'>Послуга</p>
                            <span className='section-pricelist__content__list_item_value'>Вартість</span>
                        </li>
                        <li className='section-pricelist__content__list_item'>
                            <p className='section-pricelist__content__list_item_text'>{product.textName}</p>
                            <span className='section-pricelist__content__list_item_value'>від {details.price} грн</span>
                        </li>
                        <li className='section-pricelist__content__list_item'>
                            <p className='section-pricelist__content__list_item_text'>Послуги вантажників</p>
                            <span className='section-pricelist__content__list_item_value'>від 200 грн</span>
                        </li>
                        <li className='section-pricelist__content__list_item'>
                            <p className='section-pricelist__content__list_item_text'>Вартість 1 км по місту/за містом</p>
                            <span className='section-pricelist__content__list_item_value'>від 25 грн/км</span>
                        </li>
                    </ul>

                    <ul className='section-pricelist__content__list'>
                        <li className='section-pricelist__content__list_item'>
                            <p className='section-pricelist__content__list_item_text'>Інформація за послугою</p>
                            <span className='section-pricelist__content__list_item_value'>Особливості</span>
                        </li>
                        {
                            (details.heaver) 
                             ?  <li className='section-pricelist__content__list_item'>
                                    <p className='section-pricelist__content__list_item_text'>Послуги вантажників</p>
                                    <span className='section-pricelist__content__list_item_value'>{details.heaver}</span>
                                </li>
                            : <></>  
                        }

                        {
                            (details.rigging) 
                            ? <li className='section-pricelist__content__list_item'>
                                <p className='section-pricelist__content__list_item_text'>Такелажні роботи</p>
                                <span className='section-pricelist__content__list_item_value'>{details.rigging}</span>
                              </li>
                            : <></>  
                        }
                        
                        {
                            (details.packaging) 
                            ? 
                            <li className='section-pricelist__content__list_item'>
                                    <p className='section-pricelist__content__list_item_text'>Пакувальні матеріали</p>
                                    <span className='section-pricelist__content__list_item_value'>{details.packaging} </span>
                                </li>
                            : <></>  
                        }



                    </ul>


                <div>
                    {/* {product.textShow()} */}
                </div>
                </div>

            </div>
            

        

        </section>

        
      );
}

// Modal.propsTypes = {

// };

// Modal.defaultProps = {
    
     
// };

export default PriceList