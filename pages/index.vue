<template>
    <section class="hero">
        <picture>
        <source
            media="(max-width: 1400px)"
            srcset="./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_200.png 200w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_356.png 356w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_468.png 468w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_569.png 569w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_655.png 655w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_727.png 727w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_791.png 791w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_855.png 855w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_916.png 916w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_976.png 976w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1023.png 1023w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1079.png 1079w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1124.png 1124w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1173.png 1173w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1222.png 1222w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1267.png 1267w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1313.png 1313w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1356.png 1356w,
                    ./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1378.png 1378w"
        >
        <img
            src="./assets/Schermafbeelding_2023-10-23_om_21.42.21_vdwia0_c_scale,w_1400.png"
            alt="Responsive Image"
        >
    </picture>
        <img src="https://hallostrandeiland.nl/networks/hallostrandeiland/img/hse_hero-bg.avif" alt="Hallo strandeiland" />
        <div>
            <article>
                <h1>
                    Welkom thuis op strandeiland
                </h1>
            </article>
            <article>
                <p>
                    Het land van Strandeiland ligt klaar! Het land moet nu zakken, tot rust komen en vervolgens kan er
                    gebouwd gaan worden. Op deze website kan je het laatste nieuws over Strandeiland volgen en deelnemen aan
                    het gesprek over hoe we van dit eiland een prachtige plek kunnen maken om te wonen, werken en
                    ontspannen.
                </p>
                <NuxtLink to="/wensen">Ga naar wensen</NuxtLink>
                <a href="/wensen">Ga naar wensen via a element</a>
            </article>
        </div>
    </section>

</template>

<script setup>

const QUERY = `
{
  allWishes {
    id
    slug
    image {
      id
      url
    }
    title
    datetime
    label
    description
    costIndication
    person {
      id
      fullname
    }
  }
  allPeople {
    id
    image {
      url
    }
    fullname
    myWishes {
      id
    }
  }
  _allWishesMeta {
    count
  }
  _allPeopleMeta {
    count
  }
  _allReactionsMeta {
    count
  }
}
`;
const runtimeConfig = useRuntimeConfig();
const { data, error } = await useFetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${runtimeConfig.public.datoCmsToken}`,
    },
    body: {
        query: QUERY,
    },
    transform: ({ data, errors }) => {
        if (errors) throw new errors;

        return data;
    },
});

definePageMeta({
    layout: 'default'
})


</script>

<style scoped>
.hero {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
}

.hero img {
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    /* scale: 0.66; */
    z-index: -1;
    position: absolute;
    /* border-radius: var(--unit-large); */
}

.hero div {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero div article {
    width: fit-content;
    padding: var(--unit-default);
    margin: 0 auto;
}

.hero div article:last-child {
    height: fit-content;
    background-color: var(--color-branding-secundary);
    padding: var(--unit-default);
}

.hero div article:last-child a {
    position: relative;
    color: var(--color-primary);
    transition: var(--animation-quick) ease-in-out;
    padding: var(--unit-small);
    border-bottom: 1px solid var(--color-branding-secundary);
}

.hero div article:last-child a::after {
    width: var(--unit-large);
    content: ' >';
    position: absolute;
    right: -2rem;
    top: var(--unit-small);
}

.hero div article:last-child a:is(:hover, :focus) {
    border-bottom: 1px solid var(--color-primary);
}

.hero div article:last-child a:is(:hover, :focus)::after {
    right: -2.5rem;
}

.hero div article:first-child h1 {
    width: fit-content;
    font-size: var(--unit-large);
    color: var(--color-secundary-pure);
    background-color: rgba(0, 0, 0, 0.66);
    padding: var(--unit-default);
}

@media (min-width: 30rem) {
    .hero div article:first-child h1 {
        width: 28rem;
        font-size: var(--unit-heading);
    }
}

@media (min-width: 67.5rem) {
    .hero div {
        width: 80%;
        display: flex;
        flex-direction: row;
        gap: var(--unit-heading);
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .hero div article:first-child h1 {
        width: 28rem;
        font-size: var(--unit-heading);
    }
}
</style>