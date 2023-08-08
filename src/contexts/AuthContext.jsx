import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { iniciarSesion, getDecodedPayload } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(false);
    const [errorType, setErrorType] = useState(null);
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    let userToken;

    useEffect(() => {
    const getUserPayload = async() => {
        console.log("Valor actual de user:", user);
        userToken = localStorage.getItem("token");
        console.log(userToken);
        if(userToken){setUser(await getDecodedPayload(userToken))}
    }
    getUserPayload();
  }, []);

    const login = async (userData) => {
        //userToken = localStorage.getItem("token");
        if (!userToken){userToken = await iniciarSesion(userData)}
        const userDecoded = await getDecodedPayload(userToken);
        setUser(userDecoded);
        return true;
    };

    const logout = () => {
    localStorage.removeItem("user");
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
        <AuthContext.Provider value={{ user,setUser, login, logout, setSuccess, errorType, setErrorType, products, cart, setCart }}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };



