import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useJwt = () => {
  const token = localStorage.getItem('token');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUserJwt = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/user/jwt', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.user);
      setError(null);
    } catch (error) {
      setError(error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getUserJwt();
    }
  }, [token, getUserJwt]);

  return { user, error, isLoading };
};