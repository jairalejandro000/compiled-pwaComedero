"use strict";(self.webpackChunkpwaComedero=self.webpackChunkpwaComedero||[]).push([[845],{4845:(M,u,o)=>{o.r(u),o.d(u,{UserModule:()=>P});var f=o(6019),m=o(3886),r=o(9133),t=o(3668),c=o(7524),p=o(8643),g=o(9112),d=o(7706),h=o(138);const Z=[{path:"profile",component:(()=>{class e{constructor(n){this.userService=n,this.formProfile={},this.formBuilder()}ngOnInit(){this.profile()}formBuilder(){this.formProfile=new r.cw({name:new r.NI(null),lastname:new r.NI(null),username:new r.NI(null),email:new r.NI(null)})}setData(){var n,a,l,s;this.formProfile.setValue({username:null===(n=this.user)||void 0===n?void 0:n.username,name:null===(a=this.user)||void 0===a?void 0:a.name,lastname:null===(l=this.user)||void 0===l?void 0:l.lastname,email:null===(s=this.user)||void 0===s?void 0:s.email})}profile(){this.userService.profile().subscribe({next:n=>{this.user=n.data,this.setData()},error:n=>console.log(n)})}logout(){this.userService.logout()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],decls:27,vars:5,consts:[["routerLink","/"],[1,"spacer"],[3,"click"],[1,"container"],["src","../../../../assets/comedero-profile.png",1,"profile"],[3,"formGroup"],["appearance","outline"],["matInput","","formControlName","username",3,"readonly"],[1,"name"],["matInput","","formControlName","name",3,"readonly"],["matInput","","formControlName","lastname",3,"readonly"],["matInput","","formControlName","email",3,"readonly"]],template:function(n,a){1&n&&(t.TgZ(0,"mat-toolbar"),t.TgZ(1,"mat-icon",0),t._uU(2,"home"),t.qZA(),t._UZ(3,"span",1),t.TgZ(4,"mat-icon",2),t.NdJ("click",function(){return a.logout()}),t._uU(5,"exit_to_app"),t.qZA(),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"img",4),t._UZ(8,"br"),t.TgZ(9,"form",5),t.TgZ(10,"mat-form-field",6),t.TgZ(11,"mat-label"),t._uU(12,"username"),t.qZA(),t._UZ(13,"input",7),t.qZA(),t.TgZ(14,"div",8),t.TgZ(15,"mat-form-field",6),t.TgZ(16,"mat-label"),t._uU(17,"Name"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"mat-form-field",6),t.TgZ(20,"mat-label"),t._uU(21,"Lastname"),t.qZA(),t._UZ(22,"input",10),t.qZA(),t.qZA(),t.TgZ(23,"mat-form-field",6),t.TgZ(24,"mat-label"),t._uU(25,"Email"),t.qZA(),t._UZ(26,"input",11),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(9),t.Q6J("formGroup",a.formProfile),t.xp6(4),t.Q6J("readonly",!0),t.xp6(5),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0),t.xp6(4),t.Q6J("readonly",!0))},directives:[p.Ye,g.Hw,m.rH,r._Y,r.JL,r.sg,d.KE,d.hX,h.Nt,r.Fj,r.JJ,r.u],styles:[".mat-toolbar[_ngcontent-%COMP%]{background:#D9D9D9;height:10%;width:100%}.mat-icon[_ngcontent-%COMP%]{font-size:30px}.profile[_ngcontent-%COMP%]{width:20%;height:auto}.mat-form-field[_ngcontent-%COMP%]{width:100%}.container[_ngcontent-%COMP%]{width:80%;height:auto;margin:5% auto auto;display:block;justify-content:center;text-align:center}.spacer[_ngcontent-%COMP%]{flex:.95 .95 auto}.name[_ngcontent-%COMP%]{width:50%;display:inline-flex;align-items:center;justify-content:center}@media (min-width: 1000px){.profile[_ngcontent-%COMP%]{width:15%}.mat-icon[_ngcontent-%COMP%]{font-size:50px;margin-top:1%;margin-bottom:auto}.name[_ngcontent-%COMP%]{width:100%}}@media (min-width: 700px){.profile[_ngcontent-%COMP%]{width:18%}.mat-icon[_ngcontent-%COMP%]{font-size:40px}.name[_ngcontent-%COMP%]{width:100%}}"]}),e})()},{path:"**",loadChildren:()=>o.e(584).then(o.bind(o,5584)).then(e=>e.PagenotfoundModule)}];let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.Bz.forChild(Z)],m.Bz]}),e})();var v=o(6771);let P=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[f.ez,C,v.q]]}),e})()}}]);