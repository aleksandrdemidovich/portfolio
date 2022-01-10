import axios from "axios";


const baseURL = 'https://smtp-server-js.herokuapp.com/';

const instance = axios.create({
    baseURL: baseURL,
});


export const offerAPI = {
    sendOffer: async (data: OfferDataType) => {
        const response = await instance.post('sendMessage', data)
        return response.data
    }
}

export type OfferDataType = {
    name: string,
    email: string,
    message: string
}