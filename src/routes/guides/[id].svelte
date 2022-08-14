<script context="module" lang="ts">
  import type { LoadEvent } from "@sveltejs/kit";

  export async function load({ fetch, params }: LoadEvent) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const id = params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const guide = await response.json()

    if (response.ok) {
      return {
        props: {
          guide
        }
      }
    }

    return {
      status: 301,
      redirect: '/guides'
    }
  }
</script>

<script lang="ts">
  type guid = {
    title: string
    body: string
  }
  export let guide: guid
</script>

<div class="guide">
  <h2>{guide.title}</h2>
  <p>{guide.body}</p>
</div>

<a href="/guides">Back</a>

<style>
  .guide {
    margin-top: 40px;
    padding: 10px;
    border: 1px dotted rgba(255, 255, 255, 0.8);
  }
</style>