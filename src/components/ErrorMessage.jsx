import PropTypes from "prop-types";

export default function ErrorMessage({message}){
    return(
        <div className="text-red-500 text-sm mt-2">
            {message}
        </div>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
};