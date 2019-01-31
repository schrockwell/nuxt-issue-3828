<template>
  <div>
    <h1>Hello, world, at {{ date.toString() }}!</h1>
    <p>
      To recreate <a href="https://github.com/nuxt/nuxt.js/issues/3828">this issue</a>, a full HMR reload must be forced:
    </p>

    <ol>
      <li><code>npm run dev</code> and open this page in Safari</li>
      <li>Uncomment <code>// syntax error;</code> in this file, save it, and observe the expected compilation error</li>
      <li>Re-comment <code>// syntax error;</code> to successfully compile, then stare into the HMR abyss!</li>
      <li>If you get "Module build failed" at this point, repeat steps 2 and 3 and then refresh the page and try again. In this example repo, it's intermittent to get it to occur.</li>
    </ol>
  </div>
</template>

<script>
  // syntax error;

  export default {
    computed: {
      date() { return new Date() }
    }
  }
</script>