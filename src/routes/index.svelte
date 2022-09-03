<script>
    import {
        ClickableTile,
        Link,
        Tabs,
        Tab,
        TabContent,
        Tag,
        Tile,
        Tooltip,
    } from "carbon-components-svelte";
    import { Launch } from "carbon-icons-svelte";
    import datasets from "$lib/datasets.json";
    import variables from "$lib/selected_variables.json"
</script>


<div
    class="hero"
>
    <img
        class="hero-img"
        src="img/wind.png"
        alt=""
    />
    <img
        class="hero-img"
        src="img/wind.webp"
        alt=""
        loading="lazy"
    />
    <div
        class="hero-txt"
    >
        <p>Dataset</p>
        <h1>Thermodynamic Global Warming Simulations</h1>
        <p>IM3 / HyperFACETS</p>
    </div>
</div>

<div
    class="content flex-row"
>
    <Tile light style="flex: 2 1 0; min-width: 350px; margin-right: 2rem;min-width: 400px;">
        <h4>
            Overview <small class="small"><Link icon={Launch} href="/methods">methods</Link></small>
        </h4>
        <p style="margin-bottom:1rem;">
            The <Link target="_blank" href="https://im3.pnnl.gov">IM3</Link> / <Link target="_blank" href="https://hyperfacets.ucdavis.edu/">HyperFACETS</Link> climate simulations provide 40-year historical (1980-2019) as well as four 80-year future simulations (2020-2099) over the U.S. The future simulations are split into near (2020-2059) and far future (2060-2099) segments. The future scenarios span a range of plausible changes in future climate (both Global Circulation Model (GCM) and Representative Concentration Pathways/Shared Socioeconomic Pathway (RCP/SSP) dimensions). 
        </p>
        <p style="margin-bottom:1rem;">
            The simulations provide climate variables with high spatiotemporal resolution (<Link href="/variables">25 hourly variables and 207 3-hourly variables</Link> at 12 km²). The datasets are generated using dynamical downscaling with the <Link target="_blank" href="https://www.mmm.ucar.edu/weather-research-and-forecasting-model">WRF</Link> (Weather Research and Forecasting) model (version 4.2.1) and therefore preserve physical consistency across variables. WRF is a state-of-the-art, fully compressible, non-hydrostatic, mesoscale numerical weather prediction model. WRF is coupled with an urban canopy model (UCM), which resolves urban surfaces. 
        </p>
        <p style="margin-bottom:1rem;">
            The future scenarios were developed using a thermodynamic global warming approach where past events are replayed under a range of future warming conditions. These scenarios therefore provide a perspective on potential increases in extreme event intensity, geographic scope, and duration, with previously non-extreme conditions potentially crossing new thresholds to be considered extreme by today’s standards. This approach is not intended to estimate future changes in extreme event frequency that might result from changes in large-scale atmospheric dynamics.
        </p>
        <p style="margin-bottom:1rem;">
            This dataset has NOT been bias corrected. A bias corrected version is under development and will be released here when available.
        </p>
    </Tile>
    <div style="flex: 1 1 0; display:flex; flex-direction:column;">
        <Tile light style="min-width: 350px;">
            <div>
                <h4>
                    Citation
                </h4>
                <p style="font-style: italic;">
                    Jones, A.D., D. Rastogi, P. Vahmani, A. Stansfield, K. Reed, P. Ullrich, J. Rice, From storylines to anthologies: Twenty-first century climate projections for the continental United States based on thermodynamic modification of historic weather conditions, in prep. 
                </p>
            </div>
        </Tile>
        <Tile light>
            <div class="stats">
                <h4 class="stat-label">
                    Attributes
                </h4>
                <h4>
                </h4>
                <span class="stat-label">Projection:</span>
                <span class="stat-label tooltip-label">
                    <span>
                        Lambert Conformal Conic
                    </span>
                    <Tooltip>
                        <p>
                            +proj=lcc +lat_0=40.0000076293945 +lon_0=-97 +lat_1=30 +lat_2=45 +x_0=0 +y_0=0 +R=6370000 +units=m +no_defs
                        </p>
                    </Tooltip>
                </span>
                <span class="stat-label">Domain:</span>
                <span class="stat-label">CONUS</span>
                <span class="stat-label">Spatial Resolution:</span>
                <span class="stat-label">12km²</span>
                <span class="stat-label">Temporal Resolution:</span>
                <span class="stat-label">hourly, three-hourly</span>
                <span class="stat-label">Variables:</span>
                <span class="stat-label"><Link href="/variables">25 hourly, 207 three-hourly</Link></span>
                <span class="stat-label">Simulation Period:</span>
                <span class="stat-label">1980 - 2099</span>
                <span class="stat-label">Format:</span>
                <span class="stat-label">NetCDF</span>
            </div>
        </Tile>
    </div>
    <Tile light style="width: 100%;">
        <h4>
            Dataset Availability <small class="small"><Link icon={Launch} href="/downloads">downloads</Link></small>
        </h4>
        <div class='flex-row'>
            {#each datasets as dataset, i}
                <div class='dataset'>
                    <ClickableTile class='dataset-tile' href="/downloads">
                        <img
                            class='dataset-img'
                            src="{dataset.image}"
                            alt=''
                        />
                        <p>{dataset.name}</p>
                        <p>{dataset.subtitle}</p>
                        <p>
                            {#if dataset.tags}
                                {#each dataset.tags as tag}
                                    <Tag type={tag.color}>
                                        {tag.tag}
                                    </Tag>
                                {/each}
                            {/if}
                        </p>
                    </ClickableTile>
                </div>
            {/each}
        </div>
    </Tile>
    <Tile light style="width: 100%;">
        <h4>
            Selected Variables <small class="small"><Link icon={Launch} href="/variables">all variables</Link></small>
        </h4>
        <Tabs>
            {#each variables as variable}
                <Tab label="{variable.label}" />
            {/each}
            <svelte:fragment slot="content">
                {#each variables as variable}
                    <TabContent>
                        <div class="flex-row">
                            <div
                                class="variable-img-wrapper"
                            >
                                <img
                                    class="variable-img"
                                    src="{variable.image}"
                                    alt=""
                                />
                                {#if variable.gif}
                                    <img
                                        class="variable-img"
                                        src="{variable.gif}"
                                        alt=""
                                        loading="lazy"
                                    />
                                {/if}
                            </div>
                            <div class="stats">
                                <span class="stat-label">Variable Name:</span>
                                <span class="stat-label">{variable.variable}</span>
                                <span class="stat-label">Description:</span>
                                <span class="stat-label">{variable.description}</span>
                                <span class="stat-label">Units:</span>
                                <span class="stat-label">{variable.units}</span>
                            </div>
                        </div>
                    </TabContent>
                {/each}
            </svelte:fragment>
        </Tabs>
    </Tile>
    <Tile light>
        <h4>
            Acknowledgements
        </h4>
        <div class="flex-row" style="align-items: center;">
            <div class="im3-logo logo">
                <div class="im3-logo-im">
                    IM<span class="im3-logo-3">3</span>
                </div>
            </div>
            <div class="logo">
                <img class="hyperfacets-logo" alt="HyperFACETS" src="img/hyperfacets.png"/>
            </div>
            <div class="logo">
                <img class="doesc-logo" alt="DOE SC" src="img/doesc.png"/>
            </div>
            <div class="logo">
                <img class="msd-live-logo" alt="MSD-LIVE" src="img/msd-live.svg"/>
            </div>
            <div class="logo">
                <img class="nersc-logo" alt="NERSC" src="img/nersc.png"/>
            </div>
        </div>
        <div>
            <p class="acknowledgement">
                This data was developed collaboratively between the IM3 and HyperFACETS projects, both of which are supported by the U.S. Department of Energy, Office of Science, as part of research in MultiSector Dynamics, and Regional and Global Model Analysis, Earth and Environmental System Modeling Program. A portion of this research used the computing resources of the National Energy Research Scientific Computing Center (NERSC), a U.S. Department of Energy Office of Science User Facility located at Lawrence Berkeley National Laboratory, operated under Contract No. DE-AC02-05CH11231.
            </p>
        </div>
    </Tile>
</div>

<style>
    .hero {
        margin: -2rem;
        position: relative;
        height: 20rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        color: #f4f4f4;
    }
    .hero-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
    }
    .hero-txt {
        height: 100%;
        position: relative;
        display: flex;
        padding-left: 4rem;
        flex-direction: column;
        justify-content: center;
        background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.25), transparent);
    }
    .flex-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: start;
        margin-top: 0.5rem;
    }
    .content {
        margin-top: 2rem;
    }
    .stats {
        display: grid;
        grid-template-columns: auto 1fr;
        max-width: 500px;
        column-gap: 1rem;
        row-gap: 0.25rem;
    }
    .stat-label {
        line-height: 1.5;
        vertical-align: baseline;
    }
    h4.stat-label {
        line-height: 1.4;
    }
    .tooltip-label {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .dataset {
        margin-right: 1rem;
        margin-bottom: 1rem;
        width: 225px;
    }
    :global(.dataset-tile) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .dataset-img {
        width: 100%;
        height: 150px;
        border-radius: 3px;
        margin-bottom: 0.5rem;
        object-fit: cover;
    }
    .variable-img-wrapper  {
        height: 150px;
        width: 200px;
        margin-right: 1rem;
    }
    .variable-img {
        height: 150px;
        width: 200px;
        object-fit: cover;
        position: absolute;
    }
    .acknowledgement {
        margin: 0.5rem 0;
        font-size: 0.8rem;
        font-style: italic;
    }
    .logo {
        margin: 0.5rem 2rem 0.5rem 0;
    }
    .im3-logo {
        margin-right: 3rem;
    }
    .im3-logo-im {
        font-family: Montserrat,sans-serif!important;
        font-weight: 900;
        font-size: 2rem;
        height: 30px;
        position: relative;
    }
    .im3-logo-3 {
        position: absolute;
        top: 30%;
        right: -45%;
    }
    .hyperfacets-logo {
        height: 70px;
        
    }
    .doesc-logo {
        background-color: white;
        padding: 0.25rem 0.5rem;
        height: 70px;
    }
    .msd-live-logo {
        height: 70px;
    }
    .nersc-logo {
        height: 70px;
    }
    .small {
        margin-left: 0.5rem;
    }
</style>
