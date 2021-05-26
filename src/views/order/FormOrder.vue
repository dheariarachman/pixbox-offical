<template>
	<ion-page>
		<!-- Back button with a default href -->
		<ion-header>
			<ion-toolbar color="primary">
				<ion-buttons slot="start">
					<ion-back-button default-href="/"></ion-back-button>
				</ion-buttons>
				<ion-title>Kirim Paket</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<!-- Pengiriman -->
			<ion-item lines="none">
				<ion-text color="dark">
					<h2 class=""><strong>Pengirim</strong></h2>
				</ion-text>
			</ion-item>
			<ion-item>
				<ion-input placeholder="Nama Pengirim"></ion-input>
				<ion-icon
					:icon="personAdd"
					size="large"
					slot="start"
				></ion-icon>
			</ion-item>
			<ion-item>
				<ion-icon :icon="call" size="large" slot="start"></ion-icon>
				<ion-input placeholder="No. Handphone Pengirim"></ion-input>
			</ion-item>
			<ion-item>
				<ion-icon :icon="home" size="large" slot="start"></ion-icon>
				<ion-textarea
					rows="4"
					cols="20"
					placeholder="Alamat Pengirim"
				></ion-textarea>
			</ion-item>
			<ion-item>
				<ion-icon :icon="cube" size="large" slot="start"></ion-icon>
				<ion-label position="floating">Paket Pengiriman</ion-label>
				<ion-select interface="action-sheet">
					<ion-select-option value="BRL">
						Boltz Regular
					</ion-select-option>
					<ion-select-option value="BSD">
						Boltz Same Day
					</ion-select-option>
					<ion-select-option value="BIT">
						Boltz Instant
					</ion-select-option>
					<ion-select-option value="CRL">
						Cargo Regular
					</ion-select-option>
					<ion-select-option value="CSD">
						Cargo Same Day
					</ion-select-option>
				</ion-select>
			</ion-item>
			<!-- Penerima -->
			<ion-item lines="none">
				<ion-text color="dark">
					<h2 class=""><strong>Penerima</strong></h2>
				</ion-text>
			</ion-item>
			<ion-item>
				<ion-input placeholder="Nama Penerima"></ion-input>
				<ion-icon
					:icon="personAdd"
					size="large"
					slot="start"
				></ion-icon>
			</ion-item>
			<ion-item>
				<ion-icon :icon="call" size="large" slot="start"></ion-icon>
				<ion-input placeholder="No. Handphone Penerima"></ion-input>
			</ion-item>
			<ion-item>
				<ion-icon :icon="home" size="large" slot="start"></ion-icon>
				<ion-textarea
					rows="4"
					cols="20"
					placeholder="Alamat Penerima"
				></ion-textarea>
			</ion-item>
			<ion-item>
				<ion-icon :icon="wallet" size="large" slot="start"></ion-icon>
				<ion-label position="floating">Pembayaran</ion-label>
				<ion-select interface="action-sheet">
					<ion-select-option value="BRL">
						Pengirim
					</ion-select-option>
					<ion-select-option value="BSD">
						Penerima
					</ion-select-option>
					<ion-select-option value="BIT">
						Transfer
					</ion-select-option>
				</ion-select>
			</ion-item>
			<ion-item>
				<ion-icon :icon="reader" size="large" slot="start"></ion-icon>
				<ion-textarea
					rows="4"
					cols="20"
					placeholder="Catatan"
				></ion-textarea>
			</ion-item>

			<ion-button expand="full" fill="solid" size="large">
				Buat Pesanan
			</ion-button>
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
	IonText,
	IonTitle,
	IonSelect,
	IonInput,
	IonIcon,
	IonTextarea,
	IonLabel,
	IonSelectOption,
	IonButton,
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
		IonText,
		IonTitle,
		IonSelect,
		IonInput,
		IonIcon,
		IonTextarea,
		IonLabel,
		IonSelectOption,
		IonButton,
	},
	setup() {
		// Data

		// Methods
		function buttonSignUp() {
			console.log("This is button Signup");
		}

		// Computed

		// hooks
		return {
			buttonSignUp,
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
$white-color: #ffffff;

ion-header {
	ion-toolbar {
		--background: var(--ion-color-primary);
		ion-buttons {
			ion-button {
				--border-radius: 32px !important;
				ion-icon {
					font-size: 22px !important;
				}
			}
		}
	}
}

#banner {
	height: 26rem;
	background: var(--ion-color-primary);
	--background: var(--ion-color-primary);
	position: relative;
	padding: 1rem 32px;

	.pb-header {
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;

		.pb-auth-profile {
			ion-button {
				--box-shadow: none;

				ion-icon {
					font-size: 24px !important;
				}
			}
		}
	}

	.pb-caption {
		font-size: 32px;
		font-weight: 600;
		color: #ffffff;
		line-height: 2rem;
		margin: 0.7rem 0;
	}

	.pb-date-now {
		font-size: 14px;
		font-weight: bold;
		line-height: 1rem;
		color: var(--ion-color-dark);
	}

	.pb-search-package {
		position: absolute;
		bottom: -20px;
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0px 3px 12px 2px rgba(0, 0, 0, 0.16);
		width: calc(100% - 64px);

		ion-item {
			--inner-padding-end: 0 !important;
			border-radius: 10px;

			ion-input {
				--placeholder-color: var(--ion-color-medium-shade);
				--placeholder-opacity: 0.5;
				--color: var(--ion-color-dark) !important;
				color: var(--ion-color-dark);
			}

			ion-icon {
				--color: var(--ion-color-primary);
				color: var(--ion-color-primary);
				margin: 0 12px;
			}
		}
	}
}

#container {
	height: calc(100% - 26rem);
	position: relative;
	background-color: var(--ion-color-light);
	.pb-content-box {
		position: absolute;
		padding: 1.8rem 1.4rem;
		width: 100%;

		ion-card {
			padding: 10px 6px;
			margin: 0;

			font-size: 16px;
			font-weight: bold;
			--color: var(--ion-color-dark);
			height: 100%;
		}
	}
}
</style>
