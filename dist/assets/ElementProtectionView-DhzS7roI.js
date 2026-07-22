import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,it as d,j as f,ot as p,tt as m,x as h,xt as g,z as _,zt as v}from"./TypeExpression-D6csDz4V.js";import{B as y,H as b,V as x,W as S,n as C,s as w,t as T,w as E,z as D}from"./index-4uKXPGRf.js";var O={class:`example-demo element-protection-demo`},k={class:`element-protection-demo__catalog`,"aria-label":`保护目标目录`},A={class:`example-demo__control-panel`},j={class:`example-demo__control-grid element-protection-demo__controls`},M={class:`example-demo__field`},N={class:`example-demo__action-group`},ee={class:`example-demo__action-buttons`},P={class:`example-demo__action-group`},F={class:`example-demo__action-buttons`},I={class:`example-demo__feedback`,"aria-live":`polite`},L=`docs-element-protection`,R=11,z=`data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"%3E%3Crect x="5" y="10" width="46" height="39" rx="8" fill="%232563eb" stroke="white" stroke-width="3"/%3E%3Cpath d="M18 10V6h20v4M15 24h26M20 31h6v10h-6zM31 31h6v10h-6z" fill="none" stroke="white" stroke-width="3" stroke-linejoin="round"/%3E%3C/svg%3E`,B=h(n({__name:`ElementProtectionDemo`,setup(n,{expose:h}){let v=t(null),y=i(null),b=i(null),x=i([]),S=t([]),T=t(`protection-point`),D=t(`王小明`),B=t(`示例加载后，四类目标默认进入保护模式`),V=new Map,H,U=e(()=>S.value.find(({id:e})=>e===T.value)),W=e(()=>S.value.filter(({protection:e})=>e!==void 0).length),G=e=>{let t=(V.get(e)??0)+1;return V.set(e,t),t},K=e=>{let[t,n]=e;return[{id:`protection-point`,label:`普通点`,kind:`point`,geometry:{type:`point`,controlPoints:[[t-14e3,n+9e3]]},style:{symbol:{type:`circle`,radius:15,fill:{type:`solid`,color:`#2563eb`},stroke:{color:`#ffffff`,width:4}}},focus:[t-14e3,n+9e3],operatorId:`user-wang`,operatorName:`王小明`},{id:`protection-image`,label:`图片点`,kind:`image`,geometry:{type:`point`,controlPoints:[[t+14e3,n+9e3]]},style:{symbol:{type:`icon`,src:z,size:[56,56],anchor:[.5,.5],anchorXUnits:`fraction`,anchorYUnits:`fraction`}},focus:[t+14e3,n+9e3],operatorId:`user-li`,operatorName:`李娜`},{id:`protection-line`,label:`路线`,kind:`polyline`,geometry:{type:`polyline`,controlPoints:[[t-2e4,n-4e3],[t-15e3,n-15e3],[t-4e3,n-7e3]]},style:{strokes:[{color:`#2563eb`,width:7}]},focus:[t-13e3,n-9e3],operatorId:`user-chen`,operatorName:`陈工`},{id:`protection-polygon`,label:`作业区`,kind:`polygon`,geometry:{type:`polygon`,controlPoints:[[t+5e3,n-4e3],[t+2e4,n-5e3],[t+17e3,n-16e3],[t+7e3,n-14e3]]},style:{strokes:[{color:`#2563eb`,width:5}],fill:{type:`solid`,color:`rgba(37, 99, 235, 0.24)`}},focus:[t+12e3,n-1e4],operatorId:`user-zhao`,operatorName:`赵敏`}]},q=()=>{let e=y.value;e!==null&&(S.value=x.value.map(t=>({id:t.id,label:t.label,kind:t.kind,protection:e.elements.getProtection(t.id)})))},J=e=>x.value.find(t=>t.id===e),Y=()=>{let e=J(T.value);e!==void 0&&y.value?.view.animateFlyTo(e.focus,{zoom:11.4,duration:420})},X=(e,t)=>{let n=y.value,r=J(T.value);if(n===null||r===void 0)return;let i=G(r.id),a=e?{protected:!0,operatorId:r.operatorId,operatorName:D.value.trim()||void 0,revision:i,expiresAt:t}:{protected:!1,revision:i},o=n.elements.setProtection(r.id,a),s=n.elements.getProtection(r.id);q(),B.value=o?s===void 0?`${r.label} 已解除保护`:`${r.label} 已由 ${s.operatorName??`其他用户`} 保护`:`${r.label} 的保护状态没有变化`,t!==void 0&&(H!==void 0&&clearTimeout(H),H=setTimeout(()=>{q(),B.value=`${r.label} 的 10 秒保护已到期`,H=void 0},Math.max(0,t-Date.now())+50))},Z=()=>X(!0,Date.now()+1e4),te=()=>{let e=y.value,t=e?.elements.get(T.value);if(!(e==null||t===void 0))try{let n=e.draw.edit(t,{policy:`replace`});n.cancel(),n.destroy(),B.value=`${U.value?.label??t.id} 未受保护，Edit 已正常启动并立即清理`}catch(e){if(!(e instanceof E))throw e;B.value=`${U.value?.label??t.id} 被保护，Edit 已拒绝启动`}},ne=()=>{let e=y.value;if(e!==null)for(let t of x.value)e.elements.setProtection(t.id,{protected:!0,operatorId:t.operatorId,operatorName:t.operatorName,revision:G(t.id)})},Q=()=>{let e=y.value,t=b.value;if(!(e===null||t===null)){e.elements.clear(),V.clear(),x.value=K(t);for(let t of x.value)e.elements.add({id:t.id,layerId:L,module:`docs-element-protection`,geometry:t.geometry,style:t.style,data:{label:t.label,kind:t.kind}});ne(),T.value=x.value[0]?.id??``,D.value=x.value[0]?.operatorName??``,B.value=`已重建普通点、图片点、路线和作业区，并恢复默认保护`,q(),e.view.animateFlyTo(t,{zoom:R,duration:420})}},$=e=>{T.value=e;let t=J(e);D.value=y.value?.elements.getProtection(e)?.operatorName??t?.operatorName??``,Y()},re=e=>$(e.id);return h({reset:Q,focusSelected:Y}),m(()=>{if(v.value===null)return;let e=new w({target:v.value,view:{zoom:R},controls:{zoom:!0,rotate:!1,attribution:!0}});C(e,`vector`).update({opacity:.46}),e.layers.add({kind:`vector`,id:L,zIndex:30,declutter:!0}),b.value=e.view.toProjectedCoordinates([116.4074,39.9042]),y.value=e,Q()}),o(()=>{H!==void 0&&clearTimeout(H),y.value?.destroy(),y.value=null,b.value=null,x.value=[]}),(e,t)=>{let n=l(`el-alert`),i=l(`el-button`),o=l(`el-input`),m=l(`el-tag`),h=l(`el-table-column`),y=l(`el-table`);return d(),a(`div`,O,[_(n,{class:`example-demo__alert`,type:`info`,closable:!1,"show-icon":``,title:`保护层只表达协同编辑占用状态：Element 仍可命中和读取，但内置 Edit / Transform 不会接管受保护目标。`}),f(`div`,k,[(d(!0),a(c,null,p(S.value,e=>(d(),r(i,{key:e.id,class:`element-protection-demo__target`,type:T.value===e.id?`primary`:`default`,plain:T.value!==e.id,"aria-pressed":T.value===e.id,onClick:t=>$(e.id)},{default:g(()=>[f(`span`,null,u(e.label),1),f(`small`,null,u(e.kind)+` · `+u(e.protection===void 0?`可编辑`:`保护中`),1)]),_:2},1032,[`type`,`plain`,`aria-pressed`,`onClick`]))),128))]),f(`div`,A,[f(`div`,j,[f(`div`,M,[t[3]||=f(`span`,null,`正在操作的人`,-1),_(o,{modelValue:D.value,"onUpdate:modelValue":t[0]||=e=>D.value=e,clearable:``,"aria-label":`正在操作的人名称`,placeholder:`可选`},null,8,[`modelValue`])]),f(`div`,N,[t[7]||=f(`span`,null,`保护状态`,-1),f(`div`,ee,[_(i,{type:`warning`,onClick:t[1]||=e=>X(!0)},{default:g(()=>[...t[4]||=[s(`进入保护`,-1)]]),_:1}),_(i,{onClick:t[2]||=e=>X(!1)},{default:g(()=>[...t[5]||=[s(`解除保护`,-1)]]),_:1}),_(i,{plain:``,onClick:Z},{default:g(()=>[...t[6]||=[s(`保护 10 秒`,-1)]]),_:1})])]),f(`div`,P,[t[9]||=f(`span`,null,`交互验证`,-1),f(`div`,F,[_(i,{type:`primary`,plain:``,onClick:te},{default:g(()=>[...t[8]||=[s(`尝试启动 Edit`,-1)]]),_:1})])])]),f(`div`,I,[_(m,{type:`warning`,effect:`dark`},{default:g(()=>[s(`保护中 `+u(W.value)+` / `+u(S.value.length),1)]),_:1}),_(m,{type:U.value?.protection===void 0?`success`:`warning`,effect:`plain`},{default:g(()=>[s(` 当前：`+u(U.value?.protection===void 0?`可编辑`:U.value.protection.operatorName??`其他用户`),1)]),_:1},8,[`type`]),_(m,{effect:`plain`},{default:g(()=>[s(u(B.value),1)]),_:1})])]),f(`div`,{ref_key:`mapTarget`,ref:v,class:`example-stage`},null,512),_(y,{data:S.value,border:``,size:`small`,"row-key":`id`,class:`element-protection-demo__table`,onRowClick:re},{default:g(()=>[_(h,{prop:`label`,label:`目标`,"min-width":`100`}),_(h,{prop:`kind`,label:`几何`,"min-width":`100`}),_(h,{label:`状态`,"min-width":`100`},{default:g(e=>[s(u(e.row.protection===void 0?`可编辑`:`保护中`),1)]),_:1}),_(h,{label:`操作人`,"min-width":`130`},{default:g(e=>[s(u(e.row.protection?.operatorName??`—`),1)]),_:1}),_(h,{label:`Revision`,"min-width":`100`},{default:g(e=>[s(u(e.row.protection?.revision??`—`),1)]),_:1})]),_:1},8,[`data`])])}}}),[[`__scopeId`,`data-v-d6831f2f`]]),V=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import {
  Earth,
  ElementProtectedError,
  type Coordinate,
  type ElementProtectionState,
  type ElementProtectionUpdate,
  type ShapeInput,
  type StyleSpec
} from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const BUSINESS_LAYER_ID = 'docs-element-protection';
const MAP_ZOOM = 11;
const ICON_SOURCE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"%3E%3Crect x="5" y="10" width="46" height="39" rx="8" fill="%232563eb" stroke="white" stroke-width="3"/%3E%3Cpath d="M18 10V6h20v4M15 24h26M20 31h6v10h-6zM31 31h6v10h-6z" fill="none" stroke="white" stroke-width="3" stroke-linejoin="round"/%3E%3C/svg%3E';

