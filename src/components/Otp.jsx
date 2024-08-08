import { useState } from "react";
import { OtpFields } from "../constants/formFields";
import FormAction from "./FormAction";
import InputField from "./InputField";
import PropTypes from "prop-types";

const fields = Array(6).fill(OtpFields);
let fieldsState = {};

fields.forEach(field => fieldsState[field.id]='');

export default function Otp({onSubmit}){
    const [otpState, setOtpState] = useState(fieldsState);

    const handleChange = (e) => setOtpState({...otpState, [e.target.id]:e.target.value});

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(otpState);
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

Otp.propTypes = {
    onSubmit:PropTypes.any
}