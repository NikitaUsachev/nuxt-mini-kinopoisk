<template>
	<div class="film-card">
		<img :src="film.posterUrlPreview" :alt="film.nameRu">
		<h3>{{ film.nameRu }}</h3>
		<p>Год: {{ film.year }}</p>
		<p>Рейтинг: {{ film.rating }}</p>
	</div>
</template>

<script setup>
defineProps({
	film: Object,
})

</script>

<style scoped>
.film-card {
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	padding: 10px;
	text-align: center;
	transition: transform 0.2s ease;
}

.film-card:hover {
	transform: translateY(-5px);
}

.film-card img {
	width: 100%;
	height: auto;
	border-radius: 8px;
	margin-bottom: 10px;
	object-fit: cover;
}

.film-card h3 {
	font-size: 1.1rem;
	font-weight: bold;
	margin: 5px 0;
}

.film-card p {
	font-size: 0.9rem;
	margin: 2px 0;
	color: #333;
}
</style>