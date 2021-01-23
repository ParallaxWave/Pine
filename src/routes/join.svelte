<script>
  import { stores } from '@sapper/app';
  const { session } = stores()
  let username = $session.username;
</script>

<style>
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

  <div class="grid justify-items-stretch">
    <div class="justify-self-center text-center mt-5 w-5/6 p-8">
      <div class="material-icons text-4xl text-gray-500 font-bold" style="font-size: 18vw;">chat</div><br>
      <span class="text-4xl text-gray-500 font-sans">
        Welcome to your chats <b>{username}</b>! 
      </span>
      <div class="grid grid-cols-3 gap-4 text-md mt-24">
        <a class="col-span-1 text-gray-500 p-2 rounded-md hover:text-gray-400 focus:outline-none" href="chat">Join a Group</a>
        <a class="col-span-1 text-gray-500 p-2 rounded-md hover:text-gray-400 focus:outline-none" href="chat">Create a Group</a>
        <a class="col-span-1 text-gray-500 p-2 rounded-md hover:text-gray-400 focus:outline-none" href="chat">Direct Messaging</a>
      </div>
    </div>
  </div>

