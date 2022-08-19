<script>
    import {
        Link,
        Tile,
    } from "carbon-components-svelte";
    import { Launch } from "carbon-icons-svelte";
    import applications from "$lib/applications.json";
</script>


<Tile light>
    <h1>
        Applications
    </h1>
    <p>
        A growing list of ways the TGW datasets are being used in research and industry!
    </p>
    <div class="applications">
        {#each applications as application, i}
            <Tile class="fit-tile" style="width: 42rem;">
                <div class="application">
                    <div>
                        <img class="application-img" src="{application.thumbnail}" alt=""/>
                    </div>
                    <div>
                        <h4 id="application-{i}">
                            {application.name}
                        </h4>
                        <p>
                            {application.description}
                        </p>
                        <Link icon={Launch} href="{application.file}">
                            Download {application.fileType}
                        </Link>
                    </div>
                </div>
            </Tile>
        {/each}
    </div>
</Tile>

<style>
    p {
        margin: 1rem 0;
    }
    .application {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .application-img {
        max-width: 280px;
        max-height: 200px;
        object-fit: contain;
        margin-right: 1rem;
    }
    
</style>
