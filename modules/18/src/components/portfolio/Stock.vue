<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input
						type="number"
						class="form-control"
						placeholder="Quantity"
						v-model.number="quantity"
						:class="{danger: insufficientQuantity}"
					/>
				</div>
				<div class="pull-right">
					<button
						class="btn btn-info"
						@click="sellStock"
						:disabled="quantity <= 0 || !Number.isInteger(quantity) || insufficientQuantity"
					>
						{{ insufficientQuantity ? 'Not enough' : 'Sell'}}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
	data() {
		return {
			quantity: 0,
		};
	},
	props: {
		stock: {
			type: Object,
		},
	},
	computed: {
		insufficientQuantity() {
			return this.quantity > this.stock.quantity; 
		}
	},
	methods: {
        ...mapActions({
            placeSellOrder: 'sellStock',
        }),
		sellStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity,
            };
            this.placeSellOrder(order);
            this.quantity = 0;
		},
	},
};
</script>

<style scoped>
.danger {
	border: 1px solid red;
}
</style>

