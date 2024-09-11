<script lang="ts">
  export let label: string;
</script>

<code class="code">{label ?? ""}</code>

<style>
  .code {
    background-color: var(--secondary-color-300);
    font-size: var(--font-size-m);
    border-radius: 0.375rem;
    line-height: 1.25rem;
    border: 0.0625rem solid var(--secondary-color-100);
    padding: 0.125rem 0.25rem;
    font-family: var(--code-font);
  }
</style>
