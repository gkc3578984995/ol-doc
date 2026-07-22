import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,ht as d,it as f,j as p,ot as m,tt as h,x as g,xt as _,z as v,zt as y}from"./TypeExpression-D6csDz4V.js";import{B as b,H as x,U as S,V as C,W as w,a as T,n as E,s as D,t as O,z as k}from"./index-4uKXPGRf.js";var A={class:`example-demo`},j={class:`example-demo__control-panel`},M={class:`example-demo__action-row`},N={class:`example-demo__action-group`},P={class:`example-demo__action-buttons`},F={class:`example-demo__feedback`,"aria-live":`polite`},I=g(n({__name:`EarthConstructorDemo`,setup(n){let r=t(null),c=i(null),d=t(`not-created`),m=t(0),g=e(()=>c.value?.lifecycle??d.value),y=()=>{if(r.value===null||c.value!==null)return;let e=new D({target:r.value,view:{zoom:10},controls:{zoom:!0,rotate:!1,attribution:!0}});E(e,`vector`);let t=e.layers.add({kind:`vector`,id:`self-managed-elements`,zIndex:20}),n=e.view.toProjectedCoordinates([116.4074,39.9042]);e.elements.add({id:`self-managed-marker`,layerId:t.id,geometry:{type:`point`,controlPoints:[n]},style:{symbol:{type:`circle`,radius:15,fill:{type:`solid`,color:`#409eff`},stroke:{color:`#ffffff`,width:4}},text:{text:`new Earth`,offsetY:-30,fill:{type:`solid`,color:`#17233d`},backgroundFill:{type:`solid`,color:`rgba(255,255,255,0.92)`},backgroundStroke:{color:`#409eff`,width:1},padding:[5,8,5,8]}}}),e.view.flyTo(n,10),c.value=e,d.value=e.lifecycle,m.value+=1},b=()=>{let e=c.value;e!==null&&(e.destroy(),d.value=e.lifecycle,c.value=null)};return h(y),o(b),(e,t)=>{let n=l(`el-button`),i=l(`el-tag`),o=l(`el-alert`);return f(),a(`div`,A,[p(`div`,j,[p(`div`,M,[p(`div`,N,[p(`div`,P,[v(n,{type:`primary`,disabled:c.value!==null,onClick:y},{default:_(()=>[...t[0]||=[s(`创建自管实例`,-1)]]),_:1},8,[`disabled`]),v(n,{type:`danger`,plain:``,disabled:c.value===null,onClick:b},{default:_(()=>[...t[1]||=[s(`销毁实例`,-1)]]),_:1},8,[`disabled`])])]),p(`div`,F,[v(i,{type:g.value===`ready`?`success`:g.value===`destroyed`?`warning`:`info`},{default:_(()=>[s(u(g.value),1)]),_:1},8,[`type`]),v(i,{effect:`plain`},{default:_(()=>[s(`已创建 `+u(m.value)+` 次`,1)]),_:1})])])]),p(`div`,{ref_key:`mapTarget`,ref:r,class:`example-stage`},null,512),v(o,{class:`example-demo__alert earth-constructor-demo__alert`,type:`info`,closable:!1,"show-icon":``},{title:_(()=>[...t[2]||=[s(`构造器实例完全由调用方管理`,-1)]]),default:_(()=>[t[3]||=s(` 它不会进入 useEarth 注册表；组件卸载或业务结束时必须调用 destroy()。 `,-1)]),_:1})])}}}),[[`__scopeId`,`data-v-a508bf38`]]),L=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { Earth } from '@vrsim/earth-engine-ol';
import type { EarthLifecycleState } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const lastLifecycle = ref<EarthLifecycleState | 'not-created'>('not-created');
const creationCount = ref(0);

const lifecycle = computed(() => earthRef.value?.lifecycle ?? lastLifecycle.value);

