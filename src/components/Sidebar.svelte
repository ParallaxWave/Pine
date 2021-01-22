<script>
	export let segment;
</script>

<style>
</style>

<nav class="bg-green-400 text-white p-2 px-5 h-screen text-center">
				<span class="text-4xl font-bold">
								<span class="material-icons bg-white text-green-400 p-2 rounded-md">eco</span>&nbsp;
				                
				</span>
    <div class="text-8xl mt-8">
						<a aria-current="{segment === undefined ? 'page' : undefined}" class="material-icons bg-white text-green-400 p-2 rounded-full hover:text-green-800 transition duration-300" href=".">home</a><br>
             <a aria-current="{segment === 'about' ? 'page' : undefined}" class="material-icons bg-white text-green-400 p-2 rounded-full hover:text-green-800 transition duration-300" href="about">info</a><br>
             <a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" class="material-icons bg-white text-green-400 p-2 rounded-full hover:text-green-800 transition duration-300" href="blog">rss_feed</a><br>
             <a rel=prefetch aria-current="{segment === 'chat' ? 'page' : undefined}" class="material-icons bg-white text-green-400 p-2 rounded-full hover:text-green-800 transition duration-300" href="chat">chat</a><br>
    </div>
</nav>
