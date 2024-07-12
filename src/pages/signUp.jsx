import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Signin from "../assets/signin.png"
import "../Styles/SignUp.css"


const signUp = () => {
    return (
        <div className="signUp">
            <CustomNavbar />
            <div className="signin">
        <form className="form">
            <h1>Create account!</h1>
            <div className="input-group">
                <label for="name">First Name</label>
                <div className="input-wrapper">
                    <svg width="20" height="20" viewBox="0 0 60 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 15C15 23.27 21.73 30 30 30C38.27 30 45 23.27 45 15C45 6.73 38.27 0 30 0C21.73 0 15 6.73 15 15ZM56.6667 63.3333H60V60C60 47.1367 49.53 36.6667 36.6667 36.6667H23.3333C10.4667 36.6667 0 47.1367 0 60V63.3333H56.6667Z" fill="#287094"/>
                    </svg>
                    <input type="text" id="name" name="name" placeholder="Enter first name"/>
                </div>
            </div>
            <div className="input-group">
                <label for="email">Email</label>
                <div className="input-wrapper">
                    <svg className="emailsvg" height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                    </svg>
                    <input type="email" id="email" name="email" placeholder="Enter email"/>
                </div>
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <div className="input-wrapper">
                    <svg className="passwordsvg" height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                        <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                    </svg>
                    <input type="password" id="password" name="password" placeholder="Enter password"/>
                </div>
            </div>
            <button className="login-btn">Sign Up</button>
            <span className="sign-up">Already have an account? <a href="/login">Sign in</a></span>
        </form>
        <div className="bg-image">
            <img src={Signin} alt="Sign In"/>
        </div>
    </div>
            
        </div>
    )
}
export default signUp;