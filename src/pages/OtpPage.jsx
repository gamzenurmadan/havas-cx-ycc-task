import Otp from "../components/Otp";
import Header from "../components/Header";

export default function OtpPage(){
    return(
        <>
        <Header 
            heading="One Time Password"
            paragraph="Please Enter Your OTP code"
        />
        <Otp />
        </>
    )
}