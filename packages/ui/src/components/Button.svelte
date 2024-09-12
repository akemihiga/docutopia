<script lang="ts">
  import type { ComponentType } from "svelte";

  export let variant: "link" | "primary" = "primary";
  export let icon: ComponentType | null = null;
</script>

<button class={`button ${variant}-button`} on:click {...$$restProps}>
  <slot></slot>
  {#if icon}
    <svelte:component this={icon} />
  {/if}
</button>

<style>
  .button {
    all: unset;
    cursor: pointer;
    color: var(--primary-color-100);
  }

  .link-button {
    font-weight: var(--font-weight-semi-bold);
    font-size: inherit;
  }
  .link-button:hover {
    color: var(--primary-color-200);
  }

  .primary-button {
    text-transform: uppercase;
    padding: 0.375rem 1.25rem;
    border-radius: 9999em;
    background-color: var(--tertiary-color-100);
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    box-shadow:
      0 0.31rem 0.93rem 0 var(--transparent-secondary-color-200),
      0 0.93rem 2.19rem 0 var(--transparent-secondary-color-100);
    transition: box-shadow 0.25s;
    font-size: var(--font-size-xxs);
    line-height: 1.375rem;
    font-weight: var(--font-weight-bold);

    margin: 0.875rem auto 3rem auto;
  }

  :global(.button > svg) {
    width: 0.75rem;
    height: 0.75rem;
  }
  :global(.button:hover > svg) {
    fill: var(--tertiary-color-50);
  }
</style>
