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

    useEffect(() => {
    console.log("Valor actual de user:", user);
  }, [user]);

    const login = async (userData) => {
        console.log("entre alogin en el contexto");
        //const userDataLocal = JSON.parse(localStorage.getItem("user"));
        //const userToken = obtenerTokenLocalStorage();

        //if (!//userToken) {
            //if (userData.password === userDataLocal.password && userData.email === userDataLocal.email) {
                const token = await iniciarSesion(userData)
                //const userPayload = await getDecodedPayload(token);
                console.log('Token JWT: ', token)
                console.log("CL en AuthContext: ", userData)
                const userDecoded = await getDecodedPayload(token);
                console.log(userDecoded);
                setUser(userDecoded);
                console.log(user);
                //setErrorType(null);
                //console.log(success);
                return true;
           // } else {
                //setErrorType("userNotFound")
                //console.log(success);
                // console.log("CL en else de AuthContext: ", userData)
                // const userPayload = await getDecodedPayload(userToken);
                // if (!userPayload){return false}
                // else{setUser(userPayload)}
            //}

        //} else {

            //setErrorType("noRegisteredUsers");
            //console.log(success);
            //return false;
        //}
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



