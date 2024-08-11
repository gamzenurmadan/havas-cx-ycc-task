import { useState } from "react";
import { OtpFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputField from "./InputField";
import { useHistory } from 'react-router-dom';
import { authLoginUser } from "../api/authApi";


const fields = Array(6).fill(OtpFields);
let fieldsState = {};

fields.forEach(field => fieldsState[field.id]='');

export default function Otp(){
    const [otpState, setOtpState] = useState(fieldsState);
    const history = useHistory();

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    const handleChange = (e) => setOtpState({...otpState, [e.target.id]:e.target.value});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await authLoginUser(email, password, otpState);
            document.cookie = `token=${response.data.token}; path=/; Secure; HttpOnly`;
            history.push("/");
        }catch(error){
            console.error(error);
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
                                value={otpState[field.id]}
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
            <FormAction handleSubmit={handleSubmit} text="Send"/>
        </form>
    )
}