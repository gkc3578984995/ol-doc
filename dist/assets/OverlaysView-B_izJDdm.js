import{At as e,B as t,Nt as n,P as r,Q as i,R as a,ct as o,fn as s,it as c,j as l,tt as u,x as d,xt as f,z as p,zt as m}from"./TypeExpression-D6csDz4V.js";import{B as h,H as g,V as _,W as v,a as y,n as b,t as x,z as S}from"./index-4uKXPGRf.js";var C={class:`example-demo`},w={class:`example-demo__control-panel overlays-demo__toolbar`},T={class:`example-demo__actions overlays-demo__actions`},E={class:`example-demo__action-group overlays-demo__action-group`,role:`group`,"aria-label":`创建与查询`},D={class:`example-demo__action-buttons overlays-demo__action-buttons`},O={class:`example-demo__action-group overlays-demo__action-group`,role:`group`,"aria-label":`主句柄操作`},k={class:`example-demo__action-buttons overlays-demo__action-buttons`},A={class:`example-demo__action-group overlays-demo__action-group`,role:`group`,"aria-label":`批量清理`},j={class:`example-demo__action-buttons overlays-demo__action-buttons`},M=`docs-services-overlays`,N=`overlay-demo`,P=d(t({__name:`OverlaysDemo`,setup(t){let d=e(null),m=n(null),h=n(null),g=n(null),_=e({id:`—`,visible:!1,position:`—`}),v=e(`等待查询`),x=e(`等待操作`),S=e(0),P=1,F,I,L=e=>{let t=document.createElement(`div`);return t.className=`docs-overlay-chip`,t.textContent=e,t},R=()=>{let e=h.value;_.value={id:e?.id??`—`,visible:e?.visible??!1,position:e?.position?.map(e=>e.toFixed(0)).join(`, `)??`—`}},z=()=>{F!==void 0&&I!==void 0&&F.removeEventListener(`click`,I),F=void 0,I=void 0},B=()=>{let e=m.value;if(e===null)return;e.overlays.remove({module:N}),z();let t=e.view.toProjectedCoordinates([116.4074,39.9042]),n=e.view.toProjectedCoordinates([116.43,39.92]),r=L(`外部所有权 Overlay`),i=()=>{S.value+=1};r.addEventListener(`click`,i),F=r,I=i,h.value=e.overlays.add({id:`overlay-main`,element:r,position:t,offset:[0,-16],positioning:`bottom-center`,stopEvent:!0,autoPan:{margin:24,duration:300},module:N,data:{label:`主覆盖物`,version:P},ownership:`external`}),g.value=e.overlays.add({id:`overlay-earth-owned`,element:L(`Earth 所有权 Overlay`),position:n,positioning:`center-left`,module:N,data:{label:`辅助覆盖物`,version:P},ownership:`earth`}),x.value=`已通过 add() 创建两个 Overlay`,R()},V=()=>{let e=m.value?.overlays.get(`overlay-main`);v.value=e===void 0?`get() 未找到 overlay-main`:`get() 找到 ${e.id}，visible=${e.visible}`},H=()=>{let e=m.value?.overlays.query({module:N})??[];v.value=`query() 找到 ${e.length} 个：${e.map(({id:e})=>e).join(`、`)||`—`}`},U=()=>{let e=h.value;e!==null&&(P+=1,e.update({offset:[18,-22],data:{label:`主覆盖物`,version:P},visible:!0}),F!==void 0&&(F.textContent=`已更新 v${P}`),x.value=`update() 已写入 offset、data 与 visible（v${P}）`,R())},W=()=>{let e=m.value,t=h.value;e===null||t===null||(t.setPosition(e.view.toProjectedCoordinates([116.37,39.93])),x.value=`已通过 setPosition() 改变地图坐标`,R())},G=()=>{h.value?.show(),x.value=`已调用 show()`,R()},K=()=>{h.value?.hide(),x.value=`已调用 hide()`,R()},q=()=>{h.value?.panIntoView({margin:32,duration:350}),x.value=`已调用 panIntoView()`},J=()=>{let e=h.value;e!==null&&(e.destroy(),h.value=null,F?.dispatchEvent(new MouseEvent(`click`)),x.value=`destroy() 已解绑 Overlay；外部 DOM 内容和调用方监听仍由调用方管理`,R())},Y=()=>{let e=m.value?.overlays.remove({module:N})??0;h.value=null,g.value=null,x.value=`remove({ module }) 移除了 ${e} 个 Overlay`,R()},X=()=>{m.value?.overlays.clear(),h.value=null,g.value=null,x.value=`clear() 已清空当前 Earth 的全部 Overlay 与 Descriptor`,R()};return u(()=>{if(d.value===null)return;let e=y({id:M,target:d.value,view:{zoom:9},controls:{zoom:!0,rotate:!1,attribution:!0}});b(e,`vector`),e.view.flyTo(e.view.toProjectedCoordinates([116.4074,39.9042]),9),m.value=e,B()}),i(()=>{h.value?.destroy(),g.value?.destroy(),z(),m.value?.destroy(),m.value=null,h.value=null,g.value=null}),(e,t)=>{let n=o(`el-alert`),i=o(`el-button`),u=o(`el-descriptions-item`),m=o(`el-descriptions`);return c(),r(`div`,C,[p(n,{type:`info`,closable:!1,"show-icon":``,title:`普通 Overlay 由 OverlayService 查询；Descriptor 是独立复合句柄，但 clear() 会统一清理两者。`}),l(`div`,w,[l(`div`,T,[l(`div`,E,[t[3]||=l(`span`,null,`创建与查询`,-1),l(`div`,D,[p(i,{type:`primary`,onClick:B},{default:f(()=>[...t[0]||=[a(`重新 add`,-1)]]),_:1}),p(i,{onClick:V},{default:f(()=>[...t[1]||=[a(`get`,-1)]]),_:1}),p(i,{onClick:H},{default:f(()=>[...t[2]||=[a(`query`,-1)]]),_:1})])]),l(`div`,O,[t[10]||=l(`span`,null,`主句柄操作`,-1),l(`div`,k,[p(i,{disabled:h.value===null,onClick:U},{default:f(()=>[...t[4]||=[a(`update`,-1)]]),_:1},8,[`disabled`]),p(i,{disabled:h.value===null,onClick:W},{default:f(()=>[...t[5]||=[a(`setPosition`,-1)]]),_:1},8,[`disabled`]),p(i,{disabled:h.value===null,onClick:G},{default:f(()=>[...t[6]||=[a(`show`,-1)]]),_:1},8,[`disabled`]),p(i,{disabled:h.value===null,onClick:K},{default:f(()=>[...t[7]||=[a(`hide`,-1)]]),_:1},8,[`disabled`]),p(i,{disabled:h.value===null,onClick:q},{default:f(()=>[...t[8]||=[a(`panIntoView`,-1)]]),_:1},8,[`disabled`]),p(i,{disabled:h.value===null,type:`danger`,plain:``,onClick:J},{default:f(()=>[...t[9]||=[a(`handle.destroy`,-1)]]),_:1},8,[`disabled`])])]),l(`div`,A,[t[13]||=l(`span`,null,`批量清理`,-1),l(`div`,j,[p(i,{type:`warning`,plain:``,onClick:Y},{default:f(()=>[...t[11]||=[a(`remove(module)`,-1)]]),_:1}),p(i,{type:`danger`,plain:``,onClick:X},{default:f(()=>[...t[12]||=[a(`clear`,-1)]]),_:1})])])])]),l(`div`,{ref_key:`mapTarget`,ref:d,class:`example-stage`},null,512),p(m,{class:`overlays-demo__result`,column:1,border:``,"aria-live":`polite`},{default:f(()=>[p(u,{label:`主 Overlay ID`},{default:f(()=>[a(s(_.value.id),1)]),_:1}),p(u,{label:`可见`},{default:f(()=>[a(s(_.value.visible?`是`:`否`),1)]),_:1}),p(u,{label:`位置`},{default:f(()=>[a(s(_.value.position),1)]),_:1}),p(u,{label:`外部 DOM 监听触发次数`},{default:f(()=>[a(s(S.value),1)]),_:1}),p(u,{label:`查询结果`},{default:f(()=>[a(s(v.value),1)]),_:1}),p(u,{label:`最近操作`},{default:f(()=>[a(s(x.value),1)]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-4be79b7e`]]),F=`<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth, OverlayHandle } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-services-overlays';
const MODULE = 'overlay-demo';

interface DemoData {
  label: string;
  version: number;
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const mainRef = shallowRef<OverlayHandle<DemoData> | null>(null);
const companionRef = shallowRef<OverlayHandle<DemoData> | null>(null);
const mainState = ref({ id: '—', visible: false, position: '—' });
const queryResult = ref('等待查询');
const operationResult = ref('等待操作');
const externalClickCount = ref(0);

let version = 1;
let externalElement: HTMLDivElement | undefined;
let externalListener: (() => void) | undefined;

const overlayElement = (label: string): HTMLDivElement => {
  const element = document.createElement('div');
  element.className = 'docs-overlay-chip';
  element.textContent = label;
  return element;
};

const refreshState = () => {
  const handle = mainRef.value;
  mainState.value = {
    id: handle?.id ?? '—',
    visible: handle?.visible ?? false,
    position: handle?.position?.map((value) => value.toFixed(0)).join(', ') ?? '—'
  };
};

const releaseCallerResources = () => {
  if (externalElement !== undefined && externalListener !== undefined) externalElement.removeEventListener('click', externalListener);
  externalElement = undefined;
  externalListener = undefined;
};

// #region overlay-create
const addOverlays = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  earth.overlays.remove({ module: MODULE });
  releaseCallerResources();

  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  const secondary = earth.view.toProjectedCoordinates([116.43, 39.92]);
  const element = overlayElement('外部所有权 Overlay');
  const listener = () => {
    externalClickCount.value += 1;
  };
  element.addEventListener('click', listener);
  externalElement = element;
  externalListener = listener;

  mainRef.value = earth.overlays.add<DemoData>({
    id: 'overlay-main',
    element,
    position: center,
    offset: [0, -16],
    positioning: 'bottom-center',
    stopEvent: true,
    autoPan: { margin: 24, duration: 300 },
    module: MODULE,
    data: { label: '主覆盖物', version },
    ownership: 'external'
  });
  companionRef.value = earth.overlays.add<DemoData>({
    id: 'overlay-earth-owned',
    element: overlayElement('Earth 所有权 Overlay'),
    position: secondary,
    positioning: 'center-left',
    module: MODULE,
    data: { label: '辅助覆盖物', version },
    ownership: 'earth'
  });
  operationResult.value = '已通过 add() 创建两个 Overlay';
  refreshState();
};
// #endregion overlay-create

const getOverlay = () => {
  const found = earthRef.value?.overlays.get<DemoData>('overlay-main');
  queryResult.value = found === undefined ? 'get() 未找到 overlay-main' : \`get() 找到 \${found.id}，visible=\${found.visible}\`;
};

const queryOverlays = () => {
  const found = earthRef.value?.overlays.query<DemoData>({ module: MODULE }) ?? [];
  queryResult.value = \`query() 找到 \${found.length} 个：\${found.map(({ id }) => id).join('、') || '—'}\`;
};

const updateOverlay = () => {
  const handle = mainRef.value;
  if (handle === null) return;
  version += 1;
  handle.update({ offset: [18, -22], data: { label: '主覆盖物', version }, visible: true });
  if (externalElement !== undefined) externalElement.textContent = \`已更新 v\${version}\`;
  operationResult.value = \`update() 已写入 offset、data 与 visible（v\${version}）\`;
  refreshState();
};

const moveOverlay = () => {
  const earth = earthRef.value;
  const handle = mainRef.value;
  if (earth === null || handle === null) return;
  handle.setPosition(earth.view.toProjectedCoordinates([116.37, 39.93]));
  operationResult.value = '已通过 setPosition() 改变地图坐标';
  refreshState();
};

const showOverlay = () => {
  mainRef.value?.show();
  operationResult.value = '已调用 show()';
  refreshState();
};

const hideOverlay = () => {
  mainRef.value?.hide();
  operationResult.value = '已调用 hide()';
  refreshState();
};

const panIntoView = () => {
  mainRef.value?.panIntoView({ margin: 32, duration: 350 });
  operationResult.value = '已调用 panIntoView()';
};

const destroyMain = () => {
  const handle = mainRef.value;
  if (handle === null) return;
  handle.destroy();
  mainRef.value = null;
  externalElement?.dispatchEvent(new MouseEvent('click'));
  operationResult.value = 'destroy() 已解绑 Overlay；外部 DOM 内容和调用方监听仍由调用方管理';
  refreshState();
};

const removeModule = () => {
  const removed = earthRef.value?.overlays.remove({ module: MODULE }) ?? 0;
  mainRef.value = null;
  companionRef.value = null;
  operationResult.value = \`remove({ module }) 移除了 \${removed} 个 Overlay\`;
  refreshState();
};

const clearAll = () => {
  earthRef.value?.overlays.clear();
  mainRef.value = null;
  companionRef.value = null;
  operationResult.value = 'clear() 已清空当前 Earth 的全部 Overlay 与 Descriptor';
  refreshState();
};

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 9 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earth.view.flyTo(earth.view.toProjectedCoordinates([116.4074, 39.9042]), 9);
  earthRef.value = earth;
  addOverlays();
});

onBeforeUnmount(() => {
  mainRef.value?.destroy();
  companionRef.value?.destroy();
  releaseCallerResources();
  earthRef.value?.destroy();
  earthRef.value = null;
  mainRef.value = null;
  companionRef.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <el-alert type="info" :closable="false" show-icon title="普通 Overlay 由 OverlayService 查询；Descriptor 是独立复合句柄，但 clear() 会统一清理两者。" />

    <div class="example-demo__control-panel overlays-demo__toolbar">
      <div class="example-demo__actions overlays-demo__actions">
        <div class="example-demo__action-group overlays-demo__action-group" role="group" aria-label="创建与查询">
          <span>创建与查询</span>
          <div class="example-demo__action-buttons overlays-demo__action-buttons">
            <el-button type="primary" @click="addOverlays">重新 add</el-button>
            <el-button @click="getOverlay">get</el-button>
            <el-button @click="queryOverlays">query</el-button>
          </div>
        </div>
        <div class="example-demo__action-group overlays-demo__action-group" role="group" aria-label="主句柄操作">
          <span>主句柄操作</span>
          <div class="example-demo__action-buttons overlays-demo__action-buttons">
            <el-button :disabled="mainRef === null" @click="updateOverlay">update</el-button>
            <el-button :disabled="mainRef === null" @click="moveOverlay">setPosition</el-button>
            <el-button :disabled="mainRef === null" @click="showOverlay">show</el-button>
            <el-button :disabled="mainRef === null" @click="hideOverlay">hide</el-button>
            <el-button :disabled="mainRef === null" @click="panIntoView">panIntoView</el-button>
            <el-button :disabled="mainRef === null" type="danger" plain @click="destroyMain">handle.destroy</el-button>
          </div>
        </div>
        <div class="example-demo__action-group overlays-demo__action-group" role="group" aria-label="批量清理">
          <span>批量清理</span>
          <div class="example-demo__action-buttons overlays-demo__action-buttons">
            <el-button type="warning" plain @click="removeModule">remove(module)</el-button>
            <el-button type="danger" plain @click="clearAll">clear</el-button>
          </div>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-descriptions class="overlays-demo__result" :column="1" border aria-live="polite">
      <el-descriptions-item label="主 Overlay ID">{{ mainState.id }}</el-descriptions-item>
      <el-descriptions-item label="可见">{{ mainState.visible ? '是' : '否' }}</el-descriptions-item>
      <el-descriptions-item label="位置">{{ mainState.position }}</el-descriptions-item>
      <el-descriptions-item label="外部 DOM 监听触发次数">{{ externalClickCount }}</el-descriptions-item>
      <el-descriptions-item label="查询结果">{{ queryResult }}</el-descriptions-item>
      <el-descriptions-item label="最近操作">{{ operationResult }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.overlays-demo__action-group {
  max-width: 100%;
}

.overlays-demo__result {
  margin-top: 14px;
}

.overlays-demo__result :deep(.el-descriptions__content) {
  overflow-wrap: anywhere;
}

:global(.docs-overlay-chip) {
  box-sizing: border-box;
  max-width: min(240px, calc(100vw - 32px));
  overflow: hidden;
  padding: 9px 13px;
  color: var(--el-color-white);
  background: var(--el-color-primary);
  border: 3px solid var(--el-bg-color-overlay);
  border-radius: var(--el-border-radius-base);
  box-shadow: var(--el-box-shadow-light);
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media (max-width: 560px) {
  .overlays-demo__toolbar,
  .overlays-demo__action-buttons {
    display: grid;
    grid-template-columns: 1fr;
  }

  .overlays-demo__action-group,
  .overlays-demo__action-buttons :deep(.el-button) {
    width: 100%;
  }

  .overlays-demo__action-buttons :deep(.el-button) {
    height: auto;
    min-height: 32px;
    white-space: normal;
  }
}
</style>
`,I={class:`doc-page-layout`},L={class:`doc-page`},R={id:`overview`,class:`doc-prose`},z={id:`example-overlay-lifecycle`,class:`doc-prose`},B={id:`dom-ownership`,class:`doc-prose`},V={id:`selector-safety`,class:`doc-prose`},H={id:`method-reference`,class:`doc-prose`},U={class:`doc-page-layout__aside`},W=t({__name:`OverlaysView`,setup(e){let t=x(F,`overlay-create`),n=[{id:`overview`,label:`普通 Overlay`},{id:`example-overlay-lifecycle`,label:`创建、查询、更新与清理`},{id:`dom-ownership`,label:`DOM 所有权`},{id:`selector-safety`,label:`查询与批量清理`},{id:`method-reference`,label:`服务与句柄方法`},{id:`api`,label:`完整 API`}],i=[{prop:`name`,label:`ownership`,width:140},{prop:`detach`,label:`销毁时`,width:310},{prop:`caller`,label:`调用方责任`,width:410}],s=[{name:`external（默认）`,detach:`从地图 Overlay 容器解绑，不主动 element.remove()`,caller:`保留 HTMLElement 业务所有权；自行清理内容、监听和外部引用`},{name:`earth`,detach:`最终引用释放时由 Earth 调用 element.remove()`,caller:`表示把页面节点移除责任交给 Earth；不要在销毁后继续复用该节点`}],u=[{prop:`name`,label:`方法`,width:210,presentation:`method`},{prop:`params`,label:`参数`,width:380,linkTypes:!0},{prop:`returns`,label:`返回值`,width:240,linkTypes:!0},{prop:`desc`,label:`说明`,width:400}],d=[{anchor:`api-service-add`,href:`/api/types#api-type-overlay-service-method-add`,name:`add`,params:`spec: OverlaySpec<T>`,returns:`OverlayHandle<T>`,desc:`创建并注册普通 Overlay；省略 id 时自动生成`},{anchor:`api-service-get`,href:`/api/types#api-type-overlay-service-method-get`,name:`get`,params:`id: string`,returns:`OverlayHandle<T> | undefined`,desc:`按 ID 获取仍有效的普通 Overlay；查询缺失不是异常`},{anchor:`api-service-query`,href:`/api/types#api-type-overlay-service-method-query`,name:`query`,params:`selector?: OverlaySelector<T>`,returns:`readonly OverlayHandle<T>[]`,desc:`按 id、ids、module、visible 或 predicate 查询；省略选择器返回全部普通 Overlay`},{anchor:`api-service-remove`,href:`/api/types#api-type-overlay-service-method-remove`,name:`remove`,params:`selector: OverlaySelector`,returns:`number`,desc:`销毁匹配的普通 Overlay 并返回数量；必须至少提供一个条件`},{anchor:`api-service-clear`,href:`/api/types#api-type-overlay-service-method-clear`,name:`clear`,params:`—`,returns:`void`,desc:`显式清空当前 Earth 管理的全部普通 Overlay 和 Descriptor`}],y=[{anchor:`api-handle-update`,href:`/api/types#api-type-overlay-handle-method-update`,name:`update`,params:`patch: OverlayPatch<T>`,returns:`void`,desc:`原子更新 element、position、offset、positioning、visible、data 或 ownership`},{anchor:`api-handle-set-position`,href:`/api/types#api-type-overlay-handle-method-set-position`,name:`setPosition`,params:`position: Coordinate | undefined`,returns:`void`,desc:`设置地图坐标；传 undefined 清除定位并隐藏`},{anchor:`api-handle-show`,href:`/api/types#api-type-overlay-handle-method-show`,name:`show`,params:`—`,returns:`void`,desc:`显示已有定位的 Overlay`},{anchor:`api-handle-hide`,href:`/api/types#api-type-overlay-handle-method-hide`,name:`hide`,params:`—`,returns:`void`,desc:`隐藏但保留句柄、DOM、位置和数据`},{anchor:`api-handle-pan-into-view`,href:`/api/types#api-type-overlay-handle-method-pan-into-view`,name:`panIntoView`,params:`options?: PanIntoViewSpec`,returns:`void`,desc:`按 CSS 像素边距和动画配置平移 View，使 Overlay 完整进入视口`},{anchor:`api-handle-destroy`,href:`/api/types#api-type-overlay-handle-method-destroy`,name:`destroy`,params:`—`,returns:`void`,desc:`幂等销毁当前 Overlay；其他非清理操作随后会失效`}],b=[`OverlayService`,`OverlayHandle`,`OverlaySpec`,`OverlayPatch`,`OverlaySelector`,`OverlayOwnership`,`OverlayPositioning`,`PanIntoViewSpec`],C={OverlayService:[`add`,`get`,`query`,`remove`,`clear`]};return(e,x)=>{let w=o(`el-alert`),T=o(`el-descriptions-item`),E=o(`el-descriptions`);return c(),r(`div`,I,[l(`article`,L,[x[20]||=l(`header`,{class:`doc-hero`},[l(`span`,{class:`doc-hero__eyebrow`},`地图服务`),l(`h1`,null,`覆盖物（Overlays）`),l(`p`,null,`普通 Overlay 把调用方提供的 HTMLElement 定位到地图坐标，并通过 OverlayService 与 OverlayHandle 管理查询、更新、显隐、视口平移和销毁。`)],-1),l(`section`,R,[x[5]||=l(`h2`,{class:`doc-h2`},`普通 Overlay 与 Descriptor`,-1),l(`p`,null,[p(v,{kind:`method`,to:`#api-service-add`},{default:f(()=>[...x[0]||=[a(`earth.overlays.add`,-1)]]),_:1}),x[2]||=a(` 创建普通 Overlay；需要标题、列表、拖动、关闭策略或固定连线时，使用 `,-1),p(v,{kind:`method`,to:`/components/services/descriptor#api-service-create-descriptor`},{default:f(()=>[...x[1]||=[a(`createDescriptor`,-1)]]),_:1}),x[3]||=a(`。 Descriptor 是“Overlay + 可选连接线 Element”的复合对象，不会出现在普通 Overlay 的 get/query 结果中。 `,-1)]),p(w,{type:`info`,closable:!1,"show-icon":``,title:`坐标跟随当前 View 投影`},{default:f(()=>[...x[4]||=[a(` position 使用当前 View 投影坐标；offset、PanIntoViewSpec.margin 和 DOM 尺寸使用 CSS 像素。没有 position 的 Overlay 保持隐藏。 `,-1)]]),_:1})]),l(`section`,z,[p(h,{title:`创建、查询、更新与清理`,source:m(F),snippet:m(t),"source-lang":`vue`,"snippet-lang":`typescript`},{description:f(()=>[l(`p`,null,[x[7]||=a(` 示例实际运行 `,-1),p(v,{kind:`method`,to:`#api-service-add`},{default:f(()=>[...x[6]||=[a(`add`,-1)]]),_:1}),x[8]||=a(`、get、query、remove、clear，以及句柄的 update、setPosition、show、hide、panIntoView 和 destroy。销毁外部所有权节点后，示例再次触发调用方监听，证明引擎没有替调用方清理业务监听。 `,-1)])]),preview:f(()=>[p(P)]),_:1},8,[`source`,`snippet`])]),l(`section`,B,[x[11]||=l(`h2`,{class:`doc-h2`},`DOM 所有权`,-1),p(_,{columns:i,rows:s}),p(w,{class:`doc-prose__alert`,type:`warning`,closable:!1,"show-icon":``,title:`替换 element 时重新确认所有权`},{default:f(()=>[p(v,{kind:`method`,to:`#api-handle-update`},{default:f(()=>[...x[9]||=[a(`update`,-1)]]),_:1}),x[10]||=a(` 替换 element 而没有同时指定 ownership 时，新节点按 external 处理。所有权只决定节点移除责任，不会清空 textContent，也不会替调用方逐个 removeEventListener。 `,-1)]),_:1})]),l(`section`,V,[x[16]||=l(`h2`,{class:`doc-h2`},`查询与批量清理`,-1),p(E,{column:1,border:``},{default:f(()=>[p(T,{label:`get(id)`},{default:f(()=>[...x[12]||=[a(`不存在时返回 undefined；这是正常查询结果。`,-1)]]),_:1}),p(T,{label:`query()`},{default:f(()=>[...x[13]||=[a(`可以省略选择器查看全部普通 Overlay，也可组合 module、visible 与 predicate。`,-1)]]),_:1}),p(T,{label:`remove(selector)`},{default:f(()=>[...x[14]||=[a(`破坏性操作必须包含 id、ids、module、visible 或 predicate；空选择器会抛出 InvalidSelectorError。`,-1)]]),_:1}),p(T,{label:`clear()`},{default:f(()=>[...x[15]||=[a(`清空全部必须显式调用 clear；它同时销毁 Descriptor 及其连接线、DOM 与事件资源。`,-1)]]),_:1})]),_:1})]),l(`section`,H,[x[17]||=l(`h2`,{class:`doc-h2`},`服务与句柄方法`,-1),x[18]||=l(`h3`,{class:`doc-h3`},`OverlayService`,-1),p(_,{columns:u,rows:d}),x[19]||=l(`h3`,{class:`doc-h3`},`OverlayHandle`,-1),p(_,{columns:u,rows:y})]),p(S,{"type-names":b,"member-names":C,title:`Overlays 完整 API`,description:`这里直接列出普通 Overlay 的配置、查询条件、所有权、定位方式，以及 OverlayService 与 OverlayHandle 的全部相关成员；createDescriptor 由独立 Descriptor 页面说明。`})]),l(`aside`,U,[p(g,{title:`覆盖物（Overlays）`,items:n})])])}}});export{W as default};