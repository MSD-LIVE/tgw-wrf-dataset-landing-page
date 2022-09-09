<script>
    import {
        Button,
        Form,
        FormGroup,
        TextArea,
        TextAreaSkeleton,
        TextInput,
        TextInputSkeleton,
        Tile,
    } from "carbon-components-svelte";

    let loading = false;
    let done = false;
    let error = false;
    let name = '';
    let email = '';
    let note = '';
</script>

<Tile light>
    <h1>
        Collaborate!
    </h1>
    <p>
        If you have interest in collaborating on activities involving the IM3/HyperFACETS TGW Simulations, let us know by filling out the form below.
    </p>
    {#if !done}
        <Form
            on:submit={(e) => {
                e.preventDefault();
                loading = true;
                fetch("https://docs.google.com/forms/d/e/1FAIpQLSeVTGXfYn1Ul_1VmHySHaR4U7H2LcNRfilskxbY5An5SbAsWw/formResponse?" + new URLSearchParams({
                    ["entry.23257276"]: name,
                    ["entry.4328349"]: email,
                    ["entry.526546629"]: note,
                }), {
                    mode: 'no-cors',
                }).then(() => {
                    done = true;
                    loading = false;
                }).catch(() => {
                    error = true;
                    loading = false;
                    done = false;
                });
            }}
        >
            <div class="name">
                <FormGroup>
                    {#if !loading}
                        <TextInput
                            bind:value={name}
                            required
                            labelText="Name"
                            placeholder="Enter your name..."
                        />
                    {:else}
                        <TextInputSkeleton/>
                    {/if}
                </FormGroup>
            </div>
            <div class="email">
                <FormGroup>
                    {#if !loading}
                        <TextInput
                            bind:value={email}
                            required
                            labelText="Email"
                            placeholder="Enter your email address..."
                        />
                    {:else}
                        <TextInputSkeleton/>
                    {/if}
                </FormGroup>
            </div>
            <div class="note">
                <FormGroup>
                    {#if !loading}
                        <TextArea
                            bind:value={note}
                            required
                            labelText="Note"
                            placeholder="Enter a note about your interests..."
                        />
                    {:else}
                        <TextAreaSkeleton/>
                    {/if}
                </FormGroup>
            </div>
            <Button type="submit" disabled={loading || done}>Submit</Button>
        </Form>
    {:else}
        <p>Thanks for your interest; someone will reach out to you shortly!</p>
    {/if}
    {#if error}
        <p class='red'>
            An error occurred, please try again later!
        </p>
    {/if}
</Tile>

<style>
    p {
        margin: 1rem 0;
    }
    .red {
        color: red;
    }
    .name {
        min-width: 100px;
        max-width: 300px;
    }
    .email {
        min-width: 100px;
        max-width: 400px;
    }
    .note {
        min-width: 100px;
        max-width: 400px;
    }
</style>
