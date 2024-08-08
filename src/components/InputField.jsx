import PropTypes from 'prop-types';

const fixedInputClass="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function InputField(
    {
        handleChange,
        value,
        labelText,
        labelFor,
        id,
        name,
        type,
        isRequired=false,
        placeholder,
        customClass
    }
){
    return (
        <div className="my-5">
            <label className="sr-only" htmlFor={labelFor}>
                {labelText}
            </label>
            <input 
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
            />
        </div>
    )
}

InputField.propTypes = {
    handleChange:PropTypes.any,
    value:PropTypes.string,
    labelText:PropTypes.string,
    labelFor:PropTypes.string,
    id:PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    placeholder: PropTypes.string,
    customClass: PropTypes.any
}