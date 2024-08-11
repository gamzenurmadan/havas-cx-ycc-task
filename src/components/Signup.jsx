import { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputField from "./InputField";
import { registerUser } from "../api/authApi";

const fields = signupFields;
let fieldsState = {};

fields.forEach(field => fieldsState[field.id]='');

export default function Signup () {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({...signupState, [e.target.id]:e.target.value});

    const handleSubmit=(e)=>{
        e.preventDefault();
        createAccount();
    }

    const createAccount= async () => {
        try{
            await registerUser(signupState.email, signupState.userName, signupState.password)
        }catch (error){
            console.error(error)
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
                            value={signupState[field.id]}
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
        </form>
    )
}