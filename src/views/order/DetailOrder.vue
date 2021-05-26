<template>
	<ion-page>
		<!-- Back button with a default href -->
		<ion-header class="ion-no-border">
			<ion-toolbar color="primary">
				<ion-buttons slot="start">
					<ion-back-button default-href="/"></ion-back-button>
				</ion-buttons>
				<ion-title>Kirim Paket</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			{{ orders }}
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonTitle,
	IonContent,
} from "@ionic/vue";
export default defineComponent({
	name: "DetailOrder",
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonButtons,
		IonBackButton,
		IonTitle,
		IonContent,
	},
	setup() {
		// Inject
		const orders = inject("orders");

		return {
			orders,
		};
	},
});
</script>

<style lang="scss" scoped></style>
