(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(3),r=n.n(a),i=(n(14),n(4)),o=n(5),s=n(6),d=n(9),b=n(8),u=n(0),l=function(e){var t=e.title,n=e.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:t}),n]})},j=n(7),h=n.n(j),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("div",{children:t.map((function(e){return Object(u.jsx)("button",{className:h.a.btnFeedback,type:"button",onClick:function(){return n(e)},children:e},e)}))})},f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",n]}),Object(u.jsxs)("li",{children:["Bad: ",c]}),Object(u.jsxs)("li",{children:["Total: ",a]}),Object(u.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})},k=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.addFeedback,n=this.countTotalFeedback,c=this.countPositiveFeedbackPercentage,a=this.state,r=a.good,i=a.neutral,o=a.bad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{title:"Please leave feedback",children:Object(u.jsx)(O,{options:e,onLeaveFeedback:t,children:" "})}),Object(u.jsx)(l,{title:"Statistics",children:n()?Object(u.jsx)(f,{good:r,neutral:i,bad:o,total:n(),positivePercentage:c()}):Object(u.jsx)(k,{message:"No feedback given"})})]})}}]),n}(c.Component);r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))},7:function(e,t,n){e.exports={btnFeedback:"FeedbackOptions_btnFeedback__2Kt0d"}}},[[16,1,2]]]);
//# sourceMappingURL=main.1d8ebd82.chunk.js.map