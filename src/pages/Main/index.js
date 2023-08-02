import Advantages from '../../components/Advantages'
import Feedback from '../../components/Feedback'
import ProductBlock from '../../components/ProductBlock'
import Image from '../../components/ui/Image'
import WithForm from '../../components/HOC/WithForm'

import TextArea from '../../components/TextArea'
import text from '../../components/TextArea/text'
import {prod1} from '../../img/index'



import './main.scss'

const Main = () => {
    const headerTA = 'Компанія з вантажоперевезень у Вінниці'
    
    return (
        <>
                <WithForm>
                    <Image width={650} heigth={470} src={prod1} /> 
                </WithForm>
                
            <Advantages/>
            <ProductBlock/>
            <Feedback/>
            <TextArea 
                size={350} 
                children={text.packing()} 
                header={headerTA}/> 
        </>
       
    )
}


export default Main