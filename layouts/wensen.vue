<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/wensen">Hallo strandeiland</NuxtLink>
            </nav>
        </header>
    
        <!-- Output page content -->
        <div>
            <slot />
        </div>
    </div>
    <footer>
        <ul>
            <li><NuxtLink to="/">Index</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/wensen">Wensen</NuxtLink></li>
        </ul>
    </footer>
</template>

<style scoped>
.router-link-exact-active {
    color: goldenrod;
}
</style>