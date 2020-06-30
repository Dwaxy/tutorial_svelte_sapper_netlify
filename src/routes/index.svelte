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
    padding-top: 5vh;
    .title {
      font-family: 'Heebo', sans-serif;
    }
    p, b {
      letter-spacing: 0.8px;
    }

    .i1 {
      font-size: 19px;
    }
    .i2 {
      font-size: 18px;
    }
    .i3 {
      font-size: 17px;
    }
    .i4 {
      font-size: 18px;
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
  <title>Joel Carter - Full Stack Developer</title>
</svelte:head>

<div class="top">
  <div class="left">
    <h2 class="title">About Me</h2>
    <p>I'm Joel, a <b class="i1">Full-Stack</b> web developer who has just finished a Diploma in Web UX Design and Production. </p>
    
    <p>With my experiences, I have the knowledge of the whole game; learning what the <b class="i2">client needs</b>, designing and delivering the project with the best possible outcome.</p>
    
    <p>I think about the most <b class="i3">effective systems</b> for the solution, 
    with three years of experience teaching myself web technologies and freelance, while bringing my skills in art into my design. 
    Now with <b class="i4">UX experience</b> from Yoobee School of Design.</p>
    <div class="button-holder">
        <a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>
          <button class="btn">My Works</button>
        </a>
    </div>
  </div>

  <div class="right">
    <ul class="tags">
    <h2 class="title">My Skills</h2>
      {#each techList as tech}
        <li>{tech}</li>
      {/each}
    </ul>
  </div>
</div>