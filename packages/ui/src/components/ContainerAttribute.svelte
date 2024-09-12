<script lang="ts">
  export let expandable: boolean = false;
  export let variant: "button" | undefined = undefined;
  export let open: boolean = false;
  export let isChildren: boolean = false;
</script>

{#if expandable}
  <details
    bind:open
    {...$$restProps}
    class="attribute"
    class:attribute-button={variant === "button"}
    class:attribute-children={isChildren}
  >
    <slot></slot>
  </details>
{:else}
  <div class="attribute" class:attribute-children={isChildren} {...$$restProps}>
    <slot></slot>
  </div>
{/if}

<style>
  .attribute:not(.attribute-children, .attribute-button) {
    padding: 1rem 0;
  }
  .attribute-children {
    padding: 1rem;
  }
  :global(.attribute-button .attribute-children:not(:last-child)) {
    border-bottom: 0.0625rem solid var(--secondary-color-100);
  }
  .attribute:not(.attribute-button, .attribute-children) {
    border-top: 0.0625rem solid var(--secondary-color-100);
  }
  .attribute-button:not([open]) {
    width: fit-content;
  }
</style>
