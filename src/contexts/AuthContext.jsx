import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(false);
    const [errorType, setErrorType] = useState(null);
    const [products, setProducts] = useState([])

    const login = (userData) => {
        const userDataLocal = JSON.parse(localStorage.getItem("user"));
        if (userDataLocal) {
            if (userData.password === userDataLocal.password && userData.email === userDataLocal.email) {
                setUser(userDataLocal);
                setErrorType(null);
                console.log(success);
                return true;
            } else {
                setErrorType("userNotFound")
                console.log(success);
                return false;
            }

        } else {
            setErrorType("noRegisteredUsers");
            console.log(success);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        console.log(success);
    };

    // Lectura de productos
    const getProducts = async () => {
        try {
            const response = await axios.get('https://raw.githubusercontent.com/Nandem1/ganbare-store-g27-front/main/public/dataproducto.json')
            const data = await response.data
            setProducts(data)
        } catch (error) {
            console.error("Error en AuthContext - getProducts() : ", error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <AuthContext.Provider value={{ user, login, logout, setSuccess, errorType, setErrorType, products }}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };



