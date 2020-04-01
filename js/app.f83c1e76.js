(function(t){function e(e){for(var s,o,a=e[0],l=e[1],u=e[2],d=0,f=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("85ec"),i=n.n(s);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Discogs tracker")]),t.token?n("Discogs",{attrs:{token:t.token}}):n("TokenForm",{on:{submitted:t.save}})],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"token"}},[n("h2",[t._v("Enter your personal access token")]),n("p",[t._v("Generate one in your "),n("b-link",{attrs:{href:"https://www.discogs.com/settings/developers"}},[t._v("Developers settings")]),t._v(". It is only stored on your device.")],1),n("form",{on:{submit:t.submit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.token,expression:"token"}],attrs:{type:"text",required:"",name:"token"},domProps:{value:t.token},on:{input:function(e){e.target.composing||(t.token=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("let's go")])])])},a=[],l={name:"TokenForm",data:function(){return{token:""}},methods:{submit:function(t){t.preventDefault(),this.$emit("submitted",this.token)}}},u=l,c=n("2877"),d=Object(c["a"])(u,o,a,!1,null,null,null),f=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[t.error?n("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" "+t._s(t.error)+" ")]):t.loading?n("p",[t._v("loading...")]):n("div",[n("b-row",[n("h2",[t._v("Filters/sort")]),n("b-form-input",{attrs:{placeholder:"filter by title/artist"},model:{value:t.rawQuery,callback:function(e){t.rawQuery=e},expression:"rawQuery"}}),n("b-form-checkbox",{attrs:{id:"unlistened",name:"unlistened-1",value:"1","unchecked-value":""},model:{value:t.unlistened,callback:function(e){t.unlistened=e},expression:"unlistened"}},[t._v(" unlistened only ")])],1),n("b-row",[n("h2",[t._v("Albums")])]),n("b-row",t._l(t.albums,(function(e,s){return n("Album",{key:e.basic_information.instance_id,attrs:{data:e,id:s,listensID:t.listensID,lastListenedID:t.lastListenedID,filters:t.filters},on:{listen:t.listen}})})),1)],1)],1)},m=[],p=(n("a4d3"),n("e01a"),n("d28b"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("2909")),b=(n("96cf"),n("1da1")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("b-col",{attrs:{cols:"3"}},[n("b-card",{staticClass:"m-2",attrs:{tag:"article","sub-title":t.artists,"no-body":""}},[n("b-link",{attrs:{href:t.url}},[n("b-card-img",{attrs:{src:t.image,alt:"Image",top:""}})],1),n("b-card-body",[n("b-card-title",[t._v(t._s(t.data.basic_information.title))]),n("b-card-sub-title",[t._v(t._s(t.artists))])],1),n("b-card-footer",[n("b-button",{on:{click:t.listen}},[t._v("Listened to")]),n("Listens",{attrs:{data:t.listens}})],1)],1)],1):t._e()},g=[],y=(n("c975"),n("a15b"),n("d81d"),n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-text",[t._v(t._s(t.data.count)+" "+t._s(t.listenText))])}),_=[],k={name:"Listens",props:{data:{type:Object,required:!0}},computed:{listenText:function(){return 1===this.data.count?"listen":"listens"}}},w=k,D=Object(c["a"])(w,y,_,!1,null,null,null),x=D.exports,O={name:"Album",props:["data","id","listensID","lastListenedID","filters"],components:{Listens:x},computed:{artists:function(){return this.data.basic_information.artists.map((function(t){return t.name})).join(", ")},image:function(){return this.data.basic_information.huge_thumb||this.data.basic_information.cover_image||this.data.thumb},lowerTitle:function(){return this.data.basic_information.title.toLowerCase()},lowerArtists:function(){return this.data.basic_information.artists.map((function(t){return t.name.toLowerCase()})).join(" ")},matchesQuery:function(){return!this.filters.query||(-1!==this.lowerTitle.indexOf(this.filters.query)||-1!==this.lowerArtists.indexOf(this.filters.query))},matchesListened:function(){return!this.filters.unlistened||0===this.listens.count},show:function(){return this.matchesQuery&&this.matchesListened},url:function(){return"https://www.discogs.com/release/"+this.data.basic_information.id}},created:function(){if(this.data.notes){var t=!0,e=!1,n=void 0;try{for(var s,i=this.data.notes[Symbol.iterator]();!(t=(s=i.next()).done);t=!0){var r=s.value;r.field_id===this.listensID?this.listens.count=Number(r.value):r.field_id===this.lastListenedID&&(this.listens.latest=r.value)}}catch(o){e=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}}},data:function(){return{listens:{count:0,latest:void 0}}},methods:{listen:function(){this.listens.count++,this.listens.latest=new Date,this.$emit("listen",this.id,this.listens)}}},j=O,L=Object(c["a"])(j,v,g,!1,null,null,null),I=L.exports,S="Listens",A="Last Listened",T={name:"Discogs",components:{Album:I},data:function(){return{loading:!0,error:void 0,listensID:void 0,lastListenedID:void 0,albums:[],rawQuery:"",unlistened:void 0,username:void 0}},props:{token:{type:String,required:!0}},computed:{filters:function(){return{query:this.rawQuery.toLowerCase(),unlistened:this.unlistened}}},created:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.username=localStorage.getItem("discogs_username"),this.username){t.next=5;break}return console.log("need a username"),t.next=5,fetch("https://api.discogs.com/oauth/identity",{headers:{Authorization:"Discogs token="+this.token}}).then((function(t){return t.json()})).then((function(t){e.username=t.username,localStorage.setItem("discogs_username",e.username)})).catch((function(t){return console.error(t)}));case 5:fetch("https://api.discogs.com/users/"+this.username+"/collection/fields",{headers:{Authorization:"Discogs token="+this.token}}).then((function(t){return t.json()})).then((function(t){var n=!0,s=!1,i=void 0;try{for(var r,o=t.fields[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var a=r.value;a.name===S?e.listensID=a.id:a.name===A&&(e.lastListenedID=a.id)}}catch(l){s=!0,i=l}finally{try{n||null==o.return||o.return()}finally{if(s)throw i}}e.listensID?e.lastListenedID?e.fetchAlbums():e.error='You do not have a custom field named "Last Listened". Unfortunately this has to be created manually. Please add it in your collection settings.':e.error='You do not have a custom field named "Listens". Unfortunately this has to be created manually. Please add it in your collection settings.'})).catch((function(t){return console.error(t)}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchAlbums:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;fetch("https://api.discogs.com/users/"+this.username+"/collection/folders/0/releases?sort=added&page="+t,{headers:{Authorization:"Discogs token="+this.token}}).then((function(t){return t.json()})).then(this.appendAlbums).catch((function(t){return console.error(t)}))},appendAlbums:function(t){var e;this.loading=!1,(e=this.albums).push.apply(e,Object(p["a"])(t.releases)),console.log(t),t.pagination.page<t.pagination.pages&&this.fetchAlbums(t.pagination.page+1)},listen:function(t,e){var n=this.albums[t];fetch("https://api.discogs.com/users/"+this.username+"/collection/folders/0/releases/"+n.basic_information.id+"/instances/"+n.instance_id+"/fields/"+this.listensID,{method:"POST",body:JSON.stringify({value:String(e.count)}),headers:{Authorization:"Discogs token="+this.token,"Content-Type":"application/json"}}).catch((function(t){return console.error(t)})),fetch("https://api.discogs.com/users/"+this.username+"/collection/folders/0/releases/"+n.basic_information.id+"/instances/"+n.instance_id+"/fields/"+this.lastListenedID,{method:"POST",body:JSON.stringify({value:String(e.latest)}),headers:{Authorization:"Discogs token="+this.token,"Content-Type":"application/json"}}).catch((function(t){return console.error(t)}))}}},P=T,$=Object(c["a"])(P,h,m,!1,null,null,null),q=$.exports,Q={name:"App",components:{Discogs:q,TokenForm:f},data:function(){return{token:void 0}},created:function(){this.token=localStorage.getItem("discogs_token")},methods:{save:function(t){console.log(t),this.token=t,localStorage.setItem("discogs_token",t)}}},C=Q,E=(n("034f"),Object(c["a"])(C,i,r,!1,null,null,null)),z=E.exports,F=n("5f5b"),J=n("b1e0");n("f9e3"),n("2dd8");s["default"].use(F["a"]),s["default"].use(J["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(z)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.f83c1e76.js.map