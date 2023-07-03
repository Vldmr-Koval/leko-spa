import Form from '../../Form'
import './with-form.scss'


const WithForm = ({children, header}) => {
    return (
        <section className='section-with-form'>
        
            <div className='container'>
                <div className='section-with-form__wrap'>
                    <div className='container'>
                        <div className='section-with-form__wrap_left section'>
                            <h1 className='section-with-form__wrap_left_header'>
                            {(header) 
                                ? header :
                                ''}</h1>
                            {children}
                        </div>
                    </div>

                    <Form/>
                </div>
            </div>



        </section>
    )
}

// Modal.propsTypes = {

// };

// Modal.defaultProps = {
    
     
// };

export default WithForm