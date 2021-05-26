import { reactive } from 'vue';
import { OrderType } from '../../models/order/order.interface';

const state = reactive({
    detail: {}
});

const methods = {
    updateDetail(newDeatail: OrderType) {
        state.detail = newDeatail
    }
};

export default {
    state, methods
}