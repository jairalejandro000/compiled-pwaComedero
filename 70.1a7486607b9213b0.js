"use strict";(self.webpackChunkpwaComedero=self.webpackChunkpwaComedero||[]).push([[70],{6070:(tt,y,r)=>{r.r(y),r.d(y,{HomeModule:()=>K});var h=r(6019),u=r(3886),t=r(3668),Z=r(8260),P=r(4522);let w=(()=>{class o{constructor(e){this.http=e}pet(e){return this.http.get(`${Z.N.API_URL}Raspberry/`+e)}new(e){return this.http.post(`${Z.N.API_URL}Raspberry/Create`,e)}addSensors(e){return this.http.get(`${Z.N.API_URL}RaspSensor/AddSensors/`+e)}history(e){return this.http.get(`${Z.N.API_URL}SensorValues/History/`+e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(P.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var T=r(2387),k=r(8643),N=r(9112);let _=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-toolbar"]],decls:4,vars:0,consts:[["routerLink","/"],["src","../../../../assets/dog cat.png","routerLink","/user/profile",1,"profile"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-toolbar"),t.TgZ(1,"mat-icon",0),t._uU(2,"home"),t.qZA(),t._UZ(3,"img",1),t.qZA())},directives:[k.Ye,N.Hw,u.rH],styles:[".mat-toolbar[_ngcontent-%COMP%]{background:#D9D9D9;height:10%;width:100%}.mat-icon[_ngcontent-%COMP%]{font-size:30px}.profile[_ngcontent-%COMP%]{margin:85%;width:10%;height:auto}@media (min-width: 400px){.profile[_ngcontent-%COMP%]{margin:83%}.mat-icon[_ngcontent-%COMP%]{font-size:40px;margin-top:-2%}}@media (min-width: 600px){.mat-tool[_ngcontent-%COMP%]{width:60%}.profile[_ngcontent-%COMP%]{width:8%;margin:80%}.mat-icon[_ngcontent-%COMP%]{font-size:50px;margin-top:-3%}}@media (min-width: 700px){.profile[_ngcontent-%COMP%]{width:8%;margin:85%}.mat-icon[_ngcontent-%COMP%]{font-size:60px}}@media (min-width: 1000px){.profile[_ngcontent-%COMP%]{width:5%;margin:90%}.mat-icon[_ngcontent-%COMP%]{font-size:60px;margin-top:-2%}}"]}),o})();var f=r(6167),c=r(888);let I=(()=>{class o{constructor(e,n,a){this.route=e,this.comederoService=n,this.toastr=a,this.name="",this.params=e.snapshot.params,this.id=this.params.id}ngOnInit(){this.pet()}pet(){this.comederoService.pet(this.id).subscribe({next:e=>{this.name=e.data.name},error:e=>console.log(e)})}aguita(){this.toastr.success("Ya no se va a morir de sed","Mascota",{timeOut:3e3})}comidita(){this.toastr.success("Ya no se va a morir de hambre","Mascota",{timeOut:3e3})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(w),t.Y36(T._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-alimentar"]],decls:17,vars:6,consts:[[1,"title"],["rowHeight","2:2",3,"cols"],[3,"colspan","rowspan"],[1,"card",3,"click"],["mat-card-image","","src","../../../../assets/alimentos-para-mascotas.png"],["mat-card-image","","src","../../../../assets/agua.png"]],template:function(e,n){1&e&&(t._UZ(0,"app-toolbar"),t.TgZ(1,"div",0),t.TgZ(2,"h1"),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"mat-grid-list",1),t.TgZ(5,"mat-grid-tile",2),t.TgZ(6,"mat-card",3),t.NdJ("click",function(){return n.comidita()}),t._UZ(7,"img",4),t.TgZ(8,"mat-card-content"),t.TgZ(9,"h2"),t._uU(10," Comida "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"mat-grid-tile",2),t.TgZ(12,"mat-card",3),t.NdJ("click",function(){return n.aguita()}),t._UZ(13,"img",5),t.TgZ(14,"mat-card-content"),t.TgZ(15,"h2"),t._uU(16," Agua "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(n.name),t.xp6(1),t.Q6J("cols",2),t.xp6(1),t.Q6J("colspan",1)("rowspan",1),t.xp6(6),t.Q6J("colspan",1)("rowspan",1))},directives:[_,f.Il,f.DX,c.a8,c.G2,c.dn],styles:[".card[_ngcontent-%COMP%]{width:50%;height:auto;background-color:transparent}.mat-card[_ngcontent-%COMP%]{box-shadow:none}.mat-grid-list[_ngcontent-%COMP%]{margin-top:20%;display:flex;flex-wrap:wrap;justify-content:center}.mat-grid-tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center}@media (min-width: 400px){.mat-card-image[_ngcontent-%COMP%]{margin:auto;width:90%;height:auto}}@media (min-width: 600px){.mat-grid-list[_ngcontent-%COMP%]{margin-top:5%}}@media (min-width: 1000px){.mat-grid-list[_ngcontent-%COMP%]{margin-top:0%}}.title[_ngcontent-%COMP%]{margin-top:20px;width:100%;text-align:center}h1[_ngcontent-%COMP%]{font-size:xx-large}"]}),o})();function O(o,i,e,n,a,d,g){try{var p=o[d](g),l=p.value}catch(C){return void e(C)}p.done?i(l):Promise.resolve(l).then(n,a)}var s=r(6999),S=r(273),A=r(6263),x=r(5304);function q(o,i){if(1&o&&t._UZ(0,"img",3),2&o){const e=t.oxw();t.MGl("src","../../../../../assets/",e.sensor.sensor,".png",t.LSH)}}function L(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"h5"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.BQk()),2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.value_float),t.xp6(2),t.Oqu(t.lcZ(5,2,e.date))}}function Y(o,i){if(1&o&&(t.TgZ(0,"mat-card",4),t.TgZ(1,"mat-card-header"),t.TgZ(2,"mat-card-title"),t._uU(3,"Historial de sensor de temperatura"),t.qZA(),t.qZA(),t.TgZ(4,"mat-card-content"),t.YNc(5,L,6,4,"ng-container",5),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.historyValues)}}let v=(()=>{class o{constructor(e,n){this.sensor=e,this.comederoService=n}ngOnInit(){5==this.sensor.id&&this.history()}history(){this.comederoService.history(this.sensor.id).subscribe({next:e=>{this.historyValues=e.data}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.WI),t.Y36(w))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-comedero-dialog"]],decls:3,vars:2,consts:[[1,"container"],[3,"src",4,"ngIf"],["class","card",4,"ngIf"],[3,"src"],[1,"card"],[4,"ngFor","ngForOf"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,q,1,1,"img",1),t.YNc(2,Y,6,1,"mat-card",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",2==n.sensor.id||3==n.sensor.id),t.xp6(1),t.Q6J("ngIf",5==n.sensor.id))},directives:[h.O5,c.a8,c.dk,c.n5,c.dn,h.sg],pipes:[h.uU],styles:[""]}),o})();var b=r(7524);function J(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-grid-tile",2),t.TgZ(1,"mat-card",3),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().clickedSensor(d.id,d.image)}),t._UZ(2,"img",4),t.TgZ(3,"mat-card-content"),t.TgZ(4,"h3"),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit;t.Q6J("colspan",1)("rowspan",1),t.xp6(2),t.MGl("src","../../../../assets/",e.image,".png",t.LSH),t.xp6(3),t.hij(" ",e.name," ")}}let z=(()=>{class o{constructor(e,n,a,d,g){this.route=e,this.userService=n,this.breakpointObserver=a,this.router=d,this.dialog=g,this.sensorsList=[],this.destroyed=new S.x,this.displayNameMap=new Map([[s.u3.XSmall,"XSmall"],[s.u3.Small,"Small"],[s.u3.Medium,"Medium"],[s.u3.Large,"Large"],[s.u3.XLarge,"XLarge"]]),this.colSize=4,this.deviceInfo=null,this.params=e.snapshot.params,this.id=this.params.id,a.observe([s.u3.XSmall,s.u3.Small,s.u3.Medium,s.u3.Large,s.u3.XLarge]).pipe((0,A.R)(this.destroyed)).subscribe(p=>{var l;for(const C of Object.keys(p.breakpoints))if(p.breakpoints[C])switch(this.currentScreenSize=null!==(l=this.displayNameMap.get(C))&&void 0!==l?l:"Unknown",this.currentScreenSize){case"XSmall":case"Small":this.colSize=2;break;case"Medium":this.colSize=3;break;default:this.colSize=4}})}ngOnInit(){this.sensors()}sensors(){var e=this;return function(o){return function(){var i=this,e=arguments;return new Promise(function(n,a){var d=o.apply(i,e);function g(l){O(d,n,a,g,p,"next",l)}function p(l){O(d,n,a,g,p,"throw",l)}g(void 0)})}}(function*(){e.userService.sensors(e.id).subscribe({next:n=>{var a;let d=n.data;for(let g of d)null===(a=e.sensorsList)||void 0===a||a.push(g.sensor);e.addImage()},error:n=>console.log(n)})})()}history(e){console.log(e)}addImage(){for(let e of this.sensorsList)switch(e.id){case 1:e.image="croquetonas";break;case 2:e.image="bocina";break;case 3:e.image="videollamada";break;case 4:e.image="grifo";break;case 5:e.image="sensor-de-temperatura"}}clickedSensor(e,n){switch(e){case 1:case 4:this.router.navigate(["//home/alimentar/"+this.id]);break;case 2:case 3:case 5:this.dialog.open(v,{height:"40%",width:"60%",data:{sensor:n,id:e}})}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(b.K),t.Y36(s.Yg),t.Y36(u.F0),t.Y36(x.uw))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-comedero"]],decls:3,vars:2,consts:[["rowHeight","2:2",3,"cols"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],[1,"card",3,"click"],["mat-card-image","",3,"src"]],template:function(e,n){1&e&&(t._UZ(0,"app-toolbar"),t.TgZ(1,"mat-grid-list",0),t.YNc(2,J,6,4,"mat-grid-tile",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("cols",n.colSize),t.xp6(1),t.Q6J("ngForOf",n.sensorsList))},directives:[_,f.Il,h.sg,f.DX,c.a8,c.G2,c.dn],styles:[".card[_ngcontent-%COMP%]{width:60%;height:auto;background-color:transparent}.mat-card[_ngcontent-%COMP%]{box-shadow:none}.mat-grid-list[_ngcontent-%COMP%]{margin-top:5%;display:flex;flex-wrap:wrap;justify-content:center}.mat-grid-tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center}.mat-card-image[_ngcontent-%COMP%]{width:90%;margin:auto}.h3[_ngcontent-%COMP%]{font-weight:bolder}"]}),o})();var m=r(9133),F=r(7819),M=r(7706),H=r(138),X=r(86);function D(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.message," ")}}function Q(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,D,2,1,"mat-error",8),t.qZA()),2&o){const e=i.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.formComedero.get("name").hasError(e.type)&&(n.formComedero.get("name").dirty||n.formComedero.get("name").touched))}}function j(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.message," ")}}function R(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t.YNc(1,j,2,1,"mat-error",8),t.qZA()),2&o){const e=i.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.formComedero.get("code").hasError(e.type)&&(n.formComedero.get("code").dirty||n.formComedero.get("code").touched))}}let $=(()=>{class o{constructor(e,n,a){this.toastr=e,this.comederoServiece=n,this.router=a,this.formComedero={},this.validationMessages=F.EV}ngOnInit(){this.formBuilder()}formBuilder(){this.formComedero=new m.cw({name:new m.NI(null,[m.kI.required,m.kI.minLength(3),m.kI.maxLength(15)]),code:new m.NI(null,[m.kI.required,m.kI.minLength(5),m.kI.maxLength(5)])})}addComedero(){var e;this.comedero={name:null===(e=this.formComedero.get("name"))||void 0===e?void 0:e.value},this.comederoServiece.new(this.comedero).subscribe({next:n=>{this.toastr.success("Ahora podra acceder al comedero de su mascota","Comedero agregado",{timeOut:3e3}),this.addSensors(n.data.id)},error:n=>{this.formComedero.reset(),this.toastr.error("Su comedero no se ha podido registrar","Ocurri\xf3 un error",{timeOut:3e3})}})}addSensors(e){this.comederoServiece.addSensors(e).subscribe({next:n=>{window.location.reload()}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T._W),t.Y36(w),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-new-comedero-dialog"]],decls:15,vars:4,consts:[[1,"container"],["src","../../../../assets/dog cat.png",1,"login"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","formControlName","name"],[4,"ngFor","ngForOf"],["matInput","","formControlName","code"],["mat-raised-button","","type","submit",3,"disabled"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"form",2),t.NdJ("ngSubmit",function(){return n.addComedero()}),t.TgZ(3,"mat-form-field",3),t.TgZ(4,"mat-label"),t._uU(5,"Nombre"),t.qZA(),t._UZ(6,"input",4),t.YNc(7,Q,2,1,"mat-error",5),t.qZA(),t.TgZ(8,"mat-form-field",3),t.TgZ(9,"mat-label"),t._uU(10,"C\xf3digo"),t.qZA(),t._UZ(11,"input",6),t.YNc(12,R,2,1,"mat-error",5),t.qZA(),t.TgZ(13,"button",7),t._uU(14,"Crear"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("formGroup",n.formComedero),t.xp6(5),t.Q6J("ngForOf",n.validationMessages.name),t.xp6(5),t.Q6J("ngForOf",n.validationMessages.code),t.xp6(1),t.Q6J("disabled",n.formComedero.invalid))},directives:[m._Y,m.JL,m.sg,M.KE,M.hX,H.Nt,m.Fj,m.JJ,m.u,h.sg,X.lW,M.TO,h.O5],styles:[".container[_ngcontent-%COMP%]{width:80%;height:auto;margin:5% auto auto;justify-content:center;text-align:center}.mat-form-field[_ngcontent-%COMP%]{width:100%}.login[_ngcontent-%COMP%]{margin:10%;width:30%;height:auto}.mat-raised-button[_ngcontent-%COMP%]{background-color:#43a9bf;color:#fff;width:50%}@media (min-width: 1000px){.login[_ngcontent-%COMP%]{margin:0%;width:13%;height:auto}.mat-raised-button[_ngcontent-%COMP%]{width:20%}.mat-form-field[_ngcontent-%COMP%]{width:20%;display:block;margin-right:auto;margin-left:auto}.container[_ngcontent-%COMP%]{width:70%}}@media (min-width: 700px){.login[_ngcontent-%COMP%]{margin:1%;width:18%;height:auto}.mat-raised-button[_ngcontent-%COMP%]{width:30%}.mat-form-field[_ngcontent-%COMP%]{width:50%;display:block;margin-right:auto;margin-left:auto}.container[_ngcontent-%COMP%]{width:80%}}"]}),o})();var G=r(1133);function B(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-grid-tile",3),t.TgZ(1,"mat-card",5),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw().details(d.id)}),t._UZ(2,"img",6),t.TgZ(3,"mat-card-content"),t.TgZ(4,"h2"),t._uU(5),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit;t.Q6J("colspan",1)("rowspan",1),t.xp6(5),t.hij(" ",e.name," ")}}const E=[{path:"",component:(()=>{class o{constructor(e,n,a,d,g){this.userService=e,this.breakpointObserver=n,this.router=a,this.dialog=d,this.os=g,this.destroyed=new S.x,this.displayNameMap=new Map([[s.u3.XSmall,"XSmall"],[s.u3.Small,"Small"],[s.u3.Medium,"Medium"],[s.u3.Large,"Large"],[s.u3.XLarge,"XLarge"]]),this.colSize=4,this.comederosList=[],this.deviceInfo=null,n.observe([s.u3.XSmall,s.u3.Small,s.u3.Medium,s.u3.Large,s.u3.XLarge]).pipe((0,A.R)(this.destroyed)).subscribe(p=>{var l;for(const C of Object.keys(p.breakpoints))if(p.breakpoints[C])switch(this.currentScreenSize=null!==(l=this.displayNameMap.get(C))&&void 0!==l?l:"Unknown",this.currentScreenSize){case"XSmall":this.colSize=1;break;case"Small":this.colSize=2;break;case"Medium":this.colSize=3;break;default:this.colSize=4}})}ngOnInit(){this.comederos()}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}comederos(){this.userService.comederos().subscribe({next:e=>{this.comederosList=e.data},error:e=>console.log(e)})}details(e){this.router.navigate(["/home/menu/"+e])}new(){this.dialog.open($)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b.K),t.Y36(s.Yg),t.Y36(u.F0),t.Y36(x.uw),t.Y36(G.HE))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],decls:6,vars:5,consts:[[1,"container"],["rowHeight","2:2",3,"cols","gutterSize"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],["src","../../../../assets/circulo-plus.png",3,"click"],[1,"card",3,"click"],["mat-card-image","","src","../../../../assets/comedero-mascotas.png"]],template:function(e,n){1&e&&(t._UZ(0,"app-toolbar"),t.TgZ(1,"div",0),t.TgZ(2,"mat-grid-list",1),t.YNc(3,B,6,3,"mat-grid-tile",2),t.TgZ(4,"mat-grid-tile",3),t.TgZ(5,"img",4),t.NdJ("click",function(){return n.new()}),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("cols",n.colSize)("gutterSize","0px"),t.xp6(1),t.Q6J("ngForOf",n.comederosList),t.xp6(1),t.Q6J("colspan",1)("rowspan",1))},directives:[_,f.Il,h.sg,f.DX,c.a8,c.G2,c.dn],styles:[".card[_ngcontent-%COMP%]{width:60%;height:auto}.container[_ngcontent-%COMP%]{width:90%;height:auto;justify-content:center;margin:auto}.mat-grid-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.mat-grid-tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center}"]}),o})()},{path:"comedero/:id",component:z},{path:"menu/:id",component:(()=>{class o{constructor(e,n){this.route=e,this.router=n,this.params=e.snapshot.params,this.id=this.params.id}ngOnInit(){}info(){this.router.navigate(["/home/comedero/"+this.id])}alimentar(){this.router.navigate(["/home/alimentar/"+this.id])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.gz),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-menu"]],decls:14,vars:5,consts:[["rowHeight","2:2",3,"cols"],[3,"colspan","rowspan"],[1,"card",3,"click"],["mat-card-image","","src","../../../../assets/comedero-para-mascotas.png"],["mat-card-image","","src","../../../../assets/informacion.png"]],template:function(e,n){1&e&&(t._UZ(0,"app-toolbar"),t.TgZ(1,"mat-grid-list",0),t.TgZ(2,"mat-grid-tile",1),t.TgZ(3,"mat-card",2),t.NdJ("click",function(){return n.alimentar()}),t._UZ(4,"img",3),t.TgZ(5,"mat-card-content"),t.TgZ(6,"h2"),t._uU(7," Alimentar "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"mat-grid-tile",1),t.TgZ(9,"mat-card",2),t.NdJ("click",function(){return n.info()}),t._UZ(10,"img",4),t.TgZ(11,"mat-card-content"),t.TgZ(12,"h2"),t._uU(13," Informaci\xf3n "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("cols",2),t.xp6(1),t.Q6J("colspan",1)("rowspan",1),t.xp6(6),t.Q6J("colspan",1)("rowspan",1))},directives:[_,f.Il,f.DX,c.a8,c.G2,c.dn],styles:[".card[_ngcontent-%COMP%]{width:50%;height:auto}.mat-grid-list[_ngcontent-%COMP%]{margin-top:20%;display:flex;flex-wrap:wrap;justify-content:center}.mat-grid-tile[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center}@media (min-width: 400px){.mat-card-image[_ngcontent-%COMP%]{margin:auto;width:90%;height:auto}}@media (min-width: 600px){.mat-grid-list[_ngcontent-%COMP%]{margin-top:5%}}@media (min-width: 1000px){.mat-grid-list[_ngcontent-%COMP%]{margin-top:0%}}"]}),o})()},{path:"alimentar/:id",component:I},{path:"**",loadChildren:()=>r.e(584).then(r.bind(r,5584)).then(o=>o.PagenotfoundModule)}];let V=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(E)],u.Bz]}),o})();var W=r(4764);let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.ez,V,W.q]]}),o})()}}]);