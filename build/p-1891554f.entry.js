import{r as t,h as r}from"./p-06231cfb.js";const e=class{constructor(r){t(this,r)}getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((r=this.last)?` ${r}`:"");var t,r}returnJsx(){return r("h1",void 0!==this.color?{style:{"--text-color":`${this.color}`}}:null,"Hello, World! I'm ",this.getText())}render(){return this.returnJsx()}};e.style=":host{display:block;font-size:x-large;text-align:center;--text-color:#1e1e1e}h1{color:var(--text-color)}";export{e as my_component}