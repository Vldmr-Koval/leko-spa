import Advantages from '../../components/Advantages'
import Feedback from '../../components/Feedback'
import Form from '../../components/Form'
import TextArea from '../../components/TextArea'
import PackagingBlock from '../../components/PackagingBlock'

import './packaging.scss'

import text from '../../components/TextArea/text'
// const children = text.packing()

const Packaging = () => {


    
    return (
        <>
            <PackagingBlock/>
            <Advantages/>
            <Form/>
            <Feedback/>
            <TextArea size={350} children={text.packing()}/> 
        </>
       
    )
}


export default Packaging