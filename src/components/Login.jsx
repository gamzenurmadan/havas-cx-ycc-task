import { useState } from "react";
import {loginFields} from "../constants/formFields";
import InputField from "./InputField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { useNavigate } from "react-router-dom";
import { loginUser, setCookie } from "../api/authApi";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]="");

export default function Login(){

    const [loginState, setLoginState]= useState(fieldsState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLoginState(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    const authenticateUser = async () => {
        try {
            const response = await loginUser(loginState.email, loginState.password);
            setCookie("token", response.data.token, 7);
            localStorage.setItem("email", loginState.email);
            localStorage.setItem("password", loginState.password);
            navigate("/otp-validate");
        }catch (error){
            console.error(error)
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
                        value={loginState[field.id]}
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

            <FormExtra />
            <FormAction text="Login"/>
        </form>
    )
}