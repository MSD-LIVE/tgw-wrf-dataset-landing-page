<script>
    import {
        Link,
        StructuredList,
        StructuredListRow,
        StructuredListCell,
        StructuredListBody,
        Tag,
        Tile,
    } from "carbon-components-svelte";
    import { Globe, Hourglass } from "carbon-icons-svelte";
    import datasets from "$lib/datasets.json";
</script>


<Tile light>
    <h1>
        Downloads
    </h1>
    <p>
        Data are currently available on Globus endpoints, but will soon be available with permanent DOIs.
    </p>
    <p>
        Accessing a Globus endpoint requires installation of the <Link target="_blank" href="https://www.globus.org/globus-connect-personal">Globus Connect Personal</Link> software.
    </p>
    <div class="flex-row">
        {#each datasets as dataset, i}
            <Tile class="fit-tile">
                <h4 id="dataset-{i}">{dataset.name}</h4>
                <p>{dataset.subtitle}</p>
                <StructuredList condensed flush>
                    <StructuredListBody>
                        {#each dataset.urls as url}
                            <StructuredListRow>
                                <StructuredListCell noWrap class="small-cell">
                                    {url.subset}
                                </StructuredListCell>
                                <StructuredListCell noWrap>
                                    {#if url.url}
                                        <Tag type="blue">
                                            <Link icon={Globe} target="_blank" href="{url.url}">
                                                Globus Endpoint
                                            </Link>
                                        </Tag>
                                    {:else}
                                        <Tag icon={Hourglass} type="red">
                                            Coming Soon!
                                        </Tag>
                                    {/if}
                                </StructuredListCell>
                            </StructuredListRow>
                        {/each}
                    </StructuredListBody>
                </StructuredList>
            </Tile>
        {/each}
    </div>
</Tile>

<style>
    p {
        margin: 1rem 0;
    }
    :global(.small-cell) {
        width: 9rem;
    }
    :global(.fit-tile) {
        margin: 2rem 1rem;
        width: 19rem;
    }
    .flex-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>
