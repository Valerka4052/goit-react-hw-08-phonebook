"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[84],{84:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,i,o,a,l,s,c,u,d=t(6727),p=t(168),m=t(7402),x=t(5705),h=(0,m.Z)(x.l0)(r||(r=(0,p.Z)(["\ndisplay:flex;\nflex-direction: column;\npadding:40px;\nwidth: 800px;\nheight:auto;\nborder-radius: 40px;\nbackground-color:lightgreen;\n"]))),f=(0,m.Z)(x.J9)(i||(i=(0,p.Z)(["\nmargin-bottom:40px;\n"]))),b=(0,m.Z)(x.gN)(o||(o=(0,p.Z)(["\nwidth:80%;\npadding:15px 25px;\nfont-size:30px;\nfont-weight:500;\nmargin-top:20px;\nborder-radius: 15px;\n"]))),g=(0,m.Z)(x.Bc)(a||(a=(0,p.Z)(["\ncolor:red;\nfont-size:15px;\nfont-weight:500;\n"]))),v=m.Z.label(l||(l=(0,p.Z)(["\ndisplay:flex;\nflex-direction: column;\nalign-items:center;\nmargin-bottom:20px;\n"]))),w=m.Z.button(s||(s=(0,p.Z)(["\ndisplay:inline-flex;\njustify-content: center;\nalign-items:center;\nmargin-left:auto;\nmargin-right:auto;\nmargin-top:30px;\nwidth:50%;\nfont-size:30px;\nfont-weight:500;\npadding:15px 25px;\nborder-radius: 15px;\nbackground-color:sandybrown;\ncursor:pointer;\n&:hover{\n    background-color:saddlebrown;\n    color:whitesmoke;\n}\n"]))),j=t(9434),y=t(25),Z=t(184);function k(){var n=(0,j.I0)(),e=(0,j.v9)((function(n){return n.contacts.items})),t=d.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(5).required("A phone number is required"),r=d.Ry({name:d.Z_().required(),number:t});return(0,Z.jsx)(f,{initialValues:{name:"",number:""},onSubmit:function(t){!function(t){if(""!==t.name&&""!==t.number){if(e.find((function(n){return n.name===t.name})))return alert("".concat(t.name," is already in contacts"));var r={name:t.name,number:t.number};n((0,y.uK)(r)),t.name="",t.number=""}}(t)},validationSchema:r,children:(0,Z.jsxs)(h,{children:[(0,Z.jsxs)(v,{children:["Name",(0,Z.jsx)(b,{name:"name"}),(0,Z.jsx)(g,{name:"name",component:"p"})]}),(0,Z.jsxs)(v,{children:["Number",(0,Z.jsx)(b,{name:"number"}),(0,Z.jsx)(g,{name:"number",type:"number",component:"p"})]}),(0,Z.jsx)(w,{type:"submit",children:"add contact"})]})})}var C,z=m.Z.li(c||(c=(0,p.Z)(["\nfont-size:30px;\nfont-weight:500;\ndisplay:flex;\nalign-items: baseline;\njustify-content:space-between;\nmargin-top:20px;\n"]))),_=m.Z.button(u||(u=(0,p.Z)(["\ndisplay:inline-block;\nalign-items:center;\nfont-size:30px;\nfont-weight:500;\npadding:15px 25px;\nborder-radius: 15px;\nbackground-color:sandybrown;\ncursor:pointer;\n&:hover{\n    background-color:saddlebrown;\n    color:whitesmoke;\n}\n"])));function A(n){var e=n.name,t=n.number,r=n.id,i=(0,j.I0)();return(0,Z.jsxs)(z,{children:[e,": ",t,(0,Z.jsx)(_,{onClick:function(){i((0,y.zY)(r))},type:"button",children:"Delete"})]})}var I,L,q,N=m.Z.ul(C||(C=(0,p.Z)(["\ndisplay:flex;\nflex-direction: column;\npadding:40px;\nwidth: 800px;\nmax-height:100vh;\nborder-radius: 40px;\nlist-style:none;\n"])));function S(){var n=(0,j.v9)((function(n){return n.contacts.items})),e=(0,j.v9)((function(n){return n.filter}));if(n){var t=e.toLowerCase(),r=n.filter((function(n){return n.name.toLowerCase().includes(t)}));return n.length>0&&(0,Z.jsx)(N,{children:r.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,Z.jsx)(A,{name:e,number:t,id:r},r)}))})}}var E=m.Z.div(I||(I=(0,p.Z)(["\ndisplay:flex;\nflex-direction: column;\npadding:40px;\nwidth: 800px;\nheight:auto;\nborder-radius: 40px;\nbackground-color:lightgreen;\n"]))),F=m.Z.label(L||(L=(0,p.Z)(["\ndisplay:flex;\nflex-direction: column;\nalign-items:center;\nmargin-bottom:20px;\n"]))),R=m.Z.input(q||(q=(0,p.Z)(["\nwidth:80%;\npadding:15px 25px;\nfont-size:30px;\nfont-weight:500;\nmargin-top:20px;\nborder-radius: 15px;\n"]))),B=t(4867);function D(){var n=(0,j.I0)();return(0,Z.jsx)(E,{children:(0,Z.jsxs)(F,{children:["Find contacts by name",(0,Z.jsx)(R,{onChange:function(e){return n((0,B.k)(e.target.value))},name:"filter",type:"text"})]})})}var J,K=t(8966),P=m.Z.div(J||(J=(0,p.Z)(["\nposition:absolute;\n/* pointer-events: none; */\n width: 20%;\n  height: 20%;\n  /* overflow: auto; */\n  margin: auto;\n  position: absolute;\n  top: -50%; left: 0; bottom: 0; right: 0;\n  opacity:.6;\n"])));function T(){return(0,Z.jsx)(P,{children:(0,Z.jsx)(K.yk,{height:"100%",width:"100%",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})})}var V=t(2791);var Y=function(){var n=(0,j.v9)((function(n){return n.contacts})),e=n.error,t=n.isLoading,r=(0,j.I0)();return(0,V.useEffect)((function(){r((0,y.yF)())}),[r]),(0,Z.jsx)("div",{style:{position:"relative"},children:(0,Z.jsxs)("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"},children:[e?(0,Z.jsx)("h1",{children:e.message}):(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h1",{children:"Phonebook"}),(0,Z.jsx)(k,{}),(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsx)(D,{})]}),(0,Z.jsx)(S,{}),t&&(0,Z.jsx)(T,{})]})})}}}]);
//# sourceMappingURL=84.d038ae3d.chunk.js.map