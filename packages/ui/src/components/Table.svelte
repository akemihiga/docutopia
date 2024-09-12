<script lang="ts">
  import type { ComponentType } from "svelte";
  import Button from "./Button.svelte";

  export let variant: "primary" | "secondary" = "primary";
  export let rows: Record<
    string,
    | string
    | number
    | { component: ComponentType; props?: Record<string, string | number> }
  >[];
  export let maxRows: number | undefined = undefined;

  const handleShowMoreRows = () => {
    maxRows = rows.length;
  };

  $: displayRows = maxRows && rows?.length ? rows.slice(0, maxRows) : rows;
  $: missingRowsNumber = maxRows ? rows?.length - displayRows?.length : 0;
</script>

<table class={`table table-${variant}`}>
  <tbody>
    {#if displayRows.length}
      {#each displayRows as row, index (index)}
        <tr>
          {#each Object.keys(row) as key}
            <td>
              {#if typeof row[key] === "object" && "component" in row[key]}
                <svelte:component
                  this={row[key].component}
                  {...row[key]?.props}
                />
              {:else}
                {row[key]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
      {#if maxRows && missingRowsNumber > 0}
        <td
          ><Button variant="link" on:click={handleShowMoreRows}
            >{`Show ${missingRowsNumber} more`}</Button
          ></td
        >
      {/if}
    {/if}
  </tbody>
</table>

<style>
  .table-primary td {
    padding: 0 0.5rem 0.25rem 0;
  }
  .table-secondary tr:not(:last-child) {
    border-bottom: 0.0625rem solid var(--secondary-color-100);
  }
  .table-secondary td {
    padding: 0.75rem;
  }
  .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .table td {
    font-size: var(--font-size-s);
    color: var(--secondary-color-800);
  }
  .table td:first-child:not(:has(code)) {
    font-weight: var(--font-weight-bold);
  }
</style>
