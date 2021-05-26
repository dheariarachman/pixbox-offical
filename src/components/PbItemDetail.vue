<template>
	<div class="pb-box">
		<div class="pb-icon">
			<div class="pb-line"></div>
			<div
				class="pb-icon-circle"
				:class="[isActiveProps ? 'active' : 'inactive']"
			></div>
		</div>
		<div class="pb-description">
			Officia eu consectetur commodo incididunt in elit laborum minim eu
			nisi incididunt.
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "PbItemDetail",
	components: {},
	props: {
		isActive: {
			type: Boolean,
		},
	},
	setup(props) {
		const isActiveProps = ref(props.isActive);
		return {
			isActiveProps,
		};
	},
});
</script>

<style lang="scss" scoped>
.pb-box {
	display: flex;
	align-items: flex-start;
	height: 100px;

	.pb-icon {
		flex: 1;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;

		.pb-line {
			position: relative;
			height: 100%;
			width: 2px;
			background: var(--ion-color-light-shade);
		}

		.pb-icon-circle {
			position: absolute;
			top: 0;
			width: 42px;
			height: 42px;
			border-radius: 100px;

			&.active {
				background: var(--ion-color-secondary-tint);
			}

			&.inactive {
				background: var(--ion-color-light-shade);
			}
		}
	}

	.pb-description {
		flex: 6;
		padding: 0 16px;
	}
}
</style>
