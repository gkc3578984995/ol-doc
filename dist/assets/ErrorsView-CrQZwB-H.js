import{A as e,At as t,B as n,Nt as r,P as i,Q as a,R as o,T as s,ct as c,fn as l,it as u,j as d,ot as f,tt as p,x as m,xt as h,z as g,zt as _}from"./TypeExpression-D6csDz4V.js";import{B as v,E as y,H as b,N as x,V as S,W as C,_ as w,b as T,c as E,f as D,i as O,n as k,o as A,s as j,w as M,z as N}from"./index-4uKXPGRf.js";var P={class:`example-demo errors-demo`},F={class:`example-demo__toolbar errors-demo__controls`,role:`group`,"aria-label":`错误场景控制`},I={class:`errors-demo__map-shell`},L=`docs-errors-targets`,R=`docs-errors-point`,z=`docs-errors-temporary`,B=m(n({__name:`ErrorsDemo`,setup(n,{expose:m}){let _=t(null),v=r(null),b=r(null),S=t([]),C=0,N=0,B,V=e=>`${e}-${++C}`,H=e=>({id:e,layerId:L,module:z,geometry:{type:`point`,controlPoints:[[0,0]]},style:{symbol:{type:`circle`,radius:8,fill:{type:`solid`,color:`#f97316`}}}}),U=()=>({symbol:{type:`circle`,radius:12,fill:{type:`solid`,color:`#2563eb`},stroke:{color:`#ffffff`,width:3}}}),W=[{name:`InvalidArgumentError`,ctor:O,trigger:`elements.add() 写入没有控制点的 Point`,recovery:`补充一个有限坐标后重新 add()`,run:e=>{e.elements.add({...H(V(`invalid`)),geometry:{type:`point`,controlPoints:[]}})},recover:e=>(e.elements.add(H(V(`valid`))).remove(),`已用 1 个控制点创建成功，并清理临时 Element`)},{name:`DuplicateElementIdError`,ctor:A,trigger:`elements.add() 重复使用 ${R}`,recovery:`先 get() 判断，再使用新的业务 ID`,run:e=>{e.elements.add(H(R))},recover:e=>{let t=e.elements.get(R);return e.elements.add(H(V(`unique`))).remove(),`get() 找到现有目标：${t===void 0?`否`:`是`}；新 ID 创建成功`}},{name:`InvalidSelectorError`,ctor:E,trigger:`elements.remove({}) 传入空破坏性选择器`,recovery:`改用明确 module 选择器，清空全部则使用 clear()`,run:e=>{e.elements.remove({})},recover:e=>{let t=e.elements.add(H(V(`selector`)));return`明确 id 后移除 ${e.elements.remove({id:t.id})} 个 Element`}},{name:`ObjectDisposedError`,ctor:D,trigger:`移除 Element 后继续调用旧句柄 update()`,recovery:`丢弃旧句柄，通过 add()/get() 获取当前代次句柄`,run:e=>{let t=e.elements.add(H(V(`disposed`)));t.remove(),t.update({visible:!1})},recover:e=>{let t=e.elements.add(H(V(`current`)));return t.update({visible:!1}),t.remove(),`新句柄 update() 成功，旧句柄未被复用`}},{name:`CapabilityError`,ctor:y,trigger:`对 Point 播放只支持路径目标的 path-travel`,recovery:`查询兼容范围，改用 Point 支持的 pulse`,run:e=>{e.styles.set({id:R},U()),e.animations.play({id:R},{type:`path-travel`})},recover:e=>(e.animations.play({id:R},{type:`pulse`,periodMs:300}).stop(),`pulse 已成功启动并通过 Handle.stop() 清理`)},{name:`InteractionConflictError`,ctor:w,trigger:`Draw 活动时以 policy: 'reject' 启动 Measure`,recovery:`取消旧 Draw，再启动并取消 Measure`,run:e=>{B=e.draw.start({type:`polygon`,layerId:L,module:z,policy:`replace`}),e.measure.start({type:`area`,policy:`reject`})},recover:e=>(B?.cancel(),B=void 0,e.measure.start({type:`area`,policy:`reject`}).cancel(),`旧会话取消后 Measure 启动成功；取消后 Interaction 回到基线`)},{name:`ElementProtectedError`,ctor:M,trigger:`为协同保护中的目标启动 draw.edit()`,recovery:`应用更高 revision 的解锁消息，再重新发起并取消 Edit`,run:e=>{e.elements.setProtection(R,{protected:!0,operatorId:`remote-editor`,operatorName:`远端协作者`,revision:++N});let t=e.elements.get(R);if(t===void 0)throw Error(`错误示例目标不存在`);e.draw.edit(t,{policy:`replace`})},recover:e=>{e.elements.setProtection(R,{protected:!1,revision:++N});let t=e.elements.get(R);if(t===void 0)return`目标不存在，无法恢复 Edit`;let n=e.draw.edit(t,{policy:`replace`});return n.cancel(),n.destroy(),`更高 revision 已解锁；Edit 启动成功并完成清理`}},{name:`UnsupportedOperationError`,ctor:T,trigger:`把目标切到 nativeStyle 后调用结构化 styles.patch()`,recovery:`完整替换回 StyleSpec，再执行结构化 patch()`,run:e=>{e.styles.set({id:R},{nativeStyle:new x}),e.styles.patch({id:R},{symbol:{scale:1.4}})},recover:e=>(e.styles.set({id:R},U()),e.styles.patch({id:R},{symbol:{radius:14}}),`已恢复 StyleSpec，symbol.radius patch 成功`)}],G=t(W[0].name),K=e(()=>W.find(({name:e})=>e===G.value)??W[0]),q=(e,t,n)=>{let r=W.find(({ctor:t})=>e instanceof t);return{expected:t.name,apiCall:t.trigger,matchedClass:r?.name??`未识别`,name:e instanceof Error?e.name:typeof e,message:e instanceof Error?e.message:String(e),recovery:n}},J=e=>{let t=v.value;if(t===null)return{expected:e.name,apiCall:e.trigger,matchedClass:`地图未就绪`,name:`Unavailable`,message:`Earth 尚未初始化`,recovery:`等待初始化`};let n;try{e.run(t)}catch(e){n=e}let r;try{r=e.recover(t)}catch(e){r=e instanceof Error?`恢复失败：${e.name} · ${e.message}`:`恢复失败：${String(e)}`}return q(n,e,r)},Y=()=>{S.value=[J(K.value)]},X=()=>{S.value=W.map(J)},Z=()=>{let e=v.value,t=b.value;e===null||t===null||e.view.flyTo(t,10)};return m({reset:()=>{B?.cancel(),B=void 0,v.value?.animations.stopAll(),v.value?.measure.clear(),v.value?.elements.setProtection(R,{protected:!1,revision:++N}),v.value?.elements.remove({module:z}),v.value?.elements.get(R)!==void 0&&v.value.styles.set({id:R},U()),S.value=[],G.value=W[0].name,Z()},focus:Z}),p(()=>{if(_.value===null)return;let e=new j({target:_.value,view:{zoom:10},controls:{zoom:!0,rotate:!1,attribution:!0}});k(e,`vector`),e.layers.add({kind:`vector`,id:L,zIndex:30}),b.value=e.view.toProjectedCoordinates([116.4074,39.9042]),e.elements.add({id:R,layerId:L,module:`docs-errors-target`,geometry:{type:`point`,controlPoints:[b.value]},style:U(),data:{role:`stable-error-target`}}),v.value=e,Z()}),a(()=>{B?.cancel(),B=void 0,v.value?.destroy(),v.value=null}),(e,t)=>{let n=c(`el-alert`),r=c(`el-option`),a=c(`el-select`),p=c(`el-button`),m=c(`el-descriptions-item`),v=c(`el-descriptions`),y=c(`el-table-column`),b=c(`el-table`);return u(),i(`div`,P,[g(n,{type:`info`,closable:!1,"show-icon":``,title:`每一项都调用真实 Earth API 触发错误，捕获后立即执行对应恢复路径；示例没有手工 new 或 throw 错误实例。`}),d(`div`,F,[g(a,{modelValue:G.value,"onUpdate:modelValue":t[0]||=e=>G.value=e,"aria-label":`选择错误类型`},{default:h(()=>[(u(),i(s,null,f(W,e=>g(r,{key:e.name,label:e.name,value:e.name},null,8,[`label`,`value`])),64))]),_:1},8,[`modelValue`]),g(p,{type:`primary`,onClick:Y},{default:h(()=>[...t[1]||=[o(`运行所选真实失败与恢复`,-1)]]),_:1}),g(p,{onClick:X},{default:h(()=>[...t[2]||=[o(`依次运行全部 8 类`,-1)]]),_:1})]),g(v,{column:1,border:``},{default:h(()=>[g(m,{label:`真实触发`},{default:h(()=>[o(l(K.value.trigger),1)]),_:1}),g(m,{label:`恢复动作`},{default:h(()=>[o(l(K.value.recovery),1)]),_:1})]),_:1}),d(`div`,I,[d(`div`,{ref_key:`mapTarget`,ref:_,class:`example-stage errors-demo__map`},null,512),t[3]||=d(`div`,{class:`errors-demo__map-guide`},`蓝色点是真实 API 目标；恢复完成后仍可见且可继续操作`,-1)]),g(b,{data:S.value,border:``,"empty-text":`选择错误后运行真实 API 场景`},{default:h(()=>[g(y,{prop:`expected`,label:`预期类型`,"min-width":`190`}),g(y,{prop:`apiCall`,label:`真实 API 场景`,"min-width":`280`}),g(y,{prop:`matchedClass`,label:`instanceof 命中`,"min-width":`190`}),g(y,{prop:`name`,label:`error.name`,"min-width":`190`}),g(y,{prop:`message`,label:`message`,"min-width":`260`}),g(y,{prop:`recovery`,label:`恢复结果`,"min-width":`300`})]),_:1},8,[`data`])])}}}),[[`__scopeId`,`data-v-c9db590d`]]),V=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import Style from 'ol/style/Style.js';
import {
  CapabilityError,
  DuplicateElementIdError,
  Earth,
  ElementProtectedError,
  InteractionConflictError,
  InvalidArgumentError,
  InvalidSelectorError,
  ObjectDisposedError,
  UnsupportedOperationError,
  type Coordinate,
  type DrawSession
} from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

