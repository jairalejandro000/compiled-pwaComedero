"use strict";(self.webpackChunkpwaComedero=self.webpackChunkpwaComedero||[]).push([[592],{7524:(i,n,r)=>{r.d(n,{K:()=>u});var o=r(8260),s=r(3668),_=r(4522),a=r(3886);let u=(()=>{class e{constructor(t,h){this.http=t,this.router=h}comederos(){return this.http.get(`${o.N.API_URL}User/Raspberries`)}profile(){return this.http.get(`${o.N.API_URL}User/profile`)}logout(){localStorage.removeItem("token"),this.router.navigate(["/"])}sensors(t){return this.http.get(`${o.N.API_URL}RaspSensor/Sensors/`+t)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(_.eN),s.LFG(a.F0))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);