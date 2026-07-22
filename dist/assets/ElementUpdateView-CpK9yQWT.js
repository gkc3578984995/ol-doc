import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,it as d,j as f,ot as p,tt as m,x as h,xt as g,z as _,zt as v}from"./TypeExpression-D6csDz4V.js";import{B as y,H as b,V as x,W as S,a as C,n as w,t as T,z as E}from"./index-4uKXPGRf.js";var D={class:`example-demo`},O={class:`example-demo__control-panel element-update-demo__controls`},k={class:`example-demo__control-grid element-update-demo__settings`},A={class:`example-demo__field element-update-demo__field`},j={class:`example-demo__field element-update-demo__field`},M={class:`example-demo__field element-update-demo__field`},N={class:`example-demo__action-row`},P={class:`example-demo__actions element-update-demo__actions`},ee={class:`example-demo__action-group element-update-demo__action-group`,role:`group`,"aria-label":`更新与复制操作`},F={class:`example-demo__action-buttons`},I={class:`example-demo__action-group element-update-demo__action-group`,role:`group`,"aria-label":`显隐操作`},L={class:`example-demo__action-buttons`},R={class:`example-demo__feedback element-update-demo__feedback`,"aria-live":`polite`},z=`docs-elements-update`,B=`update-demo-elements`,V=`update-source`,H=9.5,U=10,W=h(n({__name:`ElementUpdateDemo`,setup(n){let h=t(null),v=i(null),y=t(V),b=t([]),x=t(10),S=t(`#e6a23c`),T=t(`等待操作`),E=t(0),W=new Map,G=0,K=e(()=>b.value.find(({id:e})=>e===y.value)),q=(e,t,n)=>({symbol:{type:`circle`,radius:n?20:14,fill:{type:`solid`,color:t},stroke:{color:n?`#f59e0b`:`#ffffff`,width:n?5:3}},text:{text:e,offsetY:n?42:36,fontSize:n?14:12,fontWeight:n?`bold`:`normal`,padding:[4,7,4,7],fill:{type:`solid`,color:`#111827`},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.94)`},backgroundStroke:{color:n?`#f59e0b`:`#ffffff`,width:n?2:1}},zIndex:n?30:20}),J=e=>{let t=W.get(e.id);return t===void 0?e.state.module===`reviewed`?`#8b5cf6`:e.state.module===`copies`?`#67c23a`:`#409eff`:t},Y=()=>{let e=v.value;if(e!==null)for(let t of e.elements.query())t.update({style:q(t.state.data?.label??t.id,J(t),t.id===y.value)})},X=()=>{let e=v.value;e!==null&&(b.value=e.elements.query().map(({state:e})=>({id:e.id,module:e.module??`—`,visible:e.visible,label:e.data?.label??e.id,revision:e.data?.revision??0})),b.value.some(({id:e})=>e===y.value)||(y.value=b.value[0]?.id??``),Y())},Z=()=>v.value?.elements.get(y.value),Q=()=>{let e=Z();if(e===void 0||e.state.geometry.type!==`point`)return;let[t]=e.state.geometry.controlPoints;v.value?.view.animateFlyTo(t,{zoom:U,duration:450})},$=()=>{let e=Z();e!==void 0&&(Y(),Q(),T.value=e.state.visible?`已定位：${e.state.data?.label??e.id}`:`已选择：${e.state.data?.label??e.id}（当前隐藏）`)},te=e=>{y.value=e.id,$()},ne=()=>{let e=Z();if(e===void 0||e.state.geometry.type!==`point`)return;let[t]=e.state.geometry.controlPoints,n=(e.state.data?.revision??0)+1,r=`${e.state.data?.label?.replace(/ · v\d+$/,``)??e.id} · v${n}`;e.update({module:`edited`,data:{label:r,revision:n},geometry:{type:`point`,controlPoints:[[t[0]+x.value*1e3,t[1]]]}}),W.set(e.id,S.value??`#e6a23c`),E.value=1,X(),Q(),T.value=`update() 已移动并改色：${r}`},re=()=>{let e=v.value,t=Z();if(e===null||t===void 0||t.state.geometry.type!==`point`)return;G+=1;let[n]=t.state.geometry.controlPoints,r=e.elements.copy(t.id,{module:`copies`,visible:!0,data:{label:`副本 ${G}`,revision:0},geometry:{type:`point`,controlPoints:[[n[0]+1e4,n[1]-8e3]]}});W.set(r.id,`#67c23a`),y.value=r.id,E.value=1,X(),Q(),T.value=`copy() 已创建并定位：副本 ${G}`},ie=()=>{let e=v.value;if(e===null)return;let t=e.elements.update({module:`copies`},{module:`reviewed`,visible:!0});for(let e of t)W.set(e.id,`#8b5cf6`);t[0]!==void 0&&(y.value=t[0].id),E.value=t.length,X(),t.length>0&&Q(),T.value=`批量 update() 已将 ${t.length} 个副本标记为 reviewed`},ae=()=>{let e=v.value?.elements.hide({id:y.value})??[];E.value=e.length,X(),Q(),T.value=`hide() 已隐藏 ${e.length} 个 Element`},oe=()=>{let e=v.value?.elements.show({id:y.value})??[];E.value=e.length,X(),Q(),T.value=`show() 已显示 ${e.length} 个 Element`};return m(()=>{if(h.value===null)return;let e=C({id:z,target:h.value,view:{zoom:H},controls:{zoom:!0,rotate:!1,attribution:!0}});w(e,`vector`).update({opacity:.5}),e.layers.add({kind:`vector`,id:B,zIndex:20,declutter:!0});let t=e.view.toProjectedCoordinates([116.4074,39.9042]);e.view.flyTo(t,H),e.elements.add({id:V,module:`working`,layerId:B,data:{label:`源对象`,revision:0},geometry:{type:`point`,controlPoints:[t]},style:q(`源对象`,`#409eff`,!0)}),W.set(V,`#409eff`),v.value=e,E.value=1,T.value=`已创建源对象，可从 update() 开始体验`,X()}),o(()=>{v.value?.destroy(),v.value=null,W.clear()}),(e,t)=>{let n=l(`el-option`),i=l(`el-select`),o=l(`el-input-number`),m=l(`el-color-picker`),v=l(`el-button`),C=l(`el-tag`),w=l(`el-table-column`),z=l(`el-table`);return d(),a(`div`,D,[f(`div`,O,[f(`div`,k,[f(`div`,A,[t[3]||=f(`span`,null,`当前 Element`,-1),_(i,{modelValue:y.value,"onUpdate:modelValue":t[0]||=e=>y.value=e,"aria-label":`选择 Element`,onChange:$},{default:g(()=>[(d(!0),a(c,null,p(b.value,e=>(d(),r(n,{key:e.id,label:`${e.label} · ${e.id}`,value:e.id},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),f(`div`,j,[t[4]||=f(`span`,null,`横向移动（千米）`,-1),_(o,{modelValue:x.value,"onUpdate:modelValue":t[1]||=e=>x.value=e,min:-20,max:20,step:2,"aria-label":`横向移动千米`},null,8,[`modelValue`])]),f(`div`,M,[t[5]||=f(`span`,null,`更新颜色`,-1),_(m,{modelValue:S.value,"onUpdate:modelValue":t[2]||=e=>S.value=e,"aria-label":`更新颜色`},null,8,[`modelValue`])])]),f(`div`,N,[f(`div`,P,[f(`div`,ee,[f(`div`,F,[_(v,{type:`primary`,disabled:!y.value,onClick:ne},{default:g(()=>[...t[6]||=[s(`句柄 update()`,-1)]]),_:1},8,[`disabled`]),_(v,{disabled:!y.value,onClick:re},{default:g(()=>[...t[7]||=[s(`copy()`,-1)]]),_:1},8,[`disabled`]),_(v,{onClick:ie},{default:g(()=>[...t[8]||=[s(`批量 update()`,-1)]]),_:1})])]),f(`div`,I,[f(`div`,L,[_(v,{disabled:!y.value,onClick:ae},{default:g(()=>[...t[9]||=[s(`hide()`,-1)]]),_:1},8,[`disabled`]),_(v,{disabled:!y.value,onClick:oe},{default:g(()=>[...t[10]||=[s(`show()`,-1)]]),_:1},8,[`disabled`])])])]),f(`div`,R,[_(C,{type:`primary`,effect:`plain`},{default:g(()=>[s(`当前：`+u(K.value?.label??`无`),1)]),_:1}),_(C,{type:`success`,effect:`plain`},{default:g(()=>[s(`本次影响 `+u(E.value)+` 个`,1)]),_:1}),_(C,{effect:`plain`},{default:g(()=>[s(u(T.value),1)]),_:1})])])]),f(`div`,{ref_key:`mapTarget`,ref:h,class:`example-stage`},null,512),_(z,{data:b.value,border:``,size:`small`,"row-key":`id`,"highlight-current-row":``,"current-row-key":y.value,"empty-text":`当前 Earth 中没有 Element`,class:`element-update-demo__table`,onRowClick:te},{default:g(()=>[_(w,{prop:`label`,label:`名称`,"min-width":`130`}),_(w,{prop:`id`,label:`ID`,"min-width":`170`}),_(w,{prop:`module`,label:`Module`,"min-width":`110`}),_(w,{prop:`revision`,label:`版本`,width:`72`}),_(w,{label:`可见`,width:`72`},{default:g(e=>[s(u(e.row.visible?`是`:`否`),1)]),_:1})]),_:1},8,[`data`,`current-row-key`])])}}}),[[`__scopeId`,`data-v-07b3a3f9`]]),G=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth, Element, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-elements-update';
const BUSINESS_LAYER_ID = 'update-demo-elements';
const SOURCE_ID = 'update-source';
const MAP_ZOOM = 9.5;
const FOCUS_ZOOM = 10;

interface DemoData {
  label: string;
  revision: number;
}

interface ElementRow {
  id: string;
  module: string;
  visible: boolean;
  label: string;
  revision: number;
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const selectedId = ref(SOURCE_ID);
const rows = ref<ElementRow[]>([]);
const offsetKm = ref(10);
const color = ref<string | null>('#e6a23c');
const status = ref('等待操作');
const affectedCount = ref(0);
const elementColors = new Map<string, string>();
let copyCount = 0;

const selectedRow = computed(() => rows.value.find(({ id }) => id === selectedId.value));

const pointStyle = (label: string, fillColor: string, selected: boolean): StyleSpec => ({
  symbol: {
    type: 'circle',
    radius: selected ? 20 : 14,
    fill: { type: 'solid', color: fillColor },
    stroke: { color: selected ? '#f59e0b' : '#ffffff', width: selected ? 5 : 3 }
  },
  text: {
    text: label,
    offsetY: selected ? 42 : 36,
    fontSize: selected ? 14 : 12,
    fontWeight: selected ? 'bold' : 'normal',
    padding: [4, 7, 4, 7],
    fill: { type: 'solid', color: '#111827' },
    backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.94)' },
    backgroundStroke: { color: selected ? '#f59e0b' : '#ffffff', width: selected ? 2 : 1 }
  },
  zIndex: selected ? 30 : 20
});

const colorFor = (element: Element<DemoData>) => {
  const stored = elementColors.get(element.id);
  if (stored !== undefined) return stored;
  if (element.state.module === 'reviewed') return '#8b5cf6';
  if (element.state.module === 'copies') return '#67c23a';
  return '#409eff';
};

const updatePresentation = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  for (const element of earth.elements.query<DemoData>()) {
    element.update({
      style: pointStyle(element.state.data?.label ?? element.id, colorFor(element), element.id === selectedId.value)
    });
  }
};

const refresh = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  rows.value = earth.elements.query<DemoData>().map(({ state }) => ({
    id: state.id,
    module: state.module ?? '—',
    visible: state.visible,
    label: state.data?.label ?? state.id,
    revision: state.data?.revision ?? 0
  }));
  if (!rows.value.some(({ id }) => id === selectedId.value)) selectedId.value = rows.value[0]?.id ?? '';
  updatePresentation();
};

const selected = (): Element<DemoData> | undefined => earthRef.value?.elements.get<DemoData>(selectedId.value);

const animateToSelected = () => {
  const element = selected();
  if (element === undefined || element.state.geometry.type !== 'point') return;
  const [center] = element.state.geometry.controlPoints;
  earthRef.value?.view.animateFlyTo(center, { zoom: FOCUS_ZOOM, duration: 450 });
};

const focusSelected = () => {
  const element = selected();
  if (element === undefined) return;
  updatePresentation();
  animateToSelected();
  status.value = element.state.visible
    ? \`已定位：\${element.state.data?.label ?? element.id}\`
    : \`已选择：\${element.state.data?.label ?? element.id}（当前隐藏）\`;
};

const selectRow = (row: ElementRow) => {
  selectedId.value = row.id;
  focusSelected();
};

// #region element-update
const updateHandle = () => {
  const element = selected();
  if (element === undefined || element.state.geometry.type !== 'point') return;
  const [center] = element.state.geometry.controlPoints;
  const revision = (element.state.data?.revision ?? 0) + 1;
  const label = \`\${element.state.data?.label?.replace(/ · v\\d+$/, '') ?? element.id} · v\${revision}\`;
  element.update({
    module: 'edited',
    data: { label, revision },
    geometry: { type: 'point', controlPoints: [[center[0] + offsetKm.value * 1_000, center[1]]] }
  });
  elementColors.set(element.id, color.value ?? '#e6a23c');
  affectedCount.value = 1;
  refresh();
  animateToSelected();
  status.value = \`update() 已移动并改色：\${label}\`;
};

const copySelected = () => {
  const earth = earthRef.value;
  const element = selected();
  if (earth === null || element === undefined || element.state.geometry.type !== 'point') return;
  copyCount += 1;
  const [center] = element.state.geometry.controlPoints;
  const copy = earth.elements.copy<DemoData>(element.id, {
    module: 'copies',
    visible: true,
    data: { label: \`副本 \${copyCount}\`, revision: 0 },
    geometry: { type: 'point', controlPoints: [[center[0] + 10_000, center[1] - 8_000]] }
  });
  elementColors.set(copy.id, '#67c23a');
  selectedId.value = copy.id;
  affectedCount.value = 1;
  refresh();
  animateToSelected();
  status.value = \`copy() 已创建并定位：副本 \${copyCount}\`;
};

const batchUpdate = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  const updated = earth.elements.update<DemoData>({ module: 'copies' }, { module: 'reviewed', visible: true });
  for (const element of updated) elementColors.set(element.id, '#8b5cf6');
  if (updated[0] !== undefined) selectedId.value = updated[0].id;
  affectedCount.value = updated.length;
  refresh();
  if (updated.length > 0) animateToSelected();
  status.value = \`批量 update() 已将 \${updated.length} 个副本标记为 reviewed\`;
};

const hideSelected = () => {
  const hidden = earthRef.value?.elements.hide({ id: selectedId.value }) ?? [];
  affectedCount.value = hidden.length;
  refresh();
  animateToSelected();
  status.value = \`hide() 已隐藏 \${hidden.length} 个 Element\`;
};

const showSelected = () => {
  const shown = earthRef.value?.elements.show({ id: selectedId.value }) ?? [];
  affectedCount.value = shown.length;
  refresh();
  animateToSelected();
  status.value = \`show() 已显示 \${shown.length} 个 Element\`;
};
// #endregion element-update

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: MAP_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.5 });
  earth.layers.add({ kind: 'vector', id: BUSINESS_LAYER_ID, zIndex: 20, declutter: true });
  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earth.view.flyTo(center, MAP_ZOOM);
  earth.elements.add<DemoData>({
    id: SOURCE_ID,
    module: 'working',
    layerId: BUSINESS_LAYER_ID,
    data: { label: '源对象', revision: 0 },
    geometry: { type: 'point', controlPoints: [center] },
    style: pointStyle('源对象', '#409eff', true)
  });
  elementColors.set(SOURCE_ID, '#409eff');
  earthRef.value = earth;
  affectedCount.value = 1;
  status.value = '已创建源对象，可从 update() 开始体验';
  refresh();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  elementColors.clear();
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel element-update-demo__controls">
      <div class="example-demo__control-grid element-update-demo__settings">
        <div class="example-demo__field element-update-demo__field">
          <span>当前 Element</span>
          <el-select v-model="selectedId" aria-label="选择 Element" @change="focusSelected">
            <el-option v-for="row in rows" :key="row.id" :label="\`\${row.label} · \${row.id}\`" :value="row.id" />
          </el-select>
        </div>
        <div class="example-demo__field element-update-demo__field">
          <span>横向移动（千米）</span>
          <el-input-number v-model="offsetKm" :min="-20" :max="20" :step="2" aria-label="横向移动千米" />
        </div>
        <div class="example-demo__field element-update-demo__field">
          <span>更新颜色</span>
          <el-color-picker v-model="color" aria-label="更新颜色" />
        </div>
      </div>
      <div class="example-demo__action-row">
        <div class="example-demo__actions element-update-demo__actions">
          <div class="example-demo__action-group element-update-demo__action-group" role="group" aria-label="更新与复制操作">
            <div class="example-demo__action-buttons">
              <el-button type="primary" :disabled="!selectedId" @click="updateHandle">句柄 update()</el-button>
              <el-button :disabled="!selectedId" @click="copySelected">copy()</el-button>
              <el-button @click="batchUpdate">批量 update()</el-button>
            </div>
          </div>
          <div class="example-demo__action-group element-update-demo__action-group" role="group" aria-label="显隐操作">
            <div class="example-demo__action-buttons">
              <el-button :disabled="!selectedId" @click="hideSelected">hide()</el-button>
              <el-button :disabled="!selectedId" @click="showSelected">show()</el-button>
            </div>
          </div>
        </div>
        <div class="example-demo__feedback element-update-demo__feedback" aria-live="polite">
          <el-tag type="primary" effect="plain">当前：{{ selectedRow?.label ?? '无' }}</el-tag>
          <el-tag type="success" effect="plain">本次影响 {{ affectedCount }} 个</el-tag>
          <el-tag effect="plain">{{ status }}</el-tag>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-table
      :data="rows"
      border
      size="small"
      row-key="id"
      highlight-current-row
      :current-row-key="selectedId"
      empty-text="当前 Earth 中没有 Element"
      class="element-update-demo__table"
      @row-click="selectRow"
    >
      <el-table-column prop="label" label="名称" min-width="130" />
      <el-table-column prop="id" label="ID" min-width="170" />
      <el-table-column prop="module" label="Module" min-width="110" />
      <el-table-column prop="revision" label="版本" width="72" />
      <el-table-column label="可见" width="72">
        <template #default="scope">{{ scope.row.visible ? '是' : '否' }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.element-update-demo__settings {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 170px), 1fr));
}

.element-update-demo__field :deep(.el-select) {
  width: 100%;
  max-width: 220px;
}

.element-update-demo__field :deep(.el-input-number) {
  width: 100%;
  max-width: 150px;
}

.element-update-demo__table {
  margin-top: 14px;
}

.element-update-demo__table :deep(.el-table__row) {
  cursor: pointer;
}
</style>
`,K={class:`doc-page-layout`},q={class:`doc-page`},J={id:`overview`,class:`doc-prose`},Y={id:`patch-and-copy`,class:`doc-prose`},X={id:`example-element-update`,class:`doc-prose`},Z={id:`api-actions`,class:`doc-prose`},Q={class:`doc-page-layout__aside`},$=n({__name:`ElementUpdateView`,setup(e){let t=T(G,`element-update`),n=[{id:`overview`,label:`选择写入入口`},{id:`patch-and-copy`,label:`Patch 与复制规则`},{id:`example-element-update`,label:`更新、复制与显隐`},{id:`visibility`,label:`业务显隐`},{id:`api-actions`,label:`更新方法`},{id:`api`,label:`完整 API`}],r=[{prop:`name`,label:`方法`,width:190,presentation:`method`},{prop:`params`,label:`参数`,width:360,linkTypes:!0},{prop:`returns`,label:`返回值`,width:250,linkTypes:!0},{prop:`desc`,label:`说明`,width:410}],i=[{anchor:`api-method-element-update`,href:`/api/types#api-type-element-method-update`,name:`Element.update`,params:`patch: ElementPatch<T>`,returns:`void`,desc:`按当前句柄 ID 原子更新一个 Element`},{anchor:`api-method-service-update`,href:`/api/types#api-type-element-service-method-update`,name:`elements.update`,params:`selector: ElementSelector<T>, patch: ElementPatch<T>`,returns:`readonly Element<T>[]`,desc:`批量更新全部匹配对象并返回当前句柄`},{anchor:`api-method-copy`,href:`/api/types#api-type-element-service-method-copy`,name:`copy`,params:`id: string, overrides?: ElementCopyOptions<T>`,returns:`Element<T>`,desc:`复制规范状态并自动生成新 ID；不克隆 Feature、动画或会话`},{anchor:`api-method-hide`,href:`/api/types#api-type-element-service-method-hide`,name:`hide`,params:`selector: ElementSelector`,returns:`readonly Element[]`,desc:`把匹配对象的 visible 批量更新为 false`},{anchor:`api-method-show`,href:`/api/types#api-type-element-service-method-show`,name:`show`,params:`selector: ElementSelector`,returns:`readonly Element[]`,desc:`把匹配对象的 visible 批量更新为 true`}],o=[`ElementPatch`,`ElementCopyOptions`,`Element`,`ElementService`],c={Element:[`update`],ElementService:[`update`,`copy`,`hide`,`show`]};return(e,u)=>{let p=l(`el-descriptions-item`),m=l(`el-descriptions`),h=l(`el-alert`);return d(),a(`div`,K,[f(`article`,q,[u[19]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图元素`),f(`h1`,null,`更新、复制与显隐`),f(`p`,null,`单对象使用 Element.update，批量操作使用 earth.elements；所有持久变更都先生成新状态，再一次性提交并投影到 Feature。`)],-1),f(`section`,J,[u[4]||=f(`h2`,{class:`doc-h2`},`选择写入入口`,-1),_(m,{column:1,border:``},{default:g(()=>[_(p,{label:`已有句柄`},{default:g(()=>[...u[0]||=[s(`调用 `,-1),f(`code`,null,`element.update(patch)`,-1),s(`，表达“修改这个对象”。`,-1)]]),_:1}),_(p,{label:`状态条件`},{default:g(()=>[...u[1]||=[s(`调用 `,-1),f(`code`,null,`earth.elements.update(selector, patch)`,-1),s(`，表达“修改这一组对象”。`,-1)]]),_:1}),_(p,{label:`创建副本`},{default:g(()=>[...u[2]||=[s(`调用 `,-1),f(`code`,null,`earth.elements.copy(id, overrides)`,-1),s(`，保留源状态并返回新句柄。`,-1)]]),_:1}),_(p,{label:`业务显隐`},{default:g(()=>[...u[3]||=[s(`优先调用 hide/show；它们与直接提交 visible 字段使用同一个状态通道。`,-1)]]),_:1})]),_:1})]),f(`section`,Y,[u[10]||=f(`h2`,{class:`doc-h2`},`Patch 与复制规则`,-1),f(`p`,null,[_(S,{kind:`type`,to:`/api/types#api-type-element-patch`},{default:g(()=>[...u[5]||=[s(`ElementPatch<T>`,-1)]]),_:1}),u[6]||=s(` 可以更新 geometry、style、data、module、layerId 和 visible，但不能修改 ID 或图形 Type。替换 geometry 时仍必须保持原来的 geometry.type。 `,-1)]),f(`p`,null,[_(S,{kind:`type`,to:`/api/types#api-type-element-copy-options`},{default:g(()=>[...u[7]||=[s(`ElementCopyOptions<T>`,-1)]]),_:1}),u[8]||=s(` 使用相同可覆盖字段。副本获得自动生成的新 ID、新 Feature 和独立规范状态；动画运行态、交互会话和屏幕临时值不会复制。 `,-1)]),_(h,{type:`info`,closable:!1,"show-icon":``,title:`提交是原子的`},{default:g(()=>[...u[9]||=[s(` 选择器、几何、样式或目标图层校验失败时，整次写入不提交，也不会向 OpenLayers 留下部分投影。 `,-1)]]),_:1})]),f(`section`,X,[_(y,{title:`更新、复制与显隐`,source:v(G),snippet:v(t),"source-lang":`vue`,"snippet-lang":`typescript`},{description:g(()=>[f(`p`,null,[u[14]||=s(` 示例分别调用 `,-1),_(S,{kind:`method`,to:`#api-method-element-update`},{default:g(()=>[...u[11]||=[s(`Element.update`,-1)]]),_:1}),u[15]||=s(`、 `,-1),_(S,{kind:`method`,to:`#api-method-service-update`},{default:g(()=>[...u[12]||=[s(`elements.update`,-1)]]),_:1}),u[16]||=s(`、 `,-1),_(S,{kind:`method`,to:`#api-method-copy`},{default:g(()=>[...u[13]||=[s(`copy`,-1)]]),_:1}),u[17]||=s(`、hide 与 show。移动、改色、复制和显隐会直接反映在地图上，表格只保留当前状态快照。 `,-1)])]),preview:g(()=>[_(W)]),_:1},8,[`source`,`snippet`])]),u[20]||=f(`section`,{id:`visibility`,class:`doc-prose`},[f(`h2`,{class:`doc-h2`},`业务显隐`),f(`ul`,null,[f(`li`,null,`hide/show 修改的是 ElementState.visible，不是直接操作 Feature 样式。`),f(`li`,null,`已隐藏 Element 仍可通过 query({ visible: false }) 查询，也可继续更新或删除。`),f(`li`,null,`动画在隐藏时暂停、重新显示时恢复；运行帧本身不写入 ElementState。`),f(`li`,null,`批量写方法必须使用非空选择器，防止把遗漏条件误解释为“全部”。`)])],-1),f(`section`,Z,[u[18]||=f(`h2`,{class:`doc-h2`},`更新方法`,-1),_(x,{columns:r,rows:i})]),_(E,{"type-names":o,"member-names":c,description:`完整展开 ElementPatch、ElementCopyOptions，以及单对象和批量更新、复制、显隐方法。`})]),f(`aside`,Q,[_(b,{title:`更新、复制与显隐`,items:n})])])}}});export{$ as default};