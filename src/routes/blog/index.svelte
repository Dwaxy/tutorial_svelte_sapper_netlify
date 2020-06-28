<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Image from "svelte-image";
</script>

<style lang="scss">
  $itemWidth: 350px;
  .items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($itemWidth, 1fr));
    grid-gap: 1rem;
    grid-auto-flow: dense;
    min-height: calc(100vh - 150px);
    .item {
      width: $itemWidth;
      padding: 15px;
      padding-bottom: 40px;

      .content-holder {
        margin-top: -80px;
      }
      img {
        width: $itemWidth;
      }

      .title {
        text-align: center;
        margin: 0;
      }

      .tags {
        display: flex;
        width: max-content;
        margin: 0 auto;
        span {
          margin: 5px;
        }
      }

      .btn {
        width: 100%;
      }
    }
  }
</style>

<svelte:head>
  <title>Portfolio Items</title>
</svelte:head>

<div class="items">
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <a class="item" rel="prefetch" href="blog/{post.slug}">
        <Image class="image-holder" src={post.image} />

        <div class="content-holder">
          <h2 class="title">
            {post.title}
          </h2>
          <div class="tags">
            {#each post.tags as tag}
              <span>{tag}</span>
            {/each}
          </div>
        </div>

        <button class="btn">View Project</button>
    
      </a>
  {/each}
</div>