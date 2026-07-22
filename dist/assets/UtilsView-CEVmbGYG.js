import{At as e,B as t,P as n,Q as r,R as i,ct as a,fn as o,it as s,j as c,x as l,xt as u,z as d,zt as f}from"./TypeExpression-D6csDz4V.js";import{B as p,C as m,D as h,H as g,S as _,T as v,V as y,W as b,d as x,g as S,l as C,m as w,u as T,v as E,y as D,z as O}from"./index-4uKXPGRf.js";var k={class:`example-demo`},A={class:`example-demo__control-panel utils-demo__controls`},j={class:`example-demo__field utils-demo__ratio-field`},M={class:`example-demo__action-group`},N={class:`example-demo__action-buttons utils-demo__pure-actions`},P={class:`example-demo__control-panel utils-demo__throttle-controls`},F={class:`example-demo__action-group utils-demo__toolbar`,role:`group`,"aria-label":`throttle 调用控制`},I={class:`example-demo__action-buttons utils-demo__action-buttons`},L=l(t({__name:`UtilsDemo`,setup(t){let l=e(.5),f=e([]),p=e(600),g=e(!0),y=e(!0),b=e(0),O=e(),L=e(`等待触发`),R=()=>h(e=>(b.value+=1,O.value=e,L.value=`实际执行第 ${b.value} 次，参数 ${e}`,e),p.value,{leading:g.value,trailing:y.value}),z=R(),B=e=>JSON.stringify(e),V=()=>{let e=[0,0],t=[10,20],n=[5,16],r=[[0,0],[10,0],[10,10]],i=E(r),a=m(450);f.value=[{name:`add2`,result:B(v([1,2],[3,4]))},{name:`scale2`,result:B(_([2,3],2))},{name:`lerp2`,result:B(C(e,t,l.value))},{name:`quadraticBezier2`,result:B(T(e,n,t,l.value))},{name:`degToRad`,result:a.toFixed(6)},{name:`radToDeg`,result:D(a).toFixed(2)},{name:`closeRing`,result:B(i)},{name:`trimClosingCoordinate`,result:B(x(i))},{name:`toFlatCoordinates`,result:B(S(r))},{name:`createId`,result:w()}]},H=()=>{z.cancel(),z=R(),b.value=0,O.value=void 0,L.value=`已重建：wait=${p.value}ms，leading=${g.value}，trailing=${y.value}`},U=()=>{for(let e=1;e<=5;e+=1)z(e);L.value=`已连续调用 5 次；观察 leading 立即执行与 trailing 最后参数`},W=()=>{let e=z.flush();L.value=`flush() 返回 ${e??`undefined`}；等待中的尾调用已立即处理`},G=()=>{z.cancel(),L.value=`cancel() 已取消尾调用并清空节流状态`};return r(()=>{z.cancel()}),(e,t)=>{let r=a(`el-slider`),m=a(`el-button`),h=a(`el-table-column`),_=a(`el-table`),v=a(`el-card`),x=a(`el-input-number`),S=a(`el-form-item`),C=a(`el-switch`),w=a(`el-form`),T=a(`el-descriptions-item`),E=a(`el-descriptions`);return s(),n(`div`,k,[d(v,{shadow:`never`,class:`utils-demo__card`},{header:u(()=>[...t[4]||=[c(`strong`,null,`坐标、角度、曲线与 ID`,-1)]]),default:u(()=>[c(`div`,A,[c(`div`,j,[t[5]||=c(`span`,null,`插值比例`,-1),d(r,{modelValue:l.value,"onUpdate:modelValue":t[0]||=e=>l.value=e,min:0,max:1,step:.05,"show-input":``,"aria-label":`插值比例`},null,8,[`modelValue`])]),c(`div`,M,[c(`div`,N,[d(m,{type:`primary`,onClick:V},{default:u(()=>[...t[6]||=[i(`运行全部纯函数`,-1)]]),_:1})])])]),d(_,{data:f.value,size:`small`,border:``,"empty-text":`点击“运行全部纯函数”查看结果`},{default:u(()=>[d(h,{prop:`name`,label:`函数`,"min-width":`190`}),d(h,{prop:`result`,label:`实际返回值`,"min-width":`300`})]),_:1},8,[`data`])]),_:1}),d(v,{shadow:`never`,class:`utils-demo__card`},{header:u(()=>[...t[7]||=[c(`strong`,null,`throttle 的 leading、trailing、flush 与 cancel`,-1)]]),default:u(()=>[c(`div`,P,[d(w,{class:`example-demo__control-grid utils-demo__form`,inline:``,"label-position":`top`},{default:u(()=>[d(S,{label:`wait（毫秒）`},{default:u(()=>[d(x,{modelValue:p.value,"onUpdate:modelValue":t[1]||=e=>p.value=e,min:0,max:3e3,step:100,onChange:H},null,8,[`modelValue`])]),_:1}),d(S,{label:`首调用`},{default:u(()=>[d(C,{modelValue:g.value,"onUpdate:modelValue":t[2]||=e=>g.value=e,"active-text":`leading`,onChange:H},null,8,[`modelValue`])]),_:1}),d(S,{label:`尾调用`},{default:u(()=>[d(C,{modelValue:y.value,"onUpdate:modelValue":t[3]||=e=>y.value=e,"active-text":`trailing`,onChange:H},null,8,[`modelValue`])]),_:1})]),_:1}),c(`div`,F,[c(`div`,I,[d(m,{type:`primary`,onClick:U},{default:u(()=>[...t[8]||=[i(`连续调用 5 次`,-1)]]),_:1}),d(m,{onClick:W},{default:u(()=>[...t[9]||=[i(`flush`,-1)]]),_:1}),d(m,{type:`danger`,plain:``,onClick:G},{default:u(()=>[...t[10]||=[i(`cancel`,-1)]]),_:1})])])]),d(E,{column:1,border:``,"aria-live":`polite`},{default:u(()=>[d(T,{label:`实际执行次数`},{default:u(()=>[i(o(b.value),1)]),_:1}),d(T,{label:`最近参数`},{default:u(()=>[i(o(O.value??`—`),1)]),_:1}),d(T,{label:`状态`},{default:u(()=>[i(o(L.value),1)]),_:1})]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-a0437700`]]),R=`<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue';
import {
  add2,
  closeRing,
  createId,
  degToRad,
  lerp2,
  quadraticBezier2,
  radToDeg,
  scale2,
  throttle,
  toFlatCoordinates,
  trimClosingCoordinate
} from '@vrsim/earth-engine-ol';
import type { Coordinate } from '@vrsim/earth-engine-ol';

interface ResultRow {
  name: string;
  result: string;
}

const ratio = ref(0.5);
const results = ref<ResultRow[]>([]);
const wait = ref(600);
const leading = ref(true);
const trailing = ref(true);
const executionCount = ref(0);
const lastThrottleValue = ref<number | undefined>();
const throttleStatus = ref('等待触发');

const createLimitedUpdate = () =>
  throttle(
    (value: number) => {
      executionCount.value += 1;
      lastThrottleValue.value = value;
      throttleStatus.value = \`实际执行第 \${executionCount.value} 次，参数 \${value}\`;
      return value;
    },
    wait.value,
    { leading: leading.value, trailing: trailing.value }
  );

let limitedUpdate = createLimitedUpdate();

const format = (value: unknown): string => JSON.stringify(value);

const runUtilities = () => {
  const start: Coordinate = [0, 0];
  const end: Coordinate = [10, 20];
  const control: Coordinate = [5, 16];
  const openRing: Coordinate[] = [
    [0, 0],
    [10, 0],
    [10, 10]
  ];
  const closed = closeRing(openRing);
  const radians = degToRad(450);

  results.value = [
    { name: 'add2', result: format(add2([1, 2], [3, 4])) },
    { name: 'scale2', result: format(scale2([2, 3], 2)) },
    { name: 'lerp2', result: format(lerp2(start, end, ratio.value)) },
    { name: 'quadraticBezier2', result: format(quadraticBezier2(start, control, end, ratio.value)) },
    { name: 'degToRad', result: radians.toFixed(6) },
    { name: 'radToDeg', result: radToDeg(radians).toFixed(2) },
    { name: 'closeRing', result: format(closed) },
    { name: 'trimClosingCoordinate', result: format(trimClosingCoordinate(closed)) },
    { name: 'toFlatCoordinates', result: format(toFlatCoordinates(openRing)) },
    { name: 'createId', result: createId() }
  ];
};

const rebuildThrottle = () => {
  limitedUpdate.cancel();
  limitedUpdate = createLimitedUpdate();
  executionCount.value = 0;
  lastThrottleValue.value = undefined;
  throttleStatus.value = \`已重建：wait=\${wait.value}ms，leading=\${leading.value}，trailing=\${trailing.value}\`;
};

const triggerBurst = () => {
  for (let value = 1; value <= 5; value += 1) limitedUpdate(value);
  throttleStatus.value = '已连续调用 5 次；观察 leading 立即执行与 trailing 最后参数';
};

const flushThrottle = () => {
  const value = limitedUpdate.flush();
  throttleStatus.value = \`flush() 返回 \${value ?? 'undefined'}；等待中的尾调用已立即处理\`;
};

const cancelThrottle = () => {
  limitedUpdate.cancel();
  throttleStatus.value = 'cancel() 已取消尾调用并清空节流状态';
};

onBeforeUnmount(() => {
  limitedUpdate.cancel();
});
<\/script>

<template>
  <div class="example-demo">
    <el-card shadow="never" class="utils-demo__card">
      <template #header><strong>坐标、角度、曲线与 ID</strong></template>
      <div class="example-demo__control-panel utils-demo__controls">
        <div class="example-demo__field utils-demo__ratio-field">
          <span>插值比例</span>
          <el-slider v-model="ratio" :min="0" :max="1" :step="0.05" show-input aria-label="插值比例" />
        </div>
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons utils-demo__pure-actions">
            <el-button type="primary" @click="runUtilities">运行全部纯函数</el-button>
          </div>
        </div>
      </div>
      <el-table :data="results" size="small" border empty-text="点击“运行全部纯函数”查看结果">
        <el-table-column prop="name" label="函数" min-width="190" />
        <el-table-column prop="result" label="实际返回值" min-width="300" />
      </el-table>
    </el-card>

    <el-card shadow="never" class="utils-demo__card">
      <template #header><strong>throttle 的 leading、trailing、flush 与 cancel</strong></template>
      <div class="example-demo__control-panel utils-demo__throttle-controls">
        <el-form class="example-demo__control-grid utils-demo__form" inline label-position="top">
          <el-form-item label="wait（毫秒）">
            <el-input-number v-model="wait" :min="0" :max="3000" :step="100" @change="rebuildThrottle" />
          </el-form-item>
          <el-form-item label="首调用">
            <el-switch v-model="leading" active-text="leading" @change="rebuildThrottle" />
          </el-form-item>
          <el-form-item label="尾调用">
            <el-switch v-model="trailing" active-text="trailing" @change="rebuildThrottle" />
          </el-form-item>
        </el-form>
        <div class="example-demo__action-group utils-demo__toolbar" role="group" aria-label="throttle 调用控制">
          <div class="example-demo__action-buttons utils-demo__action-buttons">
            <el-button type="primary" @click="triggerBurst">连续调用 5 次</el-button>
            <el-button @click="flushThrottle">flush</el-button>
            <el-button type="danger" plain @click="cancelThrottle">cancel</el-button>
          </div>
        </div>
      </div>
      <el-descriptions :column="1" border aria-live="polite">
        <el-descriptions-item label="实际执行次数">{{ executionCount }}</el-descriptions-item>
        <el-descriptions-item label="最近参数">{{ lastThrottleValue ?? '—' }}</el-descriptions-item>
        <el-descriptions-item label="状态">{{ throttleStatus }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<style scoped>
.utils-demo__card + .utils-demo__card {
  margin-top: 16px;
}

.utils-demo__card {
  border-color: var(--doc-border);
  background: var(--doc-surface);
}

.utils-demo__controls {
  grid-template-columns: minmax(220px, 1fr) auto;
  align-items: end;
  gap: 14px;
  margin-bottom: 14px;
}

.utils-demo__controls > *,
.utils-demo__form :deep(.el-form-item),
.utils-demo__form :deep(.el-input-number) {
  max-width: 100%;
}

.utils-demo__ratio-field {
  width: 100%;
}

.utils-demo__form :deep(.el-form-item) {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .utils-demo__controls {
    grid-template-columns: 1fr;
  }

  .utils-demo__controls :deep(.el-slider),
  .utils-demo__controls :deep(.el-button),
  .utils-demo__form :deep(.el-form-item) {
    width: 100%;
  }

  .utils-demo__form :deep(.el-form-item) {
    margin-right: 0;
  }

  .utils-demo__form :deep(.el-input-number) {
    width: min(100%, 220px);
  }

  .utils-demo__action-buttons {
    display: grid;
    grid-template-columns: 1fr;
  }

  .utils-demo__toolbar :deep(.el-button) {
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 32px;
    white-space: normal;
  }
}
</style>
`,z={class:`doc-page-layout`},B={class:`doc-page`},V={id:`overview`,class:`doc-prose`},H={id:`example-utils-runtime`,class:`doc-prose`},U={id:`math-reference`,class:`doc-prose`},W={id:`id-reference`,class:`doc-prose`},G={id:`throttle-reference`,class:`doc-prose`},K={class:`doc-page-layout__aside`},q=t({__name:`UtilsView`,setup(e){let t=[{id:`overview`,label:`工具边界`},{id:`example-utils-runtime`,label:`运行全部数学、ID 与节流工具`},{id:`math-reference`,label:`数学与坐标函数`},{id:`id-reference`,label:`ID 函数`},{id:`throttle-reference`,label:`throttle`},{id:`api`,label:`完整 API`}],r=[{prop:`name`,label:`函数`,width:220,presentation:`method`},{prop:`params`,label:`参数`,width:440,linkTypes:!0},{prop:`returns`,label:`返回值`,width:250,linkTypes:!0},{prop:`desc`,label:`行为`,width:420}],o=[{anchor:`api-function-to-flat-coordinates`,name:`toFlatCoordinates`,params:`coordinates: readonly (readonly number[])[]`,returns:`number[]`,desc:`按顺序展开二维坐标数组；返回新数组，不修改输入`},{anchor:`api-function-deg-to-rad`,name:`degToRad`,params:`degrees: number`,returns:`number`,desc:`角度换算为弧度`},{anchor:`api-function-rad-to-deg`,name:`radToDeg`,params:`radians: number`,returns:`number`,desc:`弧度换算为归一化到 [0, 360) 的角度`},{anchor:`api-function-scale-2`,name:`scale2`,params:`vector: Coordinate, factor: number`,returns:`Coordinate`,desc:`二维向量按统一倍数缩放，返回新坐标`},{anchor:`api-function-add-2`,name:`add2`,params:`left: Coordinate, right: Coordinate`,returns:`Coordinate`,desc:`二维向量相加，返回新坐标`},{anchor:`api-function-lerp-2`,name:`lerp2`,params:`start: Coordinate, end: Coordinate, ratio: number`,returns:`Coordinate`,desc:`在两个坐标之间线性插值；ratio 不会被强制截断`},{anchor:`api-function-quadratic-bezier-2`,name:`quadraticBezier2`,params:`start: Coordinate, control: Coordinate, end: Coordinate, ratio: number`,returns:`Coordinate`,desc:`计算二次贝塞尔曲线上的坐标`},{anchor:`api-function-close-ring`,name:`closeRing`,params:`coordinates: readonly Coordinate[]`,returns:`Coordinate[]`,desc:`复制坐标，并在首尾不相同时补入首坐标；空数组返回空数组`},{anchor:`api-function-trim-closing-coordinate`,name:`trimClosingCoordinate`,params:`coordinates: readonly Coordinate[]`,returns:`Coordinate[]`,desc:`复制坐标，并移除末尾与首坐标完全相同的闭合点`}],l=[{anchor:`api-function-create-id`,name:`createId`,params:`—`,returns:`string`,desc:`创建 UUID 格式随机 ID；优先使用 Web Crypto，缺失时退回随机字节实现`}],m=[{anchor:`api-function-throttle`,name:`throttle`,params:`fn: (this: This, ...args: Args) => Result, wait?: number, options?: ThrottleOptions`,returns:`ThrottledFunction<This, Args, Result>`,desc:`限制调用频率并保留 this、参数和返回值；默认 leading 与 trailing 均为 true`},{anchor:`api-method-throttled-cancel`,href:`/api/types#api-type-throttled-function-method-cancel`,name:`throttled.cancel`,params:`—`,returns:`void`,desc:`取消等待中的尾调用并清空节流状态；组件卸载时应调用`},{anchor:`api-method-throttled-flush`,href:`/api/types#api-type-throttled-function-method-flush`,name:`throttled.flush`,params:`—`,returns:`Result | undefined`,desc:`立即执行等待中的尾调用；没有等待任务时返回已有结果或 undefined`}],h=[`ThrottleOptions`,`ThrottledFunction`],_=[`toFlatCoordinates`,`degToRad`,`radToDeg`,`scale2`,`add2`,`lerp2`,`quadraticBezier2`,`closeRing`,`trimClosingCoordinate`,`createId`,`throttle`];return(e,v)=>{let x=a(`el-card`),S=a(`el-col`),C=a(`el-row`),w=a(`el-alert`);return s(),n(`div`,z,[c(`article`,B,[v[18]||=c(`header`,{class:`doc-hero`},[c(`span`,{class:`doc-hero__eyebrow`},`工具与参考`),c(`h1`,null,`Utils`),c(`p`,null,`包根导出一组无 OpenLayers 运行时依赖的坐标、角度、曲线、环、ID 与节流工具；所有函数均可独立按需导入。`)],-1),c(`section`,V,[v[6]||=c(`h2`,{class:`doc-h2`},`工具边界`,-1),d(C,{gutter:16},{default:u(()=>[d(S,{xs:24,md:8},{default:u(()=>[d(x,{shadow:`never`},{header:u(()=>[...v[0]||=[c(`strong`,null,`数学与坐标`,-1)]]),default:u(()=>[v[1]||=c(`p`,null,`纯函数返回新数组，不修改输入；Coordinate 可以是二维或三维，但 add2、scale2 和曲线函数只计算前两个分量。`,-1)]),_:1})]),_:1}),d(S,{xs:24,md:8},{default:u(()=>[d(x,{shadow:`never`},{header:u(()=>[...v[2]||=[c(`strong`,null,`createId`,-1)]]),default:u(()=>[v[3]||=c(`p`,null,`生成适合 Element、Layer、Overlay 等身份字段的 UUID 格式随机值；业务可读 ID 仍建议由应用显式提供。`,-1)]),_:1})]),_:1}),d(S,{xs:24,md:8},{default:u(()=>[d(x,{shadow:`never`},{header:u(()=>[...v[4]||=[c(`strong`,null,`throttle`,-1)]]),default:u(()=>[v[5]||=c(`p`,null,`本包实现，不依赖 lodash。返回函数携带 cancel 与 flush，必须跟随持有它的组件或服务清理。`,-1)]),_:1})]),_:1})]),_:1})]),c(`section`,H,[d(p,{title:`运行全部数学、ID 与节流工具`,source:f(R)},{description:u(()=>[c(`p`,null,[v[10]||=i(` “运行全部纯函数”会实际调用本页 10 个数学与 ID 导出；节流面板调用第 11 个导出 `,-1),d(b,{kind:`method`,to:`#api-function-throttle`},{default:u(()=>[...v[7]||=[i(`throttle`,-1)]]),_:1}),v[11]||=i(`，并可观察 leading、trailing、 `,-1),d(b,{kind:`method`,to:`#api-method-throttled-flush`},{default:u(()=>[...v[8]||=[i(`flush`,-1)]]),_:1}),v[12]||=i(` 与 `,-1),d(b,{kind:`method`,to:`#api-method-throttled-cancel`},{default:u(()=>[...v[9]||=[i(`cancel`,-1)]]),_:1}),v[13]||=i(`。 `,-1)])]),preview:u(()=>[d(L)]),_:1},8,[`source`])]),c(`section`,U,[v[14]||=c(`h2`,{class:`doc-h2`},`数学与坐标函数`,-1),d(y,{columns:r,rows:o})]),c(`section`,W,[v[15]||=c(`h2`,{class:`doc-h2`},`ID 函数`,-1),d(y,{columns:r,rows:l})]),c(`section`,G,[v[17]||=c(`h2`,{class:`doc-h2`},`throttle`,-1),d(y,{columns:r,rows:m}),d(w,{class:`doc-prose__alert`,type:`warning`,closable:!1,"show-icon":``,title:`cancel 与 flush 的语义不同`},{default:u(()=>[...v[16]||=[i(` cancel 丢弃等待中的尾调用并重置状态；flush 立即执行等待中的最后一次调用。wait 的非有限值按 0 处理，负数也归一化为 0。 `,-1)]]),_:1})]),d(O,{"type-names":h,"runtime-names":_,description:`这里直接列出 Utils 的全部 11 个根导出函数，以及 ThrottleOptions 和 ThrottledFunction 的属性、方法、参数与返回类型；签名中的 Coordinate 可点击进入 View 模块的唯一类型定义。`})]),c(`aside`,K,[d(g,{title:`Utils`,items:t})])])}}});export{q as default};