type DemoKind = 'point' | 'image' | 'polyline' | 'polygon';

interface ProtectionTarget {
  readonly id: string;
  readonly label: string;
  readonly kind: DemoKind;
  readonly geometry: ShapeInput;
  readonly style: StyleSpec;
  readonly focus: Coordinate;
  readonly operatorId: string;
  readonly operatorName: string;
}

interface ProtectionRow {
  readonly id: string;
  readonly label: string;
  readonly kind: DemoKind;
  readonly protection?: ElementProtectionState;
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const centerRef = shallowRef<Coordinate | null>(null);
const targets = shallowRef<readonly ProtectionTarget[]>([]);
const rows = ref<readonly ProtectionRow[]>([]);
const selectedId = ref('protection-point');
const operatorName = ref('王小明');
const status = ref('示例加载后，四类目标默认进入保护模式');
const revisionById = new Map<string, number>();
let expiryRefreshTimer: ReturnType<typeof setTimeout> | undefined;

const selectedRow = computed(() => rows.value.find(({ id }) => id === selectedId.value));
const protectedCount = computed(() => rows.value.filter(({ protection }) => protection !== undefined).length);

const nextRevision = (id: string) => {
  const next = (revisionById.get(id) ?? 0) + 1;
  revisionById.set(id, next);
  return next;
};

const createTargets = (center: Coordinate): readonly ProtectionTarget[] => {
  const [x, y] = center;
  return [
    {
      id: 'protection-point',
      label: '普通点',
      kind: 'point',
      geometry: { type: 'point', controlPoints: [[x - 14_000, y + 9_000]] },
      style: {
        symbol: {
          type: 'circle',
          radius: 15,
          fill: { type: 'solid', color: '#2563eb' },
          stroke: { color: '#ffffff', width: 4 }
        }
      },
      focus: [x - 14_000, y + 9_000],
      operatorId: 'user-wang',
      operatorName: '王小明'
    },
    {
      id: 'protection-image',
      label: '图片点',
      kind: 'image',
      geometry: { type: 'point', controlPoints: [[x + 14_000, y + 9_000]] },
      style: { symbol: { type: 'icon', src: ICON_SOURCE, size: [56, 56], anchor: [0.5, 0.5], anchorXUnits: 'fraction', anchorYUnits: 'fraction' } },
      focus: [x + 14_000, y + 9_000],
      operatorId: 'user-li',
      operatorName: '李娜'
    },
    {
      id: 'protection-line',
      label: '路线',
      kind: 'polyline',
      geometry: {
        type: 'polyline',
        controlPoints: [
          [x - 20_000, y - 4_000],
          [x - 15_000, y - 15_000],
          [x - 4_000, y - 7_000]
        ]
      },
      style: { strokes: [{ color: '#2563eb', width: 7 }] },
      focus: [x - 13_000, y - 9_000],
      operatorId: 'user-chen',
      operatorName: '陈工'
    },
    {
      id: 'protection-polygon',
      label: '作业区',
      kind: 'polygon',
      geometry: {
        type: 'polygon',
        controlPoints: [
          [x + 5_000, y - 4_000],
          [x + 20_000, y - 5_000],
          [x + 17_000, y - 16_000],
          [x + 7_000, y - 14_000]
        ]
      },
      style: {
        strokes: [{ color: '#2563eb', width: 5 }],
        fill: { type: 'solid', color: 'rgba(37, 99, 235, 0.24)' }
      },
      focus: [x + 12_000, y - 10_000],
      operatorId: 'user-zhao',
      operatorName: '赵敏'
    }
  ];
};

const refreshRows = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  rows.value = targets.value.map((target) => ({
    id: target.id,
    label: target.label,
    kind: target.kind,
    protection: earth.elements.getProtection(target.id)
  }));
};