// #region earth-constructor
const createEarth = () => {
  if (mapTarget.value === null || earthRef.value !== null) return;

  const earth = new Earth({
    target: mapTarget.value,
    view: { zoom: 10 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');

  const elementLayer = earth.layers.add({ kind: 'vector', id: 'self-managed-elements', zIndex: 20 });
  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earth.elements.add({
    id: 'self-managed-marker',
    layerId: elementLayer.id,
    geometry: { type: 'point', controlPoints: [center] },
    style: {
      symbol: {
        type: 'circle',
        radius: 15,
        fill: { type: 'solid', color: '#409eff' },
        stroke: { color: '#ffffff', width: 4 }
      },
      text: {
        text: 'new Earth',
        offsetY: -30,
        fill: { type: 'solid', color: '#17233d' },
        backgroundFill: { type: 'solid', color: 'rgba(255,255,255,0.92)' },
        backgroundStroke: { color: '#409eff', width: 1 },
        padding: [5, 8, 5, 8]
      }
    }
  });
  earth.view.flyTo(center, 10);

  earthRef.value = earth;
  lastLifecycle.value = earth.lifecycle;
  creationCount.value += 1;
};

const destroyEarth = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  earth.destroy();
  lastLifecycle.value = earth.lifecycle;
  earthRef.value = null;
};
// #endregion earth-constructor

onMounted(createEarth);
onBeforeUnmount(destroyEarth);
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel">
      <div class="example-demo__action-row">
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons">
            <el-button type="primary" :disabled="earthRef !== null" @click="createEarth">创建自管实例</el-button>
            <el-button type="danger" plain :disabled="earthRef === null" @click="destroyEarth">销毁实例</el-button>
          </div>
        </div>
        <div class="example-demo__feedback" aria-live="polite">
          <el-tag :type="lifecycle === 'ready' ? 'success' : lifecycle === 'destroyed' ? 'warning' : 'info'">
            {{ lifecycle }}
          </el-tag>
          <el-tag effect="plain">已创建 {{ creationCount }} 次</el-tag>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-alert class="example-demo__alert earth-constructor-demo__alert" type="info" :closable="false" show-icon>
      <template #title>构造器实例完全由调用方管理</template>
      它不会进入 useEarth 注册表；组件卸载或业务结束时必须调用 destroy()。
    </el-alert>
  </div>
</template>

<style scoped>
.earth-constructor-demo__alert {
  margin-top: 16px;
}
</style>
`,R={class:`example-demo`},z={class:`example-demo__control-panel`},B={class:`example-demo__action-row`},V={class:`example-demo__action-group`},H={class:`example-demo__action-buttons`},U={class:`example-demo__feedback`,"aria-live":`polite`},W={key:1},G=`docs-core-earth-instance`,ee=g(n({__name:`EarthInstanceDemo`,setup(n){let c=t(null),d=i(null),m=t(`not-created`),g=t(null),y=t(0),b=t(2),x=null,S=e(()=>d.value?.lifecycle??m.value),C=e(()=>S.value===`ready`?`success`:S.value===`destroyed`?`warning`:`info`),w=()=>{b.value=x?.matches===!0?1:2},D=()=>{x=window.matchMedia(`(max-width: 640px)`),w(),x.addEventListener(`change`,w)},O=()=>{x?.removeEventListener(`change`,w),x=null},k=()=>{if(c.value===null||d.value!==null)return;let e=T({id:G,target:c.value,view:{zoom:5},controls:{zoom:!0,rotate:!1,attribution:!0}});E(e,`vector`),e.view.flyTo(e.view.toProjectedCoordinates([116.4074,39.9042]),5),d.value=e,m.value=e.lifecycle,g.value=T(G)===e,y.value+=1},A=()=>{let e=d.value;e!==null&&(g.value=T(G)===e)},j=()=>{let e=d.value;e!==null&&(e.destroy(),m.value=e.lifecycle,d.value=null,g.value=null)};return h(()=>{D(),k()}),o(()=>{O(),j()}),(e,t)=>{let n=l(`el-button`),i=l(`el-tag`),o=l(`el-descriptions-item`),m=l(`el-descriptions`);return f(),a(`div`,R,[p(`div`,z,[p(`div`,B,[p(`div`,V,[p(`div`,H,[v(n,{type:`primary`,disabled:d.value!==null,onClick:k},{default:_(()=>[...t[0]||=[s(`创建 / 重建实例`,-1)]]),_:1},8,[`disabled`]),v(n,{disabled:d.value===null,onClick:A},{default:_(()=>[...t[1]||=[s(`验证 useEarth 复用`,-1)]]),_:1},8,[`disabled`]),v(n,{type:`danger`,plain:``,disabled:d.value===null,onClick:j},{default:_(()=>[...t[2]||=[s(`销毁实例`,-1)]]),_:1},8,[`disabled`])])]),p(`div`,U,[v(i,{type:C.value},{default:_(()=>[s(u(S.value),1)]),_:1},8,[`type`])])])]),p(`div`,{ref_key:`mapTarget`,ref:c,class:`example-stage`},null,512),v(m,{class:`earth-instance-demo__details`,column:b.value,border:``},{default:_(()=>[v(o,{label:`实例 ID`},{default:_(()=>[v(i,{effect:`plain`},{default:_(()=>[s(u(G))]),_:1})]),_:1}),v(o,{label:`创建次数`},{default:_(()=>[s(u(y.value),1)]),_:1}),v(o,{label:`生命周期`},{default:_(()=>[s(u(S.value),1)]),_:1}),v(o,{label:`同 ID 复用`},{default:_(()=>[g.value===null?(f(),a(`span`,W,`销毁后等待重建`)):(f(),r(i,{key:0,type:g.value?`success`:`danger`},{default:_(()=>[s(u(g.value?`返回同一实例`:`实例不一致`),1)]),_:1},8,[`type`]))]),_:1})]),_:1},8,[`column`])])}}}),[[`__scopeId`,`data-v-f6ed1c27`]]),K=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';

const EARTH_ID = 'docs-core-earth-instance';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const lastLifecycle = ref<Earth['lifecycle'] | 'not-created'>('not-created');
const reuseMatches = ref<boolean | null>(null);
const creationCount = ref(0);
const detailsColumn = ref<1 | 2>(2);
let detailsMediaQuery: MediaQueryList | null = null;

const lifecycle = computed(() => earthRef.value?.lifecycle ?? lastLifecycle.value);
const lifecycleTagType = computed(() => {
  if (lifecycle.value === 'ready') return 'success';
  if (lifecycle.value === 'destroyed') return 'warning';
  return 'info';
});

const syncDetailsColumn = () => {
  detailsColumn.value = detailsMediaQuery?.matches === true ? 1 : 2;
};

const observeDetailsLayout = () => {
  detailsMediaQuery = window.matchMedia('(max-width: 640px)');
  syncDetailsColumn();
  detailsMediaQuery.addEventListener('change', syncDetailsColumn);
};

const stopObservingDetailsLayout = () => {
  detailsMediaQuery?.removeEventListener('change', syncDetailsColumn);
  detailsMediaQuery = null;
};

// #region earth-registry-lifecycle
const createEarth = () => {
  if (mapTarget.value === null || earthRef.value !== null) return;

  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 5 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earth.view.flyTo(earth.view.toProjectedCoordinates([116.4074, 39.9042]), 5);

  earthRef.value = earth;
  lastLifecycle.value = earth.lifecycle;
  reuseMatches.value = useEarth(EARTH_ID) === earth;
  creationCount.value += 1;
};

const verifyReuse = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  reuseMatches.value = useEarth(EARTH_ID) === earth;
};

const destroyEarth = () => {
  const earth = earthRef.value;
  if (earth === null) return;

  earth.destroy();
  lastLifecycle.value = earth.lifecycle;
  earthRef.value = null;
  reuseMatches.value = null;
};
// #endregion earth-registry-lifecycle

onMounted(() => {
  observeDetailsLayout();
  createEarth();
});

onBeforeUnmount(() => {
  stopObservingDetailsLayout();
  destroyEarth();
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel">
      <div class="example-demo__action-row">
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons">
            <el-button type="primary" :disabled="earthRef !== null" @click="createEarth">创建 / 重建实例</el-button>
            <el-button :disabled="earthRef === null" @click="verifyReuse">验证 useEarth 复用</el-button>
            <el-button type="danger" plain :disabled="earthRef === null" @click="destroyEarth">销毁实例</el-button>
          </div>
        </div>
        <div class="example-demo__feedback" aria-live="polite">
          <el-tag :type="lifecycleTagType">{{ lifecycle }}</el-tag>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-descriptions class="earth-instance-demo__details" :column="detailsColumn" border>
      <el-descriptions-item label="实例 ID">
        <el-tag effect="plain">{{ EARTH_ID }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="创建次数">{{ creationCount }}</el-descriptions-item>
      <el-descriptions-item label="生命周期">{{ lifecycle }}</el-descriptions-item>
      <el-descriptions-item label="同 ID 复用">
        <el-tag v-if="reuseMatches !== null" :type="reuseMatches ? 'success' : 'danger'">
          {{ reuseMatches ? '返回同一实例' : '实例不一致' }}
        </el-tag>
        <span v-else>销毁后等待重建</span>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.earth-instance-demo__details {
  margin-top: 16px;
}

.earth-instance-demo__details :deep(.el-descriptions__content) {
  min-width: 0;
  overflow-wrap: anywhere;
}
</style>
`,te={class:`example-demo multi-earth-demo`},q={class:`example-demo__control-panel`},J={class:`example-demo__action-row`},Y={class:`example-demo__action-group`},X={class:`example-demo__action-buttons`},Z={class:`example-demo__feedback`,"aria-live":`polite`},ne={class:`multi-earth-demo__grid`},re={class:`multi-earth-demo__panel`},ie={class:`multi-earth-demo__heading`},ae={class:`multi-earth-demo__heading-meta`},oe={class:`multi-earth-demo__heading-actions`},se={class:`multi-earth-demo__panel`},ce={class:`multi-earth-demo__heading`},le={class:`multi-earth-demo__heading-meta`},ue={class:`multi-earth-demo__heading-actions`},de=g(n({__name:`MultiEarthDemo`,setup(n,{expose:r}){let c=d().replace(/[^a-zA-Z0-9_-]/gu,``),m=[{key:`left`,id:`docs-multi-earth-${c}-left`,label:`规划地图`,city:`北京`,geographicCenter:[116.4074,39.9042],color:`#409eff`},{key:`right`,id:`docs-multi-earth-${c}-right`,label:`监控地图`,city:`上海`,geographicCenter:[121.4737,31.2304],color:`#f56c6c`}],g=t(null),y=t(null),b=i(null),x=i(null),S=i(null),C=i(null),w=t(`等待创建命名实例`),D=e=>e===`left`?b.value:x.value,O=(e,t,n)=>{e===`left`?(b.value=t,S.value=n):(x.value=t,C.value=n)},k=e=>e===`left`?g.value:y.value,A=e(()=>({left:b.value?.lifecycle??`destroyed`,right:x.value?.lifecycle??`destroyed`})),j=(e,t,n)=>{E(e,t.key===`left`?`vector`:`satellite`);let r=e.layers.add({kind:`vector`,id:`${t.id}-elements`,zIndex:20});e.elements.add({id:`${t.id}-marker`,module:`${t.key}-map`,layerId:r.id,geometry:t.key===`left`?{type:`point`,controlPoints:[n]}:{type:`circle`,center:n,radius:32e3},style:t.key===`left`?{symbol:{type:`circle`,radius:13,fill:{type:`solid`,color:t.color},stroke:{color:`#ffffff`,width:4}},text:{text:`${t.label} · ${t.city}`,fontSize:14,fontWeight:`bold`,offsetY:34,fill:{type:`solid`,color:`#1f2937`},stroke:{color:`#ffffff`,width:3}}}:{fill:{type:`pattern`,pattern:`diagonal`,color:t.color,backgroundColor:`rgba(255,255,255,0.32)`,size:16,lineWidth:3},strokes:[{color:t.color,width:4}],text:{text:`${t.label} · ${t.city}`,fontSize:14,fontWeight:`bold`,fill:{type:`solid`,color:`#7f1d1d`},stroke:{color:`#ffffff`,width:3}}}}),e.view.flyTo(n,t.key===`left`?8:7.5)},M=e=>{if(D(e.key)!==null)return;let t=k(e.key);if(t===null)return;let n=T({id:e.id,target:t,view:{zoom:7},controls:{zoom:!0,rotate:!1,attribution:!0}}),r=n.view.toProjectedCoordinates(e.geographicCenter);j(n,e,r),O(e.key,n,r)},N=()=>{for(let e of m)M(e);F()},P=e=>{D(e.key)?.destroy(),O(e.key,null,null),w.value=`${e.label}已销毁；另一张地图保持当前生命周期`},F=()=>{let e=b.value,t=x.value;if(e===null||t===null){w.value=`请先创建两张地图后再验证`;return}let n=T(m[0].id)===e&&T(m[1].id)===t,r=e.elements!==t.elements&&e.view!==t.view&&e.contextMenu!==t.contextMenu;w.value=n&&r?`两个命名键各自复用正确实例，服务与资源完全隔离`:`隔离验证失败`},I=e=>{let t=D(e.key),n=e.key===`left`?S.value:C.value;t===null||n===null||t.view.animateFlyTo(n,{zoom:e.key===`left`?8:7.5,duration:450})},L=()=>{for(let e of m)I(e)};return r({reset:()=>{for(let e of m)P(e);N(),L()},focus:L}),h(N),o(()=>{for(let e of m)P(e)}),(e,t)=>{let n=l(`el-alert`),r=l(`el-button`),i=l(`el-tag`),o=l(`el-result`);return f(),a(`div`,te,[v(n,{class:`example-demo__alert`,type:`info`,closable:!1,"show-icon":``,title:`两张地图使用不同命名键、底图、View、Layer、Element 与服务实例；销毁其中一张不会影响另一张。`}),p(`div`,q,[p(`div`,J,[p(`div`,Y,[p(`div`,X,[v(r,{type:`primary`,onClick:N},{default:_(()=>[...t[4]||=[s(`创建 / 重建缺失地图`,-1)]]),_:1}),v(r,{onClick:F},{default:_(()=>[...t[5]||=[s(`验证命名实例隔离`,-1)]]),_:1}),v(r,{onClick:L},{default:_(()=>[...t[6]||=[s(`同时定位`,-1)]]),_:1})])]),p(`div`,Z,[v(i,{type:b.value&&x.value?`success`:`warning`},{default:_(()=>[s(u(b.value&&x.value?`两张地图均 ready`:`存在已销毁地图`),1)]),_:1},8,[`type`])])])]),p(`div`,ne,[p(`section`,re,[p(`div`,ie,[p(`div`,ae,[p(`strong`,null,u(m[0].label),1),p(`span`,null,[p(`code`,null,u(m[0].id),1),s(` · `+u(A.value.left),1)])]),p(`div`,oe,[v(r,{size:`small`,disabled:b.value===null,onClick:t[0]||=e=>I(m[0])},{default:_(()=>[...t[7]||=[s(`定位北京`,-1)]]),_:1},8,[`disabled`]),v(r,{size:`small`,type:`danger`,plain:``,disabled:b.value===null,onClick:t[1]||=e=>P(m[0])},{default:_(()=>[...t[8]||=[s(`只销毁左图`,-1)]]),_:1},8,[`disabled`])])]),p(`div`,{ref_key:`leftTarget`,ref:g,class:`example-stage multi-earth-demo__stage`},null,512)]),p(`section`,se,[p(`div`,ce,[p(`div`,le,[p(`strong`,null,u(m[1].label),1),p(`span`,null,[p(`code`,null,u(m[1].id),1),s(` · `+u(A.value.right),1)])]),p(`div`,ue,[v(r,{size:`small`,disabled:x.value===null,onClick:t[2]||=e=>I(m[1])},{default:_(()=>[...t[9]||=[s(`定位上海`,-1)]]),_:1},8,[`disabled`]),v(r,{size:`small`,type:`danger`,plain:``,disabled:x.value===null,onClick:t[3]||=e=>P(m[1])},{default:_(()=>[...t[10]||=[s(`只销毁右图`,-1)]]),_:1},8,[`disabled`])])]),p(`div`,{ref_key:`rightTarget`,ref:y,class:`example-stage multi-earth-demo__stage`},null,512)])]),v(o,{class:`multi-earth-demo__result`,icon:`success`,title:`隔离验证`,"sub-title":w.value},null,8,[`sub-title`])])}}}),[[`__scopeId`,`data-v-d5c69ca2`]]),Q=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, useId } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';

interface MapSlot {
  readonly key: 'left' | 'right';
  readonly id: string;
  readonly label: string;
  readonly city: string;
  readonly geographicCenter: readonly [number, number];
  readonly color: string;
}

const instanceSuffix = useId().replace(/[^a-zA-Z0-9_-]/gu, '');
const slots = [
  {
    key: 'left',
    id: \`docs-multi-earth-\${instanceSuffix}-left\`,
    label: '规划地图',
    city: '北京',
    geographicCenter: [116.4074, 39.9042],
    color: '#409eff'
  },
  {
    key: 'right',
    id: \`docs-multi-earth-\${instanceSuffix}-right\`,
    label: '监控地图',
    city: '上海',
    geographicCenter: [121.4737, 31.2304],
    color: '#f56c6c'
  }
] as const satisfies readonly MapSlot[];

const leftTarget = ref<HTMLDivElement | null>(null);
const rightTarget = ref<HTMLDivElement | null>(null);
const leftEarth = shallowRef<Earth | null>(null);
const rightEarth = shallowRef<Earth | null>(null);
const leftCenter = shallowRef<Coordinate | null>(null);
const rightCenter = shallowRef<Coordinate | null>(null);
const verification = ref('等待创建命名实例');

const earthByKey = (key: MapSlot['key']) => (key === 'left' ? leftEarth.value : rightEarth.value);
const setEarth = (key: MapSlot['key'], earth: Earth | null, center: Coordinate | null) => {
  if (key === 'left') {
    leftEarth.value = earth;
    leftCenter.value = center;
  } else {
    rightEarth.value = earth;
    rightCenter.value = center;
  }
};

const targetByKey = (key: MapSlot['key']) => (key === 'left' ? leftTarget.value : rightTarget.value);

const stateLabel = computed(() => ({
  left: leftEarth.value?.lifecycle ?? 'destroyed',
  right: rightEarth.value?.lifecycle ?? 'destroyed'
}));

const addSlotContent = (earth: Earth, slot: MapSlot, center: Coordinate) => {
  createConfiguredLayer(earth, slot.key === 'left' ? 'vector' : 'satellite');
  const layer = earth.layers.add({ kind: 'vector', id: \`\${slot.id}-elements\`, zIndex: 20 });
  earth.elements.add({
    id: \`\${slot.id}-marker\`,
    module: \`\${slot.key}-map\`,
    layerId: layer.id,
    geometry: slot.key === 'left' ? { type: 'point', controlPoints: [center] } : { type: 'circle', center, radius: 32_000 },
    style:
      slot.key === 'left'
        ? {
            symbol: { type: 'circle', radius: 13, fill: { type: 'solid', color: slot.color }, stroke: { color: '#ffffff', width: 4 } },
            text: {
              text: \`\${slot.label} · \${slot.city}\`,
              fontSize: 14,
              fontWeight: 'bold',
              offsetY: 34,
              fill: { type: 'solid', color: '#1f2937' },
              stroke: { color: '#ffffff', width: 3 }
            }
          }
        : {
            fill: { type: 'pattern', pattern: 'diagonal', color: slot.color, backgroundColor: 'rgba(255,255,255,0.32)', size: 16, lineWidth: 3 },
            strokes: [{ color: slot.color, width: 4 }],
            text: {
              text: \`\${slot.label} · \${slot.city}\`,
              fontSize: 14,
              fontWeight: 'bold',
              fill: { type: 'solid', color: '#7f1d1d' },
              stroke: { color: '#ffffff', width: 3 }
            }
          }
  });
  earth.view.flyTo(center, slot.key === 'left' ? 8 : 7.5);
};

// #region multi-earth-create
const createMap = (slot: MapSlot) => {
  if (earthByKey(slot.key) !== null) return;
  const target = targetByKey(slot.key);
  if (target === null) return;

  const earth = useEarth({
    id: slot.id,
    target,
    view: { zoom: 7 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  const center = earth.view.toProjectedCoordinates(slot.geographicCenter);
  addSlotContent(earth, slot, center);
  setEarth(slot.key, earth, center);
};

const createMaps = () => {
  for (const slot of slots) createMap(slot);
  verifyIsolation();
};
// #endregion multi-earth-create

const destroyMap = (slot: MapSlot) => {
  earthByKey(slot.key)?.destroy();
  setEarth(slot.key, null, null);
  verification.value = \`\${slot.label}已销毁；另一张地图保持当前生命周期\`;
};

// #region multi-earth-isolation
const verifyIsolation = () => {
  const left = leftEarth.value;
  const right = rightEarth.value;
  if (left === null || right === null) {
    verification.value = '请先创建两张地图后再验证';
    return;
  }
  const registryMatches = useEarth(slots[0].id) === left && useEarth(slots[1].id) === right;
  const distinctServices = left.elements !== right.elements && left.view !== right.view && left.contextMenu !== right.contextMenu;
  verification.value = registryMatches && distinctServices ? '两个命名键各自复用正确实例，服务与资源完全隔离' : '隔离验证失败';
};
// #endregion multi-earth-isolation

const focusMap = (slot: MapSlot) => {
  const earth = earthByKey(slot.key);
  const center = slot.key === 'left' ? leftCenter.value : rightCenter.value;
  if (earth === null || center === null) return;
  earth.view.animateFlyTo(center, { zoom: slot.key === 'left' ? 8 : 7.5, duration: 450 });
};

const focus = () => {
  for (const slot of slots) focusMap(slot);
};

const reset = () => {
  for (const slot of slots) destroyMap(slot);
  createMaps();
  focus();
};

defineExpose({ reset, focus });

onMounted(createMaps);

onBeforeUnmount(() => {
  for (const slot of slots) destroyMap(slot);
});
<\/script>

<template>
  <div class="example-demo multi-earth-demo">
    <el-alert
      class="example-demo__alert"
      type="info"
      :closable="false"
      show-icon
      title="两张地图使用不同命名键、底图、View、Layer、Element 与服务实例；销毁其中一张不会影响另一张。"
    />

    <div class="example-demo__control-panel">
      <div class="example-demo__action-row">
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="createMaps">创建 / 重建缺失地图</el-button>
            <el-button @click="verifyIsolation">验证命名实例隔离</el-button>
            <el-button @click="focus">同时定位</el-button>
          </div>
        </div>
        <div class="example-demo__feedback" aria-live="polite">
          <el-tag :type="leftEarth && rightEarth ? 'success' : 'warning'">{{ leftEarth && rightEarth ? '两张地图均 ready' : '存在已销毁地图' }}</el-tag>
        </div>
      </div>
    </div>

    <div class="multi-earth-demo__grid">
      <section class="multi-earth-demo__panel">
        <div class="multi-earth-demo__heading">
          <div class="multi-earth-demo__heading-meta">
            <strong>{{ slots[0].label }}</strong>
            <span
              ><code>{{ slots[0].id }}</code> · {{ stateLabel.left }}</span
            >
          </div>
          <div class="multi-earth-demo__heading-actions">
            <el-button size="small" :disabled="leftEarth === null" @click="focusMap(slots[0])">定位北京</el-button>
            <el-button size="small" type="danger" plain :disabled="leftEarth === null" @click="destroyMap(slots[0])">只销毁左图</el-button>
          </div>
        </div>
        <div ref="leftTarget" class="example-stage multi-earth-demo__stage"></div>
      </section>

      <section class="multi-earth-demo__panel">
        <div class="multi-earth-demo__heading">
          <div class="multi-earth-demo__heading-meta">
            <strong>{{ slots[1].label }}</strong>
            <span
              ><code>{{ slots[1].id }}</code> · {{ stateLabel.right }}</span
            >
          </div>
          <div class="multi-earth-demo__heading-actions">
            <el-button size="small" :disabled="rightEarth === null" @click="focusMap(slots[1])">定位上海</el-button>
            <el-button size="small" type="danger" plain :disabled="rightEarth === null" @click="destroyMap(slots[1])">只销毁右图</el-button>
          </div>
        </div>
        <div ref="rightTarget" class="example-stage multi-earth-demo__stage"></div>
      </section>
    </div>

    <el-result class="multi-earth-demo__result" icon="success" title="隔离验证" :sub-title="verification" />
  </div>
</template>

<style scoped>
.multi-earth-demo__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.multi-earth-demo__panel {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--doc-border);
  border-radius: 12px;
  background: var(--doc-surface);
}

.multi-earth-demo__heading {
  display: flex;
  min-height: 76px;
  padding: 12px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 1px solid var(--doc-border);
}

.multi-earth-demo__heading > div {
  display: flex;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.multi-earth-demo__heading-actions :deep(.el-button + .el-button) {
  margin-left: 0;
}

.multi-earth-demo__heading span {
  color: var(--doc-muted);
  font-size: 12px;
}

.multi-earth-demo__stage {
  height: 390px;
  border: 0;
  border-radius: 0;
}

.multi-earth-demo__result {
  padding: 18px 0 0;
}

.multi-earth-demo__result :deep(.el-result__icon) {
  display: none;
}

.multi-earth-demo__result :deep(.el-result__title) {
  margin-top: 0;
}

@media (max-width: 1180px) {
  .multi-earth-demo__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .multi-earth-demo__heading {
    align-items: stretch;
    flex-direction: column;
  }

  .multi-earth-demo__stage {
    height: 340px;
  }
}
</style>
`,fe={class:`doc-page-layout`},pe={class:`doc-page`},me={id:`overview`,class:`doc-prose`},he={id:`example-earth-lifecycle`,class:`doc-prose`},ge={id:`example-multi-earth`,class:`doc-prose`},_e={id:`example-earth-constructor`,class:`doc-prose`},$={id:`api`,class:`doc-prose`},ve={id:`api-constructor`,class:`api-constructor`},ye={id:`registry-rules`,class:`doc-prose`},be={id:`related-types`,class:`doc-prose`},xe={class:`core-type-links`},Se={class:`doc-page-layout__aside`},Ce=`useEarth(): Earth;
useEarth(id: string): Earth;
useEarth(options: UseEarthOptions): Earth;

new Earth(options?: EarthOptions): Earth;`,we=n({__name:`EarthInstanceView`,setup(e){let n=O(K,`earth-registry-lifecycle`),r=O(L,`earth-constructor`),i=[O(Q,`multi-earth-create`),O(Q,`multi-earth-isolation`)].join(`

`),o=t(null),d=()=>o.value?.reset(),h=()=>o.value?.focus(),g=[{id:`overview`,label:`选择创建入口`},{id:`example-earth-lifecycle`,label:`实例复用与生命周期`},{id:`example-multi-earth`,label:`多地图实例与隔离`},{id:`example-earth-constructor`,label:`公共构造器与自管实例`},{id:`api`,label:`Earth API`,children:[{id:`api-constructor`,label:`构造函数`},{id:`api-type-earth-options`,label:`EarthOptions`},{id:`api-type-earth-lifecycle-state`,label:`EarthLifecycleState`},{id:`api-properties`,label:`公开属性`},{id:`api-methods`,label:`公开方法`}]},{id:`api-complete`,label:`完整公开 API`},{id:`registry-rules`,label:`注册与销毁规则`},{id:`related-types`,label:`相关导出类型`}],T=[{prop:`name`,label:`属性`,width:180,presentation:`property`},{prop:`type`,label:`类型`,width:230,linkTypes:!0},{prop:`desc`,label:`说明`,width:340}],E=[{anchor:`api-property-map`,href:`/api/types#api-type-earth-property-map`,name:`map`,type:`Map`,desc:`当前 OpenLayers Map；面向高级集成的外部对象`},{anchor:`api-property-target`,href:`/api/types#api-type-earth-property-target`,name:`target`,type:`string | HTMLElement`,desc:`地图挂载容器`},{anchor:`api-property-elements`,href:`/api/types#api-type-earth-property-elements`,name:`elements`,type:`ElementService`,desc:`Element 的创建、查询和批量管理入口`},{anchor:`api-property-layers`,href:`/api/types#api-type-earth-property-layers`,name:`layers`,type:`LayerService`,desc:`图层的创建、查询和生命周期入口`},{anchor:`api-property-styles`,href:`/api/types#api-type-earth-property-styles`,name:`styles`,type:`StyleService`,desc:`结构化样式的注册与管理入口`},{anchor:`api-property-animations`,href:`/api/types#api-type-earth-property-animations`,name:`animations`,type:`AnimationManager`,desc:`Element 动画入口`},{anchor:`api-property-draw`,href:`/api/types#api-type-earth-property-draw`,name:`draw`,type:`DrawService`,desc:`绘制会话入口`},{anchor:`api-property-transform`,href:`/api/types#api-type-earth-property-transform`,name:`transform`,type:`TransformService`,desc:`变换会话入口`},{anchor:`api-property-measure`,href:`/api/types#api-type-earth-property-measure`,name:`measure`,type:`MeasureService`,desc:`距离与面积测量入口`},{anchor:`api-property-events`,href:`/api/types#api-type-earth-property-events`,name:`events`,type:`EventService`,desc:`地图与 Element 事件入口`},{anchor:`api-property-context-menu`,href:`/api/types#api-type-earth-property-context-menu`,name:`contextMenu`,type:`ContextMenuService`,desc:`右键菜单入口`},{anchor:`api-property-overlays`,href:`/api/types#api-type-earth-property-overlays`,name:`overlays`,type:`OverlayService`,desc:`覆盖物入口`},{anchor:`api-property-view`,href:`/api/types#api-type-earth-property-view`,name:`view`,type:`ViewService`,desc:`视图、投影、像素与世界副本操作入口`},{anchor:`api-property-controls`,href:`/api/types#api-type-earth-property-controls`,name:`controls`,type:`ControlService`,desc:`经纬网与比例尺运行期控制入口`},{anchor:`api-property-lifecycle`,href:`/api/types#api-type-earth-property-lifecycle`,name:`lifecycle`,type:`EarthLifecycleState`,desc:`当前生命周期状态，只读`},{anchor:`api-property-is-destroyed`,href:`/api/types#api-type-earth-property-is-destroyed`,name:`isDestroyed`,type:`boolean`,desc:`实例是否已经销毁，只读`}],D=[{prop:`name`,label:`方法`,width:190,presentation:`method`},{prop:`params`,label:`参数`,width:300,linkTypes:!0},{prop:`returns`,label:`返回值`,width:160,linkTypes:!0},{prop:`desc`,label:`说明`,width:320}],A=[{anchor:`api-method-destroy`,href:`/api/types#api-type-earth-method-destroy`,name:`destroy`,params:`—`,returns:`void`,desc:`幂等释放地图、服务、交互、资源和注册关系`}],j=[{prop:`name`,label:`属性`,width:180,presentation:`property`},{prop:`required`,label:`必填`,width:90},{prop:`type`,label:`类型`,width:260,linkTypes:!0},{prop:`default`,label:`默认值`,width:230},{prop:`desc`,label:`说明`,width:350}],M=[{anchor:`api-summary-earth-option-target`,href:`/api/types#api-type-earth-options-property-target`,name:`target`,required:`否`,type:`string | HTMLElement`,default:`'olContainer'`,desc:`地图容器 ID 或容器元素；构造时复制并固定`},{anchor:`api-summary-earth-option-view`,href:`/api/types#api-type-earth-options-property-view`,name:`view`,required:`否`,type:`ViewOptions`,default:`center：默认 home；zoom：4`,desc:`OpenLayers View 初始选项；调用方对象不会被持有`},{anchor:`api-summary-earth-option-controls`,href:`/api/types#api-type-earth-options-property-controls`,name:`controls`,required:`否`,type:`DefaultsOptions`,default:`zoom / rotate / attribution：false`,desc:`OpenLayers 默认控件配置；运行期经纬网与比例尺由 earth.controls 管理`}],N=[{name:`ready`,desc:`实例可用；服务、地图与资源均处于活动状态`},{name:`destroying`,desc:`destroy() 正在同步释放服务和资源，不应再发起业务操作`},{name:`destroyed`,desc:`释放完成；isDestroyed 为 true，注册实例已从 useEarth 注册表移除`}];return(e,t)=>{let O=l(`el-tag`),P=l(`el-card`),F=l(`el-col`),R=l(`el-row`),z=l(`el-alert`),B=l(`el-descriptions-item`),V=l(`el-descriptions`),H=l(`el-timeline-item`),U=l(`el-timeline`);return f(),a(`div`,fe,[p(`article`,pe,[t[54]||=p(`header`,{class:`doc-hero`},[p(`span`,{class:`doc-hero__eyebrow`},`核心`),p(`h1`,null,`Earth 与生命周期`),p(`p`,null,`Earth 是地图、服务和资源的生命周期根。业务代码优先使用 useEarth；需要完全自管且不进入注册表时再直接构造 Earth。`)],-1),p(`section`,me,[t[10]||=p(`h2`,{class:`doc-h2`},`选择创建入口`,-1),v(R,{gutter:16},{default:_(()=>[v(F,{xs:24,md:12},{default:_(()=>[v(P,{class:`core-choice-card`,shadow:`never`},{header:_(()=>[...t[0]||=[p(`strong`,null,`useEarth（推荐）`,-1)]]),default:_(()=>[t[2]||=p(`p`,null,`适合应用页面和组件。默认实例或同名实例会复用，销毁后相同注册键可重新创建。`,-1),v(O,{type:`success`,effect:`plain`},{default:_(()=>[...t[1]||=[s(`注册式生命周期`,-1)]]),_:1})]),_:1})]),_:1}),v(F,{xs:24,md:12},{default:_(()=>[v(P,{class:`core-choice-card`,shadow:`never`},{header:_(()=>[...t[3]||=[p(`strong`,null,`new Earth`,-1)]]),default:_(()=>[t[5]||=p(`p`,null,`适合基础设施封装。实例完全由调用方持有，不与 useEarth 的默认或命名实例合并。`,-1),v(O,{effect:`plain`},{default:_(()=>[...t[4]||=[s(`自管生命周期`,-1)]]),_:1})]),_:1})]),_:1})]),_:1}),v(S,{code:Ce,lang:`ts`}),v(z,{class:`doc-prose__alert`,type:`info`,closable:!1,"show-icon":``},{title:_(()=>[...t[6]||=[s(`配置对象只影响首次创建`,-1)]]),default:_(()=>[t[7]||=s(` 对同一注册键再次调用 `,-1),t[8]||=p(`code`,null,`useEarth(options)`,-1),t[9]||=s(` 不会重建实例，也不会覆盖已有 target、view 或 controls。 `,-1)]),_:1})]),p(`section`,he,[v(b,{title:`实例复用与生命周期`,source:y(K),snippet:y(n)},{description:_(()=>[p(`p`,null,[t[14]||=s(` 示例用同一 ID 验证 `,-1),v(w,{kind:`method`,to:`/guide/earth-create#api-method-use-earth`},{default:_(()=>[...t[11]||=[s(`useEarth`,-1)]]),_:1}),t[15]||=s(` 的复用语义，并展示 `,-1),v(w,{kind:`property`,to:`#api-property-lifecycle`},{default:_(()=>[...t[12]||=[s(`lifecycle`,-1)]]),_:1}),t[16]||=s(` 与 `,-1),v(w,{kind:`method`,to:`#api-method-destroy`},{default:_(()=>[...t[13]||=[s(`destroy`,-1)]]),_:1}),t[17]||=s(`。销毁后再次创建会得到新的 Earth。 `,-1)])]),preview:_(()=>[v(ee)]),_:1},8,[`source`,`snippet`])]),p(`section`,ge,[v(b,{title:`多地图实例与隔离`,source:y(Q),snippet:y(i),"show-reset":``,"show-focus":``,onReset:d,onFocus:h},{description:_(()=>[p(`p`,null,[t[20]||=s(` 两个命名 `,-1),v(w,{kind:`type`,to:`/api/types#api-type-earth`},{default:_(()=>[...t[18]||=[s(`Earth`,-1)]]),_:1}),t[21]||=s(` 实例拥有独立的容器、视图、图层、Element 与服务。示例可分别销毁并重建任意一张地图，用于验证 `,-1),v(w,{kind:`method`,to:`/guide/earth-create#api-method-use-earth`},{default:_(()=>[...t[19]||=[s(`useEarth`,-1)]]),_:1}),t[22]||=s(` 注册隔离和完整生命周期清理。 `,-1)])]),preview:_(()=>[v(de,{ref_key:`multiEarthDemoRef`,ref:o},null,512)]),_:1},8,[`source`,`snippet`])]),p(`section`,_e,[v(b,{title:`公共构造器与自管实例`,source:y(L),snippet:y(r)},{description:_(()=>[p(`p`,null,[v(w,{kind:`constructor`,to:`#api-constructor`},{default:_(()=>[...t[23]||=[s(`new Earth(options)`,-1)]]),_:1}),t[25]||=s(` 创建不进入 useEarth 注册表的实例。示例显式创建图层和 Element，并在业务结束时调用 `,-1),v(w,{kind:`method`,to:`#api-method-destroy`},{default:_(()=>[...t[24]||=[s(`destroy`,-1)]]),_:1}),t[26]||=s(`。 `,-1)])]),preview:_(()=>[v(I)]),_:1},8,[`source`,`snippet`])]),p(`section`,$,[t[32]||=p(`h2`,{class:`doc-h2`},`Earth API`,-1),t[33]||=p(`p`,null,[s(` 表格中的本包导出类型可直接点击，进入“所有导出类型”中的精确定义。OpenLayers 的 `),p(`code`,null,`Map`),s(`、`),p(`code`,null,`HTMLElement`),s(` 等外部类型保持为普通文本。 `)],-1),p(`div`,ve,[t[30]||=p(`h3`,{class:`doc-h3`},`构造函数`,-1),t[31]||=p(`p`,{class:`api-constructor__signature`},[p(`code`,null,`new Earth(options?: EarthOptions): Earth`)],-1),p(`p`,null,[t[28]||=s(` 高级自管入口，不进入 useEarth 注册表。参数类型见 `,-1),v(w,{kind:`type`,to:`/api/types#api-type-earth-options`},{default:_(()=>[...t[27]||=[s(`EarthOptions`,-1)]]),_:1}),t[29]||=s(`。 `,-1)])]),t[34]||=p(`h3`,{id:`api-earth-options-summary`,class:`doc-h3`},`EarthOptions 速查`,-1),t[35]||=p(`p`,null,`构造器只接受以下三个公开字段；未知字段、访问器属性或非法 target 会在创建地图前同步拒绝。`,-1),v(C,{columns:j,rows:M}),t[36]||=p(`h3`,{id:`api-earth-lifecycle-summary`,class:`doc-h3`},`EarthLifecycleState 速查`,-1),t[37]||=p(`p`,null,[p(`code`,null,`'ready' | 'destroying' | 'destroyed'`)],-1),v(V,{column:1,border:``},{default:_(()=>[(f(),a(c,null,m(N,e=>v(B,{key:e.name,label:e.name},{default:_(()=>[s(u(e.desc),1)]),_:2},1032,[`label`])),64))]),_:1}),t[38]||=p(`h3`,{id:`api-properties`,class:`doc-h3`},`公开属性`,-1),v(C,{columns:T,rows:E}),t[39]||=p(`h3`,{id:`api-methods`,class:`doc-h3`},`公开方法`,-1),v(C,{columns:D,rows:A})]),v(k,{"section-id":`api-complete`,title:`完整公开 API`,description:`完整展示 Earth 的公共构造器、全部只读服务属性、生命周期访问器、destroy()，以及 EarthOptions 和 EarthLifecycleState。`,"type-names":[`Earth`,`EarthOptions`,`EarthLifecycleState`]}),p(`section`,ye,[t[48]||=p(`h2`,{class:`doc-h2`},`注册与销毁规则`,-1),v(U,null,{default:_(()=>[v(H,{timestamp:`首次调用`,type:`primary`},{default:_(()=>[...t[40]||=[s(`创建实例；命名实例省略 target 时，默认挂载到与 id 同名的 DOM 容器。`,-1)]]),_:1}),v(H,{timestamp:`活动期间`,type:`success`},{default:_(()=>[...t[41]||=[s(`相同注册键始终返回同一实例；默认注册键与命名注册键互不影响。`,-1)]]),_:1}),v(H,{timestamp:`destroy()`,type:`warning`},{default:_(()=>[...t[42]||=[s(`状态按 ready → destroying → destroyed 推进，并清理注册关系。`,-1)]]),_:1}),v(H,{timestamp:`再次调用`,type:`primary`},{default:_(()=>[...t[43]||=[s(`同一注册键创建全新实例，可使用新的首次创建配置。`,-1)]]),_:1})]),_:1}),v(z,{type:`warning`,closable:!1,"show-icon":``,title:`不要把 useEarth 的 id 当作 Earth 属性`},{default:_(()=>[v(w,{kind:`property`,to:`/api/types#api-type-use-earth-options-property-id`},{default:_(()=>[...t[44]||=[s(`UseEarthOptions.id`,-1)]]),_:1}),t[45]||=s(` 是注册键配置；Earth 实例本身没有公开的 earth.id。 `,-1)]),_:1}),p(`p`,null,[v(w,{kind:`method`,to:`/guide/earth-create#api-method-use-earth`},{default:_(()=>[...t[46]||=[s(`useEarth 的三个重载`,-1)]]),_:1}),t[47]||=s(` 在“创建第一张地图”页面完整定义；本页只定义 Earth 构造器、属性和实例方法，避免维护两份签名。 `,-1)])]),p(`section`,be,[t[53]||=p(`h2`,{class:`doc-h2`},`相关导出类型`,-1),p(`div`,xe,[v(w,{kind:`type`,to:`/api/types#api-type-earth`},{default:_(()=>[...t[49]||=[s(`Earth`,-1)]]),_:1}),v(w,{kind:`type`,to:`/api/types#api-type-earth-options`},{default:_(()=>[...t[50]||=[s(`EarthOptions`,-1)]]),_:1}),v(w,{kind:`type`,to:`/api/types#api-type-use-earth-options`},{default:_(()=>[...t[51]||=[s(`UseEarthOptions`,-1)]]),_:1}),v(w,{kind:`type`,to:`/api/types#api-type-earth-lifecycle-state`},{default:_(()=>[...t[52]||=[s(`EarthLifecycleState`,-1)]]),_:1})])])]),p(`aside`,Se,[v(x,{title:`Earth 与生命周期`,items:g})])])}}});export{we as default};