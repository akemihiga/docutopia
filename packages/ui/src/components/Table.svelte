<script lang="ts">
  export let variant: "primary" | "secondary" = "primary";
  export let rows: Record<string, string | number>[];
</script>

<table class={`table table-${variant}`}>
  <tbody>
    {#if rows.length}
      {#each rows as row, index (index)}
        <tr>
          {#each Object.keys(row) as key}
            <td>{row[key]}</td>
          {/each}
        </tr>
      {/each}
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
