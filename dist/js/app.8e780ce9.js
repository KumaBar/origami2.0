(function(e){function t(t){for(var n,i,u=t[0],a=t[1],m=t[2],d=0,s=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);p&&p(t);while(s.length)s.shift()();return c.push.apply(c,m||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o={app:0},c=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-11da7806":"094b50ba","chunk-375a2caa":"8c6dffd8","chunk-41be726c":"fe1b6af7","chunk-65534b67":"acad1637"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(e){var t=[],r={"chunk-11da7806":1,"chunk-375a2caa":1,"chunk-41be726c":1,"chunk-65534b67":1};i[e]?t.push(i[e]):0!==i[e]&&r[e]&&t.push(i[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-11da7806":"c7196d9b","chunk-375a2caa":"dff5ec4c","chunk-41be726c":"e6d958eb","chunk-65534b67":"5d4c2073"}[e]+".css",o=a.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var m=c[u],d=m.getAttribute("data-href")||m.getAttribute("href");if("stylesheet"===m.rel&&(d===n||d===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){m=s[u],d=m.getAttribute("data-href");if(d===n||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete i[e],p.parentNode.removeChild(p),r(c)},p.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(p)})).then((function(){i[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var m,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=u(e);var s=new Error;m=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,r[1](s)}o[e]=void 0}};var p=setTimeout((function(){m({type:"timeout",target:d})}),12e4);d.onerror=d.onload=m,document.head.appendChild(d)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/origami2.0/",a.oe=function(e){throw console.error(e),e};var m=window["webpackJsonp"]=window["webpackJsonp"]||[],d=m.push.bind(m);m.push=t,m=m.slice();for(var s=0;s<m.length;s++)t(m[s]);var p=d;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=r("0a63"),o=r.n(i),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},u=[],a={name:"App",components:{}},m=a,d=r("2877"),s=Object(d["a"])(m,c,u,!1,null,null,null),p=s.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f"));n["a"].use(l["a"]);var g=new l["a"]({routes:[{name:"main",path:"/",component:function(){return r.e("chunk-11da7806").then(r.bind(null,"1058"))}},{name:"order",path:"/order",component:function(){return r.e("chunk-375a2caa").then(r.bind(null,"24a8"))},children:[{name:"basket",path:"basket",component:function(){return r.e("chunk-65534b67").then(r.bind(null,"cf01"))}},{name:"form",path:"form",component:function(){return r.e("chunk-41be726c").then(r.bind(null,"e250"))}}]}]}),f=r("2f62"),h=r("0e44"),D=(r("7db0"),r("4de4"),r("159b"),r("fb6a"),{state:{orderedItems:[],time:0,number:4,selected:0,selectedItems:[],createItem:{id:Math.random(),title:"",img:"",descr:[],price:0,number:0},itemsPopup:[{id:1,title:"Хокку",text:"Треска в соусе «Терияки», огурец, такуан, сливочный сыр, кунжут белый, кунжут черный, соус «Майо», нори, рис",gr:"205",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%A5%D0%BE%D0%BA%D0%BA%D1%83_urSW5eM.jpg"},{id:2,title:"Феникс",text:"Отварные тигровые креветки, огурец, панировочные сухари, сливочный сыр, соус «Лава», рис, нори.",gr:"250",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%A4%D0%B5%D0%BD%D0%B8%D0%BA%D1%81_CGnTsDk.jpg"},{id:3,title:"Эби стронг ролл",text:"Тигровые креветки, снежный краб, сыр творожный, кунжут белый, рис, нори",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D1%8D%D0%B1%D0%B8-%D1%81%D1%82%D1%80%D0%BE%D0%BD%D0%B3_10Fj9G3.jpg"},{id:4,title:"Цезарь ролл",text:"Курица копченая, сыр творожный, кунжут белый, салат «Айсберг», помидор, рис, нори.",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8C_4_VPIXVu2.jpg"},{id:5,title:"Небраска",text:"Тигровые креветки в сухарях, сливочный сыр, помидор, панировочные сухари, остро-сладкий соус, луковая крошка, нори, рис",gr:"160",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%9D%D0%B5%D0%B1%D1%80%D0%B0%D1%81%D0%BA%D0%B0_PhImwhP.jpg"},{id:6,title:"Вакай",text:"Мидии, сливочный сыр, твердые сорта сыров, кунжут, соус «майонезно-чесночный», рис, нори.",gr:"240",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%92%D0%B0%D0%BA%D0%B0%D0%B9_W6HrJ4W.jpg"},{id:7,title:"Фрай",text:"Снежный краб, сыр сливочный, помидор, лук зеленый, соус «Ореховый», соус «Унаги», рис",gr:"210",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%A4%D1%80%D0%B0%D0%B9_Vgkhm5G.jpg"},{id:8,title:"Жареная тортилья с курицей и беконом",text:'Курица копченая,бекон, сыр творожный, соус "Барбекю", соус «майонезно-чесночный», салат «Айсберг», помидор, тортилья пшеничная с сыром.',gr:"210",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%A2%D0%BE%D1%80%D1%82%D0%B8%D0%BB%D1%8C%D1%8F_%D1%81_%D0%B1%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B8_%D0%BA%D1%83%D1%80%D0%B8%D1%86%D0%B5%D0%B9_1_dWNlnHS.jpg"},{id:9,title:"Фишка",text:"Кета в сухарях, плавленный сыр, лук зеленый, огурец, соус «Унаги», кляр, нори, рис",gr:"190",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%A4%D0%B8%D1%88%D0%BA%D0%B0_3md3MK2.jpg"},{id:10,title:"Ацуи с лососем",text:"Лосось с/с, тамаго, сливочный сыр, соус «Спайси», рис, нори",gr:"220",open:!1,selected:!1,img:"http://imagiro.ru/media/uploads/catalog/%D0%90%D1%86%D1%83%D0%B8-%D1%81-%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D0%B5%D0%BC_1_4GTnZiR.jpg"}],itemsSpices:[{id:1,title:"Набор Специй",img:"https://imagiro.ru/static/i/svg/package_set.svg",count:0,price:30},{id:2,title:"Соевый соус",img:"https://imagiro.ru/static/i/svg/sauce.svg",count:0,price:20},{id:3,title:"Имбирь",img:"https://imagiro.ru/static/i/svg/ginger.svg",count:0,price:10},{id:4,title:"Васаби",img:"https://imagiro.ru/static/i/svg/wasabi.svg",count:0,price:10},{id:5,title:"Палочки",img:"https://imagiro.ru/static/i/svg/chopsticks.svg",count:0,price:10},{id:6,title:"Ложка/вилка",img:"https://imagiro.ru/static/i/svg/spoon.svg",count:0,price:10}]},getters:{getSpicesItems:function(e){return e.itemsSpices},getOrderedItems:function(e){return e.orderedItems},getTotalPrice:function(e){var t=0;return t+=e.orderedItems.reduce((function(e,t){return e+=t.price*t.number,e}),0),t+=e.itemsSpices.reduce((function(e,t){return e+=t.price*t.count,e}),0),t},getTotalNumber:function(e){return e.orderedItems.length<=0?0:e.orderedItems.reduce((function(e,t){return e+=t.number,e}),0)},getPopupItems:function(e){return e.itemsPopup},getNumber:function(e){return e.number},getNumberPrice:function(e){return 4===e.number?899:6===e.number?1350:8===e.number?1650:void 0},getSelectedItems:function(e){return e.selectedItems},getCreateItem:function(e){return e.createItem}},mutations:{incrementSpicesCount:function(e,t){e.itemsSpices.find((function(e){if(e.id===t.id)return e.count++,!0}))},decrementSpicesCount:function(e,t){e.itemsSpices.find((function(e){if(e.id===t.id)return e.count>0&&e.count--,!0}))},addOrderedItems:function(e,t){var r=this;0===e.orderedItems.length&&e.orderedItems.push(t),void 0!==e.orderedItems.find((function(e){return e.title===t.title}))?this.commit("incrementNumber",t):e.orderedItems.find((function(n){if(n.title!==t.title)return n.id=Math.random(),e.orderedItems.push(t),r.commit("incrementNumber",t),!0}))},addCreateItem:function(e,t){e.orderedItems.push(t),this.commit("clearSelected")},removeOrderedItems:function(e,t){e.orderedItems=e.orderedItems.filter((function(e){if(e.id!==t.id)return 1;e.number=0}))},incrementNumber:function(e,t){e.orderedItems.find((function(e){if(e.id===t.id)return e.number++,!0}))},decrementNumber:function(e,t){e.orderedItems.find((function(e){if(e.id===t.id)return e.number>1&&e.number--,!0}))},setNumber:function(e,t){t!==e.number&&(e.selectedItems.forEach((function(e){e.selected=!1})),e.selectedItems=[]),e.createItem={id:Math.random(),title:"",descr:[],price:0,number:0},e.number=t},addSelectItem:function(e,t){e.selectedItems.length!==e.number&&e.itemsPopup.find((function(r){if(r.id===t.id)return r.selected=!0,e.selectedItems.push(r),!0}))},removeSelectItem:function(e,t){e.selectedItems=e.selectedItems.filter((function(e){return e.id!==t.id?(e.selected=!0,!0):(e.selected=!1,!1)}))},order:function(e){e.createItem.title="Набор «Собери сам» ".concat(e.number," ролла"),4===e.number?(e.createItem.price=899,e.createItem.img="http://imagiro.ru/media/uploads/custom_item_set/Povar_04.svg"):6===e.number?(e.createItem.price=1350,e.createItem.img="http://imagiro.ru/media/uploads/custom_item_set/Povar_06.svg"):8===e.number&&(e.createItem.price=1750,e.createItem.img="http://imagiro.ru/media/uploads/custom_item_set/Povar_08.svg"),e.createItem.number+=1,e.createItem.descr=e.selectedItems.slice(),this.commit("addCreateItem",e.createItem),e.createItem={id:Math.random(),title:"",descr:[],price:0,number:0}},clearSelected:function(e){e.selectedItems=[];for(var t=0;t<e.itemsPopup.length;t++)e.itemsPopup[t].selected=!1}},actions:{addOrderedItems:function(e,t){var r=e.commit;r("addOrderedItems",t)},removeOrderedItems:function(e,t){var r=e.commit;r("removeOrderedItems",t)},incrementNumber:function(e,t){var r=e.commit;r("incrementNumber",t)},decrementNumber:function(e,t){var r=e.commit;r("decrementNumber",t)},changeNumber:function(e,t){var r=e.commit;r("setNumber",t)},toggleSelect:function(e,t){var r=e.commit,n=e.state;n.itemsPopup.find((function(e){if(e.id===t.id)return!0===e.selected?r("removeSelectItem",t):r("addSelectItem",t),!0}))},clearSelected:function(e){var t=e.commit;t("clearSelected")},order:function(e){var t=e.commit;t("order")},incrementSpicesCount:function(e,t){var r=e.commit;r("incrementSpicesCount",t)},decrementSpicesCount:function(e,t){var r=e.commit;r("decrementSpicesCount",t)}}}),b={state:{burgerIsOpen:!1},getters:{getBurgerOpen:function(e){return e.burgerIsOpen}},mutations:{toggleBurger:function(e){e.burgerIsOpen=!e.burgerIsOpen}},actions:{toggleBurger:function(e){var t=e.commit;t("toggleBurger")}}},v={state:{isOpen:!1},getters:{getOpenPopup:function(e){return e.isOpen}},mutations:{open:function(e){e.isOpen=!0},close:function(e){e.isOpen=!1}},actions:{openPopup:function(e){var t=e.commit;t("open")},closePopup:function(e){var t=e.commit;t("close")}}};n["a"].use(f["a"]);var I=new f["a"].Store({modules:{order:D,navigation:b,popup:v},plugins:[Object(h["a"])()]});n["a"].use(o.a),n["a"].config.productionTip=!1,new n["a"]({router:g,store:I,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.8e780ce9.js.map