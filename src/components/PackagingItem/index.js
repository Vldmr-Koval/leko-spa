
import './packagingItem.scss'
import Image from '../ui/Image'

const packagingItem = ({product}) => {
    return (
             <div className='wrapper__item' >
                 <Image className='wrapper__item__img' src={product.img}/>
                 <div className='wrapper__item__name'>{product.name}</div>
                 <div className='wrapper__item__size'>{product.size}</div>
                 <div className='wrapper__item__price'>{product.price}</div>
             </div>
    )
}


export default packagingItem