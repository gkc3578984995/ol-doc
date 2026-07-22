import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,it as d,j as f,ot as p,tt as m,x as h,xt as g,z as _,zt as v}from"./TypeExpression-D6csDz4V.js";import{B as y,H as b,W as x,n as S,s as C,t as w,z as T}from"./index-4uKXPGRf.js";import{t as E}from"./shapeExamples-q799yh_J.js";import{n as D,t as O}from"./interactionExamples-Cqkv5PPr.js";var k={class:`example-demo edit-session-demo`},A={class:`edit-session-demo__catalog`,"aria-label":`Edit 目标目录`},j={class:`example-demo__control-panel`},ee={class:`example-demo__control-grid edit-session-demo__controls`},te={class:`example-demo__action-group`},ne={class:`example-demo__action-buttons`},re={class:`example-demo__action-group`},ie={class:`example-demo__action-buttons`},ae={class:`example-demo__action-group`},oe={class:`example-demo__action-buttons`},se={class:`example-demo__field edit-session-demo__field`},ce={class:`example-demo__feedback`,"aria-live":`polite`},le={class:`edit-session-demo__map-shell`},M=`docs-edit-targets`,N=`docs-edit-target`,P=`polygon`,F=`data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="56" viewBox="0 0 48 56"%3E%3Cpath fill="%232563eb" stroke="white" stroke-width="3" d="M24 2C12.4 2 3 11.4 3 23c0 15.8 21 31 21 31s21-15.2 21-31C45 11.4 35.6 2 24 2Z"/%3E%3Ccircle cx="24" cy="23" r="8" fill="white"/%3E%3C/svg%3E`,I=h(n({__name:`EditSessionDemo`,setup(n,{expose:h}){let y=t(null),b=i(null),x=i(null),w=i(null),T=i(null),I=t(P),L=t(`idle`),R=t(!0),z=t(0),B=t(0),V=t(`选择目标后开始编辑`),H=t(`拖拽蓝色控制点后可撤销`),U=t(`目标保持初始业务状态`),W=[],G=e(()=>L.value===`active`),K=e(()=>O[I.value]),q=D.map(e=>({target:e.label,move:e.edit.move?`支持`:`— 不支持`,insert:e.edit.insert?`支持`:`— 不支持`,remove:e.edit.remove?`支持`:`— 不支持`,note:e.description})),J=e=>e.type===`circle`?2:e.controlPoints.length,ue=e=>e===`point-icon`?{symbol:{type:`icon`,src:F,size:[48,56],anchor:[.5,1],anchorXUnits:`fraction`,anchorYUnits:`fraction`}}:e===`polyline`?{strokes:[{color:`#2563eb`,width:7}]}:{strokes:[{color:`#2563eb`,width:5}],fill:{type:`solid`,color:`rgba(37, 99, 235, 0.28)`}},Y=()=>{for(let e of W.splice(0))e()},X=()=>{Y(),w.value?.destroy(),w.value=null,L.value=`idle`},Z=()=>{let e=b.value,t=T.value;if(e===null||t===null)return;let n=e.elements.get(N);n!==void 0&&n.remove();let r=K.value,i=e.elements.add({id:N,layerId:M,module:`docs-edit`,geometry:E(r.type,[t[0],t[1]],r.type===`point`?1:12e3),style:ue(r.id),data:{example:r.id}});x.value=i,B.value=J(i.state.geometry)},de=e=>{G.value||(I.value=e,z.value=0,V.value=`已切换到 ${O[e].label}`,H.value=`尚未产生编辑历史`,U.value=`新目标保持初始业务状态`,Z(),Q())},fe=()=>{let e=b.value,t=x.value;if(e===null||t===null)return;X();let n=e.draw.edit(t,{underlay:R.value,policy:`replace`});w.value=n,L.value=n.status,z.value=0,V.value=`正在编辑 ${K.value.label}`,H.value=`工作态尚无历史`,W=[n.on(`modifying`,({operation:e,geometry:t})=>{z.value+=1,B.value=J(t),V.value=e}),n.on(`complete`,({element:e})=>{B.value=J(e.state.geometry),U.value=`已提交 ${e.state.geometry.type}，ID 仍为 ${e.id}`,V.value=`complete`}),n.on(`cancel`,({reason:e})=>{V.value=`cancel · ${e}`,U.value=`未提交工作态，Store 保持不变`})],n.finished.then(()=>{L.value=n.status,Y()})},pe=()=>{H.value=w.value?.undo()===!0?`已撤销最近一次完整编辑操作`:`当前没有可撤销操作`},me=()=>{H.value=w.value?.redo()===!0?`已重做下一次编辑操作`:`当前没有可重做操作`},he=()=>{w.value?.finish(),w.value!==null&&(L.value=w.value.status)},ge=()=>{w.value?.cancel(),w.value!==null&&(L.value=w.value.status)},Q=()=>{let e=b.value,t=T.value;e===null||t===null||e.view.flyTo(t,K.value.type===`point`?11:10)},$=()=>{X(),z.value=0,V.value=`已恢复当前目录目标`,H.value=`尚未产生编辑历史`,U.value=`目标保持初始业务状态`,Z(),Q()};return h({reset:$,focus:Q}),m(()=>{if(y.value===null)return;let e=new C({target:y.value,view:{zoom:10},controls:{zoom:!0,rotate:!1,attribution:!0}});S(e,`vector`),e.layers.add({kind:`vector`,id:M,zIndex:30}),T.value=e.view.toProjectedCoordinates([116.4,39.92]),b.value=e,Z(),Q()}),o(()=>{X(),b.value?.destroy(),b.value=null,x.value=null}),(e,t)=>{let n=l(`el-alert`),i=l(`el-button`),o=l(`el-descriptions-item`),m=l(`el-descriptions`),h=l(`el-switch`),b=l(`el-tag`),x=l(`el-table-column`),S=l(`el-table`);return d(),a(`div`,k,[_(n,{class:`example-demo__alert`,type:`info`,closable:!1,"show-icon":``,title:`选择不同 Shape 后再开始编辑；蓝色实心圆是控制点，浅蓝虚线圆是合法插入候选。`}),f(`div`,A,[(d(!0),a(c,null,p(v(D),e=>(d(),r(i,{key:e.id,class:`edit-session-demo__target-card`,type:I.value===e.id?`primary`:`default`,plain:I.value!==e.id,disabled:G.value,"aria-pressed":I.value===e.id,onClick:t=>de(e.id)},{default:g(()=>[f(`span`,null,u(e.label),1),f(`small`,null,u(e.type),1)]),_:2},1032,[`type`,`plain`,`disabled`,`aria-pressed`,`onClick`]))),128))]),_(m,{class:`edit-session-demo__target-detail`,column:2,border:``},{default:g(()=>[_(o,{label:`当前目标`},{default:g(()=>[s(u(K.value.label),1)]),_:1}),_(o,{label:`ShapeType`},{default:g(()=>[s(u(K.value.type),1)]),_:1}),_(o,{label:`移动控制点`},{default:g(()=>[...t[1]||=[s(`支持`,-1)]]),_:1}),_(o,{label:`插入 / 删除`},{default:g(()=>[s(u(K.value.edit.insert?`支持 Alt + 单击插入 / 删除`:`— 不支持，只有固定控制点`),1)]),_:1}),_(o,{label:`说明`,span:2},{default:g(()=>[s(u(K.value.description),1)]),_:1})]),_:1}),f(`div`,j,[f(`div`,ee,[f(`div`,te,[t[3]||=f(`span`,null,`会话启动`,-1),f(`div`,ne,[_(i,{type:`primary`,onClick:fe},{default:g(()=>[...t[2]||=[s(`开始编辑当前目标`,-1)]]),_:1})])]),f(`div`,re,[t[6]||=f(`span`,null,`历史`,-1),f(`div`,ie,[_(i,{disabled:!G.value,onClick:pe},{default:g(()=>[...t[4]||=[s(`撤销`,-1)]]),_:1},8,[`disabled`]),_(i,{disabled:!G.value,onClick:me},{default:g(()=>[...t[5]||=[s(`重做`,-1)]]),_:1},8,[`disabled`])])]),f(`div`,ae,[t[11]||=f(`span`,null,`会话结束`,-1),f(`div`,oe,[_(i,{disabled:!G.value,onClick:he},{default:g(()=>[...t[7]||=[s(`完成并提交`,-1)]]),_:1},8,[`disabled`]),_(i,{disabled:!G.value,onClick:ge},{default:g(()=>[...t[8]||=[s(`取消并回滚`,-1)]]),_:1},8,[`disabled`]),_(i,{disabled:w.value===null,onClick:X},{default:g(()=>[...t[9]||=[s(`销毁 Session`,-1)]]),_:1},8,[`disabled`]),_(i,{plain:``,disabled:G.value,onClick:$},{default:g(()=>[...t[10]||=[s(`恢复当前目标`,-1)]]),_:1},8,[`disabled`])])])]),f(`div`,se,[t[12]||=f(`span`,null,`显示原始轮廓`,-1),_(h,{modelValue:R.value,"onUpdate:modelValue":t[0]||=e=>R.value=e,disabled:G.value},null,8,[`modelValue`,`disabled`])]),f(`div`,ce,[_(b,{type:G.value?`success`:`info`},{default:g(()=>[s(u(L.value),1)]),_:1},8,[`type`]),_(b,{type:`primary`,effect:`plain`},{default:g(()=>[...t[13]||=[s(`控制点：拖拽`,-1)]]),_:1}),K.value.edit.insert?(d(),r(b,{key:0,type:`info`,effect:`plain`},{default:g(()=>[...t[14]||=[s(`插入 / 删除：Alt + 单击`,-1)]]),_:1})):(d(),r(b,{key:1,type:`info`,effect:`plain`},{default:g(()=>[...t[15]||=[s(`固定拓扑：不支持插入 / 删除`,-1)]]),_:1}))])]),f(`div`,le,[f(`div`,{ref_key:`mapTarget`,ref:y,class:`example-stage`},null,512),t[16]||=f(`div`,{class:`edit-session-demo__map-guide`},`先点“开始编辑当前目标”，再拖拽地图上的蓝色控制点`,-1)]),_(m,{class:`edit-session-demo__summary`,column:2,border:``},{default:g(()=>[_(o,{label:`工作态操作数`},{default:g(()=>[s(u(z.value),1)]),_:1}),_(o,{label:`当前控制点`},{default:g(()=>[s(u(B.value),1)]),_:1}),_(o,{label:`最近语义`},{default:g(()=>[s(u(V.value),1)]),_:1}),_(o,{label:`撤销 / 重做`},{default:g(()=>[s(u(H.value),1)]),_:1}),_(o,{label:`Store 提交`,span:2},{default:g(()=>[s(u(U.value),1)]),_:1})]),_:1}),t[17]||=f(`h4`,{class:`edit-session-demo__matrix-title`},`目标支持矩阵`,-1),_(S,{data:v(q),border:``,size:`small`},{default:g(()=>[_(x,{prop:`target`,label:`目标`,"min-width":`190`}),_(x,{prop:`move`,label:`移动`,"min-width":`90`}),_(x,{prop:`insert`,label:`插入`,"min-width":`110`}),_(x,{prop:`remove`,label:`删除`,"min-width":`110`}),_(x,{prop:`note`,label:`能力说明 / 不支持项`,"min-width":`330`})]),_:1},8,[`data`])])}}}),[[`__scopeId`,`data-v-e4b2b521`]]),L=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { Earth, type Coordinate, type EditSession, type Element, type ShapeState, type StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';
import { interactionTargetById, interactionTargetExamples, type InteractionTargetId } from '../../config/interactionExamples';
import { createShapeExampleInput } from '../../config/shapeExamples';

const LAYER_ID = 'docs-edit-targets';
const TARGET_ID = 'docs-edit-target';
const DEFAULT_TARGET: InteractionTargetId = 'polygon';
const ICON_SOURCE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="56" viewBox="0 0 48 56"%3E%3Cpath fill="%232563eb" stroke="white" stroke-width="3" d="M24 2C12.4 2 3 11.4 3 23c0 15.8 21 31 21 31s21-15.2 21-31C45 11.4 35.6 2 24 2Z"/%3E%3Ccircle cx="24" cy="23" r="8" fill="white"/%3E%3C/svg%3E';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const targetRef = shallowRef<Element | null>(null);
const sessionRef = shallowRef<EditSession | null>(null);
const mapCenter = shallowRef<Coordinate | null>(null);
const selectedTargetId = ref<InteractionTargetId>(DEFAULT_TARGET);
const status = ref<'idle' | EditSession['status']>('idle');
const underlay = ref(true);
const operationCount = ref(0);
const currentControlPoints = ref(0);
const lastOperation = ref('选择目标后开始编辑');
const historyResult = ref('拖拽蓝色控制点后可撤销');
const storeState = ref('目标保持初始业务状态');
let disposers: Array<() => void> = [];

const isActive = computed(() => status.value === 'active');
const selectedTarget = computed(() => interactionTargetById[selectedTargetId.value]);
const supportRows = interactionTargetExamples.map((target) => ({
  target: target.label,
  move: target.edit.move ? '支持' : '— 不支持',
  insert: target.edit.insert ? '支持' : '— 不支持',
  remove: target.edit.remove ? '支持' : '— 不支持',
  note: target.description
}));

const controlPointCount = (geometry: ShapeState) => (geometry.type === 'circle' ? 2 : geometry.controlPoints.length);

const styleFor = (id: InteractionTargetId): StyleSpec => {
  if (id === 'point-icon') {
    return {
      symbol: { type: 'icon', src: ICON_SOURCE, size: [48, 56], anchor: [0.5, 1], anchorXUnits: 'fraction', anchorYUnits: 'fraction' }
    };
  }
  if (id === 'polyline') return { strokes: [{ color: '#2563eb', width: 7 }] };
  return {
    strokes: [{ color: '#2563eb', width: 5 }],
    fill: { type: 'solid', color: 'rgba(37, 99, 235, 0.28)' }
  };
};

const releaseListeners = () => {
  for (const dispose of disposers.splice(0)) dispose();
};

const destroySession = () => {
  releaseListeners();
  sessionRef.value?.destroy();
  sessionRef.value = null;
  status.value = 'idle';
};

const createTarget = () => {
  const earth = earthRef.value;
  const center = mapCenter.value;
  if (earth === null || center === null) return;
  const existing = earth.elements.get(TARGET_ID);
  if (existing !== undefined) existing.remove();
  const definition = selectedTarget.value;
  const element = earth.elements.add({
    id: TARGET_ID,
    layerId: LAYER_ID,
    module: 'docs-edit',
    geometry: createShapeExampleInput(definition.type, [center[0], center[1]], definition.type === 'point' ? 1 : 12_000),
    style: styleFor(definition.id),
    data: { example: definition.id }
  });
  targetRef.value = element;
  currentControlPoints.value = controlPointCount(element.state.geometry);
};

const selectTarget = (id: InteractionTargetId) => {
  if (isActive.value) return;
  selectedTargetId.value = id;
  operationCount.value = 0;
  lastOperation.value = \`已切换到 \${interactionTargetById[id].label}\`;
  historyResult.value = '尚未产生编辑历史';
  storeState.value = '新目标保持初始业务状态';
  createTarget();
  focus();
};

// #region edit-session-control-points
const start = () => {
  const earth = earthRef.value;
  const element = targetRef.value;
  if (earth === null || element === null) return;
  destroySession();

  const session = earth.draw.edit(element, { underlay: underlay.value, policy: 'replace' });
  sessionRef.value = session;
  status.value = session.status;
  operationCount.value = 0;
  lastOperation.value = \`正在编辑 \${selectedTarget.value.label}\`;
  historyResult.value = '工作态尚无历史';

  disposers = [
    session.on('modifying', ({ operation, geometry }) => {
      operationCount.value += 1;
      currentControlPoints.value = controlPointCount(geometry);
      lastOperation.value = operation;
    }),
    session.on('complete', ({ element: completed }) => {
      currentControlPoints.value = controlPointCount(completed.state.geometry);
      storeState.value = \`已提交 \${completed.state.geometry.type}，ID 仍为 \${completed.id}\`;
      lastOperation.value = 'complete';
    }),
    session.on('cancel', ({ reason }) => {
      lastOperation.value = \`cancel · \${reason}\`;
      storeState.value = '未提交工作态，Store 保持不变';
    })
  ];

  void session.finished.then(() => {
    status.value = session.status;
    releaseListeners();
  });
};

const undo = () => {
  historyResult.value = sessionRef.value?.undo() === true ? '已撤销最近一次完整编辑操作' : '当前没有可撤销操作';
};

const redo = () => {
  historyResult.value = sessionRef.value?.redo() === true ? '已重做下一次编辑操作' : '当前没有可重做操作';
};

const finish = () => {
  sessionRef.value?.finish();
  if (sessionRef.value !== null) status.value = sessionRef.value.status;
};

const cancel = () => {
  sessionRef.value?.cancel();
  if (sessionRef.value !== null) status.value = sessionRef.value.status;
};
// #endregion edit-session-control-points

const focus = () => {
  const earth = earthRef.value;
  const center = mapCenter.value;
  if (earth === null || center === null) return;
  earth.view.flyTo(center, selectedTarget.value.type === 'point' ? 11 : 10);
};

const reset = () => {
  destroySession();
  operationCount.value = 0;
  lastOperation.value = '已恢复当前目录目标';
  historyResult.value = '尚未产生编辑历史';
  storeState.value = '目标保持初始业务状态';
  createTarget();
  focus();
};

defineExpose({ reset, focus });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = new Earth({
    target: mapTarget.value,
    view: { zoom: 10 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earth.layers.add({ kind: 'vector', id: LAYER_ID, zIndex: 30 });
  mapCenter.value = earth.view.toProjectedCoordinates([116.4, 39.92]);
  earthRef.value = earth;
  createTarget();
  focus();
});

onBeforeUnmount(() => {
  destroySession();
  earthRef.value?.destroy();
  earthRef.value = null;
  targetRef.value = null;
});
<\/script>

<template>
  <div class="example-demo edit-session-demo">
    <el-alert
      class="example-demo__alert"
      type="info"
      :closable="false"
      show-icon
      title="选择不同 Shape 后再开始编辑；蓝色实心圆是控制点，浅蓝虚线圆是合法插入候选。"
    />

    <div class="edit-session-demo__catalog" aria-label="Edit 目标目录">
      <el-button
        v-for="target in interactionTargetExamples"
        :key="target.id"
        class="edit-session-demo__target-card"
        :type="selectedTargetId === target.id ? 'primary' : 'default'"
        :plain="selectedTargetId !== target.id"
        :disabled="isActive"
        :aria-pressed="selectedTargetId === target.id"
        @click="selectTarget(target.id)"
      >
        <span>{{ target.label }}</span>
        <small>{{ target.type }}</small>
      </el-button>
    </div>

    <el-descriptions class="edit-session-demo__target-detail" :column="2" border>
      <el-descriptions-item label="当前目标">{{ selectedTarget.label }}</el-descriptions-item>
      <el-descriptions-item label="ShapeType">{{ selectedTarget.type }}</el-descriptions-item>
      <el-descriptions-item label="移动控制点">支持</el-descriptions-item>
      <el-descriptions-item label="插入 / 删除">
        {{ selectedTarget.edit.insert ? '支持 Alt + 单击插入 / 删除' : '— 不支持，只有固定控制点' }}
      </el-descriptions-item>
      <el-descriptions-item label="说明" :span="2">{{ selectedTarget.description }}</el-descriptions-item>
    </el-descriptions>

    <div class="example-demo__control-panel">
      <div class="example-demo__control-grid edit-session-demo__controls">
        <div class="example-demo__action-group">
          <span>会话启动</span>
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="start">开始编辑当前目标</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>历史</span>
          <div class="example-demo__action-buttons">
            <el-button :disabled="!isActive" @click="undo">撤销</el-button>
            <el-button :disabled="!isActive" @click="redo">重做</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>会话结束</span>
          <div class="example-demo__action-buttons">
            <el-button :disabled="!isActive" @click="finish">完成并提交</el-button>
            <el-button :disabled="!isActive" @click="cancel">取消并回滚</el-button>
            <el-button :disabled="sessionRef === null" @click="destroySession">销毁 Session</el-button>
            <el-button plain :disabled="isActive" @click="reset">恢复当前目标</el-button>
          </div>
        </div>
      </div>
      <div class="example-demo__field edit-session-demo__field">
        <span>显示原始轮廓</span>
        <el-switch v-model="underlay" :disabled="isActive" />
      </div>
      <div class="example-demo__feedback" aria-live="polite">
        <el-tag :type="isActive ? 'success' : 'info'">{{ status }}</el-tag>
        <el-tag type="primary" effect="plain">控制点：拖拽</el-tag>
        <el-tag v-if="selectedTarget.edit.insert" type="info" effect="plain">插入 / 删除：Alt + 单击</el-tag>
        <el-tag v-else type="info" effect="plain">固定拓扑：不支持插入 / 删除</el-tag>
      </div>
    </div>
    <div class="edit-session-demo__map-shell">
      <div ref="mapTarget" class="example-stage"></div>
      <div class="edit-session-demo__map-guide">先点“开始编辑当前目标”，再拖拽地图上的蓝色控制点</div>
    </div>
    <el-descriptions class="edit-session-demo__summary" :column="2" border>
      <el-descriptions-item label="工作态操作数">{{ operationCount }}</el-descriptions-item>
      <el-descriptions-item label="当前控制点">{{ currentControlPoints }}</el-descriptions-item>
      <el-descriptions-item label="最近语义">{{ lastOperation }}</el-descriptions-item>
      <el-descriptions-item label="撤销 / 重做">{{ historyResult }}</el-descriptions-item>
      <el-descriptions-item label="Store 提交" :span="2">{{ storeState }}</el-descriptions-item>
    </el-descriptions>

    <h4 class="edit-session-demo__matrix-title">目标支持矩阵</h4>
    <el-table :data="supportRows" border size="small">
      <el-table-column prop="target" label="目标" min-width="190" />
      <el-table-column prop="move" label="移动" min-width="90" />
      <el-table-column prop="insert" label="插入" min-width="110" />
      <el-table-column prop="remove" label="删除" min-width="110" />
      <el-table-column prop="note" label="能力说明 / 不支持项" min-width="330" />
    </el-table>
  </div>
</template>

<style scoped>
.edit-session-demo__catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.edit-session-demo__target-card.el-button {
  height: auto;
  min-width: 0;
  margin: 0;
  padding: 10px 12px;
  white-space: normal;
}

.edit-session-demo__target-card :deep(span) {
  display: grid;
  width: 100%;
  justify-items: start;
  gap: 3px;
  text-align: left;
}

.edit-session-demo__target-detail {
  margin-bottom: 12px;
}

.edit-session-demo__controls {
  grid-template-columns: minmax(0, 2fr) minmax(180px, 1fr);
  align-items: stretch;
}

.edit-session-demo__field {
  width: max-content;
  max-width: 100%;
}

.edit-session-demo__map-shell {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.edit-session-demo__map-guide {
  position: absolute;
  top: 12px;
  left: 50%;
  z-index: 2;
  max-width: calc(100% - 32px);
  padding: 7px 12px;
  border: 1px solid var(--doc-border);
  border-radius: 999px;
  background: color-mix(in srgb, var(--doc-surface) 92%, transparent);
  color: var(--doc-text);
  font-size: 12px;
  text-align: center;
  transform: translateX(-50%);
  pointer-events: none;
}

.edit-session-demo__summary {
  margin-top: 14px;
}

.edit-session-demo__matrix-title {
  margin: 18px 0 10px;
  color: var(--doc-text);
}

@media (max-width: 640px) {
  .edit-session-demo__controls {
    grid-template-columns: 1fr;
  }
}
</style>
`,R={class:`doc-page-layout`},z={class:`doc-page`},B={id:`overview`,class:`doc-prose`},V={id:`method-examples`,class:`doc-prose`},H={id:`example-edit-session`,class:`doc-prose`},U={id:`operations`,class:`doc-prose`},W={id:`events`,class:`doc-prose`},G={id:`transaction-boundary`,class:`doc-prose`},K={class:`doc-page-layout__aside`},q=n({__name:`EditView`,setup(e){let n=[{id:`overview`,label:`编辑工作态`},{id:`method-examples`,label:`API 与示例`},{id:`example-edit-session`,label:`多类型目标的控制点编辑、历史与提交回滚`},{id:`operations`,label:`控制点与快捷操作`},{id:`events`,label:`事件和生命周期`},{id:`transaction-boundary`,label:`事务与互斥边界`},{id:`api`,label:`完整 API`}],r=w(L,`edit-session-control-points`),i=t(null),o=()=>i.value?.reset(),c=()=>i.value?.focus(),u=[{owner:`DrawService`,members:`edit()`,focus:`传入实时 Element 和 EditOptions`},{owner:`EditSession`,members:`element / status / finished`,focus:`目标句柄、同步状态和异步终态`},{owner:`EditSession`,members:`undo() / redo()`,focus:`移动、插入与删除的会话历史`},{owner:`EditSession`,members:`finish() / cancel() / destroy()`,focus:`提交、回滚与释放临时视觉`},{owner:`EditSession`,members:`on()`,focus:`modifying / complete / cancel 事件`}],p=[{input:`拖拽控制点`,result:`移动已有拓扑点`,cursor:`move → grabbing`,topology:`ShapeDefinition.editTopology.move`},{input:`Alt + 单击插入点`,result:`在合法候选位置插入点`,cursor:`move`,topology:`editTopology.insert（可选）`},{input:`Alt + 单击控制点`,result:`仅删除 removable 控制点`,cursor:`move`,topology:`editTopology.remove（可选）`},{input:`右击 / finish()`,result:`提交当前工作几何`,cursor:`恢复外部光标`,topology:`一次 Store 事务`},{input:`Esc / cancel()`,result:`丢弃工作几何`,cursor:`恢复外部光标`,topology:`不写 Store`}],m=[{name:`modifying`,payload:`element、geometry、operation、coordinate?`,meaning:`工作几何变化；geometry 尚未提交`},{name:`complete`,payload:`element`,meaning:`最终几何成功提交，句柄仍指向同一 Element`},{name:`cancel`,payload:`reason`,meaning:`取消、替换、销毁或外部状态冲突，没有提交`}],h=[`DrawService`,`EditOptions`,`EditSession`,`EditSessionEventMap`],S={DrawService:[`edit`]};return(e,t)=>{let C=l(`el-alert`),w=l(`el-table-column`),E=l(`el-link`),D=l(`el-table`),O=l(`el-card`),k=l(`el-col`),A=l(`el-row`);return d(),a(`div`,R,[f(`article`,z,[t[39]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图交互`),f(`h1`,null,`编辑（Edit）`),f(`p`,null,`在隔离的工作态中移动、插入或删除 Shape 控制点，完成时一次提交，取消时完整回滚。`)],-1),f(`section`,B,[t[9]||=f(`h2`,{class:`doc-h2`},`编辑的是 Session 工作态，不是 Store`,-1),f(`p`,null,[t[3]||=s(` 通过 `,-1),_(x,{kind:`method`,to:`/api/types#api-type-draw-service-method-edit`},{default:g(()=>[...t[0]||=[s(`earth.draw.edit`,-1)]]),_:1}),t[4]||=s(` 传入当前 Earth 的实时 `,-1),_(x,{kind:`type`,to:`/api/types#api-type-element`},{default:g(()=>[...t[1]||=[s(`Element`,-1)]]),_:1}),t[5]||=s(`。 `,-1),_(x,{kind:`type`,to:`/api/types#api-type-edit-session`},{default:g(()=>[...t[2]||=[s(`EditSession`,-1)]]),_:1}),t[6]||=s(` 会隔离持久 Feature，工作图形保留真实业务样式并叠加蓝色编辑强调层。 `,-1)]),_(C,{type:`info`,closable:!1,"show-icon":``,title:`underlay 只是一份可选参照`},{default:g(()=>[_(x,{kind:`property`,to:`/api/types#api-type-edit-options-property-underlay`},{default:g(()=>[...t[7]||=[s(`EditOptions.underlay`,-1)]]),_:1}),t[8]||=s(` 为 true 时保留低对比度原始轮廓；它不复制业务填充、图标或文字，也不会成为第二份业务对象。 `,-1)]),_:1})]),f(`section`,V,[t[11]||=f(`h2`,{class:`doc-h2`},`公开成员如何对应到示例`,-1),t[12]||=f(`p`,null,`示例把控制点、插入候选、历史和提交状态同时放在地图与结果区中，便于逐个核对 Edit 的公开成员。`,-1),_(D,{data:u,border:``,stripe:``},{default:g(()=>[_(w,{prop:`owner`,label:`归属`,"min-width":`150`}),_(w,{prop:`members`,label:`属性 / 方法`,"min-width":`270`}),_(w,{prop:`focus`,label:`示例重点`,"min-width":`320`}),_(w,{label:`示例`,width:`120`},{default:g(()=>[_(E,{type:`primary`,href:`#example-edit-session`},{default:g(()=>[...t[10]||=[s(`查看示例`,-1)]]),_:1})]),_:1})]),_:1})]),f(`section`,H,[_(y,{title:`多类型目标的控制点编辑、历史与提交回滚`,source:v(L),snippet:v(r),"show-reset":``,"show-focus":``,onReset:o,onFocus:c},{description:g(()=>[f(`p`,null,[t[17]||=s(` 拖拽时监听 `,-1),_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-on`},{default:g(()=>[...t[13]||=[s(`on`,-1)]]),_:1}),t[18]||=s(` 的 `,-1),t[19]||=f(`code`,null,`modifying`,-1),t[20]||=s(` 事件；通过 `,-1),_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-finish`},{default:g(()=>[...t[14]||=[s(`finish`,-1)]]),_:1}),t[21]||=s(`、 `,-1),_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-cancel`},{default:g(()=>[...t[15]||=[s(`cancel`,-1)]]),_:1}),t[22]||=s(` 或 `,-1),_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-destroy`},{default:g(()=>[...t[16]||=[s(`destroy`,-1)]]),_:1}),t[23]||=s(` 进入确定的终态。地图上用不同强度的蓝色锚点区分已有控制点和可插入位置，结果区只展示当前状态，不输出日志。 `,-1)])]),preview:g(()=>[_(I,{ref_key:`editSessionDemoRef`,ref:i},null,512)]),_:1},8,[`source`,`snippet`])]),f(`section`,U,[t[24]||=f(`h2`,{class:`doc-h2`},`控制点、插入点与快捷操作`,-1),_(D,{data:p,border:``},{default:g(()=>[_(w,{prop:`input`,label:`输入`,"min-width":`180`}),_(w,{prop:`result`,label:`结果`,"min-width":`220`}),_(w,{prop:`cursor`,label:`光标`,"min-width":`170`}),_(w,{prop:`topology`,label:`规则来源`,"min-width":`260`})]),_:1}),t[25]||=f(`p`,null,`普通单击插入点不会改变拓扑；是否允许插入、删除以及最小点数都由 ShapeDefinition 决定，调用方无需按 ShapeType 自行分支。`,-1)]),f(`section`,W,[t[34]||=f(`h2`,{class:`doc-h2`},`事件和生命周期`,-1),_(D,{data:m,border:``},{default:g(()=>[_(w,{prop:`name`,label:`事件`,width:`130`}),_(w,{prop:`payload`,label:`主要载荷`,"min-width":`280`}),_(w,{prop:`meaning`,label:`语义`,"min-width":`320`})]),_:1}),f(`ul`,null,[f(`li`,null,[_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-finish`},{default:g(()=>[...t[26]||=[s(`finish`,-1)]]),_:1}),t[27]||=s(` 原子提交当前工作几何并解析 finished。`,-1)]),f(`li`,null,[_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-cancel`},{default:g(()=>[...t[28]||=[s(`cancel`,-1)]]),_:1}),t[29]||=s(` 丢弃工作态，不影响进入编辑前的 ElementState。 `,-1)]),f(`li`,null,[_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-destroy`},{default:g(()=>[...t[30]||=[s(`destroy`,-1)]]),_:1}),t[31]||=s(` 幂等释放预览、锚点、Tooltip、光标及监听。 `,-1)]),f(`li`,null,[_(x,{kind:`method`,to:`/api/types#api-type-edit-session-method-undo`},{default:g(()=>[...t[32]||=[s(`undo`,-1)]]),_:1}),t[33]||=s(` 与 redo 只操作 Session 历史；拖拽中的每一帧不是独立历史命令。 `,-1)])])]),f(`section`,G,[t[38]||=f(`h2`,{class:`doc-h2`},`事务、外部变化与互斥边界`,-1),_(A,{gutter:16},{default:g(()=>[_(k,{xs:24,md:12},{default:g(()=>[_(O,{shadow:`never`},{default:g(()=>[...t[35]||=[f(`strong`,null,`外部状态冲突`,-1),f(`p`,null,`目标被外部更新或移除时，Session 以 external-change / external-remove 取消，旧工作态不会覆盖新业务状态。`,-1)]]),_:1})]),_:1}),_(k,{xs:24,md:12},{default:g(()=>[_(O,{shadow:`never`},{default:g(()=>[...t[36]||=[f(`strong`,null,`独占视觉所有权`,-1),f(`p`,null,`Edit 与 Draw、Measure、Transform 互斥；新 Session 使用 replace 时先完成旧会话的回滚与资源清理。`,-1)]]),_:1})]),_:1})]),_:1}),_(C,{type:`warning`,closable:!1,"show-icon":``,title:`动画不会进入编辑工作态`},{default:g(()=>[...t[37]||=[s(` Edit 期间所有动画采用 pause-and-suppress：冻结 elapsed 并让出临时视觉；完成、取消或打开失败后基于最新 ElementState 恢复。动画帧不会写入 Store、copy 或 snapshot。 `,-1)]]),_:1})]),_(T,{"type-names":h,"member-names":S,title:`Edit 完整 API`,description:`完整展示 DrawService、EditOptions、EditSession 与 EditSessionEventMap 的公开属性、方法、参数和事件载荷。`})]),f(`aside`,K,[_(b,{title:`编辑（Edit）`,items:n})])])}}});export{q as default};