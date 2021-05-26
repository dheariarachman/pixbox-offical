<template>
	<ion-app>
		<ion-router-outlet />
	</ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	components: {
		IonApp,
		IonRouterOutlet,
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
