import PropsTypes from 'prop-types';
import classNames from 'classnames';

import './image.scss'

const Image = ({
    src, alt, className, width, heigth, circle, ...attrs
}) => {
    
    if(!src){
        src = `https://via.placeholder.com/${width}x${heigth}`
    }


    const classes = classNames(
        'image',
        className,
        {circle}
    );
    
    return (
        <img
            src={src}
            alt={alt}
            className={classes}
            width={width}
            heigth={heigth}
            {...attrs}

        />

        
    )
}

Image.propsTypes = {
    src: PropsTypes.string,
    alt: PropsTypes.string,
    className: PropsTypes.string,
    width: PropsTypes.number,
    heigth: PropsTypes.number,
    circle: PropsTypes.bool,

};

Image.defaultProps = {
    src: '',
    alt: 'image name',
    className: '',
    width: 100, 
    heigth: 100,
    circle: false,
     
};

export default Image