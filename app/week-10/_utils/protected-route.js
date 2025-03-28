"use client";

import { useUserAuth } from "./auth-context";

const ProtectedRoute = ({ children }) => {
    const { user } = useUserAuth();



    return(
        <div>{
            user ? 
                (
                    <>{children}</>
            ) 
            : 
            (
            <div className="text-center align-middle">
                <p>Loading...</p>
            </div>
            )
        }
        </div>
    )
};

export default ProtectedRoute;