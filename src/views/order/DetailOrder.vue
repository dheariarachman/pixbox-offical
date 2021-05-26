<template>
	<ion-page>
		<!-- Back button with a default href -->
		<ion-header class="ion-no-border">
			<ion-toolbar color="primary">
				<ion-buttons>
					<slot name="start">
						<ion-back-button default-href="/"></ion-back-button>
					</slot>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<div class="pb-backdrop-color">
				<div class="detail-title">
					<ion-icon :icon="locationOutline"></ion-icon>
					<p>Tracking</p>
				</div>

				<div class="detail-order-transaction">
					<div class="dot-header">
						<div class="dot-header-start">
							<ion-icon :icon="qrCodeOutline"></ion-icon>
							<p>{{ route.params.order_id }}</p>
						</div>

						<div class="dot-header-end">
							{{ order?.status }}
						</div>
					</div>
					<div class="dot-order-date">
						{{ filteredDate }}
					</div>
					<div class="dot-date-location">
						<div class="dot-person">
							<ion-icon :icon="paperPlane"></ion-icon>
							<div>
								<p>{{ order?.pickup_name }}</p>
								<span>{{ order?.pickup_address }}</span>
							</div>
						</div>
						<div class="divider"></div>
						<div class="dot-person">
							<ion-icon :icon="locationSharp"></ion-icon>
							<div>
								<p>{{ order?.deliver_name }}</p>
								<span>{{ order?.deliver_address }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="detail-order-status" v-if="order?.orderStatus.length">
				<pb-item-detail
					:isActive="false"
					v-for="(item, index) in order?.orderStatus"
					:key="index"
				></pb-item-detail>
			</div>
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { Orders } from "../../api/orders";
import { useRoute, useRouter } from "vue-router";
import { OrderType } from "@/models/order/order.interface";
import moment from "moment";

import PbItemDetail from "../../components/PbItemDetail.vue";

import {
	qrCodeOutline,
	locationOutline,
	homeOutline,
	locationSharp,
	paperPlane,
} from "ionicons/icons";
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
	IonContent,
	alertController,
	IonIcon,
	loadingController,
} from "@ionic/vue";
export default defineComponent({
	name: "DetailOrder",
	components: {
		IonPage,
		IonHeader,
		IonToolbar,
		IonButtons,
		IonBackButton,
		IonContent,
		IonIcon,
		PbItemDetail,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();
		const order = ref<OrderType>();

		const presentAlert = async (message: string) => {
			const alert = await alertController.create({
				cssClass: "pb-alert-controller",
				header: "Information",
				message: message,
				buttons: ["OK"],
			});

			await alert.present();
			await alert.onDidDismiss().then(() => {
				console.log("onDidDismiss resolved with role");
			});
		};

		onMounted(async () => {
			const loading = await loadingController.create({
				cssClass: "my-custom-class",
				message: "Please wait...",
			});
			await loading.present();

			Orders.getOrderById(route.params.order_id.toString())
				.then((response) => {
					if (response.data) {
						order.value = response.data;
					} else {
						presentAlert(response.message).then(() => {
							router.go(-1);
						});
					}
				})
				.catch((error) => {
					console.error(error);
				})
				.finally(() => {
					loading.dismiss();
				});
		});

		const filteredDate = computed(() => {
			const orderDate = order.value?.order_date || new Date();
			const _date = new Date(orderDate);
			return moment(_date).format("LLL");
		});

		return {
			order,
			filteredDate,

			qrCodeOutline,
			locationOutline,
			homeOutline,
			locationSharp,
			paperPlane,

			route,
		};
	},
});
</script>

<style lang="scss" scoped>
ion-content {
	.pb-backdrop-color {
		position: relative;
		background: var(--ion-color-primary);
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;

		padding: 16px;

		.detail-title {
			color: var(--ion-color-light);
			display: flex;
			align-items: center;

			font-size: 26px;
			font-weight: bold;

			p {
				margin: 0 0.5rem;
			}
		}

		.detail-order-transaction {
			background: var(--ion-color-light);
			padding: 16px 16px;
			margin-top: 16px;

			border-radius: 8px;
			.dot-header {
				color: var(--ion-color-dark);
				display: flex;
				justify-content: space-between;
				align-items: center;

				ion-icon {
					margin-right: 8px;
					font-size: 22px;
				}

				p {
					font-weight: bold;
					margin: 0;
				}

				.dot-header-start {
					display: flex;
					align-items: center;
				}

				.dot-header-end {
					display: flex;
					align-items: center;

					background: var(--ion-color-light-shade);
					color: var(--ion-color-dark);
					padding: 2px 8px;
					border-radius: 16px;
					font-weight: bold;
				}
			}

			.dot-order-date {
				color: var(--ion-color-medium);
				font-size: 14px;
				line-height: 1.5rem;
			}

			.dot-date-location {
				margin-top: 16px;
				.divider {
					height: 1px;
					background: var(--ion-color-dark);
					margin: 5px 0px;
				}
				.dot-person {
					display: flex;
					align-items: flex-start;
					ion-icon {
						margin-right: 10px;
						font-size: 24px;
					}
					p {
						margin: 0;
						font-weight: bold;
					}

					span {
						color: var(--ion-color-medium);
					}
				}
			}
		}
	}

	.detail-order-status {
		padding: 16px;
	}
}
</style>
