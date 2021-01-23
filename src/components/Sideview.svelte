<script>
  import { stores } from '@sapper/app';
  const { session } = stores()
	import ChatComponent from '../components/ChatComponent.svelte'
	let search = false;
	let name = "";
  let chats = [];
  const username = $session.username;
  async function loadChats(){
    const data = {username};
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application-json'
      },
      body: JSON.stringify(data)
    };
    const req = await fetch('user/getChats.json', options);
    const info = await req.json();
    console.log(info);
  }
  loadChats();
				/*let chats = [
								{
												name: "Bob",
												lastMsg: "Hey There",
												timeStamp: "15:00"
								},
								{
												name: "Sam",
												lastMsg: "Hi",
												timeStamp: "14:32"
								},
								{
												name: "Alice",
												lastMsg: "Ok",
												timeStamp: "9:12"
								},
								{
												name: "Ray",
												lastMsg: "Sounds good.",
												timeStamp: "17:30"
								},
								{
												name: "Alex",
												lastMsg: "Long time no see!",
												timeStamp: "8:42"
								},
								{
												name: "Stacy",
												lastMsg: "lkfjdnlkjn lfkjsdanlkjfan lkfjsdn",
												timeStamp: "8:41"
								},
								{
												name: "Jake",
												lastMsg: "Spam spam spam spam spam spam spam",
												timeStamp: "18:42"
								}
				];*/

</script>

<style>
</style>

<nav class="bg-gray-200 text-white p-2 px-5 h-screen text-center overflow-y-scroll">
				        <span class="text-md">
												<input bind:value={name} type="text" class="mt-2 focus:border-blue-400 w-auto p-2 rounded-md text-gray-800" placeholder="Search">
				        </span>
				<div class="mt-8">
								{#if name == ""}
								{#each chats as chat}
												<ChatComponent name={chat.name} lastMsg={chat.lastMsg} timeStamp={chat.timeStamp} />
								{/each}	
								{:else}
												{#each chats.filter(a => a.name.toUpperCase().includes(name.toUpperCase())) as chat}
																<ChatComponent name={chat.name} lastMsg={chat.lastMsg} timeStamp={chat.timeStamp} />
												{/each}
								{/if}				
    </div>
</nav>
