<template>
    <div>
        <header>
            <nav class="top-nav">
                <ul>
                    <li>
                        <NuxtLink to="/">
                            Iets plaatsen 
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            Inloggen of registreren
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <nav>
                <img src="https://hallostrandeiland.nl/blobs/gebiedsplatform/w250h250/98691/2022/50/hseTekengebied_8.png" alt="Logo van Hallostrandeiland" />
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
        height: auto;
    }

    /* Instellingen voor eerste nav */
    header nav:first-child {
        background-color: var(--color-primary-50);
        padding: var(--unit-small) var(--unit-small) var(--unit-default) var(--unit-small);
        overflow: auto;
        padding: var(--unit-small) var(--unit-default) ;
    }

    header nav:first-child ul {
        width: max-content;
        display: flex;
        flex-direction: row;
        gap: var(--unit-default);
        margin-left: auto;
        padding: 0 var(--unit-default);
    }

    header nav:first-child a {
        color: var(--color-secundary-pure);
        transition: var(--animation-quick);
        padding: var(--unit-micro) var(--unit-small);
        border-radius: var(--unit-micro);
    }

    header nav:first-child a:is(:hover, :focus, :active) {
        background-color: var(--color-secundary-pure);
        color: var(--color-primary-50);
    }

    /* Instellingen voor tweede nav */
    header nav:last-child {
        width: 100%;
        background-color: var(--color-secundary-pure);
        position: sticky;
    }

    img {
        width: 84px;
        aspect-ratio: 1/1;
    }

    @media (min-width: 27.5rem){
        header nav:first-child ul {
            padding: 0;
        }
    }
</style>