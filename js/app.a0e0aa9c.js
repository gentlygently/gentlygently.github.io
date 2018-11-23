(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"00d5":function(e,t,o){"use strict";var n=o("8718"),a=o.n(n);a.a},"0253":function(e,t,o){"use strict";var n=o("4368"),a=o.n(n);a.a},"04e6":function(e,t,o){"use strict";var n=o("7b97"),a=o.n(n);a.a},"0763":function(e,t,o){"use strict";var n=o("ad02"),a=o.n(n);a.a},"0cdd":function(e,t,o){},"168b":function(e,t,o){"use strict";var n=o("e94d"),a=o.n(n);a.a},2908:function(e,t,o){"use strict";var n=o("d3af"),a=o.n(n);a.a},"29a0":function(e,t,o){},3993:function(e,t,o){},"3d54":function(e,t,o){"use strict";var n=o("7a76"),a=o.n(n);a.a},4368:function(e,t,o){},"49d1":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",{attrs:{id:"app"}},[o("section",{attrs:{id:"palettesection"}},[o("colour-palette")],1),o("section",{attrs:{id:"imagesection"}},[o("image-colour-picker",{attrs:{"can-pick-colour":e.canPickColour},on:{"colour-picked":e.colourPicked}})],1)])},i=[],r=o("c93e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"colourpalette"},[o("div",{staticClass:"colourpalette-name"},[o("input",{attrs:{type:"text",id:"name",tabindex:"1",placeholder:"Enter a palette name"},domProps:{value:e.palette.name},on:{input:e.nameChanged}})]),o("div",{staticClass:"colourpalette-type"},[o("palette-types",{attrs:{"selected-type-name":e.palette.type,"tab-index":2},on:{"type-selected":e.typeSelected}})],1),o("colour-list",{staticClass:"colourpalette-colours"}),o("div",{staticClass:"colourpalette-preview"},[o("palette-preview",{attrs:{palette:e.palette}})],1),o("ul",{staticClass:"colourpalette-actions"},[o("li",{staticClass:"extract"},[o("button",{staticClass:"iconbutton fas fa-magic",attrs:{title:"Extract colours from image (magic!)",disabled:!e.canExtractColours},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.extractModalOpen=!0}}})]),o("li",{staticClass:"import"},[o("button",{staticClass:"iconbutton fas fa-file-import",attrs:{title:"Import XML"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.importModalOpen=!0}}})]),o("li",{staticClass:"code"},[o("button",{staticClass:"iconbutton fas fa-code",attrs:{title:"Get XML"},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.codeModalOpen=!0}}})]),o("li",{staticClass:"discard"},[o("button",{staticClass:"iconbutton fas fa-trash-alt",attrs:{title:"Delete palette"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.discard(t)}}})]),o("li",{staticClass:"add"},[o("button",{staticClass:"iconbutton fas fa-plus",attrs:{title:"Add colour (+)",disabled:!e.canAddColour},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.add(t)}}})])]),e.codeModalOpen?o("modal",{attrs:{width:"54rem"},on:{close:function(t){e.codeModalOpen=!1}}},[o("get-code")],1):e._e(),e.importModalOpen?o("modal",{attrs:{width:"54rem"},on:{close:function(t){e.importModalOpen=!1}}},[o("import-code",{on:{close:function(t){e.importModalOpen=!1}}})],1):e._e(),e.extractModalOpen?o("modal",{attrs:{width:"54rem"},on:{close:function(t){e.extractModalOpen=!1}}},[o("extract-colours",{on:{close:function(t){e.extractModalOpen=!1}}})],1):e._e()],1)},c=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",{staticClass:"colourlist"},[o("draggable",{staticClass:"colourlist-draggable",attrs:{options:{chosenClass:"colour--dragging",delay:25}},on:{change:e.colourMoved},model:{value:e.colours,callback:function(t){e.colours=t},expression:"colours"}},e._l(e.colours,function(e,t){return o("Colour",{key:e.id,staticClass:"colourlist-colour",attrs:{colour:e,index:t}})}))],1)},u=[],d=(o("20d6"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"colour",class:e.containerClasses,style:{"grid-column":e.column,"grid-row":e.row},attrs:{title:e.colour.hex+" (double click to edit)"},on:{click:e.click}},[o("div",{staticClass:"colour-swatch",style:{"background-color":e.colour.hex},on:{dblclick:function(t){e.isPickerOpen=!0}}}),o("div",{staticClass:"colour-remove",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.remove(t)}}},[o("span",{staticClass:"fas fa-times"})]),e.isPickerOpen?o("colour-picker",{staticClass:"colour-picker",attrs:{hex:e.colour.hex},on:{"colour-picked":e.colourPicked,done:function(t){e.isPickerOpen=!1}}}):e._e()],1)}),p=[],m=(o("c5f6"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"colourpicker",on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.done(t):null},click:function(e){e.stopPropagation(),e.preventDefault()}}},[o("sketch-colour-picker",{attrs:{"disable-alpha":!0,value:e.hex,presetColors:[]},on:{input:e.colourPicked}}),o("div",{staticClass:"colourpicker-buttons"},[o("button",{staticClass:"colourpicker-done",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.done(t)}}},[e._v("Done")])])],1)}),f=[],h=o("c345"),v={name:"ColourPIcker",props:{hex:{type:String,required:!0}},components:{"sketch-colour-picker":h["Sketch"]},methods:{colourPicked:function(e){e&&e.hex&&this.$emit("colour-picked",e.hex)},done:function(){this.$emit("done")}},created:function(){window.addEventListener("click",this.done,!1)},destroyed:function(){window.removeEventListener("click",this.done)}},g=v,C=(o("fe10"),o("2877")),b=Object(C["a"])(g,m,f,!1,null,null,null);b.options.__file="ColourPicker.vue";var x=b.exports,y={name:"Colour",props:{colour:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{isPickerOpen:!1}},components:{ColourPicker:x},computed:{containerClasses:function(){var e=[];return this.colour.isSelected&&e.push("colour--selected"),this.isPickerOpen&&e.push("colour--pickeropen"),e},column:function(){return Math.floor(this.index/5)+1},row:function(){return this.index%5+1}},methods:{click:function(){this.$store.commit("palette/selectColour",{colour:this.colour})},colourPicked:function(e){this.$store.commit("palette/updateColour",{colour:this.colour,hex:e})},remove:function(){this.$store.commit("palette/removeColour",{colour:this.colour})}}},w=y,k=(o("9d1c"),Object(C["a"])(w,d,p,!1,null,"031363a5",null));k.options.__file="Colour.vue";var _=k.exports,O=o("1516"),P=o.n(O),E={name:"ColourList",components:{Colour:_,draggable:P.a},computed:{colours:{get:function(){return this.$store.state.palette.colours},set:function(e){}},selectedColourIndex:function(){return this.colours.findIndex(function(e){return e.isSelected})}},methods:{getColour:function(e){return e<0||e>=this.colours.length?null:this.colours[e]},getValidColumnIndex:function(e,t){var o=e+t;if(o<0||o>=this.colours.length)return-1;var n=Math.floor(e/5),a=Math.floor(o/5);return a===n?o:-1},getValidRowIndex:function(e,t){var o=e+t;if(o<0||o>=this.colours.length)return-1;var n=Math.floor(e%5),a=Math.floor(o%5);return a===n?o:-1},select:function(e){e&&this.$store.commit("palette/selectColour",{colour:e})},selectByIndex:function(e){this.select(this.getColour(e))},move:function(e,t){this.$store.commit("palette/moveColour",{colour:e,newIndex:t})},moveSelectedColourToIndex:function(e){e<0||this.move(this.colours[this.selectedColourIndex],e)},colourMoved:function(e){this.move(this.colours[e.moved.oldIndex],e.moved.newIndex)},keyUp:function(e){if("body"===e.target.tagName.toLowerCase()){var t=e.getModifierState("Shift")?this.moveSelectedColourToIndex:this.selectByIndex;switch(e.key){case"Down":case"ArrowDown":return void t(this.getValidColumnIndex(this.selectedColourIndex,1));case"Up":case"ArrowUp":return void t(this.getValidColumnIndex(this.selectedColourIndex,-1));case"Left":case"ArrowLeft":return void t(this.getValidRowIndex(this.selectedColourIndex,-5));case"Right":case"ArrowRight":t(this.getValidRowIndex(this.selectedColourIndex,5))}}}},created:function(){window.addEventListener("keyup",this.keyUp,!1)},destroyed:function(){window.removeEventListener("keyup",this.keyUp)}},I=E,$=(o("a3fa"),Object(C["a"])(I,l,u,!1,null,"43510ae7",null));$.options.__file="ColourList.vue";var M=$.exports,T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"getcode"},[o("div",{staticClass:"getcode-codecontainer"},[o("pre",{ref:"code",staticClass:"getcode-code"},[e._v(e._s(e.xml))])]),o("transition",[e.copied?e._e():o("button",{staticClass:"getcode-copy",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copy(t)}}},[e._v("Copy to clipboard")]),e.copied?o("button",{staticClass:"getcode-copy getcode-copy--copied",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.copy(t)}}},[e._v("\n      Copied\n      "),o("span",{staticClass:"fas fa-check"})]):e._e()])],1)},D=[],S=(o("ac6a"),o("7f7f"),o("92d7")),L=o.n(S),j={name:"GetCode",data:function(){return{copied:!1}},computed:{xml:function(){var e=this.$store.state.palette,t='<color-palette name="'.concat(L.a.encode(e.name,{useNamedReferences:!0}),'" type="').concat(e.type,'">\n');return e.colours.forEach(function(e){return t+="    <color>".concat(e.hex,"</color>\n")}),t+"</color-palette>"}},methods:{copy:function(){if(document.body.createTextRange){var e=document.body.createTextRange();e.moveToElementText(this.$refs.code),e.select()}else if(window.getSelection){var t=window.getSelection(),o=document.createRange();o.selectNodeContents(this.$refs.code),t.removeAllRanges(),t.addRange(o)}else console.log("Text selection not supported");document.execCommand("copy"),this.copied=!0},xmlEscape:function(e){var t=document.createElement("textarea");return t.value=e,t.innerHTML}},created:function(){this.copied=!1}},A=j,F=(o("168b"),Object(C["a"])(A,T,D,!1,null,"440ed2dd",null));F.options.__file="GetCode.vue";var N=F.exports,z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"extractcolours"},[o("div",{staticClass:"extractcolours-fields"},[o("div",{staticClass:"extractcolours-field extractcolours-number"},[o("label",{staticClass:"extractcolours-numberlabel",attrs:{for:"numberOfColours"}},[e._v("Number of colours to extract from image")]),o("div",{staticClass:"extractcolours-numbercontrol",class:e.numberControlClass},[o("button",{staticClass:"iconbutton extractcolours-numberstep extractcolours-numberstep--down fas fa-minus",attrs:{disabled:e.numberOfColoursToExtract<=1},on:{click:function(t){e.numberOfColoursToExtract--}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.numberOfColoursToExtract,expression:"numberOfColoursToExtract"}],ref:"number",staticClass:"extractcolours-numberinput",attrs:{id:"numberofcolours",type:"number",min:"1",max:e.maximumColoursToExtract,tabindex:"100"},domProps:{value:e.numberOfColoursToExtract},on:{focus:function(t){e.numberHasFocus=!0},blur:function(t){e.numberHasFocus=!1},input:function(t){t.target.composing||(e.numberOfColoursToExtract=t.target.value)}}}),o("button",{staticClass:"iconbutton extractcolours-numberstep extractcolours-numberstep--up fas fa-plus",attrs:{disabled:e.numberOfColoursToExtract>=e.maximumColoursToExtract},on:{click:function(t){e.numberOfColoursToExtract++}}})])]),o("div",{staticClass:"extractcolours-field extractcolours-action"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"extractcolours-actioninput",attrs:{type:"radio",name:"action",id:"replaceColours",value:"replaceColours",tabindex:"101"},domProps:{checked:e._q(e.action,"replaceColours")},on:{change:function(t){e.action="replaceColours"}}}),e._m(0)]),o("div",{staticClass:"extractcolours-field extractcolours-action",class:e.addColoursClass},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"extractcolours-actioninput",attrs:{type:"radio",name:"action",id:"addColours",value:"addColours",disabled:!e.canAddColours,tabinex:"101"},domProps:{checked:e._q(e.action,"addColours")},on:{change:function(t){e.action="addColours"}}}),o("label",{staticClass:"extractcolours-actionlabel",attrs:{for:"addColours",title:e.addColoursTitle}},[o("span",{staticClass:"extractcolours-radio"}),e._v("Add to existing colours\n      ")])])]),o("button",{staticClass:"extractcolours-button extractcolours-button--extract",on:{click:e.extract}},[e._v("Extract")]),o("button",{staticClass:"extractcolours-button extractcolours-button--cancel",on:{click:function(t){e.$emit("close")}}},[e._v("Cancel")])])},V=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("label",{staticClass:"extractcolours-actionlabel",attrs:{for:"replaceColours"}},[o("span",{staticClass:"extractcolours-radio"}),e._v("Replace existing colours\n      ")])}],R=(o("6b54"),o("559d")),U=o.n(R),H=o("2f62"),q={name:"ExtractColours",data:function(){return{replaceExisting:!0,numberHasFocus:!1,numberOfColours:4}},computed:Object(r["a"])({},Object(H["b"])({canAddColours:"palette/canAddColour",hasImage:"image/hasImage"}),Object(H["c"])({image:function(e){return e.image.image},colours:function(e){return e.palette.colours},maximumColours:function(e){return e.palette.maximumColours}}),{action:{get:function(){return!this.canAddColours||this.replaceExisting?"replaceColours":"addColours"},set:function(e){this.replaceExisting="replaceColours"===e}},addColoursClass:function(){return this.canAddColours?"":"extractcolours-field--disabled"},addColoursTitle:function(){return this.canAddColours?"":"The colour palette is already full"},maximumColoursToExtract:function(){return"replaceColours"===this.action?this.maximumColours:this.maximumColours-this.colours.length},numberControlClass:function(){return this.numberHasFocus?"extractcolours-numbercontrol--focus":""},numberOfColoursToExtract:{get:function(){return this.numberOfColours>this.maximumColoursToExtract?this.maximumColoursToExtract:this.numberOfColours},set:function(e){e>this.maximumColoursToExtract?e=this.maximumColoursToExtract:e<1&&(e=1),this.numberOfColours=e}}}),methods:{extract:function(){var e=this,t=(new U.a).getPalette(this.image,this.numberOfColoursToExtract),o=t.map(function(t){return"#"+e.toHex(t[0])+e.toHex(t[1])+e.toHex(t[2])}),n="palette/"+this.action;this.$store.commit(n,{hexes:o}),this.$emit("close")},toHex:function(e){var t=e.toString(16).toUpperCase();return 1===t.length?"0"+t:t}},mounted:function(){this.$refs.number.focus()}},K=q,B=(o("ee33"),Object(C["a"])(K,z,V,!1,null,"422be4f2",null));B.options.__file="ExtractColours.vue";var X=B.exports,W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"importcode"},[o("div",{staticClass:"importcode-codecontainer"},[o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.xml,expression:"xml",modifiers:{trim:!0}}],ref:"code",staticClass:"importcode-code",class:e.codeClasses,attrs:{placeholder:"Paste a <color-palette>",autocorrect:"off",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.xml},on:{input:function(t){t.target.composing||(e.xml=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.hasValidationMessage,expression:"hasValidationMessage"}],staticClass:"importcode-validationmessage"},[e._v(e._s(e.validationMessage))])]),o("button",{staticClass:"importcode-button importcode-button--import",attrs:{disabled:!e.isValid},on:{click:e.importXml}},[e._v("Import")]),o("button",{staticClass:"importcode-button importcode-button--cancel",on:{click:function(t){e.$emit("close")}}},[e._v("Cancel")])])},Z=[],G=(o("7514"),o("8afe")),Y=new DOMParser,J=/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i,Q={name:"ImportCode",data:function(){return{xml:"",isValid:!1,validationMessage:"",palette:{}}},computed:{hasCode:function(){return!!this.xml},hasValidationMessage:function(){return!!this.validationMessage},codeClasses:function(){var e=[];return this.hasCode&&!this.isValid&&e.push("importcode-code--invalid"),this.hasValidationMessage&&e.push("importcode-code--validationmessage"),e}},methods:{invalid:function(e){this.isValid=!1,this.validationMessage=e,this.palette={}},importXml:function(e){this.$store.commit("palette/import",this.palette),this.$emit("close")}},watch:{xml:function(e){if(!e)return this.invalid("");var t=Y.parseFromString(e,"application/xml"),o=t.documentElement;if(o.getElementsByTagName("parsererror").length)return this.invalid("Unable to parse XML");if("color-palette"!==o.tagName)return this.invalid("Expected a root element of <color-palette>");var n=Object(G["a"])(o.children).filter(function(e){return"color"===e.tagName}).map(function(e){return e.innerHTML.trim()});if(!n.length)return this.invalid("Expected one or more <color> elements");if(n.filter(function(e){return!e}).length>0)return this.invalid("All <color> elements must contain a valid colour");var a=n.find(function(e){return!J.test(e)});if(a)return this.invalid("'".concat(a,"' is not a valid colour"));this.isValid=!0,this.validationMessage="",this.palette={name:o.getAttribute("name"),type:o.getAttribute("type"),colours:n}}},mounted:function(){this.$refs.code.focus()}},ee=Q,te=(o("04e6"),Object(C["a"])(ee,W,Z,!1,null,"133a3d09",null));te.options.__file="ImportCode.vue";var oe=te.exports,ne=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"modal"}},[o("div",{staticClass:"modal-mask"},[o("div",{ref:"wrapper",staticClass:"modal-wrapper",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.wrapperMouseDown(t)},mouseup:function(t){return t.target!==t.currentTarget?null:e.wrapperMouseUp(t)},mouseleave:e.wrapperMouseLeave}},[o("div",{staticClass:"modal-container",style:{width:e.width},on:{click:function(e){e.stopPropagation()}}},[o("button",{staticClass:"modal-close iconbutton fas fa-times",on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("close")}}}),e._t("default")],2)])])])},ae=[],ie={name:"Modal",props:{width:{type:String}},data:function(){return{isMouseDownOnWrapper:!1}},methods:{keyUp:function(e){"input"!==e.target.tagName.toLowerCase()&&"Escape"===e.key&&this.$emit("close")},wrapperMouseDown:function(){this.isMouseDownOnWrapper=!0},wrapperMouseLeave:function(){this.isMouseDownOnWrapper=!1},wrapperMouseUp:function(){this.isMouseDownOnWrapper&&(this.isMouseDownOnWrapper=!1,this.$emit("close"))}},created:function(){window.addEventListener("keyup",this.keyUp,!1)},destroyed:function(){window.removeEventListener("keyup",this.keyUp)}},re=ie,se=(o("0253"),Object(C["a"])(re,ne,ae,!1,null,"a014dcd6",null));se.options.__file="Modal.vue";var ce=se.exports,le=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"palettepreview",style:{background:e.backgroundStyle}},[e._v(" ")])},ue=[],de={name:"PalettePreview",props:{palette:{type:Object,required:!0}},computed:{backgroundStyle:function(){switch(this.palette.type){case"regular":var e=100/this.palette.colours.length,t=0;return"linear-gradient(to right, ".concat(this.palette.colours.map(function(o){return"".concat(o.hex," ").concat(t,"%, ").concat(o.hex," ").concat(t+=e,"%")}).join(", "),")");case"ordered-diverging":case"ordered-sequential":return"linear-gradient(to right, ".concat(this.palette.colours.map(function(e){return e.hex}).join(", "),")")}return""}}},pe=de,me=(o("3d54"),Object(C["a"])(pe,le,ue,!1,null,"75588f08",null));me.options.__file="PalettePreview.vue";var fe=me.exports,he=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"palettetypes",on:{keyup:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.stopPropagation(),t.preventDefault(),e.arrowDown(t)):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.stopPropagation(),t.preventDefault(),e.arrowUp(t)):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.stopPropagation(),t.preventDefault(),e.toggleList(t)):null}],click:function(e){e.stopPropagation()}}},[o("div",{ref:"select",staticClass:"palettetypes-select",attrs:{tabindex:e.tabIndex>=0?e.tabIndex:""},on:{click:e.toggleList}},[o("div",{staticClass:"palettetypes-selectedtype"},[o("palette-type",{attrs:{type:e.selectedType}})],1),e._m(0)]),o("ul",{staticClass:"palettetypes-list",class:e.listClass},e._l(e.types,function(t){return o("li",{key:t.name,staticClass:"palettetypes-type",class:t.isSelected?"palettetypes-type--selected":"",on:{click:function(o){e.typeClicked(t)}}},[o("palette-type",{attrs:{type:t}})],1)}))])},ve=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"palettetypes-selectindicator"},[o("span",{staticClass:"fas fa-chevron-down"})])}],ge=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"palettetype",class:"palettetype--"+e.type.classModifier},[o("div",{class:"palettetype-example--"+e.type.classModifier},[e._v(" ")]),o("label",{staticClass:"palettetype-label"},[e._v(e._s(e.type.displayName))])])},Ce=[],be={name:"PaletteType",props:{type:{type:Object,required:!0}}},xe=be,ye=(o("00d5"),Object(C["a"])(xe,ge,Ce,!1,null,"50b1db5e",null));ye.options.__file="PaletteType.vue";var we=ye.exports,ke={name:"PaletteTypes",props:{selectedTypeName:{type:String,required:!0},tabIndex:{type:Number,required:!1,default:-1}},data:function(){return{isListOpen:!1,types:[this.createType("regular","regular","Regular"),this.createType("ordered-sequential","sequential","Sequential"),this.createType("ordered-diverging","diverging","Diverging")]}},components:{PaletteType:we},methods:{arrowDown:function(e){var t=this.types.findIndex(function(e){return e.isSelected});t<this.types.length-1&&this.typeSelected(this.types[t+1].name)},arrowUp:function(e){var t=this.types.findIndex(function(e){return e.isSelected});t>0&&this.typeSelected(this.types[t-1].name)},createType:function(e,t,o){return{name:e,classModifier:t,displayName:o,isSelected:e===this.selectedTypeName}},closeList:function(){this.isListOpen=!1},toggleList:function(){this.isListOpen=!this.isListOpen},typeClicked:function(e){this.typeSelected(e.name),this.closeList(),this.$refs.select.focus()},typeSelected:function(e){this.$emit("type-selected",e)}},computed:{listClass:function(){return this.isListOpen?"palettetypes-list--open":""},selectedType:function(){return this.types.find(function(e){return e.isSelected})},selectedTypeValue:{get:function(){return this.selectedTypeName},set:function(e){this.$emit("type-selected",e)}}},watch:{selectedTypeName:function(e){this.types.forEach(function(t){return t.isSelected=t.name===e})},isListOpen:function(e){e?window.addEventListener("click",this.closeList,!1):window.removeEventListener("click",this.closeList)}}},_e=ke,Oe=(o("e601"),Object(C["a"])(_e,he,ve,!1,null,"47508b97",null));Oe.options.__file="PaletteTypes.vue";var Pe=Oe.exports,Ee={name:"ColourPalette",data:function(){return{codeModalOpen:!1,extractModalOpen:!1,importModalOpen:!1}},computed:Object(r["a"])({},Object(H["b"])({canAddColour:"palette/canAddColour",canExtractColours:"image/hasImage"}),{palette:function(){return this.$store.state.palette}}),components:{ColourList:M,GetCode:N,ExtractColours:X,ImportCode:oe,Modal:ce,PalettePreview:fe,PaletteTypes:Pe},methods:{add:function(){this.$store.dispatch("palette/addColour")},nameChanged:function(e){this.$store.commit("palette/setName",{name:e.target.value})},typeSelected:function(e){this.$store.commit("palette/setType",{type:e})},discard:function(){confirm("Are you sure you want to discard this palette?")&&this.$store.commit("palette/reset")},keyUp:function(e){"body"===e.target.tagName.toLowerCase()&&"+"===e.key&&this.add()}},created:function(){window.addEventListener("keyup",this.keyUp,!1)},destroyed:function(){window.removeEventListener("keyup",this.keyUp)}},Ie=Ee,$e=(o("0763"),Object(C["a"])(Ie,s,c,!1,null,"debc8f6e",null));$e.options.__file="ColourPalette.vue";var Me=$e.exports,Te=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"imagecolourpicker"},[o("div",{ref:"canvas",staticClass:"imagecolourpicker-canvas"},[o("image-canvas",{attrs:{image:e.image,scale:e.scale,"can-pick-colour":e.canPickColour},on:{"colour-picked":e.colourPicked,"file-dropped":e.fileSelected,zoom:e.zoom}})],1),o("div",{staticClass:"imagecolourpicker-toolbar"},[o("ul",{staticClass:"controls"},[o("li",{staticClass:"zoomImage"},[o("image-zoom",{attrs:{scale:e.scale,range:e.zoomRange,enabled:e.hasImage},on:{zoom:e.zoom}})],1),o("li",{staticClass:"selectFile"},[o("image-file-open",{on:{"file-selected":e.fileSelected}})],1)])])])},De=[],Se=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"container",staticClass:"imagecanvas",class:e.dropClass,on:{dragenter:function(t){return t.preventDefault(),e.dragEnter(t)},dragover:function(t){return t.preventDefault(),e.dragEnter(t)},dragleave:function(t){return t.preventDefault(),e.dragLeave(t)},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.drop(t)}}},[o("div",{staticClass:"imagecanvas-canvas",on:{wheel:function(t){return t.shiftKey?e.wheel(t):null}}},[o("scalable-image",{directives:[{name:"show",rawName:"v-show",value:e.hasImage,expression:"hasImage"}],attrs:{"can-pick-colour":e.canPickColour,image:e.image,scale:e.scale},on:{"colour-picked":e.colourPicked}})],1),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.hasImage,expression:"!hasImage"}],staticClass:"canvashint"},[o("div",{staticClass:"canvashint-container"},[o("div",{staticClass:"canvashint-text"},[o("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.openFile(t)}}},[e._v("Open")]),e._v(", paste or drop an image to get started\n      ")])])]),o("div",{ref:"droptarget",staticClass:"droptarget"},[e._m(0)])])},Le=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"droptarget-textwrapper"},[o("div",{staticClass:"droptarget-text"},[o("span",{staticClass:"droptarget-icon fas fa-hand-point-down"}),o("br"),e._v("Drop image here\n      ")])])}],je=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"scalableimage"},[o("div",{staticClass:"scalableimage-hackyverticalspacer"},[e._v(" ")]),o("div",{staticClass:"scalableimage-image",class:{"scalableimage-image--active":e.canPickColour}},[o("image-colour-swatch",{directives:[{name:"show",rawName:"v-show",value:e.canPickColour&&e.currentColour,expression:"canPickColour && currentColour"}],attrs:{colour:e.currentColour,"mouse-position":e.mousePosition}}),o("canvas",{ref:"image",on:{click:e.click,mouseover:e.setMouseAndColour,mousemove:e.setMouseAndColour,mouseleave:e.resetMouseAndColour}})],1)])},Ae=[],Fe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"imagecolourswatch",style:e.swatchStyle},[e._v(" ")])},Ne=[],ze={name:"ImageColourSwatch",props:{colour:{type:String,required:!0},mousePosition:{type:Object,required:!0}},computed:{swatchStyle:function(){return{"background-color":this.colour,top:this.mousePosition.y-40+"px",left:this.mousePosition.x+10+"px"}}}},Ve=ze,Re=(o("9011"),Object(C["a"])(Ve,Fe,Ne,!1,null,"60a4ddd2",null));Re.options.__file="ImageColourSwatch.vue";var Ue=Re.exports,He={x:0,y:0},qe={name:"ScalableImage",props:{canPickColour:{type:Boolean},image:{type:HTMLImageElement,required:!0},scale:{type:Number,required:!0}},data:function(){return{currentColour:"",mousePosition:He}},computed:{height:function(){return this.image.height*this.scale},width:function(){return this.image.width*this.scale},activeClass:function(){return this.canPickColour?"active":""}},methods:{drawImage:function(){var e=this.$refs.image,t=this.getDrawingContext();e.width=this.width,e.height=this.height,t.scale(this.scale,this.scale),t.drawImage(this.image,0,0)},getDrawingContext:function(){return this.$refs.image.getContext("2d")},click:function(e){this.canPickColour&&(this.setMouseAndColour(e),this.currentColour&&this.$emit("colour-picked",this.currentColour))},toHex:function(e){var t=e.toString(16).toUpperCase();return 1===t.length?"0"+t:t},setMouseAndColour:function(e){this.setCurrentColour(e),this.setMousePosition(e)},resetMouseAndColour:function(){this.currentColour="",this.mousePosition=He},setCurrentColour:function(e){var t=this.getDrawingContext().getImageData(e.offsetX,e.offsetY,1,1).data;0!==t[3]?this.currentColour="#"+this.toHex(t[0])+this.toHex(t[1])+this.toHex(t[2]):this.currentColour=""},setMousePosition:function(e){this.mousePosition={x:e.offsetX,y:e.offsetY}}},watch:{image:function(){this.resetMouseAndColour(),this.drawImage()},scale:function(){this.resetMouseAndColour(),this.drawImage()}},components:{ImageColourSwatch:Ue}},Ke=qe,Be=(o("81c4"),Object(C["a"])(Ke,je,Ae,!1,null,"4867d58e",null));Be.options.__file="ScalableImage.vue";var Xe=Be.exports,We=new n["a"],Ze={name:"ImageCanvas",props:{canPickColour:Boolean,image:HTMLImageElement,scale:Number},data:function(){return{isDropHighlightActive:!1}},components:{ScalableImage:Xe},computed:{hasImage:function(){return this.image.width&&this.image.height},dropClass:function(){return this.isDropHighlightActive?"imagecanvas--drop":""}},methods:{dragEnter:function(e){(e.dataTransfer.files.length||Object(G["a"])(e.dataTransfer.items).find(function(e){return"file"===e.kind&&e.type.indexOf(!1)}))&&(this.isDropHighlightActive=!0,e.dataTransfer.dropEffect="copy")},dragLeave:function(e){e.target===this.$refs.droptarget&&(this.isDropHighlightActive=!1)},drop:function(e){this.isDropHighlightActive=!1,e.dataTransfer&&e.dataTransfer.files&&this.$emit("file-dropped",e.dataTransfer.files)},colourPicked:function(e){this.$emit("colour-picked",e)},openFile:function(){We.$emit("open-image-file")},preventDefaults:function(e){e.preventDefault(),e.stopPropagation()},wheel:function(e){e.deltaY&&(this.preventDefaults(e),this.$emit("zoom",this.scale*(e.deltaY>0?.9:1.1)))}},created:function(){window.addEventListener("dragover",this.preventDefaults,!1),window.addEventListener("drop",this.preventDefaults,!1)},destroyed:function(){window.removeEventListener("dragover",this.preventDefaults),window.removeEventListener("drop",this.preventDefaults)}},Ge=Ze,Ye=(o("7918"),Object(C["a"])(Ge,Se,Le,!1,null,"6fd51e7f",null));Ye.options.__file="ImageCanvas.vue";var Je=Ye.exports,Qe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"imagefileopen"},[o("label",{ref:"label",attrs:{for:"selectImage"}},[o("input",{staticStyle:{display:"none"},attrs:{id:"selectImage",type:"file"},on:{input:e.input}}),o("button",{staticClass:"imagefileopen--button iconbutton fas fa-folder-open",attrs:{title:"Open image..."},on:{click:function(t){return t.preventDefault(),e.click(t)}}})])])},et=[],tt={name:"ImageFileOpen",methods:{input:function(e){this.$emit("file-selected",e.target.files)},click:function(){this.$refs.label.click()}},created:function(){We.$on("open-image-file",this.click)},destroyed:function(){We.$off("open-image-file",this.click)}},ot=tt,nt=(o("e563"),Object(C["a"])(ot,Qe,et,!1,null,"76b73628",null));nt.options.__file="ImageFileOpen.vue";var at=nt.exports,it=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"imagezoom"},[o("button",{staticClass:"iconbutton imagezoom-out fas fa-image",attrs:{title:"Zoom out (Shift + Scroll-down)",disabled:!e.enabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomOut(t)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.sliderValue,expression:"sliderValue"}],staticClass:"imagezoom-slider",attrs:{type:"range",min:"1",max:"100",disabled:!e.enabled},domProps:{value:e.sliderValue},on:{mousedown:function(t){e.sliderActive=!0},mouseup:function(t){e.sliderActive=!1},__r:function(t){e.sliderValue=t.target.value}}}),o("button",{staticClass:"iconbutton imagezoom-in fas fa-image",attrs:{title:"Zoom in (Shift + Scroll-up)",disabled:!e.enabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomIn(t)}}}),o("div",{staticClass:"imagezoom-percentage"},[e._v(e._s(e.percentage)+"%")])])},rt=[],st={name:"ImageZoom",props:{scale:Number,range:Object,enabled:Boolean},data:function(){return{sliderValue:50,sliderActive:!1}},computed:{percentage:function(){return Math.round(100*this.scale)}},watch:{scale:function(e){this.sliderActive||(this.sliderValue=e<1?49*(e-this.range.min)/(1-this.range.min)+1:50*(e-1)/(this.range.max-1)+50)},sliderValue:function(e){var t=e<50?(e-1)*(1-this.range.min)/49+this.range.min:(e-50)*(this.range.max-1)/50+1;this.$emit("zoom",t)}},methods:{input:function(e,t){this.sliderValue=e.target.value},zoomIn:function(){this.enabled&&this.$emit("zoom",1.1*this.scale)},zoomOut:function(){this.enabled&&this.$emit("zoom",.9*this.scale)}}},ct=st,lt=(o("6902"),Object(C["a"])(ct,it,rt,!1,null,"15aa6c43",null));lt.options.__file="ImageZoom.vue";var ut=lt.exports,dt={name:"ImageColourPicker",props:{canPickColour:Boolean},computed:Object(r["a"])({},Object(H["b"])({hasImage:"image/hasImage"}),Object(H["c"])({image:function(e){return e.image.image},scale:function(e){return e.image.scale},zoomRange:function(e){return e.image.zoomRange}})),components:{ImageCanvas:Je,ImageFileOpen:at,ImageZoom:ut},methods:{colourPicked:function(e){this.$store.dispatch("palette/updateSelectedColour",{hex:e})},displayFirstImage:function(e){this.$store.dispatch("image/displayFirstImage",{files:e,canvas:this.$refs.canvas})},fileSelected:function(e){this.displayFirstImage(Object(G["a"])(e))},paste:function(e){if(e.clipboardData&&e.clipboardData.items&&"INPUT"!==e.target.tagName&&"TEXTAREA"!==e.target.tagName){var t=Object(G["a"])(e.clipboardData.items).filter(function(e){return"file"===e.kind}).map(function(e){return e.getAsFile()});this.displayFirstImage(t)}},zoom:function(e){this.$store.commit("image/zoom",{scale:e})}},created:function(){window.addEventListener("paste",this.paste,!1)},destroyed:function(){window.removeEventListener("paste",this.paste)}},pt=dt,mt=(o("2908"),Object(C["a"])(pt,Te,De,!1,null,"55b4b249",null));mt.options.__file="ImageColourPicker.vue";var ft=mt.exports,ht={name:"app",components:{ColourPalette:Me,ImageColourPicker:ft},computed:Object(r["a"])({},Object(H["b"])({selectedColour:"palette/selectedColour"}),{canPickColour:function(){return!!this.selectedColour}}),methods:{colourPicked:function(e){this.$store.dispatch("palette/updateSelectedColour",{hex:e})}}},vt=ht,gt=(o("7c55"),Object(C["a"])(vt,a,i,!1,null,null,null));gt.options.__file="App.vue";var Ct=gt.exports,bt={image:new Image,scale:1,zoomRange:{min:.1,max:10}},xt={hasImage:function(e){return e.image.width>0&&e.image.height>0}},yt={setImage:function(e,t){var o=t.image,n=t.scale;e.image=o,e.scale=n},zoom:function(e,t){var o=t.scale;o<e.zoomRange.min?o=e.zoomRange.min:o>e.zoomRange.max&&(o=e.zoomRange.max),e.scale=o}},wt={displayFirstImage:function(e,t){var o=t.files,n=t.canvas,a=o.find(function(e){return e.type.indexOf("image/")>-1});if(a){var i=new FileReader;i.onload=function(){var t=new Image;t.onload=function(){var t=1,o=n.clientWidth,a=n.clientHeight;if(o<this.width||a<this.height){var i=o/this.width,r=a/this.height;t=Math.floor(100*Math.min(i,r))/100}e.commit("setImage",{image:this,scale:t})},t.src=i.result},i.readAsDataURL(a)}else console.log("File list did not contain image")}},kt={namespaced:!0,state:bt,getters:xt,mutations:yt,actions:wt},_t=1,Ot="regular";function Pt(e,t){return e=e||["#FFFFFF"],e.map(function(e,o){return Et(e,t&&0===o)})}function Et(e,t){return e||(e="#FFFFFF"),{id:_t++,hex:e.toUpperCase(),isSelected:!0===t}}var It={name:"",type:Ot,maximumColours:20,colours:Pt(null,!0)},$t={canAddColour:function(e){return e.colours.length<e.maximumColours},selectedColour:function(e){return e.colours.find(function(e){return e.isSelected})}},Mt={addColour:function(e){e.colours.length>=e.maximumColours||e.colours.push(Et("#FFFFFF"))},addColours:function(e,t){var o=t.hexes,n=e.maximumColours-e.colours.length;o.length>n&&(o=o.slice(0,n)),o.forEach(function(t){return e.colours.push(Et(t))})},import:function(e,t){var o=t.name,n=t.type,a=t.colours;e.name=o,e.type=n,e.colours=Pt(a)},moveColour:function(e,t){var o=t.colour,n=t.newIndex,a=e.colours,i=a.indexOf(o);a.splice(n,0,a.splice(i,1)[0]),e.colours=a},removeColour:function(e,t){var o=t.colour;e.colours=e.colours.filter(function(e){return e!==o})},replaceColours:function(e,t){var o=t.hexes;o.length>e.maximumColours&&(o=o.slice(0,e.maximumColours)),e.colours=Pt(o,!0)},reset:function(e){e.name="",e.type=Ot,e.colours=Pt(null,!0)},selectColour:function(e,t){var o=t.colour;e.colours.forEach(function(e){e.isSelected=e===o})},setName:function(e,t){var o=t.name;e.name=o},setType:function(e,t){var o=t.type;e.type=o},updateColour:function(e,t){var o=t.colour,n=t.hex;o.hex=n}},Tt={addColour:function(e){e.commit("addColour");var t=e.state.colours;e.commit("selectColour",{colour:t[t.length-1]})},updateSelectedColour:function(e,t){var o=t.hex,n=It.colours.find(function(e){return e.isSelected});n&&e.commit("updateColour",{colour:n,hex:o})}},Dt={namespaced:!0,state:It,getters:$t,mutations:Mt,actions:Tt};n["a"].use(H["a"]);var St="production"!==Object({NODE_ENV:"production",BASE_URL:"/"}).NODE_EBV,Lt=new H["a"].Store({modules:{image:kt,palette:Dt},strict:St});n["a"].config.productionTip=!1,new n["a"]({store:Lt,render:function(e){return e(Ct)}}).$mount("#app")},"640a":function(e,t,o){},6902:function(e,t,o){"use strict";var n=o("0cdd"),a=o.n(n);a.a},7669:function(e,t,o){},"77f9":function(e,t,o){},7918:function(e,t,o){"use strict";var n=o("640a"),a=o.n(n);a.a},"7a76":function(e,t,o){},"7af5":function(e,t,o){},"7b97":function(e,t,o){},"7c55":function(e,t,o){"use strict";var n=o("d3dd"),a=o.n(n);a.a},"81c4":function(e,t,o){"use strict";var n=o("3993"),a=o.n(n);a.a},8392:function(e,t,o){},8718:function(e,t,o){},9011:function(e,t,o){"use strict";var n=o("49d1"),a=o.n(n);a.a},"9d1c":function(e,t,o){"use strict";var n=o("7af5"),a=o.n(n);a.a},a3fa:function(e,t,o){"use strict";var n=o("ebf8"),a=o.n(n);a.a},ad02:function(e,t,o){},d3af:function(e,t,o){},d3dd:function(e,t,o){},e563:function(e,t,o){"use strict";var n=o("77f9"),a=o.n(n);a.a},e601:function(e,t,o){"use strict";var n=o("8392"),a=o.n(n);a.a},e94d:function(e,t,o){},ebf8:function(e,t,o){},ee33:function(e,t,o){"use strict";var n=o("29a0"),a=o.n(n);a.a},fe10:function(e,t,o){"use strict";var n=o("7669"),a=o.n(n);a.a}});
//# sourceMappingURL=app.a0e0aa9c.js.map