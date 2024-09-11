<script lang="ts">
  export let variant: "primary" | "secondary" = "primary";
  export let header: string;
</script>

<div class={`card card-${variant}`}>
  <div class="card-header">
    <span>
      {header ?? ""}
    </span>
  </div>
  <div class="card-content">
    <slot></slot>
  </div>
</div>

<style>
  .card-primary {
    background-color: var(--secondary-color-200);
  }
  .card-primary .card-header {
    background-color: var(--secondary-color-300);
  }
  .card-primary .card-header > span {
    text-transform: uppercase;
  }
  .card-primary .card-content {
    padding: 0.75rem;
  }

  .card-secondary,
  .card-secondary .card-header {
    background-color: var(--tertiary-color-100);
  }

  .card {
    border-radius: 0.5rem;
    border: 0.0625rem solid var(--secondary-color-100);
    overflow: hidden;
  }

  .card-header {
    padding: 0.5rem 0.75rem;
    border-bottom: 0.0625rem solid var(--secondary-color-100);
  }
  .card-header > span {
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-xs);
    line-height: 1rem;
    color: var(--secondary-color-800);
  }
</style>
