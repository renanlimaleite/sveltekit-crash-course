<script context="module" lang="ts">
	
  import type { LoadEvent } from '@sveltejs/kit'

	export function load({ error }: LoadEvent) {
		return {
			props: { message: error?.message }
		};
	}
</script>

<script lang="ts">	
	export let message: string;
</script>

<div class="error">
  <h2>Ooops</h2>
  <p>{message}</p>
  <a href="/guides">View all guides...</a>
</div>

<style>
  .error {
    text-align: center;
    margin-bottom: 60px;
  }
</style>