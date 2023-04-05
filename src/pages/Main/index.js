import Advantages from '../../components/Advantages'
import PackagingBlock from '../../components/PackagingBlock'
import Feedback from '../../components/Feedback'
import Form from '../../components/Form'

import './main.scss'

const Main = () => {
    
    return (
        <>
            <div><h2>Main page</h2></div>
            <Form/>
            <Feedback/>

            <Advantages/>
            <PackagingBlock/>

        </>
       
    )
}


export default Main