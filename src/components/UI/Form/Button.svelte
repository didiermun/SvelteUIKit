<script>
  export let label = "";
  export let value = "";
  export let type = "text"
</script>
<button>{label}</button>
<style>
  button {
    background: linear-gradient(0deg, #3A3F4B, #363C46);
    border-style: none;
    color: rgba(255, 255, 255, 0.8);
    box-sizing: border-box;
    padding: 4px 25px;
    text-transform: capitalize;
    height: 35px;
    cursor: pointer;
    border-radius: 3px;
    border: .5px rgba(0,0,0,0.5) solid;
  }
</style>
