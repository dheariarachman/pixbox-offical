import axios, { AxiosResponse } from "axios";
import { ResponseOrderType } from '../../models/order/order.interface';

const instance = axios.create({
    baseURL: 'https://staging.pixbox.id/api/',
    timeout: 5000
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, formBody: object) => instance.post(url, formBody).then(responseBody)
};

export const Orders = {
    getOrderById: (id?: string | null): Promise<ResponseOrderType> => requests.get(`orders/${id}`),
    postOrder: (formBody: object): Promise<ResponseOrderType> => requests.post(`orders`, formBody)
}