<template>
	<div class="movies-page">
		<h1>🎬 Популярные фильмы</h1>

		<div class="movies-grid">
			<MovieCard
				v-for="film in films"
				:key="film.kinopoiskId"
				:film="film"
			/>
		</div>
	</div>
</template>

<script setup>
import MovieCard from '~/components/MovieCard.vue'
import { ref, onMounted } from "vue";

const films = ref([]);
const config = useRuntimeConfig()

const loadMovies = async () => {
	try {
		const response = await $fetch(config.public.apiBase + 'films/top', {
			headers: {
				'X-API-KEY': config.public.apiKey,
				'Content-Type': 'application/json',
			},
			params: {
				type: 'TOP_100_POPULAR_FILMS',
				page: 1,
			}
		})
		films.value = response.films ?? response.items ?? []
	} catch (error) {
		console.error('Ошибка при загрузке фильмов: ',error)
	}
}

onMounted(() => {
	loadMovies()
})

</script>

<style scoped>
.movies-page {
	max-width: 1200px;
	margin: auto;
	padding: 20px;
}

.movies-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	gap: 20px;
}

.movie {
	background: #f9f9f9;
	border-radius: 8px;
	padding: 10px;
	text-align: center;
}

</style>