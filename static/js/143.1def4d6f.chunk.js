"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[143],{5143:function(n,e,a){a.r(e),a.d(e,{default:function(){return R}});var r=a(8870),t=a(890),i=a(9439),s=a(6727),o=a(9046),d=a(1686),c=a.n(d),l=a(6151),u=a(971),m=a(5705),x=a(184);function h(){var n=(0,o.wY)().data,e=(0,o.Tn)(),a=(0,i.Z)(e,2),t=a[0],d=a[1].isLoading,h=s.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(5).required("A phone number is required"),b=s.Ry({name:s.Z_().required(),number:h});return(0,x.jsx)(m.J9,{initialValues:{name:"",number:""},onSubmit:function(e){if(""!==e.name&&""!==e.number){if(n.find((function(n){return n.name===e.name})))return c().Report.info("".concat(e.name," is already in contacts"));var a={name:e.name,number:e.number};t(a),e.name="",e.number=""}},validationSchema:b,children:(0,x.jsx)(m.l0,{children:(0,x.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",width:"100%",ml:"auto",mr:"auto",p:"30px"},children:[(0,x.jsx)(m.gN,{component:u.n,name:"name",label:"name",id:"standard-basic",variant:"standard",disabled:!1,margin:"normal"}),(0,x.jsx)(m.gN,{component:u.n,name:"number",label:"number",id:"standard-basic",variant:"standard",disabled:!1,margin:"normal"}),(0,x.jsx)(r.Z,{sx:{ml:"auto"},children:(0,x.jsx)(l.Z,{variant:"contained",color:"primary",type:"submit",disabled:d,children:d?"please wait...":"add contact"})})]})})})}var b=a(493),p=a(2791),f=a(4852);function j(n){var e=n.name,a=n.number,d=n.id,h=n.array,b=n.index,j=(0,o.Nt)(),v=(0,i.Z)(j,2),y=v[0],Z=v[1].isLoading,w=(0,o.i)(),g=(0,i.Z)(w,2),C=g[0],k=g[1].isLoading,L=(0,p.useState)(!1),R=(0,i.Z)(L,2),q=R[0],A=R[1],S={name:e,number:a},_=s.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(5).required("A phone number is required"),N=s.Ry({name:s.Z_().max(20).required(),number:_});return(0,x.jsx)(f.ZP,{sx:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid black"},children:q?(0,x.jsx)(m.J9,{initialValues:S,onSubmit:function(n){var e={name:n.name,number:n.number};h.find((function(n,a){return n.name===e.name&&a!==b}))?c().Report.info("a contact with that name already exists"):h.find((function(n){var a=n.name,r=n.number;return a===e.name&&r===e.number}))?c().Report.info("cotact data has not changed"):(C({id:d,contact:e}),A(!1))},validationSchema:N,children:(0,x.jsx)(m.l0,{style:{width:"100%"},children:(0,x.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,x.jsxs)(r.Z,{children:[(0,x.jsx)(m.gN,{component:u.n,name:"name",variant:"standard",disabled:!1}),(0,x.jsx)(m.gN,{component:u.n,name:"number",variant:"standard",disabled:!1})]}),(0,x.jsxs)(r.Z,{children:[(0,x.jsx)(l.Z,{variant:"contained",color:"secondary",type:"submit",sx:{mr:"10px"},children:"Confirm"}),(0,x.jsx)(l.Z,{variant:"contained",color:"secondary",type:"button",onClick:function(){A(!1)},children:"Cancel"})]})," "]})})}):k||Z?(0,x.jsx)(t.Z,{children:(0,x.jsx)("b",{children:"please wait............"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.Z,{children:(0,x.jsxs)(t.Z,{children:[(0,x.jsxs)("b",{children:[e," : "]})," ",a]})}),(0,x.jsxs)(r.Z,{sx:{ml:"auto"},children:[(0,x.jsx)(l.Z,{variant:"contained",onClick:function(){A(!0)},type:"button",sx:{mr:"10px"},children:"Edit"}),(0,x.jsx)(l.Z,{variant:"contained",onClick:function(){y(d)},type:"button",children:"Delete"})]})]})})}var v=a(5048);function y(){var n=(0,o.wY)().data,e=(0,v.v9)((function(n){return n.filter}));if(n){var a=e.toLowerCase(),i=n.filter((function(n){return n.name.toLowerCase().includes(a)}));return n.length>0?(0,x.jsxs)(r.Z,{sx:{width:"50%"},children:[(0,x.jsxs)(t.Z,{variant:"h3",children:["Contacts [",n.length,"]"]}),(0,x.jsx)(b.Z,{children:i.map((function(n,e){var a=n.name,r=n.number,t=n.id;return(0,x.jsx)(j,{index:e,array:i,name:a,number:r,id:t},t)}))})]}):(0,x.jsx)(t.Z,{variant:"h3",children:"There is no contacts yet"})}}var Z=a(4867),w=a(7116);function g(){var n=(0,v.I0)();return(0,x.jsx)(r.Z,{sx:{display:"flex",flexDirection:"column",justifyContent:"flex-end",width:"100%",ml:"auto",mr:"auto",p:"30px"},children:(0,x.jsx)(w.Z,{name:"filter",type:"text",label:"Find contacts by name",id:"standard-basic",variant:"standard",disabled:!1,onChange:function(e){return n((0,Z.k)(e.target.value))}})})}var C=a(1614),k=a(8966);function L(){return(0,x.jsx)(C.Z,{sx:{p:"40px",opacity:".6"},children:(0,x.jsx)(k.yk,{height:"50%",width:"50%",color:"#11790f",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})})}var R=function(){var n=(0,o.wY)(),e=n.error,a=n.isLoading,i=n.refetch;return(0,p.useEffect)((function(){i()}),[i]),a?(0,x.jsx)(L,{}):(0,x.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",p:"40px"},children:[e?(0,x.jsx)("h1",{children:e.message}):(0,x.jsxs)(r.Z,{sx:{width:"40%"},children:[(0,x.jsx)(t.Z,{variant:"h2",children:"Phonebook"}),(0,x.jsx)(h,{}),(0,x.jsx)(g,{})]}),(0,x.jsx)(y,{})]})}}}]);
//# sourceMappingURL=143.1def4d6f.chunk.js.map