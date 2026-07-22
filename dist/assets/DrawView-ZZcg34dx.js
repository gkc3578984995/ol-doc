import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,it as d,j as f,ln as p,ot as m,tt as h,x as g,xt as _,z as v,zt as y}from"./TypeExpression-D6csDz4V.js";import{B as b,H as x,W as S,_ as C,h as w,n as T,s as ee,t as E,z as D}from"./index-4uKXPGRf.js";import{n as O}from"./shapeExamples-q799yh_J.js";var k={class:`example-demo draw-session-demo`},A=[`aria-label`],j={class:`draw-session-demo__shape-name`},M={class:`example-demo__control-panel`},N={class:`example-demo__control-grid draw-session-demo__controls`},P={class:`example-demo__action-group`},te={class:`example-demo__action-buttons`},ne={class:`example-demo__action-group`},re={class:`example-demo__action-buttons`},ie={class:`example-demo__action-group`},F={class:`example-demo__action-buttons`},ae={class:`example-demo__action-group`},oe={class:`example-demo__action-buttons`},se={class:`example-demo__feedback`,"aria-live":`polite`},ce={class:`draw-session-demo__map-shell`},le={class:`draw-session-demo__map-guide`},ue=`docs-draw-results`,I=`docs-draw`,de=`polygon`,fe=g(n({__name:`DrawSessionDemo`,setup(n,{expose:g}){let b=Object.freeze({point:1,circle:2,ellipse:2,"fine-arrow":2,"tailed-squad-combat-arrow":2,"assault-direction-arrow":2,"double-arrow":4,rectangle:2,triangle:3,"equilateral-triangle":2,"assemble-polygon":3,sector:3,"lune-polygon":3,"lune-polyline":3}),x=new Set([`point`,`polyline`,`polygon`]),S=new Set([`circle`,`ellipse`]),C=e=>{if(e===`double-arrow`)return`第 4 次单击后自动补齐规范状态的第 5 个控制点并完成`;let t=b[e];return t===void 0?`达到最少控制点后，右击地图或点击“完成”提交`:`接受 ${t} 个控制点后自动完成`},E=e=>x.has(e)?`basic`:S.has(e)?`parameter`:`plot`,D=Object.freeze(w.map(e=>{let t=O[e];return Object.freeze({type:e,label:t.label,points:t.points,render:t.render,description:t.description,finish:C(e)})})),fe=Object.freeze([{id:`basic`,label:`基础图形`,entries:D.filter(({type:e})=>E(e)===`basic`)},{id:`parameter`,label:`参数图形`,entries:D.filter(({type:e})=>E(e)===`parameter`)},{id:`plot`,label:`Plot 标绘`,entries:D.filter(({type:e})=>E(e)===`plot`)}]),L=t(null),R=i(null),z=i(null),B=t(`basic`),V=t(de),H=t(`idle`),U=t(`先从目录选择 Shape，再启动绘制`),W=t(0),G=t(0),K=t(0),q=t(`尚未操作`),J=i(null),Y=[],X=e(()=>H.value===`active`),Z=e(()=>D.find(({type:e})=>e===V.value)??D[0]),pe=()=>{for(let e of Y.splice(0))e()},me=e=>{let t=O[e].render;return t===`Point`?{symbol:{type:`circle`,radius:11,fill:{type:`solid`,color:`#f97316`},stroke:{color:`#ffffff`,width:3}}}:t===`LineString`?{strokes:[{color:`#f97316`,width:6}]}:{strokes:[{color:`#ea580c`,width:4}],fill:{type:`solid`,color:`rgba(249, 115, 22, 0.32)`}}},Q=()=>{K.value=R.value?.draw.query({module:I}).length??0},$=()=>{pe(),z.value?.destroy(),z.value=null,H.value=`idle`,W.value=0,G.value=0},he=e=>{X.value||(V.value=e.type,B.value=E(e.type),W.value=0,q.value=`尚未操作`,U.value=`已选择 ${e.label}，${e.finish}`)},ge=()=>{let e=R.value;if(e===null)return;$();let t=e.draw.start({type:V.value,layerId:ue,module:I,style:me(V.value),keepGraphics:!0,policy:`replace`});z.value=t,H.value=t.status,U.value=`正在绘制 ${Z.value.label}：${Z.value.finish}`,q.value=`可使用按钮或 Ctrl/Cmd + Z / Y`,Y=[t.on(`start`,()=>{U.value=`草图已开始，临时预览尚未写入 Store`}),t.on(`click`,({controlPointCount:e})=>{W.value=e,U.value=`已接受 ${e} 个控制点；${Z.value.finish}`}),t.on(`change`,({geometry:e})=>{U.value=`${e.type} 工作预览中（最终渲染为 ${Z.value.render}）`}),t.on(`complete`,()=>{G.value=t.results.length,Q(),U.value=`${Z.value.label} 已提交为 Element`}),t.on(`cancel`,({reason:e})=>{U.value=`已取消：${e}`})],t.finished.then(e=>{H.value=t.status,G.value=e.length,Q(),pe()})},_e=()=>{z.value?.finish(),z.value!==null&&(H.value=z.value.status)},ve=()=>{z.value?.cancel(),z.value!==null&&(H.value=z.value.status)},ye=()=>{q.value=z.value?.undo()===!0?`已撤销一个控制点`:`当前没有可撤销步骤`},be=()=>{q.value=z.value?.redo()===!0?`已恢复一个控制点`:`当前没有可重做步骤`},xe=()=>{Q(),U.value=`query() 找到 ${K.value} 个绘制成果`},Se=()=>{let e=R.value?.draw.clear({module:I})??0;K.value=0,G.value=z.value?.results.length??0,U.value=`clear() 已移除 ${e} 个成果`},Ce=()=>{let e=R.value,t=J.value;e===null||t===null||e.view.flyTo(t,10)};return g({reset:()=>{$(),R.value?.draw.clear({module:I}),B.value=`basic`,V.value=de,K.value=0,q.value=`尚未操作`,U.value=`示例已重置：请选择 Shape 并启动绘制`,Ce()},focus:Ce}),h(()=>{if(L.value===null)return;let e=new ee({target:L.value,view:{zoom:10},controls:{zoom:!0,rotate:!1,attribution:!0}});T(e,`vector`),e.layers.add({kind:`vector`,id:ue,zIndex:30}),J.value=e.view.toProjectedCoordinates([116.4074,39.9042]),e.view.flyTo(J.value,10),R.value=e}),o(()=>{$(),R.value?.draw.clear({module:I}),R.value?.destroy(),R.value=null}),(e,t)=>{let n=l(`el-alert`),i=l(`el-button`),o=l(`el-scrollbar`),h=l(`el-tab-pane`),g=l(`el-tabs`),b=l(`el-descriptions-item`),x=l(`el-descriptions`),S=l(`el-tag`);return d(),a(`div`,k,[v(n,{class:`example-demo__alert`,type:`info`,closable:!1,"show-icon":``,title:`20 种公开 Shape 共用同一个 earth.draw.start()；目录同时说明输入规则、完成方式与最终几何。`}),v(g,{modelValue:B.value,"onUpdate:modelValue":t[0]||=e=>B.value=e,class:`draw-session-demo__catalog-tabs`},{default:_(()=>[(d(!0),a(c,null,m(y(fe),e=>(d(),r(h,{key:e.id,name:e.id,label:`${e.label}（${e.entries.length}）`},{default:_(()=>[v(o,{"max-height":`260px`},{default:_(()=>[f(`div`,{class:`draw-session-demo__catalog`,"aria-label":`${e.label} Shape 目录`},[(d(!0),a(c,null,m(e.entries,e=>(d(),r(i,{key:e.type,class:p([`draw-session-demo__shape-card`,{"is-selected":V.value===e.type}]),type:V.value===e.type?`primary`:`default`,plain:V.value!==e.type,disabled:X.value,"aria-pressed":V.value===e.type,onClick:t=>he(e)},{default:_(()=>[f(`span`,j,u(e.label),1),f(`code`,null,u(e.type),1),f(`small`,null,u(e.points),1)]),_:2},1032,[`class`,`type`,`plain`,`disabled`,`aria-pressed`,`onClick`]))),128))],8,A)]),_:2},1024)]),_:2},1032,[`name`,`label`]))),128))]),_:1},8,[`modelValue`]),v(x,{class:`draw-session-demo__shape-detail`,column:2,border:``},{default:_(()=>[v(b,{label:`当前 Shape`},{default:_(()=>[s(u(Z.value.label)+` · `+u(Z.value.type),1)]),_:1}),v(b,{label:`输入规则`},{default:_(()=>[s(u(Z.value.points),1)]),_:1}),v(b,{label:`完成方式`},{default:_(()=>[s(u(Z.value.finish),1)]),_:1}),v(b,{label:`最终 geometry`},{default:_(()=>[s(u(Z.value.render),1)]),_:1}),v(b,{label:`形状说明`,span:2},{default:_(()=>[s(u(Z.value.description),1)]),_:1})]),_:1}),f(`div`,M,[f(`div`,N,[f(`div`,P,[t[1]||=f(`span`,null,`会话启动`,-1),f(`div`,te,[v(i,{type:`primary`,onClick:ge},{default:_(()=>[s(`启动 `+u(Z.value.label),1)]),_:1})])]),f(`div`,ne,[t[4]||=f(`span`,null,`历史`,-1),f(`div`,re,[v(i,{disabled:!X.value,onClick:ye},{default:_(()=>[...t[2]||=[s(`撤销`,-1)]]),_:1},8,[`disabled`]),v(i,{disabled:!X.value,onClick:be},{default:_(()=>[...t[3]||=[s(`重做`,-1)]]),_:1},8,[`disabled`])])]),f(`div`,ie,[t[8]||=f(`span`,null,`会话结束`,-1),f(`div`,F,[v(i,{disabled:!X.value,onClick:_e},{default:_(()=>[...t[5]||=[s(`完成`,-1)]]),_:1},8,[`disabled`]),v(i,{disabled:!X.value,onClick:ve},{default:_(()=>[...t[6]||=[s(`取消`,-1)]]),_:1},8,[`disabled`]),v(i,{disabled:z.value===null,onClick:$},{default:_(()=>[...t[7]||=[s(`销毁 Session`,-1)]]),_:1},8,[`disabled`])])]),f(`div`,ae,[t[11]||=f(`span`,null,`成果`,-1),f(`div`,oe,[v(i,{plain:``,onClick:xe},{default:_(()=>[...t[9]||=[s(`查询成果`,-1)]]),_:1}),v(i,{plain:``,type:`danger`,onClick:Se},{default:_(()=>[...t[10]||=[s(`清空成果`,-1)]]),_:1})])])]),f(`div`,se,[v(S,{type:X.value?`success`:`info`},{default:_(()=>[s(u(H.value),1)]),_:1},8,[`type`]),f(`span`,null,u(U.value),1)])]),f(`div`,ce,[f(`div`,{ref_key:`mapTarget`,ref:L,class:`example-stage`},null,512),f(`div`,le,u(Z.value.finish),1)]),v(x,{class:`draw-session-demo__summary`,column:2,border:``},{default:_(()=>[v(b,{label:`当前控制点`},{default:_(()=>[s(u(W.value),1)]),_:1}),v(b,{label:`Session.results`},{default:_(()=>[s(u(G.value),1)]),_:1}),v(b,{label:`draw.query()`},{default:_(()=>[s(u(K.value),1)]),_:1}),v(b,{label:`撤销 / 重做`},{default:_(()=>[s(u(q.value),1)]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-bb0169e5`]]),L=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { Earth, shapeTypes, type Coordinate, type DrawSession, type ShapeType, type StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';
import { shapeExampleByType } from '../../config/shapeExamples';

type DrawCategoryId = 'basic' | 'parameter' | 'plot';

interface DrawShapeEntry {
  readonly type: ShapeType;
  readonly label: string;
  readonly points: string;
  readonly render: string;
  readonly description: string;
  readonly finish: string;
}

const RESULT_LAYER_ID = 'docs-draw-results';
const MODULE = 'docs-draw';
const DEFAULT_TYPE: ShapeType = 'polygon';
const autoFinishCounts: Readonly<Partial<Record<ShapeType, number>>> = Object.freeze({
  point: 1,
  circle: 2,
  ellipse: 2,
  'fine-arrow': 2,
  'tailed-squad-combat-arrow': 2,
  'assault-direction-arrow': 2,
  'double-arrow': 4,
  rectangle: 2,
  triangle: 3,
  'equilateral-triangle': 2,
  'assemble-polygon': 3,
  sector: 3,
  'lune-polygon': 3,
  'lune-polyline': 3
});
const basicTypes = new Set<ShapeType>(['point', 'polyline', 'polygon']);
const parameterTypes = new Set<ShapeType>(['circle', 'ellipse']);

const completionText = (type: ShapeType) => {
  if (type === 'double-arrow') return '第 4 次单击后自动补齐规范状态的第 5 个控制点并完成';
  const count = autoFinishCounts[type];
  return count === undefined ? '达到最少控制点后，右击地图或点击“完成”提交' : \`接受 \${count} 个控制点后自动完成\`;
};

const categoryFor = (type: ShapeType): DrawCategoryId => {
  if (basicTypes.has(type)) return 'basic';
  if (parameterTypes.has(type)) return 'parameter';
  return 'plot';
};

const drawShapeEntries: readonly DrawShapeEntry[] = Object.freeze(
  shapeTypes.map((type) => {
    const example = shapeExampleByType[type];
    return Object.freeze({
      type,
      label: example.label,
      points: example.points,
      render: example.render,
      description: example.description,
      finish: completionText(type)
    });
  })
);

const drawCategories = Object.freeze([
  { id: 'basic' as const, label: '基础图形', entries: drawShapeEntries.filter(({ type }) => categoryFor(type) === 'basic') },
  { id: 'parameter' as const, label: '参数图形', entries: drawShapeEntries.filter(({ type }) => categoryFor(type) === 'parameter') },
  { id: 'plot' as const, label: 'Plot 标绘', entries: drawShapeEntries.filter(({ type }) => categoryFor(type) === 'plot') }
]);

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const sessionRef = shallowRef<DrawSession | null>(null);
const selectedCategory = ref<DrawCategoryId>('basic');
const selectedType = ref<ShapeType>(DEFAULT_TYPE);
const status = ref<'idle' | DrawSession['status']>('idle');
const stage = ref('先从目录选择 Shape，再启动绘制');
const controlPointCount = ref(0);
const sessionResultCount = ref(0);
const queryCount = ref(0);
const historyResult = ref('尚未操作');
const mapCenter = shallowRef<Coordinate | null>(null);

let disposers: Array<() => void> = [];

const isActive = computed(() => status.value === 'active');
const selectedEntry = computed(() => drawShapeEntries.find(({ type }) => type === selectedType.value) ?? drawShapeEntries[0]);

const releaseListeners = () => {
  for (const dispose of disposers.splice(0)) dispose();
};

const styleFor = (type: ShapeType): StyleSpec => {
  const render = shapeExampleByType[type].render;
  if (render === 'Point') {
    return {
      symbol: {
        type: 'circle',
        radius: 11,
        fill: { type: 'solid', color: '#f97316' },
        stroke: { color: '#ffffff', width: 3 }
      }
    };
  }
  if (render === 'LineString') return { strokes: [{ color: '#f97316', width: 6 }] };
  return {
    strokes: [{ color: '#ea580c', width: 4 }],
    fill: { type: 'solid', color: 'rgba(249, 115, 22, 0.32)' }
  };
};

const refreshQueryCount = () => {
  queryCount.value = earthRef.value?.draw.query({ module: MODULE }).length ?? 0;
};

const destroySession = () => {
  releaseListeners();
  sessionRef.value?.destroy();
  sessionRef.value = null;
  status.value = 'idle';
  controlPointCount.value = 0;
  sessionResultCount.value = 0;
};

const selectShape = (entry: DrawShapeEntry) => {
  if (isActive.value) return;
  selectedType.value = entry.type;
  selectedCategory.value = categoryFor(entry.type);
  controlPointCount.value = 0;
  historyResult.value = '尚未操作';
  stage.value = \`已选择 \${entry.label}，\${entry.finish}\`;
};

// #region draw-session-lifecycle
const start = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  destroySession();

  const session = earth.draw.start({
    type: selectedType.value,
    layerId: RESULT_LAYER_ID,
    module: MODULE,
    style: styleFor(selectedType.value),
    keepGraphics: true,
    policy: 'replace'
  });
  sessionRef.value = session;
  status.value = session.status;
  stage.value = \`正在绘制 \${selectedEntry.value.label}：\${selectedEntry.value.finish}\`;
  historyResult.value = '可使用按钮或 Ctrl/Cmd + Z / Y';

  disposers = [
    session.on('start', () => {
      stage.value = '草图已开始，临时预览尚未写入 Store';
    }),
    session.on('click', ({ controlPointCount: count }) => {
      controlPointCount.value = count;
      stage.value = \`已接受 \${count} 个控制点；\${selectedEntry.value.finish}\`;
    }),
    session.on('change', ({ geometry }) => {
      stage.value = \`\${geometry.type} 工作预览中（最终渲染为 \${selectedEntry.value.render}）\`;
    }),
    session.on('complete', () => {
      sessionResultCount.value = session.results.length;
      refreshQueryCount();
      stage.value = \`\${selectedEntry.value.label} 已提交为 Element\`;
    }),
    session.on('cancel', ({ reason }) => {
      stage.value = \`已取消：\${reason}\`;
    })
  ];

  void session.finished.then((results) => {
    status.value = session.status;
    sessionResultCount.value = results.length;
    refreshQueryCount();
    releaseListeners();
  });
};

const finish = () => {
  sessionRef.value?.finish();
  if (sessionRef.value !== null) status.value = sessionRef.value.status;
};

const cancel = () => {
  sessionRef.value?.cancel();
  if (sessionRef.value !== null) status.value = sessionRef.value.status;
};

const undo = () => {
  historyResult.value = sessionRef.value?.undo() === true ? '已撤销一个控制点' : '当前没有可撤销步骤';
};

const redo = () => {
  historyResult.value = sessionRef.value?.redo() === true ? '已恢复一个控制点' : '当前没有可重做步骤';
};
// #endregion draw-session-lifecycle

// #region draw-query-clear
const queryResults = () => {
  refreshQueryCount();
  stage.value = \`query() 找到 \${queryCount.value} 个绘制成果\`;
};

const clearResults = () => {
  const removed = earthRef.value?.draw.clear({ module: MODULE }) ?? 0;
  queryCount.value = 0;
  sessionResultCount.value = sessionRef.value?.results.length ?? 0;
  stage.value = \`clear() 已移除 \${removed} 个成果\`;
};
// #endregion draw-query-clear

const focus = () => {
  const earth = earthRef.value;
  const center = mapCenter.value;
  if (earth === null || center === null) return;
  earth.view.flyTo(center, 10);
};

const reset = () => {
  destroySession();
  earthRef.value?.draw.clear({ module: MODULE });
  selectedCategory.value = 'basic';
  selectedType.value = DEFAULT_TYPE;
  queryCount.value = 0;
  historyResult.value = '尚未操作';
  stage.value = '示例已重置：请选择 Shape 并启动绘制';
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
  earth.layers.add({ kind: 'vector', id: RESULT_LAYER_ID, zIndex: 30 });
  mapCenter.value = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earth.view.flyTo(mapCenter.value, 10);
  earthRef.value = earth;
});

onBeforeUnmount(() => {
  destroySession();
  earthRef.value?.draw.clear({ module: MODULE });
  earthRef.value?.destroy();
  earthRef.value = null;
});
<\/script>

<template>
  <div class="example-demo draw-session-demo">
    <el-alert
      class="example-demo__alert"
      type="info"
      :closable="false"
      show-icon
      title="20 种公开 Shape 共用同一个 earth.draw.start()；目录同时说明输入规则、完成方式与最终几何。"
    />

    <el-tabs v-model="selectedCategory" class="draw-session-demo__catalog-tabs">
      <el-tab-pane v-for="category in drawCategories" :key="category.id" :name="category.id" :label="\`\${category.label}（\${category.entries.length}）\`">
        <el-scrollbar max-height="260px">
          <div class="draw-session-demo__catalog" :aria-label="\`\${category.label} Shape 目录\`">
            <el-button
              v-for="entry in category.entries"
              :key="entry.type"
              class="draw-session-demo__shape-card"
              :class="{ 'is-selected': selectedType === entry.type }"
              :type="selectedType === entry.type ? 'primary' : 'default'"
              :plain="selectedType !== entry.type"
              :disabled="isActive"
              :aria-pressed="selectedType === entry.type"
              @click="selectShape(entry)"
            >
              <span class="draw-session-demo__shape-name">{{ entry.label }}</span>
              <code>{{ entry.type }}</code>
              <small>{{ entry.points }}</small>
            </el-button>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>

    <el-descriptions class="draw-session-demo__shape-detail" :column="2" border>
      <el-descriptions-item label="当前 Shape">{{ selectedEntry.label }} · {{ selectedEntry.type }}</el-descriptions-item>
      <el-descriptions-item label="输入规则">{{ selectedEntry.points }}</el-descriptions-item>
      <el-descriptions-item label="完成方式">{{ selectedEntry.finish }}</el-descriptions-item>
      <el-descriptions-item label="最终 geometry">{{ selectedEntry.render }}</el-descriptions-item>
      <el-descriptions-item label="形状说明" :span="2">{{ selectedEntry.description }}</el-descriptions-item>
    </el-descriptions>

    <div class="example-demo__control-panel">
      <div class="example-demo__control-grid draw-session-demo__controls">
        <div class="example-demo__action-group">
          <span>会话启动</span>
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="start">启动 {{ selectedEntry.label }}</el-button>
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
            <el-button :disabled="!isActive" @click="finish">完成</el-button>
            <el-button :disabled="!isActive" @click="cancel">取消</el-button>
            <el-button :disabled="sessionRef === null" @click="destroySession">销毁 Session</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>成果</span>
          <div class="example-demo__action-buttons">
            <el-button plain @click="queryResults">查询成果</el-button>
            <el-button plain type="danger" @click="clearResults">清空成果</el-button>
          </div>
        </div>
      </div>
      <div class="example-demo__feedback" aria-live="polite">
        <el-tag :type="isActive ? 'success' : 'info'">{{ status }}</el-tag>
        <span>{{ stage }}</span>
      </div>
    </div>

    <div class="draw-session-demo__map-shell">
      <div ref="mapTarget" class="example-stage"></div>
      <div class="draw-session-demo__map-guide">{{ selectedEntry.finish }}</div>
    </div>

    <el-descriptions class="draw-session-demo__summary" :column="2" border>
      <el-descriptions-item label="当前控制点">{{ controlPointCount }}</el-descriptions-item>
      <el-descriptions-item label="Session.results">{{ sessionResultCount }}</el-descriptions-item>
      <el-descriptions-item label="draw.query()">{{ queryCount }}</el-descriptions-item>
      <el-descriptions-item label="撤销 / 重做">{{ historyResult }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.draw-session-demo__catalog-tabs {
  margin-bottom: 12px;
}

.draw-session-demo__catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 8px;
  padding: 2px 4px 8px 2px;
}

.draw-session-demo__shape-card.el-button {
  min-width: 0;
  height: auto;
  margin: 0;
  padding: 10px 12px;
  white-space: normal;
}

.draw-session-demo__shape-card :deep(span) {
  display: grid;
  width: 100%;
  justify-items: start;
  gap: 3px;
  text-align: left;
}

.draw-session-demo__shape-card code,
.draw-session-demo__shape-card small {
  overflow-wrap: anywhere;
}

.draw-session-demo__shape-name {
  font-weight: 650;
}

.draw-session-demo__shape-detail {
  margin-bottom: 12px;
}

.draw-session-demo__controls {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 210px), 1fr));
  align-items: stretch;
}

.draw-session-demo__map-shell {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.draw-session-demo__map-guide {
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

.draw-session-demo__summary {
  margin-top: 14px;
}

@media (max-width: 640px) {
  .draw-session-demo__catalog {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .draw-session-demo__shape-detail :deep(.el-descriptions__body) {
    overflow-x: auto;
  }
}
</style>
`,R={class:`example-demo interaction-policy-demo`},z={class:`example-demo__control-panel`},B={class:`example-demo__field interaction-policy-demo__field`},V={class:`example-demo__control-grid interaction-policy-demo__launchers`},H={class:`example-demo__action-group`},U={class:`example-demo__action-buttons`},W={class:`example-demo__action-group`},G={class:`example-demo__action-buttons`},K={class:`example-demo__feedback`,"aria-live":`polite`},q={class:`interaction-policy-demo__map-shell`},J=`docs-policy-targets`,Y=`docs-policy-draw`,X=`docs-policy-polygon`,Z=`docs-policy-draw`,pe=g(n({__name:`InteractionPolicyDemo`,setup(n,{expose:r}){let c=t(null),p=i(null),m=i(null),g=i(null),y=t(`replace`),b=t(null),x=t(`尚未发生替换或取消`),S=t(`尚未触发 InteractionConflictError`),w=t(`等待地图初始化`),E=t(`请选择一种交互启动`),D=t(0),O,k=[],A=e(()=>b.value!==null),j=()=>{for(let e of k.splice(0))e()},M=e=>{let t=p.value;if(t===null)return;let n=t.map.getInteractions().getLength(),r=D.value+ +(e===`active`);w.value=`OpenLayers Interaction：${n}；预期：${r}；${n===r?`资源数量已恢复`:`正在切换`}`},N=(e,t)=>{let n=b.value;S.value=`本次启动没有冲突错误`;try{let r=t();n!==null&&y.value===`replace`&&(x.value=`${n} → replaced；旧工作态已回滚，临时图层、Tooltip 与光标所有权已释放`),j(),O=r.cancel,k=[...r.disposers],b.value=e,E.value=`${e} 已启动（policy: ${y.value}）`,M(`active`)}catch(t){if(t instanceof C){S.value=`${t.name}：活动 ${n??`未知`} 保持不变，新 ${e} 未创建`,E.value=`reject 原子拒绝：旧会话继续可用`,M(`active`);return}S.value=t instanceof Error?`${t.name}：${t.message}`:String(t)}},P=()=>{let e=p.value;e!==null&&N(`Draw`,()=>{let t=e.draw.start({type:`polygon`,layerId:Y,module:Z,style:{strokes:[{color:`#f97316`,width:4}],fill:{type:`solid`,color:`rgba(249, 115, 22, 0.24)`}},policy:y.value});return{cancel:()=>t.cancel(),disposers:[t.on(`cancel`,({reason:e})=>{x.value=`Draw → ${e}`})]}})},te=()=>{let e=p.value;e!==null&&N(`Measure`,()=>{let t=e.measure.start({type:`area`,unit:`km²`,policy:y.value});return{cancel:()=>t.cancel(),disposers:[t.on(`cancel`,({reason:e})=>{x.value=`Measure → ${e}`})]}})},ne=()=>{let e=p.value,t=m.value;e===null||t===null||N(`Edit`,()=>{let n=e.draw.edit(t,{underlay:!0,policy:y.value});return{cancel:()=>n.cancel(),disposers:[n.on(`cancel`,({reason:e})=>{x.value=`Edit → ${e}`})]}})},re=()=>{let e=p.value,t=m.value;e===null||t===null||N(`Transform`,()=>{let n=e.transform.select(t,{translate:`feature`,scale:!0,rotate:!0,toolbar:!0,policy:y.value});return{cancel:()=>n.cancel(),disposers:[n.on(`error`,({error:e})=>{E.value=e instanceof Error?e.message:`Transform 操作失败`})]}})},ie=()=>{O?.(),j(),O=void 0,x.value=`${b.value??`会话`} → cancelled；可以立即启动任意其他交互`,b.value=null,E.value=`活动会话已取消，工作态已回滚`,M(`idle`)},F=()=>{let e=p.value,t=g.value;e===null||t===null||e.view.flyTo(t,10)};return r({reset:()=>{A.value&&ie(),p.value?.draw.clear({module:Z}),p.value?.measure.clear(),y.value=`replace`,x.value=`尚未发生替换或取消`,S.value=`尚未触发 InteractionConflictError`,E.value=`示例已重置，请先启动一种交互`,M(`idle`),F()},focus:F}),h(()=>{if(c.value===null)return;let e=new ee({target:c.value,view:{zoom:10},controls:{zoom:!0,rotate:!1,attribution:!0}});T(e,`vector`),e.layers.add({kind:`vector`,id:J,zIndex:20}),e.layers.add({kind:`vector`,id:Y,zIndex:30}),g.value=e.view.toProjectedCoordinates([116.4,39.92]),m.value=e.elements.add({id:X,layerId:J,module:`docs-policy-target`,geometry:{type:`polygon`,controlPoints:e.view.toProjectedCoordinates([[116.25,39.82],[116.55,39.82],[116.56,40.02],[116.24,40.02]])},style:{strokes:[{color:`#2563eb`,width:5}],fill:{type:`solid`,color:`rgba(37, 99, 235, 0.24)`},text:{text:`交互目标`,fontSize:18,fontWeight:`bold`,fill:{type:`solid`,color:`#1e3a8a`}}}}),p.value=e,D.value=e.map.getInteractions().getLength(),M(`idle`),F()}),o(()=>{b.value!==null&&O?.(),j(),p.value?.draw.clear({module:Z}),p.value?.measure.clear(),p.value?.destroy(),p.value=null,m.value=null}),(e,t)=>{let n=l(`el-alert`),r=l(`el-segmented`),i=l(`el-button`),o=l(`el-tag`),p=l(`el-descriptions-item`),m=l(`el-descriptions`);return d(),a(`div`,R,[v(n,{type:`info`,closable:!1,"show-icon":``,title:`先启动任一交互，再直接启动另一种：replace 会清理旧会话；reject 会抛出 InteractionConflictError 并保留旧会话。`}),f(`div`,z,[f(`div`,B,[t[1]||=f(`span`,null,`冲突策略`,-1),v(r,{modelValue:y.value,"onUpdate:modelValue":t[0]||=e=>y.value=e,options:[{label:`replace`,value:`replace`},{label:`reject`,value:`reject`}],"aria-label":`交互冲突策略`},null,8,[`modelValue`])]),f(`div`,V,[f(`div`,H,[t[6]||=f(`span`,null,`启动会话`,-1),f(`div`,U,[v(i,{type:`primary`,onClick:P},{default:_(()=>[...t[2]||=[s(`启动 Draw`,-1)]]),_:1}),v(i,{type:`success`,onClick:te},{default:_(()=>[...t[3]||=[s(`启动 Measure`,-1)]]),_:1}),v(i,{type:`warning`,onClick:ne},{default:_(()=>[...t[4]||=[s(`启动 Edit`,-1)]]),_:1}),v(i,{onClick:re},{default:_(()=>[...t[5]||=[s(`启动 Transform`,-1)]]),_:1})])]),f(`div`,W,[t[8]||=f(`span`,null,`当前会话`,-1),f(`div`,G,[v(i,{type:`danger`,plain:``,disabled:!A.value,onClick:ie},{default:_(()=>[...t[7]||=[s(`取消当前会话`,-1)]]),_:1},8,[`disabled`])])])]),f(`div`,K,[v(o,{type:A.value?`success`:`info`},{default:_(()=>[s(`当前：`+u(b.value??`无活动交互`),1)]),_:1},8,[`type`])])]),f(`div`,q,[f(`div`,{ref_key:`mapTarget`,ref:c,class:`example-stage`},null,512),t[9]||=f(`div`,{class:`interaction-policy-demo__map-guide`},`蓝色面同时作为 Edit / Transform 目标；Draw / Measure 可直接在地图上输入`,-1)]),v(m,{class:`interaction-policy-demo__result`,column:1,border:``},{default:_(()=>[v(p,{label:`启动结果`},{default:_(()=>[s(u(E.value),1)]),_:1}),v(p,{label:`取消原因`},{default:_(()=>[s(u(x.value),1)]),_:1}),v(p,{label:`冲突识别`},{default:_(()=>[s(u(S.value),1)]),_:1}),v(p,{label:`资源恢复`},{default:_(()=>[s(u(w.value),1)]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-6d5a497b`]]),me=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { Earth, InteractionConflictError, type Coordinate, type Element, type InteractionPolicy, type TransformSession } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

type InteractionName = 'Draw' | 'Measure' | 'Edit' | 'Transform';

interface StartedInteraction {
  readonly cancel: () => void;
  readonly disposers: readonly (() => void)[];
}

const TARGET_LAYER_ID = 'docs-policy-targets';
const DRAW_LAYER_ID = 'docs-policy-draw';
const TARGET_ID = 'docs-policy-polygon';
const DRAW_MODULE = 'docs-policy-draw';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const targetRef = shallowRef<Element | null>(null);
const mapCenter = shallowRef<Coordinate | null>(null);
const policy = ref<InteractionPolicy>('replace');
const activeType = ref<InteractionName | null>(null);
const cancellationReason = ref('尚未发生替换或取消');
const conflictResult = ref('尚未触发 InteractionConflictError');
const resourceState = ref('等待地图初始化');
const transitionResult = ref('请选择一种交互启动');
const baselineInteractionCount = ref(0);

let currentCancel: (() => void) | undefined;
let currentDisposers: Array<() => void> = [];

const hasActive = computed(() => activeType.value !== null);

const releaseCurrentListeners = () => {
  for (const dispose of currentDisposers.splice(0)) dispose();
};

const refreshResources = (expected: 'active' | 'idle') => {
  const earth = earthRef.value;
  if (earth === null) return;
  const count = earth.map.getInteractions().getLength();
  const expectedCount = baselineInteractionCount.value + (expected === 'active' ? 1 : 0);
  resourceState.value = \`OpenLayers Interaction：\${count}；预期：\${expectedCount}；\${count === expectedCount ? '资源数量已恢复' : '正在切换'}\`;
};

// #region interaction-policy-replace-reject
const transition = (name: InteractionName, start: () => StartedInteraction) => {
  const previous = activeType.value;
  conflictResult.value = '本次启动没有冲突错误';
  try {
    const started = start();
    if (previous !== null && policy.value === 'replace') {
      cancellationReason.value = \`\${previous} → replaced；旧工作态已回滚，临时图层、Tooltip 与光标所有权已释放\`;
    }
    releaseCurrentListeners();
    currentCancel = started.cancel;
    currentDisposers = [...started.disposers];
    activeType.value = name;
    transitionResult.value = \`\${name} 已启动（policy: \${policy.value}）\`;
    refreshResources('active');
  } catch (error) {
    if (error instanceof InteractionConflictError) {
      conflictResult.value = \`\${error.name}：活动 \${previous ?? '未知'} 保持不变，新 \${name} 未创建\`;
      transitionResult.value = 'reject 原子拒绝：旧会话继续可用';
      refreshResources('active');
      return;
    }
    conflictResult.value = error instanceof Error ? \`\${error.name}：\${error.message}\` : String(error);
  }
};

const startDraw = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  transition('Draw', () => {
    const session = earth.draw.start({
      type: 'polygon',
      layerId: DRAW_LAYER_ID,
      module: DRAW_MODULE,
      style: { strokes: [{ color: '#f97316', width: 4 }], fill: { type: 'solid', color: 'rgba(249, 115, 22, 0.24)' } },
      policy: policy.value
    });
    const off = session.on('cancel', ({ reason }) => {
      cancellationReason.value = \`Draw → \${reason}\`;
    });
    return { cancel: () => session.cancel(), disposers: [off] };
  });
};

const startMeasure = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  transition('Measure', () => {
    const session = earth.measure.start({ type: 'area', unit: 'km²', policy: policy.value });
    const off = session.on('cancel', ({ reason }) => {
      cancellationReason.value = \`Measure → \${reason}\`;
    });
    return { cancel: () => session.cancel(), disposers: [off] };
  });
};

const startEdit = () => {
  const earth = earthRef.value;
  const target = targetRef.value;
  if (earth === null || target === null) return;
  transition('Edit', () => {
    const session = earth.draw.edit(target, { underlay: true, policy: policy.value });
    const off = session.on('cancel', ({ reason }) => {
      cancellationReason.value = \`Edit → \${reason}\`;
    });
    return { cancel: () => session.cancel(), disposers: [off] };
  });
};

const startTransform = () => {
  const earth = earthRef.value;
  const target = targetRef.value;
  if (earth === null || target === null) return;
  transition('Transform', () => {
    const session: TransformSession = earth.transform.select(target, {
      translate: 'feature',
      scale: true,
      rotate: true,
      toolbar: true,
      policy: policy.value
    });
    const off = session.on('error', ({ error }) => {
      transitionResult.value = error instanceof Error ? error.message : 'Transform 操作失败';
    });
    return { cancel: () => session.cancel(), disposers: [off] };
  });
};
// #endregion interaction-policy-replace-reject

const cancelActive = () => {
  currentCancel?.();
  releaseCurrentListeners();
  currentCancel = undefined;
  cancellationReason.value = \`\${activeType.value ?? '会话'} → cancelled；可以立即启动任意其他交互\`;
  activeType.value = null;
  transitionResult.value = '活动会话已取消，工作态已回滚';
  refreshResources('idle');
};

const focus = () => {
  const earth = earthRef.value;
  const center = mapCenter.value;
  if (earth === null || center === null) return;
  earth.view.flyTo(center, 10);
};

const reset = () => {
  if (hasActive.value) cancelActive();
  earthRef.value?.draw.clear({ module: DRAW_MODULE });
  earthRef.value?.measure.clear();
  policy.value = 'replace';
  cancellationReason.value = '尚未发生替换或取消';
  conflictResult.value = '尚未触发 InteractionConflictError';
  transitionResult.value = '示例已重置，请先启动一种交互';
  refreshResources('idle');
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
  earth.layers.add({ kind: 'vector', id: TARGET_LAYER_ID, zIndex: 20 });
  earth.layers.add({ kind: 'vector', id: DRAW_LAYER_ID, zIndex: 30 });
  mapCenter.value = earth.view.toProjectedCoordinates([116.4, 39.92]);
  targetRef.value = earth.elements.add({
    id: TARGET_ID,
    layerId: TARGET_LAYER_ID,
    module: 'docs-policy-target',
    geometry: {
      type: 'polygon',
      controlPoints: earth.view.toProjectedCoordinates([
        [116.25, 39.82],
        [116.55, 39.82],
        [116.56, 40.02],
        [116.24, 40.02]
      ])
    },
    style: {
      strokes: [{ color: '#2563eb', width: 5 }],
      fill: { type: 'solid', color: 'rgba(37, 99, 235, 0.24)' },
      text: { text: '交互目标', fontSize: 18, fontWeight: 'bold', fill: { type: 'solid', color: '#1e3a8a' } }
    }
  });
  earthRef.value = earth;
  baselineInteractionCount.value = earth.map.getInteractions().getLength();
  refreshResources('idle');
  focus();
});

onBeforeUnmount(() => {
  if (activeType.value !== null) currentCancel?.();
  releaseCurrentListeners();
  earthRef.value?.draw.clear({ module: DRAW_MODULE });
  earthRef.value?.measure.clear();
  earthRef.value?.destroy();
  earthRef.value = null;
  targetRef.value = null;
});
<\/script>

<template>
  <div class="example-demo interaction-policy-demo">
    <el-alert
      type="info"
      :closable="false"
      show-icon
      title="先启动任一交互，再直接启动另一种：replace 会清理旧会话；reject 会抛出 InteractionConflictError 并保留旧会话。"
    />

    <div class="example-demo__control-panel">
      <div class="example-demo__field interaction-policy-demo__field">
        <span>冲突策略</span>
        <el-segmented
          v-model="policy"
          :options="[
            { label: 'replace', value: 'replace' },
            { label: 'reject', value: 'reject' }
          ]"
          aria-label="交互冲突策略"
        />
      </div>
      <div class="example-demo__control-grid interaction-policy-demo__launchers">
        <div class="example-demo__action-group">
          <span>启动会话</span>
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="startDraw">启动 Draw</el-button>
            <el-button type="success" @click="startMeasure">启动 Measure</el-button>
            <el-button type="warning" @click="startEdit">启动 Edit</el-button>
            <el-button @click="startTransform">启动 Transform</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>当前会话</span>
          <div class="example-demo__action-buttons">
            <el-button type="danger" plain :disabled="!hasActive" @click="cancelActive">取消当前会话</el-button>
          </div>
        </div>
      </div>
      <div class="example-demo__feedback" aria-live="polite">
        <el-tag :type="hasActive ? 'success' : 'info'">当前：{{ activeType ?? '无活动交互' }}</el-tag>
      </div>
    </div>

    <div class="interaction-policy-demo__map-shell">
      <div ref="mapTarget" class="example-stage"></div>
      <div class="interaction-policy-demo__map-guide">蓝色面同时作为 Edit / Transform 目标；Draw / Measure 可直接在地图上输入</div>
    </div>

    <el-descriptions class="interaction-policy-demo__result" :column="1" border>
      <el-descriptions-item label="启动结果">{{ transitionResult }}</el-descriptions-item>
      <el-descriptions-item label="取消原因">{{ cancellationReason }}</el-descriptions-item>
      <el-descriptions-item label="冲突识别">{{ conflictResult }}</el-descriptions-item>
      <el-descriptions-item label="资源恢复">{{ resourceState }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.interaction-policy-demo__field {
  width: max-content;
  max-width: 100%;
}

.interaction-policy-demo__field :deep(.el-segmented) {
  max-width: 100%;
}

.interaction-policy-demo__launchers {
  align-items: stretch;
}

.interaction-policy-demo__map-shell {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.interaction-policy-demo__map-guide {
  position: absolute;
  top: 12px;
  left: 50%;
  z-index: 2;
  max-width: calc(100% - 32px);
  padding: 7px 12px;
  border: 1px solid var(--doc-border);
  border-radius: 999px;
  background: color-mix(in srgb, var(--doc-surface) 94%, transparent);
  color: var(--doc-text);
  font-size: 12px;
  text-align: center;
  transform: translateX(-50%);
  pointer-events: none;
}

.interaction-policy-demo__result {
  margin-top: 14px;
}
</style>
`,Q={class:`doc-page-layout`},$={class:`doc-page`},he={id:`overview`,class:`doc-prose`},ge={id:`method-examples`,class:`doc-prose`},_e={id:`example-draw-session`,class:`doc-prose`},ve={id:`events`,class:`doc-prose`},ye={id:`lifecycle`,class:`doc-prose`},be={id:`example-interaction-policy`,class:`doc-prose`},xe={id:`interaction-visuals`,class:`doc-prose`},Se={class:`doc-page-layout__aside`},Ce=n({__name:`DrawView`,setup(e){let n=[{id:`overview`,label:`会话模型`},{id:`method-examples`,label:`API 与示例`},{id:`example-draw-session`,label:`20 种 Shape 的启动、历史、结果查询与释放`},{id:`events`,label:`事件与提交边界`},{id:`lifecycle`,label:`完成、取消与销毁`},{id:`example-interaction-policy`,label:`replace / reject 交互仲裁与资源恢复`},{id:`interaction-visuals`,label:`预览与互斥`},{id:`api`,label:`完整 API`}],r=E(L,`draw-session-lifecycle`),i=E(me,`interaction-policy-replace-reject`),o=t(null),c=t(null),u=()=>o.value?.reset(),p=()=>o.value?.focus(),m=()=>c.value?.reset(),h=()=>c.value?.focus(),g=[{owner:`DrawService`,members:`start()`,focus:`启动 Session、配置 Shape 与监听事件`},{owner:`DrawService`,members:`query() / clear()`,focus:`查询与移除服务拥有的绘制成果`},{owner:`DrawSession`,members:`status / results / finished`,focus:`同步状态、会话结果与异步终态`},{owner:`DrawSession`,members:`undo() / redo()`,focus:`草图控制点历史`},{owner:`DrawSession`,members:`finish() / cancel() / destroy()`,focus:`提交、回滚与完整释放`},{owner:`DrawSession`,members:`on()`,focus:`start / change / click / complete / cancel`}],C=[{name:`start`,timing:`首个控制点或自由绘制手势开始`,payload:`coordinate`,store:`不写入`},{name:`change`,timing:`草图预览几何变化`,payload:`geometry、coordinate?`,store:`不写入`},{name:`click`,timing:`控制点被草图接受`,payload:`coordinate、controlPointCount`,store:`不写入`},{name:`complete`,timing:`Element 成功提交`,payload:`element`,store:`已提交`},{name:`cancel`,timing:`主动取消、替换、销毁或异常终止`,payload:`reason`,store:`不提交草图`}],w=[{action:`finish()`,effect:`尝试完成当前合法草图并结束 Session`,result:`status → 'finished'，finished 返回保留结果`},{action:`cancel()`,effect:`丢弃未完成草图并结束 Session`,result:`status → 'cancelled'，finished 返回已完成结果`},{action:`destroy()`,effect:`释放交互、预览、Tooltip、光标和监听资源`,result:`幂等；活动 Session 按销毁原因取消`},{action:`policy: 'replace'`,effect:`新独占交互启动前清理旧 Session`,result:`旧 Session 收到 cancel('replaced')`}],T=[`DrawService`,`DrawOptions`,`DrawSession`,`DrawSessionEventMap`,`InteractionPolicy`,`InteractionStatus`],ee={DrawService:[`start`,`query`,`clear`]};return(e,t)=>{let E=l(`el-step`),O=l(`el-steps`),k=l(`el-alert`),A=l(`el-table-column`),j=l(`el-link`),M=l(`el-table`),N=l(`el-card`),P=l(`el-col`),te=l(`el-row`);return d(),a(`div`,Q,[f(`article`,$,[t[59]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图交互`),f(`h1`,null,`绘制（Draw）`),f(`p`,null,`通过 Draw Session 接收输入、渲染真实 Shape 预览，并只在完成边界把结果提交为 Element。`)],-1),f(`section`,he,[t[10]||=f(`h2`,{class:`doc-h2`},`一个启动调用对应一个 Session`,-1),f(`p`,null,[t[4]||=s(` 从 `,-1),v(S,{kind:`property`,to:`/api/types#api-type-earth-property-draw`},{default:_(()=>[...t[0]||=[s(`earth.draw`,-1)]]),_:1}),t[5]||=s(` 调用 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-draw-service-method-start`},{default:_(()=>[...t[1]||=[s(`start`,-1)]]),_:1}),t[6]||=s(`，传入 `,-1),v(S,{kind:`type`,to:`/api/types#api-type-draw-options`},{default:_(()=>[...t[2]||=[s(`DrawOptions`,-1)]]),_:1}),t[7]||=s(`。返回的 `,-1),v(S,{kind:`type`,to:`/api/types#api-type-draw-session`},{default:_(()=>[...t[3]||=[s(`DrawSession`,-1)]]),_:1}),t[8]||=s(` 同时承担事件订阅、撤销重做和终态清理。 `,-1)]),v(O,{active:2,"finish-status":`success`,"align-center":``},{default:_(()=>[v(E,{title:`start`,description:`校验 Shape、图层与冲突策略`}),v(E,{title:`工作态`,description:`输入、预览、历史均留在 Session`}),v(E,{title:`complete`,description:`一次事务生成 Element`})]),_:1}),v(k,{type:`info`,closable:!1,"show-icon":``,title:`Circle 的业务半径始终使用米`},{default:_(()=>[...t[9]||=[s(` 指针预览使用当前 View 投影半径，完成时转换为米；Element.state.geometry.radius、复制和历史中的值均保持米制。 `,-1)]]),_:1})]),f(`section`,ge,[t[12]||=f(`h2`,{class:`doc-h2`},`公开成员如何对应到示例`,-1),t[13]||=f(`p`,null,`表中列出了 Draw 页归属的全部服务和 Session 成员。点击“查看示例”会聚焦到同一个可运行场景，再按按钮验证对应行为。`,-1),v(M,{data:g,border:``,stripe:``},{default:_(()=>[v(A,{prop:`owner`,label:`归属`,"min-width":`150`}),v(A,{prop:`members`,label:`属性 / 方法`,"min-width":`260`}),v(A,{prop:`focus`,label:`示例重点`,"min-width":`300`}),v(A,{label:`示例`,width:`120`},{default:_(()=>[v(j,{type:`primary`,href:`#example-draw-session`},{default:_(()=>[...t[11]||=[s(`查看示例`,-1)]]),_:1})]),_:1})]),_:1})]),f(`section`,_e,[v(b,{title:`20 种 Shape 的启动、历史、结果查询与释放`,source:y(L),snippet:y(r),"show-reset":``,"show-focus":``,onReset:u,onFocus:p},{description:_(()=>[f(`p`,null,[t[19]||=s(` 示例展示 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-draw-service-method-start`},{default:_(()=>[...t[14]||=[s(`start`,-1)]]),_:1}),t[20]||=s(`、 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-draw-session-method-on`},{default:_(()=>[...t[15]||=[s(`on`,-1)]]),_:1}),t[21]||=s(`、 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-draw-session-method-finish`},{default:_(()=>[...t[16]||=[s(`finish`,-1)]]),_:1}),t[22]||=s(`、 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-draw-session-method-cancel`},{default:_(()=>[...t[17]||=[s(`cancel`,-1)]]),_:1}),t[23]||=s(` 与 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-draw-session-method-destroy`},{default:_(()=>[...t[18]||=[s(`destroy`,-1)]]),_:1}),t[24]||=s(` 的完整流程。示例面板还可直接验证 `,-1),t[25]||=f(`code`,null,`results`,-1),t[26]||=s(`、`,-1),t[27]||=f(`code`,null,`query()`,-1),t[28]||=s(` 与 `,-1),t[29]||=f(`code`,null,`clear()`,-1),t[30]||=s(`；展开的代码与正在运行的组件来自同一文件。 `,-1)])]),preview:_(()=>[v(fe,{ref_key:`drawSessionDemoRef`,ref:o},null,512)]),_:1},8,[`source`,`snippet`])]),f(`section`,ve,[t[39]||=f(`h2`,{class:`doc-h2`},`事件与提交边界`,-1),f(`p`,null,[v(S,{kind:`type`,to:`/api/types#api-type-draw-session-event-map`},{default:_(()=>[...t[31]||=[s(`DrawSessionEventMap`,-1)]]),_:1}),t[33]||=s(` 的过程事件都是只读快照。尤其是 `,-1),t[34]||=f(`code`,null,`change.geometry`,-1),t[35]||=s(`：它表示当前工作几何，不能当作已经持久化的 `,-1),v(S,{kind:`property`,to:`/api/types#api-type-element-property-state`},{default:_(()=>[...t[32]||=[s(`Element.state`,-1)]]),_:1}),t[36]||=s(`。 `,-1)]),v(M,{data:C,border:``},{default:_(()=>[v(A,{prop:`name`,label:`事件`,width:`120`}),v(A,{prop:`timing`,label:`触发时机`,"min-width":`230`}),v(A,{prop:`payload`,label:`主要载荷`,"min-width":`210`}),v(A,{prop:`store`,label:`Store`,"min-width":`140`})]),_:1}),f(`p`,null,[v(S,{kind:`method`,to:`/api/types#api-type-draw-session-method-on`},{default:_(()=>[...t[37]||=[s(`on`,-1)]]),_:1}),t[38]||=s(` 返回幂等注销函数；页面不再需要监听时应立即调用，不必等到 Earth 销毁。 `,-1)])]),f(`section`,ye,[t[44]||=f(`h2`,{class:`doc-h2`},`完成、取消与销毁`,-1),v(M,{data:w,border:``},{default:_(()=>[v(A,{prop:`action`,label:`入口`,"min-width":`150`}),v(A,{prop:`effect`,label:`作用`,"min-width":`280`}),v(A,{prop:`result`,label:`结果`,"min-width":`260`})]),_:1}),f(`p`,null,[v(S,{kind:`property`,to:`/api/types#api-type-draw-session-property-finished`},{default:_(()=>[...t[40]||=[s(`finished`,-1)]]),_:1}),t[42]||=s(` 适合串联后续流程，但组件卸载仍应主动调用 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-draw-session-method-destroy`},{default:_(()=>[...t[41]||=[s(`destroy`,-1)]]),_:1}),t[43]||=s(`，最后再销毁 Earth。 `,-1)])]),f(`section`,be,[v(b,{title:`replace / reject 交互仲裁与资源恢复`,source:y(me),snippet:y(i),"show-reset":``,"show-focus":``,onReset:m,onFocus:h},{description:_(()=>[f(`p`,null,[t[46]||=s(` 先启动 Draw、Measure、Edit 或 Transform，再直接启动另一种交互。`,-1),t[47]||=f(`code`,null,`replace`,-1),t[48]||=s(` 会先让旧 Session 收到 `,-1),t[49]||=f(`code`,null,`replaced`,-1),t[50]||=s(` 并释放临时资源；`,-1),t[51]||=f(`code`,null,`reject`,-1),t[52]||=s(` 会抛出 `,-1),v(S,{kind:`type`,to:`/api/types#api-type-interaction-conflict-error`},{default:_(()=>[...t[45]||=[s(`InteractionConflictError`,-1)]]),_:1}),t[53]||=s(` 且不改变旧会话。结果区同时核对 OpenLayers Interaction 数量是否回到预期基线。 `,-1)])]),preview:_(()=>[v(pe,{ref_key:`interactionPolicyDemoRef`,ref:c},null,512)]),_:1},8,[`source`,`snippet`])]),f(`section`,xe,[t[58]||=f(`h2`,{class:`doc-h2`},`预览、光标与交互互斥`,-1),v(te,{gutter:16},{default:_(()=>[v(P,{xs:24,md:8},{default:_(()=>[v(N,{shadow:`never`},{default:_(()=>[...t[54]||=[f(`strong`,null,`真实预览`,-1),f(`p`,null,`临时层使用目标 ShapeDefinition 和解析后的真实样式，不把草图 Feature 插入业务 Source。`,-1)]]),_:1})]),_:1}),v(P,{xs:24,md:8},{default:_(()=>[v(N,{shadow:`never`},{default:_(()=>[...t[55]||=[f(`strong`,null,`统一反馈`,-1),f(`p`,null,`活动 Draw 使用 pointer 光标和跟随 Tooltip；完成、取消、替换或失败后恢复外部光标。`,-1)]]),_:1})]),_:1}),v(P,{xs:24,md:8},{default:_(()=>[v(N,{shadow:`never`},{default:_(()=>[...t[56]||=[f(`strong`,null,`互斥会话`,-1),f(`p`,null,`Draw、Edit、Measure 与 Transform 共用协调器；replace 先清理旧会话，reject 则同步拒绝冲突。`,-1)]]),_:1})]),_:1})]),_:1}),v(k,{type:`warning`,closable:!1,"show-icon":``,title:`高频预览不等于高频事务`},{default:_(()=>[...t[57]||=[s(` 自由绘制和指针移动按浏览器帧合并；每帧只更新临时工作快照，完成前不会产生 Store 事务或独立历史命令。 `,-1)]]),_:1})]),v(D,{"type-names":T,"member-names":ee,title:`Draw 完整 API`,description:`完整展示 DrawService、DrawOptions、DrawSession 与 DrawSessionEventMap 的全部公开属性、方法、参数和事件载荷。`})]),f(`aside`,Se,[v(x,{title:`绘制（Draw）`,items:n})])])}}});export{Ce as default};