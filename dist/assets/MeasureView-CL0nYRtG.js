import{A as e,At as t,B as n,M as r,N as i,Nt as a,P as o,Q as s,R as c,T as l,ct as u,fn as d,it as f,j as p,ot as m,tt as h,x as g,xt as _,z as v,zt as y}from"./TypeExpression-D6csDz4V.js";import{B as b,H as x,W as S,n as C,p as w,s as T,t as E,z as D}from"./index-4uKXPGRf.js";var O={class:`example-demo measure-session-demo`},k={class:`example-demo__control-panel`},A={class:`example-demo__control-grid measure-session-demo__settings`},j={class:`example-demo__field measure-session-demo__field`},M={class:`example-demo__field measure-session-demo__field`},N={class:`example-demo__field`},P={class:`example-demo__field`},F={class:`example-demo__field`},ee={class:`example-demo__actions measure-session-demo__options`},te={class:`example-demo__action-row`},ne={class:`example-demo__action-group`},re={class:`example-demo__action-buttons`},ie={class:`example-demo__action-group`},ae={class:`example-demo__action-buttons`},oe={class:`example-demo__feedback`,"aria-live":`polite`},I={class:`measure-session-demo__map-shell`},L={class:`measure-session-demo__map-guide`},R=`docs-measure-results`,z=g(n({__name:`MeasureSessionDemo`,setup(n){let g=t(null),b=a(null),x=a(null),S=t(`distance-segments`),E=t(`idle`),D=a(null),z=t(2),B=t(!0),V=t(!0),H=t(`#ef4444`),U=t(`#facc15`),W=t(`#7f1d1d`),G=t(`选择类型和样式后启动测量`),K=[],q={"distance-segments":`分段距离`,"distance-total":`总距离`,"distance-radial":`径向距离`,area:`面积`},J=e(()=>S.value===`area`?`km²`:`km`),Y=e(()=>E.value===`active`),X=e(()=>(D.value?.segments??[]).map((e,t)=>({index:t+1,value:e.value.toFixed(z.value),formatted:e.formatted}))),Z=()=>{for(let e of K.splice(0))e()},Q=()=>{x.value?.status===`active`&&x.value.cancel(),Z(),x.value=null,E.value=`idle`},se=()=>{let e=b.value;if(e===null)return;Q(),D.value=null;let t=e.measure.start({type:S.value,layerId:R,unit:J.value,precision:z.value,formatter:V.value?(e,t)=>`${e.toFixed(z.value)} ${t}（自定义）`:void 0,line:{color:H.value,width:6,lineDash:[12,8],lineCap:`round`},point:{type:`circle`,radius:8,fill:{type:`solid`,color:U.value},stroke:{color:`#ffffff`,width:3}},text:{fontSize:15,fontWeight:`bold`,fill:{type:`solid`,color:W.value},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.94)`},backgroundStroke:{color:H.value,width:2},padding:[5,8,5,8]},showTotal:B.value,policy:`replace`});x.value=t,E.value=t.status,G.value=`在地图上依次单击测量点`,K=[t.on(`change`,({result:e})=>{D.value=e,G.value=`预览：${e.formatted}`}),t.on(`complete`,({result:e})=>{D.value=e,G.value=`完成：${e.formatted}`}),t.on(`cancel`,({reason:e})=>{G.value=`已取消：${e}`})],t.finished.then(e=>{D.value=e??D.value,E.value=t.status,Z()})},ce=()=>{x.value?.finish(),x.value!==null&&(E.value=x.value.status)},le=()=>{x.value?.cancel(),x.value!==null&&(E.value=x.value.status)},$=()=>{Q(),b.value?.measure.clear(),D.value=null,G.value=`测量图形和 Overlay 已全部清除`};return h(()=>{if(g.value===null)return;let e=new T({target:g.value,view:{zoom:10},controls:{zoom:!0,rotate:!1,attribution:!0}});C(e,`vector`),e.layers.add({kind:`vector`,id:R,zIndex:30}),e.view.flyTo(e.view.toProjectedCoordinates([116.4074,39.9042]),10),b.value=e}),s(()=>{Q(),b.value?.measure.clear(),b.value?.destroy(),b.value=null}),(e,t)=>{let n=u(`el-alert`),a=u(`el-option`),s=u(`el-select`),h=u(`el-input-number`),b=u(`el-color-picker`),x=u(`el-checkbox`),C=u(`el-button`),T=u(`el-tag`),R=u(`el-descriptions-item`),K=u(`el-descriptions`),J=u(`el-table-column`),Z=u(`el-table`);return f(),o(`div`,O,[v(n,{class:`example-demo__alert`,type:`info`,closable:!1,"show-icon":``,title:`红色虚线、黄色控制点和白底标签全部来自 MeasureOptions；修改配置后重新启动即可比较效果。`}),p(`div`,k,[p(`div`,A,[p(`div`,j,[t[7]||=p(`span`,null,`测量类型`,-1),v(s,{modelValue:S.value,"onUpdate:modelValue":t[0]||=e=>S.value=e,"aria-label":`测量类型`,disabled:Y.value},{default:_(()=>[(f(!0),o(l,null,m(y(w),e=>(f(),r(a,{key:e,label:q[e],value:e},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`,`disabled`])]),p(`div`,M,[t[8]||=p(`span`,null,`精度`,-1),v(h,{modelValue:z.value,"onUpdate:modelValue":t[1]||=e=>z.value=e,min:0,max:6,disabled:Y.value,"controls-position":`right`},null,8,[`modelValue`,`disabled`])]),p(`div`,N,[t[9]||=p(`span`,null,`线`,-1),v(b,{modelValue:H.value,"onUpdate:modelValue":t[2]||=e=>H.value=e,disabled:Y.value},null,8,[`modelValue`,`disabled`])]),p(`div`,P,[t[10]||=p(`span`,null,`点`,-1),v(b,{modelValue:U.value,"onUpdate:modelValue":t[3]||=e=>U.value=e,disabled:Y.value},null,8,[`modelValue`,`disabled`])]),p(`div`,F,[t[11]||=p(`span`,null,`文字`,-1),v(b,{modelValue:W.value,"onUpdate:modelValue":t[4]||=e=>W.value=e,disabled:Y.value},null,8,[`modelValue`,`disabled`])])]),p(`div`,ee,[v(x,{modelValue:V.value,"onUpdate:modelValue":t[5]||=e=>V.value=e,disabled:Y.value},{default:_(()=>[...t[12]||=[c(`自定义 formatter`,-1)]]),_:1},8,[`modelValue`,`disabled`]),v(x,{modelValue:B.value,"onUpdate:modelValue":t[6]||=e=>B.value=e,disabled:Y.value},{default:_(()=>[...t[13]||=[c(`分段时显示总计`,-1)]]),_:1},8,[`modelValue`,`disabled`])]),p(`div`,te,[p(`div`,ne,[t[17]||=p(`span`,null,`测量会话`,-1),p(`div`,re,[v(C,{type:`primary`,onClick:se},{default:_(()=>[...t[14]||=[c(`启动测量`,-1)]]),_:1}),v(C,{disabled:!Y.value,onClick:ce},{default:_(()=>[...t[15]||=[c(`完成`,-1)]]),_:1},8,[`disabled`]),v(C,{disabled:!Y.value,onClick:le},{default:_(()=>[...t[16]||=[c(`取消`,-1)]]),_:1},8,[`disabled`])])]),p(`div`,ie,[t[19]||=p(`span`,null,`测量结果`,-1),p(`div`,ae,[v(C,{plain:``,type:`danger`,onClick:$},{default:_(()=>[...t[18]||=[c(`清除全部结果`,-1)]]),_:1})])])]),p(`div`,oe,[v(T,{type:Y.value?`success`:`info`},{default:_(()=>[c(d(E.value),1)]),_:1},8,[`type`])])]),p(`div`,I,[p(`div`,{ref_key:`mapTarget`,ref:g,class:`example-stage`},null,512),p(`div`,L,d(G.value),1)]),v(K,{class:`measure-session-demo__result`,column:2,border:``},{default:_(()=>[v(R,{label:`格式化结果`},{default:_(()=>[c(d(D.value?.formatted??`等待输入`),1)]),_:1}),v(R,{label:`数值 / 单位`},{default:_(()=>[c(d(D.value?`${D.value.value.toFixed(z.value)} ${D.value.unit}`:`—`),1)]),_:1}),v(R,{label:`投影坐标点`},{default:_(()=>[c(d(D.value?.coordinates.length??0),1)]),_:1}),v(R,{label:`经纬度坐标点`},{default:_(()=>[c(d(D.value?.geographicCoordinates.length??0),1)]),_:1})]),_:1}),X.value.length?(f(),r(Z,{key:0,class:`measure-session-demo__segments`,data:X.value,border:``,stripe:``},{default:_(()=>[v(J,{prop:`index`,label:`分段`,width:`80`}),v(J,{prop:`value`,label:`数值`,"min-width":`140`}),v(J,{prop:`formatted`,label:`formatter 输出`,"min-width":`220`})]),_:1},8,[`data`])):i(``,!0)])}}}),[[`__scopeId`,`data-v-c475b696`]]),B=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { Earth, measureTypes, type MeasureResult, type MeasureSession, type MeasureType } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const LAYER_ID = 'docs-measure-results';
const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const sessionRef = shallowRef<MeasureSession | null>(null);
const selectedType = ref<MeasureType>('distance-segments');
const status = ref<'idle' | MeasureSession['status']>('idle');
const latestResult = shallowRef<MeasureResult | null>(null);
const precision = ref(2);
const showTotal = ref(true);
const customFormatter = ref(true);
const lineColor = ref('#ef4444');
const pointColor = ref('#facc15');
const textColor = ref('#7f1d1d');
const phase = ref('选择类型和样式后启动测量');
let disposers: Array<() => void> = [];

