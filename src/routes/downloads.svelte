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
    import { Globe, CloudDownload } from "carbon-icons-svelte";
    import datasets from "$lib/datasets.json";
</script>


<Tile light>
    <h1>
        Downloads
    </h1>
    <p>
        Data is available via Globus endpoint. Globus is an efficient file transfer application and download manager.
    </p>
    <p>
        Many computing clusters provide mechanisms for transferring files from Globus endpoints. To download directly to your machine, use the <Link target="_blank" href="https://www.globus.org/globus-connect-personal">Globus Connect Personal</Link> application.
    </p>
    <p>
        Note that the direct "Download" option is not available; one must instead create a local endpoint using Globus Connect Personal and then transfer the files to that endpoint. See this tutorial [<Link target="_blank" href="https://www.youtube.com/watch?v=bpnVcAN99WY">video</Link>, <Link target="_blank" href="https://docs.globus.org/how-to/get-started/">text</Link>] for more information.
    </p>
    <p>
        Use of Globus may require creation of an account. Many institutions provide single sign-on capability; if yours does not, signing in with an ORCID is a commonly used option.
    </p>
    <p>
        A copy of the data is permanently stored in the MSD-LIVE data repository.
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
                                    {#if url.type == 'globus'}
                                        <Tag type="blue">
                                            <Link icon={Globe} target="_blank" href="{url.url}">
                                                Globus Endpoint
                                            </Link>
                                        </Tag>
                                    {:else if url.type == 'MSDLIVE'}
                                        <Tag type="cyan">
                                            <Link icon={CloudDownload} target="_blank" href="{url.url}">
                                                MSDLIVE
                                            </Link>
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
    :global(.fit-tile) {
        display: flex;
        flex-direction: column;
    }
    .doi-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        margin-top: auto;
    }
</style>
