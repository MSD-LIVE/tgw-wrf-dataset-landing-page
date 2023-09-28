<script>
    import {
        Link,
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
                Jones, A.D., Rastogi, D., Vahmani, P. et al. Continental United States climate projections based on thermodynamic modification of historical weather. Sci Data 10, 664 (2023). 
                <Link target="_blank" href="https://doi.org/10.1038/s41597-023-02485-5">https://doi.org/10.1038/s41597-023-02485-5</Link>.
            </p>
        </ListItem>
        <ListItem class="ul-li li">
            <p>
                Rastogi, D., J. Trok, N. Depsky, A.D. Jones, Evaluation of the characteristics of heat wave, drought, and their concurrence in the historical period and projected future changes in the CMIP6 GCMs, in prep.
            </p>
        </ListItem>
        <ListItem class="ul-li li">
            <p>
                Srivastava, A. K., Ullrich, P. A., Rastogi, D., Vahmani, P., Jones, A., and Grotjahn, R.: Assessment of WRF (v 4.2.1) dynamically downscaled precipitation on subdaily and daily timescales over CONUS, Geosci. Model Dev., 16, 3699–3722, 
                <Link target="_blank" href="https://doi.org/10.5194/gmd-16-3699-2023">https://doi.org/10.5194/gmd-16-3699-2023</Link>, 2023.
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
