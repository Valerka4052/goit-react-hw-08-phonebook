"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[84],{84:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,o,a,l,c,u=t(6727),s=t(168),d=t(7402),m=t(5705),p=(0,d.Z)(m.l0)(r||(r=(0,s.Z)(["\ndisplay:flex;\nflex-direction: column;\npadding:40px;\nwidth: 800px;\nheight:auto;\nborder-radius: 40px;\nbackground-color:lightgreen;\n"]))),x=(0,d.Z)(m.J9)(i||(i=(0,s.Z)(["\nmargin-bottom:40px;\n"]))),h=(0,d.Z)(m.gN)(o||(o=(0,s.Z)(["\nwidth:80%;\npadding:15px 25px;\nfont-size:30px;\nfont-weight:500;\nmargin-top:20px;\nborder-radius: 15px;\n"]))),b=(0,d.Z)(m.Bc)(a||(a=(0,s.Z)(["\ncolor:red;\nfont-size:15px;\nfont-weight:500;\n"]))),f=d.Z.label(l||(l=(0,s.Z)(["\ndisplay:flex;\nflex-direction: column;\nalign-items:center;\nmargin-bottom:20px;\n"]))),g=d.Z.button(c||(c=(0,s.Z)(["\ndisplay:inline-flex;\njustify-content: center;\nalign-items:center;\nmargin-left:auto;\nmargin-right:auto;\nmargin-top:30px;\nwidth:50%;\nfont-size:30px;\nfont-weight:500;\npadding:15px 25px;\nborder-radius: 15px;\nbackground-color:sandybrown;\ncursor:pointer;\n&:hover{\n    background-color:saddlebrown;\n    color:whitesmoke;\n}\n"]))),j=t(9434),v=t(25),y=t(184);function w(){var n=(0,j.I0)(),e=(0,j.v9)((function(n){return n.contacts.items})),t=u.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(5).required("A phone number is required"),r=u.Ry({name:u.Z_().required(),number:t});return(0,y.jsx)(x,{initialValues:{name:"",number:""},onSubmit:function(t){!function(t){if(""!==t.name&&""!==t.number){if(e.find((function(n){return n.name===t.name})))return alert("".concat(t.name," is already in contacts"));var r={name:t.name,number:t.number};n((0,v.uK)(r)),t.name="",t.number=""}}(t)},validationSchema:r,children:(0,y.jsxs)(p,{children:[(0,y.jsxs)(f,{children:["Name",(0,y.jsx)(h,{name:"name"}),(0,y.jsx)(b,{name:"name",component:"p"})]}),(0,y.jsxs)(f,{children:["Number",(0,y.jsx)(h,{name:"number"}),(0,y.jsx)(b,{name:"number",type:"number",component:"p"})]}),(0,y.jsx)(g,{type:"submit",children:"add contact"})]})})}var Z,k,C,z=t(9439),A=d.Z.li(Z||(Z=(0,s.Z)(["\nfont-size:30px;\nfont-weight:500;\ndisplay:flex;\nalign-items: baseline;\njustify-content:space-between;\nmargin-top:20px;\n"]))),q=d.Z.button(k||(k=(0,s.Z)(["\ndisplay:inline-block;\nalign-items:center;\nfont-size:30px;\nfont-weight:500;\npadding:15px 25px;\nborder-radius: 15px;\nbackground-color:sandybrown;\ncursor:pointer;\n&:hover{\n    background-color:saddlebrown;\n    color:whitesmoke;\n}\n"]))),S=t(2791);function _(n){var e=n.name,t=n.number,r=n.id,i=n.array,o=n.index;console.log(i);var a=(0,S.useState)(!1),l=(0,z.Z)(a,2),c=l[0],s=l[1],d=(0,j.I0)(),p={name:e,number:t},x=u.Rx().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(5).required("A phone number is required"),h=u.Ry({name:u.Z_().required(),number:x});return(0,y.jsx)(A,{children:c?(0,y.jsx)(m.J9,{initialValues:p,onSubmit:function(n){var e={name:n.name,number:n.number};i.find((function(n,t){return n.name===e.name&&t!==o}))?alert("\u0442\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0432\u0441\u0442\u0432\u0443\u0435\u0442"):i.find((function(n){var t=n.name,r=n.number;return t===e.name&&r===e.number}))?alert("\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u043d\u0435\u0441\u0435\u043d\u044b"):(d((0,v.mP)({id:r,contact:e})),s(!1))},validationSchema:h,children:(0,y.jsxs)(m.l0,{children:[(0,y.jsx)(m.gN,{name:"name"}),(0,y.jsx)(m.Bc,{name:"name",component:"p"}),(0,y.jsx)(m.gN,{name:"number"}),(0,y.jsx)(m.Bc,{name:"number",type:"number",component:"p"}),(0,y.jsx)(q,{type:"submit",children:"Confirm"}),(0,y.jsx)(q,{type:"button",onClick:function(){s(!1)},children:"Cancel"})]})}):(0,y.jsxs)("div",{children:[e,": ",t,(0,y.jsx)(q,{onClick:function(){s(!0)},type:"button",children:"Edit"}),(0,y.jsx)(q,{onClick:function(){d((0,v.zY)(r))},type:"button",children:"Delete"})]})})}var N,E,I,L=d.Z.ul(C||(C=(0,s.Z)(["\ndisplay:flex;\nflex-direction: column;\npadding:40px;\nwidth: 800px;\nmax-height:100vh;\nborder-radius: 40px;\nlist-style:none;\n"])));function R(){var n=(0,j.v9)((function(n){return n.contacts.items})),e=(0,j.v9)((function(n){return n.filter}));if(n){var t=e.toLowerCase(),r=n.filter((function(n){return n.name.toLowerCase().includes(t)}));return n.length>0&&(0,y.jsx)(L,{children:r.map((function(n,e){var t=n.name,i=n.number,o=n.id;return(0,y.jsx)(_,{index:e,array:r,name:t,number:i,id:o},o)}))})}}var B=d.Z.div(N||(N=(0,s.Z)(["\ndisplay:flex;\nflex-direction: column;\npadding:40px;\nwidth: 800px;\nheight:auto;\nborder-radius: 40px;\nbackground-color:lightgreen;\n"]))),F=d.Z.label(E||(E=(0,s.Z)(["\ndisplay:flex;\nflex-direction: column;\nalign-items:center;\nmargin-bottom:20px;\n"]))),J=d.Z.input(I||(I=(0,s.Z)(["\nwidth:80%;\npadding:15px 25px;\nfont-size:30px;\nfont-weight:500;\nmargin-top:20px;\nborder-radius: 15px;\n"]))),P=t(4867);function T(){var n=(0,j.I0)();return(0,y.jsx)(B,{children:(0,y.jsxs)(F,{children:["Find contacts by name",(0,y.jsx)(J,{onChange:function(e){return n((0,P.k)(e.target.value))},name:"filter",type:"text"})]})})}var V,D=t(8966),K=d.Z.div(V||(V=(0,s.Z)(["\nposition:absolute;\n/* pointer-events: none; */\n width: 20%;\n  height: 20%;\n  /* overflow: auto; */\n  margin: auto;\n  position: absolute;\n  top: -50%; left: 0; bottom: 0; right: 0;\n  opacity:.6;\n"])));function Y(){return(0,y.jsx)(K,{children:(0,y.jsx)(D.yk,{height:"100%",width:"100%",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})})}var G=function(){var n=(0,j.v9)((function(n){return n.contacts})),e=n.error,t=n.isLoading,r=(0,j.I0)();return(0,S.useEffect)((function(){r((0,v.yF)())}),[r]),(0,y.jsx)("div",{style:{position:"relative"},children:(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"center",textAlign:"center"},children:[e?(0,y.jsx)("h1",{children:e.message}):(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsx)(w,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(T,{})]}),(0,y.jsx)(R,{}),t&&(0,y.jsx)(Y,{})]})})}}}]);
//# sourceMappingURL=84.675b556e.chunk.js.map