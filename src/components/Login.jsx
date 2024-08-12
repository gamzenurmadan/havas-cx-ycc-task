import {loginFields} from "../constants/formFields";
import InputField from "./InputField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { useNavigate } from "react-router-dom";
import { loginUser, setCookie } from "../api/authApi";
import useFormHandler from "../hooks/useFormHandler";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]="");

const validate = (state) => {
    const errors = {};
    if (!state.email) errors.email = "Email is required.";
    if (!state.password) errors.password = "Password is required.";
    return errors;
};

export default function Login(){
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

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (handleValidation){
            authenticateUser();
        }
    }

    const authenticateUser = async () => {
        try {
            const response = await loginUser(formState.email, formState.password);
            setCookie("token", response.data.token, 7);
            sessionStorage.setItem("email", formState.email);
            sessionStorage.setItem("password", formState.password);
            setSuccessMessage("Login successful! Redirecting...");
            setTimeout(() => {
                navigate("/otp-validate");
            }, 2000);
        }catch (error){
            setErrors({ general: "Invalid email or password." });
        }
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                fields.map(field=>
                    <InputField 
                        key={field.id}
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
                )
                }
            </div>
            {errors.general && <ErrorMessage message={errors.general} />}
            {successMessage && <SuccessMessage message={successMessage} />}
            <FormExtra />
            <FormAction text="Login"/>
        </form>
    )
}