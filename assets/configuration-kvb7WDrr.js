(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const C of t.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&o(C)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_57)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.96912C7.03867%206.89927%207.12143%206.84386%207.21255%206.80605C7.30366%206.76824%207.40135%206.74878%207.5%206.74878C7.59865%206.74878%207.69633%206.76824%207.78745%206.80605C7.87857%206.84386%207.96133%206.89927%208.031%206.96912L12%2010.9396L15.969%206.96912C16.0387%206.89939%2016.1215%206.84407%2016.2126%206.80633C16.3037%206.7686%2016.4014%206.74917%2016.5%206.74917C16.5986%206.74917%2016.6963%206.7686%2016.7874%206.80633C16.8785%206.84407%2016.9613%206.89939%2017.031%206.96912C17.1007%207.03885%2017.156%207.12164%2017.1938%207.21274C17.2315%207.30385%2017.2509%207.4015%2017.2509%207.50012C17.2509%207.59874%2017.2315%207.69639%2017.1938%207.7875C17.156%207.8786%2017.1007%207.96139%2017.031%208.03112L13.0605%2012.0001L17.031%2015.9691C17.1007%2016.0389%2017.156%2016.1216%2017.1938%2016.2127C17.2315%2016.3039%2017.2509%2016.4015%2017.2509%2016.5001C17.2509%2016.5987%2017.2315%2016.6964%2017.1938%2016.7875C17.156%2016.8786%2017.1007%2016.9614%2017.031%2017.0311C16.9613%2017.1009%2016.8785%2017.1562%2016.7874%2017.1939C16.6963%2017.2316%2016.5986%2017.2511%2016.5%2017.2511C16.4014%2017.2511%2016.3037%2017.2316%2016.2126%2017.1939C16.1215%2017.1562%2016.0387%2017.1009%2015.969%2017.0311L12%2013.0606L8.031%2017.0311C7.96127%2017.1009%207.87848%2017.1562%207.78737%2017.1939C7.69626%2017.2316%207.59861%2017.2511%207.5%2017.2511C7.40138%2017.2511%207.30373%2017.2316%207.21262%2017.1939C7.12151%2017.1562%207.03873%2017.1009%206.969%2017.0311C6.89927%2016.9614%206.84395%2016.8786%206.80621%2016.7875C6.76847%2016.6964%206.74905%2016.5987%206.74905%2016.5001C6.74905%2016.4015%206.76847%2016.3039%206.80621%2016.2127C6.84395%2016.1216%206.89927%2016.0389%206.969%2015.9691L10.9395%2012.0001L6.969%208.03112C6.89915%207.96145%206.84374%207.87869%206.80593%207.78757C6.76812%207.69645%206.74866%207.59877%206.74866%207.50012C6.74866%207.40147%206.76812%207.30379%206.80593%207.21267C6.84374%207.12155%206.89915%207.03879%206.969%206.96912Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_57'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",n="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.75001%2012C3.74979%2010.5518%204.13082%209.12893%204.85482%207.87459C5.57882%206.62026%206.62026%205.57861%207.87445%204.85437C9.12865%204.13013%2010.5514%203.74881%2011.9997%203.74876C13.448%203.7487%2014.8708%204.1299%2016.125%204.85405C16.2972%204.95193%2016.5011%204.97775%2016.6922%204.92586C16.8833%204.87397%2017.0462%204.74858%2017.1452%204.57707C17.2442%204.40555%2017.2714%204.20183%2017.2208%204.01036C17.1702%203.81888%2017.0459%203.65521%2016.875%203.55505C15.0163%202.48192%2012.8554%202.05208%2010.7275%202.33219C8.59964%202.61229%206.62362%203.5867%205.10594%205.10428C3.58826%206.62186%202.61373%208.59782%202.33349%2010.7257C2.05324%2012.8536%202.48294%2015.0145%203.55595%2016.8733C4.62896%2018.732%206.28531%2020.1848%208.26813%2021.0063C10.2509%2021.8278%2012.4494%2021.9721%2014.5226%2021.4168C16.5958%2020.8615%2018.4278%2019.6377%2019.7345%2017.9351C21.0413%2016.2325%2021.7497%2014.1463%2021.75%2012C21.75%2011.8011%2021.671%2011.6104%2021.5303%2011.4697C21.3897%2011.3291%2021.1989%2011.25%2021%2011.25C20.8011%2011.25%2020.6103%2011.3291%2020.4697%2011.4697C20.329%2011.6104%2020.25%2011.8011%2020.25%2012C20.25%2014.1881%2019.3808%2016.2865%2017.8336%2017.8337C16.2865%2019.3809%2014.188%2020.25%2012%2020.25C9.81198%2020.25%207.71356%2019.3809%206.16638%2017.8337C4.61921%2016.2865%203.75001%2014.1881%203.75001%2012Z'%20fill='white'/%3e%3cpath%20d='M23.031%205.03097C23.1007%204.96124%2023.156%204.87846%2023.1938%204.78735C23.2315%204.69624%2023.2509%204.59859%2023.2509%204.49997C23.2509%204.40135%2023.2315%204.3037%2023.1938%204.2126C23.156%204.12149%2023.1007%204.0387%2023.031%203.96897C22.9612%203.89924%2022.8785%203.84392%2022.7873%203.80619C22.6962%203.76845%2022.5986%203.74902%2022.5%203.74902C22.4014%203.74902%2022.3037%203.76845%2022.2126%203.80619C22.1215%203.84392%2022.0387%203.89924%2021.969%203.96897L12%2013.9395L8.03097%209.96897C7.96124%209.89924%207.87846%209.84392%207.78735%209.80619C7.69624%209.76845%207.59859%209.74902%207.49997%209.74902C7.40136%209.74902%207.3037%209.76845%207.2126%209.80619C7.12149%209.84392%207.0387%209.89924%206.96897%209.96897C6.89924%2010.0387%206.84392%2010.1215%206.80619%2010.2126C6.76845%2010.3037%206.74902%2010.4014%206.74902%2010.5C6.74902%2010.5986%206.76845%2010.6962%206.80619%2010.7873C6.84392%2010.8785%206.89924%2010.9612%206.96897%2011.031L11.469%2015.531C11.5386%2015.6008%2011.6214%2015.6562%2011.7125%2015.694C11.8036%2015.7318%2011.9013%2015.7513%2012%2015.7513C12.0986%2015.7513%2012.1963%2015.7318%2012.2874%2015.694C12.3785%2015.6562%2012.4613%2015.6008%2012.531%2015.531L23.031%205.03097Z'%20fill='white'/%3e%3c/svg%3e",c=" #ef4040",f=" #59A10D",l=r,g=n,p={timeout:4e3,backgroundColor:c,messageSize:"16",messageColor:"white",messageLineHeight:"64",iconUrl:l,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"},u={timeout:3e3,messageSize:"16",messageColor:"white",messageLineHeight:"64",resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight"};export{f as C,g as I,c as a,l as b,p as c,u as i};
//# sourceMappingURL=configuration-kvb7WDrr.js.map
