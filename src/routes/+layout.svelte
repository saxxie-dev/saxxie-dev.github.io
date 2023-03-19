<style>
@import "../app.css";
</style>
<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
</script>
<Header/>
<slot></slot>
<Footer/>