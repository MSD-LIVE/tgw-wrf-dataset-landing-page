<script>
    import {
        ListItem,
        UnorderedList,
        Tile,
    } from "carbon-components-svelte";
</script>

<Tile light>
    <h1>
        Publications
    </h1>
    <UnorderedList class="ol" expressive>
        <ListItem class="ul-li li">
            <p>
                Jones, A.D., D. Rastogi, P. Vahmani, A. Stansfield, K. Reed, P. Ullrich, J. Rice, From storylines to anthologies: Twenty-first century climate projections for the continental United States based on thermodynamic modification of historic weather conditions, in prep.
            </p>
        </ListItem>
        <ListItem class="ul-li li">
            <p>
                Rastogi, D., J. Trok, N. Depsky, A.D. Jones, Evaluation of the characteristics of heat wave, drought, and their concurrence in the historical period and projected future changes in the CMIP6 GCMs, in prep.
            </p>
        </ListItem>
    </UnorderedList>
</Tile>

<style>
    p {
        margin: 1rem 0 1rem;
        max-width: 800px;
    }
</style>
