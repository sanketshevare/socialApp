(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[671],{"4aTO":function(e,t,o){o.r(t),o.d(t,"track",(function(){return A}));var n=o("q1tI"),i=o("/MKj"),a=o("gxu6"),s=o("9Hil"),c=o("mp1x"),r=o("g6r8"),l=o("6adH"),u=o("J8m7"),d=o("qpbZ"),b=o("3h4M"),g=o("AGnR"),m=o("ulr2"),p=o("yweb"),h=o("h7e3"),_=o("rvfI"),f=o("28DW"),w=o("n6mq"),j=o("ANjH"),k=o("Q5BC"),O=o("nKUr");const A=(e,t,o)=>{Object(f.h)(`${o?o+".":""}mweb_autologin.${t}_${e}`),"attempt"===e&&Object(f.f)({action:"autologin",event:"attempt",type:t})};class y extends n.Component{constructor(...e){var t,o,n;super(...e),n={fbEmail:null,fbName:null,showFbAutoLoginModal:!1,facebookAutologinFailed:!1,googleAutologinFailed:!1,smartlockAutologinFailed:!1},(o="state")in(t=this)?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n}componentDidUpdate(e,t){const{trackAutologinFailure:o}=this.props,{facebookAutologinFailed:n,googleAutologinFailed:i,smartlockAutologinFailed:a}=this.state,{facebookAutologinFailed:s,googleAutologinFailed:c,smartlockAutologinFailed:r}=t;s===n&&c===i&&r===a||n&&i&&a&&o()}componentDidMount(){const{isAuthenticated:e,crossDomain:t,fb:o,smartlock:n}=this.props;e||(a.a("fba")?Object(f.h)("mweb_previously_logged_out.true"):Object(f.h)("mweb_previously_logged_out.false"),t&&this.attemptCrossDomainAutologin(),n&&this.attemptSmartlockAutologin(),o&&this.attemptFBAutologin())}attemptCrossDomainAutologin(){if("undefined"!=typeof window&&window.PINTEREST_DISABLE_CCTLD_AUTO)return void Object(f.h)("dev.autologin_disabled.cctld");const{logPrefix:e}=this.props,t=()=>A("attempt","cctld",e),o=()=>A("success","cctld",e),n=()=>A("fail","cctld",e);try{Object(_.a)({onAttempt:t}).then(k.a).then(o).then(()=>{"undefined"!=typeof window&&window.location&&window.location.reload()}).catch(e=>{e&&n()})}catch(i){n()}}attemptSmartlockAutologin(){if("undefined"!=typeof window&&window.PINTEREST_DISABLE_SMARTLOCK_AUTO)return void Object(f.h)("dev.autologin_disabled.smartlock");const{smartLockUseAlternativeResourceCall:e,history:t,location:o,login:n,logPrefix:i}=this.props;Object(_.d)({onAttempt:()=>A("attempt","smartlock",i),onNoBrowserCredentials:()=>A("error_no_api","smartlock",i)}).then(a=>{a?(Object(g.e)({event_type:7534,view_type:10,view_parameter:3204,aux_data:{signup_login_method:5}}),n({username_or_email:a.id,password:a.password},t,o.pathname,{isAutologin:!0,useAlternativeResourceCall:e}).then(()=>{A("success","smartlock",i),Object(g.e)({event_type:7536,view_type:10,view_parameter:3204,aux_data:{signup_login_method:5}})}).catch(()=>{A("fail","smartlock",i),Object(g.e)({event_type:7535,view_type:10,view_parameter:3204,aux_data:{signup_login_method:5}}),this.setState({smartlockAutologinFailed:!0})})):(this.setState({smartlockAutologinFailed:!0}),A("error_no_creds","smartlock",i))}).catch(e=>{this.setState({smartlockAutologinFailed:!0}),A(e?e.status:"error_other","smartlock",i)})}handleFBAutologinResponse(e){const{logPrefix:t}=this.props;A(e,"facebook",t)}handleFBAutologinError(e){let t;e?e.status?t=e.status:e instanceof Error?(t="error_no_status",Object(b.b)({message:e.message||e.description,line:e.lineno||e.lineNumber||e.line,column:e.colno||e.columnNumber||e.column,stack:e.stack||e.stacktrace||e.error&&(e.error.stack||e.error.stacktrace),filename:e.fileName||e.sourceUrl,name:"unexpected mweb facebook autologin response error"})):"string"==typeof e?(t="error_string",Object(b.b)({message:e,name:"unexpected mweb facebook autologin response string"})):t="error_other":t="error_empty",this.handleFBAutologinResponse(t)}attemptFBAutologin(){if("undefined"!=typeof window&&window.PINTEREST_DISABLE_FB_AUTO)return Object(f.h)("dev.autologin_disabled.facebook"),void Object(h.a)("facebook_autologin","autologin_disabled");const{history:e,locale:t,location:o,login:n,logPrefix:i,showToast:a}=this.props;A("attempt","facebook",i),Object(h.b)("facebook_autologin","autoLoginFacebookStart"),Object(_.b)(t,e=>Object(f.h)(e)).then(t=>{Object(h.b)("facebook_autologin","autoLoginFacebookEnd"),this.setState({showFbAutoLoginModal:!0,fbEmail:t.data&&t.data.email,fbName:t.data&&t.data.first_name}),Object(g.e)({event_type:7534,view_type:10,view_parameter:3205,aux_data:{signup_login_method:2}}),Object(h.d)("facebook_autologin"),n(t.creds,e,o.pathname,{isAutologin:!0}).then(()=>{this.setState({showFbAutoLoginModal:!1}),Object(g.e)({event_type:7536,view_type:10,view_parameter:3205,aux_data:{signup_login_method:2}}),a({text:t.data&&t.data.first_name?Object(d.b)(this.props.i18n._("Welcome back to Pinterest, {{ name }}!","welcoming user back to pinterest when autologin with first name","welcoming user back to pinterest when autologin with first name"),{name:t.data.first_name}).join(""):this.props.i18n._("Welcome back to Pinterest!","welcoming user back to pinterest when autologin","welcoming user back to pinterest when autologin"),duration:4e3}),this.handleFBAutologinResponse("success")}).catch(e=>{this.setState({showFbAutoLoginModal:!1,facebookAutologinFailed:!0}),Object(g.e)({event_type:7535,view_type:10,view_parameter:3205,aux_data:{signup_login_method:2}});let t="fail";e&&e.apiErrorCode===u.j&&(t="incomplete_signup"),this.handleFBAutologinResponse(t)})}).catch(e=>{Object(h.a)("facebook_autologin","autoLoginFacebookFailed"),this.handleFBAutologinError(e),this.setState({facebookAutologinFailed:!0})})}render(){const{i18n:e}=this.props,{fbEmail:t,fbName:o,showFbAutoLoginModal:n}=this.state;return Object(O.jsx)(c.a,{isOpen:n,type:"autologin",children:Object(O.jsxs)(w.f,{margin:-3,children:[Object(O.jsx)(s.a,{duration:1500,finalProgress:95}),Object(O.jsxs)(w.f,{alignItems:"center",direction:"column",display:"flex",paddingX:t?10:12,paddingY:6,children:[Object(O.jsx)(w.v,{icon:"pinterest",color:"red",accessibilityLabel:e._("Pinterest logo"),size:24}),Object(O.jsx)(w.f,{marginTop:1,paddingY:1,children:Object(O.jsx)(w.cb,{align:"center",children:Object(O.jsx)(w.u,{size:"md",children:o?Object(d.b)(this.props.i18n._("Welcome back, {{ name }}!","welcome back with first name","welcome back with first name"),{name:o}).join(""):this.props.i18n._("Welcome back!","Welcome back!","Welcome back!")})})}),Object(O.jsx)(w.cb,{align:"center",children:t?Object(d.b)(this.props.i18n._("We're logging you in with your Facebook account, {{ email }}","logging in user with facebook account and email associated","logging in user with facebook account and email associated"),{email:Object(O.jsx)(w.cb,{inline:!0,weight:"bold",children:t},"fbEmail")}):this.props.i18n._("We're logging you in with your Facebook account...","logging in user with Facebook account","logging in user with Facebook account")})]})]})})}}t.default=Object(j.compose)(l.b,Object(i.connect)((e,t)=>({isAuthenticated:e.session.isAuthenticated,locale:e.session.locale}),e=>({login:(t,o,n,i)=>e(Object(k.b)(t,o,n,i)),crossDomainAutoLogin:()=>e(Object(k.a)()),trackAutologinFailure:()=>e(Object(m.P)())})))((function(e){const t=Object(p.c)(),o=Object(r.a)();return Object(O.jsx)(y,{...e,smartLockUseAlternativeResourceCall:"desktop"===o,i18n:t})}))},rvfI:function(e,t,o){o.d(t,"d",(function(){return c})),o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return l})),o.d(t,"a",(function(){return u}));var n=o("bKKl"),i=o("2hay"),a=o("4NbJ"),s=o("A+Hl");const c=(e={},t)=>{const o=window.navigator.credentials,i={password:!0};return t&&(i.mediation=t),Object(n.a)()?Promise.reject({status:"autologin_disabled"}):new Promise((t,n)=>{o?(e&&e.onAttempt&&e.onAttempt(),o.get(i).then(t).catch(n)):e&&e.onNoBrowserCredentials&&e.onNoBrowserCredentials()})},r=(e,t)=>Object(n.a)()?Promise.reject({status:"autologin_disabled"}):(t("unauth_mweb.facebook_connect.autologin.attempt"),Object(i.f)(e).then(i.d).then(e=>Object(i.e)(e,{autologin:!0},e=>t("unauth_mweb.facebook_connect.autologin."+e)))),l=(e,t)=>{if(Object(n.a)())return Promise.reject({status:"autologin_disabled"});t("create_google_autologin_button.number_6");const o=document.createElement("div");return o&&o.style&&(o.style.left="-99999px",o.style.opacity="0",o.style.position="fixed",o.style.top="-999999px"),o.id="google-autologin-button",document.getElementsByTagName("body")[0].appendChild(o),Object(a.c)(o.id,e,t,!0)},u=(e={})=>Object(s.c)(window.location.origin)?Object(n.a)()?Promise.reject({status:"autologin_disabled"}):(e&&e.onAttempt&&e.onAttempt(),Object(s.d)()):Promise.reject({status:"non_valid_origin"})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/671-8bff8f000847f5576fc5.mjs.map