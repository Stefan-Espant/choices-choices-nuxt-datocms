<template>
        <section class="hero">
            <h1>
                Welkom thuis op strandeiland
            </h1>
        </section>

    <p v-if="error">Something bad happened!</p>
    <p v-else>Data: <code>{{ data }}</code></p>
</template>

<script setup>
import '~/assets/css/main.css'

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
    if(errors) throw new errors;
    
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
    }
</style>