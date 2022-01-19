<script>
	import { InputText, Button, Switch } from "./components/UI/Form/";
	let sw = true;
	let value = {};
	let state;
	let pattern;
	// const parseData = q =>
	//   Object.entries(q)
	//     .map(([key, value]) => `<li>${key}: ${value}</li>`)
	//     .join("\n");
	// $: console.log(value);
	const valid = (ret, pattern, isValid) => {
		return ret.regexMatch(pattern);
	}
</script>
<div class="mau">
	  <Switch bind:value={state}/>
		<InputText disabled={!state} placeholder=";o"/>
	  <InputText placeholder="pattern" bind:value={pattern}/>
		<InputText placeholder="string" validation={valid} pattern={pattern}/>
		<Button label="click"/>
</div>
<style>
.mau {
	width: 80%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
