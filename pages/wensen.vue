<template>
    <section>
      <h1>Wensen</h1>
      <ul>
        <li v-for="wish in data.allWishes" :key="wish.id">
          <img :src="wish.image.url" :alt="`Afbeelding van ${wish.title}`" />
          <h2>{{wish.title}}</h2>
          <NuxtLink :to="`/wensen/${wish.id}`">{{ wish.title }}</NuxtLink>
        </li>
        </ul>
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
    ul {
        width: clamp(16rem, 100%, 20rem);
        padding: var(--unit-default) 0;
        display: grid;
        grid-template-columns: 1fr;
        flex-direction: row;
        gap: var(--unit-default);
        margin: auto;
    }

    li {
        width: clamp(16rem, 100%, 20rem);
        background-color: var(--color-secundary);
        border: var(--unit-pico) solid var(--color-accent-100);
        border-radius: var(--unit-small);
        padding: var(--unit-default);
        display: grid;
        grid-template-rows: 1fr 5rem auto;
    }

    li img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: var(--unit-micro);
        margin-bottom: var(--unit-default);
        background-color: var(--color-accent-100);
    }

    li h2 {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        display: -webkit-box;
    }

    li a {
        width: fit-content;
        display: flex;
        color: var(--color-branding-primary);
        padding: var(--unit-small) var(--unit-default);
        transition: var(--animation-quick);
    }

    li a:is(:hover, :focus){
        color: var(--color-primary-50);
        background-color: var(--color-branding-secundary);
    }

    @media (min-width: 43rem) {
        ul {
            width: 41rem;
            grid-template-columns: 1fr 1fr;
            margin: auto;
        }
    }

    @media (min-width: 62rem) {
        ul {
            width: 60rem;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>