import{A as e,At as t,B as n,L as r,M as i,Nt as a,P as o,Q as s,R as c,T as l,ct as u,fn as d,it as f,j as p,tt as m,x as h,xt as g,z as _,zt as v}from"./TypeExpression-D6csDz4V.js";import{B as y,H as b,V as x,W as S,a as C,n as w,t as T,z as E}from"./index-4uKXPGRf.js";import{n as D,t as O}from"./ShapesDemo-C-po3fPG.js";var k={class:`example-demo`},A={class:`example-demo__control-panel element-overview-demo__toolbar`},j={class:`example-demo__action-row`},M={class:`example-demo__action-group`},N={class:`example-demo__action-buttons`},P={class:`example-demo__feedback`,"aria-live":`polite`},F={class:`element-overview-demo__stage`},I=`docs-elements-overview`,L=`elements-overview-preview`,R=10,z=h(n({__name:`ElementOverviewDemo`,setup(n,{expose:r}){let h=t(null),v=a(null),y=a(null),b=a(null),x=a([]),S=t(0),T=e(()=>S.value===0?`中心位置`:`东侧位置`),E=e(()=>b.value===null?`未创建`:`${T.value} · ${b.value.visible?`已显示`:`已隐藏`}`),D=e(()=>b.value===null?`info`:b.value.visible?`success`:`warning`),O=e=>({symbol:{type:`circle`,radius:16,fill:{type:`solid`,color:`#409eff`},stroke:{color:`#ffffff`,width:4}},text:{text:`中心站 · ${e}`,fontSize:14,fontWeight:`bold`,offsetY:38,padding:[5,8,5,8],fill:{type:`solid`,color:`#1f2937`},stroke:{color:`#ffffff`,width:3},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.88)`},backgroundStroke:{color:`rgba(255, 255, 255, 0.98)`,width:2}}}),z=()=>{let e=v.value,t=x.value[S.value];e===null||t===void 0||e.view.animateFlyTo(t,{zoom:R,duration:450})},B=()=>{let e=v.value,t=x.value[0];if(e===null||t===void 0||y.value!==null)return;let n=e.elements.add({id:`quick-start-station`,module:`facilities`,layerId:L,data:{name:`中心站`,category:`station`},geometry:{type:`point`,controlPoints:[t]},style:O(`中心位置`)});y.value=n,b.value=n.state,S.value=0,z()},V=e=>{let t=y.value;t!==null&&(S.value=e,t.update({geometry:{type:`point`,controlPoints:[x.value[S.value]]},style:O(T.value)}),b.value=t.state,z())},H=()=>{let e=y.value;e!==null&&(e.update({visible:!e.state.visible}),b.value=e.state,z())},U=()=>{y.value?.remove(),y.value=null,b.value=null,S.value=0;let e=x.value[0];e!==void 0&&v.value?.view.animateFlyTo(e,{zoom:R,duration:450})};return r({reset:()=>{let e=x.value[0];if(e!==void 0){if(y.value===null){B();return}S.value=0,y.value.update({visible:!0,geometry:{type:`point`,controlPoints:[e]},style:O(`中心位置`)}),b.value=y.value.state,z()}},focusSelected:()=>{z()}}),m(()=>{if(h.value===null)return;let e=C({id:I,target:h.value,view:{zoom:R},controls:{zoom:!0,rotate:!1,attribution:!0}});w(e,`vector`).update({opacity:.5}),e.layers.add({kind:`vector`,id:L,zIndex:30,declutter:!0});let t=e.view.toProjectedCoordinates([116.4074,39.9042]);x.value=[t,[t[0]+12e3,t[1]+4e3]],v.value=e,e.view.flyTo(t,R),B()}),s(()=>{v.value?.destroy(),v.value=null,y.value=null,b.value=null}),(e,t)=>{let n=u(`el-button`),r=u(`el-tag`);return f(),o(`div`,k,[p(`div`,A,[p(`div`,j,[p(`div`,M,[p(`div`,N,[b.value===null?(f(),i(n,{key:0,type:`primary`,onClick:B},{default:g(()=>[...t[2]||=[c(`创建 Element`,-1)]]),_:1})):(f(),o(l,{key:1},[_(n,{type:`primary`,disabled:S.value===1,onClick:t[0]||=e=>V(1)},{default:g(()=>[...t[3]||=[c(`移动到东侧`,-1)]]),_:1},8,[`disabled`]),_(n,{disabled:S.value===0,onClick:t[1]||=e=>V(0)},{default:g(()=>[...t[4]||=[c(`移回中心`,-1)]]),_:1},8,[`disabled`]),_(n,{onClick:H},{default:g(()=>[c(d(b.value.visible?`隐藏`:`显示`),1)]),_:1}),_(n,{type:`danger`,plain:``,onClick:U},{default:g(()=>[...t[5]||=[c(`删除`,-1)]]),_:1})],64))])]),p(`div`,P,[_(r,{type:D.value,effect:`plain`},{default:g(()=>[c(`quick-start-station · `+d(E.value),1)]),_:1},8,[`type`])])])]),p(`div`,F,[p(`div`,{ref_key:`mapTarget`,ref:h,class:`example-stage`},null,512),_(r,{class:`element-overview-demo__map-status`,type:D.value,effect:`dark`},{default:g(()=>[c(`中心站 · `+d(E.value),1)]),_:1},8,[`type`])])])}}}),[[`__scopeId`,`data-v-3c26782c`]]),B=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, Element, ElementState, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-elements-overview';
const ELEMENT_LAYER_ID = 'elements-overview-preview';
const FOCUS_ZOOM = 10;

interface StationData {
  name: string;
  category: 'station';
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const stationRef = shallowRef<Element<StationData> | null>(null);
const stationState = shallowRef<Readonly<ElementState<StationData>> | null>(null);
const stationPositions = shallowRef<readonly Coordinate[]>([]);
const positionIndex = ref(0);
const positionLabel = computed(() => (positionIndex.value === 0 ? '中心位置' : '东侧位置'));
const statusLabel = computed(() => {
  if (stationState.value === null) return '未创建';
  return \`\${positionLabel.value} · \${stationState.value.visible ? '已显示' : '已隐藏'}\`;
});
const statusType = computed(() => (stationState.value === null ? 'info' : stationState.value.visible ? 'success' : 'warning'));

const createStationStyle = (location: string): StyleSpec => ({
  symbol: {
    type: 'circle',
    radius: 16,
    fill: { type: 'solid', color: '#409eff' },
    stroke: { color: '#ffffff', width: 4 }
  },
  text: {
    text: \`中心站 · \${location}\`,
    fontSize: 14,
    fontWeight: 'bold',
    offsetY: 38,
    padding: [5, 8, 5, 8],
    fill: { type: 'solid', color: '#1f2937' },
    stroke: { color: '#ffffff', width: 3 },
    backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.88)' },
    backgroundStroke: { color: 'rgba(255, 255, 255, 0.98)', width: 2 }
  }
});

const focusStation = () => {
  const earth = earthRef.value;
  const position = stationPositions.value[positionIndex.value];
  if (earth === null || position === undefined) return;
  earth.view.animateFlyTo(position, { zoom: FOCUS_ZOOM, duration: 450 });
};

const createStation = () => {
  const earth = earthRef.value;
  const center = stationPositions.value[0];
  if (earth === null || center === undefined || stationRef.value !== null) return;

  // #region element-quick-start
  const station = earth.elements.add<StationData>({
    id: 'quick-start-station',
    module: 'facilities',
    layerId: ELEMENT_LAYER_ID,
    data: { name: '中心站', category: 'station' },
    geometry: {
      type: 'point',
      controlPoints: [center]
    },
    style: createStationStyle('中心位置')
  });
  // #endregion element-quick-start

  stationRef.value = station;
  stationState.value = station.state;
  positionIndex.value = 0;
  focusStation();
};

const moveStation = (nextPositionIndex: 0 | 1) => {
  const station = stationRef.value;
  if (station === null) return;
  positionIndex.value = nextPositionIndex;
  station.update({
    geometry: {
      type: 'point',
      controlPoints: [stationPositions.value[positionIndex.value]!]
    },
    style: createStationStyle(positionLabel.value)
  });
  stationState.value = station.state;
  focusStation();
};

const toggleStation = () => {
  const station = stationRef.value;
  if (station === null) return;
  station.update({ visible: !station.state.visible });
  stationState.value = station.state;
  focusStation();
};

const removeStation = () => {
  stationRef.value?.remove();
  stationRef.value = null;
  stationState.value = null;
  positionIndex.value = 0;
  const center = stationPositions.value[0];
  if (center !== undefined) earthRef.value?.view.animateFlyTo(center, { zoom: FOCUS_ZOOM, duration: 450 });
};

const reset = () => {
  const center = stationPositions.value[0];
  if (center === undefined) return;
  if (stationRef.value === null) {
    createStation();
    return;
  }

  positionIndex.value = 0;
  stationRef.value.update({
    visible: true,
    geometry: { type: 'point', controlPoints: [center] },
    style: createStationStyle('中心位置')
  });
  stationState.value = stationRef.value.state;
  focusStation();
};

const focusSelected = () => {
  focusStation();
};

defineExpose({ reset, focusSelected });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: FOCUS_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.5 });
  earth.layers.add({ kind: 'vector', id: ELEMENT_LAYER_ID, zIndex: 30, declutter: true });

  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  stationPositions.value = [center, [center[0] + 12_000, center[1] + 4_000]];
  earthRef.value = earth;
  earth.view.flyTo(center, FOCUS_ZOOM);
  createStation();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  stationRef.value = null;
  stationState.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel element-overview-demo__toolbar">
      <div class="example-demo__action-row">
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons">
            <el-button v-if="stationState === null" type="primary" @click="createStation">创建 Element</el-button>
            <template v-else>
              <el-button type="primary" :disabled="positionIndex === 1" @click="moveStation(1)">移动到东侧</el-button>
              <el-button :disabled="positionIndex === 0" @click="moveStation(0)">移回中心</el-button>
              <el-button @click="toggleStation">{{ stationState.visible ? '隐藏' : '显示' }}</el-button>
              <el-button type="danger" plain @click="removeStation">删除</el-button>
            </template>
          </div>
        </div>
        <div class="example-demo__feedback" aria-live="polite">
          <el-tag :type="statusType" effect="plain">quick-start-station · {{ statusLabel }}</el-tag>
        </div>
      </div>
    </div>

    <div class="element-overview-demo__stage">
      <div ref="mapTarget" class="example-stage"></div>
      <el-tag class="element-overview-demo__map-status" :type="statusType" effect="dark">中心站 · {{ statusLabel }}</el-tag>
    </div>
  </div>
</template>

<style scoped>
.element-overview-demo__toolbar {
  align-items: center;
}

.element-overview-demo__stage {
  position: relative;
}

.element-overview-demo__map-status {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  pointer-events: none;
}
</style>
`,V={class:`doc-page-layout`},H={class:`doc-page`},U={id:`overview`,class:`doc-prose`},W={id:`example-element-quick-start`,class:`doc-prose`},G={id:`example-all-shapes`,class:`doc-prose`},K={id:`common-workflows`,class:`doc-prose`},q={id:`api-element`,class:`doc-prose`},J={id:`api-element-service`,class:`doc-prose`},Y={id:`state-model`,class:`doc-prose`},X={class:`doc-page-layout__aside`},Z=h(n({__name:`ElementOverviewView`,setup(e){let n=T(B,`element-quick-start`),i=T(O,`shape-gallery`),a=t(null),s=t(null),l=()=>a.value?.reset(),d=()=>a.value?.focusSelected(),m=()=>s.value?.reset(),h=()=>s.value?.focusSelected(),C=[{id:`overview`,label:`Element 是什么`},{id:`example-element-quick-start`,label:`创建第一个 Element`},{id:`example-all-shapes`,label:`Shape 视觉目录`},{id:`common-workflows`,label:`常用操作`},{id:`api-element`,label:`Element API`,children:[{id:`api-element-properties`,label:`属性`},{id:`api-element-methods`,label:`方法`}]},{id:`api-element-service`,label:`ElementService API`},{id:`state-model`,label:`状态模型与注意事项`,children:[{id:`geometry-details`,label:`完整静态几何与范围`}]},{id:`api`,label:`相关类型`}],w=[{prop:`name`,label:`属性`,width:170,presentation:`property`},{prop:`type`,label:`类型`,width:280,linkTypes:!0},{prop:`desc`,label:`说明`,width:460}],k=[{anchor:`api-property-id`,href:`/api/types#api-type-element-property-id`,name:`id`,type:`string`,desc:`当前 Earth 中的唯一身份；句柄生命周期内保持不变`},{anchor:`api-property-state`,href:`/api/types#api-type-element-property-state`,name:`state`,type:`Readonly<ElementState<T>>`,desc:`每次读取当前不可变业务状态快照，是持久状态的唯一真源`},{anchor:`api-property-geometry-details`,href:`/api/types#api-type-element-property-geometry-details`,name:`geometryDetails`,type:`ElementGeometryDetails`,desc:`从最新已提交 Shape 状态派生完整静态渲染几何、二维范围、范围角点、最终轮廓点和统一控制参数`},{anchor:`api-property-ol-feature`,href:`/api/types#api-type-element-property-ol-feature`,name:`olFeature`,type:`Feature<Geometry>`,desc:`高级 OpenLayers 逃生口；直接修改不会反向写回 ElementState`}],A=[{prop:`name`,label:`方法`,width:190,presentation:`method`},{prop:`use`,label:`适用场景`,width:250},{prop:`desc`,label:`说明`,width:460}],j=[{anchor:`api-element-method-update`,href:`/components/elements/update#api-method-element-update`,name:`update`,use:`已经持有目标句柄`,desc:`更新当前 Element；完整参数与返回值归属“更新、复制与显隐”页面`},{anchor:`api-element-method-remove`,href:`/components/elements/cleanup#api-method-element-remove`,name:`remove`,use:`删除当前句柄`,desc:`移除当前 Element；生命周期规则归属“删除与清理”页面`}],M=[{anchor:`api-service-method-add`,href:`/components/elements/create#api-method-add`,name:`add`,use:`创建`,desc:`提交完整 geometry、style 与业务字段，返回 Element 句柄`},{anchor:`api-service-method-get`,href:`/components/elements/query#api-method-get`,name:`get`,use:`按 ID 查询`,desc:`读取当前代次句柄；未找到时返回 undefined`},{anchor:`api-service-method-query`,href:`/components/elements/query#api-method-query`,name:`query`,use:`组合查询`,desc:`按 module、type、layerId、visible 等状态条件选择 Element`},{anchor:`api-service-method-update`,href:`/components/elements/update#api-method-service-update`,name:`update`,use:`批量更新`,desc:`对非空选择器命中的 Element 原子提交同一个 patch`},{anchor:`api-service-method-copy`,href:`/components/elements/update#api-method-copy`,name:`copy`,use:`创建副本`,desc:`复制规范状态并返回拥有新 ID 与新 Feature 的句柄`},{anchor:`api-service-method-hide`,href:`/components/elements/update#api-method-hide`,name:`hide`,use:`批量隐藏`,desc:`把非空选择器命中的业务 visible 状态设为 false`},{anchor:`api-service-method-show`,href:`/components/elements/update#api-method-show`,name:`show`,use:`批量显示`,desc:`把非空选择器命中的业务 visible 状态设为 true`},{anchor:`api-service-method-set-protection`,href:`/components/elements/protection#api-method-set-protection`,name:`setProtection`,use:`协同保护`,desc:`按 ID 应用保护、解锁或租约更新，并返回状态是否实际改变`},{anchor:`api-service-method-get-protection`,href:`/components/elements/protection#api-method-get-protection`,name:`getProtection`,use:`读取保护`,desc:`读取当前代次的保护快照；未保护时返回 undefined`},{anchor:`api-service-method-remove`,href:`/components/elements/cleanup#api-method-service-remove`,name:`remove`,use:`批量删除`,desc:`删除非空选择器命中的对象并返回删除数量`},{anchor:`api-service-method-clear`,href:`/components/elements/cleanup#api-method-clear`,name:`clear`,use:`清空全部`,desc:`显式移除当前 Earth 的全部 Element`},{anchor:`api-service-method-at-pixel`,href:`/components/elements/query#api-method-at-pixel`,name:`atPixel`,use:`屏幕命中`,desc:`返回指定 CSS 像素位置最先命中的 Element 与 Layer`},{anchor:`api-service-method-screen-extent`,href:`/components/elements/query#api-method-screen-extent`,name:`getScreenExtent`,use:`读取屏幕范围`,desc:`读取一个 Element 在当前视口内的 CSS 像素包围范围`}],N=[`Element`,`ElementState`,`ElementGeometryDetails`,`ElementRenderGeometry`,`MapExtent`,`ElementService`],P={Element:[`constructor`,`id`,`state`,`geometryDetails`,`olFeature`],ElementService:[]};return(e,t)=>{let T=u(`el-alert`),F=u(`el-link`),I=u(`el-card`),L=u(`el-col`),R=u(`el-row`),Z=u(`el-descriptions-item`),Q=u(`el-descriptions`);return f(),o(`div`,V,[p(`article`,H,[t[80]||=p(`header`,{class:`doc-hero`},[p(`span`,{class:`doc-hero__eyebrow`},`地图元素`),p(`h1`,null,`Element 概览`),p(`p`,null,`先创建一个 Element，再通过可搜索、可分类的视觉目录查看全部 20 种 Shape，最后按任务找到查询、更新、显隐和清理 API。`)],-1),p(`section`,U,[t[8]||=p(`h2`,{class:`doc-h2`},`Element 是什么`,-1),p(`p`,null,[t[2]||=c(` Element 是 2.0 中统一的业务地图对象，`,-1),t[3]||=p(`code`,null,`geometry.type`,-1),t[4]||=c(` 决定它显示成哪一种 Shape。从 `,-1),_(S,{kind:`property`,to:`/components/core/earth#api-property-elements`},{default:g(()=>[...t[0]||=[c(`earth.elements`,-1)]]),_:1}),t[5]||=c(` 创建或查询后，你会得到稳定的 `,-1),_(S,{kind:`type`,to:`/api/types#api-type-element`},{default:g(()=>[...t[1]||=[c(`Element`,-1)]]),_:1}),t[6]||=c(` 句柄。 `,-1)]),_(T,{type:`info`,closable:!1,"show-icon":``,title:`不需要为每种图形创建一种图层`},{default:g(()=>[...t[7]||=[c(` Point、路径、面、参数图形和箭头都能放进同一个 VectorLayer；业务分组使用 module，渲染归属使用 layerId。 `,-1)]]),_:1})]),p(`section`,W,[_(y,{title:`创建第一个 Element`,source:v(B),snippet:v(n),"source-lang":`vue`,"snippet-lang":`typescript`,"show-reset":``,"show-focus":``,onReset:l,onFocus:d},{description:g(()=>[p(`p`,null,[t[10]||=c(` 调用 `,-1),_(S,{kind:`method`,to:`/components/elements/create#api-method-add`},{default:g(()=>[...t[9]||=[c(`earth.elements.add`,-1)]]),_:1}),t[11]||=c(` 一次提交图形、样式和业务数据。示例按钮继续演示移动、显隐与删除，结果直接体现在地图上。 `,-1)])]),preview:g(()=>[_(z,{ref_key:`elementOverviewDemoRef`,ref:a},null,512)]),_:1},8,[`source`,`snippet`])]),p(`section`,G,[_(y,{title:`全部 20 种 Shape 视觉目录`,source:v(O),snippet:v(i),"source-lang":`vue`,"snippet-lang":`typescript`,"show-reset":``,"show-focus":``,onReset:m,onFocus:h},{description:g(()=>[p(`p`,null,[t[15]||=c(` 预览区一次放大一个 `,-1),_(S,{kind:`property`,to:`/components/elements/shapes#api-value-shape-types`},{default:g(()=>[...t[12]||=[c(`shapeTypes`,-1)]]),_:1}),t[16]||=c(` 中的图形，并用编号标出 `,-1),t[17]||=p(`code`,null,`controlPoints`,-1),t[18]||=c(` 的输入顺序。可以按中文名、英文类型搜索或按类别筛选；选择卡片后，地图会重新聚焦并以宽描边高亮目标。每个图形都提供最小创建代码和 `,-1),_(S,{kind:`type`,to:`/api/types#api-type-shape-input`},{default:g(()=>[...t[13]||=[c(`ShapeInput`,-1)]]),_:1}),t[19]||=c(` 等相关类型入口。选中图形后，示例还会读取 `,-1),_(S,{kind:`property`,to:`#api-property-geometry-details`},{default:g(()=>[...t[14]||=[c(`Element.geometryDetails`,-1)]]),_:1}),t[20]||=c(` ，统一显示范围角点、最终轮廓点、规范控制点以及 Circle 圆心和双单位半径；详细控制点规则见 `,-1),t[21]||=p(`a`,{href:`/components/elements/shapes`},`图形类型（Shapes）`,-1),t[22]||=c(`。 `,-1)])]),preview:g(()=>[_(D,{ref_key:`shapesDemoRef`,ref:s},null,512)]),_:1},8,[`source`,`snippet`])]),p(`section`,K,[t[38]||=p(`h2`,{class:`doc-h2`},`常用操作`,-1),t[39]||=p(`p`,null,`概览只负责告诉你该选哪个入口；完整参数、边界规则与可运行示例放在对应任务页面。`,-1),_(R,{gutter:16,class:`element-overview__workflow-grid`},{default:g(()=>[_(L,{xs:24,sm:12},{default:g(()=>[_(I,{shadow:`never`,class:`element-overview__workflow-card`},{header:g(()=>[...t[23]||=[p(`strong`,null,`1. 创建`,-1)]]),default:g(()=>[t[25]||=p(`p`,null,[c(`使用 `),p(`code`,null,`elements.add(input)`),c(` 创建一个完整 Element。`)],-1),_(F,{type:`primary`,href:`/components/elements/create`},{default:g(()=>[...t[24]||=[c(`查看创建参数与示例`,-1)]]),_:1})]),_:1})]),_:1}),_(L,{xs:24,sm:12},{default:g(()=>[_(I,{shadow:`never`,class:`element-overview__workflow-card`},{header:g(()=>[...t[26]||=[p(`strong`,null,`2. 查询与选择`,-1)]]),default:g(()=>[t[28]||=p(`p`,null,[c(`已知 ID 用 `),p(`code`,null,`get`),c(`，组合条件用 `),p(`code`,null,`query`),c(`，屏幕命中用 `),p(`code`,null,`atPixel`),c(`。`)],-1),_(F,{type:`primary`,href:`/components/elements/query`},{default:g(()=>[...t[27]||=[c(`查看选择器与屏幕查询`,-1)]]),_:1})]),_:1})]),_:1}),_(L,{xs:24,sm:12},{default:g(()=>[_(I,{shadow:`never`,class:`element-overview__workflow-card`},{header:g(()=>[...t[29]||=[p(`strong`,null,`3. 更新、复制与显隐`,-1)]]),default:g(()=>[t[31]||=p(`p`,null,[c(`单个句柄调用 `),p(`code`,null,`update`),c(`；批量操作、复制和显隐从 `),p(`code`,null,`earth.elements`),c(` 进入。`)],-1),_(F,{type:`primary`,href:`/components/elements/update`},{default:g(()=>[...t[30]||=[c(`查看更新与显隐示例`,-1)]]),_:1})]),_:1})]),_:1}),_(L,{xs:24,sm:12},{default:g(()=>[_(I,{shadow:`never`,class:`element-overview__workflow-card`},{header:g(()=>[...t[32]||=[p(`strong`,null,`4. 协同保护`,-1)]]),default:g(()=>[t[34]||=p(`p`,null,`按 Element ID 同步编辑占用状态，并显示操作人、遮罩与交互禁用反馈。`,-1),_(F,{type:`primary`,href:`/components/elements/protection`},{default:g(()=>[...t[33]||=[c(`查看点线面保护与并发边界`,-1)]]),_:1})]),_:1})]),_:1}),_(L,{xs:24,sm:12},{default:g(()=>[_(I,{shadow:`never`,class:`element-overview__workflow-card`},{header:g(()=>[...t[35]||=[p(`strong`,null,`5. 删除与清理`,-1)]]),default:g(()=>[t[37]||=p(`p`,null,[c(`删除当前对象用 `),p(`code`,null,`element.remove()`),c(`；按条件删除用 `),p(`code`,null,`elements.remove()`),c(`。`)],-1),_(F,{type:`primary`,href:`/components/elements/cleanup`},{default:g(()=>[...t[36]||=[c(`查看清理范围与生命周期`,-1)]]),_:1})]),_:1})]),_:1})]),_:1})]),p(`section`,q,[t[40]||=p(`h2`,{class:`doc-h2`},`Element API`,-1),t[41]||=p(`p`,null,`Element 是由 ElementService 创建和返回的实时句柄，不能由业务代码直接构造。`,-1),t[42]||=p(`h3`,{id:`api-element-properties`,class:`doc-h3`},`属性`,-1),_(x,{columns:w,rows:k}),t[43]||=p(`h3`,{id:`api-element-methods`,class:`doc-h3`},`方法`,-1),_(x,{columns:A,rows:j})]),p(`section`,J,[t[44]||=p(`h2`,{class:`doc-h2`},`ElementService API`,-1),t[45]||=p(`p`,null,`下表是完整方法索引。点击方法名进入它的归属页面，查看参数、返回值、异常规则和可运行示例；完整类型签名也可从页面末尾的“相关类型”进入。`,-1),_(x,{columns:A,rows:M})]),p(`section`,Y,[t[78]||=p(`h2`,{class:`doc-h2`},`状态模型与注意事项`,-1),_(Q,{column:1,border:``},{default:g(()=>[_(Z,{label:`ID`},{default:g(()=>[...t[46]||=[c(`当前 Earth 中的唯一身份；删除后用相同 ID 重建会得到新的句柄代次。`,-1)]]),_:1}),_(Z,{label:`Type`},{default:g(()=>[...t[47]||=[c(`来自 geometry.type，决定业务图形；它不等同于 OpenLayers GeometryType。`,-1)]]),_:1}),_(Z,{label:`Module`},{default:g(()=>[...t[48]||=[c(`业务分组，可用于查询、批量更新、显隐与删除。`,-1)]]),_:1}),_(Z,{label:`Layer`},{default:g(()=>[...t[49]||=[c(`渲染与资源分组；同一 VectorLayer 可以承载不同 Shape。`,-1)]]),_:1})]),_:1}),t[79]||=p(`h3`,{id:`geometry-details`,class:`doc-h3`},`完整静态几何与范围`,-1),p(`p`,null,[_(S,{kind:`property`,to:`#api-property-geometry-details`},{default:g(()=>[...t[50]||=[c(`Element.geometryDetails`,-1)]]),_:1}),t[54]||=c(` 从最新已提交的 Shape 状态计算，不会把派生坐标写回 `,-1),_(S,{kind:`property`,to:`#api-property-state`},{default:g(()=>[...t[51]||=[c(`Element.state`,-1)]]),_:1}),t[55]||=c(` 。返回的 `,-1),_(S,{kind:`type`,to:`#api-type-element-geometry-details`},{default:g(()=>[...t[52]||=[c(`ElementGeometryDetails`,-1)]]),_:1}),t[56]||=c(` 是一份独立的不可变快照。它保留类型为 `,-1),_(S,{kind:`type`,to:`#api-type-element-render-geometry`},{default:g(()=>[...t[53]||=[c(`ElementRenderGeometry`,-1)]]),_:1}),t[57]||=c(` 的 `,-1),t[58]||=p(`code`,null,`renderGeometry`,-1),t[59]||=c(` 和 `,-1),t[60]||=p(`code`,null,`extent`,-1),t[61]||=c(` 这两个无损字段，同时提供无需再次判断 Shape 类型的统一便利字段。 `,-1)]),p(`ul`,null,[t[68]||=r(`<li data-v-6c984a56><code data-v-6c984a56>extentPoints</code> 固定返回四个二维范围角点，顺序为 <code data-v-6c984a56>[minX, minY]</code>、<code data-v-6c984a56>[maxX, minY]</code>、<code data-v-6c984a56>[maxX, maxY]</code>、<code data-v-6c984a56>[minX, maxY]</code>。 </li><li data-v-6c984a56><code data-v-6c984a56>rangePoints</code> 统一使用坐标组：Point 为 <code data-v-6c984a56>[[point]]</code>，Polyline 为 <code data-v-6c984a56>[path]</code>，Polygon 和 Plot 面为完整 rings；Circle 返回冻结的空数组，不离散圆周。 </li><li data-v-6c984a56><code data-v-6c984a56>controlPoints</code> 返回最新已提交的规范控制点；Circle 不使用控制点，因此固定为 <code data-v-6c984a56>null</code>。它与最终轮廓点含义不同。</li><li data-v-6c984a56> 箭头和其他派生面会返回 <code data-v-6c984a56>type: &#39;polygon&#39;</code>；<code data-v-6c984a56>coordinates</code> 是完整的 polygon rings，不再只是绘制时输入的 <code data-v-6c984a56>controlPoints</code>。 </li><li data-v-6c984a56> Circle 的便利字段 <code data-v-6c984a56>center</code> 返回 View 投影圆心，<code data-v-6c984a56>radius</code> 同时提供米制 <code data-v-6c984a56>meters</code> 和 View 投影单位下的 <code data-v-6c984a56>projected</code>；其他 Shape 的两个字段均为 <code data-v-6c984a56>null</code>。 </li>`,5),p(`li`,null,[t[63]||=p(`code`,null,`extent`,-1),t[64]||=c(` 是 `,-1),_(S,{kind:`type`,to:`#api-type-map-extent`},{default:g(()=>[...t[62]||=[c(`MapExtent`,-1)]]),_:1}),t[65]||=c(` ，顺序为 `,-1),t[66]||=p(`code`,null,`[minX, minY, maxX, maxY]`,-1),t[67]||=c(`，坐标使用当前 View 投影。 `,-1)]),t[69]||=p(`li`,null,[c(` 需要经纬度时用 `),p(`code`,null,`earth.view.toGeographicCoordinates()`),c(` 显式逐个转换 Coordinate；Polygon 需逐 ring 转换，Circle 只转换 `),p(`code`,null,`center`),c(`，不能把投影半径当作坐标转换。 `)],-1)]),_(T,{class:`doc-prose__alert`,type:`info`,closable:!1,"show-icon":``,title:`范围描述规范静态几何`},{default:g(()=>[t[71]||=p(`code`,null,`geometryDetails`,-1),t[72]||=c(` 不包含描边、文字、图标等样式外扩，也不包含动画帧、交互预览或世界环绕产生的临时副本。需要当前视口中的 CSS 像素视觉范围时，请使用 `,-1),_(S,{kind:`method`,to:`/components/elements/query#api-method-screen-extent`},{default:g(()=>[...t[70]||=[c(`earth.elements.getScreenExtent`,-1)]]),_:1}),t[73]||=c(` 。它会保留已提交的坐标，不会把第 N 个世界中的坐标自动归一化到基础世界。 `,-1)]),_:1}),_(T,{class:`doc-prose__alert`,type:`warning`,closable:!1,"show-icon":``,title:`持久修改请走公开 API`},{default:g(()=>[_(S,{kind:`property`,to:`#api-property-state`},{default:g(()=>[...t[74]||=[c(`Element.state`,-1)]]),_:1}),t[76]||=c(` 是最新的只读状态快照。OpenLayers Feature、Geometry 和 Style 只是渲染投影，直接修改 `,-1),_(S,{kind:`property`,to:`#api-property-ol-feature`},{default:g(()=>[...t[75]||=[c(`olFeature`,-1)]]),_:1}),t[77]||=c(` 不会反向写回业务状态。 `,-1)]),_:1})]),_(E,{"type-names":N,"member-names":P,title:`Element 完整状态 API`,description:`完整列出 Element 的受限构造函数、公开属性、静态几何详情类型和 ElementState 八个业务字段；ElementService 方法在上方总索引中按任务进入各自规范页面。`})]),p(`aside`,X,[_(b,{title:`Element 概览`,items:C})])])}}}),[[`__scopeId`,`data-v-6c984a56`]]);export{Z as default};