import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { iniciarSesion, getDecodedPayload, addProductToFavorites, removeProductFromFavorites } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(false);
    const [errorType, setErrorType] = useState(null);
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [favs, setFavs] = useState(null)
    let userToken;

    useEffect(() => {
        const getUserPayload = async () => {
            console.log("Valor actual de user:", user);
            userToken = localStorage.getItem("token");
            console.log(userToken);
            if (userToken) { setUser(await getDecodedPayload(userToken)) }
        }
        getUserPayload();
    }, []);

    const login = async (userData) => {
        //userToken = localStorage.getItem("token");
        if (!userToken) { userToken = await iniciarSesion(userData) }
        const userDecoded = await getDecodedPayload(userToken);
        setUser(userDecoded);
        return true;
    };

    const logout = () => {
        localStorage.removeItem("token");
        setFavs([])
        setUser(null);
        console.log(success);
    };

    const handleToggleFav = async (productId) => {
        try {
            if (isProductFavorited(productId)) {
                console.log("entre a eliminar el fav")
                const userId = user.userId;
                await removeProductFromFavorites(userId, productId)
                setFavs(favs.filter(fav => fav.productId!== productId))
                getFavs(userId);
            } else {
                console.log("entre a agregar a fav")
                const userId = user.userId;
                console.log("addtofav func userid: ", userId);
                await addProductToFavorites(userId, productId);
                // Actualiza la lista de favoritos después de agregar
                getFavs(userId);
            }
        } catch (error) {
            console.error("Error al agregar/eliminar de favoritos:", error);
        }
    };

    const isProductFavorited = (productId) => {
        return favs.some(fav => fav.product_id === productId);
    };

    // Lectura de productos
    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products/allproducts')
            const data = await response.data
            setProducts(data)
        } catch (error) {
            console.error("Error en AuthContext - getProducts() : ", error)
        }
    }

    const getFavs = async (userId) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axios.get(`http://localhost:3000/fav/getFav/${userId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            const data = await response.data
            console.log("data en el response de getFavs: ", data)
            setFavs(data)
        } catch (error) {
            console.error("Error en AuthContext - getFavs() : ", error)
        }
    }

    useEffect(() => {
        if (user) {
            console.log(user)
            console.log("Leyendo los favs en AuthContext", user.userId)
            getFavs(user.userId)
        }
    }, [user])

    useEffect(() => {
        console.log("Leyendo los favs en AuthContext para el usuario " + user?.userId + ": " + favs)
    }, [favs])

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        console.log(products)
        console.log(favs);
    }, [products, favs])

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, setSuccess, errorType, setErrorType, products, cart, setCart, handleToggleFav, isProductFavorited, favs }}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };



