<template>
    <App_header />

    <section class="calculator">
        <div class="container calculator__container">
            <div class="calculator__inputs">
                <input
                    placeholder="Условная дата"
                    class="input"
                    type="date"
                />
                <input
                    placeholder="Бронирований"
                    class="input"
                    type="number"
                />
            </div>

            <div class="calculator__result">
                <p class="calculator__cost">1000 руб.</p>
                <p class="calculator__ver">50%</p>
            </div>
        </div>
    </section>

    <section class="about">
        <div class="about__container container">
            <h4 class="about__header">
                Мы сближаем города, вы - живете там, где хотите.
            </h4>

            <p class="about__title">Основные принципы работы сервиса:</p>
            <ul class="about__list">
                <li class="about__item">Выбрать удобную дату перелета.</li>
                <li class="about__item">
                    Накопить больше 50% бронирований на рейс.
                </li>
                <li class="about__item">Получить снижение стоимости.</li>
            </ul>
        </div>
    </section>

    <Search_section></Search_section>

    <section class="akcii">
        <div class="container">
            <div class="akcii__list">
                <div class="akcii__item">
                    <img
                        class="akcii__img"
                        src="media/images/promotions/promotion1.jpg"
                        alt=""
                    />

                    <div class="akcii__content">
                        <p class="akcii__name">
                            Returning and Changing Your Tickets
                        </p>
                        <p class="akcii__desc">
                            The pandemic has changed many travelers’ plans,
                            but we know that it will not last forever. Once
                            all of this is over, we will continue exploring
                            this world the way we used to. Special rules
                            that have been developed for this challenging
                            situation will help you cancel your trip or
                            postpone it until later.
                        </p>
                        <a class="akcii__link" href="#">Подробнее...</a>
                    </div>
                </div>
                <div class="akcii__item">
                    <img
                        class="akcii__img"
                        src="media/images/promotions/promotion2.jpg"
                        alt=""
                    />

                    <div class="akcii__content">
                        <p class="akcii__name">Best offers</p>
                        <p class="akcii__desc">
                            To see again the streets that witnessed so much.
                            To hug your beloved ones and look back to see
                            what you’ve come through. And to think of new
                            dreams that will be so special!
                        </p>
                        <a class="akcii__link" href="#">Подробнее...</a>
                    </div>
                </div>
                <div class="akcii__item">
                    <img
                        class="akcii__img"
                        src="media/images/promotions/promotion3.jpg"
                        alt=""
                    />

                    <div class="akcii__content">
                        <p class="akcii__name">See you more often</p>
                        <p class="akcii__desc">
                            Since the beginning of January, we have been
                            expanding the geography of flights in Russia so
                            that you can see your loved ones more often.
                            Choose our company to fly to where you are
                            always expected.
                        </p>
                        <a class="akcii__link" href="#">Подробнее...</a>
                    </div>
                </div>
                <div class="akcii__item">
                    <img
                        class="akcii__img"
                        src="media/images/promotions/promotion4.jpg"
                        alt=""
                    />

                    <div class="akcii__content">
                        <p class="akcii__name">Everything is on again</p>
                        <p class="akcii__desc">
                            From August 10, we will resume flights to
                            Turkey. Flights from Moscow to Antalya will be
                            operated twice a day daily, and flights on the
                            Moscow-Dalaman route will be operated three to
                            seven times a week.
                        </p>
                        <a class="akcii__link" href="#">Подробнее...</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="subscribe">
        <div class="container">
            <form class="form subscribe-form" action="#">
                <input
                    placeholder="Email"
                    class="input subscribe-form__email"
                    type="text"
                />
                <button class="input btn" type="submit">Подписаться</button>
            </form>
        </div>
    </section>

    <App_footer />
</template>

<script setup lang="ts">
import App_footer from '@/components/app_footer.vue';
import App_header from '@/components/app_header.vue';
import Search_section from '@/components/search_section.vue';
</script>

<style scoped>

</style>