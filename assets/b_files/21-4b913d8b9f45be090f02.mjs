(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[21],{"6I8K":function(e,t,n){n.d(t,"a",(function(){return o}));var r=n("Umhl"),i=n("n6mq"),a=n("WSmg"),s=n("nKUr");function o(e){const{pattern:t=[a.a.medium],bubbles:n,referringSource:o,storyId:c,storyType:l,viewType:p,viewParameter:d,onTouch:u}=e,m=n.map(({type:e,id:t})=>e+":"+t).join("|");return Object(s.jsx)(i.f,{display:"flex",wrap:!0,width:"100%",justifyContent:"between",children:n.map((e,n)=>{const h=t[n%t.length];return Object(s.jsx)(i.f,{paddingY:1,width:[a.a.small,a.a.extra_small].includes(h)?"calc(50% - 4px)":"100%",children:Object(s.jsx)(r.a,{bubble:e,onTouch:u,format:h,referringSource:o,height:([a.a.medium,a.a.extra_small].includes(h)?"50%":h===a.a.article&&"73%")||"100%",storyId:c,slotIndex:n,viewType:p,viewParameter:d,auxData:{content_ids:m,story_type:l,grid_index:n}})},"bubble-"+n)})})}},"9HmQ":function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));const r=-1;function i(e){switch(e){case 0:return"shopping-bag";case 1:return"tag";default:return"search"}}},FDmi:function(e,t,n){n.d(t,"a",(function(){return s}));var r=n("n6mq"),i=n("nKUr");const a=(e,t)=>{const n=null==e?void 0:e.includes("images/user/default");return Boolean(n&&t)};function s({accessibilityLabel:e,name:t,outline:n,size:s,src:o,verified:c}){return Object(i.jsx)(r.b,{accessibilityLabel:e,name:t,outline:n,size:s,src:a(o,t)?void 0:o,verified:c})}},L1dC:function(e,t,n){n.d(t,"a",(function(){return m}));var r=n("q1tI"),i=n("/MKj"),a=n("6I8K"),s=n("U1vm"),o=n("t84P"),c=n("AGnR"),l=n("9HmQ"),p=n("n6mq"),d=n("WSmg"),u=n("nKUr");function m(e){const{auxData:t,pattern:n,slotIndex:m,storyId:h,viewType:b,viewParameter:f}=e,g=Object(i.useSelector)(({stories:e,articles:t,users:n})=>e[h].objects.map(e=>{const r=t[e.id];return r.curator&&"string"==typeof r.curator?{...r,curator:n[r.curator]}:r})),{story_type:y,referring_source:j,title:v,display_options:x,action:w,aux_fields:I}=Object(i.useSelector)(({stories:e})=>e[h]),{identifier_icon_name:T}=x||{},O=g.map(({type:e,id:t})=>e+":"+t).join("|"),_={story_type:y,story_id:h,content_ids:O,...t};return Object(u.jsx)(o.e,{loggingId:h,objectIdStr:h,viewParameter:f,viewType:b,slotIndex:m,component:200,auxData:_,children:Object(u.jsxs)(r.Fragment,{children:[v&&Object(u.jsxs)(p.f,{display:"flex",marginBottom:2,justifyContent:"center",alignItems:"center",children:["number"==typeof T&&T!==l.a&&Object(u.jsx)(p.f,{marginEnd:2,dangerouslySetInlineStyle:{__style:{paddingTop:1}},children:Object(u.jsx)(p.v,{accessibilityLabel:"",color:"darkGray",icon:Object(l.b)(T),size:14})}),Object(u.jsx)(p.cb,{weight:"bold",children:v.format})]}),Object(u.jsx)(a.a,{bubbles:g,pattern:"number"==typeof(null==I?void 0:I.pattern)?(D=I.pattern,0===D?[d.a.small]:1===D?[d.a.large,d.a.small,d.a.small]:2===D?[d.a.medium,d.a.small,d.a.small]:[d.a.small]):n,referringSource:j,storyId:h,storyType:y,viewParameter:f,viewType:b}),w&&w.url&&Object(u.jsx)(p.f,{display:"flex",width:"100%",justifyContent:"center",marginTop:1,children:Object(u.jsx)(s.a,{accessibilityLabel:w.text,color:"lightGray",onTouch:()=>{Object(c.h)({view_type:b,view_parameter:f,aux_data:_})},text:w.text,to:w.url,size:"md",shape:"pill"})})]})});var D}},U1vm:function(e,t,n){var r=n("VGkx"),i=n("fv8A"),a=n("nKUr");t.a=({external:e,externalQueryParams:t,newTab:n,onTouch:s,refresh:o,to:c,...l})=>Object(a.jsx)(i.a,{external:e,newTab:n,refresh:o,onTouch:s,externalQueryParams:t,to:c,children:({navigate:e})=>Object(a.jsx)(r.a,{onTouch:e,...l})})},Umhl:function(e,t,n){n.d(t,"a",(function(){return o}));var r=n("RNo4"),i=n("AGnR"),a=n("WSmg"),s=n("nKUr");function o({auxData:e,bubble:t,font:n,format:o,height:c,onTouch:l,referringSource:p,slotIndex:d,storyId:u,viewParameter:m,viewType:h,width:b="100%"}){var f;const{id:g,action:y,cover_images:j,dominant_colors:v,identifier_icon_type:x,title:w,story_category:I,curator:T}=t,O=null===(f=j[0]&&(j[0]["280x280"]||j[0]["236x"]))||void 0===f?void 0:f.url,_=w.format,D=(null==y?void 0:y.url)||(({storyCategory:e,query:t,referringSource:n,bubbleId:i,storyId:a})=>{const s=[0,24,21,25,26].includes(e),o=Object(r.c)({q:t,rs:n||void 0,b_id:i,source_id:a});return s?"/discover/article/"+i:"/search/pins/"+(o?"?"+o:"")})({storyCategory:I,query:_,referringSource:p,bubbleId:g,storyId:u}),P=o===a.a.article?13865:200,S=o===a.a.article?102:6940,k=v&&v.length?v[0]:void 0;return Object(s.jsx)(a.b,{auxData:e,backgroundColor:k,bubbleId:g,bubbleUrl:D,coverImageUrl:O,curator:T,font:n,format:o,height:c,identifierIconType:x,onTap:t=>{var n;(Object(i.e)({component:P,event_type:S,object_id_str:t,view_parameter:m,view_type:h,aux_data:{article_id:t,grid_index:d,...e}}),l)&&l({query:_,url:null!==(n=null==y?void 0:y.url)&&void 0!==n?n:void 0})},referringSource:p,slotIndex:d,storyCategory:I,storyId:u,title:_,viewParameter:m,viewType:h,width:b})}},VGkx:function(e,t,n){var r=n("q1tI"),i=n("ihsa"),a=n("bcHz"),s=n("4lNu");const o=["circlePulse {\n  0%, 33% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1.2);\n  }\n  43% {\n    transform: scale(1);\n  }\n  46% {\n    transform: scale(1.1);\n  }\n  49%, 67% {\n    transform: scale(1);\n  }\n  75%, 100% {\n    transform: scale(0);\n  }\n}","buttonPulse {\n  0%, 33% {\n    transform: scale(1);\n  }\n  40%, 67% {\n    transform: scale(1.2);\n  }\n  75%, 100% {\n    transform: scale(1);\n  }\n}"],c=Object(s.a)(o),l={animation:"buttonPulse 3.5s cubic-bezier(0.155, 0.03, 0.515, 0.655) -.4s infinite"};var p=n("n6mq"),d=n("nKUr");const u={__style:{borderRadius:"4px",padding:"10px 14px"}},m={borderWidth:"1px",borderStyle:"solid",borderColor:"white"},h={__style:{borderRadius:"4px",padding:"10px 14px 9px 8px",whiteSpace:"nowrap"}},b=(e,t)=>{const n=((e,t)=>{let n=0,r=0;return e&&e.current&&(n=(e.current.offsetWidth-t)/2,r=(e.current.offsetHeight-t)/2),{left:n,top:r}})(e,t);return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(i.a,{unsafeCSS:c}),Object(d.jsx)(p.f,{width:"120px",height:"120px",position:"absolute",color:"lightWash",rounding:"circle",dangerouslySetInlineStyle:{__style:(a=n.left,s=n.top,{left:a+"px",top:s+"px",opacity:"0.7",animation:"circlePulse 3.5s cubic-bezier(0.155, 0.03, 0.515, 0.655) -.4s infinite"})},overflow:"hidden"})]});var a,s};t.a=({accessibilityLabel:e,color:t,customStyles:n,forwardedRef:i,icon:s,inline:o=!1,isBounceAnimation:c=!1,minHeight:f=40,minWidth:g=70,onTouch:y,pressState:j,size:v,shape:x,text:w})=>{const I=(e=>"red"===e||"transparent"===e||"darkGray"===e?"white":"darkGray")(t),T=(({color:e,icon:t})=>t?h:"transparent"===e?{__style:{...u.__style,...m}}:u)({color:t,icon:s}),O=Object(r.useRef)(null),_=((e,t)=>{const{__style:n}=t;return{__style:{...n,...e?l:{}}}})(c,T),D=Object(d.jsxs)(p.f,{position:"relative",ref:c?O:null,children:[c&&b(O,120),Object(d.jsx)(p.f,{color:t,display:o?"inlineBlock":"flex",justifyContent:"center",minHeight:f,minWidth:g,dangerouslySetInlineStyle:"pill"===x?(P=n,{__style:{borderRadius:"24px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"14px",paddingRight:"14px",...P}}):_,children:Object(d.jsxs)(p.f,{alignItems:"center",display:"flex",justifyContent:"center",children:[s&&Object(d.jsx)(p.f,{paddingX:"check"===s?2:0,children:Object(d.jsx)(p.v,{accessibilityLabel:e,color:I,icon:s,inline:!0,size:"check"===s?16:20})}),Object(d.jsx)(p.cb,{color:I,inline:!0,size:v,truncate:!0,weight:"bold",children:w})]})})]});var P;return y?Object(d.jsx)(a.a,{onTouch:y,rounding:"pill"===x?"pill":2,pressState:j||"none",children:Object(d.jsx)(p.f,{ref:i,children:D})}):D}},WSmg:function(e,t,n){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n("q1tI"),i=n("FDmi"),a=n("yweb"),s=n("kEen"),o=n("9HmQ"),c=n("t84P"),l=n("n6mq"),p=n("nKUr");const d={large:"large",medium:"medium",small:"small",extra_small:"extra_small",article:"article"},u={bubbleOverlay:{__style:{backgroundColor:"rgba(0, 0, 0, 0.4)"}}};function m({auxData:e,backgroundColor:t,bubbleId:n,bubbleUrl:m,coverImageUrl:h,curator:b,font:f,format:g,height:y,identifierIconType:j,isTodayArticle:v,onTap:x,referringSource:w,slotIndex:I,storyCategory:T,storyId:O,subtitle:_,title:D,viewParameter:P,viewType:S,width:k="100%"}){const A=Object(a.c)(),[C,U]=Object(r.useState)("string"==typeof y?void 0:y),E=e=>{if(e){const t=e.offsetWidth,n="string"==typeof y?Number.parseFloat(y):100;U(t*n/100)}};if(!C)return Object(p.jsx)("div",{style:{paddingBottom:"string"==typeof y?Number.parseFloat(y)+"%":"100%",width:k},ref:E});const L=g===d.article,z=f||C>250&&"lg"||C>140&&g&&[d.medium,d.small,d.article].includes(g)&&"md"||C<120&&g&&g===d.small&&"xs"||"sm",K=Object(p.jsx)(l.f,{position:"relative","data-test-id":"search-suggestion","data-test-type":w,children:Object(p.jsx)(s.a,{to:m,isAppUpsellDisabled:!0,onTouch:()=>{x&&x(n)},children:Object(p.jsxs)(l.C,{rounding:4,children:[Object(p.jsx)(l.f,{width:k,height:C,children:h&&Object(p.jsx)(l.x,{alt:D,color:t,fit:"cover",naturalHeight:1,naturalWidth:1,src:h})}),Object(p.jsx)(l.f,{dangerouslySetInlineStyle:u.bubbleOverlay,height:C,width:k,position:"absolute",top:!0,left:!0}),b&&!L&&Object(p.jsx)(l.f,{position:"absolute",top:!0,left:!0,padding:2,children:Object(p.jsx)(i.a,{outline:!0,size:"xs",src:b.image_small_url,name:b.full_name})}),j&&j!==o.a&&Object(p.jsx)(l.f,{alignItems:"center",color:"white",display:"flex",height:24,justifyContent:"center",left:!0,margin:2,opacity:.8,position:"absolute",rounding:"circle",top:!0,width:24,children:Object(p.jsx)(l.v,{icon:Object(o.b)(j),accessibilityLabel:A._("Shopping icon","bubble.shoppingIcon.label","Accessibility label for bubble shopping Icon"),color:"darkGray",size:12})}),Object(p.jsx)(l.f,{display:"flex",position:"absolute",top:!0,width:k,height:C,padding:L?6:C>100?3:1,alignItems:L?"end":"center",justifyContent:"center",children:Object(p.jsxs)(l.f,{display:"flex",direction:"column",children:[_&&Object(p.jsx)(l.cb,{align:"center",color:"white",size:"lg"===z?"lg":"sm",overflow:"normal",children:_}),["lg","md"].includes(z)?Object(p.jsx)(l.u,{align:"center",size:"lg"===z?"lg":"sm",color:"white",overflow:"normal",children:D}):Object(p.jsx)(l.cb,{align:"center",color:"white",size:"sm"===z?"lg":"sm",overflow:"normal",weight:"bold",children:D}),b&&L&&Object(p.jsxs)(l.f,{display:"flex",justifyContent:"center",alignItems:"center",marginTop:4,children:[Object(p.jsx)(l.f,{marginEnd:2,children:Object(p.jsx)(i.a,{outline:!0,size:"xs",src:b.image_small_url,name:b.full_name})}),Object(p.jsx)(l.cb,{size:"sm",color:"white",weight:"bold",children:b.full_name})]})]})})]})})});return v?Object(p.jsx)(c.f,{auxData:{today_article_id:n,story_id:O,grid_index:I.toString(),...e},component:13525,impressionData:{storyCategory:T,storyIdStr:O},loggingId:O,objectIdStr:O,slotIndex:I,viewParameter:P,viewType:S,children:({impressionTrackerRef:e})=>Object(p.jsx)(l.f,{ref:e,children:K})}):Object(p.jsx)(c.a,{auxData:{story_id:O,...e},impressionData:{storyCategory:T,storyIdStr:O},impressionType:"articleImpressions",loggingId:O,slotIndex:I,viewParameter:P,viewType:S,children:K})}},YcfT:function(e,t,n){var r=n("1u47"),i=n("RNo4"),a=n("AGnR");const s=!!Object(i.k)(window.location.search).debug_timespent;t.a=Object(r.b)({flushEvents:a.b,shouldShowLogStatements:s,track:a.e})},fgXV:function(e,t,n){var r=n("q1tI"),i=n("/MKj"),a=n("aK+E"),s=n("imij"),o=n("EC67"),c=n("zmYE"),l=n("nKUr");function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=e=>t=>{const{key:n,options:d,name:u,schema:m}=e,h=t=>"function"==typeof e.noCache?e.noCache(t):e.noCache;class b extends r.PureComponent{constructor(...e){super(...e),p(this,"optionsKey",Object(a.a)(d(this.props))),p(this,"fetchMore",()=>{const{bookmark:e,fetching:t}=this.props.resource;e&&!t&&this.props.dispatch(Object(c.e)(u,{bookmark:e,options:d(this.props),schema:m}))}),p(this,"refresh",()=>{this.props.dispatch(Object(c.g)(u,{options:d(this.props),schema:m}))})}componentDidMount(){const{dispatch:e,inCache:t}=this.props;!t||(({resource:e})=>{if(e&&e.error){const{httpStatus:t}=e.error;return!t||t>=500}return!1})(this.props)?e(Object(c.e)(u,{options:d(this.props),schema:m})):h(this.props)&&e(Object(c.g)(u,{options:d(this.props),schema:m}))}componentDidUpdate(){const e=Object(a.a)(d(this.props));if(e!==this.optionsKey){this.optionsKey=e;const{dispatch:t,inCache:n}=this.props;n?h(this.props)&&t(Object(c.g)(u,{options:d(this.props),schema:m})):t(Object(c.e)(u,{options:d(this.props),schema:m}))}}render(){const{inCache:r,resource:i,...a}=this.props,s={[n]:{fetchMore:this.fetchMore,fetching:i.fetching,refresh:this.refresh,isAtEnd:null===i.bookmark,inCache:r}};if(i.error){const{httpStatus:t,apiErrorCode:n}=i.error;if(e.onError)return e.onError(i.error,a);if(404===t||401===t&&7===n)return Object(l.jsx)(o.b,{to:{pathname:"/",state:{showError:!0}}});if(301===t)return Object(l.jsx)(o.b,{to:i.error.redirectUrl})}return Object(l.jsx)(t,{...a,...s})}}return p(b,"displayName",`WithResource[${u}](${t.displayName||t.name||"ComponentNameUndefined"})`),p(b,"getDependencies",((e,t)=>n=>{const r=t.getDependencies?t.getDependencies(n):[],i=e.options(n);return[...r,{resource:e.name,options:i}]})(e,t)),Object(i.connect)((t,n)=>{const r=e.options(n),i=Object(a.a)(r),o=t.resources[e.name]&&t.resources[e.name][i],c=Object(s.b)(e.name,r);return{...e.mapState?e.mapState(t,n):{},resource:o||{fetching:!0},inCache:!!(c?t.feeds[c]:o)}},(t,n)=>({...e.mapDispatch?e.mapDispatch(t,n):{},dispatch:t}))(b)}},hFTz:function(e,t,n){var r=n("YcfT"),i=n("1u47"),a=n("nKUr");t.a=e=>Object(a.jsx)(i.a,{...e,timeSpentManager:r.a})},hLPq:function(e,t,n){n.d(t,"a",(function(){return a}));var r=n("n6mq"),i=n("nKUr");function a({accessibilityLabel:e,bgColor:t,color:n,containerStyle:a,icon:s,onTouch:o,padding:c,svgPath:l,size:p,testId:d}){return Object(i.jsx)(r.f,{dangerouslySetInlineStyle:{__style:{...a}},"data-test-id":d,display:"inlineBlock",children:Object(i.jsx)(r.w,{accessibilityLabel:e||"",bgColor:t,dangerouslySetSvgPath:l?{__path:l}:void 0,icon:s,iconColor:n,onClick:o?({event:e})=>o(e):void 0,padding:"auto"===c?void 0:c||3,size:p||"xl"})})}},kEen:function(e,t,n){n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return D}));var r=n("q1tI"),i=n("/MKj"),a=n("VGkx"),s=n("Lr1Z"),o=n("U1vm"),c=n("rYoy"),l=n("QtD7"),p=n("n6mq"),d=n("ANjH"),u=n("kUgr"),m=n("AGnR"),h=n("QAzJ"),b=n("2NiC"),f=n("0G5S"),g=n("vtuW"),y=n("eQwl"),j=n("ulr2"),v=n("EC67"),x=n("nKUr");function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const I=Object(r.lazy)(()=>n.e(592).then(n.bind(null,"rdk+"))),T=(e,t=!1)=>{class n extends r.Component{constructor(...e){super(...e),w(this,"state",{upsellAppType:""}),w(this,"appUpsellAppType",e=>{const{currentUser:t,country:n,external:r,isAuthenticated:i,isAppUpsellDisabled:a,refresh:s,locale:o,platform:c,userAgent:l}=this.props;return Object(y.b)({country:n,currentUser:t,external:!!r,isAppUpsellDisabled:!!a,isAuthenticated:i,refresh:!!s,locale:o,platform:c,userAgent:l,activateLiteAppExp:e})}),w(this,"handleOpenInApp",e=>{Object(f.c)("deeplinkBehavior","branchfallback"),this.navigate(e)}),w(this,"handleTouch",(e,n)=>{const{activateTargetedLiteAppUpsell:r,onTouch:i,showAppUpsell:a,to:s,inIndiaDelayNuxGroup:o,nuxExperience:c}=this.props,l=this.appUpsellAppType(r);if(l)e.stopPropagation(),e.preventDefault(),this.setState({upsellAppType:l}),a();else if(Object(u.f)(null==c?void 0:c.experience_id)&&o)e.stopPropagation(),e.preventDefault();else{const t=Object(f.a)("deeplinkBehavior");t&&"branchfallback"===t&&(Object(g.a)("fallbackAttempt")||(e.stopPropagation(),e.preventDefault(),Object(g.c)("fallbackAttempt",1),this.navigate(n,`${window.location.origin}${p=s,"string"==typeof p?p:`${p.pathname||""}${p.search?"?"+p.search:""}`}`)))}var p;t&&l||!i||i(e)}),w(this,"handleContinue",e=>{const{hideAppUpsell:n,onTouch:r}=this.props;t&&r&&r(e),n()}),w(this,"navigate",(e,t)=>{const{deeplinkUri:n,hideAppUpsell:r,viewType:i,viewParameter:a}=this.props,{upsellAppType:s}=this.state;e(n,t),Object(m.e)({event_type:1701,view_type:i,view_parameter:a}),s&&(this.setState({upsellAppType:""}),r())})}render(){const{to:t,children:n,viewType:i,viewParameter:a,clientTrackingParams:s}=this.props,{upsellAppType:o}=this.state;return Object(x.jsx)(p.f,{children:Object(x.jsx)(b.a,{redirectToLite:o===y.a.ANDROID_LITE_APP,children:l=>Object(x.jsxs)(r.Fragment,{children:[!!o&&Object(x.jsx)(c.a,{children:Object(x.jsx)(I,{onContinue:this.handleContinue,onOpenInApp:()=>this.handleOpenInApp(l),to:t,viewType:i,viewParameter:a,clientTrackingParams:s})}),Object(x.jsx)(e,{...this.props,onTouch:e=>this.handleTouch(e,l),children:n})]})})})}}return w(n,"defaultProps",{isAppUpsellDisabled:!1}),Object(d.compose)(v.l,Object(i.connect)(({session:e,users:t,experiences:n},r)=>({browser:e.browser,country:e.country,currentUser:t[e.userId],isAuthenticated:e.isAuthenticated,platform:e.userAgentPlatform,isAppUpsellDisabled:!e.canUseNativeApp||"android-twa"===e.pwaType||r.isAppUpsellDisabled,unauthId:e.unauthId,userAgent:e.userAgent,locale:e.locale,nuxExperience:n&&n[40001]}),e=>({hideAppUpsell:()=>e(Object(j.f)()),showAppUpsell:()=>e(Object(j.B)()),activateTargetedLiteAppUpsell:()=>e(Object(l.a)("mweb_targeted_lite_app_upsell"))||""})))((function(e){const t=Object(h.b)("mweb_india_delay_nux")({dangerouslySkipActivation:!0}).anyEnabled;return Object(x.jsx)(n,{...e,inIndiaDelayNuxGroup:t})}))},O=T(s.a),_=T(o.a),D=T(a.a,!0)},kUgr:function(e,t,n){n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return m}));var r=n("0G5S"),i=n("PmFr");const a=e=>e>=Date.now()-72e5,s=(e,t)=>{const n=[];if(e)for(const r of e)t&&!r.is_shared||a(r.ts)&&n.push(r);return n},o=()=>{const e=Object(r.a)(i.h),t=e?JSON.parse(e):[],n=s(t,!1),o=s(t,!0),c=n.map(e=>e.first_pin_image_signature),l=n.map(e=>e.pin_id),p=o.map(e=>e.first_pin_image_signature),d=(e=>{const t={};if(e)for(const n of e)n.is_shared&&a(n.ts)&&n.pin_id&&(t[n.pin_id]={inviteCode:n.pin_invite_code});return t})(t),u=Object(r.a)(i.f),m=u?JSON.parse(u):[];return{extraPlpImages:c,plpImageRenderData:n,extraPlpIds:l,extraBlpImages:s(m,!0).map(e=>e.first_pin_image_signature),extraSharedImages:p,sharedPinData:d}},c=(e,t)=>{if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1){if(e[n].id!==t[n].id)return!1}return!0},l=(e,t)=>(e.nuxTopics?e.nuxTopics.map(({id:e})=>t[e]):[]).filter(e=>e.is_followed),p=(e,t)=>e.nuxTopics?e.nuxTopics.map(({id:e})=>t[e]):null,d=e=>e.filter(e=>!e.is_followed),u=(e,t)=>{const n=t.filter(e=>e.is_followed).map(e=>e.id),r=new Set(n);return e.filter(e=>!r.has(e.id))},m=e=>[40002,10105].includes(e)},t84P:function(e,t,n){n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return b})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return y}));var r=n("q1tI"),i=n("i8i4"),a=n("D2p8"),s=n("AGnR");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class c extends r.Component{constructor(...e){super(...e),o(this,"observe",()=>{try{if(this.node=Object(i.findDOMNode)(this),this.node instanceof HTMLElement){const{pinIdStr:e,newsIdStr:t}=this.props.eventData;a.c.start(this.node).onExitViewport(this.logImpression).setDebugId(e||t||"unknown")}}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}}),o(this,"logImpression",e=>{Object(s.d)({viewData:this.props.viewData||{},viewType:this.props.viewType,viewParameter:this.props.viewParameter,eventType:this.props.eventType,impressionType:this.props.impressionType,auxData:this.props.auxData,component:this.props.component,objectIdStr:this.props.objectIdStr,eventData:{endTime:e.endTime,time:e.startTime,...this.props.eventData}}),this.props.onTracked&&this.props.onTracked(this.props.eventData)})}componentDidMount(){this.props.isPaused||this.observe()}componentDidUpdate(e){e.isPaused&&!this.props.isPaused&&this.observe()}componentWillUnmount(){this.node instanceof HTMLElement&&a.c.stop(this.node)}render(){return r.Children.only(this.props.children)}}function l({auxData:e,component:t,eventData:n,eventType:i,impressionType:o,isPaused:c,objectIdStr:l,onTracked:p,viewData:d,viewType:u,viewParameter:m}){const h=Object(r.useRef)(null),b=r=>{Object(s.d)({viewData:d||{},viewType:u,viewParameter:m,eventType:i,impressionType:o,auxData:e,component:t,objectIdStr:l,eventData:{endTime:r.endTime,time:r.startTime,...n}}),p&&p(n)},f=Object(r.useCallback)(()=>{try{if(h.current instanceof HTMLElement){const{pinIdStr:e,newsIdStr:t}=n;a.c.start(h.current).onExitViewport(b).setDebugId(e||t||"unknown")}}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}},[h.current]);Object(r.useEffect)(()=>(c||f(),()=>{h.current instanceof HTMLElement&&a.c.stop(h.current)}),[f]);const g=Object(r.useRef)(c);return Object(r.useEffect)(()=>{g.current&&!c&&f(),g.current=c},[c,f]),h}var p=n("nKUr");const d=e=>Object(p.jsx)(c,{eventData:{...e.impressionData||{},pinIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:18,impressionType:"pinImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,children:e.children}),u=e=>Object(p.jsx)(c,{eventData:{newsIdStr:e.notificationId,newsType:e.newsType,displayMode:e.displayMode,newsIndex:e.newsIndex||0,tapItemIdStr:e.tapItemIdStr},auxData:e.auxData||{},eventType:4111,impressionType:"notificationDetailImpressions",loggingId:e.notificationId,viewType:107,viewParameter:3082,children:e.children}),m=e=>Object(p.jsx)(c,{eventData:{newsIdStr:e.notificationId,newsType:e.newsType},auxData:e.auxData||{},eventType:4110,impressionType:"notificationFeedImpressions",loggingId:e.notificationId,viewType:107,viewParameter:3081,children:e.children}),h=e=>Object(p.jsx)(c,{eventData:{...e.impressionData||{},articleIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:3829,impressionType:"articleImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,children:e.children}),b=e=>Object(p.jsx)(c,{eventData:{...e.impressionData||{},storyIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:170,impressionType:"storyImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter,children:e.children}),f=e=>{const t=l({eventData:{...e.impressionData||{},userIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0},auxData:e.auxData||{},component:e.component,eventType:3704,impressionType:"userImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},g=e=>{const t=l({eventData:{...e.impressionData||{},topicIdStr:e.loggingId,clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex||0},auxData:e.auxData||{},component:e.component,eventType:3703,impressionType:"topicImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})},y=e=>{const t=l({eventData:{...e.impressionData||{},clientTrackingParams:e.trackingParams,slotIndex:e.slotIndex},auxData:e.auxData||{},component:e.component,eventType:8569,impressionType:"todayArticleImpressions",isPaused:e.isPaused,loggingId:e.loggingId,objectIdStr:e.objectIdStr,onTracked:e.onTracked,viewData:e.viewData,viewType:e.viewType||1,viewParameter:e.viewParameter});return e.children({impressionTrackerRef:t})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/21-4b913d8b9f45be090f02.mjs.map