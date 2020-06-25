<script>
  const techList = [
    "React",
    "Wordpress",
    "Gatsby",
    "Vue",
    "jQuery",
    "Node, Express",
    "Sass"
  ];

  const skills = [
    "Diploma in Web & UX Design",
    "UX and Design for web apps and sites"
  ];

  const aboutBlurb = `
	Hi I'm Joel, I dev and this is something short about me
`;
</script>

<style lang="sass">

</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<div class="top">
  <h1>Home</h1>
  <div class="top">
    <div class="left">
      <h2>About Me</h2>
      <p>{aboutBlurb}</p>
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
</div>
