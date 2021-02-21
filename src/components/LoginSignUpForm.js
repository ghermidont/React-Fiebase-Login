import React from 'react';
import PictureUploadForm from './PictureUploadForm';
import {useAuthContext} from '../context/AuthProvider';

const LoginSignUpForm = ()=>{

    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError} = useAuthContext();
    
    return <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input type="text" autoFocus required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <p className={(e)=>setPassword(e.target.value)}></p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>
                                Don't have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </>
                    ):(
                        <>
                            <button onClick={handleSignup}>Sign up</button>
                            <p>
                                Have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>
                            <PictureUploadForm />
                        </>
                    )}
                </div>
        </div>
    </section>
}

export default LoginSignUpForm;