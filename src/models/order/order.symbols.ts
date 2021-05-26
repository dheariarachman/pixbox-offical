import { InjectionKey } from 'vue';
import { OrderType } from './order.interface';

export const OrderKey: InjectionKey<OrderType> = Symbol('Order');