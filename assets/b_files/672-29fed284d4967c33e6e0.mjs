(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[672],{Lajh:function(e,t,i){i.r(t);var n=i("q1tI"),o=i("/MKj"),a=i("gxu6"),s=i("mp1x"),l=i("kmwA"),p=i("/8nX"),c=i("B/oJ"),r=i("6adH"),h=i("ANjH"),g=i("4NNh"),d=i("isp9"),u=i("TXO6"),_=i("Q5BC"),b=i("vKjI"),m=i("VL22"),O=i("AGnR"),w=i("28DW"),j=i("b7nI"),T=i("tCfZ"),y=i("yweb"),f=i("n6mq"),S=i("nKUr");function v(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const x="staticSignupLogin",L="staticSignupLoginWithTOS",C="mweb_google_one_tap.confirmation_dialog";class k extends n.Component{constructor(...e){super(...e),v(this,"handleCancelClick",e=>{Object(w.a)(`${C}.${e}.cancel.click`),Object(O.h)({element:73,view_parameter:3202,view_type:10}),this.props.handleCancelClick()}),v(this,"handleConfirmSignup",(e,t=!0)=>{Object(w.a)(`${C}.${e}.confirm.click`),Object(O.h)({element:31,view_parameter:3202,view_type:10}),this.props.handleConfirmSignup(t)}),v(this,"handleShowLogin",e=>{Object(w.a)(`${C}.${e}.login.click`),Object(O.h)({element:30,view_parameter:3202,view_type:10}),this.props.handleShowLogin()})}componentDidMount(){Object(w.a)(`${C}.${this.props.initialStep}.shown`)}componentWillUnmount(){this.enableBackgroundScrolling()}enableBackgroundScrolling(){document.body&&(document.body.style.overflow="")}render(){const{initialStep:e}=this.props;return Object(S.jsxs)(f.f,{children:[this.props.loading?Object(S.jsx)(j.a,{}):null,Object(S.jsxs)(f.f,{padding:3,children:[Object(S.jsx)(f.f,{display:"inlineBlock",position:"absolute",top:!0,right:!0,marginTop:2,marginEnd:2,children:Object(S.jsx)(f.w,{accessibilityLabel:this.props.i18n._("Cancel","Button to close the signup/login modal","Button to close the signup/login modal"),icon:"cancel",onClick:()=>this.handleCancelClick(e),size:"sm"})}),Object(S.jsx)(f.cb,{align:"start",weight:"bold",children:Object(S.jsx)("span",{className:"deprecatedTextSizeXL",children:this.props.i18n._("Continue to Pinterest","Title of a dialog telling enabling the user to continue with sign up or log in","Title of a dialog telling enabling the user to continue with sign up or log in")})}),Object(S.jsx)(f.f,{marginTop:2,children:Object(S.jsx)(f.cb,{align:"start",children:this.props.i18n._("Hmm, it looks like you don't have an account yet. Let's get started!","Description text of a dialog asking the user to sign up for a Pinterest account","Description text of a dialog asking the user to sign up for a Pinterest account")})}),Object(S.jsx)(f.f,{marginTop:5,children:Object(S.jsx)(f.g,{color:"red",onClick:()=>this.handleConfirmSignup(e),text:this.props.i18n._("Sign up","Text on a button which will create an account when clicked","Text on a button which will create an account when clicked")})}),Object(S.jsx)(f.f,{marginTop:2,children:Object(S.jsx)(f.g,{color:"gray",onClick:()=>this.handleShowLogin(e),text:this.props.i18n._("Log in using a different method","Text on a button which will take the user to login when clicked","Text on a button which will take the user to login when clicked")})}),this.props.initialStep===L?Object(S.jsx)(f.f,{marginTop:6,children:Object(S.jsx)(T.a,{})}):null]})]})}}var D=function(e){const t=Object(y.c)();return Object(S.jsx)(k,{...e,i18n:t})},I=i("ulr2"),A=i("h7e3"),G=i("QAzJ"),U=i("37no"),E=i("EC67");function R(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const B="disableUnauthGoogleOneTap";class z extends n.PureComponent{constructor(...e){super(...e),R(this,"state",{loading:!1,confirmationDialogStep:void 0,googleOpenId:"",showRegisterLoading:!1}),R(this,"oneTapLogging",{element:null,interval:null}),R(this,"annotateOneTapStopwatch",e=>{Object(A.b)("google_autologin",e)}),R(this,"abortOneTapStopwatch",e=>{Object(A.a)("google_autologin",e)}),R(this,"stopOneTapStopwatch",()=>{Object(A.d)("google_autologin")}),R(this,"onRetrieveCredentialsSuccess",e=>{const{initializationHandledExternally:t,history:i,isAuthenticated:n,isLimitedLoginUser:o,location:a,login:s}=this.props;this.disableGoogleOneTapDialog(),this.showLoading(),Object(w.h)("mweb_google_one_tap.retrieve_credential.success");const l={google_open_id_token:e.idToken,autologin:"auto"===(e.selectBy||"")};if(l.autologin&&t)return;Object(O.e)({event_type:7534,view_type:10,view_parameter:3201,aux_data:{...n?{login_state:o?2:1}:{},signup_login_method:4}});const p=e.selectBy.includes("btn")?"gsi_btn":e.selectBy.includes("user")?"onetap_btn":"other";s(l,i,a.pathname,{isAutologin:l.autologin,trigger:p}).then(()=>{Object(O.e)({event_type:7536,view_type:10,view_parameter:3201,aux_data:{...n?{login_state:o?2:1}:{},signup_login_method:4}})},e=>{Object(O.e)({event_type:7535,view_type:10,view_parameter:3201,aux_data:{...n?{login_state:o?2:1}:{},signup_login_method:4}}),this.onLoginFailure(l,e)})}),R(this,"onRetrieveCredentialsFailure",(e,t)=>{const i=e&&e.type||"unknown";Object(w.h)(`mweb_google_one_tap.${t}.error.${i}`)}),R(this,"onLoginFailure",(e,t)=>{this.hideLoading();const i=t&&t.apiErrorCode||0;if(Object(w.h)("mweb_google_one_tap.hint.login.error."+i),30!==i||this.props.isTablet)this.props.showToast({text:t.message||this.props.i18n._("We couldn’t log you in with that account. Try the Google button!")}),this.props.handleLoginError();else{const t=this.determineConfirmationDialogStep();t===x||t===L?this.showConfirmationDialog(e,t):this.attemptSignup(e.google_open_id_token,!1)}}),R(this,"onSignupSuccess",(e,t)=>{const{isAuthenticated:i,isLimitedLoginUser:n}=this.props;this.setState({showRegisterLoading:!1}),Object(w.h)("mweb_google_one_tap.hint.signup.success"),Object(O.e)({event_type:7487,view_type:10,view_parameter:t?3202:3201,aux_data:{...i?{login_state:n?2:1}:{},signup_login_method:4}}),this.props.history.push("/")}),R(this,"onSignupFailure",(e,t)=>{const{isAuthenticated:i,isLimitedLoginUser:n}=this.props,o=e&&e.api_error_code||0;Object(w.h)("mweb_google_one_tap.hint.signup.error."+o),Object(O.e)({event_type:7488,view_type:10,view_parameter:t?3202:3201,aux_data:{...i?{login_state:n?2:1}:{},signup_login_method:4}}),this.hideLoading(),this.hideConfirmationDialog(),this.props.showToast({text:e.message||this.props.i18n._("We couldn’t sign you up with that account. Try the Google button!")}),this.props.handleSignupError()}),R(this,"determineConfirmationDialogStep",()=>{const{location:e}=this.props;return Object(d.x)(e)?x:""}),R(this,"shouldUseMediatedAuthentication",()=>!this.isGoogleOneTapDisabled()),R(this,"handleCancelOneTap",()=>{this.hideConfirmationDialog()}),R(this,"isGoogleOneTapDisabled",()=>"1"===a.a(B)),R(this,"disableGoogleOneTapDialog",()=>{a.b(B,"1",168)}),R(this,"navigateToLogin",()=>{this.handleCancelOneTap(),this.props.history.push({pathname:"/login/",state:{next:this.props.location.pathname}})}),R(this,"attemptSignup",(e,t)=>{const{country:i,isAuthenticated:n,isLimitedLoginUser:o}=this.props,a=this.decodeToken(e),s={google_open_id_token:e,first_name:a.given_name,last_name:a.family_name,image_url:a.picture};if(Object(m.d)(i))return this.hideLoading(),this.hideConfirmationDialog(),void this.props.history.push({pathname:"/signup/thirdpartyage/",state:{signupOptions:s,signupPlatform:"gtap"}});this.setState({showRegisterLoading:!0}),Object(O.e)({event_type:7537,view_type:10,view_parameter:t?3202:3201,aux_data:{...n?{login_state:o?2:1}:{},signup_login_method:4}}),this.props.register(s).then(e=>this.onSignupSuccess(e,t),e=>this.onSignupFailure(e,t))}),R(this,"handleConfirmOneTapSignup",e=>{e&&this.showLoading();const{googleOpenId:t}=this.state;this.attemptSignup(t,!0)})}componentDidMount(){const{initializationHandledExternally:e,googleOneTapDisabled:t,handleEmptyCredentials:i}=this.props;e||(a.a("fba")||this.isGoogleOneTapDisabled()?(t(),this.abortOneTapStopwatch("disabled"),i&&i()):this.setupGoogleOneTap())}componentDidUpdate(e){const{externalGSIResponse:t}=this.props;t&&!e.externalGSIResponse&&this.handleOneTapResponse(t)}initializeGoogleOneTap(){const{activateChromeOneTapExp:e,activateSafariOneTapExp:t,browserType:i,googleOneTapInitialized:n,platform:o}=this.props;Object(w.h)("mweb_google_one_tap.sdk_exists"),this.oneTapLogging.interval=setInterval(()=>this.checkForOneTapUI(),100);const a=window.google.accounts.id;a.initialize({activity_listener:this.handleActivity.bind(this),auto_select:!0,callback:this.handleOneTapResponse.bind(this),cancel_on_tap_outside:!1,client_id:l.a.settings.GPLUS_CLIENT_ID,context:"use",itp_support:"ios"===o&&(1===i&&e().anyEnabled||2===i&&t().anyEnabled)}),n(),Object(w.h)("mweb_google_one_tap.initialize"),a.prompt(this.handleMomentNotification.bind(this))}getGoogleId(){if("undefined"==typeof window)return null;const e=window.google;return e&&e.accounts&&e.accounts.id}setupGoogleOneTap(){this.annotateOneTapStopwatch("beforeLoadOneTapScript"),Object(w.h)("mweb_unauth.gsi_script.start_dynamic_loading"),this.loadOneTapScript("https://accounts.google.com/gsi/client").then(()=>{this.annotateOneTapStopwatch("afterLoadOneTapScript");const e=window.google;e&&e.accounts&&e.accounts.id?this.initializeGoogleOneTap():this.abortOneTapStopwatch("noAccountFound")})}loadOneTapScript(e){return Object(w.h)("mweb_google_one_tap.load_script.attempt"),Object(U.c)(e,U.a.GSI).then(()=>{Object(w.h)("mweb_google_one_tap.load_script.success")}).catch(()=>{Object(w.h)("mweb_google_one_tap.load_script.fail")})}handleMomentNotification(e){const{location:t}=this.props,i=e.getMomentType();if("display"===i){this.annotateOneTapStopwatch("handleMomentDisplay");e.isDisplayed()?Object(w.h)("mweb_google_one_tap.display_moment.displayed"):Object(w.h)("mweb_google_one_tap.display_moment.not_displayed."+e.getNotDisplayedReason())}else"skipped"===i?(Object(w.h)("mweb_google_one_tap.skipped_moment."+e.getSkippedReason()),Object(d.x)(t)||this.props.hideGoogleOneTap()):"dismissed"===i&&(Object(d.x)(t)||this.props.hideGoogleOneTap(),Object(w.h)("mweb_google_one_tap.dismissed_moment."+e.getDismissedReason()))}handleOneTapResponse(e){e?(this.checkForOneTapUI(),this.stopOneTapStopwatch(),Object(w.h)("mweb_google_one_tap.select_by."+e.select_by),this.onRetrieveCredentialsSuccess({idToken:e.credential,selectBy:e.select_by})):this.abortOneTapStopwatch("noResponse")}handleActivity(e){if(e){if("error"===e.type)return Object(w.h)("mweb_google_one_tap.error."+e.errorType),void this.props.hideGoogleOneTap();const t="ui_change"===e.type?e.uiActivityType:e.userActivityType;Object(w.h)(`mweb_google_one_tap.activity.${e.type}.${null!=t?t:""}`),"prompt_displayed"===t?this.props.showGoogleOneTap():"close_prompt"===t&&this.props.hideGoogleOneTap()}}checkForOneTapUI(){const e=document.getElementById("credential_picker_iframe");e?"none"===e.style.display||this.oneTapLogging.element||(this.annotateOneTapStopwatch("oneTapUIAppears"),this.oneTapLogging.element=e):this.oneTapLogging.element&&(this.annotateOneTapStopwatch("oneTapUIDisappears"),this.oneTapLogging.element=null,this.oneTapLogging.interval&&clearInterval(this.oneTapLogging.interval))}componentWillUnmount(){Object(w.h)("mweb_google_one_tap.dismiss_iframe.attempt"),Object(g.c)(window.smartlock),this.oneTapLogging.interval&&clearInterval(this.oneTapLogging.interval)}base64urlUnescape(e){return e.replace(/\-/g,"+").replace(/_/g,"/")}decodeToken(e){return JSON.parse(decodeURIComponent(atob(this.base64urlUnescape(e.split(".")[1])).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join("")))}showConfirmationDialog(e,t){this.setState({googleOpenId:e.google_open_id_token,confirmationDialogStep:t})}hideConfirmationDialog(){this.setState({confirmationDialogStep:void 0})}showLoading(){this.setState({loading:!0})}hideLoading(){this.setState({loading:!1,showRegisterLoading:!1})}render(){const{confirmationDialogStep:e,showRegisterLoading:t}=this.state;return t?Object(S.jsx)(c.a,{platform:"gtap"}):e?Object(S.jsx)(p.a,{viewType:10,viewParameter:3202,children:Object(S.jsx)(s.a,{isOpen:!0,type:"google_one_tap",children:Object(S.jsx)(D,{handleCancelClick:this.handleCancelOneTap,handleConfirmSignup:this.handleConfirmOneTapSignup,handleShowLogin:this.navigateToLogin,initialStep:e,loading:this.state.loading})})}):null}}t.default=Object(h.compose)(E.l,r.b,Object(o.connect)(({session:e,users:t={}})=>({browserType:e.browserType,country:e.country,isTablet:e.isTablet,isAuthenticated:e.isAuthenticated,isLimitedLoginUser:Object(u.b)(t[e.userId]),platform:e.userAgentPlatform}),e=>({login:(t,i,n,o)=>e(Object(_.b)(t,i,n,o)),register:t=>e(Object(b.a)(t)),showGoogleOneTap:()=>e(Object(I.E)()),hideGoogleOneTap:()=>e(Object(I.g)()),googleOneTapDisabled:()=>e(Object(I.d)()),googleOneTapInitialized:()=>e(Object(I.e)())})))((function(e){const t=Object(y.c)(),i=Object(G.b)("mweb_unauth_safari_one_tap"),n=Object(G.b)("mweb_unauth_chrome_one_tap");return Object(S.jsx)(z,{...e,i18n:t,activateChromeOneTapExp:n,activateSafariOneTapExp:i})}))},b7nI:function(e,t,i){var n=i("yweb"),o=i("n6mq"),a=i("nKUr");const s=()=>{const e=Object(n.c)();return Object(a.jsx)(o.U,{accessibilityLabel:e._("Loading","Label for loading spinner","Label for loading spinner"),show:!0})};t.a=()=>Object(a.jsxs)(o.f,{children:[Object(a.jsx)(o.f,{alignItems:"center",display:"flex",justifyContent:"center",position:"absolute",top:!0,left:!0,bottom:!0,right:!0,opacity:1,dangerouslySetInlineStyle:{__style:{zIndex:101}},children:Object(a.jsx)(s,{})}),Object(a.jsx)(o.f,{color:"white",position:"absolute",top:!0,left:!0,bottom:!0,right:!0,opacity:.7,dangerouslySetInlineStyle:{__style:{zIndex:100}}})]})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/672-29fed284d4967c33e6e0.mjs.map