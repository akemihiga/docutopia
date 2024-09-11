<script lang="ts">
  import ContainerAttribute from "./ContainerAttribute.svelte";
  import Link from "./Icons/Link.svelte";

  export let name: string = "";
  export let type: string = "";
  export let expandable: boolean = false;
  export let button: { name: string } | undefined = undefined;

  let isOpen: boolean;
</script>

<ContainerAttribute
  bind:open={isOpen}
  {expandable}
  variant={button ? "button" : undefined}
>
  <summary>
    {#if button}
      <span>{`${isOpen ? "Hide" : "Show"} ${button.name}`}</span>
    {:else}
      <a class="link-attribute" href={""}>
        <Link />
      </a>
      <div class="header-attribute" class:expandable-header={expandable}>
        <span>{name}</span>
        <span>{type}</span>
      </div>
    {/if}
  </summary>

  <div class="content-attribute">
    <slot></slot>
  </div>
</ContainerAttribute>

<style>
  .attribute > summary:hover .link-attribute {
    opacity: 1;
  }
  :global(.attribute > summary) {
    list-style: none;
    position: relative;
  }
  .header-attribute {
    display: inline-block;
  }
  .header-attribute > span:first-child {
    font-weight: var(--font-weight-bold);
    color: var(--secondary-color-800);
    font-family: var(--code-font);
    font-size: var(--font-size-s);
    line-height: 1.25rem;
  }
  .header-attribute > span:not(:first-child) {
    color: var(--secondary-color-500);
    font-size: var(--font-size-xs);
    line-height: 1rem;
  }

  .expandable-header > span:first-child {
    cursor: pointer;
    padding-left: 0.25rem;
  }
  .expandable-header::before {
    margin-left: -1rem;
    cursor: pointer;
    content: "";
    background-image: var(--arrow-icon);
    background-size: contain;
    background-repeat: no-repeat;
    /* padding-right: 0.15rem; */
    width: 0.75rem;
    height: 0.75rem;
    display: inline-block;
    transition: transform 0.2s;
  }
  :global(.attribute[open] .expandable-header::before) {
    transform: rotate(90deg);
  }

  .link-attribute {
    left: 0;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem;
    display: inline-block;
    transition:
      opacity 0.2s ease-out,
      transform 0.2s ease-out;
    opacity: 0;
    transform: translate(-120%, 0);
    background-color: var(--tertiary-color-100);
  }
  summary:has(.expandable-header) > .link-attribute {
    left: -1rem;
  }

  :global(.attribute-button > summary > span:first-child) {
    font-size: var(--font-size-s);
    line-height: 1.25rem;
    cursor: pointer;
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }
  :global(.attribute-button > summary > span:first-child::before) {
    content: "";
    background-image: var(--show-icon);
    background-size: contain;
    background-repeat: no-repeat;
    width: 0.75rem;
    height: 0.75rem;
    display: inline-block;
    transition: transform 0.2s;
  }
  :global(.attribute-button[open] > summary > span:first-child::before) {
    transform: rotate(45deg);
  }
  :global(.attribute-button > summary > span) {
    border-radius: 0.5rem;
    font-weight: var(--font-weight-semi-bold);
    padding: 0.25rem 1rem;
    background-color: transparent;
    color: var(--secondary-color-500);
    border: 0.0625rem solid var(--secondary-color-100);
  }
  :global(.attribute-button[open] > summary > span) {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  :global(.attribute-button[open] .content-attribute) {
    border: 0.0625rem solid var(--secondary-color-100);
    border-top-color: transparent;
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 1rem;
  }
</style>
