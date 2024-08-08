import PropTypes from "prop-types";

const fixedButtonClass = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"

export default function FormAction({
    handleSubmit,
    type="Button",
    action="submit",
    text
}){
    return (
        <>
        {
            type === "Button" ? 
                <button type={action} className={fixedButtonClass} onSubmit={handleSubmit}>
                    {text} 
                </button>
                :
            <> </>
        }
        </>
    )
}

FormAction.propTypes = {
    handleSubmit:PropTypes.any,
    type:PropTypes.string,
    action:PropTypes.string,
    text:PropTypes.string
}