<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  export let post
  let tags = post.tags
  import Image from "svelte-image"
  let img = post.image
</script>

<style lang="scss">
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

  // .content :global(p) {
    
  // }

  .content :global(p > img) {
    padding: 30px;
    max-width: 90%;
    display: flex;
    margin: 0 auto;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .bottom {
    width: 1000px;
    margin: 0 auto;
    padding: 40px;
  }

  .top {
    display: flex;
    margin-bottom: -150px;
    .left, .right {
      width: 50%
    }

    .right-content {
      padding-left: 30px;
      h1 {
        margin-top: 0px;
        line-height: 0.7;
      }
      .tags {
        list-style-type: none;
        padding: 0px;
        li {
          padding-bottom: 5px;
        }
      }
    }
  }

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="top">
  <div class="left">
    <Image src={img} />
  </div>
  <div class="right">

  <div class="right-content">
    <h1>{post.title}</h1>

    <ul class="tags">
      {#each tags as tag}
        <li>{tag}</li>
      {/each}
    </ul>
  </div>
  </div>
</div>

<div class="bottom content">
  {@html post.html}
</div>
