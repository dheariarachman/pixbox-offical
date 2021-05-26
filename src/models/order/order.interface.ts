const enum Status {
    process,
    waiting,
    complete,
    pickup,
    deliver,
    cancel
}

const enum Paid {
    paid,
    unpaid
}

const enum PaidIn {
    pengirim,
    penerima,
    transfer,
    cod
}

export interface OrderType {
    id: number,
    order_date: string,
    order_code: string,
    pickup_name: string,
    pickup_phone: string,
    pickup_address: string,
    deliver_name: string,
    deliver_phone: string,
    deliver_address: string,
    paid_in: PaidIn,
    notes: string,
    status: Status,
    paid: Paid,
}


export interface ResponseOrderType {
    statusCode: number,
    data: OrderType,
    message: string
}