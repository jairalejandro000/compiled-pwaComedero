"use strict";(self.webpackChunkpwaComedero=self.webpackChunkpwaComedero||[]).push([[845],{4845:(U,u,n)=>{n.r(u),n.d(u,{UserModule:()=>P});var d=n(6019),m=n(3886),r=n(9133),t=n(3668),c=n(7524),p=n(8643),g=n(9112),f=n(7706),h=n(138);const Z=[{path:"profile",component:(()=>{class o{constructor(e){this.userService=e,this.formProfile={},this.formBuilder()}ngOnInit(){this.profile()}formBuilder(){this.formProfile=new r.cw({name:new r.NI(null),lastname:new r.NI(null),username:new r.NI(null),email:new r.NI(null)})}setData(){var e,a,i,s;this.formProfile.setValue({username:null===(e=this.user)||void 0===e?void 0:e.username,name:null===(a=this.user)||void 0===a?void 0:a.name,lastname:null===(i=this.user)||void 0===i?void 0:i.lastname,email:null===(s=this.user)||void 0===s?void 0:s.email})}profile(){this.userService.profile().subscribe({next:e=>{this.user=e.data,this.setData()},error:e=>console.log(e)})}logout(){this.userService.logout()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.K))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile"]],decls:26,vars:5,consts:[["routerLink","/"],[1,"spacer"],[3,"click"],[1,"container"],["src","../../../../assets/comedero-profile.png",1,"profile"],[3,"formGroup"],["appearance","outline"],["matInput","","formControlName","username",3,"readonly"],["matInput","","formControlName","name",3,"readonly"],["matInput","","formControlName","lastname",3,"readonly"],["matInput","","formControlName","email",3,"readonly"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-toolbar"),t.TgZ(1,"mat-icon",0),t._uU(2,"home"),t.qZA(),t._UZ(3,"span",1),t.TgZ(4,"mat-icon",2),t.NdJ("click",function(){return a.logout()}),t._uU(5,"exit_to_app"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"img",4),t._UZ(8,"br"),t.TgZ(9,"form",5),t.TgZ(10,"mat-form-field",6),t.TgZ(11,"mat-label"),t._uU(12,"username"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"mat-form-field",6),t.TgZ(15,"mat-label"),t._uU(16,"Name"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t.TgZ(18,"mat-form-field",6),t.TgZ(19,"mat-label"),t._uU(20,"Lastname"),t.qZA(),t._UZ(21,"input",9),t.qZA(),t.TgZ(22,"mat-form-field",6),t.TgZ(23,"mat-label"),t._uU(24,"Email"),t.qZA(),t._UZ(25,"input",10),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(9),t.Q6J("formGroup",a.formProfile),t.xp6(4),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0))},directives:[p.Ye,g.Hw,m.rH,r._Y,r.JL,r.sg,f.KE,f.hX,h.Nt,r.Fj,r.JJ,r.u],styles:[".mat-toolbar[_ngcontent-%COMP%]{background:#D9D9D9;height:10%;width:100%}.mat-icon[_ngcontent-%COMP%]{font-size:30px}.profile[_ngcontent-%COMP%]{width:20%;height:auto}.mat-form-field[_ngcontent-%COMP%]{width:100%}@media (min-width: 700px){.profile[_ngcontent-%COMP%]{width:18%}.mat-icon[_ngcontent-%COMP%]{font-size:40px}}@media (min-width: 1000px){.profile[_ngcontent-%COMP%]{width:15%}.mat-icon[_ngcontent-%COMP%]{font-size:50px;margin-top:1%;margin-bottom:auto}}.container[_ngcontent-%COMP%]{width:80%;height:auto;margin:5% auto auto;display:block;justify-content:center;text-align:center}.spacer[_ngcontent-%COMP%]{flex:.95 .95 auto}"]}),o})()},{path:"**",loadChildren:()=>n.e(584).then(n.bind(n,5584)).then(o=>o.PagenotfoundModule)}];let v=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(Z)],m.Bz]}),o})();var C=n(6771);let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,v,C.q]]}),o})()}}]);