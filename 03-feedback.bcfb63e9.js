function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,f=setTimeout(k,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function k(){var e=v();if(j(e))return w(e);f=setTimeout(k,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function w(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function F(){var e=v(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(k,t),y(u)}return void 0===f&&(f=setTimeout(k,t)),a}return t=p(t)||0,b(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),F.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},F.flush=function(){return void 0===f?a:w(v())},F}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y={feedbackForm:document.querySelector(".feedback-form")};!function(){const{email:e,message:t}=y.feedbackForm.elements,n=JSON.parse(localStorage.getItem("feedback-form-state"));if(!n)return;if(!e||!t)return void alert("oh my God");var o,r;e.value=null!==(o=n.email)&&void 0!==o?o:"",t.value=null!==(r=n.message)&&void 0!==r?r:""}(),y.feedbackForm.addEventListener("input",e(t)((function(){dataForm={email:y.feedbackForm.email.value,message:y.feedbackForm.message.value},localStorage.setItem("feedback-form-state",JSON.stringify(dataForm))}),500)),y.feedbackForm.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=e.target.elements;console.log({email:t.value,message:n.value}),localStorage.removeItem("feedback-form-state"),e.target.reset()}));
//# sourceMappingURL=03-feedback.bcfb63e9.js.map
