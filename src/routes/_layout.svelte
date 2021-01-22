<script context="module">
  let signedIn;
  export async function preload(page, session){
    let { user } = session;
    if (!user){
      signedIn = false;
    }
    else{
      signedIn = true;
    }
  }
</script>
<script>
	import Sidebar from '../components/Sidebar.svelte';
	import Sideview from '../components/Sideview.svelte';
  import SignIn from '../components/SignIn.svelte';
	export let segment;
  function authorize(){
    signedIn = true;
  }
</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<style>
*{
  outline: none;
  scroll: smooth;
}


::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


</style>
{#if signedIn}
<body class="bg-gray-100">
<div class="flex">
        <div class="flex-initial">
                <Sidebar {segment}/>
        </div>
        <div class="flex-initial">
                <Sideview/>
        </div>
        
        	        <div class="mx-5 md:flex-grow">
        	                <slot></slot>
        	        </div>
</div>
</body>
{:else}
  <SignIn on:loggedIn={authorize}/>
{/if}
