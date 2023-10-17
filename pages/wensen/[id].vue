<template>
    <div>
        <p> wens {{ id }}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quam!</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
</script>

<style scoped>

</style>