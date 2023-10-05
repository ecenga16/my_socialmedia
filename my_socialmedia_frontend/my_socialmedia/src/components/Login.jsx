import React from "react";
import GoogleLogin from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import BgVideo from '../assets/bg-video.mp4';
import logo from '../assets/logo.png';

const Login = () => {
    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <video
                    src={BgVideo}
                    type="video/mp4"
                    Loop
                    muted
                    autoPlay
                    className="w-full h-full bg-cover"
                />
                <div className="absolute flex flex-col justify-center items-center
                                top-0 right-0 left-0 bottom-0 bg-blackOveray">
                    <div className="p-5">
                        <img src={logo} width="130px" alt="logo" /> 
                    </div>                   
                    <div className="shadow-2xl">
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                        render={(renderProps) => (
                            <button
                                type="button"
                                className="bg-mainColor flex justify-center items-center p-5 rounded-xl cursor-pointer outline-none"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}    
                            >
                                <FcGoogle className="mr-2" /> Sign in
                            </button>
                        )}
                        onSuccess={(response) => {
                            console.log("Login was successful:", response);
                        }}
                        onFailure={(error) => {
                            console.log("Login failed:", error);
                        }}
                        cookiePolicy="single_host_origin"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;