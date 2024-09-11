<script lang="ts">
  export let expandable: boolean = false;
  export let variant: "button" | undefined = undefined;
  export let open: boolean = false;
</script>

{#if expandable}
  <details
    bind:open
    {...$$restProps}
    class="attribute"
    class:attribute-button={variant === "button"}
  >
    <slot></slot>
  </details>
{:else}
  <div class="attribute" {...$$restProps}>
    <slot></slot>
  </div>
{/if}

<style>
  .attribute {
    padding: 1rem 0;
  }
  .attribute:not(.attribute-button) {
    border-top: 0.0625rem solid var(--secondary-color-100);
  }
  .attribute-button:not([open]) {
    width: fit-content;
  }
</style>
