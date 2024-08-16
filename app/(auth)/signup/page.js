"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, errorMessages } from "@/firebase";
import SignupForm from "@/app/components/SignupForm";

export default function Signup() {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: username,
            });
        }
        catch (error) {
            setError(errorMessages[error.code]);
            console.log(error);
        }
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <SignupForm username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} handleSignup={handleSignup}/>
    );
}
