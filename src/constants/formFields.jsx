const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        isRequired:true,
        placeholder:"Email address" 
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"userName",
        id:"userName",
        name:"userName",
        type:"text",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const OtpFields=[
    {
        labelText:"OTP Number",
        labelFor:"otp",
        id:"otp",
        name:"otp",
        type:Number,
        isRequired:true,
        placeholder:""
    }
]

export {loginFields, signupFields, OtpFields}