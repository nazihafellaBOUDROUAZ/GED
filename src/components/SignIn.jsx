import "./signin.css";
import React, { useState } from "react";

function SignIn() {
    const [signIn, setSignIn] = useState(true);

    return (
        <div className="ggg">
        <div className={`container ${signIn ? "" : "sign-in-mode"}`}>
            <div className="sign-up-container form-container">
                <form className="Form">
                    <h1 className="Title">Sign in en tant que Utilisateur</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                </form>
            </div>

            <div className="sign-in-container form-container">
                <form className="Form">
                    <h1 className="Title">Sign in en tant que Admin</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left overlay-panel">
                        <h1 className="Title1">Welcome Back!</h1>
                        <p>Accédez à vos documents en toute sécurité et simplicité.</p>
                        <button className="ghost" onClick={() => setSignIn(true)}>
                            Admin
                        </button>
                    </div>

                    <div className="overlay-right overlay-panel">
                        <h1 className="Title1">Welcome!</h1>
                        <p>Accédez à vos documents en toute sécurité et simplicité.</p>
                        <button className="ghost" onClick={() => setSignIn(false)}>
                            Utilisateur
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SignIn;