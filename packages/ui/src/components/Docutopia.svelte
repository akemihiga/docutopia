<script lang="ts">
  import Card from "./Card.svelte";
  import Table from "./Table.svelte";
  import Code from "./Code.svelte";
  import Grid from "./Grid.svelte";
  import Attribute from "./Attribute.svelte";
  import Button from "./Button.svelte";

  import Arrow from "./Icons/Arrow.svelte";
  import Endpoint from "./Endpoint.svelte";

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
    {
      code: { component: Code, props: { label: "api_error" } },
      status: "",
      description:
        "API errors cover any other type of problem (e.g., a temporary problem with Stripe’s servers), and are extremely uncommon.",
    },
  ];

  const enumValuesData = [
    {
      enum: { component: Code, props: { label: "adjustment" } },
    },
    {
      enum: { component: Code, props: { label: "advance" } },
    },
    {
      enum: { component: Code, props: { label: "advance_funding" } },
    },
    {
      enum: { component: Code, props: { label: "anticipation_repayment" } },
    },
    {
      enum: { component: Code, props: { label: "application_fee" } },
    },
    {
      enum: { component: Code, props: { label: "application_fee_refund" } },
    },
    {
      enum: { component: Code, props: { label: "charge" } },
    },
    {
      enum: { component: Code, props: { label: "climate_order_purchase" } },
    },
    {
      enum: { component: Code, props: { label: "climate_order_refund" } },
    },
    {
      enum: {
        component: Code,
        props: { label: "connect_collection_transfer" },
      },
    },
    {
      enum: { component: Code, props: { label: "idempotency_error" } },
    },
    {
      enum: { component: Code, props: { label: "invalid_request_error" } },
    },
  ];
</script>

<section>
  <Grid>
    <div>
      <Attribute name="type" type="enum" isRequired>
        <p>
          The type of error returned. One of
          <Code label="api_error" />,
          <Code label="card_error" />,
          <Code label="idempotency_error" />, or
          <Code label="invalid_request_error" />
        </p>

        <Card header="Possible enum values" variant="secondary">
          <Table variant="secondary" rows={enumValuesData} maxRows={5} />
        </Card>
      </Attribute>

      <Attribute expandable name="charge" type="nullable string">
        <p>
          Funds held due to negative balances on connected accounts where <a
            href="/api/accounts/object#account_object-controller-requirement_collection"
            ><span>account.controller.requirement_collection</span></a
          >
          is
          <Code label="application" />, which includes Custom accounts. You can
          find the connect reserve balance for each currency and payment type in
          the <Code label="source_types" />
          property.
        </p>

        <Attribute expandable button={{ name: "child attributes" }}>
          <Attribute isChildren type="integer">
            <span slot="name"
              ><span class="bold">connect_reserved.</span>amount</span
            >
            <p>Balance amount.</p>
          </Attribute>
          <Attribute isChildren type="enum">
            <span slot="name"
              ><span class="bold">connect_reserved.</span>currency</span
            >
            <p>
              Three-letter <a
                href="https://www.iso.org/iso-4217-currency-codes.html"
                ><span>ISO currency code</span></a
              >, in lowercase. Must be a
              <a href="https://stripe.com/docs/currencies"
                ><span>supported currency</span></a
              >.
            </p>

            <Attribute expandable button={{ name: "child attributes" }}>
              <p>No attributes</p></Attribute
            >
          </Attribute>
        </Attribute>
      </Attribute>
    </div>

    <div>
      <Card header="http status code summary">
        <Table rows={statusData} />
      </Card>

      <Card header="endpoints">
        <Endpoint
          method="POST"
          route="/v1/setup_intents"
          description="Create setups"
        />
        <Endpoint
          method="GET"
          route="/v1/payouts/:id"
          description="List all payouts"
        />
        <Endpoint
          method="DELETE"
          route="/v1/customers/:id/sources/:id"
          description="Delete customers"
        />
      </Card>
    </div>
  </Grid>

  <Button icon={Arrow}>Show</Button>
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
  :global(a) {
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
    font-weight: var(--font-weight-medium);
  }
</style>
