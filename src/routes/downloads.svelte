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
        Datasets are available to download via Globus endpoints.
    </p>
    <p>
        Accessing a Globus endpoint may require the installation of the <Link target="_blank" href="https://www.globus.org/globus-connect-personal">Globus Connect Personal</Link> software.
    </p>
    <div class="flex-row">
        {#each datasets as dataset, i}
            <Tile class="fit-tile">
                <h4 id="dataset-{i}">{dataset.name}</h4>
                <span>{dataset.subtitle}</span>
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
                <div class="doi-row">
                    <a href="https://doi.org/{dataset.doi}"><img src="https://data.msdlive.org/badge/DOI/{dataset.doi}.svg" alt="DOI"></a>
                </div>
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
    .flex-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .doi-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
    }
</style>
