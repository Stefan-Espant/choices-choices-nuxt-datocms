<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Hallo strandeiland</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Index</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/wensen">Wensen</NuxtLink></li>
                </ul>
            </nav>
        </header>
    
        <!-- Output page content -->
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: goldenrod;
}
</style>