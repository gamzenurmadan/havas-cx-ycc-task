import PropTypes from "prop-types";

export default function SuccessMessage({ message }) {
    return (
        <div className="text-green-500 text-sm mt-2">
            {message}
        </div>
    );
}

SuccessMessage.propTypes = {
    message: PropTypes.string.isRequired
};
