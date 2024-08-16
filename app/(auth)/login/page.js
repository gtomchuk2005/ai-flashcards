"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, errorMessages} from "@/firebase";
import LoginForm from "@/app/components/LoginForm";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            setError(errorMessages[error.code]);
            console.log(error);
        }
        setEmail('');
        setPassword('');
    }

    return (
        <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} handleLogin={handleLogin}/>
    );
}
