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
                
                <details>
		            <summary role="button" tabindex="0">
			        <a class="dropdown" tabindex="-1">
				    <svg width="40" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				    	<rect width="44" height="4" fill=""></rect>
				    	<rect y="14" width="44" height="4" fill=""></rect>
				    	<rect y="28" width="44" height="4" fill=""></rect>
				    </svg>
				    menu
			        </a>
		            </summary>
		            <ul>
		            	<li>
                            <a href="" tabindex="0">Berichten</a>
		            	</li>
		            	<li>
                            <a href="" tabindex="0">Activiteiten</a>
		            	</li>
		            	<li>
                            <a href="" tabindex="0">Over Strandeiland</a>
		            	</li>
		            	<li>
                            <a href="" tabindex="0">Planning</a>
		            	</li>
		            	<li>
                            <a href="" tabindex="0">Participatieteam</a>
		            	</li>
                        <li>
                            <a href="" tabindex="0">Personen</a>
		            	</li>
		            	<li>
                            <a href="" tabindex="0">Organisatie</a>
		            	</li>   
                    
		            </ul>
	            </details>
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
        border-bottom: var(--unit-pico) solid var(--color-accent-100);
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
        display: flex;
        justify-content: space-between;
    }

    /* Dropdown menu */
    header details ul {
        display: flex;
        gap: var(--u-small);
    }

    header details {
        content: '';
        width: 12em;
        position: absolute;
        top: 4rem;
        right: var(--unit-default);
        margin: auto 0;
        transition: var(--animation-quick);
        cursor: pointer;
        display: block;
    }

    header details .dropdown {
        color: var(--color-primary);
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: var(--unit-small);
    }

    header details svg {
        fill: var(--color-primary-50);    
    }

    header details summary a svg {
        fill: var(--color-primary-50);   
    }

    header details[open] summary a {
        color: var(--color-branding-primary);   
    }

    header details[open] ul svg {
        fill: var(--c-accent-150);
    }

    header details:hover svg {
        fill: var(--color-primary);   
    }

    header details[open] svg,
    .dropdown {
        fill: var(--color-branding-primary);   
    }

    header details summary {
        display: flex;
        flex-direction: column;
    }

    header details ul {
        border: var(--unit-pico) solid var(--color-accent-100);
        border-radius: var(--unit-small);
        background-color: var(--color-secundary-pure);
        padding: var(--unit-default);
        margin: 2.75em 0;
        display: flex;
        flex-direction: column;
    }

    header details ul a {
        color: var(--color-primary-50);
    }

    header details a:is(:hover, :focus) {
        color: var(--color-branding-primary);
    }

    header details a:is(:hover, :focus) svg {
        fill: var(--color-branding-primary);
    }

    img {
        width: 84px;
        aspect-ratio: 1/1;
    }

    main {
        padding: 0;
    }

    @media (min-width: 27.5rem){
        header nav:first-child ul {
            padding: 0;
        }

        header details {
            display: block;
        }
    }
</style>