const typeLabels: Record<MeasureType, string> = {
  'distance-segments': '分段距离',
  'distance-total': '总距离',
  'distance-radial': '径向距离',
  area: '面积'
};
const unit = computed(() => (selectedType.value === 'area' ? ('km²' as const) : ('km' as const)));
const isActive = computed(() => status.value === 'active');
const segmentRows = computed(() =>
  (latestResult.value?.segments ?? []).map((segment, index) => ({
    index: index + 1,
    value: segment.value.toFixed(precision.value),
    formatted: segment.formatted
  }))
);

const releaseListeners = () => {
  for (const dispose of disposers.splice(0)) dispose();
};

const cancelSession = () => {
  if (sessionRef.value?.status === 'active') sessionRef.value.cancel();
  releaseListeners();
  sessionRef.value = null;
  status.value = 'idle';
};

// #region measure-options-and-results
const start = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  cancelSession();
  latestResult.value = null;

  const session = earth.measure.start({
    type: selectedType.value,
    layerId: LAYER_ID,
    unit: unit.value,
    precision: precision.value,
    formatter: customFormatter.value ? (value, resultUnit) => \`\${value.toFixed(precision.value)} \${resultUnit}（自定义）\` : undefined,
    line: { color: lineColor.value, width: 6, lineDash: [12, 8], lineCap: 'round' },
    point: {
      type: 'circle',
      radius: 8,
      fill: { type: 'solid', color: pointColor.value },
      stroke: { color: '#ffffff', width: 3 }
    },
    text: {
      fontSize: 15,
      fontWeight: 'bold',
      fill: { type: 'solid', color: textColor.value },
      backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.94)' },
      backgroundStroke: { color: lineColor.value, width: 2 },
      padding: [5, 8, 5, 8]
    },
    showTotal: showTotal.value,
    policy: 'replace'
  });
  sessionRef.value = session;
  status.value = session.status;
  phase.value = '在地图上依次单击测量点';

  disposers = [
    session.on('change', ({ result }) => {
      latestResult.value = result;
      phase.value = \`预览：\${result.formatted}\`;
    }),
    session.on('complete', ({ result }) => {
      latestResult.value = result;
      phase.value = \`完成：\${result.formatted}\`;
    }),
    session.on('cancel', ({ reason }) => {
      phase.value = \`已取消：\${reason}\`;
    })
  ];
  void session.finished.then((result) => {
    latestResult.value = result ?? latestResult.value;
    status.value = session.status;
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

const clear = () => {
  cancelSession();
  earthRef.value?.measure.clear();
  latestResult.value = null;
  phase.value = '测量图形和 Overlay 已全部清除';
};
// #endregion measure-options-and-results

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = new Earth({
    target: mapTarget.value,
    view: { zoom: 10 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earth.layers.add({ kind: 'vector', id: LAYER_ID, zIndex: 30 });
  earth.view.flyTo(earth.view.toProjectedCoordinates([116.4074, 39.9042]), 10);
  earthRef.value = earth;
});

onBeforeUnmount(() => {
  cancelSession();
  earthRef.value?.measure.clear();
  earthRef.value?.destroy();
  earthRef.value = null;
});
<\/script>

<template>
  <div class="example-demo measure-session-demo">
    <el-alert
      class="example-demo__alert"
      type="info"
      :closable="false"
      show-icon
      title="红色虚线、黄色控制点和白底标签全部来自 MeasureOptions；修改配置后重新启动即可比较效果。"
    />
    <div class="example-demo__control-panel">
      <div class="example-demo__control-grid measure-session-demo__settings">
        <div class="example-demo__field measure-session-demo__field">
          <span>测量类型</span>
          <el-select v-model="selectedType" aria-label="测量类型" :disabled="isActive">
            <el-option v-for="type in measureTypes" :key="type" :label="typeLabels[type]" :value="type" />
          </el-select>
        </div>
        <div class="example-demo__field measure-session-demo__field">
          <span>精度</span>
          <el-input-number v-model="precision" :min="0" :max="6" :disabled="isActive" controls-position="right" />
        </div>
        <div class="example-demo__field">
          <span>线</span>
          <el-color-picker v-model="lineColor" :disabled="isActive" />
        </div>
        <div class="example-demo__field">
          <span>点</span>
          <el-color-picker v-model="pointColor" :disabled="isActive" />
        </div>
        <div class="example-demo__field">
          <span>文字</span>
          <el-color-picker v-model="textColor" :disabled="isActive" />
        </div>
      </div>
      <div class="example-demo__actions measure-session-demo__options">
        <el-checkbox v-model="customFormatter" :disabled="isActive">自定义 formatter</el-checkbox>
        <el-checkbox v-model="showTotal" :disabled="isActive">分段时显示总计</el-checkbox>
      </div>
      <div class="example-demo__action-row">
        <div class="example-demo__action-group">
          <span>测量会话</span>
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="start">启动测量</el-button>
            <el-button :disabled="!isActive" @click="finish">完成</el-button>
            <el-button :disabled="!isActive" @click="cancel">取消</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>测量结果</span>
          <div class="example-demo__action-buttons">
            <el-button plain type="danger" @click="clear">清除全部结果</el-button>
          </div>
        </div>
      </div>
      <div class="example-demo__feedback" aria-live="polite">
        <el-tag :type="isActive ? 'success' : 'info'">{{ status }}</el-tag>
      </div>
    </div>
    <div class="measure-session-demo__map-shell">
      <div ref="mapTarget" class="example-stage"></div>
      <div class="measure-session-demo__map-guide">{{ phase }}</div>
    </div>
    <el-descriptions class="measure-session-demo__result" :column="2" border>
      <el-descriptions-item label="格式化结果">{{ latestResult?.formatted ?? '等待输入' }}</el-descriptions-item>
      <el-descriptions-item label="数值 / 单位">{{
        latestResult ? \`\${latestResult.value.toFixed(precision)} \${latestResult.unit}\` : '—'
      }}</el-descriptions-item>
      <el-descriptions-item label="投影坐标点">{{ latestResult?.coordinates.length ?? 0 }}</el-descriptions-item>
      <el-descriptions-item label="经纬度坐标点">{{ latestResult?.geographicCoordinates.length ?? 0 }}</el-descriptions-item>
    </el-descriptions>
    <el-table v-if="segmentRows.length" class="measure-session-demo__segments" :data="segmentRows" border stripe>
      <el-table-column prop="index" label="分段" width="80" />
      <el-table-column prop="value" label="数值" min-width="140" />
      <el-table-column prop="formatted" label="formatter 输出" min-width="220" />
    </el-table>
  </div>
</template>

<style scoped>
.measure-session-demo__settings {
  grid-template-columns: minmax(180px, 1.8fr) minmax(120px, 1fr) repeat(3, minmax(70px, 0.65fr));
}

.measure-session-demo__field :deep(.el-select) {
  width: 100%;
  max-width: 180px;
}

.measure-session-demo__field :deep(.el-input-number) {
  width: 100%;
  max-width: 120px;
}

.measure-session-demo__options {
  gap: 8px 16px;
}

@media (max-width: 700px) {
  .measure-session-demo__settings {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 130px), 1fr));
  }
}

.measure-session-demo__map-shell {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.measure-session-demo__map-guide {
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

.measure-session-demo__result,
.measure-session-demo__segments {
  margin-top: 14px;
}
</style>
`,V={class:`doc-page-layout`},H={class:`doc-page`},U={id:`overview`,class:`doc-prose`},W={id:`method-examples`,class:`doc-prose`},G={id:`example-measure-session`,class:`doc-prose`},K={id:`measure-types`,class:`doc-prose`},q={id:`events-results`,class:`doc-prose`},J={id:`lifecycle`,class:`doc-prose`},Y={class:`doc-page-layout__aside`},X=n({__name:`MeasureView`,setup(e){let t=[{id:`overview`,label:`测量会话`},{id:`method-examples`,label:`API 与示例`},{id:`example-measure-session`,label:`距离与面积`},{id:`measure-types`,label:`四种测量类型`},{id:`events-results`,label:`事件与结果`},{id:`lifecycle`,label:`完成、取消与清理`},{id:`api`,label:`完整 API`}],n=E(B,`measure-options-and-results`),r=[{owner:`MeasureService`,members:`start()`,focus:`类型、单位、formatter 与三类视觉样式`},{owner:`MeasureService`,members:`clear()`,focus:`移除全部测量图形与 Overlay`},{owner:`MeasureSession`,members:`status / finished`,focus:`会话状态与最终 MeasureResult`},{owner:`MeasureSession`,members:`finish() / cancel()`,focus:`确认结果或丢弃草图`},{owner:`MeasureSession`,members:`on()`,focus:`change / complete / cancel 事件`}],i=[{type:`distance-segments`,geometry:`Polyline`,meaning:`逐段距离，可选累计结果`,units:`m | km`},{type:`distance-total`,geometry:`Polyline`,meaning:`整条路径的总距离`,units:`m | km`},{type:`distance-radial`,geometry:`Polyline`,meaning:`以起点为中心的径向距离`,units:`m | km`},{type:`area`,geometry:`Polygon`,meaning:`闭合区域面积`,units:`m² | km²`}],a=[{name:`change`,payload:`result: MeasureResult`,meaning:`预览变化；结果是只读快照`},{name:`complete`,payload:`result: MeasureResult`,meaning:`用户确认后的最终结果`},{name:`cancel`,payload:`reason`,meaning:`会话未产生最终结果而结束`}],s=[{field:`value / unit / formatted`,meaning:`数值、单位和可直接展示的格式化文本`},{field:`geometry`,meaning:`当前测量图形的 ShapeState 快照`},{field:`coordinates`,meaning:`当前 Earth 的 View 投影坐标`},{field:`geographicCoordinates`,meaning:`转换后的 EPSG:4326 经纬度坐标`},{field:`segments`,meaning:`距离测量逐段明细；面积测量为空数组`}],l=[`MeasureService`,`MeasureOptions`,`MeasureSession`,`MeasureSessionEventMap`,`MeasureResult`,`MeasureType`];return(e,d)=>{let m=u(`el-alert`),h=u(`el-table-column`),g=u(`el-link`),C=u(`el-table`);return f(),o(`div`,V,[p(`article`,H,[d[40]||=p(`header`,{class:`doc-hero`},[p(`span`,{class:`doc-hero__eyebrow`},`地图交互`),p(`h1`,null,`测量（Measure）`),p(`p`,null,`复用 Draw 交互采集控制点，以只读 MeasureResult 同时返回业务单位、投影坐标和经纬度坐标。`)],-1),p(`section`,U,[d[8]||=p(`h2`,{class:`doc-h2`},`Measure 复用同一套交互内核`,-1),p(`p`,null,[d[3]||=c(` 从 `,-1),v(S,{kind:`property`,to:`/api/types#api-type-earth-property-measure`},{default:_(()=>[...d[0]||=[c(`earth.measure`,-1)]]),_:1}),d[4]||=c(` 调用 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-measure-service-method-start`},{default:_(()=>[...d[1]||=[c(`start`,-1)]]),_:1}),d[5]||=c(`，传入 `,-1),v(S,{kind:`type`,to:`/api/types#api-type-measure-options`},{default:_(()=>[...d[2]||=[c(`MeasureOptions`,-1)]]),_:1}),d[6]||=c(`。 Measure 不维护第二套绘制逻辑，因此与 Draw、Edit 和 Transform 共享相同的冲突策略、预览清理和光标恢复边界。 `,-1)]),v(m,{type:`info`,closable:!1,"show-icon":``,title:`单位由测量类型约束`},{default:_(()=>[...d[7]||=[c(` 距离只接受 m / km，面积只接受 m² / km²；precision 默认为 2，formatter 可统一替换展示文本，但不会改变 result.value。 `,-1)]]),_:1})]),p(`section`,W,[d[10]||=p(`h2`,{class:`doc-h2`},`公开成员如何对应到示例`,-1),d[11]||=p(`p`,null,`示例把 MeasureOptions 的 formatter、line、point、text、precision 和 showTotal 全部做成可调整控件，并直接展示结构化结果。`,-1),v(C,{data:r,border:``,stripe:``},{default:_(()=>[v(h,{prop:`owner`,label:`归属`,"min-width":`160`}),v(h,{prop:`members`,label:`属性 / 方法`,"min-width":`240`}),v(h,{prop:`focus`,label:`示例重点`,"min-width":`330`}),v(h,{label:`示例`,width:`120`},{default:_(()=>[v(g,{type:`primary`,href:`#example-measure-session`},{default:_(()=>[...d[9]||=[c(`查看示例`,-1)]]),_:1})]),_:1})]),_:1})]),p(`section`,G,[v(b,{title:`自定义 formatter、样式并读取测量结果`,source:y(B),snippet:y(n)},{description:_(()=>[p(`p`,null,[d[16]||=c(` 示例使用根导出的 `,-1),d[17]||=p(`code`,null,`measureTypes`,-1),d[18]||=c(` 构建选择器，监听 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-measure-session-method-on`},{default:_(()=>[...d[12]||=[c(`MeasureSession.on`,-1)]]),_:1}),d[19]||=c(`，并通过 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-measure-session-method-finish`},{default:_(()=>[...d[13]||=[c(`finish`,-1)]]),_:1}),d[20]||=c(`、 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-measure-session-method-cancel`},{default:_(()=>[...d[14]||=[c(`cancel`,-1)]]),_:1}),d[21]||=c(` 与 `,-1),v(S,{kind:`method`,to:`/api/types#api-type-measure-service-method-clear`},{default:_(()=>[...d[15]||=[c(`measure.clear`,-1)]]),_:1}),d[22]||=c(` 管理完整生命周期。分段结果使用 Element Plus 表格展示，不输出事件日志或原始 JSON。 `,-1)])]),preview:_(()=>[v(z)]),_:1},8,[`source`,`snippet`])]),p(`section`,K,[d[23]||=p(`h2`,{class:`doc-h2`},`四种测量类型`,-1),v(C,{data:i,border:``},{default:_(()=>[v(h,{prop:`type`,label:`MeasureType`,"min-width":`190`}),v(h,{prop:`geometry`,label:`采集几何`,"min-width":`130`}),v(h,{prop:`meaning`,label:`语义`,"min-width":`260`}),v(h,{prop:`units`,label:`合法单位`,"min-width":`130`})]),_:1}),d[24]||=p(`p`,null,`所有坐标仍以当前 View 投影作为 Element 和交互输入；需要持久化经纬度时直接读取结果中的 geographicCoordinates。`,-1)]),p(`section`,q,[d[29]||=p(`h2`,{class:`doc-h2`},`事件与 MeasureResult`,-1),p(`p`,null,[v(S,{kind:`type`,to:`/api/types#api-type-measure-session-event-map`},{default:_(()=>[...d[25]||=[c(`MeasureSessionEventMap`,-1)]]),_:1}),d[27]||=c(` 的 change 与 complete 都携带完整 `,-1),v(S,{kind:`type`,to:`/api/types#api-type-measure-result`},{default:_(()=>[...d[26]||=[c(`MeasureResult`,-1)]]),_:1}),d[28]||=c(`。 `,-1)]),v(C,{data:a,border:``},{default:_(()=>[v(h,{prop:`name`,label:`事件`,width:`120`}),v(h,{prop:`payload`,label:`载荷`,"min-width":`230`}),v(h,{prop:`meaning`,label:`语义`,"min-width":`310`})]),_:1}),v(C,{data:s,border:``},{default:_(()=>[v(h,{prop:`field`,label:`结果字段`,"min-width":`240`}),v(h,{prop:`meaning`,label:`说明`,"min-width":`430`})]),_:1})]),p(`section`,J,[d[39]||=p(`h2`,{class:`doc-h2`},`完成、取消与清理`,-1),p(`ul`,null,[p(`li`,null,[v(S,{kind:`method`,to:`/api/types#api-type-measure-session-method-finish`},{default:_(()=>[...d[30]||=[c(`finish`,-1)]]),_:1}),d[31]||=c(` 尝试确认当前合法结果；输入不足时按 incomplete 取消。 `,-1)]),p(`li`,null,[v(S,{kind:`method`,to:`/api/types#api-type-measure-session-method-cancel`},{default:_(()=>[...d[32]||=[c(`cancel`,-1)]]),_:1}),d[33]||=c(` 丢弃未完成结果并释放当前交互。 `,-1)]),p(`li`,null,[v(S,{kind:`property`,to:`/api/types#api-type-measure-session-property-finished`},{default:_(()=>[...d[34]||=[c(`finished`,-1)]]),_:1}),d[35]||=c(` 完成时返回 MeasureResult，取消时返回 undefined。 `,-1)]),p(`li`,null,[v(S,{kind:`method`,to:`/api/types#api-type-measure-service-method-clear`},{default:_(()=>[...d[36]||=[c(`clear`,-1)]]),_:1}),d[37]||=c(` 会取消活动 Session，并移除 MeasureService 拥有的测量图形与 Overlay。 `,-1)])]),v(m,{type:`warning`,closable:!1,"show-icon":``,title:`MeasureSession 没有公开 destroy()`},{default:_(()=>[...d[38]||=[c(` 单次会话使用 finish() 或 cancel() 进入终态；页面卸载时先调用 cancel()（若仍 active），再调用 measure.clear()，最后 earth.destroy() 会统一释放服务内部资源。 `,-1)]]),_:1})]),v(D,{"type-names":l,"runtime-names":[`measureTypes`],title:`Measure 完整 API`,description:`完整展示 measureTypes、MeasureService、MeasureOptions、MeasureSession、MeasureSessionEventMap、MeasureResult 与 MeasureType。`})]),p(`aside`,Y,[v(x,{title:`测量（Measure）`,items:t})])])}}});export{X as default};