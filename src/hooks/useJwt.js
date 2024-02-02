import axios from "axios";
import { useEffect,useState,  useCallback } from "react";

export const useJwt = () => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState(null);

    const getUserJwt = useCallback(async () => {
        try {
            const response = await axios.get('/user/jwt', {
              headers: {'Authorization': `Bearer ${token}`}
            });
            setUser(response.data);
            return response;
        } catch (error) {
            console.log('error : ', error);
            return error;
        }
      }, [token]);

    useEffect(() => {
        getUserJwt();
    }, [getUserJwt, token])

    return user;
}