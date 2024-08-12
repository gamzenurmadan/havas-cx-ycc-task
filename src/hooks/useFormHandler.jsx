import { useState } from "react";

export default function useFormHandler (initialState, validate) {

    const [formState, setFormState] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormState(prevState => ({
            ...prevState,
            [id]:value
        }));
        setErrors(prevState => ({
            ...prevState,
            [id]:""
        }));
    };

    const handleValidation = () => {
        const validationErrors = validate(formState);
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    return {
        formState,
        handleChange,
        handleValidation,
        errors,
        setErrors,
        successMessage,
        setSuccessMessage
    }
}