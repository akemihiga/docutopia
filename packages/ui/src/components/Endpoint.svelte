<script lang="ts">
  import Tooltip from "./Tooltip.svelte";

  export let method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | string = "";
  export let route: string = "";
  export let description: string | undefined = undefined;
</script>

<div class="endpoint container-tooltip">
  <a class="link-endpoint" href="/">
    <span class={`method ${method?.toLowerCase()}`}>{method}</span>
    <span>{route}</span>
  </a>

  <!-- {#if description?.trim().length}
    <Tooltip>{description}</Tooltip>
  {/if} -->
</div>

<style>
  .method {
    text-transform: uppercase;
    text-align: right;
    width: 3.5rem;
    height: fit-content;
  }
  .link-endpoint {
    line-height: 1.25rem;
    font-size: var(--font-size-s);
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--secondary-color-800);
    width: fit-content;
  }
  .link-endpoint > span {
    font-family: var(--code-font);
  }
  .get {
    color: var(--method-get-color);
  }
  .post {
    color: var(--method-post-color);
  }
  .delete {
    color: var(--method-delete-color);
  }
</style>
