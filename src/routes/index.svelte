<script>
  const techList = [
    "React",
    "Wordpress",
    "Gatsby",
    "Vue",
    "jQuery",
    "Node",
    "Express",
    "Graphql",
    "Sass",
    "Diploma in Web & UX Design",
  ];

  const aboutBlurb1 = `
    I'm Joel, a Full-Stack web developer who has just finished a Diploma in Web UX Design and Production. 
  `;

  const aboutBlurb2 = `
	  With my experiences, I have the knowledge of the whole game; learning what the client needs, designing and delivering the project with the best possible outcome.

`;

  const aboutBlurb3 = `
    I think about the most effective systems for the solution, with three years of experience teaching myself web technologies and freelance, while bringing my skills in art into my design. Now with UX experience from Yoobee School of Design.
  `;

export let segment;
</script>

<style lang="scss">
.top {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 150px);
  max-width: 1000px;
  margin: 0 auto;
  .right, .left {
    width: 400px;
    p {
      letter-spacing: 0.8px;
    }
  }

  .tags {
    list-style-type: none;
    li {
      padding: 2px;
    }
  }

  @media screen and (max-width: 1000px) {
    display: block;
    .left, .right {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
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
    <p>{aboutBlurb1}</p>
    <p>{aboutBlurb2}</p>
    <p>{aboutBlurb3}</p>
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