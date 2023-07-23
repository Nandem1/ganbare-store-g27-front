import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(false);
    const [errorType, setErrorType] = useState(null);

    const login = (userData) => {
        const userDataLocal = JSON.parse(localStorage.getItem("user"));
        if(userDataLocal){
            if(userData.password === userDataLocal.password && userData.email === userDataLocal.email){
                setUser(userDataLocal);
                setErrorType(null);
                console.log(success);
                return true;
            }else{
                setErrorType("userNotFound")
                console.log(success);
                return false;
            }

        }else{
            setErrorType("noRegisteredUsers");
            console.log(success);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        console.log(success);
    };

    return(
            <AuthContext.Provider value={{user, login, logout, setSuccess, errorType, setErrorType}}>
                { children }
            </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  export { AuthContext, AuthProvider};



