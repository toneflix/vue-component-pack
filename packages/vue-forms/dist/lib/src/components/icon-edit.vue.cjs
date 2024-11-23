"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),o=["width","height"],r=["stroke","stroke-width"],n=["stroke","stroke-width"],i=t.defineComponent({name:"IconEdit",__name:"icon-edit",props:{size:{default:15},color:{default:"currentColor"},strokWidth:{default:2}},setup(s){return(e,d)=>(t.openBlock(),t.createElementBlock("svg",{width:e.size+"px",height:e.size+"px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t.createElementVNode("path",{d:"M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z",stroke:String(e.color),"stroke-width":Number(e.strokWidth),"stroke-linecap":"round","stroke-linejoin":"round"},null,8,r),t.createElementVNode("path",{d:"M21 21H12",stroke:String(e.color),"stroke-width":Number(e.strokWidth),"stroke-linecap":"round","stroke-linejoin":"round"},null,8,n)],8,o))}});exports.default=i;