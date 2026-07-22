import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,it as d,j as f,ln as p,ot as m,tt as h,x as g,xt as _,z as v,zt as y}from"./TypeExpression-D6csDz4V.js";import{B as b,H as x,V as S,W as C,a as w,n as T,t as E,z as D}from"./index-4uKXPGRf.js";var ee={class:`example-demo events-demo`},te={class:`example-demo__control-panel events-demo__toolbar`},ne={class:`example-demo__action-row events-demo__action-row`},re={class:`example-demo__actions events-demo__actions`},O={class:`example-demo__action-group events-demo__action-group`,role:`group`,"aria-label":`订阅控制`},k={class:`example-demo__action-buttons events-demo__action-buttons`},A={class:`example-demo__action-group events-demo__action-group`,role:`group`,"aria-label":`计数与清理`},j={class:`example-demo__action-buttons events-demo__action-buttons`},M={class:`example-demo__feedback events-demo__states`,"aria-live":`polite`},N={class:`events-demo__counter-head`},ie={class:`events-demo__latest-title`},ae=`docs-services-events`,P=`events-demo`,F=`events-selector-marker`,I=8.5,L=g(n({__name:`EventsDemo`,setup(n,{expose:g}){let y=[{type:`pointermove`,label:`pointermove`,scope:`module`,hint:`在橙色标记上移动`},{type:`click`,label:`click`,scope:`global`,hint:`单击地图任意位置`},{type:`leftdown`,label:`leftdown`,scope:`selector`,hint:`在蓝色标记上按下主按钮`},{type:`leftup`,label:`leftup`,scope:`selector`,hint:`在蓝色标记上松开主按钮`},{type:`doubleclick`,label:`doubleclick`,scope:`global`,hint:`双击地图任意位置`},{type:`rightclick`,label:`rightclick`,scope:`once + signal`,hint:`右键一次，或提前中止`},{type:`keydown`,label:`keydown`,scope:`global`,hint:`先单击地图，再按键`}],b=()=>({pointermove:0,click:0,leftdown:0,leftup:0,doubleclick:0,rightclick:0,keydown:0}),x=t(null),S=i(null),C=i(null),E=t(b()),D=t({type:`—`,title:`尚未触发`,scope:`—`,target:`—`,position:`—`,detail:`按照事件卡片中的提示操作地图`}),L=t({global:!1,module:!1,selector:!1,signal:!1}),R,z,B,V,H,U,W,G,K=e(()=>y.map(e=>({...e,count:E.value[e.type]}))),q=e=>e.map(e=>e.toFixed(0)).join(`, `),J=(e,t,n,r,i)=>{E.value={...E.value,[e]:E.value[e]+1},D.value={type:e,title:`${e} 第 ${E.value[e]} 次`,scope:t,target:n,position:r,detail:i}},Y=()=>{let e=S.value?.events;L.value={global:(e?.has(`click`)??!1)&&(e?.has(`doubleclick`)??!1)&&(e?.has(`keydown`)??!1),module:e?.has(`pointermove`,P)??!1,selector:H!==void 0&&U!==void 0,signal:W!==void 0&&(e?.has(`rightclick`)??!1)}},X=(e=!0)=>{let t=[R,z,B,V,H,U,W].filter(e=>e!==void 0);R=void 0,z=void 0,B=void 0,V=void 0,H=void 0,U=void 0,W=void 0,G?.abort(),G=void 0;let n;for(let e of t)try{e()}catch(e){n??=e}if(Y(),e&&(D.value={type:`—`,title:`订阅已注销`,scope:`全部`,target:`—`,position:`—`,detail:`七类事件均不再计数`}),n!==void 0)throw n},Z=()=>{let e=S.value;e!==null&&(X(!1),R=e.events.on(`click`,({coordinate:e,pixel:t,element:n})=>{J(`click`,`global`,n?.id??`地图空白`,`坐标 ${q(e)} / 像素 ${q(t)}`,`全局订阅接收所有单击`)}),z=e.events.on(`doubleclick`,({coordinate:e,pixel:t,element:n})=>{J(`doubleclick`,`global`,n?.id??`地图空白`,`坐标 ${q(e)} / 像素 ${q(t)}`,`双击也可能伴随浏览器产生的单击事件`)}),B=e.events.on(`keydown`,({key:e,code:t,originalEvent:n})=>{J(`keydown`,`global`,`地图键盘入口`,`无地图坐标`,`${e}（${t}）${n.repeat?`，持续按键`:``}`)}),V=e.events.on(`pointermove`,({phase:e,coordinate:t,pixel:n,element:r})=>{J(`pointermove`,`module: ${P}`,r?.id??`未命中`,`坐标 ${q(t)} / 像素 ${q(n)}`,`当前阶段：${e??`move`}`)},{module:P}),H=e.events.on(`leftdown`,({coordinate:e,pixel:t,element:n})=>{J(`leftdown`,`selector: { id: '${F}' }`,n?.id??`未命中`,`坐标 ${q(e)} / 像素 ${q(t)}`,`只在蓝色标记上按下时触发`)},{selector:{id:F}}),U=e.events.on(`leftup`,({coordinate:e,pixel:t,element:n})=>{J(`leftup`,`selector: { id: '${F}' }`,n?.id??`未命中`,`坐标 ${q(e)} / 像素 ${q(t)}`,`只在蓝色标记上松开时触发`)},{selector:{id:F}}),G=new AbortController,W=e.events.once(`rightclick`,({coordinate:e,pixel:t,element:n})=>{J(`rightclick`,`global once + AbortSignal`,n?.id??`地图空白`,`坐标 ${q(e)} / 像素 ${q(t)}`,`首次触发后已自动注销`),W=void 0,G=void 0,Y()},{signal:G.signal}),D.value={type:`—`,title:`七类事件已订阅`,scope:`global / module / selector 三种路由 + signal 生命周期`,target:`—`,position:`—`,detail:`现在可以按卡片提示操作地图`},Y())},oe=()=>{G?.abort(),G=void 0,W=void 0,D.value={type:`rightclick`,title:`rightclick 已由 AbortSignal 中止`,scope:`global once + AbortSignal`,target:`—`,position:`—`,detail:`中止后单击右键不会增加计数；可点“重新订阅七类事件”恢复`},Y()},se=()=>{S.value?.events.clearModule(P),V=void 0,D.value={type:`pointermove`,title:`module 订阅已批量清理`,scope:`module: ${P}`,target:`橙色标记`,position:`—`,detail:`global、selector 与 AbortSignal 订阅保持有效`},Y()},ce=()=>{E.value=b(),D.value={type:`—`,title:`计数已清零`,scope:`—`,target:`—`,position:`—`,detail:`订阅状态没有改变`}},Q=()=>{let e=C.value;e!==null&&S.value?.view.animateFlyTo(e,{zoom:I,duration:450})};g({reset:()=>{E.value=b(),Z(),Q()},focusSelected:Q});let $=(e,t)=>({symbol:{type:`circle`,radius:17,fill:{type:`solid`,color:t},stroke:{color:`#ffffff`,width:4}},text:{text:e,fontSize:14,fontWeight:`bold`,offsetY:48,padding:[5,8,5,8],fill:{type:`solid`,color:`#1f2937`},stroke:{color:`#ffffff`,width:3},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.94)`},backgroundStroke:{color:t,width:2}},zIndex:30});return h(()=>{if(x.value===null)return;let e=w({id:ae,target:x.value,view:{zoom:I},controls:{zoom:!0,rotate:!1,attribution:!0}});T(e,`vector`).update({opacity:.52});let t=e.layers.add({kind:`vector`,id:`events-elements`,zIndex:10,declutter:!0}),n=e.view.toProjectedCoordinates([116.4074,39.9042]);C.value=n,e.elements.add({id:`events-module-marker`,module:P,layerId:t.id,geometry:{type:`point`,controlPoints:[[n[0]-42e3,n[1]]]},style:$(`橙色：module`,`#e6a23c`)}),e.elements.add({id:F,module:`selector-demo`,layerId:t.id,geometry:{type:`point`,controlPoints:[[n[0]+42e3,n[1]]]},style:$(`蓝色：selector`,`#409eff`)}),e.view.flyTo(n,I),S.value=e,Z()}),o(()=>{try{X(!1)}finally{try{S.value?.destroy()}finally{S.value=null}}}),(e,t)=>{let n=l(`el-alert`),i=l(`el-button`),o=l(`el-tag`),h=l(`el-card`),g=l(`el-col`),y=l(`el-row`),b=l(`el-descriptions-item`),S=l(`el-descriptions`);return d(),a(`div`,ee,[v(n,{type:`info`,closable:!1,"show-icon":``,title:`七张卡片对应七类公开事件；橙色标记演示 module，蓝色标记演示 selector，其余操作使用 global。`}),f(`div`,te,[f(`div`,ne,[f(`div`,re,[f(`div`,O,[t[4]||=f(`span`,null,`订阅控制`,-1),f(`div`,k,[v(i,{type:`primary`,onClick:Z},{default:_(()=>[...t[1]||=[s(`重新订阅七类事件`,-1)]]),_:1}),v(i,{disabled:!L.value.signal,onClick:oe},{default:_(()=>[...t[2]||=[s(`中止 rightclick signal`,-1)]]),_:1},8,[`disabled`]),v(i,{disabled:!L.value.module,onClick:se},{default:_(()=>[...t[3]||=[s(`clearModule`,-1)]]),_:1},8,[`disabled`])])]),f(`div`,A,[t[7]||=f(`span`,null,`计数与清理`,-1),f(`div`,j,[v(i,{onClick:ce},{default:_(()=>[...t[5]||=[s(`清零计数`,-1)]]),_:1}),v(i,{type:`danger`,plain:``,onClick:t[0]||=e=>X()},{default:_(()=>[...t[6]||=[s(`逐项调用注销函数`,-1)]]),_:1})])])]),f(`div`,M,[v(o,{type:L.value.global?`success`:`info`,effect:`plain`},{default:_(()=>[s(`global：`+u(L.value.global?`有效`:`已结束`),1)]),_:1},8,[`type`]),v(o,{type:L.value.module?`success`:`info`,effect:`plain`},{default:_(()=>[s(`module：`+u(L.value.module?`有效`:`已清理`),1)]),_:1},8,[`type`]),v(o,{type:L.value.selector?`success`:`info`,effect:`plain`},{default:_(()=>[s(`selector：`+u(L.value.selector?`有效`:`已结束`),1)]),_:1},8,[`type`]),v(o,{type:L.value.signal?`warning`:`info`,effect:`plain`},{default:_(()=>[s(`AbortSignal：`+u(L.value.signal?`等待 rightclick`:`已结束`),1)]),_:1},8,[`type`])])])]),f(`div`,{ref_key:`mapTarget`,ref:x,class:`example-stage events-demo__map`,tabindex:`0`,"aria-label":`事件交互地图`},null,512),v(y,{class:`events-demo__counters`,gutter:10},{default:_(()=>[(d(!0),a(c,null,m(K.value,e=>(d(),r(g,{key:e.type,xs:24,sm:8,lg:6},{default:_(()=>[v(h,{class:p([`events-demo__counter`,{"is-current":D.value.type===e.type}]),shadow:`never`},{default:_(()=>[f(`div`,N,[f(`code`,null,u(e.label),1),f(`strong`,null,u(e.count),1)]),v(o,{size:`small`,effect:`plain`},{default:_(()=>[s(u(e.scope),1)]),_:2},1024),f(`p`,null,u(e.hint),1)]),_:2},1032,[`class`])]),_:2},1024))),128))]),_:1}),v(h,{class:`events-demo__latest`,shadow:`never`},{header:_(()=>[f(`div`,ie,[t[8]||=f(`strong`,null,`当前事件`,-1),v(o,{type:D.value.type===`—`?`info`:`primary`,effect:`dark`},{default:_(()=>[s(u(D.value.title),1)]),_:1},8,[`type`])])]),default:_(()=>[v(S,{column:1,border:``},{default:_(()=>[v(b,{label:`路由范围`},{default:_(()=>[s(u(D.value.scope),1)]),_:1}),v(b,{label:`命中目标`},{default:_(()=>[s(u(D.value.target),1)]),_:1}),v(b,{label:`位置`},{default:_(()=>[s(u(D.value.position),1)]),_:1}),v(b,{label:`事件细节`},{default:_(()=>[s(u(D.value.detail),1)]),_:1})]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-aaee2b2a`]]),R=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, EarthEventType, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-services-events';
const MODULE = 'events-demo';
const SELECTOR_ID = 'events-selector-marker';
const MAP_ZOOM = 8.5;

interface LatestEvent {
  type: EarthEventType | '—';
  title: string;
  scope: string;
  target: string;
  position: string;
  detail: string;
}

const eventDefinitions = [
  { type: 'pointermove', label: 'pointermove', scope: 'module', hint: '在橙色标记上移动' },
  { type: 'click', label: 'click', scope: 'global', hint: '单击地图任意位置' },
  { type: 'leftdown', label: 'leftdown', scope: 'selector', hint: '在蓝色标记上按下主按钮' },
  { type: 'leftup', label: 'leftup', scope: 'selector', hint: '在蓝色标记上松开主按钮' },
  { type: 'doubleclick', label: 'doubleclick', scope: 'global', hint: '双击地图任意位置' },
  { type: 'rightclick', label: 'rightclick', scope: 'once + signal', hint: '右键一次，或提前中止' },
  { type: 'keydown', label: 'keydown', scope: 'global', hint: '先单击地图，再按键' }
] as const satisfies ReadonlyArray<{ type: EarthEventType; label: string; scope: string; hint: string }>;

const emptyCounts = (): Record<EarthEventType, number> => ({
  pointermove: 0,
  click: 0,
  leftdown: 0,
  leftup: 0,
  doubleclick: 0,
  rightclick: 0,
  keydown: 0
});

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const sceneCenter = shallowRef<Coordinate | null>(null);
const counts = ref(emptyCounts());
const latestEvent = ref<LatestEvent>({
  type: '—',
  title: '尚未触发',
  scope: '—',
  target: '—',
  position: '—',
  detail: '按照事件卡片中的提示操作地图'
});
const subscriptionState = ref({ global: false, module: false, selector: false, signal: false });

let offClick: (() => void) | undefined;
let offDoubleClick: (() => void) | undefined;
let offKeydown: (() => void) | undefined;
let offModuleMove: (() => void) | undefined;
let offSelectorDown: (() => void) | undefined;
let offSelectorUp: (() => void) | undefined;
let offRightOnce: (() => void) | undefined;
let rightClickAbort: AbortController | undefined;

const eventCards = computed(() => eventDefinitions.map((definition) => ({ ...definition, count: counts.value[definition.type] })));

const formatPair = (values: readonly number[]) => values.map((value) => value.toFixed(0)).join(', ');

const recordEvent = (type: EarthEventType, scope: string, target: string, position: string, detail: string) => {
  counts.value = { ...counts.value, [type]: counts.value[type] + 1 };
  latestEvent.value = { type, title: \`\${type} 第 \${counts.value[type]} 次\`, scope, target, position, detail };
};

const refreshState = () => {
  const events = earthRef.value?.events;
  subscriptionState.value = {
    global: (events?.has('click') ?? false) && (events?.has('doubleclick') ?? false) && (events?.has('keydown') ?? false),
    module: events?.has('pointermove', MODULE) ?? false,
    selector: offSelectorDown !== undefined && offSelectorUp !== undefined,
    signal: offRightOnce !== undefined && (events?.has('rightclick') ?? false)
  };
};

const disposeAll = (announce = true) => {
  const disposers = [offClick, offDoubleClick, offKeydown, offModuleMove, offSelectorDown, offSelectorUp, offRightOnce].filter(
    (dispose): dispose is () => void => dispose !== undefined
  );
  offClick = undefined;
  offDoubleClick = undefined;
  offKeydown = undefined;
  offModuleMove = undefined;
  offSelectorDown = undefined;
  offSelectorUp = undefined;
  offRightOnce = undefined;
  rightClickAbort?.abort();
  rightClickAbort = undefined;

  let cleanupError: unknown;
  for (const dispose of disposers) {
    try {
      dispose();
    } catch (error) {
      cleanupError ??= error;
    }
  }
  refreshState();
  if (announce) {
    latestEvent.value = { type: '—', title: '订阅已注销', scope: '全部', target: '—', position: '—', detail: '七类事件均不再计数' };
  }
  if (cleanupError !== undefined) throw cleanupError;
};

// #region event-subscriptions
const subscribe = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  disposeAll(false);

  offClick = earth.events.on('click', ({ coordinate, pixel, element }) => {
    recordEvent('click', 'global', element?.id ?? '地图空白', \`坐标 \${formatPair(coordinate)} / 像素 \${formatPair(pixel)}\`, '全局订阅接收所有单击');
  });
  offDoubleClick = earth.events.on('doubleclick', ({ coordinate, pixel, element }) => {
    recordEvent(
      'doubleclick',
      'global',
      element?.id ?? '地图空白',
      \`坐标 \${formatPair(coordinate)} / 像素 \${formatPair(pixel)}\`,
      '双击也可能伴随浏览器产生的单击事件'
    );
  });
  offKeydown = earth.events.on('keydown', ({ key, code, originalEvent }) => {
    recordEvent('keydown', 'global', '地图键盘入口', '无地图坐标', \`\${key}（\${code}）\${originalEvent.repeat ? '，持续按键' : ''}\`);
  });
  offModuleMove = earth.events.on(
    'pointermove',
    ({ phase, coordinate, pixel, element }) => {
      recordEvent(
        'pointermove',
        \`module: \${MODULE}\`,
        element?.id ?? '未命中',
        \`坐标 \${formatPair(coordinate)} / 像素 \${formatPair(pixel)}\`,
        \`当前阶段：\${phase ?? 'move'}\`
      );
    },
    { module: MODULE }
  );
  offSelectorDown = earth.events.on(
    'leftdown',
    ({ coordinate, pixel, element }) => {
      recordEvent(
        'leftdown',
        \`selector: { id: '\${SELECTOR_ID}' }\`,
        element?.id ?? '未命中',
        \`坐标 \${formatPair(coordinate)} / 像素 \${formatPair(pixel)}\`,
        '只在蓝色标记上按下时触发'
      );
    },
    { selector: { id: SELECTOR_ID } }
  );
  offSelectorUp = earth.events.on(
    'leftup',
    ({ coordinate, pixel, element }) => {
      recordEvent(
        'leftup',
        \`selector: { id: '\${SELECTOR_ID}' }\`,
        element?.id ?? '未命中',
        \`坐标 \${formatPair(coordinate)} / 像素 \${formatPair(pixel)}\`,
        '只在蓝色标记上松开时触发'
      );
    },
    { selector: { id: SELECTOR_ID } }
  );

  rightClickAbort = new AbortController();
  offRightOnce = earth.events.once(
    'rightclick',
    ({ coordinate, pixel, element }) => {
      recordEvent(
        'rightclick',
        'global once + AbortSignal',
        element?.id ?? '地图空白',
        \`坐标 \${formatPair(coordinate)} / 像素 \${formatPair(pixel)}\`,
        '首次触发后已自动注销'
      );
      offRightOnce = undefined;
      rightClickAbort = undefined;
      refreshState();
    },
    { signal: rightClickAbort.signal }
  );
  latestEvent.value = {
    type: '—',
    title: '七类事件已订阅',
    scope: 'global / module / selector 三种路由 + signal 生命周期',
    target: '—',
    position: '—',
    detail: '现在可以按卡片提示操作地图'
  };
  refreshState();
};
// #endregion event-subscriptions

const cancelSignal = () => {
  rightClickAbort?.abort();
  rightClickAbort = undefined;
  offRightOnce = undefined;
  latestEvent.value = {
    type: 'rightclick',
    title: 'rightclick 已由 AbortSignal 中止',
    scope: 'global once + AbortSignal',
    target: '—',
    position: '—',
    detail: '中止后单击右键不会增加计数；可点“重新订阅七类事件”恢复'
  };
  refreshState();
};

const clearModule = () => {
  earthRef.value?.events.clearModule(MODULE);
  offModuleMove = undefined;
  latestEvent.value = {
    type: 'pointermove',
    title: 'module 订阅已批量清理',
    scope: \`module: \${MODULE}\`,
    target: '橙色标记',
    position: '—',
    detail: 'global、selector 与 AbortSignal 订阅保持有效'
  };
  refreshState();
};

const resetCounts = () => {
  counts.value = emptyCounts();
  latestEvent.value = { type: '—', title: '计数已清零', scope: '—', target: '—', position: '—', detail: '订阅状态没有改变' };
};

const focusScenes = () => {
  const center = sceneCenter.value;
  if (center !== null) earthRef.value?.view.animateFlyTo(center, { zoom: MAP_ZOOM, duration: 450 });
};

const reset = () => {
  counts.value = emptyCounts();
  subscribe();
  focusScenes();
};

defineExpose({ reset, focusSelected: focusScenes });

const markerStyle = (label: string, color: string): StyleSpec => ({
  symbol: {
    type: 'circle',
    radius: 17,
    fill: { type: 'solid', color },
    stroke: { color: '#ffffff', width: 4 }
  },
  text: {
    text: label,
    fontSize: 14,
    fontWeight: 'bold',
    offsetY: 48,
    padding: [5, 8, 5, 8],
    fill: { type: 'solid', color: '#1f2937' },
    stroke: { color: '#ffffff', width: 3 },
    backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.94)' },
    backgroundStroke: { color, width: 2 }
  },
  zIndex: 30
});

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: MAP_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.52 });
  const layer = earth.layers.add({ kind: 'vector', id: 'events-elements', zIndex: 10, declutter: true });
  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  sceneCenter.value = center;
  earth.elements.add({
    id: 'events-module-marker',
    module: MODULE,
    layerId: layer.id,
    geometry: { type: 'point', controlPoints: [[center[0] - 42_000, center[1]]] },
    style: markerStyle('橙色：module', '#e6a23c')
  });
  earth.elements.add({
    id: SELECTOR_ID,
    module: 'selector-demo',
    layerId: layer.id,
    geometry: { type: 'point', controlPoints: [[center[0] + 42_000, center[1]]] },
    style: markerStyle('蓝色：selector', '#409eff')
  });
  earth.view.flyTo(center, MAP_ZOOM);
  earthRef.value = earth;
  subscribe();
});

onBeforeUnmount(() => {
  try {
    disposeAll(false);
  } finally {
    try {
      earthRef.value?.destroy();
    } finally {
      earthRef.value = null;
    }
  }
});
<\/script>

<template>
  <div class="example-demo events-demo">
    <el-alert type="info" :closable="false" show-icon title="七张卡片对应七类公开事件；橙色标记演示 module，蓝色标记演示 selector，其余操作使用 global。" />

    <div class="example-demo__control-panel events-demo__toolbar">
      <div class="example-demo__action-row events-demo__action-row">
        <div class="example-demo__actions events-demo__actions">
          <div class="example-demo__action-group events-demo__action-group" role="group" aria-label="订阅控制">
            <span>订阅控制</span>
            <div class="example-demo__action-buttons events-demo__action-buttons">
              <el-button type="primary" @click="subscribe">重新订阅七类事件</el-button>
              <el-button :disabled="!subscriptionState.signal" @click="cancelSignal">中止 rightclick signal</el-button>
              <el-button :disabled="!subscriptionState.module" @click="clearModule">clearModule</el-button>
            </div>
          </div>
          <div class="example-demo__action-group events-demo__action-group" role="group" aria-label="计数与清理">
            <span>计数与清理</span>
            <div class="example-demo__action-buttons events-demo__action-buttons">
              <el-button @click="resetCounts">清零计数</el-button>
              <el-button type="danger" plain @click="disposeAll()">逐项调用注销函数</el-button>
            </div>
          </div>
        </div>
        <div class="example-demo__feedback events-demo__states" aria-live="polite">
          <el-tag :type="subscriptionState.global ? 'success' : 'info'" effect="plain">global：{{ subscriptionState.global ? '有效' : '已结束' }}</el-tag>
          <el-tag :type="subscriptionState.module ? 'success' : 'info'" effect="plain">module：{{ subscriptionState.module ? '有效' : '已清理' }}</el-tag>
          <el-tag :type="subscriptionState.selector ? 'success' : 'info'" effect="plain">selector：{{ subscriptionState.selector ? '有效' : '已结束' }}</el-tag>
          <el-tag :type="subscriptionState.signal ? 'warning' : 'info'" effect="plain"
            >AbortSignal：{{ subscriptionState.signal ? '等待 rightclick' : '已结束' }}</el-tag
          >
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage events-demo__map" tabindex="0" aria-label="事件交互地图"></div>

    <el-row class="events-demo__counters" :gutter="10">
      <el-col v-for="card in eventCards" :key="card.type" :xs="24" :sm="8" :lg="6">
        <el-card class="events-demo__counter" shadow="never" :class="{ 'is-current': latestEvent.type === card.type }">
          <div class="events-demo__counter-head">
            <code>{{ card.label }}</code>
            <strong>{{ card.count }}</strong>
          </div>
          <el-tag size="small" effect="plain">{{ card.scope }}</el-tag>
          <p>{{ card.hint }}</p>
        </el-card>
      </el-col>
    </el-row>

    <el-card class="events-demo__latest" shadow="never">
      <template #header>
        <div class="events-demo__latest-title">
          <strong>当前事件</strong>
          <el-tag :type="latestEvent.type === '—' ? 'info' : 'primary'" effect="dark">{{ latestEvent.title }}</el-tag>
        </div>
      </template>
      <el-descriptions :column="1" border>
        <el-descriptions-item label="路由范围">{{ latestEvent.scope }}</el-descriptions-item>
        <el-descriptions-item label="命中目标">{{ latestEvent.target }}</el-descriptions-item>
        <el-descriptions-item label="位置">{{ latestEvent.position }}</el-descriptions-item>
        <el-descriptions-item label="事件细节">{{ latestEvent.detail }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<style scoped>
.events-demo__action-group {
  max-width: 100%;
}

.events-demo__states {
  align-content: center;
}

.events-demo__map:focus-visible {
  outline: 3px solid var(--doc-primary);
  outline-offset: 2px;
}

.events-demo__counters {
  margin-top: 14px;
}

.events-demo__counter {
  height: calc(100% - 10px);
  margin-bottom: 10px;
  border-color: var(--doc-border);
}

.events-demo__counter.is-current {
  border-color: var(--doc-primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--doc-primary) 20%, transparent);
}

.events-demo__counter-head,
.events-demo__latest-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.events-demo__counter-head code {
  min-width: 0;
  overflow-wrap: anywhere;
}

.events-demo__latest-title {
  flex-wrap: wrap;
}

.events-demo__latest-title :deep(.el-tag) {
  max-width: 100%;
  height: auto;
  white-space: normal;
}

.events-demo__counter-head strong {
  color: var(--doc-primary-deep);
  font-size: 24px;
}

.events-demo__counter p {
  margin: 8px 0 0;
  color: var(--doc-muted);
  font-size: 12px;
  line-height: 1.55;
}

.events-demo__latest {
  margin-top: 4px;
  border-color: var(--doc-border);
}

.events-demo__latest :deep(.el-descriptions__content) {
  overflow-wrap: anywhere;
}

@media (max-width: 560px) {
  .events-demo__toolbar,
  .events-demo__action-buttons {
    display: grid;
    grid-template-columns: 1fr;
  }

  .events-demo__action-group,
  .events-demo__action-buttons :deep(.el-button) {
    width: 100%;
  }

  .events-demo__action-buttons :deep(.el-button) {
    height: auto;
    min-height: 32px;
    white-space: normal;
  }
}
</style>
`,z={class:`doc-page-layout`},B={class:`doc-page`},V={id:`overview`,class:`doc-prose`},H={id:`event-types`,class:`doc-prose`},U={id:`example-event-lifecycle`,class:`doc-prose`},W={id:`filters-and-lifecycle`,class:`doc-prose`},G={id:`method-reference`,class:`doc-prose`},K={class:`doc-page-layout__aside`},q=n({__name:`EventsView`,setup(e){let n=E(R,`event-subscriptions`),r=t(null),i=()=>r.value?.reset(),o=()=>r.value?.focusSelected(),c=[{id:`overview`,label:`重要提示`},{id:`event-types`,label:`事件与载荷`},{id:`example-event-lifecycle`,label:`七类事件、三种路由与 signal`},{id:`filters-and-lifecycle`,label:`过滤与生命周期`},{id:`method-reference`,label:`服务方法`},{id:`api`,label:`完整 API`}],u=[{prop:`name`,label:`事件`,width:150},{prop:`payload`,label:`载荷`,width:260,linkTypes:!0},{prop:`desc`,label:`触发语义`,width:420}],p=[{name:`pointermove`,payload:`EarthPointerEvent<'pointermove'>`,desc:`指针移动；命中 Element 时额外给出 enter、move、leave 阶段`},{name:`click`,payload:`EarthPointerEvent<'click'>`,desc:`地图单击`},{name:`leftdown`,payload:`EarthPointerEvent<'leftdown'>`,desc:`主按钮按下`},{name:`leftup`,payload:`EarthPointerEvent<'leftup'>`,desc:`主按钮抬起`},{name:`doubleclick`,payload:`EarthPointerEvent<'doubleclick'>`,desc:`地图双击`},{name:`rightclick`,payload:`EarthPointerEvent<'rightclick'>`,desc:`地图右键；与 ContextMenu 共享 InputRouter 仲裁`},{name:`keydown`,payload:`EarthKeyboardEvent`,desc:`键盘按下；不接受 selector 或 module 过滤`}],m=[{prop:`name`,label:`方法`,width:160,presentation:`method`},{prop:`params`,label:`参数`,width:440,linkTypes:!0},{prop:`returns`,label:`返回值`,width:190,linkTypes:!0},{prop:`desc`,label:`说明`,width:380}],h=[{anchor:`api-method-on`,href:`/api/types#api-type-event-service-method-on`,name:`on`,params:`type: T, listener: (event: EarthEventMap[T]) => void, options?: EventSubscriptionOptions`,returns:`() => void`,desc:`持续订阅；返回的幂等函数只注销本次订阅`},{anchor:`api-method-once`,href:`/api/types#api-type-event-service-method-once`,name:`once`,params:`type: T, listener: (event: EarthEventMap[T]) => void, options?: EventSubscriptionOptions`,returns:`() => void`,desc:`首次触发后自动注销；返回函数可在触发前提前取消`},{anchor:`api-method-has`,href:`/api/types#api-type-event-service-method-has`,name:`has`,params:`type: EarthEventType, module?: string`,returns:`boolean`,desc:`传 module 时检查该模块；省略时只检查全局订阅，不包含 selector 或 module 订阅`},{anchor:`api-method-clear-module`,href:`/api/types#api-type-event-service-method-clear-module`,name:`clearModule`,params:`module: string, type?: EarthEventType`,returns:`void`,desc:`批量注销一个 module 的指定事件或全部事件，不影响全局与 selector 订阅`}],g=[`EventService`,`EarthEventType`,`EarthEventMap`,`EarthPointerEvent`,`EarthKeyboardEvent`,`EventSubscriptionOptions`];return(e,t)=>{let w=l(`el-alert`),T=l(`el-descriptions-item`),E=l(`el-descriptions`);return d(),a(`div`,z,[f(`article`,B,[t[21]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图服务`),f(`h1`,null,`事件（Events）`),f(`p`,null,`earth.events 统一订阅地图指针与键盘事件，按全局、ElementSelector 或 module 路由载荷，并用返回的注销函数管理每次订阅。`)],-1),f(`section`,V,[t[5]||=f(`h2`,{class:`doc-h2`},`重要提示`,-1),v(w,{type:`success`,closable:!1,"show-icon":``,title:`on() 与 once() 自动管理底层监听`},{default:_(()=>[t[2]||=s(` 不需要、也不存在手工 enable/disable 前置步骤。保存 `,-1),v(C,{kind:`method`,to:`#api-method-on`},{default:_(()=>[...t[0]||=[s(`on`,-1)]]),_:1}),t[3]||=s(` 或 `,-1),v(C,{kind:`method`,to:`#api-method-once`},{default:_(()=>[...t[1]||=[s(`once`,-1)]]),_:1}),t[4]||=s(` 的返回函数，并在组件卸载时调用；最后一个订阅移除后，引擎会解除对应底层监听。 `,-1)]),_:1}),t[6]||=f(`p`,null,[s(` 用户回调异常会被隔离，不会阻断其他监听。指针载荷优先返回公共 `),f(`code`,null,`Element`),s(`、module 和 Layer；`),f(`code`,null,`olFeature`),s(` 与 `),f(`code`,null,`originalEvent`),s(` 是高级逃生信息，其中原始浏览器事件只应在当前同步回调内读取。 `)],-1)]),f(`section`,H,[t[7]||=f(`h2`,{class:`doc-h2`},`事件与载荷`,-1),v(S,{columns:u,rows:p})]),f(`section`,U,[v(b,{title:`七类事件、三种路由与 AbortSignal 生命周期`,source:y(R),snippet:y(n),"source-lang":`vue`,"snippet-lang":`typescript`,"show-reset":``,"show-focus":``,onReset:i,onFocus:o},{description:_(()=>[f(`p`,null,[t[10]||=s(` 示例为全部七类事件显示独立计数与当前载荷卡片，并同时覆盖 global、module、selector 三种路由，以及 AbortSignal 订阅生命周期。它运行 `,-1),v(C,{kind:`method`,to:`#api-method-has`},{default:_(()=>[...t[8]||=[s(`has`,-1)]]),_:1}),t[11]||=s(` 展示订阅状态，并对 module 订阅调用 `,-1),v(C,{kind:`method`,to:`#api-method-clear-module`},{default:_(()=>[...t[9]||=[s(`clearModule`,-1)]]),_:1}),t[12]||=s(`；批量清理不会影响其他两种路由，也不会替代 signal 或单次 disposer。 `,-1)])]),preview:_(()=>[v(L,{ref_key:`eventsDemoRef`,ref:r},null,512)]),_:1},8,[`source`,`snippet`])]),f(`section`,W,[t[19]||=f(`h2`,{class:`doc-h2`},`过滤与生命周期`,-1),v(E,{column:1,border:``},{default:_(()=>[v(T,{label:`全局订阅`},{default:_(()=>[...t[13]||=[s(`省略 options，接收对应类型的全部地图事件；has(type) 只检查这一类。`,-1)]]),_:1}),v(T,{label:`selector 订阅`},{default:_(()=>[...t[14]||=[s(`只接收命中 ElementSelector 的指针事件；不能与 module 同时设置。`,-1)]]),_:1}),v(T,{label:`module 订阅`},{default:_(()=>[...t[15]||=[s(`只接收命中指定业务模块 Element 的指针事件；可由 clearModule 批量清理。`,-1)]]),_:1}),v(T,{label:`AbortSignal`},{default:_(()=>[...t[16]||=[s(`signal 中止后自动注销本次 on/once，返回的 disposer 仍可安全重复调用。`,-1)]]),_:1}),v(T,{label:`Earth 销毁`},{default:_(()=>[...t[17]||=[s(`earth.destroy() 会注销全部订阅并解除底层视口、键盘监听。`,-1)]]),_:1})]),_:1}),v(w,{class:`doc-prose__alert`,type:`warning`,closable:!1,"show-icon":``,title:`clearModule 不是单次 disposer 的替代品`},{default:_(()=>[...t[18]||=[s(` disposer 精确取消一次注册；clearModule 是业务模块卸载时的批量兜底。selector 订阅没有 module 身份，不会被 clearModule 匹配。 `,-1)]]),_:1})]),f(`section`,G,[t[20]||=f(`h2`,{class:`doc-h2`},`服务方法`,-1),v(S,{columns:m,rows:h})]),v(D,{"type-names":g,title:`Events 完整 API`,description:`这里直接列出事件名称、载荷映射、订阅选项和 EventService 的全部属性、方法、参数与返回类型。`})]),f(`aside`,K,[v(x,{title:`事件（Events）`,items:c})])])}}});export{q as default};