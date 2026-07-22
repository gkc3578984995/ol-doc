import{A as e,At as t,B as n,L as r,Nt as i,P as a,Q as o,R as s,ct as c,fn as l,it as u,j as d,tt as f,x as p,xt as m,z as h,zt as g}from"./TypeExpression-D6csDz4V.js";import{B as _,H as v,V as y,W as b,a as x,n as S,t as C,z as w}from"./index-4uKXPGRf.js";var T={class:`example-demo`},E={class:`example-demo__control-grid element-create-demo__fields`},D={class:`example-demo__action-row`},O={class:`example-demo__action-group`},k={class:`example-demo__action-buttons`},A={class:`example-demo__feedback element-create-demo__feedback element-create-demo__status`,"aria-live":`polite`},j=`docs-elements-create`,M=`create-demo-elements`,N=10,P=p(n({__name:`ElementCreateDemo`,setup(n){let r=[[0,0],[12e3,0],[-12e3,0],[0,11e3],[0,-11e3],[13e3,9e3],[-13e3,9e3],[13e3,-9e3],[-13e3,-9e3]],p=t(null),g=i(null),_=i(null),v=t(`point`),y=t(`巡检目标`),b=t(`#409eff`),C=t(null),w=t(0),P=e(()=>b.value??`#409eff`),F=0,I=(e,t)=>{let n=/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(e);return n===null?e:`rgba(${Number.parseInt(n[1],16)}, ${Number.parseInt(n[2],16)}, ${Number.parseInt(n[3],16)}, ${t})`},L=(e,t=0)=>({text:e,fontSize:14,fontWeight:`bold`,offsetY:t,padding:[5,8,5,8],fill:{type:`solid`,color:`#1f2937`},stroke:{color:`#ffffff`,width:3},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.88)`},backgroundStroke:{color:`rgba(255, 255, 255, 0.98)`,width:2}}),R=e=>v.value===`point`?{symbol:{type:`circle`,radius:16,fill:{type:`solid`,color:P.value},stroke:{color:`#ffffff`,width:4}},text:L(e,38)}:v.value===`polyline`?{strokes:[{color:`#ffffff`,width:10,lineCap:`round`,lineJoin:`round`},{color:P.value,width:5,lineCap:`round`,lineJoin:`round`}],text:L(e,26)}:{strokes:[{color:`#ffffff`,width:8},{color:P.value,width:4}],fill:{type:`solid`,color:I(P.value,.48)},text:L(e)},z=()=>{let e=g.value,t=_.value;if(e===null||t===null)return;F+=1;let n=r[(F-1)%r.length],i=[t[0]+n[0],t[1]+n[1]],a=y.value.trim()||`Element ${F}`,o={id:`create-demo-${F}`,module:`inspection`,layerId:M,data:{label:a,sequence:F},style:R(a)},s;s=v.value===`point`?{...o,geometry:{type:`point`,controlPoints:[i]}}:v.value===`polyline`?{...o,geometry:{type:`polyline`,controlPoints:[[i[0]-9e3,i[1]-5e3],i,[i[0]+9e3,i[1]+6e3]]}}:{...o,geometry:{type:`circle`,center:i,radius:8e3}};let c=e.elements.add(s);C.value=c.id,w.value+=1,e.view.animateFlyTo(i,{zoom:N,duration:450})};return f(()=>{if(p.value===null)return;let e=x({id:j,target:p.value,view:{zoom:N},controls:{zoom:!0,rotate:!1,attribution:!0}});S(e,`vector`).update({opacity:.5}),e.layers.add({kind:`vector`,id:M,zIndex:30,declutter:!0});let t=e.view.toProjectedCoordinates([116.4074,39.9042]);_.value=t,e.view.flyTo(t,N),g.value=e,z()}),o(()=>{g.value?.destroy(),g.value=null,_.value=null}),(e,t)=>{let n=c(`el-radio-button`),r=c(`el-radio-group`),i=c(`el-form-item`),o=c(`el-input`),f=c(`el-color-picker`),g=c(`el-button`),_=c(`el-tag`),x=c(`el-form`);return u(),a(`div`,T,[h(x,{class:`example-demo__control-panel element-create-demo__form`,"label-position":`top`},{default:m(()=>[d(`div`,E,[h(i,{label:`图形`},{default:m(()=>[h(r,{modelValue:v.value,"onUpdate:modelValue":t[0]||=e=>v.value=e},{default:m(()=>[h(n,{value:`point`},{default:m(()=>[...t[3]||=[s(`Point`,-1)]]),_:1}),h(n,{value:`polyline`},{default:m(()=>[...t[4]||=[s(`Polyline`,-1)]]),_:1}),h(n,{value:`circle`},{default:m(()=>[...t[5]||=[s(`Circle`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),_:1}),h(i,{label:`业务名称`},{default:m(()=>[h(o,{modelValue:y.value,"onUpdate:modelValue":t[1]||=e=>y.value=e,maxlength:`20`},null,8,[`modelValue`])]),_:1}),h(i,{label:`颜色`},{default:m(()=>[h(f,{modelValue:b.value,"onUpdate:modelValue":t[2]||=e=>b.value=e},null,8,[`modelValue`])]),_:1})]),d(`div`,D,[d(`div`,O,[t[7]||=d(`strong`,null,`操作`,-1),d(`div`,k,[h(g,{type:`primary`,onClick:z},{default:m(()=>[...t[6]||=[s(`调用 elements.add()`,-1)]]),_:1})])]),d(`div`,A,[t[8]||=d(`strong`,{class:`element-create-demo__feedback-label`},`当前状态`,-1),h(_,{type:`success`,effect:`plain`},{default:m(()=>[s(`当前 ID：`+l(C.value??`尚未创建`),1)]),_:1}),h(_,{effect:`plain`},{default:m(()=>[s(`已创建 `+l(w.value)+` 个`,1)]),_:1})])])]),_:1}),d(`div`,{ref_key:`mapTarget`,ref:p,class:`example-stage`},null,512)])}}}),[[`__scopeId`,`data-v-491a74ef`]]),F=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, ElementCreateInput, ShapeType, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-elements-create';
const BUSINESS_LAYER_ID = 'create-demo-elements';
const FOCUS_ZOOM = 10;
const CREATION_OFFSETS = [
  [0, 0],
  [12_000, 0],
  [-12_000, 0],
  [0, 11_000],
  [0, -11_000],
  [13_000, 9_000],
  [-13_000, 9_000],
  [13_000, -9_000],
  [-13_000, -9_000]
] as const;

interface DemoData {
  label: string;
  sequence: number;
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const originRef = shallowRef<Coordinate | null>(null);
const shape = ref<Extract<ShapeType, 'point' | 'polyline' | 'circle'>>('point');
const label = ref('巡检目标');
const color = ref<string | null>('#409eff');
const currentId = ref<string | null>(null);
const createdCount = ref(0);
const activeColor = computed(() => color.value ?? '#409eff');
let sequence = 0;

const colorWithAlpha = (value: string, alpha: number): string => {
  const match = /^#([\\da-f]{2})([\\da-f]{2})([\\da-f]{2})$/i.exec(value);
  if (match === null) return value;
  return \`rgba(\${Number.parseInt(match[1]!, 16)}, \${Number.parseInt(match[2]!, 16)}, \${Number.parseInt(match[3]!, 16)}, \${alpha})\`;
};

const createTextStyle = (text: string, offsetY = 0): NonNullable<StyleSpec['text']> => ({
  text,
  fontSize: 14,
  fontWeight: 'bold',
  offsetY,
  padding: [5, 8, 5, 8],
  fill: { type: 'solid', color: '#1f2937' },
  stroke: { color: '#ffffff', width: 3 },
  backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.88)' },
  backgroundStroke: { color: 'rgba(255, 255, 255, 0.98)', width: 2 }
});

const createStyle = (displayLabel: string): StyleSpec => {
  if (shape.value === 'point') {
    return {
      symbol: {
        type: 'circle',
        radius: 16,
        fill: { type: 'solid', color: activeColor.value },
        stroke: { color: '#ffffff', width: 4 }
      },
      text: createTextStyle(displayLabel, 38)
    };
  }
  if (shape.value === 'polyline') {
    return {
      strokes: [
        { color: '#ffffff', width: 10, lineCap: 'round', lineJoin: 'round' },
        { color: activeColor.value, width: 5, lineCap: 'round', lineJoin: 'round' }
      ],
      text: createTextStyle(displayLabel, 26)
    };
  }
  return {
    strokes: [
      { color: '#ffffff', width: 8 },
      { color: activeColor.value, width: 4 }
    ],
    fill: { type: 'solid', color: colorWithAlpha(activeColor.value, 0.48) },
    text: createTextStyle(displayLabel)
  };
};

const createElement = () => {
  const earth = earthRef.value;
  const origin = originRef.value;
  if (earth === null || origin === null) return;
  sequence += 1;
  const offset = CREATION_OFFSETS[(sequence - 1) % CREATION_OFFSETS.length]!;
  const center: Coordinate = [origin[0] + offset[0], origin[1] + offset[1]];
  const displayLabel = label.value.trim() || \`Element \${sequence}\`;
  // #region element-create
  const common = {
    id: \`create-demo-\${sequence}\`,
    module: 'inspection',
    layerId: BUSINESS_LAYER_ID,
    data: { label: displayLabel, sequence },
    style: createStyle(displayLabel)
  };

  let input: ElementCreateInput<DemoData>;
  if (shape.value === 'point') {
    input = { ...common, geometry: { type: 'point', controlPoints: [center] } };
  } else if (shape.value === 'polyline') {
    input = {
      ...common,
      geometry: {
        type: 'polyline',
        controlPoints: [[center[0] - 9_000, center[1] - 5_000], center, [center[0] + 9_000, center[1] + 6_000]]
      }
    };
  } else {
    input = { ...common, geometry: { type: 'circle', center, radius: 8_000 } };
  }

  const element = earth.elements.add(input);
  // #endregion element-create
  currentId.value = element.id;
  createdCount.value += 1;
  earth.view.animateFlyTo(center, { zoom: FOCUS_ZOOM, duration: 450 });
};

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: FOCUS_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.5 });
  earth.layers.add({ kind: 'vector', id: BUSINESS_LAYER_ID, zIndex: 30, declutter: true });
  const origin = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  originRef.value = origin;
  earth.view.flyTo(origin, FOCUS_ZOOM);
  earthRef.value = earth;
  createElement();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  originRef.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <el-form class="example-demo__control-panel element-create-demo__form" label-position="top">
      <div class="example-demo__control-grid element-create-demo__fields">
        <el-form-item label="图形">
          <el-radio-group v-model="shape">
            <el-radio-button value="point">Point</el-radio-button>
            <el-radio-button value="polyline">Polyline</el-radio-button>
            <el-radio-button value="circle">Circle</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="业务名称"><el-input v-model="label" maxlength="20" /></el-form-item>
        <el-form-item label="颜色"><el-color-picker v-model="color" /></el-form-item>
      </div>
      <div class="example-demo__action-row">
        <div class="example-demo__action-group">
          <strong>操作</strong>
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="createElement">调用 elements.add()</el-button>
          </div>
        </div>
        <div class="example-demo__feedback element-create-demo__feedback element-create-demo__status" aria-live="polite">
          <strong class="element-create-demo__feedback-label">当前状态</strong>
          <el-tag type="success" effect="plain">当前 ID：{{ currentId ?? '尚未创建' }}</el-tag>
          <el-tag effect="plain">已创建 {{ createdCount }} 个</el-tag>
        </div>
      </div>
    </el-form>

    <div ref="mapTarget" class="example-stage"></div>
  </div>
</template>

<style scoped>
.element-create-demo__fields {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 14px 16px;
}

.element-create-demo__form :deep(.el-form-item) {
  min-width: 0;
  margin: 0;
}

.element-create-demo__form :deep(.el-input) {
  width: 100%;
  max-width: 180px;
}

.element-create-demo__feedback-label {
  color: var(--doc-text);
  font-size: 12px;
}
</style>
`,I={class:`doc-page-layout`},L={class:`doc-page`},R={id:`overview`,class:`doc-prose`},z={id:`create-input`,class:`doc-prose`},B={id:`example-element-create`,class:`doc-prose`},V={id:`defaults-and-coordinates`,class:`doc-prose`},H={id:`api-actions`,class:`doc-prose`},U={class:`doc-page-layout__aside`},W=n({__name:`ElementCreateView`,setup(e){let t=C(F,`element-create`),n=[{id:`overview`,label:`创建流程`},{id:`create-input`,label:`创建参数`},{id:`example-element-create`,label:`创建业务 Element`},{id:`defaults-and-coordinates`,label:`默认值与坐标`},{id:`api-actions`,label:`创建方法`},{id:`api`,label:`完整 API`}],i=[{prop:`name`,label:`字段`,width:150,presentation:`property`},{prop:`type`,label:`类型`,width:300,linkTypes:!0},{prop:`default`,label:`默认值`,width:150},{prop:`desc`,label:`说明`,width:390}],o=[{anchor:`api-property-geometry`,name:`geometry`,type:`ShapeInput`,default:`必填`,desc:`图形判别字段与控制点；state.type 由 geometry.type 推导`},{anchor:`api-property-id`,name:`id`,type:`string`,default:`自动生成`,desc:`当前 Earth 中唯一；重复 ID 抛出 DuplicateElementIdError`},{anchor:`api-property-style`,name:`style`,type:`StyleInput`,default:`按渲染类型选择预设`,desc:`结构化样式或互斥的 nativeStyle 分支`},{anchor:`api-property-data`,name:`data`,type:`T`,default:`undefined`,desc:`调用方业务数据，泛型 T 会贯穿句柄与状态`},{anchor:`api-property-module`,name:`module`,type:`string`,default:`undefined`,desc:`业务分组，不决定图形或渲染图层`},{anchor:`api-property-layer-id`,name:`layerId`,type:`string`,default:`default`,desc:`必须指向当前 Earth 的矢量图层`},{anchor:`api-property-visible`,name:`visible`,type:`boolean`,default:`true`,desc:`初始业务可见状态`}],l=[{prop:`name`,label:`方法`,width:150,presentation:`method`},{prop:`params`,label:`参数`,width:330,linkTypes:!0},{prop:`returns`,label:`返回值`,width:190,linkTypes:!0},{prop:`desc`,label:`说明`,width:390}],f=[{anchor:`api-method-add`,href:`/api/types#api-type-element-service-method-add`,name:`add`,params:`input: ElementCreateInput<T>`,returns:`Element<T>`,desc:`校验完整输入并原子创建 Element；失败时不留下状态或渲染对象`}],p=[`ElementCreateInput`,`ElementService`],x={ElementService:[`add`]};return(e,S)=>{let C=c(`el-step`),T=c(`el-steps`),E=c(`el-alert`);return u(),a(`div`,I,[d(`article`,L,[S[17]||=d(`header`,{class:`doc-hero`},[d(`span`,{class:`doc-hero__eyebrow`},`地图元素`),d(`h1`,null,`创建`),d(`p`,null,`使用 earth.elements.add() 一次提交几何、样式、业务数据和分组。创建成功后返回稳定句柄，失败则不会产生部分状态。`)],-1),d(`section`,R,[S[0]||=d(`h2`,{class:`doc-h2`},`创建流程`,-1),h(T,{active:4,"finish-status":`success`,"align-center":``},{default:m(()=>[h(C,{title:`准备坐标`,description:`转换到当前 View 投影`}),h(C,{title:`声明 geometry`,description:`type + 控制点或圆心半径`}),h(C,{title:`附加业务信息`,description:`data、module、layerId`}),h(C,{title:`调用 add`,description:`获得 Element 句柄`})]),_:1})]),d(`section`,z,[S[7]||=d(`h2`,{class:`doc-h2`},`创建参数`,-1),d(`p`,null,[h(b,{kind:`type`,to:`/api/types#api-type-element-create-input`},{default:m(()=>[...S[1]||=[s(`ElementCreateInput<T>`,-1)]]),_:1}),S[2]||=s(` 不接受顶层 `,-1),S[3]||=d(`code`,null,`type`,-1),S[4]||=s(`；图形类型只由 `,-1),S[5]||=d(`code`,null,`geometry.type`,-1),S[6]||=s(` 决定。 `,-1)]),h(y,{columns:i,rows:o})]),d(`section`,B,[h(_,{title:`创建业务 Element`,source:g(F),snippet:g(t),"source-lang":`vue`,"snippet-lang":`typescript`},{description:m(()=>[d(`p`,null,[S[10]||=s(` 示例使用 Element Plus 选择 Point、Polyline 或 Circle，构造 `,-1),h(b,{kind:`type`,to:`/api/types#api-type-element-create-input`},{default:m(()=>[...S[8]||=[s(`ElementCreateInput`,-1)]]),_:1}),S[11]||=s(` 后调用 `,-1),h(b,{kind:`method`,to:`#api-method-add`},{default:m(()=>[...S[9]||=[s(`elements.add`,-1)]]),_:1}),S[12]||=s(`。业务数据保留具体泛型。 `,-1)])]),preview:m(()=>[h(P)]),_:1},8,[`source`,`snippet`])]),d(`section`,V,[S[14]||=d(`h2`,{class:`doc-h2`},`默认值与坐标`,-1),h(E,{type:`info`,closable:!1,"show-icon":``,title:`Element 坐标使用当前 View 投影`},{default:m(()=>[...S[13]||=[s(` 经纬度业务输入先交给 earth.view.toProjectedCoordinates()；读取持久状态后，可在保存前调用 toGeographicCoordinates() 转回 EPSG:4326。 `,-1)]]),_:1}),S[15]||=r(`<ul><li>扁平 controlPoints 按 XY 两两分组；三维坐标必须使用嵌套数组。</li><li>Circle 使用 <code>center</code> 和米制 <code>radius</code>；点符号的 <code>style.symbol.radius</code> 才是 CSS 像素。</li><li>省略 layerId 时使用 <code>default</code> 矢量图层；若它已被清理，首次隐式创建会按需重建。</li><li>省略 style 时按最终渲染类别选择 point、line 或 polygon 默认预设。</li></ul>`,1)]),d(`section`,H,[S[16]||=d(`h2`,{class:`doc-h2`},`创建方法`,-1),h(y,{columns:l,rows:f})]),h(w,{"type-names":p,"member-names":x,description:`完整列出 ElementCreateInput 的全部字段和 ElementService.add 的重载、参数与返回值；字段中引用的公开类型可以继续点击查询。`})]),d(`aside`,U,[h(v,{title:`创建`,items:n})])])}}});export{W as default};