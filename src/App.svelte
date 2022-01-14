<script>
	import { Switch, Form } from "./components/UI/Form/";
	let sw = true;
	let value = {};
	const parseData = q =>
	  Object.entries(q)
	    .map(([key, value]) => `<li>${key}: ${value}</li>`)
	    .join("\n");
	$: console.log(value);
</script>
<Form bind:value>
	<Switch name="flag-0" bind:value={sw}/>
	<Switch name="flag-1" value={false}/>
	<Switch name="hello"/>
	<input name="gg" type="text" value="654"/>
	<input type="radio" name="herr" checked value="0">
	<input type="radio" name="herr" value="01">
	<input type="radio" name="herr" value="02">
	<select name="asd">
		<option value="opt0">0</option>
		<option value="opt1">1</option>
		<option value="opt2">2</option>
	</select>
	<input type="range" min="0" max="222" step="0.2" name="rem"/>
	<input name="a5sd" type="date" value="dfgdfg"/>
	<input name="colorss" type="color"/>
	<input type="file" name="filex"/>
</Form>
{#key data}
 {@html `<ul>${parseData(value)}</ul>`}
{/key}
