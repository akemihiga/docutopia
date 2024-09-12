<script lang="ts">
  export let position: "left" = "left";
</script>

<div class={`tooltip tooltip-${position}`} role="tooltip">
  <span><slot></slot></span>
</div>

<style>
  .tooltip {
    top: 0;
    position: absolute;
    background-color: var(--tertiary-color-50);
    max-width: 31.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.375rem;
    color: var(--tertiary-color-100);
    font-size: var(--font-size-s);
    line-height: 1.25rem;
    font-weight: var(--font-weight-regular);
    box-shadow:
      0 0 0 0 transparent,
      transparent 0 0 0 0.0625rem,
      0 0 0 0 transparent,
      0 0.0625rem 0.0625rem 0 var(--transparent-secondary-color-200),
      0 0.125rem 0.31rem 0 var(--transparent-secondary-color-100);
    visibility: hidden;
  }
  .tooltip-left {
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
  }

  :global(.container-tooltip) {
    position: relative;
  }
  :global(.container-tooltip:hover > .tooltip) {
    visibility: visible;
  }
</style>
