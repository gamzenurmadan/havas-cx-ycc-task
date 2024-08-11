import { useState } from "react";
import {loginFields} from "../constants/formFields";
import InputField from "./InputField";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import { useHistory } from "react-router-dom";
import { loginUser, setCookie } from "../api/authApi";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id]="");

export default function Login(){

    const [loginState, setLoginState]= useState(fieldsState);
    const history = useHistory();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    const authenticateUser = async () => {
        try {
            const response = await loginUser(loginState.email, loginState.password);
            setCookie("token", response.data.token, 7);
            history.push("otp-validate");
        }catch (error){
            console.error(error)
        }
    }

    return(
        <form className="mt-8 space-y-6">
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
            <FormAction handleSubmit={handleSubmit} text="Login"/>
        </form>
    )
}