type ErrorClass =
  | typeof InvalidArgumentError
  | typeof DuplicateElementIdError
  | typeof InvalidSelectorError
  | typeof ObjectDisposedError
  | typeof CapabilityError
  | typeof InteractionConflictError
  | typeof ElementProtectedError
  | typeof UnsupportedOperationError;

interface ErrorDefinition {
  readonly name: string;
  readonly ctor: ErrorClass;
  readonly trigger: string;
  readonly recovery: string;
  readonly run: (earth: Earth) => void;
  readonly recover: (earth: Earth) => string;
}

interface RecognitionRow {
  readonly expected: string;
  readonly apiCall: string;
  readonly matchedClass: string;
  readonly name: string;
  readonly message: string;
  readonly recovery: string;
}

const LAYER_ID = 'docs-errors-targets';
const TARGET_ID = 'docs-errors-point';
const TEMP_MODULE = 'docs-errors-temporary';
const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const mapCenter = shallowRef<Coordinate | null>(null);
const rows = ref<RecognitionRow[]>([]);
let sequence = 0;
let protectionRevision = 0;
let conflictDraw: DrawSession | undefined;

const nextId = (prefix: string) => \`\${prefix}-\${++sequence}\`;

const pointInput = (id: string) => ({
  id,
  layerId: LAYER_ID,
  module: TEMP_MODULE,
  geometry: { type: 'point' as const, controlPoints: [[0, 0]] },
  style: { symbol: { type: 'circle' as const, radius: 8, fill: { type: 'solid' as const, color: '#f97316' } } }
});

const structuredTargetStyle = () => ({
  symbol: {
    type: 'circle' as const,
    radius: 12,
    fill: { type: 'solid' as const, color: '#2563eb' },
    stroke: { color: '#ffffff', width: 3 }
  }
});

const definitions: readonly ErrorDefinition[] = [
  {
    name: 'InvalidArgumentError',
    ctor: InvalidArgumentError,
    trigger: 'elements.add() 写入没有控制点的 Point',
    recovery: '补充一个有限坐标后重新 add()',
    run: (earth) => {
      earth.elements.add({
        ...pointInput(nextId('invalid')),
        geometry: { type: 'point', controlPoints: [] }
      });
    },
    recover: (earth) => {
      const element = earth.elements.add(pointInput(nextId('valid')));
      element.remove();
      return '已用 1 个控制点创建成功，并清理临时 Element';
    }
  },
  {
    name: 'DuplicateElementIdError',
    ctor: DuplicateElementIdError,
    trigger: \`elements.add() 重复使用 \${TARGET_ID}\`,
    recovery: '先 get() 判断，再使用新的业务 ID',
    run: (earth) => {
      earth.elements.add(pointInput(TARGET_ID));
    },
    recover: (earth) => {
      const current = earth.elements.get(TARGET_ID);
      const replacement = earth.elements.add(pointInput(nextId('unique')));
      replacement.remove();
      return \`get() 找到现有目标：\${current !== undefined ? '是' : '否'}；新 ID 创建成功\`;
    }
  },
  {
    name: 'InvalidSelectorError',
    ctor: InvalidSelectorError,
    trigger: 'elements.remove({}) 传入空破坏性选择器',
    recovery: '改用明确 module 选择器，清空全部则使用 clear()',
    run: (earth) => {
      earth.elements.remove({} as never);
    },
    recover: (earth) => {
      const temporary = earth.elements.add(pointInput(nextId('selector')));
      const removed = earth.elements.remove({ id: temporary.id });
      return \`明确 id 后移除 \${removed} 个 Element\`;
    }
  },
  {
    name: 'ObjectDisposedError',
    ctor: ObjectDisposedError,
    trigger: '移除 Element 后继续调用旧句柄 update()',
    recovery: '丢弃旧句柄，通过 add()/get() 获取当前代次句柄',
    run: (earth) => {
      const stale = earth.elements.add(pointInput(nextId('disposed')));
      stale.remove();
      stale.update({ visible: false });
    },
    recover: (earth) => {
      const current = earth.elements.add(pointInput(nextId('current')));
      current.update({ visible: false });
      current.remove();
      return '新句柄 update() 成功，旧句柄未被复用';
    }
  },
  {
    name: 'CapabilityError',
    ctor: CapabilityError,
    trigger: '对 Point 播放只支持路径目标的 path-travel',
    recovery: '查询兼容范围，改用 Point 支持的 pulse',
    run: (earth) => {
      earth.styles.set({ id: TARGET_ID }, structuredTargetStyle());
      earth.animations.play({ id: TARGET_ID }, { type: 'path-travel' });
    },
    recover: (earth) => {
      const handle = earth.animations.play({ id: TARGET_ID }, { type: 'pulse', periodMs: 300 });
      handle.stop();
      return 'pulse 已成功启动并通过 Handle.stop() 清理';
    }
  },
  {
    name: 'InteractionConflictError',
    ctor: InteractionConflictError,
    trigger: "Draw 活动时以 policy: 'reject' 启动 Measure",
    recovery: '取消旧 Draw，再启动并取消 Measure',
    run: (earth) => {
      conflictDraw = earth.draw.start({ type: 'polygon', layerId: LAYER_ID, module: TEMP_MODULE, policy: 'replace' });
      earth.measure.start({ type: 'area', policy: 'reject' });
    },
    recover: (earth) => {
      conflictDraw?.cancel();
      conflictDraw = undefined;
      const measure = earth.measure.start({ type: 'area', policy: 'reject' });
      measure.cancel();
      return '旧会话取消后 Measure 启动成功；取消后 Interaction 回到基线';
    }
  },
  {
    name: 'ElementProtectedError',
    ctor: ElementProtectedError,
    trigger: '为协同保护中的目标启动 draw.edit()',
    recovery: '应用更高 revision 的解锁消息，再重新发起并取消 Edit',
    run: (earth) => {
      earth.elements.setProtection(TARGET_ID, {
        protected: true,
        operatorId: 'remote-editor',
        operatorName: '远端协作者',
        revision: ++protectionRevision
      });
      const target = earth.elements.get(TARGET_ID);
      if (target === undefined) throw new Error('错误示例目标不存在');
      earth.draw.edit(target, { policy: 'replace' });
    },
    recover: (earth) => {
      earth.elements.setProtection(TARGET_ID, { protected: false, revision: ++protectionRevision });
      const target = earth.elements.get(TARGET_ID);
      if (target === undefined) return '目标不存在，无法恢复 Edit';
      const edit = earth.draw.edit(target, { policy: 'replace' });
      edit.cancel();
      edit.destroy();
      return '更高 revision 已解锁；Edit 启动成功并完成清理';
    }
  },
  {
    name: 'UnsupportedOperationError',
    ctor: UnsupportedOperationError,
    trigger: '把目标切到 nativeStyle 后调用结构化 styles.patch()',
    recovery: '完整替换回 StyleSpec，再执行结构化 patch()',
    run: (earth) => {
      earth.styles.set({ id: TARGET_ID }, { nativeStyle: new Style() });
      earth.styles.patch({ id: TARGET_ID }, { symbol: { scale: 1.4 } });
    },
    recover: (earth) => {
      earth.styles.set({ id: TARGET_ID }, structuredTargetStyle());
      earth.styles.patch({ id: TARGET_ID }, { symbol: { radius: 14 } });
      return '已恢复 StyleSpec，symbol.radius patch 成功';
    }
  }
];

const selected = ref(definitions[0].name);
const selectedDefinition = computed(() => definitions.find(({ name }) => name === selected.value) ?? definitions[0]);

const recognize = (error: unknown, definition: ErrorDefinition, recovery: string): RecognitionRow => {
  const matched = definitions.find(({ ctor }) => error instanceof ctor);
  return {
    expected: definition.name,
    apiCall: definition.trigger,
    matchedClass: matched?.name ?? '未识别',
    name: error instanceof Error ? error.name : typeof error,
    message: error instanceof Error ? error.message : String(error),
    recovery
  };
};

const execute = (definition: ErrorDefinition): RecognitionRow => {
  const earth = earthRef.value;
  if (earth === null) {
    return {
      expected: definition.name,
      apiCall: definition.trigger,
      matchedClass: '地图未就绪',
      name: 'Unavailable',
      message: 'Earth 尚未初始化',
      recovery: '等待初始化'
    };
  }
  let caught: unknown;
  try {
    definition.run(earth);
  } catch (error) {
    caught = error;
  }
  let recovery: string;
  try {
    recovery = definition.recover(earth);
  } catch (error) {
    recovery = error instanceof Error ? \`恢复失败：\${error.name} · \${error.message}\` : \`恢复失败：\${String(error)}\`;
  }
  return recognize(caught, definition, recovery);
};

const runOne = () => {
  rows.value = [execute(selectedDefinition.value)];
};

const runAll = () => {
  rows.value = definitions.map(execute);
};

const focus = () => {
  const earth = earthRef.value;
  const center = mapCenter.value;
  if (earth === null || center === null) return;
  earth.view.flyTo(center, 10);
};

const reset = () => {
  conflictDraw?.cancel();
  conflictDraw = undefined;
  earthRef.value?.animations.stopAll();
  earthRef.value?.measure.clear();
  earthRef.value?.elements.setProtection(TARGET_ID, { protected: false, revision: ++protectionRevision });
  earthRef.value?.elements.remove({ module: TEMP_MODULE });
  if (earthRef.value?.elements.get(TARGET_ID) !== undefined) earthRef.value.styles.set({ id: TARGET_ID }, structuredTargetStyle());
  rows.value = [];
  selected.value = definitions[0].name;
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
  mapCenter.value = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earth.elements.add({
    id: TARGET_ID,
    layerId: LAYER_ID,
    module: 'docs-errors-target',
    geometry: { type: 'point', controlPoints: [mapCenter.value] },
    style: structuredTargetStyle(),
    data: { role: 'stable-error-target' }
  });
  earthRef.value = earth;
  focus();
});

onBeforeUnmount(() => {
  conflictDraw?.cancel();
  conflictDraw = undefined;
  earthRef.value?.destroy();
  earthRef.value = null;
});
<\/script>

<template>
  <div class="example-demo errors-demo">
    <el-alert
      type="info"
      :closable="false"
      show-icon
      title="每一项都调用真实 Earth API 触发错误，捕获后立即执行对应恢复路径；示例没有手工 new 或 throw 错误实例。"
    />

    <div class="example-demo__toolbar errors-demo__controls" role="group" aria-label="错误场景控制">
      <el-select v-model="selected" aria-label="选择错误类型">
        <el-option v-for="definition in definitions" :key="definition.name" :label="definition.name" :value="definition.name" />
      </el-select>
      <el-button type="primary" @click="runOne">运行所选真实失败与恢复</el-button>
      <el-button @click="runAll">依次运行全部 8 类</el-button>
    </div>

    <el-descriptions :column="1" border>
      <el-descriptions-item label="真实触发">{{ selectedDefinition.trigger }}</el-descriptions-item>
      <el-descriptions-item label="恢复动作">{{ selectedDefinition.recovery }}</el-descriptions-item>
    </el-descriptions>

    <div class="errors-demo__map-shell">
      <div ref="mapTarget" class="example-stage errors-demo__map"></div>
      <div class="errors-demo__map-guide">蓝色点是真实 API 目标；恢复完成后仍可见且可继续操作</div>
    </div>

    <el-table :data="rows" border empty-text="选择错误后运行真实 API 场景">
      <el-table-column prop="expected" label="预期类型" min-width="190" />
      <el-table-column prop="apiCall" label="真实 API 场景" min-width="280" />
      <el-table-column prop="matchedClass" label="instanceof 命中" min-width="190" />
      <el-table-column prop="name" label="error.name" min-width="190" />
      <el-table-column prop="message" label="message" min-width="260" />
      <el-table-column prop="recovery" label="恢复结果" min-width="300" />
    </el-table>
  </div>
</template>

<style scoped>
.errors-demo__controls {
  gap: 10px;
}

.errors-demo__controls :deep(.el-select) {
  width: min(100%, 280px);
}

.errors-demo__controls > *,
.errors-demo__controls :deep(.el-button) {
  max-width: 100%;
}

.errors-demo__controls :deep(.el-button + .el-button) {
  margin-left: 0;
}

.errors-demo__map-shell {
  position: relative;
  overflow: hidden;
  margin: 14px 0;
  border-radius: 8px;
}

.errors-demo__map {
  min-height: 300px;
}

.errors-demo__map-guide {
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

@media (max-width: 560px) {
  .errors-demo__controls {
    display: grid;
    grid-template-columns: 1fr;
  }

  .errors-demo__controls :deep(.el-select),
  .errors-demo__controls :deep(.el-button) {
    width: 100%;
  }

  .errors-demo__controls :deep(.el-button) {
    height: auto;
    min-height: 32px;
    white-space: normal;
  }

  .errors-demo__map-guide {
    position: static;
    max-width: none;
    border-radius: 0;
    transform: none;
  }
}
</style>
`,H={class:`doc-page-layout`},U={class:`doc-page`},W={id:`overview`,class:`doc-prose`},G={id:`error-catalog`,class:`doc-prose`},K={id:`example-error-recognition`,class:`doc-prose`},q={id:`recognition`,class:`doc-prose`},J={class:`doc-page-layout__aside`},Y=n({__name:`ErrorsView`,setup(e){let n=[{id:`overview`,label:`稳定错误族`},{id:`error-catalog`,label:`8 种错误类型`},{id:`example-error-recognition`,label:`真实 API 失败、识别与恢复`},{id:`recognition`,label:`识别与恢复策略`},{id:`api`,label:`完整 API`}],r=[{prop:`name`,label:`错误类型`,width:250,presentation:`type`},{prop:`when`,label:`何时出现`,width:430},{prop:`response`,label:`建议处理`,width:360}],a=[{anchor:`api-error-invalid-argument`,href:`/api/types#api-type-invalid-argument-error`,name:`InvalidArgumentError`,when:`useEarth ID、LayerSpec、StyleSpec、ShapeState、菜单、Overlay 等参数不符合契约`,response:`修正输入或在应用表单边界提示；不要重试相同参数`},{anchor:`api-error-duplicate-element-id`,href:`/api/types#api-type-duplicate-element-id-error`,name:`DuplicateElementIdError`,when:`当前 Earth 中已经存在相同 Element ID，再次 add`,response:`选择业务唯一 ID、先查询，或显式移除旧 Element`},{anchor:`api-error-invalid-selector`,href:`/api/types#api-type-invalid-selector-error`,name:`InvalidSelectorError`,when:`remove、hide、show 等破坏性或批量操作收到空选择器`,response:`补充 id、module、layerId 等明确条件；清空全部使用 clear`},{anchor:`api-error-object-disposed`,href:`/api/types#api-type-object-disposed-error`,name:`ObjectDisposedError`,when:`对已销毁 Earth、Element、Session 或 Handle 执行非清理操作`,response:`停止复用旧句柄；清理函数保持可幂等调用`},{anchor:`api-error-capability`,href:`/api/types#api-type-capability-error`,name:`CapabilityError`,when:`目标图形没有声明请求的 draw、edit、transform、animation 等能力`,response:`检查目标 Shape 能力，选择兼容目标或功能`},{anchor:`api-error-interaction-conflict`,href:`/api/types#api-type-interaction-conflict-error`,name:`InteractionConflictError`,when:`活动互斥交互存在时，以 reject 策略启动新会话`,response:`等待或取消当前会话，或按业务选择 replace 策略`},{anchor:`api-error-element-protected`,href:`/api/types#api-type-element-protected-error`,name:`ElementProtectedError`,when:`尝试为处于协同保护模式的 Element 启动内置 Edit 或 Transform`,response:`保留只读命中，提示当前操作人；等待更高 revision 的解锁消息后重新发起交互`},{anchor:`api-error-unsupported-operation`,href:`/api/types#api-type-unsupported-operation-error`,name:`UnsupportedOperationError`,when:`API 已定义，但当前状态或表示方式无法执行，例如 nativeStyle 的结构化操作`,response:`改用受支持表示方式；不要把失败当作静默 no-op`}],s=[`InvalidArgumentError`,`DuplicateElementIdError`,`InvalidSelectorError`,`ObjectDisposedError`,`CapabilityError`,`InteractionConflictError`,`ElementProtectedError`,`UnsupportedOperationError`],l=t(null),f=()=>l.value?.reset(),p=()=>l.value?.focus();return(e,t)=>{let m=c(`el-alert`),y=c(`el-step`),x=c(`el-steps`);return u(),i(`div`,H,[d(`article`,U,[t[11]||=d(`header`,{class:`doc-hero`},[d(`span`,{class:`doc-hero__eyebrow`},`工具与参考`),d(`h1`,null,`错误类型`),d(`p`,null,`2.0 从包根导出 8 个稳定错误类，用类型区分参数、身份、选择器、生命周期、能力、交互冲突、协同保护与不支持操作，而不是以 false 或模糊消息静默失败。`)],-1),d(`section`,W,[t[1]||=d(`h2`,{class:`doc-h2`},`稳定错误族`,-1),g(m,{type:`info`,closable:!1,"show-icon":``,title:`查询缺失不是异常`},{default:h(()=>[...t[0]||=[o(` get() 找不到对象时返回 undefined，query() 没有结果时返回空集合。错误类用于契约或状态确实不成立的场景；不要用 try/catch 代替正常的缺失判断。 `,-1)]]),_:1}),t[2]||=d(`p`,null,[o(` 所有类型都继承原生 `),d(`code`,null,`Error`),o(`，保留 `),d(`code`,null,`message`),o(`、`),d(`code`,null,`stack`),o(`，并把 `),d(`code`,null,`name`),o(` 设置为具体类名。业务分支优先使用 `),d(`code`,null,`instanceof`),o(`；日志可以同时记录 name 与 message。 `)],-1)]),d(`section`,G,[t[3]||=d(`h2`,{class:`doc-h2`},`8 种错误类型`,-1),g(S,{columns:r,rows:a})]),d(`section`,K,[g(v,{title:`真实 API 失败、识别与恢复`,source:_(V),"show-reset":``,"show-focus":``,onReset:f,onFocus:p},{description:h(()=>[...t[4]||=[d(`p`,null,[o(` 示例分别通过无效 Shape 输入、重复 ID、空破坏性选择器、失效句柄、不兼容动画、reject 交互冲突、受保护目标 Edit 和 nativeStyle 结构化更新触发八类真实错误；捕获后用 `),d(`code`,null,`instanceof`),o(` 识别并立即执行可运行的恢复动作，不手工构造或抛出错误实例。 `)],-1)]]),preview:h(()=>[g(B,{ref_key:`errorsDemoRef`,ref:l},null,512)]),_:1},8,[`source`])]),d(`section`,q,[t[10]||=d(`h2`,{class:`doc-h2`},`识别与恢复策略`,-1),g(x,{direction:`vertical`,active:4,"finish-status":`success`},{default:h(()=>[g(y,{title:`先处理具体类型`,description:`用 instanceof DuplicateElementIdError 等分支选择可恢复动作。`}),g(y,{title:`再处理 Error`,description:`未知 Error 进入统一错误通道，同时保留 name、message、stack 与业务上下文。`}),g(y,{title:`跨边界只做诊断`,description:`错误经 JSON、Worker 或服务端传输后原型通常丢失；name 可辅助诊断，但不能恢复原始实例。`}),g(y,{title:`不要解析 message`,description:`message 面向具体说明，可能随校验细节变化；控制流应依赖类型。`})]),_:1}),d(`p`,null,[t[7]||=o(` 对 `,-1),g(C,{kind:`type`,to:`/api/types#api-type-object-disposed-error`},{default:h(()=>[...t[5]||=[o(`ObjectDisposedError`,-1)]]),_:1}),t[8]||=o(`，恢复方式通常是丢弃旧句柄并重新获取；对 `,-1),g(C,{kind:`type`,to:`/api/types#api-type-invalid-argument-error`},{default:h(()=>[...t[6]||=[o(`InvalidArgumentError`,-1)]]),_:1}),t[9]||=o(`，应回到输入边界修正参数，而不是自动重复调用。 `,-1)])]),g(N,{"type-names":s,description:`这里直接列出全部 8 个稳定错误类的构造函数、参数和继承信息；类型名称还可以继续进入顶部 API 查询。`})]),d(`aside`,J,[g(b,{title:`错误类型`,items:n})])])}}});export{Y as default};