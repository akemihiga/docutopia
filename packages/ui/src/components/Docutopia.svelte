<script lang="ts">
  import Card from "./Card.svelte";
  import Table from "./Table.svelte";
  import Code from "./Code.svelte";
  import Grid from "./Grid.svelte";
  import Attribute from "./Attribute.svelte";

  // import "../styles/theme.css";

  const statusData = [
    {
      code: 200,
      status: "OK",
      description: "Everything worked as expected.",
    },
    {
      code: 400,
      status: "Bad Request",
      description:
        "The request was unacceptable, often due to missing a required parameter.",
    },
    {
      code: 401,
      status: "Unauthorized",
      description: "No valid API key provided.",
    },
    {
      code: 402,
      status: "Request Failed",
      description: "The parameters were valid but the request failed.",
    },
  ];
</script>

<section>
  <Grid>
    <div>
      <Attribute name="charge" type="nullable string">
        <p>For card errors, the ID of the failed charge.</p>
      </Attribute>

      <Attribute expandable name="charge" type="nullable string">
        <p>For card errors, the ID of the failed charge.</p>

        <Attribute expandable button={{ name: "child attributes" }}>
          <p>No Attributes.</p>
        </Attribute>
      </Attribute>
    </div>

    <Card header="http status code summary">
      <Table rows={statusData} />
      <Code label="idempotency_error" />
    </Card>
  </Grid>
</section>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: var(--primary-font);
    word-wrap: break-word;
  }

  section {
    padding: 5rem min(4rem, 5vw);
  }
</style>
