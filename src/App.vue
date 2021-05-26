<template>
	<ion-app>
		<ion-router-outlet />
	</ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent, provide } from "vue";
import orderStore from "./models/order/order.store";

export default defineComponent({
	name: "App",
	components: {
		IonApp,
		IonRouterOutlet,
	},
	setup() {
		provide("orders", orderStore);
	},
});
</script>

<style lang="scss" scoped>
@media (min-width: 1200px) {
	.ion-page {
		max-width: 33%;
		margin: auto;
	}
}
</style>
