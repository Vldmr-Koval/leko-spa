import './advantages.scss'
import Image from '../ui/Image'
import Fast from "../../img/advantages/fast.svg";
import Comfort from "../../img/advantages/comfort.svg";
import Operative from "../../img/advantages/operative.svg";
import Secure from "../../img/advantages/secure.svg";


const Advantages = () => {
    
    

    return (
        <section className='section'>
            <h2>Як ми працюємо</h2>
            <div className='wrap'>
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Fast} 
                        />
                    <h5>Швидко</h5>
                    <p>Оформлення замовлення online або за номером 30-30 впродовж декількох секунд</p>
                </div>
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Secure} 
                        />
                    <h5>Безпечно</h5>
                    <p>Надаємо всі необхідні документи</p>
                </div>
               
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Comfort} 
                        />
                    <h5>Комфортно</h5>
                    <p>Вирішуємо всі транспортні завдання фахівцями NOSHA з мінімальною участю клієнта</p>
                </div>
                <div className='wrap__item'>
                    <Image 
                        className='imageAdv'
                        src={Operative} 
                        />
                    <h5>Оперативно</h5>
                    <p>Здійснюємо перевезення вантажів в найкоротші та своєчасні терміни
</p>
                </div>
                
            </div>
            
        </section>
       
    )
}


export default Advantages