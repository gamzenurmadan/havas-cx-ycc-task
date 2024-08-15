import { OtpFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputField from "./InputField";
import { useNavigate } from 'react-router-dom';
import { authLoginUser, setCookie } from "../api/authApi";
import useFormHandler from "../hooks/useFormHandler";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const fields = OtpFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id]='');

const validate = (state) => {
    const errors = {};
    fields.forEach(field => {
        if (!state[field.id]) {
            errors[field.id] = `${field.labelText} is required.`;
        }
    });
    return errors;
};

export default function Otp(){
    const {
        formState,
        handleChange,
        handleValidation,
        errors,
        setErrors,
        successMessage,
        setSuccessMessage
    } = useFormHandler(fieldsState, validate);

    const navigate = useNavigate();
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            try {
                const response = await authLoginUser(email, password, formState.otp);
                if (response.data && response.data.token) {
                    setCookie("token", response.data.token, 7);
                    setSuccessMessage("OTP validated successfully! Redirecting...");
                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                }
            } catch (error) {
                setErrors({ general: "Invalid OTP. Please try again." });
            }
        }
    };

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2">
                {
                    fields.map((field, index) => (
                        <div key={index} className="flex-grow w-full px-2 xs:w-1/6">
                            <InputField
                                handleChange={handleChange}
                                value={formState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                            />
                        </div>
                    ))                   
                }
            </div>
            {errors.general && <ErrorMessage message={errors.general} />}
            {successMessage && <SuccessMessage message={successMessage} />}
            <FormAction text="Send"/>
        </form>
    )
}