import{A as e,At as t,B as n,M as r,N as i,Nt as a,P as o,Q as ee,R as s,T as c,ct as l,fn as u,it as d,j as f,ln as te,ot as p,tt as ne,x as m,xt as h,z as g,zt as re}from"./TypeExpression-D6csDz4V.js";import{B as _,H as v,U as y,W as b,n as x,s as S,x as C,z as w}from"./index-4uKXPGRf.js";var T=Object.freeze({fadeDirection:`out`,growDirection:`forward`,highlightMode:`breathe`,radarDirection:`clockwise`,radarScanMode:`one-way`,radarTrailStyle:`gradient`,radarColor:`#00e676`,radarGradientTail:`rgba(0, 230, 118, 0.05)`,radarGradientMiddle:`rgba(0, 230, 118, 0.45)`,radarGradientFront:`rgba(0, 230, 118, 1)`,centerSpreadTrailStyle:`gradient`,centerSpreadColor:`#00e676`,centerSpreadGradientTail:`rgba(0, 230, 118, 0.05)`,centerSpreadGradientMiddle:`rgba(0, 230, 118, 0.45)`,centerSpreadGradientFront:`rgba(0, 230, 118, 1)`,centerSpreadOpacity:.7,centerSpreadTrailLength:.18}),ie=[`point`,`polyline`,`polygon`,`circle`,`ellipse`,`attack-arrow`,`tailed-attack-arrow`,`fine-arrow`,`tailed-squad-combat-arrow`,`assault-direction-arrow`,`double-arrow`,`rectangle`,`triangle`,`equilateral-triangle`,`assemble-polygon`,`closed-curve-polygon`,`sector`,`lune-polygon`,`lune-polyline`,`curve-polyline`],E=[`polygon`,`circle`,`ellipse`,`attack-arrow`,`tailed-attack-arrow`,`fine-arrow`,`tailed-squad-combat-arrow`,`assault-direction-arrow`,`double-arrow`,`rectangle`,`triangle`,`equilateral-triangle`,`assemble-polygon`,`closed-curve-polygon`,`sector`,`lune-polygon`],D=[`polyline`,`lune-polyline`,`curve-polyline`],O=[...D,`attack-arrow`,`tailed-attack-arrow`,`fine-arrow`,`tailed-squad-combat-arrow`,`assault-direction-arrow`,`double-arrow`],k=[`circle`,`sector`],A=`website/src/views/presentation/AnimationsView.vue`,j=`/components/presentation/animations`,M=`.test/scenarios/animations.ts`,ae=[{animationType:`pulse`,label:`脉冲（pulse）`,targetCapability:[`structured-presentation`],supportedShapeTypes:[`point`],writeDomains:[`overlay`],implementation:`src/builtins/animations/pulse.ts`,testFiles:[`test/AnimationBuiltins.test.ts`,`test/AnimationLifecycle.test.ts`],websitePage:{route:`${j}#effect-pulse`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`point`],acceptanceTarget:`point`,createDefaultSpec:()=>({type:`pulse`}),createDemoSpec:()=>({type:`pulse`,periodMs:1200,color:`#ff3b30`,radius:8,repeat:!0})},{animationType:`dash-flow`,label:`虚线流动（dash-flow）`,targetCapability:[`structured-presentation`],supportedShapeTypes:D,writeDomains:[`overlay`],implementation:`src/builtins/animations/dashFlow.ts`,testFiles:[`test/AnimationBuiltins.test.ts`,`test/AnimationLifecycle.test.ts`],websitePage:{route:`${j}#effect-dash-flow`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`line`],acceptanceTarget:`line`,createDefaultSpec:()=>({type:`dash-flow`}),createDemoSpec:()=>({type:`dash-flow`,speed:36,lineDash:[12,8],color:`#00b8d9`})},{animationType:`path-travel`,label:`路径运动（path-travel）`,targetCapability:[`structured-presentation`],supportedShapeTypes:D,writeDomains:[`overlay`],implementation:`src/builtins/animations/pathTravel.ts`,testFiles:[`test/AnimationBuiltins.test.ts`,`test/AnimationLifecycle.test.ts`],websitePage:{route:`${j}#effect-path-travel`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`line`],acceptanceTarget:`line`,createDefaultSpec:()=>({type:`path-travel`}),createDemoSpec:()=>({type:`path-travel`,durationMs:2400,repeat:!0,trailLength:.35,gradient:[[0,`rgba(0, 184, 217, 0)`],[1,`#00b8d9`]],width:4,showStart:!1,showEnd:!1})},{animationType:`blink`,label:`阶跃闪烁（blink）`,targetCapability:[`structured-presentation`],supportedShapeTypes:ie,writeDomains:[`target-opacity`],implementation:`src/builtins/animations/blink.ts`,testFiles:[`test/AnimationEffects.test.ts`,`test/AnimationEffectComposition.test.ts`],websitePage:{route:`${j}#effect-blink`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`area`,`line`,`arrow`,`point`,`circle`,`sector`],acceptanceTarget:`area`,createDefaultSpec:()=>({type:`blink`}),createDemoSpec:()=>({type:`blink`,periodMs:900,dutyCycle:.55,minOpacity:.12,maxOpacity:1,repeat:!0})},{animationType:`highlight`,label:`高亮（highlight）`,targetCapability:[`structured-presentation`,`closed-surface`],supportedShapeTypes:E,writeDomains:[`overlay`],implementation:`src/builtins/animations/highlight.ts`,testFiles:[`test/AnimationEffects.test.ts`,`test/AnimationEffectComposition.test.ts`],websitePage:{route:`${j}#effect-highlight`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`area`,`arrow`,`circle`,`sector`],acceptanceTarget:`area`,createDefaultSpec:()=>({type:`highlight`}),createDemoSpec:({highlightMode:e})=>({type:`highlight`,mode:e,...e===`breathe`?{periodMs:1400}:{},color:`#ffc107`,fillOpacity:.2,strokeWidth:4})},{animationType:`alert`,label:`双峰告警（alert）`,targetCapability:[`structured-presentation`,`closed-surface`],supportedShapeTypes:E,writeDomains:[`overlay`],implementation:`src/builtins/animations/alert.ts`,testFiles:[`test/AnimationEffects.test.ts`,`test/AnimationEffectComposition.test.ts`],websitePage:{route:`${j}#effect-alert`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`area`,`arrow`,`circle`,`sector`],acceptanceTarget:`area`,createDefaultSpec:()=>({type:`alert`}),createDemoSpec:()=>({type:`alert`,periodMs:1300,color:`#ff3b30`,fillOpacity:.24,strokeWidth:4,repeat:!0})},{animationType:`grow`,label:`路径/箭头生长（grow）`,targetCapability:[`structured-presentation`,`reveal-geometry`],supportedShapeTypes:O,writeDomains:[`target-geometry`],implementation:`src/builtins/animations/grow.ts`,testFiles:[`test/AnimationEffects.test.ts`,`test/AnimationEffectComposition.test.ts`,`test/ShapeAnimationProfile.test.ts`],websitePage:{route:`${j}#effect-grow`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`line`,`arrow`],acceptanceTarget:`line`,createDefaultSpec:()=>({type:`grow`}),createDemoSpec:({growDirection:e})=>({type:`grow`,durationMs:1600,direction:e,easing:`ease-in-out`,repeat:!0})},{animationType:`radar-scan`,label:`雷达扫描（radar-scan）`,targetCapability:[`structured-presentation`,`radial-frame`],supportedShapeTypes:k,writeDomains:[`overlay`],implementation:`src/builtins/animations/radarScan.ts`,testFiles:[`test/AnimationEffects.test.ts`,`test/ShapeAnimationProfile.test.ts`],websitePage:{route:`${j}#effect-radar-scan`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`circle`,`sector`],acceptanceTarget:`circle`,createDefaultSpec:()=>({type:`radar-scan`}),createDemoSpec:({radarDirection:e,radarScanMode:t,radarTrailStyle:n,radarColor:r,radarGradientTail:i,radarGradientMiddle:a,radarGradientFront:o})=>({type:`radar-scan`,periodMs:2200,direction:e,scanMode:t,...n===`gradient`?{gradient:[[0,i],[.6,a],[1,o]]}:{color:r},opacity:.8,beamWidthDeg:52,repeat:!0})},{animationType:`center-spread`,label:`中心扩散（center-spread）`,targetCapability:[`structured-presentation`,`radial-frame`],supportedShapeTypes:k,writeDomains:[`overlay`],implementation:`src/builtins/animations/centerSpread.ts`,testFiles:[`test/AnimationEffects.test.ts`,`test/ShapeAnimationProfile.test.ts`],websitePage:{route:`${j}#effect-center-spread`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`circle`,`sector`],acceptanceTarget:`sector`,createDefaultSpec:()=>({type:`center-spread`}),createDemoSpec:({centerSpreadTrailStyle:e,centerSpreadColor:t,centerSpreadGradientTail:n,centerSpreadGradientMiddle:r,centerSpreadGradientFront:i,centerSpreadOpacity:a,centerSpreadTrailLength:o})=>({type:`center-spread`,periodMs:1800,...e===`gradient`?{gradient:[[0,n],[.6,r],[1,i]]}:{color:t},opacity:a,trailLength:o,strokeWidth:o===0?3:0,ringCount:3,repeat:!0})},{animationType:`fade`,label:`渐隐/渐显（fade）`,targetCapability:[`structured-presentation`],supportedShapeTypes:ie,writeDomains:[`target-opacity`],implementation:`src/builtins/animations/fade.ts`,testFiles:[`test/AnimationEffects.test.ts`,`test/AnimationEffectComposition.test.ts`,`test/AnimationLifecycle.test.ts`],websitePage:{route:`${j}#effect-fade`,source:A},acceptanceScenario:M,nativeStylePolicy:`unsupported`,demoTargets:[`point`,`area`,`line`,`arrow`,`circle`,`sector`],acceptanceTarget:`area`,createDefaultSpec:()=>({type:`fade`,direction:`out`}),createDemoSpec:({fadeDirection:e})=>({type:`fade`,direction:e,durationMs:1400,easing:`ease-in-out`})}];Object.freeze(ae.map(({animationType:e})=>e));var oe=N(ae);function N(e){let t={};for(let n of e)t[n.animationType]=n;return Object.freeze(t)}var se={class:`example-demo animation-manager-demo`},ce={class:`example-demo__control-panel`},le={class:`animation-manager-demo__controls`},ue={class:`animation-manager-demo__switch`},de={class:`animation-manager-demo__metadata`},fe={key:0,class:`animation-manager-demo__options`},pe={key:1,class:`animation-manager-demo__options`},me={key:2,class:`animation-manager-demo__options`},he={key:3,class:`animation-manager-demo__radial-options animation-manager-demo__radial-options--radar`},ge={class:`animation-manager-demo__options`},_e={class:`animation-manager-demo__options`},ve={class:`animation-manager-demo__options`},ye={class:`animation-manager-demo__colors`},be={key:0},xe={key:4,class:`animation-manager-demo__radial-options`},Se={class:`animation-manager-demo__options`},Ce={class:`animation-manager-demo__colors`},we={key:0},Te={class:`animation-manager-demo__gradient-summary`,"aria-label":`渐变效果覆盖`},Ee={class:`example-demo__action-group animation-manager-demo__scenarios`,"aria-label":`组合与冲突实验`},De={class:`example-demo__action-buttons`},Oe={class:`example-demo__action-row animation-manager-demo__toolbar`},ke={class:`example-demo__action-group`},Ae={class:`example-demo__action-buttons`},je={class:`example-demo__feedback animation-manager-demo__status`,"aria-live":`polite`},Me={class:`animation-manager-demo__target-grid`,"aria-label":`十种动画独立目标`},Ne={class:`animation-manager-demo__feedback`,"aria-live":`polite`},Pe=`docs-animation-targets`,Fe=`docs-animation-gallery`,Ie=6.8,Le=8.25,P=m(n({__name:`AnimationManagerDemo`,setup(n,{expose:m}){let _=[116.8,39.85],v=new Set([`blink`,`highlight`,`alert`,`fade`]),y={pulse:[114.4,40.55],"dash-flow":[114.4,39.18],"path-travel":[115.6,39.18],blink:[115.6,40.55],highlight:[116.8,40.55],alert:[118,40.55],grow:[116.8,39.18],"radar-scan":[118,39.18],"center-spread":[119.2,39.18],fade:[119.2,40.55]},b={pulse:`Point`,"dash-flow":`Polyline`,"path-travel":`Polyline`,blink:`Polygon`,highlight:`Polygon`,alert:`Polygon`,grow:`FineArrow`,"radar-scan":`Sector`,"center-spread":`Circle`,fade:`Polygon`},w=e=>`docs-animation-${e}`,ie=ae.map(e=>({type:e.animationType,label:e.label})),E=t(null),D=a(null),O=a(null),k=new Set,A=t(`pulse`),j=t(``),M=t(!1),N=t(T.fadeDirection),P=t(T.growDirection),F=t(T.highlightMode),I=t(T.radarDirection),L=t(T.radarScanMode),R=t(T.radarTrailStyle),Re=t(T.radarColor),z=t(T.radarGradientTail),B=t(T.radarGradientMiddle),V=t(T.radarGradientFront),H=t(T.centerSpreadTrailStyle),U=t(T.centerSpreadColor),W=t(T.centerSpreadGradientTail),G=t(T.centerSpreadGradientMiddle),K=t(T.centerSpreadGradientFront),q=t(T.centerSpreadOpacity),J=t(T.centerSpreadTrailLength),Y=t(`stopped`),X=t(`十个目标彼此隔离；选择效果后再手动启动。`),ze=e(()=>oe[A.value]),Be=e(()=>v.has(A.value)),Ve=e(()=>M.value&&Be.value?`highlight`:A.value),He=e(()=>M.value&&Be.value?`共享 Polygon（组合实验）`:`${b[A.value]}（独立目标）`),Ue=e(()=>({running:`运行中`,paused:`已暂停`,stopped:`已停止`,finished:`已自然完成`})[Y.value]),We=e(()=>O.value!==null&&Y.value===`running`),Ge=e(()=>O.value!==null&&Y.value===`paused`),Ke=e(()=>O.value!==null&&Y.value!==`stopped`),qe=()=>({fadeDirection:N.value,growDirection:P.value,highlightMode:F.value,radarDirection:I.value,radarScanMode:L.value,radarTrailStyle:R.value,radarColor:Re.value,radarGradientTail:z.value,radarGradientMiddle:B.value,radarGradientFront:V.value,centerSpreadTrailStyle:H.value,centerSpreadColor:U.value,centerSpreadGradientTail:W.value,centerSpreadGradientMiddle:G.value,centerSpreadGradientFront:K.value,centerSpreadOpacity:q.value,centerSpreadTrailLength:J.value}),Je=e=>(O.value=e,k.add(e),Y.value=e.status,e.finished.then(()=>{k.delete(e),O.value===e&&(Y.value=e.status)}),e),Z=()=>{for(let e of k)e.stop();k.clear(),D.value?.animations.stopAll(),O.value=null,Y.value=`stopped`,X.value=`已停止当前 Earth 的全部动画并释放临时展示资源。`},Q=(e,t,n={})=>{let r=D.value;if(r===null)return null;let i={...oe[e].createDemoSpec(qe()),...n};return i.type===`highlight`&&i.mode!==`breathe`&&delete i.periodMs,i.type===`fade`&&i.direction===`in`&&r.elements.show({id:t}),Je(r.animations.play({id:t},i))},Ye=()=>{if(D.value===null)return;M.value||Z();let e=w(Ve.value),t=j.value.trim();try{Q(A.value,e,t.length===0?{}:{channel:t}),X.value=M.value?`${A.value} 已加入共享 Polygon；不同 channel 才会进入写入域合成。`:`${A.value} 已在自己的 ${b[A.value]} 上启动；普通模式会先停止旧效果。`}catch(e){X.value=e instanceof Error?`${e.name}: ${e.message}`:`动画启动失败`}},Xe=()=>{O.value?.pause(),O.value!==null&&(Y.value=O.value.status)},Ze=()=>{O.value?.resume(),O.value!==null&&(Y.value=O.value.status)},$=e=>{if(A.value!==e||M.value)return;let t=O.value?.status;t!==`running`&&t!==`paused`||(Ye(),!(O.value===null||Y.value!==`running`)&&(t===`paused`&&Xe(),X.value=t===`paused`?`${e} 参数已应用；新动画保持暂停。`:`${e} 参数已应用并重新启动。`))},Qe=()=>{O.value?.stop(),O.value!==null&&(Y.value=O.value.status)},$e=e=>{let t=D.value;t!==null&&t.view.animateFlyTo(t.view.toProjectedCoordinates(y[e]),{zoom:Le,duration:420})},et=()=>$e(Ve.value),tt=(e,t=!1)=>{(!M.value||!v.has(e))&&(Z(),M.value=!1),A.value=e,X.value=`${e} 使用独立 ${b[e]} 目标；点击“启动”观察效果。`,t&&$e(e)},nt=e=>{Z(),M.value=!!e,X.value=M.value?`组合模式已开启：blink、highlight、alert、fade 会写入同一个 Polygon；留空 channel 时各自使用 type。`:`已回到普通模式；切换或再次启动会先停止旧动画。`},rt=()=>{Z(),A.value=`alert`,M.value=!0;let e=w(`highlight`);try{Q(`highlight`,e,{channel:`composition-highlight`,mode:`steady`}),Q(`alert`,e,{channel:`composition-alert`}),X.value=`组合成功：steady highlight 与 alert 使用不同 channel，在共享 Polygon 上稳定叠加。`,$e(`highlight`)}catch(e){X.value=e instanceof Error?`${e.name}: ${e.message}`:`组合启动失败`}},it=()=>{Z(),M.value=!1,A.value=`alert`;let e=w(`highlight`);try{Q(`highlight`,e,{channel:`attention`,mode:`steady`}),Q(`alert`,e,{channel:`attention`}),X.value=`replace 已验证：alert 在完整校验后原子替换同 channel 的 highlight。`,$e(`highlight`)}catch(e){X.value=e instanceof Error?`${e.name}: ${e.message}`:`replace 验证失败`}},at=()=>{Z(),M.value=!1,A.value=`grow`;let e=w(`grow`);try{Q(`grow`,e,{channel:`grow-forward`,direction:`forward`}),Q(`grow`,e,{channel:`grow-reverse`,direction:`reverse`}),X.value=`未触发预期的 target-geometry 冲突。`}catch(e){X.value=e instanceof Error?`预期冲突：${e.name}；第一条 grow 仍保持运行。`:`已触发预期冲突`}$e(`grow`)},ot=()=>{let e=D.value;if(e!==null)for(let t of C)e.elements.show({id:w(t)})},st=()=>{Z(),M.value=!1,A.value=`pulse`,j.value=``,N.value=T.fadeDirection,P.value=T.growDirection,F.value=T.highlightMode,I.value=T.radarDirection,L.value=T.radarScanMode,R.value=T.radarTrailStyle,Re.value=T.radarColor,z.value=T.radarGradientTail,B.value=T.radarGradientMiddle,V.value=T.radarGradientFront,H.value=T.centerSpreadTrailStyle,U.value=T.centerSpreadColor,W.value=T.centerSpreadGradientTail,G.value=T.centerSpreadGradientMiddle,K.value=T.centerSpreadGradientFront,q.value=T.centerSpreadOpacity,J.value=T.centerSpreadTrailLength,ot();let e=D.value;e!==null&&e.view.animateFlyTo(e.view.toProjectedCoordinates(_),{zoom:Ie,duration:420}),X.value=`已停止全部动画、恢复默认参数并回到十目标总览。`},ct=e=>{let t=t=>e.view.toProjectedCoordinates(t),n=(e,n=.32,r=.24)=>t([[e[0]-n,e[1]-r],[e[0]+n,e[1]-r],[e[0]+n,e[1]+r],[e[0]-n,e[1]+r]]),r=t=>e.elements.add({...t,layerId:Pe,module:Fe});r({id:w(`pulse`),geometry:{type:`point`,controlPoints:t([y.pulse])},style:{symbol:{type:`circle`,radius:9,fill:{type:`solid`,color:`#ef4444`},stroke:{color:`#ffffff`,width:2}},text:{text:`pulse · Point`,fontSize:12,offsetY:25,fill:{type:`solid`,color:`#7f1d1d`},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.88)`},padding:[3,6,3,6]}}});let i=(e,t,i)=>r({id:w(e),geometry:{type:`polygon`,controlPoints:n(y[e])},style:{strokes:[{color:t,width:3}],fill:{type:`solid`,color:i},text:{text:`${e} · Polygon`,fontSize:12,fill:{type:`solid`,color:t},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.84)`},padding:[2,5,2,5]}}});i(`blink`,`#7c3aed`,`rgba(124,58,237,0.28)`),i(`highlight`,`#ca8a04`,`rgba(234,179,8,0.24)`),i(`alert`,`#dc2626`,`rgba(239,68,68,0.24)`),i(`fade`,`#475569`,`rgba(100,116,139,0.3)`),r({id:w(`dash-flow`),geometry:{type:`polyline`,controlPoints:t([[113.98,39.02],[114.38,39.38],[114.82,39.04]])},style:{strokes:[{color:`#ffffff`,width:7},{color:`#2563eb`,width:4,lineDash:[12,8]}],text:{text:`dash-flow`,placement:`line`,fontSize:12,fill:{type:`solid`,color:`#1e3a8a`},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.84)`},padding:[2,5,2,5]}}}),r({id:w(`path-travel`),geometry:{type:`polyline`,controlPoints:t([[115.16,39.02],[115.58,39.4],[116.02,39.04]])},style:{strokes:[{color:`#64748b`,width:4}],text:{text:`path-travel`,placement:`line`,fontSize:12,fill:{type:`solid`,color:`#334155`},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.84)`},padding:[2,5,2,5]}}}),r({id:w(`grow`),geometry:{type:`fine-arrow`,controlPoints:t([[116.35,38.98],[117.23,39.38]])},style:{strokes:[{color:`#ea580c`,width:2}],fill:{type:`solid`,color:`rgba(249,115,22,0.48)`},text:{text:`grow · FineArrow`,fontSize:12,fill:{type:`solid`,color:`#9a3412`},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.84)`},padding:[2,5,2,5]}}}),r({id:w(`radar-scan`),geometry:{type:`sector`,controlPoints:t([y[`radar-scan`],[118.45,39.18],[118,39.63]])},style:{strokes:[{color:`#0891b2`,width:3}],text:{text:`radar-scan · Sector`,fontSize:12,fill:{type:`solid`,color:`#155e75`},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.84)`},padding:[2,5,2,5]}}}),r({id:w(`center-spread`),geometry:{type:`circle`,center:e.view.toProjectedCoordinates(y[`center-spread`]),radius:38e3},style:{strokes:[{color:`rgba(16,185,129,0.72)`,width:1.5}],text:{text:`center-spread · Circle`,fontSize:12,fill:{type:`solid`,color:`#065f46`},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.84)`},padding:[2,5,2,5]}}})};return ne(()=>{if(E.value===null)return;let e=new S({target:E.value,view:{zoom:Ie},controls:{zoom:!0,rotate:!1,attribution:!0}});x(e,`vector`),e.layers.add({kind:`vector`,id:Pe,zIndex:20}),ct(e),e.view.flyTo(e.view.toProjectedCoordinates(_),Ie),D.value=e}),ee(()=>{Z(),D.value?.destroy(),D.value=null}),m({reset:st,focusSelected:et}),(e,t)=>{let n=l(`el-alert`),a=l(`el-option`),ee=l(`el-select`),ne=l(`el-input`),m=l(`el-switch`),_=l(`el-radio-button`),v=l(`el-radio-group`),y=l(`el-color-picker`),x=l(`el-input-number`),S=l(`el-tag`),C=l(`el-button`);return d(),o(`div`,se,[g(n,{class:`example-demo__alert`,title:`光敏提示：blink、呼吸 highlight 与 alert 可能引发不适。本示例不会自动播放，并可随时暂停或停止。`,type:`warning`,"show-icon":``,closable:!1}),f(`div`,ce,[f(`div`,le,[f(`label`,null,[t[33]||=f(`span`,null,`AnimationType`,-1),g(ee,{"model-value":A.value,"aria-label":`动画类型`,"onUpdate:modelValue":tt},{default:h(()=>[(d(!0),o(c,null,p(re(ie),e=>(d(),r(a,{key:e.type,label:e.label,value:e.type},null,8,[`label`,`value`]))),128))]),_:1},8,[`model-value`])]),f(`label`,null,[t[34]||=f(`span`,null,`当前目标`,-1),g(ne,{"model-value":He.value,"aria-label":`当前兼容目标`,readonly:``},null,8,[`model-value`])]),f(`label`,null,[t[35]||=f(`span`,null,`channel（留空使用 type）`,-1),g(ne,{modelValue:j.value,"onUpdate:modelValue":t[0]||=e=>j.value=e,clearable:``,placeholder:`例如 attention`,"aria-label":`动画 channel`},null,8,[`modelValue`])]),f(`label`,ue,[t[36]||=f(`span`,null,`显式组合模式`,-1),g(m,{modelValue:M.value,"onUpdate:modelValue":t[1]||=e=>M.value=e,disabled:!Be.value,"inline-prompt":``,"active-text":`组合`,"inactive-text":`普通`,"aria-label":`跨 channel 组合模式`,onChange:nt},null,8,[`modelValue`,`disabled`])])]),f(`div`,de,[f(`span`,null,[t[37]||=f(`strong`,null,`目标能力：`,-1),s(u(ze.value.targetCapability.join(` + `)),1)]),f(`span`,null,[t[38]||=f(`strong`,null,`写入域：`,-1),s(u(ze.value.writeDomains.join(` + `)),1)]),f(`span`,null,[t[39]||=f(`strong`,null,`兼容 Shape：`,-1),s(u(ze.value.supportedShapeTypes.join(`、`)),1)])]),A.value===`highlight`?(d(),o(`div`,fe,[t[42]||=f(`span`,null,`highlight mode`,-1),g(v,{modelValue:F.value,"onUpdate:modelValue":t[2]||=e=>F.value=e,"aria-label":`highlight 模式`},{default:h(()=>[g(_,{value:`steady`},{default:h(()=>[...t[40]||=[s(`steady 稳定`,-1)]]),_:1}),g(_,{value:`breathe`},{default:h(()=>[...t[41]||=[s(`breathe 呼吸`,-1)]]),_:1})]),_:1},8,[`modelValue`])])):A.value===`grow`?(d(),o(`div`,pe,[t[45]||=f(`span`,null,`FineArrow 揭示方向`,-1),g(v,{modelValue:P.value,"onUpdate:modelValue":t[3]||=e=>P.value=e,"aria-label":`FineArrow 揭示方向`},{default:h(()=>[g(_,{value:`forward`},{default:h(()=>[...t[43]||=[s(`forward 正向`,-1)]]),_:1}),g(_,{value:`reverse`},{default:h(()=>[...t[44]||=[s(`reverse 反向`,-1)]]),_:1})]),_:1},8,[`modelValue`])])):A.value===`fade`?(d(),o(`div`,me,[t[48]||=f(`span`,null,`fade 生命周期`,-1),g(v,{modelValue:N.value,"onUpdate:modelValue":t[4]||=e=>N.value=e,"aria-label":`fade 生命周期`},{default:h(()=>[g(_,{value:`out`},{default:h(()=>[...t[46]||=[s(`out · retain`,-1)]]),_:1}),g(_,{value:`in`},{default:h(()=>[...t[47]||=[s(`in · remove`,-1)]]),_:1})]),_:1},8,[`modelValue`])])):A.value===`radar-scan`?(d(),o(`div`,he,[f(`div`,ge,[t[51]||=f(`span`,null,`Sector 扫描方式`,-1),g(v,{modelValue:L.value,"onUpdate:modelValue":t[5]||=e=>L.value=e,"aria-label":`Sector 扫描方式`,onChange:t[6]||=e=>$(`radar-scan`)},{default:h(()=>[g(_,{value:`one-way`},{default:h(()=>[...t[49]||=[s(`单向`,-1)]]),_:1}),g(_,{value:`round-trip`},{default:h(()=>[...t[50]||=[s(`往复`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),f(`div`,_e,[t[54]||=f(`span`,null,`Sector 首程方向`,-1),g(v,{modelValue:I.value,"onUpdate:modelValue":t[7]||=e=>I.value=e,"aria-label":`Sector 首程方向`,onChange:t[8]||=e=>$(`radar-scan`)},{default:h(()=>[g(_,{value:`clockwise`},{default:h(()=>[...t[52]||=[s(`顺时针`,-1)]]),_:1}),g(_,{value:`counterclockwise`},{default:h(()=>[...t[53]||=[s(`逆时针`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),f(`div`,ve,[t[57]||=f(`span`,null,`尾迹`,-1),g(v,{modelValue:R.value,"onUpdate:modelValue":t[9]||=e=>R.value=e,"aria-label":`雷达尾迹样式`,onChange:t[10]||=e=>$(`radar-scan`)},{default:h(()=>[g(_,{value:`gradient`},{default:h(()=>[...t[55]||=[s(`三段 gradient`,-1)]]),_:1}),g(_,{value:`solid`},{default:h(()=>[...t[56]||=[s(`纯色`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),f(`div`,ye,[R.value===`solid`?(d(),o(`label`,be,[t[58]||=f(`span`,null,`纯色`,-1),g(y,{modelValue:Re.value,"onUpdate:modelValue":t[11]||=e=>Re.value=e,"show-alpha":``,onChange:t[12]||=e=>$(`radar-scan`)},null,8,[`modelValue`])])):(d(),o(c,{key:1},[f(`label`,null,[t[59]||=f(`span`,null,`尾端 0`,-1),g(y,{modelValue:z.value,"onUpdate:modelValue":t[13]||=e=>z.value=e,"show-alpha":``,onChange:t[14]||=e=>$(`radar-scan`)},null,8,[`modelValue`])]),f(`label`,null,[t[60]||=f(`span`,null,`中段 0.6`,-1),g(y,{modelValue:B.value,"onUpdate:modelValue":t[15]||=e=>B.value=e,"show-alpha":``,onChange:t[16]||=e=>$(`radar-scan`)},null,8,[`modelValue`])]),f(`label`,null,[t[61]||=f(`span`,null,`前沿 1`,-1),g(y,{modelValue:V.value,"onUpdate:modelValue":t[17]||=e=>V.value=e,"show-alpha":``,onChange:t[18]||=e=>$(`radar-scan`)},null,8,[`modelValue`])])],64))])])):A.value===`center-spread`?(d(),o(`div`,xe,[f(`div`,Se,[t[64]||=f(`span`,null,`Circle 波纹带`,-1),g(v,{modelValue:H.value,"onUpdate:modelValue":t[19]||=e=>H.value=e,"aria-label":`Circle 波纹带样式`,onChange:t[20]||=e=>$(`center-spread`)},{default:h(()=>[g(_,{value:`gradient`},{default:h(()=>[...t[62]||=[s(`三段 gradient`,-1)]]),_:1}),g(_,{value:`solid`},{default:h(()=>[...t[63]||=[s(`纯色`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),f(`div`,Ce,[H.value===`solid`?(d(),o(`label`,we,[t[65]||=f(`span`,null,`纯色`,-1),g(y,{modelValue:U.value,"onUpdate:modelValue":t[21]||=e=>U.value=e,"show-alpha":``,onChange:t[22]||=e=>$(`center-spread`)},null,8,[`modelValue`])])):(d(),o(c,{key:1},[f(`label`,null,[t[66]||=f(`span`,null,`内侧 0`,-1),g(y,{modelValue:W.value,"onUpdate:modelValue":t[23]||=e=>W.value=e,"show-alpha":``,onChange:t[24]||=e=>$(`center-spread`)},null,8,[`modelValue`])]),f(`label`,null,[t[67]||=f(`span`,null,`中段 0.6`,-1),g(y,{modelValue:G.value,"onUpdate:modelValue":t[25]||=e=>G.value=e,"show-alpha":``,onChange:t[26]||=e=>$(`center-spread`)},null,8,[`modelValue`])]),f(`label`,null,[t[68]||=f(`span`,null,`前沿 1`,-1),g(y,{modelValue:K.value,"onUpdate:modelValue":t[27]||=e=>K.value=e,"show-alpha":``,onChange:t[28]||=e=>$(`center-spread`)},null,8,[`modelValue`])])],64)),f(`label`,null,[t[69]||=f(`span`,null,`opacity`,-1),g(x,{modelValue:q.value,"onUpdate:modelValue":t[29]||=e=>q.value=e,min:0,max:1,step:.05,precision:2,onChange:t[30]||=e=>$(`center-spread`)},null,8,[`modelValue`])]),f(`label`,null,[t[70]||=f(`span`,null,`trailLength`,-1),g(x,{modelValue:J.value,"onUpdate:modelValue":t[31]||=e=>J.value=e,min:0,max:1,step:.02,precision:2,onChange:t[32]||=e=>$(`center-spread`)},null,8,[`modelValue`])])])])):i(``,!0),f(`div`,Te,[t[74]||=f(`span`,null,`gradient 覆盖：`,-1),g(S,{size:`small`},{default:h(()=>[...t[71]||=[s(`path-travel 路径尾迹`,-1)]]),_:1}),g(S,{size:`small`,type:`success`},{default:h(()=>[...t[72]||=[s(`radar-scan 扫描尾迹`,-1)]]),_:1}),g(S,{size:`small`,type:`warning`},{default:h(()=>[...t[73]||=[s(`center-spread 径向波纹`,-1)]]),_:1})]),f(`div`,Ee,[t[78]||=f(`span`,null,`组合与冲突：`,-1),f(`div`,De,[g(C,{size:`small`,onClick:rt},{default:h(()=>[...t[75]||=[s(`组合 highlight + alert`,-1)]]),_:1}),g(C,{size:`small`,onClick:it},{default:h(()=>[...t[76]||=[s(`同 channel replace`,-1)]]),_:1}),g(C,{size:`small`,onClick:at},{default:h(()=>[...t[77]||=[s(`双 grow 冲突`,-1)]]),_:1})])]),f(`div`,Oe,[f(`div`,ke,[f(`div`,Ae,[g(C,{type:`primary`,onClick:Ye},{default:h(()=>[...t[79]||=[s(`启动所选`,-1)]]),_:1}),g(C,{disabled:!We.value,onClick:Xe},{default:h(()=>[...t[80]||=[s(`暂停`,-1)]]),_:1},8,[`disabled`]),g(C,{disabled:!Ge.value,onClick:Ze},{default:h(()=>[...t[81]||=[s(`恢复`,-1)]]),_:1},8,[`disabled`]),g(C,{disabled:!Ke.value,onClick:Qe},{default:h(()=>[...t[82]||=[s(`停止当前`,-1)]]),_:1},8,[`disabled`]),g(C,{plain:``,onClick:Z},{default:h(()=>[...t[83]||=[s(`停止全部`,-1)]]),_:1}),g(C,{plain:``,onClick:et},{default:h(()=>[...t[84]||=[s(`定位所选`,-1)]]),_:1})])]),f(`div`,je,[g(S,{type:Y.value===`running`?`success`:Y.value===`paused`?`warning`:`info`},{default:h(()=>[s(u(Ue.value),1)]),_:1},8,[`type`])])])]),f(`div`,{ref_key:`mapTarget`,ref:E,class:`example-stage animation-manager-demo__stage`},null,512),f(`div`,Me,[(d(!0),o(c,null,p(re(ie),e=>(d(),r(C,{key:e.type,class:te([`animation-manager-demo__target-button`,{"is-selected":A.value===e.type}]),"aria-pressed":A.value===e.type,onClick:t=>tt(e.type,!0)},{default:h(()=>[f(`code`,null,u(e.type),1),f(`span`,null,u(b[e.type]),1)]),_:2},1032,[`class`,`aria-pressed`,`onClick`]))),128))]),f(`p`,Ne,u(X.value),1),t[85]||=f(`p`,{class:`animation-manager-demo__hint`},` 上排和下排共十个独立目标，不再复用重叠几何。普通模式只保留最近效果；显式组合模式仅对 blink、highlight、alert、fade 开放，并把它们放到共享 Polygon 上验证跨 channel 合成。fade-out 自然完成后保留最后一帧，点击“停止当前/全部”清理 retained 资源。 `,-1)])}}}),[[`__scopeId`,`data-v-ff6cd607`]]),F=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { Earth, animationTypes, type AnimationHandle, type AnimationSpec, type AnimationStatus, type AnimationType } from '@vrsim/earth-engine-ol';
import {
  animationEffectManifest,
  animationEffectManifestByType,
  defaultAnimationManifestDemoControls,
  type AnimationManifestDemoControls
} from '../../../../.test/animationEffectManifest';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

type FadeDirection = 'in' | 'out';
type GrowDirection = 'forward' | 'reverse';
type HighlightMode = 'steady' | 'breathe';
type RadarDirection = 'clockwise' | 'counterclockwise';
type RadarScanMode = 'one-way' | 'round-trip';
type RadialTrailStyle = 'solid' | 'gradient';

const LAYER_ID = 'docs-animation-targets';
const MODULE_ID = 'docs-animation-gallery';
const HOME_CENTER = [116.8, 39.85] as const;
const HOME_ZOOM = 6.8;
const FOCUS_ZOOM = 8.25;
const composableTypes = new Set<AnimationType>(['blink', 'highlight', 'alert', 'fade']);

const targetCenters = {
  pulse: [114.4, 40.55],
  'dash-flow': [114.4, 39.18],
  'path-travel': [115.6, 39.18],
  blink: [115.6, 40.55],
  highlight: [116.8, 40.55],
  alert: [118, 40.55],
  grow: [116.8, 39.18],
  'radar-scan': [118, 39.18],
  'center-spread': [119.2, 39.18],
  fade: [119.2, 40.55]
} as const satisfies Record<AnimationType, readonly [number, number]>;

const targetLabels = {
  pulse: 'Point',
  'dash-flow': 'Polyline',
  'path-travel': 'Polyline',
  blink: 'Polygon',
  highlight: 'Polygon',
  alert: 'Polygon',
  grow: 'FineArrow',
  'radar-scan': 'Sector',
  'center-spread': 'Circle',
  fade: 'Polygon'
} as const satisfies Record<AnimationType, string>;

const targetId = (type: AnimationType) => \`docs-animation-\${type}\`;
const effectOptions = animationEffectManifest.map((entry) => ({ type: entry.animationType, label: entry.label }));
const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const latestHandle = shallowRef<AnimationHandle | null>(null);
const activeHandles = new Set<AnimationHandle>();
const selectedType = ref<AnimationType>('pulse');
const channel = ref('');
const compositionMode = ref(false);
const fadeDirection = ref<FadeDirection>(defaultAnimationManifestDemoControls.fadeDirection);
const growDirection = ref<GrowDirection>(defaultAnimationManifestDemoControls.growDirection);
const highlightMode = ref<HighlightMode>(defaultAnimationManifestDemoControls.highlightMode);
const radarDirection = ref<RadarDirection>(defaultAnimationManifestDemoControls.radarDirection);
const radarScanMode = ref<RadarScanMode>(defaultAnimationManifestDemoControls.radarScanMode);
const radarTrailStyle = ref<RadialTrailStyle>(defaultAnimationManifestDemoControls.radarTrailStyle);
const radarColor = ref(defaultAnimationManifestDemoControls.radarColor);
const radarGradientTail = ref(defaultAnimationManifestDemoControls.radarGradientTail);
const radarGradientMiddle = ref(defaultAnimationManifestDemoControls.radarGradientMiddle);
const radarGradientFront = ref(defaultAnimationManifestDemoControls.radarGradientFront);
const centerSpreadTrailStyle = ref<RadialTrailStyle>(defaultAnimationManifestDemoControls.centerSpreadTrailStyle);
const centerSpreadColor = ref(defaultAnimationManifestDemoControls.centerSpreadColor);
const centerSpreadGradientTail = ref(defaultAnimationManifestDemoControls.centerSpreadGradientTail);
const centerSpreadGradientMiddle = ref(defaultAnimationManifestDemoControls.centerSpreadGradientMiddle);
const centerSpreadGradientFront = ref(defaultAnimationManifestDemoControls.centerSpreadGradientFront);
const centerSpreadOpacity = ref(defaultAnimationManifestDemoControls.centerSpreadOpacity);
const centerSpreadTrailLength = ref(defaultAnimationManifestDemoControls.centerSpreadTrailLength);
const status = ref<AnimationStatus>('stopped');
const feedback = ref('十个目标彼此隔离；选择效果后再手动启动。');

const selectedEntry = computed(() => animationEffectManifestByType[selectedType.value]);
const compositionCompatible = computed(() => composableTypes.has(selectedType.value));
const playbackTargetType = computed<AnimationType>(() => (compositionMode.value && compositionCompatible.value ? 'highlight' : selectedType.value));
const selectedTargetLabel = computed(() =>
  compositionMode.value && compositionCompatible.value ? '共享 Polygon（组合实验）' : \`\${targetLabels[selectedType.value]}（独立目标）\`
);
const statusLabel = computed(() => ({ running: '运行中', paused: '已暂停', stopped: '已停止', finished: '已自然完成' })[status.value]);
const canPause = computed(() => latestHandle.value !== null && status.value === 'running');
const canResume = computed(() => latestHandle.value !== null && status.value === 'paused');
const canStop = computed(() => latestHandle.value !== null && status.value !== 'stopped');

const controls = (): AnimationManifestDemoControls => ({
  fadeDirection: fadeDirection.value,
  growDirection: growDirection.value,
  highlightMode: highlightMode.value,
  radarDirection: radarDirection.value,
  radarScanMode: radarScanMode.value,
  radarTrailStyle: radarTrailStyle.value,
  radarColor: radarColor.value,
  radarGradientTail: radarGradientTail.value,
  radarGradientMiddle: radarGradientMiddle.value,
  radarGradientFront: radarGradientFront.value,
  centerSpreadTrailStyle: centerSpreadTrailStyle.value,
  centerSpreadColor: centerSpreadColor.value,
  centerSpreadGradientTail: centerSpreadGradientTail.value,
  centerSpreadGradientMiddle: centerSpreadGradientMiddle.value,
  centerSpreadGradientFront: centerSpreadGradientFront.value,
  centerSpreadOpacity: centerSpreadOpacity.value,
  centerSpreadTrailLength: centerSpreadTrailLength.value
});

const trackHandle = (handle: AnimationHandle) => {
  latestHandle.value = handle;
  activeHandles.add(handle);
  status.value = handle.status;
  void handle.finished.then(() => {
    activeHandles.delete(handle);
    if (latestHandle.value === handle) status.value = handle.status;
  });
  return handle;
};

const stopAll = () => {
  for (const handle of activeHandles) handle.stop();
  activeHandles.clear();
  earthRef.value?.animations.stopAll();
  latestHandle.value = null;
  status.value = 'stopped';
  feedback.value = '已停止当前 Earth 的全部动画并释放临时展示资源。';
};

const play = (type: AnimationType, id: string, overrides: Partial<AnimationSpec> = {}) => {
  const earth = earthRef.value;
  if (earth === null) return null;
  const baseSpec = animationEffectManifestByType[type].createDemoSpec(controls());
  const spec = { ...baseSpec, ...overrides } as AnimationSpec;
  if (spec.type === 'highlight' && spec.mode !== 'breathe') delete (spec as { periodMs?: number }).periodMs;
  if (spec.type === 'fade' && spec.direction === 'in') earth.elements.show({ id });
  return trackHandle(earth.animations.play({ id }, spec));
};

const start = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  if (!compositionMode.value) stopAll();
  const id = targetId(playbackTargetType.value);
  const selectedChannel = channel.value.trim();
  try {
    play(selectedType.value, id, selectedChannel.length === 0 ? {} : { channel: selectedChannel });
    feedback.value = compositionMode.value
      ? \`\${selectedType.value} 已加入共享 Polygon；不同 channel 才会进入写入域合成。\`
      : \`\${selectedType.value} 已在自己的 \${targetLabels[selectedType.value]} 上启动；普通模式会先停止旧效果。\`;
  } catch (error) {
    feedback.value = error instanceof Error ? \`\${error.name}: \${error.message}\` : '动画启动失败';
  }
};

const pause = () => {
  latestHandle.value?.pause();
  if (latestHandle.value !== null) status.value = latestHandle.value.status;
};

const resume = () => {
  latestHandle.value?.resume();
  if (latestHandle.value !== null) status.value = latestHandle.value.status;
};

const applyRunningRadialOptions = (type: 'radar-scan' | 'center-spread') => {
  if (selectedType.value !== type || compositionMode.value) return;
  const currentStatus = latestHandle.value?.status;
  if (currentStatus !== 'running' && currentStatus !== 'paused') return;
  start();
  if (latestHandle.value === null || status.value !== 'running') return;
  if (currentStatus === 'paused') pause();
  feedback.value = currentStatus === 'paused' ? \`\${type} 参数已应用；新动画保持暂停。\` : \`\${type} 参数已应用并重新启动。\`;
};

const stop = () => {
  latestHandle.value?.stop();
  if (latestHandle.value !== null) status.value = latestHandle.value.status;
};

const focusType = (type: AnimationType) => {
  const earth = earthRef.value;
  if (earth === null) return;
  earth.view.animateFlyTo(earth.view.toProjectedCoordinates(targetCenters[type]), { zoom: FOCUS_ZOOM, duration: 420 });
};

const focusSelected = () => focusType(playbackTargetType.value);

const selectEffect = (type: AnimationType, focus = false) => {
  if (!compositionMode.value || !composableTypes.has(type)) {
    stopAll();
    compositionMode.value = false;
  }
  selectedType.value = type;
  feedback.value = \`\${type} 使用独立 \${targetLabels[type]} 目标；点击“启动”观察效果。\`;
  if (focus) focusType(type);
};

const onCompositionChange = (enabled: boolean | string | number) => {
  stopAll();
  compositionMode.value = Boolean(enabled);
  feedback.value = compositionMode.value
    ? '组合模式已开启：blink、highlight、alert、fade 会写入同一个 Polygon；留空 channel 时各自使用 type。'
    : '已回到普通模式；切换或再次启动会先停止旧动画。';
};

const playComposition = () => {
  stopAll();
  selectedType.value = 'alert';
  compositionMode.value = true;
  const id = targetId('highlight');
  try {
    play('highlight', id, { channel: 'composition-highlight', mode: 'steady' });
    play('alert', id, { channel: 'composition-alert' });
    feedback.value = '组合成功：steady highlight 与 alert 使用不同 channel，在共享 Polygon 上稳定叠加。';
    focusType('highlight');
  } catch (error) {
    feedback.value = error instanceof Error ? \`\${error.name}: \${error.message}\` : '组合启动失败';
  }
};

const playReplace = () => {
  stopAll();
  compositionMode.value = false;
  selectedType.value = 'alert';
  const id = targetId('highlight');
  try {
    play('highlight', id, { channel: 'attention', mode: 'steady' });
    play('alert', id, { channel: 'attention' });
    feedback.value = 'replace 已验证：alert 在完整校验后原子替换同 channel 的 highlight。';
    focusType('highlight');
  } catch (error) {
    feedback.value = error instanceof Error ? \`\${error.name}: \${error.message}\` : 'replace 验证失败';
  }
};

const playGrowConflict = () => {
  stopAll();
  compositionMode.value = false;
  selectedType.value = 'grow';
  const id = targetId('grow');
  try {
    play('grow', id, { channel: 'grow-forward', direction: 'forward' });
    play('grow', id, { channel: 'grow-reverse', direction: 'reverse' });
    feedback.value = '未触发预期的 target-geometry 冲突。';
  } catch (error) {
    feedback.value = error instanceof Error ? \`预期冲突：\${error.name}；第一条 grow 仍保持运行。\` : '已触发预期冲突';
  }
  focusType('grow');
};

const showAllTargets = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  for (const type of animationTypes) earth.elements.show({ id: targetId(type) });
};

const reset = () => {
  stopAll();
  compositionMode.value = false;
  selectedType.value = 'pulse';
  channel.value = '';
  fadeDirection.value = defaultAnimationManifestDemoControls.fadeDirection;
  growDirection.value = defaultAnimationManifestDemoControls.growDirection;
  highlightMode.value = defaultAnimationManifestDemoControls.highlightMode;
  radarDirection.value = defaultAnimationManifestDemoControls.radarDirection;
  radarScanMode.value = defaultAnimationManifestDemoControls.radarScanMode;
  radarTrailStyle.value = defaultAnimationManifestDemoControls.radarTrailStyle;
  radarColor.value = defaultAnimationManifestDemoControls.radarColor;
  radarGradientTail.value = defaultAnimationManifestDemoControls.radarGradientTail;
  radarGradientMiddle.value = defaultAnimationManifestDemoControls.radarGradientMiddle;
  radarGradientFront.value = defaultAnimationManifestDemoControls.radarGradientFront;
  centerSpreadTrailStyle.value = defaultAnimationManifestDemoControls.centerSpreadTrailStyle;
  centerSpreadColor.value = defaultAnimationManifestDemoControls.centerSpreadColor;
  centerSpreadGradientTail.value = defaultAnimationManifestDemoControls.centerSpreadGradientTail;
  centerSpreadGradientMiddle.value = defaultAnimationManifestDemoControls.centerSpreadGradientMiddle;
  centerSpreadGradientFront.value = defaultAnimationManifestDemoControls.centerSpreadGradientFront;
  centerSpreadOpacity.value = defaultAnimationManifestDemoControls.centerSpreadOpacity;
  centerSpreadTrailLength.value = defaultAnimationManifestDemoControls.centerSpreadTrailLength;
  showAllTargets();
  const earth = earthRef.value;
  if (earth !== null) earth.view.animateFlyTo(earth.view.toProjectedCoordinates(HOME_CENTER), { zoom: HOME_ZOOM, duration: 420 });
  feedback.value = '已停止全部动画、恢复默认参数并回到十目标总览。';
};

const addTargets = (earth: Earth) => {
  const projected = (coordinates: readonly (readonly [number, number])[]) => earth.view.toProjectedCoordinates(coordinates);
  const around = (center: readonly [number, number], dx = 0.32, dy = 0.24) =>
    projected([
      [center[0] - dx, center[1] - dy],
      [center[0] + dx, center[1] - dy],
      [center[0] + dx, center[1] + dy],
      [center[0] - dx, center[1] + dy]
    ]);
  const add = (input: Parameters<Earth['elements']['add']>[0]) => earth.elements.add({ ...input, layerId: LAYER_ID, module: MODULE_ID });

  add({
    id: targetId('pulse'),
    geometry: { type: 'point', controlPoints: projected([targetCenters.pulse]) },
    style: {
      symbol: { type: 'circle', radius: 9, fill: { type: 'solid', color: '#ef4444' }, stroke: { color: '#ffffff', width: 2 } },
      text: {
        text: 'pulse · Point',
        fontSize: 12,
        offsetY: 25,
        fill: { type: 'solid', color: '#7f1d1d' },
        backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.88)' },
        padding: [3, 6, 3, 6]
      }
    }
  });

  const addArea = (type: 'blink' | 'highlight' | 'alert' | 'fade', color: string, fill: string) =>
    add({
      id: targetId(type),
      geometry: { type: 'polygon', controlPoints: around(targetCenters[type]) },
      style: {
        strokes: [{ color, width: 3 }],
        fill: { type: 'solid', color: fill },
        text: {
          text: \`\${type} · Polygon\`,
          fontSize: 12,
          fill: { type: 'solid', color },
          backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.84)' },
          padding: [2, 5, 2, 5]
        }
      }
    });
  addArea('blink', '#7c3aed', 'rgba(124,58,237,0.28)');
  addArea('highlight', '#ca8a04', 'rgba(234,179,8,0.24)');
  addArea('alert', '#dc2626', 'rgba(239,68,68,0.24)');
  addArea('fade', '#475569', 'rgba(100,116,139,0.3)');

  add({
    id: targetId('dash-flow'),
    geometry: {
      type: 'polyline',
      controlPoints: projected([
        [113.98, 39.02],
        [114.38, 39.38],
        [114.82, 39.04]
      ])
    },
    style: {
      strokes: [
        { color: '#ffffff', width: 7 },
        { color: '#2563eb', width: 4, lineDash: [12, 8] }
      ],
      text: {
        text: 'dash-flow',
        placement: 'line',
        fontSize: 12,
        fill: { type: 'solid', color: '#1e3a8a' },
        backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.84)' },
        padding: [2, 5, 2, 5]
      }
    }
  });
  add({
    id: targetId('path-travel'),
    geometry: {
      type: 'polyline',
      controlPoints: projected([
        [115.16, 39.02],
        [115.58, 39.4],
        [116.02, 39.04]
      ])
    },
    style: {
      strokes: [{ color: '#64748b', width: 4 }],
      text: {
        text: 'path-travel',
        placement: 'line',
        fontSize: 12,
        fill: { type: 'solid', color: '#334155' },
        backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.84)' },
        padding: [2, 5, 2, 5]
      }
    }
  });
  add({
    id: targetId('grow'),
    geometry: {
      type: 'fine-arrow',
      controlPoints: projected([
        [116.35, 38.98],
        [117.23, 39.38]
      ])
    },
    style: {
      strokes: [{ color: '#ea580c', width: 2 }],
      fill: { type: 'solid', color: 'rgba(249,115,22,0.48)' },
      text: {
        text: 'grow · FineArrow',
        fontSize: 12,
        fill: { type: 'solid', color: '#9a3412' },
        backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.84)' },
        padding: [2, 5, 2, 5]
      }
    }
  });
  add({
    id: targetId('radar-scan'),
    geometry: {
      type: 'sector',
      controlPoints: projected([targetCenters['radar-scan'], [118.45, 39.18], [118, 39.63]])
    },
    style: {
      strokes: [{ color: '#0891b2', width: 3 }],
      text: {
        text: 'radar-scan · Sector',
        fontSize: 12,
        fill: { type: 'solid', color: '#155e75' },
        backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.84)' },
        padding: [2, 5, 2, 5]
      }
    }
  });
  add({
    id: targetId('center-spread'),
    geometry: { type: 'circle', center: earth.view.toProjectedCoordinates(targetCenters['center-spread']), radius: 38_000 },
    style: {
      strokes: [{ color: 'rgba(16,185,129,0.72)', width: 1.5 }],
      text: {
        text: 'center-spread · Circle',
        fontSize: 12,
        fill: { type: 'solid', color: '#065f46' },
        backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.84)' },
        padding: [2, 5, 2, 5]
      }
    }
  });
};

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = new Earth({
    target: mapTarget.value,
    view: { zoom: HOME_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earth.layers.add({ kind: 'vector', id: LAYER_ID, zIndex: 20 });
  addTargets(earth);
  earth.view.flyTo(earth.view.toProjectedCoordinates(HOME_CENTER), HOME_ZOOM);
  earthRef.value = earth;
});

onBeforeUnmount(() => {
  stopAll();
  earthRef.value?.destroy();
  earthRef.value = null;
});

defineExpose({ reset, focusSelected });
<\/script>

<template>
  <div class="example-demo animation-manager-demo">
    <el-alert
      class="example-demo__alert"
      title="光敏提示：blink、呼吸 highlight 与 alert 可能引发不适。本示例不会自动播放，并可随时暂停或停止。"
      type="warning"
      show-icon
      :closable="false"
    />

    <div class="example-demo__control-panel">
      <div class="animation-manager-demo__controls">
        <label>
          <span>AnimationType</span>
          <el-select :model-value="selectedType" aria-label="动画类型" @update:model-value="selectEffect">
            <el-option v-for="effect in effectOptions" :key="effect.type" :label="effect.label" :value="effect.type" />
          </el-select>
        </label>
        <label>
          <span>当前目标</span>
          <el-input :model-value="selectedTargetLabel" aria-label="当前兼容目标" readonly />
        </label>
        <label>
          <span>channel（留空使用 type）</span>
          <el-input v-model="channel" clearable placeholder="例如 attention" aria-label="动画 channel" />
        </label>
        <label class="animation-manager-demo__switch">
          <span>显式组合模式</span>
          <el-switch
            v-model="compositionMode"
            :disabled="!compositionCompatible"
            inline-prompt
            active-text="组合"
            inactive-text="普通"
            aria-label="跨 channel 组合模式"
            @change="onCompositionChange"
          />
        </label>
      </div>

      <div class="animation-manager-demo__metadata">
        <span><strong>目标能力：</strong>{{ selectedEntry.targetCapability.join(' + ') }}</span>
        <span><strong>写入域：</strong>{{ selectedEntry.writeDomains.join(' + ') }}</span>
        <span><strong>兼容 Shape：</strong>{{ selectedEntry.supportedShapeTypes.join('、') }}</span>
      </div>

      <div v-if="selectedType === 'highlight'" class="animation-manager-demo__options">
        <span>highlight mode</span>
        <el-radio-group v-model="highlightMode" aria-label="highlight 模式">
          <el-radio-button value="steady">steady 稳定</el-radio-button>
          <el-radio-button value="breathe">breathe 呼吸</el-radio-button>
        </el-radio-group>
      </div>
      <div v-else-if="selectedType === 'grow'" class="animation-manager-demo__options">
        <span>FineArrow 揭示方向</span>
        <el-radio-group v-model="growDirection" aria-label="FineArrow 揭示方向">
          <el-radio-button value="forward">forward 正向</el-radio-button>
          <el-radio-button value="reverse">reverse 反向</el-radio-button>
        </el-radio-group>
      </div>
      <div v-else-if="selectedType === 'fade'" class="animation-manager-demo__options">
        <span>fade 生命周期</span>
        <el-radio-group v-model="fadeDirection" aria-label="fade 生命周期">
          <el-radio-button value="out">out · retain</el-radio-button>
          <el-radio-button value="in">in · remove</el-radio-button>
        </el-radio-group>
      </div>
      <div v-else-if="selectedType === 'radar-scan'" class="animation-manager-demo__radial-options animation-manager-demo__radial-options--radar">
        <div class="animation-manager-demo__options">
          <span>Sector 扫描方式</span>
          <el-radio-group v-model="radarScanMode" aria-label="Sector 扫描方式" @change="applyRunningRadialOptions('radar-scan')">
            <el-radio-button value="one-way">单向</el-radio-button>
            <el-radio-button value="round-trip">往复</el-radio-button>
          </el-radio-group>
        </div>
        <div class="animation-manager-demo__options">
          <span>Sector 首程方向</span>
          <el-radio-group v-model="radarDirection" aria-label="Sector 首程方向" @change="applyRunningRadialOptions('radar-scan')">
            <el-radio-button value="clockwise">顺时针</el-radio-button>
            <el-radio-button value="counterclockwise">逆时针</el-radio-button>
          </el-radio-group>
        </div>
        <div class="animation-manager-demo__options">
          <span>尾迹</span>
          <el-radio-group v-model="radarTrailStyle" aria-label="雷达尾迹样式" @change="applyRunningRadialOptions('radar-scan')">
            <el-radio-button value="gradient">三段 gradient</el-radio-button>
            <el-radio-button value="solid">纯色</el-radio-button>
          </el-radio-group>
        </div>
        <div class="animation-manager-demo__colors">
          <label v-if="radarTrailStyle === 'solid'"
            ><span>纯色</span><el-color-picker v-model="radarColor" show-alpha @change="applyRunningRadialOptions('radar-scan')"
          /></label>
          <template v-else>
            <label><span>尾端 0</span><el-color-picker v-model="radarGradientTail" show-alpha @change="applyRunningRadialOptions('radar-scan')" /></label>
            <label><span>中段 0.6</span><el-color-picker v-model="radarGradientMiddle" show-alpha @change="applyRunningRadialOptions('radar-scan')" /></label>
            <label><span>前沿 1</span><el-color-picker v-model="radarGradientFront" show-alpha @change="applyRunningRadialOptions('radar-scan')" /></label>
          </template>
        </div>
      </div>
      <div v-else-if="selectedType === 'center-spread'" class="animation-manager-demo__radial-options">
        <div class="animation-manager-demo__options">
          <span>Circle 波纹带</span>
          <el-radio-group v-model="centerSpreadTrailStyle" aria-label="Circle 波纹带样式" @change="applyRunningRadialOptions('center-spread')">
            <el-radio-button value="gradient">三段 gradient</el-radio-button>
            <el-radio-button value="solid">纯色</el-radio-button>
          </el-radio-group>
        </div>
        <div class="animation-manager-demo__colors">
          <label v-if="centerSpreadTrailStyle === 'solid'"
            ><span>纯色</span><el-color-picker v-model="centerSpreadColor" show-alpha @change="applyRunningRadialOptions('center-spread')"
          /></label>
          <template v-else>
            <label
              ><span>内侧 0</span><el-color-picker v-model="centerSpreadGradientTail" show-alpha @change="applyRunningRadialOptions('center-spread')"
            /></label>
            <label
              ><span>中段 0.6</span><el-color-picker v-model="centerSpreadGradientMiddle" show-alpha @change="applyRunningRadialOptions('center-spread')"
            /></label>
            <label
              ><span>前沿 1</span><el-color-picker v-model="centerSpreadGradientFront" show-alpha @change="applyRunningRadialOptions('center-spread')"
            /></label>
          </template>
          <label
            ><span>opacity</span
            ><el-input-number v-model="centerSpreadOpacity" :min="0" :max="1" :step="0.05" :precision="2" @change="applyRunningRadialOptions('center-spread')"
          /></label>
          <label
            ><span>trailLength</span
            ><el-input-number
              v-model="centerSpreadTrailLength"
              :min="0"
              :max="1"
              :step="0.02"
              :precision="2"
              @change="applyRunningRadialOptions('center-spread')"
          /></label>
        </div>
      </div>

      <div class="animation-manager-demo__gradient-summary" aria-label="渐变效果覆盖">
        <span>gradient 覆盖：</span>
        <el-tag size="small">path-travel 路径尾迹</el-tag>
        <el-tag size="small" type="success">radar-scan 扫描尾迹</el-tag>
        <el-tag size="small" type="warning">center-spread 径向波纹</el-tag>
      </div>

      <div class="example-demo__action-group animation-manager-demo__scenarios" aria-label="组合与冲突实验">
        <span>组合与冲突：</span>
        <div class="example-demo__action-buttons">
          <el-button size="small" @click="playComposition">组合 highlight + alert</el-button>
          <el-button size="small" @click="playReplace">同 channel replace</el-button>
          <el-button size="small" @click="playGrowConflict">双 grow 冲突</el-button>
        </div>
      </div>

      <div class="example-demo__action-row animation-manager-demo__toolbar">
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="start">启动所选</el-button>
            <el-button :disabled="!canPause" @click="pause">暂停</el-button>
            <el-button :disabled="!canResume" @click="resume">恢复</el-button>
            <el-button :disabled="!canStop" @click="stop">停止当前</el-button>
            <el-button plain @click="stopAll">停止全部</el-button>
            <el-button plain @click="focusSelected">定位所选</el-button>
          </div>
        </div>
        <div class="example-demo__feedback animation-manager-demo__status" aria-live="polite">
          <el-tag :type="status === 'running' ? 'success' : status === 'paused' ? 'warning' : 'info'">{{ statusLabel }}</el-tag>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage animation-manager-demo__stage"></div>
    <div class="animation-manager-demo__target-grid" aria-label="十种动画独立目标">
      <el-button
        v-for="effect in effectOptions"
        :key="effect.type"
        class="animation-manager-demo__target-button"
        :class="{ 'is-selected': selectedType === effect.type }"
        :aria-pressed="selectedType === effect.type"
        @click="selectEffect(effect.type, true)"
      >
        <code>{{ effect.type }}</code>
        <span>{{ targetLabels[effect.type] }}</span>
      </el-button>
    </div>
    <p class="animation-manager-demo__feedback" aria-live="polite">{{ feedback }}</p>
    <p class="animation-manager-demo__hint">
      上排和下排共十个独立目标，不再复用重叠几何。普通模式只保留最近效果；显式组合模式仅对 blink、highlight、alert、fade 开放，并把它们放到共享 Polygon 上验证跨
      channel 合成。fade-out 自然完成后保留最后一帧，点击“停止当前/全部”清理 retained 资源。
    </p>
  </div>
</template>

<style scoped>
.animation-manager-demo__controls {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.animation-manager-demo__controls label,
.animation-manager-demo__colors label {
  display: grid;
  gap: 6px;
  min-width: 0;
  color: var(--doc-muted);
  font-size: 12px;
}

.animation-manager-demo__switch {
  align-content: start;
}

.animation-manager-demo__metadata {
  display: grid;
  gap: 6px;
  padding: 10px 12px;
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  background: var(--doc-surface-soft);
  color: var(--doc-muted);
  font-size: 12px;
  line-height: 1.6;
}

.animation-manager-demo__options,
.animation-manager-demo__gradient-summary,
.animation-manager-demo__scenarios {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
  color: var(--doc-muted);
  font-size: 13px;
}

.animation-manager-demo__radial-options {
  padding: 10px 12px;
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  background: var(--doc-surface-soft);
}

.animation-manager-demo__radial-options .animation-manager-demo__options {
  margin-bottom: 8px;
}

.animation-manager-demo__radial-options--radar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  gap: 14px 12px;
  padding: 14px;
}

.animation-manager-demo__radial-options--radar .animation-manager-demo__options {
  display: grid;
  align-content: start;
  justify-items: start;
  gap: 8px;
  min-width: 0;
  margin: 0;
}

.animation-manager-demo__radial-options--radar .animation-manager-demo__options > span {
  color: var(--doc-text);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
}

.animation-manager-demo__radial-options--radar :deep(.el-radio-group) {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.animation-manager-demo__radial-options--radar :deep(.el-radio-button__inner) {
  border: 1px solid var(--el-border-color) !important;
  border-radius: 6px !important;
  box-shadow: none !important;
}

.animation-manager-demo__radial-options--radar :deep(.el-radio-button__original-radio:checked + .el-radio-button__inner) {
  border-color: var(--el-color-primary) !important;
}

.animation-manager-demo__radial-options--radar .animation-manager-demo__colors {
  grid-column: 1 / -1;
  gap: 10px 14px;
  padding-top: 12px;
  border-top: 1px solid var(--doc-border);
}

.animation-manager-demo__radial-options--radar .animation-manager-demo__colors label {
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid var(--doc-border);
  border-radius: 6px;
  background: var(--doc-surface);
}

.animation-manager-demo__colors {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 12px 18px;
}

.animation-manager-demo__colors label {
  display: flex;
  align-items: center;
}

.animation-manager-demo__toolbar {
  align-items: center;
}

.animation-manager-demo__stage {
  height: 470px;
  background: linear-gradient(var(--doc-border) 1px, transparent 1px), linear-gradient(90deg, var(--doc-border) 1px, transparent 1px), var(--doc-surface);
  background-size: 32px 32px;
}

.animation-manager-demo__target-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 8px;
  margin-top: 12px;
}

.animation-manager-demo__target-button.el-button {
  display: grid;
  width: 100%;
  height: auto;
  gap: 3px;
  margin: 0;
  min-width: 0;
  padding: 8px;
  border: 1px solid var(--doc-border);
  border-radius: 8px;
  background: var(--doc-surface);
  color: var(--doc-muted);
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.2s,
    background-color 0.2s;
}

.animation-manager-demo__target-button.el-button:hover,
.animation-manager-demo__target-button.el-button.is-selected {
  border-color: var(--doc-primary);
  background: var(--doc-primary-soft);
}

.animation-manager-demo__target-button.el-button:focus-visible {
  outline: 2px solid var(--doc-primary-deep);
  outline-offset: 2px;
}

.animation-manager-demo__target-button.el-button code {
  overflow: hidden;
  color: var(--doc-primary-deep);
  font-size: 11px;
  text-overflow: ellipsis;
}

.animation-manager-demo__target-button.el-button span {
  font-size: 11px;
}

:deep(.animation-manager-demo__target-button.el-button > span) {
  display: grid;
  width: 100%;
  min-width: 0;
  justify-items: start;
  gap: 3px;
}

.animation-manager-demo__feedback,
.animation-manager-demo__hint {
  margin: 10px 0 0;
  color: var(--doc-muted);
  font-size: 13px;
  line-height: 1.7;
}

.animation-manager-demo__feedback {
  color: var(--doc-text);
}

@media (max-width: 1100px) {
  .animation-manager-demo__controls {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .animation-manager-demo__target-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .animation-manager-demo__controls,
  .animation-manager-demo__target-grid {
    grid-template-columns: 1fr;
  }

  .animation-manager-demo__stage {
    height: 380px;
  }
}
</style>
`,I={class:`doc-page-layout`},L={class:`doc-page`},R={id:`overview`,class:`doc-prose`},Re={id:`effect-catalog`,class:`doc-prose`},z={class:`animation-doc__catalog`},B={class:`animation-doc__card-title`},V={class:`animation-doc__card-meta`},H=[`title`],U={id:`example-animation-manager`,class:`doc-prose`},W={id:`variant-lab`,class:`doc-prose`},G={id:`compatibility`,class:`doc-prose`},K={id:`effect-specs`,class:`doc-prose`},q={class:`animation-doc__effect-title`},J={id:`composition`,class:`doc-prose`},Y={id:`handle-lifecycle`,class:`doc-prose`},X={id:`interaction-policy`,class:`doc-prose`},ze={id:`performance`,class:`doc-prose`},Be={class:`doc-page-layout__aside`},Ve=`const handle = earth.animations.play(
  { id: 'area-1' },
  { type: 'fade', direction: 'out' }
);

await handle.finished;
earth.elements.hide({ id: 'area-1' });
handle.stop(); // 清除 retained 最后一帧，不会闪回`,He=m(n({__name:`AnimationsView`,setup(e){let n=e=>e.replace(/([a-z\d])([A-Z])/gu,`$1-$2`).toLowerCase(),i=e=>`/api/types#api-type-${n(e)}`,a=(e,t,r,a)=>({name:t,href:`${i(e)}-property-${n(t)}`,defaultValue:r,constraint:a}),ee=[{id:`overview`,label:`唯一播放入口`},{id:`effect-catalog`,label:`十种效果目录`},{id:`example-animation-manager`,label:`十种效果演示`},{id:`variant-lab`,label:`重点变体实验`},{id:`compatibility`,label:`兼容矩阵`},{id:`effect-specs`,label:`配置、默认值与范围`},{id:`composition`,label:`channel 与写入域`},{id:`handle-lifecycle`,label:`Handle、retain 与清理`},{id:`interaction-policy`,label:`Edit / Transform`},{id:`rendering-boundary`,label:`渲染与命中边界`},{id:`performance`,label:`性能与资源预算`},{id:`api`,label:`完整 API`}],te=t(null),ne=()=>te.value?.reset(),m=()=>te.value?.focusSelected(),x=e=>JSON.stringify(e).replace(/"([\w-]+)":/gu,`$1: `).replace(/"/gu,`'`),S=e=>e.length<=5?e.join(`、`):`${e.slice(0,4).join(`、`)} 等 ${e.length} 种 Shape`,T=C.map(e=>{let t=oe[e];return{animationType:e,label:t.label,capabilities:t.targetCapability,targetSummary:S(t.supportedShapeTypes),targetTitle:t.supportedShapeTypes.join(`、`),writeDomains:t.writeDomains,minimalCall:`earth.animations.play({ id: '${t.acceptanceTarget}-1' }, ${x(t.createDefaultSpec())});`}}),ie=[{family:`路径与箭头`,variants:`grow 的 FineArrow；forward / reverse；path-travel gradient`,result:`箭头按 Shape provider 路径完整揭示，路径尾迹显示渐变方向`},{family:`径向效果`,variants:`Sector radar-scan；one-way / round-trip；首程 clockwise / counterclockwise；纯色 / gradient`,result:`纯色尾迹保持均匀透明度；gradient 保留渐隐，往复扫描始终裁剪在 Sector sweep 内`},{family:`三种 gradient`,variants:`path-travel、radar-scan、center-spread`,result:`路径尾迹、扫描尾迹和径向波纹分别展示渐变色标方向`},{family:`透明度与终态`,variants:`fade in / out；out retain；blink + fade`,result:`in 完成后 remove；out 保留最后一帧并由 stop 清理`},{family:`高亮`,variants:`highlight steady / breathe`,result:`steady 不持续请求帧；breathe 显示光敏提示且只能手动启动`},{family:`组合与冲突`,variants:`跨 channel 合成、同 channel replace、双 grow 冲突`,result:`显式组合才叠加；replace 原子提交；geometry 冲突保留旧记录`}],E=[{type:`pulse`,capability:`structured-presentation`,targets:`Point`,domain:`overlay`,completion:`repeat: false 时一周期后移除`},{type:`dash-flow`,capability:`structured-presentation`,targets:`Polyline；含虚线 track 的开放或闭合 Linework`,domain:`overlay`,completion:`持续运行，直到 stop / replace / remove / destroy`},{type:`path-travel`,capability:`structured-presentation`,targets:`至少两个点的 Polyline`,domain:`overlay`,completion:`按 repeat 与 finishBehavior remove / retain`},{type:`blink`,capability:`structured-presentation`,targets:`Point / Polyline / Polygon / Circle 等结构化样式目标`,domain:`target-opacity`,completion:`repeat: false 时一周期后移除`},{type:`highlight`,capability:`closed-surface + structured`,targets:`Polygon、Circle；包括最终渲染为 Polygon 的闭合 Shape`,domain:`overlay`,completion:`不自然完成`},{type:`alert`,capability:`closed-surface + structured`,targets:`Polygon、Circle；包括最终渲染为 Polygon 的闭合 Shape`,domain:`overlay`,completion:`repeat: false 时一周期后移除`},{type:`grow`,capability:`reveal-geometry + structured`,targets:`Polyline / LunePolyline / CurvePolyline；FineArrow / TailedSquadCombatArrow / AssaultDirectionArrow / AttackArrow / TailedAttackArrow / DoubleArrow`,domain:`target-geometry`,completion:`repeat: false 时完整图形无缝接替`},{type:`radar-scan`,capability:`radial-frame + structured`,targets:`Circle / Sector`,domain:`overlay`,completion:`repeat: false 时在一个完整 period 后移除；round-trip 会先去后回`},{type:`center-spread`,capability:`radial-frame + structured`,targets:`Circle / Sector`,domain:`overlay`,completion:`最后一个环完成后移除`},{type:`fade`,capability:`structured-presentation`,targets:`Point / Polyline / Polygon / Circle 等结构化样式目标`,domain:`target-opacity`,completion:`fade-in remove；fade-out retain`}],D=[{type:`pulse`,label:`点脉冲`,spec:`PulseAnimationSpec`,specHref:i(`PulseAnimationSpec`),fields:[a(`PulseAnimationSpec`,`type`,`'pulse'`,`固定判别字段`),a(`PulseAnimationSpec`,`channel`,`'pulse'`,`非空字符串；同目标同 channel 原子替换`),a(`PulseAnimationSpec`,`periodMs`,`1000`,`有限正数，单位 ms`),a(`PulseAnimationSpec`,`color`,`'#ff0000'`,`Color`),a(`PulseAnimationSpec`,`repeat`,`true`,`false 时一个周期后自然完成`),a(`PulseAnimationSpec`,`radius`,`6`,`有限正数，单位 CSS px`)]},{type:`dash-flow`,label:`虚线流动`,spec:`DashFlowAnimationSpec`,specHref:i(`DashFlowAnimationSpec`),fields:[a(`DashFlowAnimationSpec`,`type`,`'dash-flow'`,`固定判别字段`),a(`DashFlowAnimationSpec`,`channel`,`'dash-flow'`,`非空字符串`),a(`DashFlowAnimationSpec`,`speed`,`24`,`有限数，单位 CSS px/s；符号决定流动方向`),a(`DashFlowAnimationSpec`,`lineDash`,`继承有效虚线，普通折线回退 [10, 10]`,`非空、有限、非负且不能全为 0，单位 CSS px`),a(`DashFlowAnimationSpec`,`color`,`继承目标描边`,`可选 Color`)]},{type:`path-travel`,label:`路径尾迹`,spec:`PathTravelAnimationSpec`,specHref:i(`PathTravelAnimationSpec`),fields:[a(`PathTravelAnimationSpec`,`type`,`'path-travel'`,`固定判别字段`),a(`PathTravelAnimationSpec`,`channel`,`'path-travel'`,`非空字符串`),a(`PathTravelAnimationSpec`,`speed`,`未设置`,`有限正数，地图距离/s；与 durationMs 互斥`),a(`PathTravelAnimationSpec`,`durationMs`,`2000（未设置 speed 时）`,`有限正数，单位 ms；与 speed 互斥`),a(`PathTravelAnimationSpec`,`repeat`,`true`,`是否循环`),a(`PathTravelAnimationSpec`,`trailLength`,`0.25`,`(0, 1]，占完整路径比例`),a(`PathTravelAnimationSpec`,`color`,`继承目标描边`,`可选 Color；gradient 存在时由渐变绘制尾迹`),a(`PathTravelAnimationSpec`,`gradient`,`未设置`,`至少两个 offset 严格递增的 [offset, Color] 色标`),a(`PathTravelAnimationSpec`,`width`,`2`,`有限正数，单位 CSS px`),a(`PathTravelAnimationSpec`,`curvature`,`0`,`有限数；0 严格保留原折线`),a(`PathTravelAnimationSpec`,`smoothness`,`180`,`正安全整数，最大 2048；多点路径每段至少两个采样段`),a(`PathTravelAnimationSpec`,`showStart`,`true`,`显示起点标记`),a(`PathTravelAnimationSpec`,`showEnd`,`true`,`显示终点标记`),a(`PathTravelAnimationSpec`,`endLineColor`,`未设置`,`可选终态辅助线 Color`),a(`PathTravelAnimationSpec`,`finishBehavior`,`'remove'`,`'remove' | 'retain'；retain 后仍需 stop 清理`)]},{type:`blink`,label:`阶跃闪烁`,spec:`BlinkAnimationSpec`,specHref:i(`BlinkAnimationSpec`),fields:[a(`BlinkAnimationSpec`,`type`,`'blink'`,`固定判别字段`),a(`BlinkAnimationSpec`,`channel`,`'blink'`,`非空字符串`),a(`BlinkAnimationSpec`,`periodMs`,`800`,`有限正数，单位 ms`),a(`BlinkAnimationSpec`,`dutyCycle`,`0.5`,`0 < value < 1`),a(`BlinkAnimationSpec`,`minOpacity`,`0`,`[0, 1]，且小于 maxOpacity`),a(`BlinkAnimationSpec`,`maxOpacity`,`1`,`[0, 1]，且大于 minOpacity`),a(`BlinkAnimationSpec`,`repeat`,`true`,`false 时一个周期后自然完成`)]},{type:`highlight`,label:`稳定或呼吸高亮`,spec:`HighlightAnimationSpec`,specHref:i(`HighlightAnimationSpec`),fields:[a(`HighlightAnimationSpec`,`type`,`'highlight'`,`固定判别字段`),a(`HighlightAnimationSpec`,`channel`,`'highlight'`,`非空字符串`),a(`HighlightAnimationSpec`,`mode`,`'steady'`,`'steady' | 'breathe'`),a(`HighlightAnimationSpec`,`color`,`'#ffc107'`,`Color`),a(`HighlightAnimationSpec`,`fillOpacity`,`0.18`,`[0, 1]`),a(`HighlightAnimationSpec`,`strokeWidth`,`3`,`有限非负数，单位 CSS px`),a(`HighlightAnimationSpec`,`periodMs`,`1200（breathe）`,`有限正数；steady 显式传入会报 InvalidArgumentError`)]},{type:`alert`,label:`双峰告警`,spec:`AlertAnimationSpec`,specHref:i(`AlertAnimationSpec`),fields:[a(`AlertAnimationSpec`,`type`,`'alert'`,`固定判别字段`),a(`AlertAnimationSpec`,`channel`,`'alert'`,`非空字符串`),a(`AlertAnimationSpec`,`periodMs`,`1200`,`有限正数，单位 ms`),a(`AlertAnimationSpec`,`color`,`'#ff3b30'`,`Color`),a(`AlertAnimationSpec`,`fillOpacity`,`0.22`,`[0, 1]`),a(`AlertAnimationSpec`,`strokeWidth`,`3`,`有限非负数，单位 CSS px`),a(`AlertAnimationSpec`,`repeat`,`true`,`false 时一个双峰周期后自然完成`)]},{type:`grow`,label:`路径与箭头生长`,spec:`GrowAnimationSpec`,specHref:i(`GrowAnimationSpec`),fields:[a(`GrowAnimationSpec`,`type`,`'grow'`,`固定判别字段`),a(`GrowAnimationSpec`,`channel`,`'grow'`,`非空字符串`),a(`GrowAnimationSpec`,`durationMs`,`1200`,`有限正数，单位 ms`),a(`GrowAnimationSpec`,`direction`,`'forward'`,`'forward' | 'reverse'；两者都从空逐步揭示到完整`),a(`GrowAnimationSpec`,`easing`,`'linear'`,`'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'`),a(`GrowAnimationSpec`,`repeat`,`false`,`false 时完整规范图形无缝接替`)]},{type:`radar-scan`,label:`雷达扫描`,spec:`RadarScanAnimationSpec`,specHref:i(`RadarScanAnimationSpec`),fields:[a(`RadarScanAnimationSpec`,`type`,`'radar-scan'`,`固定判别字段`),a(`RadarScanAnimationSpec`,`channel`,`'radar-scan'`,`非空字符串`),a(`RadarScanAnimationSpec`,`periodMs`,`2000`,`有限正数，单位 ms；表示所选 scanMode 的完整周期`),a(`RadarScanAnimationSpec`,`direction`,`'clockwise'`,`'clockwise' | 'counterclockwise'，表示最终屏幕上的首程方向`),a(`RadarScanAnimationSpec`,`scanMode`,`'one-way'`,`'one-way' | 'round-trip'；往复模式在 periodMs / 2 到达对侧边界并折返，在 periodMs 回到起扫边界`),a(`RadarScanAnimationSpec`,`color`,`'#00e676'`,`与 gradient 互斥；全部可见尾迹槽保持同一透明度`),a(`RadarScanAnimationSpec`,`gradient`,`未设置`,`至少两个严格递增色标；offset 0 为旧尾端，1 为扫描前沿，并保留年龄渐隐`),a(`RadarScanAnimationSpec`,`opacity`,`0.35`,`[0, 1]；纯色模式对全部可见槽恒定应用`),a(`RadarScanAnimationSpec`,`beamWidthDeg`,`45`,`0 < value ≤ 360；Sector 不超过自身 sweep`),a(`RadarScanAnimationSpec`,`repeat`,`true`,`false 时完成一个完整 period；round-trip 会完成去程和回程`)]},{type:`center-spread`,label:`中心扩散`,spec:`CenterSpreadAnimationSpec`,specHref:i(`CenterSpreadAnimationSpec`),fields:[a(`CenterSpreadAnimationSpec`,`type`,`'center-spread'`,`固定判别字段`),a(`CenterSpreadAnimationSpec`,`channel`,`'center-spread'`,`非空字符串`),a(`CenterSpreadAnimationSpec`,`periodMs`,`1600`,`单环从中心到外半径的有限正时长，单位 ms`),a(`CenterSpreadAnimationSpec`,`color`,`'#00e676'`,`与 gradient 互斥；全部可见波纹带保持同一透明度`),a(`CenterSpreadAnimationSpec`,`gradient`,`未设置`,`offset 0 为内侧旧尾迹，1 为外侧前沿，并保留尾迹与传播渐隐`),a(`CenterSpreadAnimationSpec`,`opacity`,`0.7`,`[0, 1]；纯色模式在整个传播生命周期内恒定应用`),a(`CenterSpreadAnimationSpec`,`trailLength`,`0.18`,`[0, 1]；0 只保留前沿线环或裁剪弧`),a(`CenterSpreadAnimationSpec`,`strokeWidth`,`2`,`有限非负数，单位 CSS px`),a(`CenterSpreadAnimationSpec`,`ringCount`,`3`,`1..5 的安全整数`),a(`CenterSpreadAnimationSpec`,`repeat`,`true`,`false 时最后一个错峰环完成后自然结束`)]},{type:`fade`,label:`渐显与渐隐`,spec:`FadeAnimationSpec`,specHref:i(`FadeAnimationSpec`),fields:[a(`FadeAnimationSpec`,`type`,`'fade'`,`固定判别字段`),a(`FadeAnimationSpec`,`channel`,`'fade'`,`非空字符串`),a(`FadeAnimationSpec`,`direction`,`必填`,`'in' | 'out'；不会根据当前 visible 推断`),a(`FadeAnimationSpec`,`durationMs`,`500`,`有限正数，单位 ms`),a(`FadeAnimationSpec`,`easing`,`'ease-in-out'`,`'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'`)]}],O=[{domain:`target-opacity`,effects:`blink、fade`,rule:`乘法合成并限制到 [0, 1]；fade + blink 与顺序无关`},{domain:`target-geometry`,effects:`grow`,rule:`同目标独占；不同 channel 的两个 grow 也同步抛 CapabilityError`},{domain:`overlay`,effects:`pulse、dash-flow、path-travel、highlight、alert、radar-scan、center-spread`,rule:`按记录创建顺序与稳定 slotKey 追加`}],k=[{definitions:`pulse`,edit:`pause-and-suppress`,transform:`pause-and-suppress`},{definitions:`dash-flow`,edit:`pause-and-suppress`,transform:`follow-preview`},{definitions:`path-travel`,edit:`pause-and-suppress`,transform:`follow-preview`},{definitions:`blink / highlight / alert / grow / radar-scan / center-spread / fade`,edit:`pause-and-suppress`,transform:`pause-and-suppress`}],A=[`AnimationManager`,`AnimationHandle`,`AnimationType`,`AnimationSpec`,`AnimationChannel`,`AnimationStatus`,`AnimationEasing`,`PulseAnimationSpec`,`DashFlowAnimationSpec`,`PathTravelAnimationSpec`,`BlinkAnimationSpec`,`HighlightAnimationSpec`,`AlertAnimationSpec`,`GrowAnimationSpec`,`RadarScanAnimationSpec`,`CenterSpreadAnimationSpec`,`FadeAnimationSpec`];return(e,t)=>{let n=l(`el-alert`),i=l(`el-tag`),a=l(`el-card`),x=l(`el-table-column`),S=l(`el-table`),C=l(`el-collapse-item`),j=l(`el-collapse`),M=l(`el-col`),ae=l(`el-row`);return d(),o(`div`,I,[f(`article`,L,[t[63]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图表现`),f(`h1`,null,`动画（Animations）`),f(`p`,null,`AnimationManager 是全部 Element 动画的唯一公共入口：同一套 Selector、channel、Handle 与资源清理规则覆盖十种内置效果。`)],-1),f(`section`,R,[t[9]||=f(`h2`,{class:`doc-h2`},`唯一入口：earth.animations.play()`,-1),f(`p`,null,[t[3]||=s(` 从 `,-1),g(b,{kind:`property`,to:`/api/types#api-type-earth-property-animations`},{default:h(()=>[...t[0]||=[s(`earth.animations`,-1)]]),_:1}),t[4]||=s(` 调用 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-manager-method-play`},{default:h(()=>[...t[1]||=[s(`play`,-1)]]),_:1}),t[5]||=s(`；不要为 blink、grow 或 radar 建立独立 Manager。 Selector 支持 id、ids、module、layerId、type、visible 和 predicate，返回 `,-1),g(b,{kind:`type`,to:`/api/types#api-type-animation-handle`},{default:h(()=>[...t[2]||=[s(`AnimationHandle`,-1)]]),_:1}),t[6]||=s(`。 `,-1)]),g(n,{type:`warning`,closable:!1,"show-icon":``,title:`光敏性风险`},{default:h(()=>[...t[7]||=[s(` 阶跃 blink、highlight 的 breathe 模式和 alert 可能触发光敏反应。下面的演示不会自动播放，并始终提供启动、暂停、恢复和停止控件。 `,-1)]]),_:1}),g(n,{type:`info`,closable:!1,"show-icon":``,title:`批量播放是原子的`},{default:h(()=>[...t[8]||=[s(` Selector 命中的任一目标不兼容、Spec 非法或写入域冲突时，整个 play() 同步失败；不会跳过目标、部分播放，也不会提前替换已有 channel。 `,-1)]]),_:1})]),f(`section`,Re,[t[16]||=f(`h2`,{class:`doc-h2`},`十种内置效果一览`,-1),f(`p`,null,[t[11]||=s(` 目录严格按根导出的 `,-1),g(b,{kind:`property`,to:`/api/types#api-value-animation-types`},{default:h(()=>[...t[10]||=[s(`animationTypes`,-1)]]),_:1}),t[12]||=s(` 顺序生成，并与动画 acceptance manifest 共用兼容能力、写入域和最小 Spec；新增内置效果时不会依赖手写下拉分支。 `,-1)]),f(`div`,z,[(d(!0),o(c,null,p(re(T),e=>(d(),r(a,{id:`effect-${e.animationType}`,key:e.animationType,class:`animation-doc__effect-card`,shadow:`never`},{header:h(()=>[f(`div`,B,[f(`strong`,null,u(e.label),1),f(`code`,null,u(e.animationType),1)])]),default:h(()=>[f(`dl`,V,[f(`div`,null,[t[13]||=f(`dt`,null,`兼容目标`,-1),f(`dd`,{title:e.targetTitle},u(e.targetSummary),9,H)]),f(`div`,null,[t[14]||=f(`dt`,null,`目标能力`,-1),f(`dd`,null,[(d(!0),o(c,null,p(e.capabilities,e=>(d(),r(i,{key:e,size:`small`},{default:h(()=>[s(u(e),1)]),_:2},1024))),128))])]),f(`div`,null,[t[15]||=f(`dt`,null,`写入域`,-1),f(`dd`,null,[(d(!0),o(c,null,p(e.writeDomains,e=>(d(),r(i,{key:e,size:`small`,type:`warning`},{default:h(()=>[s(u(e),1)]),_:2},1024))),128))])])]),g(y,{class:`animation-doc__minimal-call`,code:e.minimalCall,lang:`ts`},null,8,[`code`])]),_:2},1032,[`id`]))),128))])]),f(`section`,U,[g(_,{title:`十种独立目标、参数实验室与 Handle 控制`,source:re(F),"show-reset":``,"show-focus":``,onReset:ne,onFocus:m},{description:h(()=>[f(`p`,null,[t[20]||=s(` 地图以 5 × 2 分布十个互不重叠的目标：每种效果都有自己的兼容 Shape，点击目录按钮可选中并聚焦。普通模式切换效果会自动停止旧句柄；只有显式开启组合模式，才会把 blink、highlight、alert、fade 放到共享 Polygon 上验证跨 channel 合成。径向效果运行中修改扫描方式、方向、颜色或波纹参数时，示例会用最新 Spec 重新启动当前效果。启动后使用 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-handle-method-pause`},{default:h(()=>[...t[17]||=[s(`pause`,-1)]]),_:1}),t[21]||=s(`、 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-handle-method-resume`},{default:h(()=>[...t[18]||=[s(`resume`,-1)]]),_:1}),t[22]||=s(` 与 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-handle-method-stop`},{default:h(()=>[...t[19]||=[s(`stop`,-1)]]),_:1}),t[23]||=s(` 控制本次播放。 `,-1)])]),preview:h(()=>[g(P,{ref_key:`animationDemoRef`,ref:te},null,512)]),_:1},8,[`source`])]),f(`section`,W,[t[26]||=f(`h2`,{class:`doc-h2`},`重点变体实验清单`,-1),t[27]||=f(`p`,null,`上方参数实验室把容易遗漏的公开变体集中在一张地图中；闪烁、呼吸和告警不会随页面加载自动播放。`,-1),g(S,{data:ie,border:``},{default:h(()=>[g(x,{prop:`family`,label:`行为族`,"min-width":`150`}),g(x,{prop:`variants`,label:`可运行变体`,"min-width":`360`}),g(x,{prop:`result`,label:`应观察到的结果`,"min-width":`360`})]),_:1}),g(n,{type:`info`,closable:!1,"show-icon":``,title:`gradient 色标方向与互斥规则`},{default:h(()=>[...t[24]||=[s(` path-travel 的 offset 0 → 1 沿尾迹前进；radar-scan 的 0 表示最旧尾端、1 表示扫描前沿；center-spread 的 0 表示内侧最旧尾迹、1 表示外侧波纹前沿。radar-scan 与 center-spread 的 gradient 不能与 color 同时设置，实验室通过“渐变 / 纯色”切换保证二选一；纯色模式对全部可见尾迹槽恒定应用 opacity，只有 gradient 模式保留尾迹与传播进度渐隐。 `,-1)]]),_:1}),g(n,{type:`info`,closable:!1,"show-icon":``,title:`radar-scan 往复周期`},{default:h(()=>[...t[25]||=[s(` scanMode 为 one-way 时，一个 periodMs 从起扫边界到达对侧边界；round-trip 时，direction 只表示首程方向，扫描前沿在 periodMs / 2 到达对侧并立即折返，在 periodMs 回到起扫边界。repeat: false 会在这个完整周期后自然完成，repeat: true 则继续下一周期。 `,-1)]]),_:1})]),f(`section`,G,[t[29]||=f(`h2`,{class:`doc-h2`},`兼容矩阵与自然完成`,-1),g(S,{data:E,border:``},{default:h(()=>[g(x,{prop:`type`,label:`AnimationType`,"min-width":`150`,fixed:``}),g(x,{prop:`capability`,label:`要求能力`,"min-width":`230`}),g(x,{prop:`targets`,label:`兼容目标`,"min-width":`360`}),g(x,{prop:`domain`,label:`写入域`,"min-width":`150`}),g(x,{prop:`completion`,label:`自然完成`,"min-width":`290`})]),_:1}),g(n,{type:`error`,closable:!1,"show-icon":``,title:`NativeStyleRef 不支持首版动画效果`},{default:h(()=>[...t[28]||=[s(` 十种效果都依赖结构化 StyleSpec。NativeStyleRef 目标会在建立记录前同步抛 UnsupportedOperationError；引擎不会降级、跳过目标或只播放批次中的兼容部分。 `,-1)]]),_:1})]),f(`section`,K,[t[30]||=f(`h2`,{class:`doc-h2`},`配置、默认值、范围与单位`,-1),t[31]||=f(`p`,null,`每个属性名称都可点击到“所有导出类型”中的精确成员；所有 Spec 使用严格普通对象校验，未知字段、accessor、symbol 字段和非法原型都会被拒绝。`,-1),g(j,null,{default:h(()=>[(d(),o(c,null,p(D,e=>g(C,{key:e.type,name:e.type},{title:h(()=>[f(`span`,q,[f(`code`,null,u(e.type),1),f(`span`,null,u(e.label),1)])]),default:h(()=>[f(`p`,null,[g(b,{kind:`type`,to:e.specHref},{default:h(()=>[s(u(e.spec),1)]),_:2},1032,[`to`])]),g(S,{data:e.fields,border:``,size:`small`},{default:h(()=>[g(x,{label:`属性`,"min-width":`190`},{default:h(e=>[g(b,{kind:`property`,to:e.row.href},{default:h(()=>[s(u(e.row.name),1)]),_:2},1032,[`to`])]),_:1}),g(x,{prop:`defaultValue`,label:`默认值`,"min-width":`220`}),g(x,{prop:`constraint`,label:`范围、单位与行为`,"min-width":`440`})]),_:1},8,[`data`])]),_:2},1032,[`name`])),64))]),_:1})]),f(`section`,J,[t[32]||=f(`h2`,{class:`doc-h2`},`channel 管控制，写入域管组合`,-1),t[33]||=f(`p`,null,`默认 channel 等于 spec.type。同一目标、同一 channel 的新记录在完整校验后原子 replace；不同 channel 并不意味着无条件可组合，还必须满足写入域规则。`,-1),g(S,{data:O,border:``},{default:h(()=>[g(x,{prop:`domain`,label:`写入域`,"min-width":`180`}),g(x,{prop:`effects`,label:`效果`,"min-width":`330`}),g(x,{prop:`rule`,label:`合成规则`,"min-width":`410`})]),_:1}),t[34]||=f(`ul`,null,[f(`li`,null,`fade + alert：fade 同时降低规范目标替身与告警 overlay 的整体透明度。`),f(`li`,null,`grow + dash-flow：dash-flow 跟随 grow 的有效展示几何。`),f(`li`,null,`grow + highlight / alert：overlay 绑定到 grow 的当前有效几何。`),f(`li`,null,`两个不同 channel 的 grow：同步抛 CapabilityError，旧记录与视觉保持不变。`)],-1)]),f(`section`,Y,[t[53]||=f(`h2`,{class:`doc-h2`},`Handle、Element 变化与 retain`,-1),f(`ul`,null,[f(`li`,null,[g(b,{kind:`property`,to:`/api/types#api-type-animation-handle-property-status`},{default:h(()=>[...t[35]||=[s(`status`,-1)]]),_:1}),t[36]||=s(` 为 running / paused / stopped / finished；pause 冻结 elapsed，resume 从原位置继续。 `,-1)]),f(`li`,null,[g(b,{kind:`property`,to:`/api/types#api-type-animation-handle-property-finished`},{default:h(()=>[...t[37]||=[s(`finished`,-1)]]),_:1}),t[38]||=s(` 在自然完成或停止后兑现；fade-out retain 兑现后仍保留稳定最后一帧。 `,-1)]),t[41]||=f(`li`,null,`Element hide 会暂停并撤下展示资源，show 以最新 View 状态继续；remove 与 earth.destroy() 会停止记录并释放全部资源。`,-1),t[42]||=f(`li`,null,` layerId、geometry 或 style 变化会重绑定最新状态，但不会重置动画 elapsed；radar-scan 往复模式会在新 radial frame 上保持同一去程或回程进度。copy、snapshot 和事务历史不复制动画。 `,-1),f(`li`,null,[g(b,{kind:`method`,to:`/api/types#api-type-animation-manager-method-stop-all`},{default:h(()=>[...t[39]||=[s(`stopAll`,-1)]]),_:1}),t[40]||=s(` 只影响当前 Earth，不跨实例清理。 `,-1)])]),f(`p`,null,[t[46]||=s(` Manager 级 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-manager-method-pause`},{default:h(()=>[...t[43]||=[s(`pause`,-1)]]),_:1}),t[47]||=s(`、 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-manager-method-resume`},{default:h(()=>[...t[44]||=[s(`resume`,-1)]]),_:1}),t[48]||=s(` 与 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-manager-method-stop`},{default:h(()=>[...t[45]||=[s(`stop`,-1)]]),_:1}),t[49]||=s(` 接收 Selector 和可选 channel 列表，并返回实际影响的记录数。pause 使用可叠加层级；每次 resume 只减少一级，不能把其他调用方持有的暂停层级一并清除。 `,-1)]),t[54]||=f(`h3`,{class:`doc-h3`},`fade-out 永久隐藏的无闪回顺序`,-1),g(y,{code:Ve,lang:`ts`}),f(`p`,null,[t[51]||=s(` 先等待 finished，再用业务 API 设置 visible: false，最后 `,-1),g(b,{kind:`method`,to:`/api/types#api-type-animation-handle-method-stop`},{default:h(()=>[...t[50]||=[s(`handle.stop`,-1)]]),_:1}),t[52]||=s(` 清理 retained 帧。fade-in 则应先 show，再 play；动画本身不会修改 ElementState.visible。 `,-1)])]),f(`section`,X,[t[56]||=f(`h2`,{class:`doc-h2`},`Edit 与 Transform 的视觉所有权`,-1),g(S,{data:k,border:``},{default:h(()=>[g(x,{prop:`definitions`,label:`Definition`,"min-width":`380`}),g(x,{prop:`edit`,label:`Edit`,"min-width":`220`}),g(x,{prop:`transform`,label:`Transform`,"min-width":`220`})]),_:1}),t[57]||=f(`p`,null,` pause-and-suppress 冻结 elapsed 并暂时隐藏动画，把视觉所有权交给交互预览；follow-preview 继续推进时间并使用 Transform 的 View 工作几何。会话完成、取消、替换或打开失败后都会恢复到最新 ElementState。 `,-1),g(n,{type:`info`,closable:!1,"show-icon":``,title:`动画和交互都不越过状态边界`},{default:h(()=>[...t[55]||=[s(` 动画帧不会写 Store、copy、snapshot 或交互工作态；交互也不会把动画中间几何提交为业务状态。 `,-1)]]),_:1})]),t[64]||=f(`section`,{id:`rendering-boundary`,class:`doc-prose`},[f(`h2`,{class:`doc-h2`},`渲染顺序、declutter 与命中边界`),f(`ul`,null,[f(`li`,null,`opacity / geometry replacement 目标在同一业务层的普通 Feature 之后绘制；不同 replacement 目标仍按 zIndex、原渲染顺序和 generation 稳定排序。`),f(`li`,null,` postrender 替身不参与 OpenLayers 原生 declutter；规范透明代理保留原 Icon、Text 或 Symbol 的占位。严格交错顺序或 declutter 很重要时，把高频动画目标放入独立业务图层。 `),f(`li`,null,`world wrap 展示副本由 Adapter 生成，不进入 Store。`),f(`li`,null,` 命中、Selector、query、ContextMenu 与 getScreenExtent() 始终读取规范 Element 几何；fade 到 0、blink 低位或尚未 grow 到的区域仍按规范几何命中。 `),f(`li`,null,`overlay 不扩展业务命中范围，也不会生成独立 Element 事件目标；动画展示几何不会改变业务范围查询。`)])],-1),f(`section`,ze,[t[61]||=f(`h2`,{class:`doc-h2`},`性能与资源预算`,-1),g(ae,{gutter:16},{default:h(()=>[g(M,{xs:24,md:8},{default:h(()=>[g(a,{shadow:`never`},{default:h(()=>[...t[58]||=[f(`strong`,null,`统一调度`,-1),f(`p`,null,`每个 Earth 一个时钟和 deadline scheduler；每个活动 VectorLayer 一个共享 RenderPass，不为每个 Element 建 RAF、timer 或 listener。`,-1)]]),_:1})]),_:1}),g(M,{xs:24,md:8},{default:h(()=>[g(a,{shadow:`never`},{default:h(()=>[...t[59]||=[f(`strong`,null,`稳定对象`,-1),f(`p`,null,`固定拓扑预热后复用 Feature、Geometry、Style 和 slot；radar 尾迹最多 16 slot，center-spread 最多 25 slot。`,-1)]]),_:1})]),_:1}),g(M,{xs:24,md:8},{default:h(()=>[g(a,{shadow:`never`},{default:h(()=>[...t[60]||=[f(`strong`,null,`保守裁剪`,-1),f(`p`,null,`离屏目标跳过采样和绘制；Text、未知 Icon 尺寸或无法可靠估算的视觉会禁用裁剪，避免漏画。`,-1)]]),_:1})]),_:1})]),_:1}),t[62]||=f(`ul`,null,[f(`li`,null,`paused、hidden、steady highlight、retained fade 和全部离屏时不持续请求地图帧。`),f(`li`,null,`stop、replace、remove、hide/show、交互取得视觉所有权和 Earth.destroy 都会释放或失效对应缓存。`),f(`li`,null,`不要脱离硬件、浏览器、目标数量、平均顶点数、覆盖面积、DPR 和效果配置承诺帧率；结构预算不是任意规模下的 60 FPS 保证。`)],-1)]),g(w,{"type-names":A,"runtime-names":[`animationTypes`],title:`Animations 完整 API`,description:`这里直接列出 AnimationManager、AnimationHandle、全部十种效果配置，以及 animationTypes 常量的属性、方法、参数、默认值和返回类型。`})]),f(`aside`,Be,[g(v,{title:`动画（Animations）`,items:ee})])])}}}),[[`__scopeId`,`data-v-d937139d`]]);export{He as default};