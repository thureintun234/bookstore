(this["webpackJsonpbook-store-management"]=this["webpackJsonpbook-store-management"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(28),o=n.n(c),r=n(8),s=n(15),i=n(14),b=n(6),j=n(20),l=n(17),u=n(50),d=n(53),O=n(51),h=n(1),m=function(e){var t=Object(a.useState)({bookname:e.book?e.book.bookname:"",author:e.book?e.book.author:"",quantity:e.book?e.book.quantity:"",price:e.book?e.book.price:"",date:e.book?e.book.date:""}),n=Object(s.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),b=Object(s.a)(i,2),j=b[0],m=b[1],x=c.bookname,k=c.author,p=c.price,f=c.quantity,v=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"quantity":""!==a&&parseInt(a)!==+a||o((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(l.a)({},n,a))}));break;case"price":(""===a||a.match(/^\d{1,}(\.\d{0,2})?$/))&&o((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(l.a)({},n,a))}));break;default:o((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(l.a)({},n,a))}))}};return Object(h.jsxs)("div",{className:"main-form",children:[j&&Object(h.jsx)("p",{className:"errorMsg",children:j}),Object(h.jsxs)(u.a,{onSubmit:function(t){t.preventDefault();var n="";if([x,k,p,f].every((function(e){var t="".concat(e).trim();return""!==t&&"0"!==t}))){var a={id:Object(O.a)(),bookname:x,author:k,price:p,quantity:f,date:new Date};e.handleOnSubmit(a)}else n="Please fill out all the fields";m(n)},children:[Object(h.jsxs)(u.a.Group,{controlId:"name",children:[Object(h.jsx)(u.a.Label,{children:"Book Name"}),Object(h.jsx)(u.a.Control,{className:"input-control",type:"text",name:"bookname",value:x,placeholder:"Enter name of book",onChange:v})]}),Object(h.jsxs)(u.a.Group,{controlId:"author",children:[Object(h.jsx)(u.a.Label,{children:"Book Author"}),Object(h.jsx)(u.a.Control,{className:"input-control",type:"text",name:"author",value:k,placeholder:"Enter name of author",onChange:v})]}),Object(h.jsxs)(u.a.Group,{controlId:"quantity",children:[Object(h.jsx)(u.a.Label,{children:"Book Quantity"}),Object(h.jsx)(u.a.Control,{className:"input-control",type:"text",name:"quantity",value:f,placeholder:"Enter name of quantity",onChange:v})]}),Object(h.jsxs)(u.a.Group,{controlId:"price",children:[Object(h.jsx)(u.a.Label,{children:"Book Price"}),Object(h.jsx)(u.a.Control,{className:"input-control",type:"text",name:"price",value:p,placeholder:"Enter name of price",onChange:v})]}),Object(h.jsx)(d.a,{variant:"primary",type:"submit",className:"submit-btn",children:"Submit"})]})]})},x=function(e){var t=e.history,n=e.books,a=e.setBooks;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(m,{handleOnSubmit:function(e){a([e].concat(Object(j.a)(n))),t.push("/")}})})},k=n(52),p=function(e){var t=e.id,n=e.bookname,a=e.author,c=e.price,o=e.quantity,r=e.date,s=e.handleRemoveBook,i=Object(b.g)();return Object(h.jsx)(k.a,{style:{width:"18rem"},className:"book",children:Object(h.jsxs)(k.a.Body,{children:[Object(h.jsx)(k.a.Title,{className:"book-title",children:n}),Object(h.jsxs)("div",{className:"book-details",children:[Object(h.jsxs)("div",{children:["Author: ",a]}),Object(h.jsxs)("div",{children:["Quantity: ",o]}),Object(h.jsxs)("div",{children:["Price: ",c]}),Object(h.jsxs)("div",{children:["Date: ",new Date(r).toDateString()]})]}),Object(h.jsx)(d.a,{variant:"primary",onClick:function(){return i.push("/edit/".concat(t))},children:"Edit"})," ",Object(h.jsx)(d.a,{variant:"danger",onClick:function(){return s(t)},children:"Delete"})]})})},f=n(30),v=n.n(f),y=function(e){var t=e.books,n=e.setBooks,a=function(e){n(t.filter((function(t){return t.id!==e})))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"book-list",children:v.a.isEmpty(t)?Object(h.jsx)("p",{className:"message",children:"No books available, Please add some books"}):t.map((function(e){return Object(h.jsx)(p,Object(r.a)(Object(r.a)({},e),{},{handleRemoveBook:a}),e.id)}))})})},N=function(e){var t=e.history,n=e.books,a=e.setBooks,c=Object(b.h)().id,o=n.find((function(e){return e.id===c}));return Object(h.jsx)("div",{children:Object(h.jsx)(m,{book:o,handleOnSubmit:function(e){var o=n.filter((function(e){return e.id!==c}));a([e].concat(Object(j.a)(o))),t.push("/")}})})},g=function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"Book Management App"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"links",children:[Object(h.jsx)(i.b,{to:"/",className:"link",activeClassName:"active",exact:!0,children:"Books List"}),Object(h.jsx)(i.b,{to:"/add",className:"link",activeClassName:"active",children:"Add Book"})]})]})},B=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return t}})),c=Object(s.a)(n,2),o=c[0],r=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,r]},S=function(){var e=B("books",[]),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(h.jsx)(i.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"main-content",children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{render:function(e){return Object(h.jsx)(y,Object(r.a)(Object(r.a)({},e),{},{books:n,setBooks:a}))},path:"/",exact:!0}),Object(h.jsx)(b.b,{render:function(e){return Object(h.jsx)(x,Object(r.a)(Object(r.a)({},e),{},{books:n,setBooks:a}))},path:"/add"}),Object(h.jsx)(b.b,{render:function(e){return Object(h.jsx)(N,Object(r.a)(Object(r.a)({},e),{},{books:n,setBooks:a}))},path:"/edit/:id"}),Object(h.jsx)(b.b,{component:function(){return Object(h.jsx)(b.a,{to:"/"})}})]})})]})})},C=(n(46),n(47),function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(S,{})})});o.a.render(Object(h.jsx)(C,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b61b8889.chunk.js.map