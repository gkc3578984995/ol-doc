import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,it as d,j as f,ot as p,tt as m,x as h,xt as g,z as _,zt as v}from"./TypeExpression-D6csDz4V.js";import{B as y,H as b,V as x,W as S,a as C,n as w,t as T,z as E}from"./index-4uKXPGRf.js";var D={class:`example-demo`},O={class:`example-demo__control-panel element-cleanup-demo__controls`},k={class:`example-demo__action-row element-cleanup-demo__action-row`},A={class:`example-demo__field example-demo__action-group element-cleanup-demo__field`},j={class:`example-demo__action-group element-cleanup-demo__action-group`,role:`group`,"aria-label":`删除操作`},M={class:`example-demo__action-buttons`},N={class:`example-demo__action-group element-cleanup-demo__action-group`,role:`group`,"aria-label":`恢复操作`},P={class:`example-demo__action-buttons`},F={class:`example-demo__feedback element-cleanup-demo__feedback`,"aria-live":`polite`},I=`docs-elements-cleanup`,L=`cleanup-demo-elements`,R=9.5,z=10,B=h(n({__name:`ElementCleanupDemo`,setup(n){let h=t(null),v=i(null),y=t([]),b=t(`cleanup-temporary-1`),x=t(0),S=t(`等待操作`),T=e(()=>y.value.find(({id:e})=>e===b.value)),E=null,B=(e,t,n)=>({symbol:{type:`circle`,radius:n?20:14,fill:{type:`solid`,color:t===`temporary`?`#e6a23c`:`#409eff`},stroke:{color:n?`#f59e0b`:`#ffffff`,width:n?5:3}},text:{text:e,offsetY:n?42:36,fontSize:n?14:12,fontWeight:n?`bold`:`normal`,padding:[4,7,4,7],fill:{type:`solid`,color:`#111827`},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.94)`},backgroundStroke:{color:n?`#f59e0b`:`#ffffff`,width:n?2:1}},zIndex:n?30:20}),V=()=>{let e=v.value;if(e!==null)for(let t of e.elements.query())t.update({style:B(t.state.data?.label??t.id,t.state.module??`permanent`,t.id===b.value)})},H=()=>{let e=v.value;e!==null&&(y.value=e.elements.query().map(({state:e})=>({id:e.id,label:e.data?.label??e.id,module:e.module??`—`,visible:e.visible})),y.value.some(({id:e})=>e===b.value)||(b.value=y.value[0]?.id??``),V())},U=()=>{E!==null&&v.value?.view.animateFlyTo(E,{zoom:R,duration:450})},W=()=>{let e=v.value?.elements.get(b.value);if(e===void 0||e.state.geometry.type!==`point`){U();return}let[t]=e.state.geometry.controlPoints;v.value?.view.animateFlyTo(t,{zoom:z,duration:450})},G=()=>{let e=v.value?.elements.get(b.value);e!==void 0&&(V(),W(),S.value=`已定位：${e.state.data?.label??e.id}`)},K=e=>{b.value=e.id,G()},q=()=>{let e=v.value;if(e===null||E===null)return;e.elements.clear();let t=[{id:`cleanup-temporary-1`,label:`临时标记 A`,module:`temporary`,offset:[-1e4,7e3]},{id:`cleanup-temporary-2`,label:`临时标记 B`,module:`temporary`,offset:[1e4,7e3]},{id:`cleanup-permanent-1`,label:`永久设施 A`,module:`permanent`,offset:[-1e4,-7e3]},{id:`cleanup-permanent-2`,label:`永久设施 B`,module:`permanent`,offset:[1e4,-7e3]}];b.value=`cleanup-temporary-1`;for(let n of t)e.elements.add({id:n.id,module:n.module,layerId:L,data:{label:n.label},geometry:{type:`point`,controlPoints:[[E[0]+n.offset[0],E[1]+n.offset[1]]]},style:B(n.label,n.module,n.id===b.value)});x.value=0,S.value=`已重建 4 个 Element`,H(),U()},J=()=>{let e=v.value?.elements.get(b.value);if(e===void 0)return;let t=e.state.data?.label??e.id;e.remove(),x.value=1,H(),W(),S.value=`句柄 remove() 已删除：${t}`},Y=()=>{let e=v.value?.elements.remove({module:`temporary`})??0;x.value=e,H(),W(),S.value=`remove({ module: 'temporary' }) 已删除 ${e} 个`},X=()=>{let e=v.value?.elements.query().length??0;v.value?.elements.clear(),x.value=e,H(),U(),S.value=`clear() 已清空 ${e} 个 Element`};return m(()=>{if(h.value===null)return;let e=C({id:I,target:h.value,view:{zoom:R},controls:{zoom:!0,rotate:!1,attribution:!0}});w(e,`vector`).update({opacity:.5}),e.layers.add({kind:`vector`,id:L,zIndex:20,declutter:!0});let t=e.view.toProjectedCoordinates([116.4074,39.9042]);E=[t[0],t[1]],e.view.flyTo(E,R),v.value=e,q()}),o(()=>{v.value?.destroy(),v.value=null,E=null}),(e,t)=>{let n=l(`el-alert`),i=l(`el-option`),o=l(`el-select`),m=l(`el-button`),v=l(`el-popconfirm`),C=l(`el-tag`),w=l(`el-table-column`),E=l(`el-table`);return d(),a(`div`,D,[_(n,{class:`example-demo__alert`,type:`warning`,closable:!1,"show-icon":``,title:`批量 remove() 必须传入至少一个选择条件；清空全部对象请显式调用 clear()。`}),f(`div`,O,[f(`div`,k,[f(`div`,A,[t[1]||=f(`span`,null,`当前 Element`,-1),_(o,{modelValue:b.value,"onUpdate:modelValue":t[0]||=e=>b.value=e,"aria-label":`选择 Element`,onChange:G},{default:g(()=>[(d(!0),a(c,null,p(y.value,e=>(d(),r(i,{key:e.id,label:`${e.label} · ${e.id}`,value:e.id},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),f(`div`,j,[f(`div`,M,[_(m,{type:`danger`,plain:``,disabled:!b.value,onClick:J},{default:g(()=>[...t[2]||=[s(`句柄 remove()`,-1)]]),_:1},8,[`disabled`]),_(m,{type:`danger`,plain:``,onClick:Y},{default:g(()=>[...t[3]||=[s(`移除 temporary 模块`,-1)]]),_:1}),_(v,{title:`确定显式清空全部 Element？`,onConfirm:X},{reference:g(()=>[_(m,{type:`danger`},{default:g(()=>[...t[4]||=[s(`clear()`,-1)]]),_:1})]),_:1})])]),f(`div`,N,[f(`div`,P,[_(m,{type:`primary`,onClick:q},{default:g(()=>[...t[5]||=[s(`重建示例`,-1)]]),_:1})])]),f(`div`,F,[_(C,{type:`warning`,effect:`dark`},{default:g(()=>[...t[6]||=[s(`temporary · 橙色`,-1)]]),_:1}),_(C,{type:`primary`,effect:`dark`},{default:g(()=>[...t[7]||=[s(`permanent · 蓝色`,-1)]]),_:1}),_(C,{type:`primary`,effect:`plain`},{default:g(()=>[s(`当前：`+u(T.value?.label??`无`),1)]),_:1}),_(C,{type:`success`,effect:`plain`},{default:g(()=>[s(`剩余 `+u(y.value.length)+` 个`,1)]),_:1}),_(C,{type:`danger`,effect:`plain`},{default:g(()=>[s(`本次删除 `+u(x.value)+` 个`,1)]),_:1}),_(C,{effect:`plain`},{default:g(()=>[s(u(S.value),1)]),_:1})])])]),f(`div`,{ref_key:`mapTarget`,ref:h,class:`example-stage`},null,512),_(E,{data:y.value,border:``,size:`small`,"row-key":`id`,"highlight-current-row":``,"current-row-key":b.value,"empty-text":`当前 Earth 中没有 Element`,class:`element-cleanup-demo__table`,onRowClick:K},{default:g(()=>[_(w,{prop:`label`,label:`名称`,"min-width":`130`}),_(w,{prop:`id`,label:`ID`,"min-width":`190`}),_(w,{prop:`module`,label:`Module`,"min-width":`120`}),_(w,{label:`可见`,width:`72`},{default:g(e=>[s(u(e.row.visible?`是`:`否`),1)]),_:1})]),_:1},8,[`data`,`current-row-key`])])}}}),[[`__scopeId`,`data-v-e3fc9670`]]),V=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-elements-cleanup';
const BUSINESS_LAYER_ID = 'cleanup-demo-elements';
const MAP_ZOOM = 9.5;
const FOCUS_ZOOM = 10;

interface DemoData {
  label: string;
}

interface ElementRow {
  id: string;
  label: string;
  module: string;
  visible: boolean;
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const rows = ref<ElementRow[]>([]);
const selectedId = ref('cleanup-temporary-1');
const deletedCount = ref(0);
const status = ref('等待操作');
const selectedRow = computed(() => rows.value.find(({ id }) => id === selectedId.value));
let homeCenter: [number, number] | null = null;

const pointStyle = (label: string, module: string, selected: boolean): StyleSpec => {
  const color = module === 'temporary' ? '#e6a23c' : '#409eff';
  return {
    symbol: {
      type: 'circle',
      radius: selected ? 20 : 14,
      fill: { type: 'solid', color },
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
  };
};

const updatePresentation = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  for (const element of earth.elements.query<DemoData>()) {
    element.update({
      style: pointStyle(element.state.data?.label ?? element.id, element.state.module ?? 'permanent', element.id === selectedId.value)
    });
  }
};

const refresh = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  rows.value = earth.elements.query<DemoData>().map(({ state }) => ({
    id: state.id,
    label: state.data?.label ?? state.id,
    module: state.module ?? '—',
    visible: state.visible
  }));
  if (!rows.value.some(({ id }) => id === selectedId.value)) selectedId.value = rows.value[0]?.id ?? '';
  updatePresentation();
};

const animateHome = () => {
  if (homeCenter !== null) earthRef.value?.view.animateFlyTo(homeCenter, { zoom: MAP_ZOOM, duration: 450 });
};

const animateToSelected = () => {
  const element = earthRef.value?.elements.get<DemoData>(selectedId.value);
  if (element === undefined || element.state.geometry.type !== 'point') {
    animateHome();
    return;
  }
  const [center] = element.state.geometry.controlPoints;
  earthRef.value?.view.animateFlyTo(center, { zoom: FOCUS_ZOOM, duration: 450 });
};

const focusSelected = () => {
  const element = earthRef.value?.elements.get<DemoData>(selectedId.value);
  if (element === undefined) return;
  updatePresentation();
  animateToSelected();
  status.value = \`已定位：\${element.state.data?.label ?? element.id}\`;
};

const selectRow = (row: ElementRow) => {
  selectedId.value = row.id;
  focusSelected();
};

const seed = () => {
  const earth = earthRef.value;
  if (earth === null || homeCenter === null) return;
  earth.elements.clear();
  const inputs = [
    { id: 'cleanup-temporary-1', label: '临时标记 A', module: 'temporary', offset: [-10_000, 7_000] },
    { id: 'cleanup-temporary-2', label: '临时标记 B', module: 'temporary', offset: [10_000, 7_000] },
    { id: 'cleanup-permanent-1', label: '永久设施 A', module: 'permanent', offset: [-10_000, -7_000] },
    { id: 'cleanup-permanent-2', label: '永久设施 B', module: 'permanent', offset: [10_000, -7_000] }
  ] as const;
  selectedId.value = 'cleanup-temporary-1';
  for (const input of inputs) {
    earth.elements.add<DemoData>({
      id: input.id,
      module: input.module,
      layerId: BUSINESS_LAYER_ID,
      data: { label: input.label },
      geometry: { type: 'point', controlPoints: [[homeCenter[0] + input.offset[0], homeCenter[1] + input.offset[1]]] },
      style: pointStyle(input.label, input.module, input.id === selectedId.value)
    });
  }
  deletedCount.value = 0;
  status.value = '已重建 4 个 Element';
  refresh();
  animateHome();
};

// #region element-cleanup
const removeSelectedHandle = () => {
  const element = earthRef.value?.elements.get<DemoData>(selectedId.value);
  if (element === undefined) return;
  const label = element.state.data?.label ?? element.id;
  element.remove();
  deletedCount.value = 1;
  refresh();
  animateToSelected();
  status.value = \`句柄 remove() 已删除：\${label}\`;
};

const removeTemporary = () => {
  const count = earthRef.value?.elements.remove({ module: 'temporary' }) ?? 0;
  deletedCount.value = count;
  refresh();
  animateToSelected();
  status.value = \`remove({ module: 'temporary' }) 已删除 \${count} 个\`;
};

const clearAll = () => {
  const count = earthRef.value?.elements.query().length ?? 0;
  earthRef.value?.elements.clear();
  deletedCount.value = count;
  refresh();
  animateHome();
  status.value = \`clear() 已清空 \${count} 个 Element\`;
};
// #endregion element-cleanup

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
  homeCenter = [center[0], center[1]];
  earth.view.flyTo(homeCenter, MAP_ZOOM);
  earthRef.value = earth;
  seed();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  homeCenter = null;
});
<\/script>

<template>
  <div class="example-demo">
    <el-alert
      class="example-demo__alert"
      type="warning"
      :closable="false"
      show-icon
      title="批量 remove() 必须传入至少一个选择条件；清空全部对象请显式调用 clear()。"
    />

    <div class="example-demo__control-panel element-cleanup-demo__controls">
      <div class="example-demo__action-row element-cleanup-demo__action-row">
        <div class="example-demo__field example-demo__action-group element-cleanup-demo__field">
          <span>当前 Element</span>
          <el-select v-model="selectedId" aria-label="选择 Element" @change="focusSelected">
            <el-option v-for="row in rows" :key="row.id" :label="\`\${row.label} · \${row.id}\`" :value="row.id" />
          </el-select>
        </div>
        <div class="example-demo__action-group element-cleanup-demo__action-group" role="group" aria-label="删除操作">
          <div class="example-demo__action-buttons">
            <el-button type="danger" plain :disabled="!selectedId" @click="removeSelectedHandle">句柄 remove()</el-button>
            <el-button type="danger" plain @click="removeTemporary">移除 temporary 模块</el-button>
            <el-popconfirm title="确定显式清空全部 Element？" @confirm="clearAll">
              <template #reference><el-button type="danger">clear()</el-button></template>
            </el-popconfirm>
          </div>
        </div>
        <div class="example-demo__action-group element-cleanup-demo__action-group" role="group" aria-label="恢复操作">
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="seed">重建示例</el-button>
          </div>
        </div>
        <div class="example-demo__feedback element-cleanup-demo__feedback" aria-live="polite">
          <el-tag type="warning" effect="dark">temporary · 橙色</el-tag>
          <el-tag type="primary" effect="dark">permanent · 蓝色</el-tag>
          <el-tag type="primary" effect="plain">当前：{{ selectedRow?.label ?? '无' }}</el-tag>
          <el-tag type="success" effect="plain">剩余 {{ rows.length }} 个</el-tag>
          <el-tag type="danger" effect="plain">本次删除 {{ deletedCount }} 个</el-tag>
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
      class="element-cleanup-demo__table"
      @row-click="selectRow"
    >
      <el-table-column prop="label" label="名称" min-width="130" />
      <el-table-column prop="id" label="ID" min-width="190" />
      <el-table-column prop="module" label="Module" min-width="120" />
      <el-table-column label="可见" width="72">
        <template #default="scope">{{ scope.row.visible ? '是' : '否' }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.element-cleanup-demo__field :deep(.el-select) {
  width: 100%;
  max-width: 225px;
}

.element-cleanup-demo__field {
  flex: 0 1 140px;
}

.element-cleanup-demo__table {
  margin-top: 14px;
}

.element-cleanup-demo__table :deep(.el-table__row) {
  cursor: pointer;
}
</style>
`,H={class:`doc-page-layout`},U={class:`doc-page`},W={id:`overview`,class:`doc-prose`},G={id:`selector-safety`,class:`doc-prose`},K={id:`example-element-cleanup`,class:`doc-prose`},q={id:`api-actions`,class:`doc-prose`},J={class:`doc-page-layout__aside`},Y=n({__name:`ElementCleanupView`,setup(e){let t=T(V,`element-cleanup`),n=[{id:`overview`,label:`三种清理范围`},{id:`selector-safety`,label:`选择器安全规则`},{id:`example-element-cleanup`,label:`按句柄、模块与全部清理`},{id:`stale-handles`,label:`旧句柄与生命周期`},{id:`api-actions`,label:`删除方法`},{id:`api`,label:`完整 API`}],r=[{prop:`name`,label:`方法`,width:190,presentation:`method`},{prop:`params`,label:`参数`,width:300,linkTypes:!0},{prop:`returns`,label:`返回值`,width:210,linkTypes:!0},{prop:`desc`,label:`说明`,width:430}],i=[{anchor:`api-method-element-remove`,href:`/api/types#api-type-element-method-remove`,name:`Element.remove`,params:`—`,returns:`void`,desc:`移除当前句柄对应的 Element；同一句柄重复 remove 幂等`},{anchor:`api-method-service-remove`,href:`/api/types#api-type-element-service-method-remove`,name:`elements.remove`,params:`selector: ElementSelector`,returns:`number`,desc:`删除全部匹配对象并返回数量；未命中返回 0`},{anchor:`api-method-clear`,href:`/api/types#api-type-element-service-method-clear`,name:`clear`,params:`—`,returns:`void`,desc:`显式清空当前 Earth 的全部 Element，并使旧句柄失效`}],o=[`Element`,`ElementService`],c={Element:[`remove`],ElementService:[`remove`,`clear`]};return(e,u)=>{let p=l(`el-card`),m=l(`el-col`),h=l(`el-row`),C=l(`el-alert`);return d(),a(`div`,H,[f(`article`,U,[u[18]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图元素`),f(`h1`,null,`删除与清理`),f(`p`,null,`按句柄删除单个对象，按选择器删除一组对象，只有 clear 明确表示“全部”。Earth.destroy 则负责整个实例的最终兜底清理。`)],-1),f(`section`,W,[u[3]||=f(`h2`,{class:`doc-h2`},`三种清理范围`,-1),_(h,{gutter:16},{default:g(()=>[_(m,{xs:24,md:8},{default:g(()=>[_(p,{shadow:`never`},{default:g(()=>[...u[0]||=[f(`strong`,null,`element.remove()`,-1),f(`p`,null,`已经持有句柄，只移除当前对象。`,-1)]]),_:1})]),_:1}),_(m,{xs:24,md:8},{default:g(()=>[_(p,{shadow:`never`},{default:g(()=>[...u[1]||=[f(`strong`,null,`elements.remove(selector)`,-1),f(`p`,null,`按 module、layerId、type 等条件批量删除。`,-1)]]),_:1})]),_:1}),_(m,{xs:24,md:8},{default:g(()=>[_(p,{shadow:`never`},{default:g(()=>[...u[2]||=[f(`strong`,null,`elements.clear()`,-1),f(`p`,null,`显式清空当前 Earth 的全部 Element。`,-1)]]),_:1})]),_:1})]),_:1})]),f(`section`,G,[u[9]||=f(`h2`,{class:`doc-h2`},`选择器安全规则`,-1),f(`p`,null,[_(S,{kind:`method`,to:`#api-method-service-remove`},{default:g(()=>[...u[4]||=[s(`elements.remove`,-1)]]),_:1}),u[6]||=s(` 必须接收至少一个已设置条件的 `,-1),_(S,{kind:`type`,to:`/api/types#api-type-element-selector`},{default:g(()=>[...u[5]||=[s(`ElementSelector`,-1)]]),_:1}),u[7]||=s(`。 空对象不会被解释成“全部”，而是抛出 InvalidSelectorError。 `,-1)]),_(C,{type:`warning`,closable:!1,"show-icon":``,title:`不要用空选择器模拟 clear`},{default:g(()=>[...u[8]||=[s(` 同一保护也适用于 update、hide 和 show。需要清空全部时调用 clear()，让代码审查和运行行为都保持明确。 `,-1)]]),_:1})]),f(`section`,K,[_(y,{title:`按句柄、模块与全部清理`,source:v(V),snippet:v(t),"source-lang":`vue`,"snippet-lang":`typescript`},{description:g(()=>[f(`p`,null,[u[13]||=s(` 示例比较 `,-1),_(S,{kind:`method`,to:`#api-method-element-remove`},{default:g(()=>[...u[10]||=[s(`Element.remove`,-1)]]),_:1}),u[14]||=s(`、 `,-1),_(S,{kind:`method`,to:`#api-method-service-remove`},{default:g(()=>[...u[11]||=[s(`elements.remove`,-1)]]),_:1}),u[15]||=s(` 和 `,-1),_(S,{kind:`method`,to:`#api-method-clear`},{default:g(()=>[...u[12]||=[s(`clear`,-1)]]),_:1}),u[16]||=s(`。橙色 temporary 与蓝色 permanent 在地图中清晰区分，删除后直接观察剩余对象和本次删除数量。 `,-1)])]),preview:g(()=>[_(B)]),_:1},8,[`source`,`snippet`])]),u[19]||=f(`section`,{id:`stale-handles`,class:`doc-prose`},[f(`h2`,{class:`doc-h2`},`旧句柄与生命周期`),f(`ul`,null,[f(`li`,null,`删除后，旧句柄的 state、olFeature 和 update 进入失效状态；继续访问会抛出 ObjectDisposedError。`),f(`li`,null,`同一个句柄自身重复调用 remove 是幂等的；被其他入口删除后的旧句柄不应继续使用。`),f(`li`,null,`相同 ID 以后可以重新创建，但会得到新 Feature、新代次和新 Element 句柄，旧句柄不会“复活”。`),f(`li`,null,`Element 删除会同步终止其动画、解除渲染投影，并清理与该对象关联的服务状态。`),f(`li`,null,`组件卸载时仍应调用 earth.destroy()，统一清理剩余 Element、图层、会话、监听与地图资源。`)])],-1),f(`section`,q,[u[17]||=f(`h2`,{class:`doc-h2`},`删除方法`,-1),_(x,{columns:r,rows:i})]),_(E,{"type-names":o,"member-names":c,description:`完整列出句柄删除、选择器批量删除和显式清空方法；失效句柄错误统一链接到错误类型页面。`})]),f(`aside`,J,[_(b,{title:`删除与清理`,items:n})])])}}});export{Y as default};