<script>
    import {
        DataTable,
        Tabs,
        Tab,
        TabContent,
        Tile,
    } from "carbon-components-svelte";
    import hourlyVariables from "$lib/hourly_variables.json";
    import threeHourlyVariables from "$lib/three_hourly_variables.json";

    const headers = [
        {key: 'variable', value: 'Variable'},
        {key: 'description', value: 'Description'},
        {key: 'units', value: 'Units'},
        {key: 'dimensions', value: 'Dimensions'},
        {key: 'notes', value: 'Notes'},
    ];
    const hourly = Object.entries(hourlyVariables).map(([key, value]) => ({
        ...value,
        dimensions: value.dimensions.join(', '),
        variable: key,
        id: key,
    }));
    const threeHourly = Object.entries(threeHourlyVariables).map(([key, value]) => ({
        ...value,
        dimensions: value.dimensions.join(', '),
        variable: key,
        id: key,
    }));
</script>

<Tile light>
    <h1>
        Variables
    </h1>
    <Tabs>
        <Tab label="Hourly" />
        <Tab label="Three-Hourly" />
        <svelte:fragment slot="content">
            <TabContent>
                <DataTable
                    sortable
                    headers={headers}
                    rows={hourly}
                />
            </TabContent>
            <TabContent>
                <DataTable
                    sortable
                    headers={headers}
                    rows={threeHourly}
                />
            </TabContent>
        </svelte:fragment>
    </Tabs>
</Tile>
