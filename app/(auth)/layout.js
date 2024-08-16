"use client";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user signed in');
                router.push('/');
            }
            else {
                console.log('user signed out');
    
                if (pathname !== '/signup') {
                    router.push('/login');
                }
                else {
                    router.push('/signup'); 
                }
            }
            setLoading(false);
        })
    })

    if (loading) {
        return <div>Loading...</div>
    }
    
    return <>{children}</>
}
