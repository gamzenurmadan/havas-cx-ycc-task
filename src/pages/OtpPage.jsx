import axios from "axios";
import OtpValidation from "../components/OtpValidation";
import Header from "../components/Header";

const checkSession = async () => {
    try {
        const response = await axios.post("http://199.247.17.44:3001/auth/data", {}, {headers:
            {
                Authorization:
            }
        });
    }
}

export default function OtpPage(){
    return(
        <>
        <Header 
            heading="One Time Password"
            paragraph="Please Enter Your OTP code"
        />
        <OtpValidation />
        </>
    )
}