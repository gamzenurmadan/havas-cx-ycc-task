import { useNavigate } from "react-router-dom";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputField from "./InputField";
import { registerUser, setCookie } from "../api/authApi";
import useFormHandler from "../hooks/useFormHandler";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id]='');

const validate = (state) => {
    const errors = {};
    if (!state.username) errors.username = "Username is required.";
    if (!state.email) errors.email = "Email is required.";
    if (!state.password) errors.password = "Password is required.";
    return errors;
}

export default function Signup () {
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
        if (handleValidation()){
            createAccount();
        }
    };

    const createAccount= async () => {
        try{
            const response = await registerUser(formState.email, formState.userName, formState.password)
            setCookie("token", response.data.token, 7);
            setSuccessMessage("Registration successful! Redirecting to Log in Page");
            setTimeout(() => {
             navigate("/login");
            }, 2000);
        }catch (error){
            setErrors({ general: "Registration failed. Please try again." });
        }
    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
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
                <FormAction text="Signup"/>
            </div>
            {errors.general && <ErrorMessage message={errors.general} />}
            {successMessage && <SuccessMessage message={successMessage} />}
        </form>
    )
}