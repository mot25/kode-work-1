import { AuthContext } from '@app/providers/AuthProvider/AuthProvider';
import { useContext } from 'react';

export  function useAuth() {
    return useContext(AuthContext);
}
