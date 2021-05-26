export interface OrderType {
    id?: number;
    order_date?: string;
    order_code?: string;
    pickup_name?: string;
    pickup_phone?: string;
    pickup_address?: string;
    deliver_name?: string;
    deliver_phone?: string;
    deliver_address?: string;
    paid_in?: string;
    notes?: string;
    status?: string;
    paid?: string;
    orderStatus?: object[];
}


export interface ResponseOrderType {
    statusCode: number;
    data: OrderType;
    message: string;
}