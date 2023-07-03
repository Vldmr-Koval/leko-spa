import './advantages.scss'
import Image from '../ui/Image'
import Fast from "../../img/advantages/fast.svg";
import Comfort from "../../img/advantages/comfort.svg";
import Operative from "../../img/advantages/operative.svg";
import Secure from "../../img/advantages/secure.svg";


const Advantages = () => {
    
    

    return (
        <section className='section'>
            <h2 className='section__header'>Як ми працюємо</h2>
            <div className='wrap container'>
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Fast} 
                        />
                    <h5 className='wrap__item__title'> Швидко</h5>
                    <p className='wrap__item__body'>Оформлення замовлення online або за номером 30-30 впродовж декількох секунд</p>
                </div>
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Secure} 
                        />
                    <h5 className='wrap__item__title'>Безпечно</h5>
                    <p className='wrap__item__body'>Надаємо всі необхідні документи</p>
                </div>
               
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Comfort} 
                        />
                    <h5 className='wrap__item__title'>Комфортно</h5>
                    <p className='wrap__item__body'>Вирішуємо всі транспортні завдання фахівцями NOSHA з мінімальною участю клієнта</p>
                </div>
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Operative} 
                        />
                    <h5 className='wrap__item__title'>Оперативно</h5>
                    <p className='wrap__item__body'>Здійснюємо перевезення вантажів в найкоротші та своєчасні терміни
</p>
                </div>
                
            </div>
            
        </section>
       
    )
}


export default Advantages