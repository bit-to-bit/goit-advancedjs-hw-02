import{i as m,C as a,I as n,a as c,b as l}from"./assets/configuration-C-y2kZpa.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";r.settings(m);const t=document.querySelector(".form"),u=({delay:e,shouldResolve:s=!0})=>new Promise((o,i)=>{setTimeout(()=>{console.log(s),s?o(e):i(e)},e)}),p=e=>{e.then(s=>r.success({message:`Fulfilled promise in ${s}ms`,backgroundColor:a,iconUrl:n})).catch(s=>r.error({message:`Rejected promise in ${s}ms`,backgroundColor:c,iconUrl:l}))},O=e=>{e.preventDefault();const s=e.target.delay.value,o=e.target.state.value==="fulfilled";p(u({delay:s,shouldResolve:o})),t.reset()};t.addEventListener("submit",O);
//# sourceMappingURL=2-snackbar.js.map