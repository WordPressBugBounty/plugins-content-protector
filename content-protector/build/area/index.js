(()=>{"use strict";var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.wp.blocks,a=JSON.parse('{"UU":"content-protector/area"}');function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)({}).hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},o.apply(null,arguments)}const n=window.wp.blockEditor,r=window.wp.components,s=window.wp.data,i=window.wp.element,c=window.wp.apiFetch;var p=t.n(c);const{__}=wp.i18n;(0,e.getBlockType)("content-protector/area")||(0,e.registerBlockType)(a.UU,{title:"Protected Area",edit:function({attributes:t,setAttributes:e}){const a=(0,n.useBlockProps)(),{area_id:c,headline:d,instruction:l,buttonLabel:_,placeholder:u}=t,[m,g]=(0,i.useState)(),[b,h]=(0,i.useState)(!1),[f,w]=(0,i.useState)(!1),R=(0,s.useSelect)((t=>{const{getEntityRecords:e}=t("core");return e("postType","protected_areas",{per_page:-1,order:"asc",status:"publish"})}),[]),v=t=>{switch(t){case"form":let t={background:area_data.options.form_background_color,borderRadius:area_data.options.form_border_radius};return area_data.options.form_margin&&(t.margin=area_data.options.form_margin.top+" "+area_data.options.form_margin.right+" "+area_data.options.form_margin.bottom+" "+area_data.options.form_margin.left),area_data.options.form_padding&&(t.padding=area_data.options.form_padding.top+" "+area_data.options.form_padding.right+" "+area_data.options.form_padding.bottom+" "+area_data.options.form_padding.left),t;case"headline":return{color:area_data.options.headline_font_color,fontSize:area_data.options.headline_font_size,fontWeight:area_data.options.headline_font_weight};case"instruction":return{color:area_data.options.instruction_font_color,fontSize:area_data.options.instruction_font_size,fontWeight:area_data.options.instruction_font_weight};case"button":let e={background:area_data.options.button_background_color,borderRadius:area_data.options.button_border_radius,color:area_data.options.button_font_color,fontSize:area_data.options.button_font_size,fontWeight:area_data.options.button_font_weight,textAlign:"center"};return area_data.options.button_margin&&(e.margin=area_data.options.button_margin.top+" "+area_data.options.button_margin.right+" "+area_data.options.button_margin.bottom+" "+area_data.options.button_margin.left),area_data.options.button_padding&&(e.padding=area_data.options.button_padding.top+" "+area_data.options.button_padding.right+" "+area_data.options.button_padding.bottom+" "+area_data.options.button_padding.left),e}};return(0,i.useEffect)((()=>{g(R),p()({path:"/passster/v1/meta?meta_key=passster_protection_type&post_id="+c}).then((t=>{"recaptcha"==JSON.parse(t).data?w(!0):w(!1)}))}),[R]),React.createElement(React.Fragment,null,React.createElement(n.InspectorControls,null,React.createElement(r.PanelBody,{title:__("Protected Area","content-protector"),initialOpen:!0},R&&React.createElement(React.Fragment,null,React.createElement(r.SelectControl,{label:__("Select protected area","content-protector"),value:c,options:(()=>{if(!m)return[];const t=[];return t.push({label:__("No Area","content-protector"),value:0}),m.map((function(e){return e.title.raw&&""!==e.title.raw&&t.push({label:e.title.raw,value:e.id}),e})),t})(),onChange:t=>{e({area_id:t})}}),b?React.createElement(r.Button,{onClick:()=>{p()({path:"/passster/v1/areas"}).then((t=>{g(t)})),h(!1)},variant:"secondary"},__("Get updated areas","content-protector")):React.createElement(r.Button,{onClick:()=>{window.open(area_data.create_area_url,"_blank").focus(),h(!0)},variant:"primary"},__("Create a new area","content-protector"))))),React.createElement("div",(0,n.useBlockProps)(),React.createElement("div",{className:"passster-form",id:`ps-${c}`,style:v("form")},React.createElement("div",{className:"password-form"},React.createElement(n.RichText,o({},a,{tagName:"h4",onChange:t=>{e({headline:t})},value:d,style:v("headline")})),React.createElement(n.RichText,o({},a,{tagName:"p",onChange:t=>{e({instruction:t})},value:l,style:v("instruction")})),!f&&React.createElement(React.Fragment,null,React.createElement(r.TextControl,o({},a,{onChange:t=>{e({placeholder:t})},value:u,id:"passster_password",className:"passster-password"})),area_data.options.show_password&&React.createElement("label",{htmlFor:"passster-password-hint",style:{fontWeight:"400",marginBottom:"10px",display:"block"}},React.createElement("input",{name:"passster-password-hint",id:"passster-password-hint",type:"checkbox"}),__("Show Password","content-protector"))),React.createElement(r.TextControl,o({},a,{onChange:t=>{e({buttonLabel:t})},value:_,className:"passster-submit",style:v("button")})),React.createElement("small",{className:"ps-preview-notice"},__("This is just a preview. To actually unlock the content visit the post/page on your website.","content-protector"))))))},save:()=>null})})();