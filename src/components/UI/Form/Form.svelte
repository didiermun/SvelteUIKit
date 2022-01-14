<script>
  export let value = {};
  export let className = "";
  export const style = "";
  export let formData = new FormData();
  let obj;
  const getAttrData = (node, params = { init: false }) => {
    let ret = {};
    const { init } = params;
    if ("childNodes" in node) {
      node.childNodes.forEach(ele => {
        let inp = [HTMLInputElement, HTMLSelectElement].some(
          e => ele instanceof e
        )
          ? ele
          : ele.querySelector
          ? ele.querySelector("[name]")
          : {};
        if (typeof inp === "object" && "type" in inp) {
          switch (inp.type) {
            case "radio":
              inp = Array.from(
                node.querySelectorAll(`input[type="radio"][name="${inp.name}"]`)
              );
              if (inp.some(e => e.checked)) inp = inp.find(e => e.checked);
              break;
            case "checkbox":
              inp.value = inp.checked;
              break;
            case "file":
              formData.append(inp.name, inp.files[0] || "");
              console.log("el pepe");
              inp = {};
              break;
          }
          if ("addEventListener" in inp && init) {
            inp.addEventListener(
              ["text", "url", "email", "tel", "num"].some(t => t === inp.type)
                ? "keyup"
                : inp.type !== "radio"
                ? "change"
                : "click",
              rutine
            );
          }
          if ("name" in inp && "value" in inp) {
            let { name: key, value } = inp;
            if (key) ret[key] = value;
          }
        }
      });
      value = ret;
      Object.entries(ret).forEach(([key, content]) => {
        formData.append(key, String(content));
      });
    }
  };
  const rutine = _ => getAttrData(obj);
</script>
<span
    class={className}
    bind:this={obj}
    on:mouseup={rutine}
    on:click={rutine}
    on:touchend={rutine}
    use:getAttrData={{init: true}}
    style
    >
  <slot/>
</span>
<!-- on:click={rutine} -->
