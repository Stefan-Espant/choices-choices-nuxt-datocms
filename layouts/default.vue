<template>
    <div>
        <header>
            <img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png" alt="Logo van Hallostrandeiland" />
            <nav>

            </nav>
        </header>
        <!-- Pagina content -->
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup>

</script>

<style scoped>
    header {
        width: 100vw;
        height: 100px;
    }

    img {
        width: 100px;
        aspect-ratio: 1/1;
    }
</style>