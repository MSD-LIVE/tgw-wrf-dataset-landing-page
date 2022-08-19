<script>
    import "carbon-components-svelte/css/all.css";
	import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { browser } from "$app/env"
    import {
        Content,
        Header,
        HeaderAction,
        HeaderGlobalAction,
        HeaderNav,
        HeaderNavItem,
        HeaderPanelLinks,
        HeaderPanelLink,
        HeaderUtilities,
        SkipToContent,
        Tile,
    } from "carbon-components-svelte";
    import {
        Light,
        LightFilled
    } from "carbon-icons-svelte";
    
    /**
     * @type {string}
     */
    let theme;
    const STORAGE_KEY = "dataweb-color-scheme";
    if (browser) {
        theme = localStorage.getItem(STORAGE_KEY) || "white";
    }
    $: {
        if (browser) {
            document.documentElement.setAttribute("theme", theme);
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }

    let isSideNavOpen = false;
    let isOpen = false;

    onMount(() => {
		document.title = 'TGW WRF Dataset';
    });

</script>

<svelte:head>
	<script>
		if (document) {
            const STORAGE_KEY = "dataweb-color-scheme";
            let mode = localStorage.getItem(STORAGE_KEY);
            if (!mode) {
                mode = window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "g100"
                    : "white";
            }
            document.documentElement.setAttribute("theme", mode);
            localStorage.setItem(STORAGE_KEY, mode);
		}
	</script>
</svelte:head>

<Header company="" platformName="TGW WRF Simulations" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
        <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
        <HeaderNavItem href="/" text="Home" isSelected={$page.url.pathname == "/"} />
        <HeaderNavItem href="/methods" text="Methods" isSelected={$page.url.pathname == "/methods"}/>
        <HeaderNavItem href="/applications" text="Applications" isSelected={$page.url.pathname == "/applications"}/>
        <HeaderNavItem href="/publications" text="Publications" isSelected={$page.url.pathname == "/publications"}/>
        <HeaderNavItem href="/variables" text="Variables" isSelected={$page.url.pathname == "/variables"}/>
        <HeaderNavItem href="/downloads" text="Downloads" isSelected={$page.url.pathname == "/downloads"}/>
    </HeaderNav>
    <HeaderUtilities>
        <HeaderGlobalAction aria-label="Theme" icon={theme == "g100" ? LightFilled : Light} on:click={() => theme = theme == "g100" ? "white" : "g100"} />
            <HeaderAction bind:isOpen={isOpen}>
                <HeaderPanelLinks>
                    <HeaderPanelLink href="/">
                        Home
                    </HeaderPanelLink>
                    <HeaderPanelLink href="/methods">
                        Methods
                    </HeaderPanelLink>
                    <HeaderPanelLink href="/applications">
                        Methods
                    </HeaderPanelLink>
                    <HeaderPanelLink href="/publications">
                        Publications
                    </HeaderPanelLink>
                    <HeaderPanelLink href="/variables">
                        Variables
                    </HeaderPanelLink>
                    <HeaderPanelLink href="/downloads">
                        Downloads
                    </HeaderPanelLink>
                </HeaderPanelLinks>
            </HeaderAction>
    </HeaderUtilities>
</Header>

<Content>
    <slot />
</Content>

<style>
    :global(.bx--tile--light) {
        background-color: unset;
    }
    :global(.fit-tile) {
        margin: 2rem 1rem;
        width: 19rem;
    }
    :global(h4) {
        margin-bottom: 0.25rem;
    }
    :global(.bx--grid) {
        padding: 0;
        border: 0.5px solid;
    }
    :global(.bx--row) {
        margin: 0;
        border-top: 0.5px solid;
        border-bottom: 0.5px solid;
    }
    :global(.bx--row:first-of-type) {
        font-weight: bold;
    }
    :global(.bx--col) {
        border-left: 0.5px solid;
        border-right: 0.5px solid;
    }
    :global(.bx--structured-list) {
        margin-bottom: 1rem;
    }
    :global(.ol) {
        margin-left: 2rem;
    }
    :global(.li) {
        margin: 0.5rem 0;
    }
    :global(.ul-li:before) {
        display: none;
    }
    :global(.object) {
        margin: 2rem;
        text-align: center;
    }
    :global(.bold) {
        font-weight: bold;
    }
</style>
