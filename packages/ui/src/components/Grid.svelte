<div class="container-grid">
  <slot></slot>
</div>

<style>
  .container-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: min(3rem, 5vw);
    align-items: start;
  }
  :global(.container-grid p) {
    color: var(--secondary-color-800);
    font-size: var(--font-size-s);
    line-height: 1.375rem;
  }
  :global(.container-grid p > a) {
    color: var(--primary-color-100);
    font-weight: var(--font-weight-medium);
  }
  :global(.container-grid p > a:hover) {
    color: var(--primary-color-200);
  }
  :global(.container-grid > div) {
    height: fit-content;
  }
</style>
