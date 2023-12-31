import { API } from "../services"

const useProducts = async () => {
    try {
        const response = await API.get('products')
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}