const targetById = (id: string) => targets.value.find((target) => target.id === id);

const focusSelected = () => {
  const target = targetById(selectedId.value);
  if (target === undefined) return;
  earthRef.value?.view.animateFlyTo(target.focus, { zoom: MAP_ZOOM + 0.4, duration: 420 });
};

// #region element-protection
const setSelectedProtection = (protectedValue: boolean, expiresAt?: number) => {
  const earth = earthRef.value;
  const target = targetById(selectedId.value);
  if (earth === null || target === undefined) return;

  const revision = nextRevision(target.id);
  const update: ElementProtectionUpdate = protectedValue
    ? {
        protected: true,
        operatorId: target.operatorId,
        operatorName: operatorName.value.trim() || undefined,
        revision,
        expiresAt
      }
    : { protected: false, revision };

  const changed = earth.elements.setProtection(target.id, update);
  const current = earth.elements.getProtection(target.id);
  refreshRows();
  status.value = changed
    ? current === undefined
      ? \`\${target.label} 已解除保护\`
      : \`\${target.label} 已由 \${current.operatorName ?? '其他用户'} 保护\`
    : \`\${target.label} 的保护状态没有变化\`;
  if (expiresAt !== undefined) {
    if (expiryRefreshTimer !== undefined) clearTimeout(expiryRefreshTimer);
    expiryRefreshTimer = setTimeout(
      () => {
        refreshRows();
        status.value = \`\${target.label} 的 10 秒保护已到期\`;
        expiryRefreshTimer = undefined;
      },
      Math.max(0, expiresAt - Date.now()) + 50
    );
  }
};
// #endregion element-protection

const protectForTenSeconds = () => setSelectedProtection(true, Date.now() + 10_000);

const tryBuiltInEdit = () => {
  const earth = earthRef.value;
  const element = earth?.elements.get(selectedId.value);
  if (earth === null || earth === undefined || element === undefined) return;
  try {
    const edit = earth.draw.edit(element, { policy: 'replace' });
    edit.cancel();
    edit.destroy();
    status.value = \`\${selectedRow.value?.label ?? element.id} 未受保护，Edit 已正常启动并立即清理\`;
  } catch (error) {
    if (!(error instanceof ElementProtectedError)) throw error;
    status.value = \`\${selectedRow.value?.label ?? element.id} 被保护，Edit 已拒绝启动\`;
  }
};

const protectDefaults = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  for (const target of targets.value) {
    earth.elements.setProtection(target.id, {
      protected: true,
      operatorId: target.operatorId,
      operatorName: target.operatorName,
      revision: nextRevision(target.id)
    });
  }
};

const seed = () => {
  const earth = earthRef.value;
  const center = centerRef.value;
  if (earth === null || center === null) return;
  earth.elements.clear();
  revisionById.clear();
  targets.value = createTargets(center);
  for (const target of targets.value) {
    earth.elements.add({
      id: target.id,
      layerId: BUSINESS_LAYER_ID,
      module: 'docs-element-protection',
      geometry: target.geometry,
      style: target.style,
      data: { label: target.label, kind: target.kind }
    });
  }
  protectDefaults();
  selectedId.value = targets.value[0]?.id ?? '';
  operatorName.value = targets.value[0]?.operatorName ?? '';
  status.value = '已重建普通点、图片点、路线和作业区，并恢复默认保护';
  refreshRows();
  earth.view.animateFlyTo(center, { zoom: MAP_ZOOM, duration: 420 });
};

const selectTarget = (id: string) => {
  selectedId.value = id;
  const target = targetById(id);
  operatorName.value = earthRef.value?.elements.getProtection(id)?.operatorName ?? target?.operatorName ?? '';
  focusSelected();
};

const selectRow = (row: ProtectionRow) => selectTarget(row.id);

defineExpose({ reset: seed, focusSelected });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = new Earth({
    target: mapTarget.value,
    view: { zoom: MAP_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.46 });
  earth.layers.add({ kind: 'vector', id: BUSINESS_LAYER_ID, zIndex: 30, declutter: true });
  centerRef.value = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earthRef.value = earth;
  seed();
});

onBeforeUnmount(() => {
  if (expiryRefreshTimer !== undefined) clearTimeout(expiryRefreshTimer);
  earthRef.value?.destroy();
  earthRef.value = null;
  centerRef.value = null;
  targets.value = [];
});
<\/script>

<template>
  <div class="example-demo element-protection-demo">
    <el-alert
      class="example-demo__alert"
      type="info"
      :closable="false"
      show-icon
      title="保护层只表达协同编辑占用状态：Element 仍可命中和读取，但内置 Edit / Transform 不会接管受保护目标。"
    />

    <div class="element-protection-demo__catalog" aria-label="保护目标目录">
      <el-button
        v-for="row in rows"
        :key="row.id"
        class="element-protection-demo__target"
        :type="selectedId === row.id ? 'primary' : 'default'"
        :plain="selectedId !== row.id"
        :aria-pressed="selectedId === row.id"
        @click="selectTarget(row.id)"
      >
        <span>{{ row.label }}</span>
        <small>{{ row.kind }} · {{ row.protection === undefined ? '可编辑' : '保护中' }}</small>
      </el-button>
    </div>

    <div class="example-demo__control-panel">
      <div class="example-demo__control-grid element-protection-demo__controls">
        <div class="example-demo__field">
          <span>正在操作的人</span>
          <el-input v-model="operatorName" clearable aria-label="正在操作的人名称" placeholder="可选" />
        </div>
        <div class="example-demo__action-group">
          <span>保护状态</span>
          <div class="example-demo__action-buttons">
            <el-button type="warning" @click="setSelectedProtection(true)">进入保护</el-button>
            <el-button @click="setSelectedProtection(false)">解除保护</el-button>
            <el-button plain @click="protectForTenSeconds">保护 10 秒</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>交互验证</span>
          <div class="example-demo__action-buttons">
            <el-button type="primary" plain @click="tryBuiltInEdit">尝试启动 Edit</el-button>
          </div>
        </div>
      </div>
      <div class="example-demo__feedback" aria-live="polite">
        <el-tag type="warning" effect="dark">保护中 {{ protectedCount }} / {{ rows.length }}</el-tag>
        <el-tag :type="selectedRow?.protection === undefined ? 'success' : 'warning'" effect="plain">
          当前：{{ selectedRow?.protection === undefined ? '可编辑' : (selectedRow.protection.operatorName ?? '其他用户') }}
        </el-tag>
        <el-tag effect="plain">{{ status }}</el-tag>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-table :data="rows" border size="small" row-key="id" class="element-protection-demo__table" @row-click="selectRow">
      <el-table-column prop="label" label="目标" min-width="100" />
      <el-table-column prop="kind" label="几何" min-width="100" />
      <el-table-column label="状态" min-width="100">
        <template #default="scope">{{ scope.row.protection === undefined ? '可编辑' : '保护中' }}</template>
      </el-table-column>
      <el-table-column label="操作人" min-width="130">
        <template #default="scope">{{ scope.row.protection?.operatorName ?? '—' }}</template>
      </el-table-column>
      <el-table-column label="Revision" min-width="100">
        <template #default="scope">{{ scope.row.protection?.revision ?? '—' }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.element-protection-demo__catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.element-protection-demo__target.el-button {
  height: auto;
  min-width: 0;
  margin: 0;
  padding: 10px 12px;
  white-space: normal;
}

.element-protection-demo__target :deep(span) {
  display: grid;
  width: 100%;
  justify-items: start;
  gap: 3px;
  text-align: left;
}

.element-protection-demo__target small {
  color: var(--doc-text-muted);
  font-weight: 400;
}

.element-protection-demo__controls {
  grid-template-columns: minmax(160px, 0.8fr) minmax(260px, 1.5fr) minmax(150px, 0.7fr);
}

.element-protection-demo__table {
  margin-top: 14px;
}

.element-protection-demo__table :deep(.el-table__row) {
  cursor: pointer;
}

@media (max-width: 760px) {
  .element-protection-demo__controls {
    grid-template-columns: 1fr;
  }
}
</style>
`,H={class:`doc-page-layout`},U={class:`doc-page`},W={id:`overview`,class:`doc-prose`},G={id:`runtime-model`,class:`doc-prose`},K={id:`example-element-protection`,class:`doc-prose`},q={id:`collaboration-ordering`,class:`doc-prose`},J={id:`api-types`,class:`doc-prose`},Y={id:`api-methods`,class:`doc-prose`},X={class:`doc-page-layout__aside`},Z=n({__name:`ElementProtectionView`,setup(e){let n=T(V,`element-protection`),r=t(null),i=()=>r.value?.reset(),o=()=>r.value?.focusSelected(),c=[{id:`overview`,label:`保护模式解决什么问题`},{id:`runtime-model`,label:`运行时状态模型`},{id:`example-element-protection`,label:`点、图片点、线与面保护`},{id:`interaction-boundary`,label:`交互与写入边界`},{id:`collaboration-ordering`,label:`协同版本与到期`},{id:`api-types`,label:`保护类型`,children:[{id:`api-type-element-protection-update`,label:`ElementProtectionUpdate`},{id:`api-type-element-protection-state`,label:`ElementProtectionState`}]},{id:`api-methods`,label:`保护方法`},{id:`api`,label:`完整 API`}],u=[{prop:`name`,label:`类型`,width:250,presentation:`type`},{prop:`fields`,label:`主要字段`,width:390,monospace:!0},{prop:`desc`,label:`说明`,width:430}],p=[{anchor:`api-type-element-protection-update`,href:`/api/types#api-type-element-protection-update`,name:`ElementProtectionUpdate`,fields:`protected · operatorId? · operatorName? · revision? · expiresAt?`,desc:`按 protected 判别的更新联合；解锁分支只接收 protected: false 与可选 revision`},{anchor:`api-type-element-protection-state`,href:`/api/types#api-type-element-protection-state`,name:`ElementProtectionState`,fields:`elementId · protected: true · operatorId? · operatorName? · revision? · expiresAt?`,desc:`当前生效的只读运行时快照；未保护时 getProtection 返回 undefined`}],m=[{prop:`name`,label:`方法`,width:210,presentation:`method`},{prop:`params`,label:`参数`,width:390,linkTypes:!0},{prop:`returns`,label:`返回值`,width:190,linkTypes:!0},{prop:`desc`,label:`说明`,width:430}],h=[{anchor:`api-method-set-protection`,href:`/api/types#api-type-element-service-method-set-protection`,name:`setProtection`,params:`id: string, update: ElementProtectionUpdate`,returns:`boolean`,desc:`应用保护、解锁或租约更新；只有当前保护状态实际改变时返回 true`},{anchor:`api-method-get-protection`,href:`/api/types#api-type-element-service-method-get-protection`,name:`getProtection`,params:`id: string`,returns:`ElementProtectionState | undefined`,desc:`读取当前代次的保护快照；目标不存在、未保护或已到期时返回 undefined`}],C=[`ElementProtectionUpdate`,`ElementProtectionState`],w={ElementService:[`setProtection`,`getProtection`]};return(e,t)=>{let T=l(`el-alert`),E=l(`el-descriptions-item`),O=l(`el-descriptions`);return d(),a(`div`,H,[f(`article`,U,[t[25]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图元素`),f(`h1`,null,`协同保护模式`),f(`p`,null,`把远端“谁正在编辑”同步为 Element 的运行时保护状态，用统一遮罩和操作人标签提示本地用户，并阻止内置编辑交互接管同一目标。`)],-1),f(`section`,W,[t[4]||=f(`h2`,{class:`doc-h2`},`保护模式解决什么问题`,-1),f(`p`,null,[t[1]||=s(` 协同服务收到加锁、续租或解锁消息后，调用 `,-1),_(S,{kind:`method`,to:`#api-method-set-protection`},{default:g(()=>[...t[0]||=[s(`earth.elements.setProtection`,-1)]]),_:1}),t[2]||=s(` 更新指定 ID。本地地图会按 Point、图片 Point、Polyline、Polygon 或 Circle 的几何形态显示保护视觉，并用操作人名称说明占用来源。 `,-1)]),_(T,{type:`warning`,closable:!1,"show-icon":``,title:`保护提示不等于服务端并发锁`},{default:g(()=>[...t[3]||=[s(` 客户端保护模式改善可见性并约束本库内置交互；最终写入仍应由协同服务使用原子锁、租约或版本条件校验，不能只信任前端状态。 `,-1)]]),_:1})]),f(`section`,G,[t[12]||=f(`h2`,{class:`doc-h2`},`运行时状态模型`,-1),f(`p`,null,[t[6]||=s(` 保护状态按 Element ID 与当前代次保存，不写入 `,-1),_(S,{kind:`property`,to:`/components/elements/overview#api-property-state`},{default:g(()=>[...t[5]||=[s(`Element.state`,-1)]]),_:1}),t[7]||=s(`，也不会进入 snapshot、copy、历史记录或业务 VectorSource。 删除 Element、用同一 ID 创建新代次或销毁 Earth 时，旧保护与视觉资源都会清理。 `,-1)]),_(O,{column:1,border:``},{default:g(()=>[_(E,{label:`protected`},{default:g(()=>[...t[8]||=[s(`true 表示进入保护；false 表示解除保护。`,-1)]]),_:1}),_(E,{label:`operatorId / operatorName`},{default:g(()=>[...t[9]||=[s(`稳定用户 ID 便于业务识别；可选名称只用于安全文本展示。`,-1)]]),_:1}),_(E,{label:`revision`},{default:g(()=>[...t[10]||=[s(`协同消息的单调版本；忽略迟到、重复或更旧的更新。`,-1)]]),_:1}),_(E,{label:`expiresAt`},{default:g(()=>[...t[11]||=[s(`可选的毫秒时间戳；到期后自动解除，适合与服务端租约配合。`,-1)]]),_:1})]),_:1})]),f(`section`,K,[_(y,{title:`点、图片点、线与面保护`,source:v(V),snippet:v(n),"source-lang":`vue`,"snippet-lang":`typescript`,"show-reset":``,"show-focus":``,onReset:i,onFocus:o},{description:g(()=>[f(`p`,null,[t[16]||=s(` 示例为普通点、SVG 图片点、路线和作业区分别设置保护。选择目标后可调用 `,-1),_(S,{kind:`method`,to:`#api-method-set-protection`},{default:g(()=>[...t[13]||=[s(`setProtection`,-1)]]),_:1}),t[17]||=s(` 加锁、解锁或设置 10 秒到期时间，并用 `,-1),_(S,{kind:`method`,to:`#api-method-get-protection`},{default:g(()=>[...t[14]||=[s(`getProtection`,-1)]]),_:1}),t[18]||=s(` 刷新表格。点击“尝试启动 Edit”可直接验证受保护目标会抛出 `,-1),_(S,{kind:`type`,to:`/components/reference/errors#api-error-element-protected`},{default:g(()=>[...t[15]||=[s(`ElementProtectedError`,-1)]]),_:1}),t[19]||=s(`。 `,-1)])]),preview:g(()=>[_(B,{ref_key:`elementProtectionDemoRef`,ref:r},null,512)]),_:1},8,[`source`,`snippet`])]),t[26]||=f(`section`,{id:`interaction-boundary`,class:`doc-prose`},[f(`h2`,{class:`doc-h2`},`交互与写入边界`),f(`ul`,null,[f(`li`,null,`受保护目标仍能被事件、atPixel 和业务查询命中，因此本地用户仍可查看属性、定位目标或打开只读信息。`),f(`li`,null,`draw.edit 与 transform.select 会在启动前拒绝受保护目标；活动 Edit / Transform 期间收到保护消息时，会取消工作态并回滚未提交修改。`),f(`li`,null,`解除保护不会自动重启先前会话，用户需要重新发起编辑，避免远端状态变化触发意外操作。`),f(`li`,null,` element.update、elements.update/remove、样式 API 与原生 OpenLayers Interaction 不会被保护状态全局拦截，以便协同客户端仍能应用服务端确认的远端更新。 `)])],-1),f(`section`,q,[t[21]||=f(`h2`,{class:`doc-h2`},`协同版本与到期`,-1),t[22]||=f(`p`,null,` 同一个 Element 建议始终传递服务端生成的单调 revision。较旧或相同 revision、幂等命令、未知 ID 以及已经到期且没有形成状态的更新都会返回 false；带 revision 的到期输入仍会推进内部乱序水位，防止更旧的加锁消息随后重新生效。未使用版本时，则按当前客户端的到达顺序处理。 `,-1),_(T,{type:`info`,closable:!1,"show-icon":``,title:`租约到期只是前端兜底`},{default:g(()=>[...t[20]||=[s(` expiresAt 应来自服务端时钟语义，并在续租成功后发送更高 revision。网络断开时前端可以自动撤去过期视觉，但提交仍须重新经过服务端权限与版本检查。 `,-1)]]),_:1})]),f(`section`,J,[t[23]||=f(`h2`,{class:`doc-h2`},`保护类型`,-1),_(x,{columns:u,rows:p})]),f(`section`,Y,[t[24]||=f(`h2`,{class:`doc-h2`},`保护方法`,-1),_(x,{columns:m,rows:h})]),_(D,{"type-names":C,"member-names":w,description:`完整列出保护更新、当前状态以及 ElementService 上的设置与查询方法；错误类型统一归属“错误类型”页面。`})]),f(`aside`,X,[_(b,{title:`协同保护模式`,items:c})])])}}});export{Z as default};