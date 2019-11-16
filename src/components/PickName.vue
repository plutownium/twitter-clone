<template>
	<div>
		<v-input v-model="name">
			Name:
		</v-input>
		<v-input v-model="handle">
			Handle:
		</v-input>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			handle: ""
		};
	}
};
</script>
