<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<div id="banner">
				<div class="pb-logo-illustrations ion-text-center">
					<img src="@/assets/logo/tracking-logo.svg" alt="" />
				</div>
				<div class="pb-caption ion-text-center">
					Lacak Paket Anda
				</div>
				<div class="pb-search-package">
					<ion-item class="ion-no-padding" lines="none">
						<ion-icon slot="start" name="search-outline"></ion-icon>
						<ion-input
							placeholder="Kode Resi"
							enterkeyhint="go"
							inputmode="text"
							v-model="orderCode"
							@keyup.enter="submitValue"
						></ion-input>
					</ion-item>
				</div>
			</div>
			<div id="container">
				<div class="pb-content-box">
					<ion-grid fixed>
						<ion-row>
							<ion-col>
								<ion-card>
									<ion-item
										router-link="/order"
										lines="none"
										class="ion-text-center"
									>
										<ion-label>
											Kirim<br />Paket
										</ion-label>
									</ion-item>
								</ion-card>
							</ion-col>
							<ion-col>
								<ion-card>
									<ion-item
										@click="() => router.push('/packing')"
										lines="none"
										class="ion-text-center"
									>
										<ion-label>
											Packing<br />Barang
										</ion-label>
									</ion-item>
								</ion-card>
							</ion-col>
						</ion-row>
					</ion-grid>
				</div>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import {
	IonContent,
	IonInput,
	IonItem,
	IonIcon,
	IonGrid,
	IonRow,
	IonCol,
	IonCard,
	IonLabel,
	IonPage,
	alertController,
} from "@ionic/vue";
import { defineComponent, ref, inject } from "vue";
import { useRouter } from "vue-router";
import { Orders } from "../api/orders";
export default defineComponent({
	name: "Home",
	components: {
		IonContent,
		IonInput,
		IonItem,
		IonIcon,
		IonGrid,
		IonRow,
		IonCol,
		IonCard,
		IonLabel,
		IonPage,
	},
	setup() {
		// Inject
		const orders = inject("orders");

		// Data
		const router = useRouter();
		const orderCode = ref("");

		const presentAlert = async (message: string) => {
			const alert = await alertController.create({
				cssClass: "pb-alert-controller",
				header: "Information",
				message: message,
				buttons: ["OK"],
			});

			await alert.present();
			await alert.onDidDismiss().then(() => {
				orderCode.value = "";
				console.log("onDidDismiss resolved with role");
			});
		};

		const submitValue = () => {
			Orders.getOrderById(orderCode.value)
				.then((response) => {
					if (response.data) {
						console.log(response.data);
						// orders.methods.updateDetail(response.data);

						router
							.push(`/order/${response.data.order_code}`)
							.then(() => {
								orderCode.value = "";
							});
					} else {
						console.log(response);
						presentAlert(response.message);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		};

		return {
			router,
			orderCode,
			submitValue,
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
	height: 24rem;
	background: var(--ion-color-primary);
	--background: var(--ion-color-primary);
	position: relative;
	padding: 1.8rem 32px;

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
	height: calc(100% - 24rem);
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
