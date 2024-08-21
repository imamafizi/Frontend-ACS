import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in
        const user = localStorage.getItem("login");
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    // Redirect if not authenticated
    useEffect(() => {
        if (isAuthenticated) {
            router.push("/404");
        }
    }, [isAuthenticated, router]);

    return isAuthenticated;
};

export default useAuth;
