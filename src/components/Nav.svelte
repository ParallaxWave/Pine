<script>
	export let segment;
</script>

<style>
</style>

<nav class="bg-green-400 text-white p-2 px-5">
				<span class="text-3xl font-bold">
								<span class="material-icons bg-white text-green-400 p-2 rounded-full">eco</span>&nbsp;
				                Logo
				</span>
    <span class="float-right text-xl mt-1">
						<a aria-current="{segment === undefined ? 'page' : undefined}" class="hover:text-green-100 transition duration-300" href=".">Home</a>&nbsp;&nbsp;
             <a aria-current="{segment === 'about' ? 'page' : undefined}" class="hover:text-green-100 transition duration-300" href="about">About</a>&nbsp;&nbsp;
             <a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" class="hover:text-green-100 transition duration-300" href="blog">Blog</a>&nbsp;&nbsp;
    </span>
</nav>
