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
    <div class="justify-self-center text-center mt-5 w-1/2 p-8">
      <div class="material-icons text-4xl text-gray-500 font-bold" style="font-size: 18vw;">chat</div><br>
      <span class="text-4xl text-gray-500 font-sans">
        Welcome to your chats <b>{username}</b>! 
      </span>
    </div>
  </div>

