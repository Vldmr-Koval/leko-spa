import PropsTypes from 'prop-types';
import classNames from 'classnames';

import './button.scss'

const Button = ({
    children, onClick, className, disabled, active, ...attrs
}) => {
    
    const classes = classNames(
        'btn',
        className,
        {active},
    );
    
    return (
        <button
        {...attrs}
         className={classes}
         disabled={disabled}
         onClick={onClick}
        >
          {children}  
        </button>
    )
}

Button.PropsTypes = {
    children: PropsTypes.node,
    onClick: PropsTypes.func,
    className: PropsTypes.string,
    disabled: PropsTypes.bool,
    active: PropsTypes.bool,
};

Button.defaultProps = {
    children: 'Defoult button',
    onClick: () => {},
    className: '',
    disabled: false,
    active:  false,
     
};

export default Button