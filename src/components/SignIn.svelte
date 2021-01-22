<script>
  import { stores } from '@sapper/app';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  const { session } = stores()
  let username;
  let password;
  let error = false;
  let errorStatus = "";
  function logIn(){
    $session.user = true;
    $session.username = username;
    dispatch('loggedIn', true);
  }
  async function verify(){
    if(username && password){
      if(username.length < 20){
    const data = {username, password};
    const options = {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const res = await fetch('user/verify.json', options);
    const info = await res.json();
    if(!info.success){
      error = true;
      errorStatus = "Incorrect Username or Password."
    }
    else{
      logIn();
    }  
    }
    else{
      error = true;
      errorStatus = "Username must be less than 20 characters."
    }
    }

  }
  async function register(){
    if(username && password){
      if(username.length < 20){
    const data = {username, password};
    const options = {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const res = await fetch('user/register.json', options);
    const info = await res.json();
    if(!info.success){
      error = true;
      errorStatus = "User Already Exists."
    }
    else{
      logIn();
    }
    }
    else{
      error = true;
      errorStatus = "Username must be less than 20 characters."
    }
    }
  }
</script>

<style>
</style>

<svelte:head>
  <title>Sign In</title>
</svelte:head>

  <div class="grid justify-items-stretch">
    <div class="justify-self-center text-center mt-5 w-1/2 border-gray-400 rounded-md border-4 p-8">
      <div class="material-icons text-4xl text-gray-500 font-bold" style="font-size: 18vw;">account_circle</div><br>
      {#if error}
        <div class="text-red-500 text-sm mb-2">
          {errorStatus}
        </div>
      {/if}
      <input bind:value={username} type="text" class="mb-4 border-2 border-gray-300 focus:border-blue-400 rounded-md px-4 py-2" placeholder="Username"><br>
      <input bind:value={password} type="password" class="mb-4 border-2 border-gray-300 focus:border-blue-400 rounded-md px-4 py-2" placeholder="Password"><br>
      <button class="bg-green-400 px-4 py-2 rounded-sm text-white font-bold focus:outline-none" on:click={verify}>
        Sign In
      </button>
      <button class="bg-blue-400 px-3 py-2 rounded-sm text-white font-bold focus:outline-none" on:click={register}>
        Register 
      </button>
    </div>
  </div>
