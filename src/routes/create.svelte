<script>
  import { stores } from '@sapper/app';
  const { session } = stores()
  const username = $session.username;
  let error = false;
  let errorStatus = "";
  let groupName;
  async function create(){
    if(groupName){
      const creator = username;
      const data = {groupName, creator};
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const req = await fetch('clusters/create.json', options);
      const info = await req.json();
      if(!info.success){
        error = true;
        errorStatus = "Group Already Exists";
      }
    }
    else{
      error = true;
      errorStatus = "Please Enter a Group Name";
    }
  }
</script>

<style>
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

  <div class="grid justify-items-stretch">
    <div class="justify-self-center text-center mt-5 w-5/6 p-8">
      <div class="material-icons text-4xl text-gray-500 font-bold" style="font-size: 18vw;">groups</div><br>
      {#if error}
        <div class="text-red-500 text-sm mb-2">{errorStatus}</div>
      {/if}
      <input bind:value={groupName} type="text" class="mb-4 border-2 border-gray-300 focus:border-blue-400 rounded-md px-4 py-2" placeholder="Group Name"><br>
      <button class="bg-green-400 px-4 py-2 rounded-sm text-white font-bold focus:outline-none hover:bg-green-500" on:click={create}>
        Create
      </button>
    </div>
  </div>

