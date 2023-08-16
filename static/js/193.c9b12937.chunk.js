"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[193],{4193:function(n,e,a){a.r(e),a.d(e,{default:function(){return R}});var t=a(8870),r=a(890),i=a(9439),s=a(6727),o=a(5821),l=a(1686),c=a.n(l),d=a(6151),u=a(971),m=a(5705),x=a(3329);function h(){var n=(0,o.wY)(null).data,e=(0,o.Tn)(),a=(0,i.Z)(e,2),r=a[0],l=a[1].isLoading,h=s.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(5).required("A phone number is required"),p=s.Ry({name:s.Z_().required(),number:h});return(0,x.jsx)(m.J9,{initialValues:{name:"",number:""},onSubmit:function(e){if(n){if(""===e.name||""===e.number)return;if(n.find((function(n){return n.name===e.name})))return c().Report.info("\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435","".concat(e.name," is already in contacts"),"\u043e\u043a");var a={name:e.name,number:e.number};r(a),e.name="",e.number=""}},validationSchema:p,children:(0,x.jsx)(m.l0,{children:(0,x.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",width:"100%",ml:"auto",mr:"auto"},children:[(0,x.jsx)(m.gN,{component:u.n,name:"name",label:"name",id:"standard-basic",variant:"standard",disabled:!1,margin:"normal"}),(0,x.jsx)(m.gN,{component:u.n,name:"number",label:"number",id:"standard-basic",variant:"standard",disabled:!1,margin:"normal"}),(0,x.jsx)(t.Z,{sx:{ml:"auto"},children:(0,x.jsx)(d.Z,{variant:"contained",color:"primary",type:"submit",disabled:l,children:l?"please wait...":"add contact"})})]})})})}var p=a(493),b=a(2791),f=a(4852);function j(n){var e=n.array,a=n.index,l=n.contactProps,h=(0,o.Nt)(),p=(0,i.Z)(h,2),j=p[0],v=p[1].isLoading,y=(0,o.i)(),Z=(0,i.Z)(y,2),w=Z[0],g=Z[1].isLoading,C=(0,b.useState)(!1),k=(0,i.Z)(C,2),L=k[0],R=k[1],q={name:l.name,number:l.number},A=s.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(5).required("A phone number is required"),S=s.Ry({name:s.Z_().max(20).required(),number:A});return(0,x.jsx)(f.ZP,{sx:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid black"},children:L?(0,x.jsx)(m.J9,{initialValues:q,onSubmit:function(n){var t={name:n.name,number:n.number};e.find((function(n,e){return n.name===t.name&&e!==a}))?c().Report.info("warning!","a contact with that name already exists","ok"):e.find((function(n){var e=n.name,a=n.number;return e===t.name&&a===t.number}))?c().Report.info("warning!","cotact data has not changed","ok"):(w({id:l.id,contact:t}),R(!1))},validationSchema:S,children:(0,x.jsx)(m.l0,{style:{width:"100%"},children:(0,x.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,x.jsxs)(t.Z,{children:[(0,x.jsx)(m.gN,{component:u.n,name:"name",variant:"standard",disabled:!1}),(0,x.jsx)(m.gN,{component:u.n,name:"number",variant:"standard",disabled:!1})]}),(0,x.jsxs)(t.Z,{children:[(0,x.jsx)(d.Z,{variant:"contained",color:"secondary",type:"submit",sx:{ml:"10px"},children:"Confirm"}),(0,x.jsx)(d.Z,{variant:"contained",color:"secondary",type:"button",onClick:function(){R(!1)},sx:{ml:"10px"},children:"Cancel"})]})," "]})})}):g||v?(0,x.jsx)(r.Z,{children:(0,x.jsx)("b",{children:"please wait............"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(t.Z,{children:(0,x.jsxs)(r.Z,{children:[(0,x.jsxs)("b",{children:[l.name," : "]})," ",l.number]})}),(0,x.jsxs)(t.Z,{sx:{ml:"auto"},children:[(0,x.jsx)(d.Z,{variant:"contained",onClick:function(){R(!0)},type:"button",sx:{ml:"10px"},children:"Edit"}),(0,x.jsx)(d.Z,{variant:"contained",onClick:function(){j(l.id)},type:"button",sx:{ml:"10px"},children:"Delete"})]})]})})}var v=a(5048);function y(){var n=(0,o.wY)(null).data,e=(0,v.v9)((function(n){return n.filter}));if(!n)return null;var a=e.trim().toLowerCase(),i=n.filter((function(n){return n.name.toLowerCase().includes(a)}));return n.length>0?(0,x.jsxs)(t.Z,{sx:{width:"auto",pt:"40px"},children:[(0,x.jsxs)(r.Z,{variant:"h3",children:["Contacts [",n.length,"]"]}),(0,x.jsx)(p.Z,{children:i.map((function(n,e){var a=n.id,t=n.name,r=n.number;return(0,x.jsx)(j,{index:e,array:i,contactProps:{id:a,name:t,number:r},number:"",id:"",name:""},a)}))})]}):(0,x.jsx)(r.Z,{variant:"h3",children:"There is no contacts yet"})}var Z=a(9637),w=a(7116);function g(){var n=(0,v.I0)();return(0,x.jsx)(t.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",width:"100%",ml:"auto",mr:"auto"},children:(0,x.jsx)(w.Z,{name:"filter",type:"text",label:"Find contacts by name",id:"standard-basic",variant:"standard",disabled:!1,onChange:function(e){return n((0,Z.k)(e.target.value))}})})}var C=a(1614),k=a(8966);function L(){return(0,x.jsx)(C.Z,{sx:{p:"40px",opacity:".6"},children:(0,x.jsx)(k.yk,{height:"50%",width:"50%",color:"#11790f",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})})}var R=function(){var n=(0,o.wY)(null),e=n.isLoading,a=n.refetch;return(0,b.useEffect)((function(){a()}),[a]),e?(0,x.jsx)(L,{}):(0,x.jsxs)(t.Z,{sx:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",alignItems:"flex-start",p:"40px"},children:[(0,x.jsxs)(t.Z,{sx:{width:"auto"},children:[(0,x.jsx)(r.Z,{variant:"h2",children:"Phonebook"}),(0,x.jsx)(h,{}),(0,x.jsx)(g,{})]}),(0,x.jsx)(y,{})]})}}}]);
//# sourceMappingURL=193.c9b12937.chunk.js.map