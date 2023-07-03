import './text-area.scss'

import text from './text'
// const children = text.packing()
// TODO: зробити нормальну систему підтягування текстів в текстові поля. Редакс? АПІ?

const TextArea = ({size = 100, children, header}) => {
    

    return (
        <section className='section section-text-area'>
            <div className='container'>
                {!header 
                    ? <></> 
                    : <h2 className='section-text-area__header'> {header}</h2>}
                <div className='section-text-area__wrap' style={{height: size}}>
                    {children}
                </div>

            </div>
            
        </section>
       
    )
}


export default TextArea