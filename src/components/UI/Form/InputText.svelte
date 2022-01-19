<script>
export let value = '';
export let name = '';
export let pattern = '.+';
export let placeholder = 'hola';
export let disabled = false;
export let validation = v => {};
let obj;
const onChange = e => {
  if(validation(e.target.value, pattern, disabled)){
    obj.style = 'background: rgba(89, 201, 131, 0.3);border-color: rgb(89, 201, 131);';
  } else {
    obj.style = '';
  }
}
</script>
<input type="text" bind:this={obj} name={name ? name : null} bind:value on:input={onChange} title="Error format" {disabled} pattern={pattern ? pattern : null} {placeholder}>
<style>
input {
  border-style: none;
  padding: 4px 15px;
  height: 35px;
  box-sizing: border-box;
  position: relative;
  background: rgba(0,0,0,0.3);
  color: rgba(255,255,255,0.85);
  cursor: pointer;
  transition: all .1s ease-in-out;
  user-select: none;
  border-radius: 3px;
  outline:  none;
  border: 1px rgba(0,0,0,.2) solid;
}
input:focus {
  border: 2px #568AF2 solid;
  background: rgba(86, 138, 242, 0.2);
}
input:invalid {
  background: rgba(255, 99, 71,0.2);
  color: rgb(255, 99, 71);
  border-color: #F56046;
  font-style: 500;
}
input:disabled{
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFAQMAAAC3obSmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5TAErgmmW2AAAAEklEQVR4nGPgYBBgUGBwYGgAAAKiAPmiMaLuAAAAAElFTkSuQmCC');
  animation: ala 2s linear infinite;
  cursor: no-drop;
}
@keyframes ala {
  0% {background-position: 10px 0}
  100% {background-position: 0 0}
}
</style>
