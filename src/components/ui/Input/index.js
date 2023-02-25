import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Input.scss'

const Input = ({
    id, className, label, error, ...attrs
}) => {

    const classes = classNames(
        'input',
        className,
        {error},
    )

    return (
        <div className="inputWrapper">
            <label className="inputLabel" htmlFor={id}>{label}</label>
            <input
                name={id}
                id={id}
                className={classes}
                {...attrs}
            />
            {error && 
                <span className="inputError">{error}</span>}
            
        </div>
    )
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};

Input.defaultProps = {
    className: '',
}

export default Input;