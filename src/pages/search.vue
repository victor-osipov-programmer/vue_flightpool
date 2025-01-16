<template>
    <header class="header">
        <div class="container header__container">
            <a href="/" class="logo">
                Flight<span class="logo__pool">Pool</span>
            </a>
            <nav class="nav header__nav">
                <a class="nav__link" href="/">Акции</a>
                <a class="nav__link" href="/search">Поиск</a>
                <a class="nav__link" href="/booking"
                    >Регистрация на рейс</a
                >
                <a class="nav__link" href="/profile">Личный кабинет</a>
            </nav>
        </div>
    </header>

    <section class="results">
        <div class="container">
            <div class="trips">
                <Trip class="trip-to" v-for="flight in flights_to" :flight>
                    <template #actions>
                        <div class="trip__end trip__action">
                            <button class="link trip__btn">Выбрать Туда</button>
                        </div>
                    </template>
                </Trip>
                <Trip class="trip-back" v-for="flight in flights_back" :flight>
                    <template #actions>
                        <div class="trip__end trip__action">
                            <button class="link trip__btn">Выбрать Обратно</button>
                        </div>
                    </template>
                </Trip>
            </div>

            <div class="flex f-end">
                <a class="btn results__booking" href="booking"
                    >Бронировать</a
                >
            </div>
        </div>
    </section>

    <div class="space"></div>
    <footer class="footer">
        <div class="footer__container container">
            <p class="footer__phone">8 (800) 100-10-10</p>
            <nav class="nav footer__nav">
                <a class="nav__link" href="http://xxxxxx-m1.wsr.ru">Home</a>
                <a class="nav__link" href="http://xxxxxx-m1.wsr.ru/login"
                    >Login</a
                >
                <a class="nav__link" href="http://xxxxxx-m1.wsr.ru/signup"
                    >Sign up</a
                >
                <a class="nav__link" href="http://xxxxxx-m1.wsr.ru/contact"
                    >Contact</a
                >
                <a class="nav__link" href="http://xxxxxx-m1.wsr.ru/news"
                    >News</a
                >
                <a class="nav__link" href="http://xxxxxx-m1.wsr.ru/return"
                    >Return</a
                >
                <a class="nav__link" href="http://xxxxxx-m1.wsr.ru/feedback"
                    >Feedback</a
                >
            </nav>
        </div>
    </footer>
</template>

<script setup lang="ts">
import Trip from '@/components/trip.vue';
import { flights_back, flights_to, getFlights } from '@/models/flight';
import { useRoute } from 'vue-router';

const route = useRoute()

getFlights(route.query)
</script>

<style scoped>
.trip-to {

}
</style>