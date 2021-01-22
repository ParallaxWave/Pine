<script>
				export let name;
				export let lastMsg;
				export let timeStamp;
				let shortMsg = (lastMsg.length < 38) ? lastMsg : lastMsg.substring(0,38) + "...";
</script>
<style></style>
<div class="mt-3 bg-white p-2 rounded-md w-auto overflow-x-hidden">
				<div class="text-lg text-green-700 text-left">
								{name}
				</div>
				<div class="grid grid-columns-4 gap-1">
				        <span class="text-xs cols-span-3 text-gray-400 ml-1 text-left truncate">
				        				{shortMsg}
				        </span>
				        <span class="text-xs text-blue-400 cols-span-1 text-right">
				               	{timeStamp}
				        </span>
				</div>
</div>
