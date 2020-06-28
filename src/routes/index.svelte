<script>
  const techList = [
    "React",
    "Wordpress",
    "Gatsby",
    "Vue",
    "jQuery",
    "Node, Express",
    "Sapper",
    "Sass"
  ];

  const skills = [
    "Diploma in Web & UX Design",
    "UX and Design for web apps and sites"
  ];

  const aboutBlurb = `
	  Hi I'm Joel, I dev and this is something short about me
`;

export let segment;
</script>

<style lang="scss">
.top {
  display: flex;
  justify-content: space-around;
  .right, .left {
    width: 300px;
  }

  .tags {
    list-style-type: none;
    li {
      padding: 2px;
    }
  }
}

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="top">
  <div class="left">
    <h2>About Me</h2>
    <p>{aboutBlurb}</p>
    <div class="button-holder">
        <a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>
          <button class="btn">My Works</button>
        </a>
    </div>
  </div>

  <div class="right">
    <ul class="tags">
    <h2>My Skills</h2>
      {#each techList as tech}
        <li>{tech}</li>
      {/each}
    </ul>
  </div>
</div>