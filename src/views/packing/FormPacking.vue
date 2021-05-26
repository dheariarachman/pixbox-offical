<template>
	<ion-page>
		<ion-header class="ion-no-border">
			<ion-toolbar color="white">
				<ion-buttons slot="start">
					<ion-back-button default-href="/"></ion-back-button>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<div class="container">
				<p>
					<img src="@/assets/logo/pixbox-logo.svg" alt="" />
				</p>
				<span>Packing Barang, Segera Datang</span>
				<p>
					<a href="/order">Kirim Barang Aja Dulu</a>
				</p>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
/* eslint-disable */
import {
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonPage,
	IonContent,
	IonItem,
} from "@ionic/vue";
import { defineComponent } from "vue";
import {
	informationCircle,
	personAdd,
	call,
	home,
	reader,
	wallet,
	cube,
} from "ionicons/icons";
export default defineComponent({
	name: "Home",
	components: {
		IonHeader,
		IonToolbar,
		IonButtons,
		IonBackButton,
		IonPage,
		IonContent,
		IonItem,
	},
	setup() {
		// Data

		// Methods

		// Computed

		// hooks
		return {
			informationCircle,
			personAdd,
			call,
			home,
			reader,
			wallet,
			cube,
		};
	},
});
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100%;
}
</style>
