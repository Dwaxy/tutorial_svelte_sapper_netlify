<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
  import Image from "svelte-image";
  let tags = post.tags;
  let img = post.image;
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

  body {
    height: auto;
  }

  .content :global(a) {
    font-weight: bold;
    letter-spacing: 1.5px;
    text-decoration: underline;
  }

  .content :global(p > img) {
    padding: 30px;
    max-width: 90%;
    display: flex;
    margin: 0 auto;
  }
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
    font-family: 'Heebo', sans-serif;
  }
  .content :global(h1) {
    font-family: 'Heebo', sans-serif;
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

  .content {
    max-width: 700px;
  }
  .bottom {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px;
    position: relative;
  }
  @media screen and (max-width: 1000px) {
    .bottom {
      padding: 0;
    }
  }

  .top {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    .left {
      width: 70%;
      height: 70vh;
      min-width: 400px;
      max-width: 900px;
    }

    .right-content {
      padding-left: 30px;
      a {
        display: block;
      }
      h1 {
        margin-top: 0px;
        line-height: 1.4;
      }
      .tags {
        list-style-type: none;
        padding: 0px;
        li {
          padding-bottom: 5px;
          text-transform: capitalize;
        }
      }
    }
    @media screen and (max-width: 1000px) {
      display: block;
      .left, .right {
        width: 100%;
        min-width: 0;
      }
    }
  }
</style>

<svelte:head>
  <title>Project - {post.title}</title>
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

      {#if post.link}
        <!-- content here -->
        <a target="_blank" href={post.link}>
          <button class="btn">View Project</button>
        </a>
      {/if}

      {#if post.gitLink}
        <!-- content here -->
        <a target="_blank" href={post.gitLink}>
          <button class="btn">View Git Repo</button>
        </a>
      {/if}

    </div>
  </div>
</div>

<div class="bottom content">
  {@html post.html}
</div>
