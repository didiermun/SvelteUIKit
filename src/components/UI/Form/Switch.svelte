<script>
  export let value = true;
  export let name;
  export let disabled = false;
  import { fade } from "svelte/transition";
  export let tags = { on: "#568AF2", off: "gray" };
</script>

<span style={`background:${Object.values(tags)[value ? 0 : 1]}`}
      class={`${value ? 'True' : 'False'} ${disabled ? 'disabled' : ''}`}
      on:mouseup={_ => {if(!disabled) value = !value}}
      >
  <i></i>
  {#key value}
    <a in:fade>{Object.keys(tags)[value ? 0 : 1]}</a>
  {/key}
  {#if name}
    <input type="hidden" name={name} value={value}/>
  {/if}
</span>

<style>
  span {
    background: #c0c0c0;
    height: 22px;
    width: 55px;
    padding: 4px;
    position: relative;
    display: flex;
    cursor: pointer;
    /* box-sizing: border-box; */
    align-items: center;
    user-select: none;
    border-radius: 30px;
  }
  span,
  a,
  i {
    transition: all 0.35s ease-in-out;
  }
  span a {
    color: white;
    width: 33px;
    font-size: 15px;
    font-weight: 800;
    position: absolute;
    /* background: #c0c0c0; */
    text-transform: uppercase;
    text-align: center;
  }
  span i {
    position: relative;
    width: 22px;
    height: 22px;
    background: white;
    border-radius: 11px;
  }
  span.disabled i {
    background: rgba(255, 255, 255, 0.5);
  }
  span.disabled a {
    color: rgba(255, 255, 255, 0.5);
  }
  span.True i {
    transform: translate(33px, 0);
  }
  span.True a {
    transform: translate(0, 0);
  }
  span.False i {
    transform: translate(0, 0);
  }
  span.False a {
    transform: translate(22px, 0);
  }
</style>
