import{At as e,B as t,Nt as n,P as r,Q as i,R as a,ct as o,fn as s,it as c,j as l,tt as u,x as d,xt as f,z as p,zt as m}from"./TypeExpression-D6csDz4V.js";import{B as h,H as g,U as _,V as v,W as y,a as b,n as x,t as S,z as C}from"./index-4uKXPGRf.js";var w={class:`example-demo`},T={class:`example-demo__control-panel control-service-demo__settings`},E={class:`control-service-demo__setting control-service-demo__setting--graticule`},D={class:`control-service-demo__setting`},O=`docs-core-control-service`,k=d(t({__name:`ControlServiceDemo`,setup(t){let d=e(null),m=n(null),h=e(!1),g=e(!0),_=e(`metric`),v=e=>{let t=!!e;h.value=t;let n=m.value?.controls;n!==void 0&&(t?n.enableGraticule({showLabels:!0,targetSize:120}):n.disableGraticule())},y=e=>{let t=!!e;g.value=t;let n=m.value?.controls;n!==void 0&&(t?n.enableScaleLine({units:_.value,bar:!0,text:!0,minWidth:120}):n.disableScaleLine())},S=()=>{g.value&&m.value?.controls.enableScaleLine({units:_.value,bar:!0,text:!0,minWidth:120})};return u(()=>{if(d.value===null)return;let e=b({id:O,target:d.value,view:{zoom:4},controls:{zoom:!0,rotate:!1,attribution:!0}});x(e,`vector`),m.value=e,e.controls.enableScaleLine({units:_.value,bar:!0,text:!0,minWidth:120})}),i(()=>{m.value?.destroy(),m.value=null}),(e,t)=>{let n=o(`el-switch`),i=o(`el-tag`),u=o(`el-option`),m=o(`el-select`);return c(),r(`div`,w,[l(`div`,T,[l(`div`,E,[t[3]||=l(`span`,{class:`control-service-demo__label`},`经纬网`,-1),p(n,{class:`control-service-demo__toggle`,modelValue:h.value,"onUpdate:modelValue":t[0]||=e=>h.value=e,"active-text":`显示`,"inactive-text":`隐藏`,onChange:v},null,8,[`modelValue`]),p(i,{class:`control-service-demo__status`,type:h.value?`success`:`info`,effect:`plain`},{default:f(()=>[a(s(h.value?`graticule 已创建`:`graticule 未启用`),1)]),_:1},8,[`type`])]),l(`div`,D,[t[4]||=l(`span`,{class:`control-service-demo__label`},`比例尺`,-1),p(n,{class:`control-service-demo__toggle`,modelValue:g.value,"onUpdate:modelValue":t[1]||=e=>g.value=e,"active-text":`显示`,"inactive-text":`隐藏`,onChange:y},null,8,[`modelValue`]),p(m,{class:`control-service-demo__unit`,modelValue:_.value,"onUpdate:modelValue":t[2]||=e=>_.value=e,"aria-label":`比例尺单位`,disabled:!g.value,onChange:S},{default:f(()=>[p(u,{label:`公制 metric`,value:`metric`}),p(u,{label:`英制 imperial`,value:`imperial`})]),_:1},8,[`modelValue`,`disabled`]),p(i,{class:`control-service-demo__status`,type:g.value?`success`:`info`,effect:`plain`},{default:f(()=>[a(s(g.value?`scaleLine 已创建`:`scaleLine 未启用`),1)]),_:1},8,[`type`])])]),l(`div`,{ref_key:`mapTarget`,ref:d,class:`example-stage`},null,512)])}}}),[[`__scopeId`,`data-v-8d9217e1`]]),A=`<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';

const EARTH_ID = 'docs-core-control-service';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const graticuleEnabled = ref(false);
const scaleLineEnabled = ref(true);
const scaleUnits = ref<'metric' | 'imperial'>('metric');

// #region runtime-controls
const changeGraticule = (value: string | number | boolean) => {
  const enabled = Boolean(value);
  graticuleEnabled.value = enabled;
  const controls = earthRef.value?.controls;
  if (controls === undefined) return;

  if (enabled) controls.enableGraticule({ showLabels: true, targetSize: 120 });
  else controls.disableGraticule();
};

const changeScaleLine = (value: string | number | boolean) => {
  const enabled = Boolean(value);
  scaleLineEnabled.value = enabled;
  const controls = earthRef.value?.controls;
  if (controls === undefined) return;

  if (enabled) controls.enableScaleLine({ units: scaleUnits.value, bar: true, text: true, minWidth: 120 });
  else controls.disableScaleLine();
};

const changeScaleUnits = () => {
  if (!scaleLineEnabled.value) return;
  earthRef.value?.controls.enableScaleLine({ units: scaleUnits.value, bar: true, text: true, minWidth: 120 });
};
// #endregion runtime-controls

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 4 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earthRef.value = earth;
  earth.controls.enableScaleLine({ units: scaleUnits.value, bar: true, text: true, minWidth: 120 });
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel control-service-demo__settings">
      <div class="control-service-demo__setting control-service-demo__setting--graticule">
        <span class="control-service-demo__label">经纬网</span>
        <el-switch class="control-service-demo__toggle" v-model="graticuleEnabled" active-text="显示" inactive-text="隐藏" @change="changeGraticule" />
        <el-tag class="control-service-demo__status" :type="graticuleEnabled ? 'success' : 'info'" effect="plain">
          {{ graticuleEnabled ? 'graticule 已创建' : 'graticule 未启用' }}
        </el-tag>
      </div>

      <div class="control-service-demo__setting">
        <span class="control-service-demo__label">比例尺</span>
        <el-switch class="control-service-demo__toggle" v-model="scaleLineEnabled" active-text="显示" inactive-text="隐藏" @change="changeScaleLine" />
        <el-select class="control-service-demo__unit" v-model="scaleUnits" aria-label="比例尺单位" :disabled="!scaleLineEnabled" @change="changeScaleUnits">
          <el-option label="公制 metric" value="metric" />
          <el-option label="英制 imperial" value="imperial" />
        </el-select>
        <el-tag class="control-service-demo__status" :type="scaleLineEnabled ? 'success' : 'info'" effect="plain">
          {{ scaleLineEnabled ? 'scaleLine 已创建' : 'scaleLine 未启用' }}
        </el-tag>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>
  </div>
</template>

<style scoped>
.control-service-demo__settings {
  gap: 12px;
}

.control-service-demo__setting {
  display: grid;
  grid-template-columns: 56px max-content minmax(150px, 1fr) max-content;
  align-items: center;
  gap: 10px 14px;
  color: var(--el-text-color-primary);
  font-size: 14px;
}

.control-service-demo__label,
.control-service-demo__toggle,
.control-service-demo__unit,
.control-service-demo__status {
  grid-row: 1;
}

.control-service-demo__label {
  grid-column: 1;
  font-weight: 600;
}

.control-service-demo__toggle {
  grid-column: 2;
  justify-self: start;
}

.control-service-demo__unit {
  grid-column: 3;
  width: min(180px, 100%);
  max-width: 100%;
}

.control-service-demo__status {
  grid-column: 4;
  justify-self: start;
  max-width: 100%;
  height: auto;
  white-space: normal;
}

.control-service-demo__setting--graticule .control-service-demo__status {
  grid-column: 3 / 5;
}

@media (max-width: 640px) {
  .control-service-demo__setting {
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 10px 12px;
  }

  .control-service-demo__label {
    grid-column: 1;
    grid-row: 1;
  }

  .control-service-demo__toggle {
    grid-column: 2;
    grid-row: 1;
  }

  .control-service-demo__unit {
    grid-column: 2;
    grid-row: 2;
  }

  .control-service-demo__status,
  .control-service-demo__setting--graticule .control-service-demo__status {
    grid-column: 2;
    grid-row: 3;
  }

  .control-service-demo__setting--graticule .control-service-demo__status {
    grid-row: 2;
  }
}
</style>
`,j={class:`doc-page-layout`},M={class:`doc-page`},N={id:`overview`,class:`doc-prose`},P={class:`core-type-links`},F={id:`example-runtime-controls`,class:`doc-prose`},I={id:`api`,class:`doc-prose`},L={id:`option-defaults`,class:`doc-prose`},R={id:`related-types`,class:`doc-prose`},z={class:`core-type-links`},B={class:`doc-page-layout__aside`},V=`const earth = useEarth({
  target: 'map',
  controls: {
    zoom: true,
    rotate: false,
    attribution: true
  }
});`,H=t({__name:`ControlServiceView`,setup(e){let t=S(A,`runtime-controls`),n=[{id:`overview`,label:`两类控件配置`},{id:`example-runtime-controls`,label:`运行期控件`},{id:`api`,label:`ControlService API`,children:[{id:`api-properties`,label:`属性`},{id:`api-methods`,label:`方法`}]},{id:`api-complete`,label:`完整公开 API`},{id:`option-defaults`,label:`选项与默认值`},{id:`related-types`,label:`相关导出类型`}],i=[{prop:`name`,label:`属性`,width:180,presentation:`property`},{prop:`type`,label:`类型`,width:290,linkTypes:!0},{prop:`desc`,label:`说明`,width:350}],s=[{anchor:`api-property-graticule`,href:`/api/types#api-type-control-service-property-graticule`,name:`graticule`,type:`Graticule | undefined`,desc:`当前经纬网图层；Graticule 是 OpenLayers 外部类型`},{anchor:`api-property-scale-line`,href:`/api/types#api-type-control-service-property-scale-line`,name:`scaleLine`,type:`ScaleLine | undefined`,desc:`当前比例尺控件；ScaleLine 是 OpenLayers 外部类型`}],u=[{prop:`name`,label:`方法`,width:230,presentation:`method`},{prop:`params`,label:`参数`,width:280,linkTypes:!0},{prop:`returns`,label:`返回值`,width:230,linkTypes:!0},{prop:`desc`,label:`说明`,width:360}],d=[{anchor:`api-method-enable-graticule`,href:`/api/types#api-type-control-service-method-enable-graticule`,name:`enableGraticule`,params:`options?: GraticuleOptions`,returns:`Graticule`,desc:`启用经纬网；重复调用时先移除旧实例再创建`},{anchor:`api-method-disable-graticule`,href:`/api/types#api-type-control-service-method-disable-graticule`,name:`disableGraticule`,params:`—`,returns:`void`,desc:`关闭经纬网；未启用时幂等`},{anchor:`api-method-enable-scale-line`,href:`/api/types#api-type-control-service-method-enable-scale-line`,name:`enableScaleLine`,params:`options?: ScaleLineOptions`,returns:`ScaleLine`,desc:`启用比例尺；重复调用时先移除旧实例再创建`},{anchor:`api-method-disable-scale-line`,href:`/api/types#api-type-control-service-method-disable-scale-line`,name:`disableScaleLine`,params:`—`,returns:`void`,desc:`关闭比例尺；未启用时幂等`}],b=[{prop:`name`,label:`属性`,width:190,presentation:`property`},{prop:`type`,label:`类型`,width:280,linkTypes:!0},{prop:`default`,label:`默认值`,width:220},{prop:`desc`,label:`说明`,width:320}],x=[{name:`className`,type:`string`,default:`'ol-layer'`,desc:`图层容器类名`},{name:`opacity`,type:`number`,default:`1`,desc:`整体透明度`},{name:`visible`,type:`boolean`,default:`true`,desc:`初始可见状态`},{name:`extent`,type:`Extent`,default:`undefined`,desc:`OpenLayers 外部范围类型`},{name:`zIndex`,type:`number`,default:`9999（引擎）`,desc:`经纬网图层层级`},{name:`minResolution`,type:`number`,default:`0`,desc:`最小分辨率`},{name:`maxResolution`,type:`number`,default:`Infinity`,desc:`最大分辨率`},{name:`minZoom`,type:`number`,default:`-Infinity`,desc:`最小缩放级别`},{name:`maxZoom`,type:`number`,default:`Infinity`,desc:`最大缩放级别`},{name:`maxLines`,type:`number`,default:`100`,desc:`单方向最大线数`},{name:`strokeStyle`,type:`Stroke`,default:`rgba(0, 0, 0, 0.3)，宽 1（引擎）`,desc:`OpenLayers 外部描边类型`},{name:`targetSize`,type:`number`,default:`100`,desc:`目标网格像素尺寸`},{name:`showLabels`,type:`boolean`,default:`true（引擎）`,desc:`显示经纬度标签`},{name:`lonLabelFormatter`,type:`(longitude: number) => string`,default:`OpenLayers 默认`,desc:`经度标签格式化函数`},{name:`latLabelFormatter`,type:`(latitude: number) => string`,default:`OpenLayers 默认`,desc:`纬度标签格式化函数`},{name:`lonLabelPosition`,type:`number`,default:`0.985（引擎）`,desc:`经度标签相对位置`},{name:`latLabelPosition`,type:`number`,default:`0.985（引擎）`,desc:`纬度标签相对位置`},{name:`lonLabelStyle`,type:`Text`,default:`OpenLayers 默认`,desc:`经度标签的外部文字样式`},{name:`latLabelStyle`,type:`Text`,default:`OpenLayers 默认`,desc:`纬度标签的外部文字样式`},{name:`intervals`,type:`number[]`,default:`OpenLayers 默认`,desc:`候选经纬网间隔`},{name:`wrapX`,type:`boolean`,default:`true（引擎）`,desc:`跨世界副本显示`},{name:`properties`,type:`Record<string, unknown>`,default:`{}`,desc:`自定义图层属性；引擎追加 layerType`}],w=[{name:`className`,type:`string`,default:`'ol-scale-bar'`,desc:`bar 为 true 时的默认类名`},{name:`minWidth`,type:`number`,default:`100（引擎）`,desc:`比例尺最小像素宽度`},{name:`maxWidth`,type:`number`,default:`undefined`,desc:`比例尺最大像素宽度`},{name:`render`,type:`(event: MapEvent) => void`,default:`OpenLayers 默认`,desc:`自定义渲染函数；MapEvent 是外部类型`},{name:`target`,type:`string | HTMLElement`,default:`undefined`,desc:`控件挂载目标`},{name:`units`,type:`'degrees' | 'imperial' | 'nautical' | 'metric' | 'us'`,default:`'metric'`,desc:`显示单位`},{name:`bar`,type:`boolean`,default:`true（引擎）`,desc:`显示比例尺条`},{name:`steps`,type:`number`,default:`4`,desc:`比例尺条分段数`},{name:`text`,type:`boolean`,default:`true（引擎）`,desc:`显示比例文字`},{name:`dpi`,type:`number`,default:`undefined`,desc:`输出设备 DPI`}];return(e,S)=>{let T=o(`el-card`),E=o(`el-col`),D=o(`el-row`),O=o(`el-alert`),H=o(`el-descriptions-item`),U=o(`el-descriptions`),W=o(`el-collapse-item`),G=o(`el-collapse`);return c(),r(`div`,j,[l(`article`,M,[S[42]||=l(`header`,{class:`doc-hero`},[l(`span`,{class:`doc-hero__eyebrow`},`核心`),l(`h1`,null,`地图控件（Controls）`),l(`p`,null,`EarthOptions.controls 配置创建时的 OpenLayers 默认控件；earth.controls 则在运行期管理经纬网与比例尺。`)],-1),l(`section`,N,[S[6]||=l(`h2`,{class:`doc-h2`},`先区分两类控件配置`,-1),p(D,{gutter:16},{default:f(()=>[p(E,{xs:24,md:12},{default:f(()=>[p(T,{class:`core-choice-card`,shadow:`never`},{header:f(()=>[...S[0]||=[l(`strong`,null,`EarthOptions.controls`,-1)]]),default:f(()=>[S[1]||=l(`p`,null,`只在 Earth 首次创建时配置 OpenLayers 的 Zoom、Rotate 与 Attribution 默认控件。`,-1),p(_,{code:V,lang:`ts`})]),_:1})]),_:1}),p(E,{xs:24,md:12},{default:f(()=>[p(T,{class:`core-choice-card`,shadow:`never`},{header:f(()=>[...S[2]||=[l(`strong`,null,`earth.controls`,-1)]]),default:f(()=>[S[5]||=l(`p`,null,`ControlService 的运行期入口，可随时启用、替换或关闭 Graticule 与 ScaleLine。`,-1),l(`div`,P,[p(y,{kind:`method`,to:`#api-method-enable-graticule`},{default:f(()=>[...S[3]||=[a(`enableGraticule`,-1)]]),_:1}),p(y,{kind:`method`,to:`#api-method-enable-scale-line`},{default:f(()=>[...S[4]||=[a(`enableScaleLine`,-1)]]),_:1})])]),_:1})]),_:1})]),_:1})]),l(`section`,F,[p(h,{title:`经纬网与比例尺`,source:m(A),snippet:m(t)},{description:f(()=>[l(`p`,null,[S[10]||=a(` 使用 Element Plus 开关驱动 `,-1),p(y,{kind:`method`,to:`#api-method-enable-graticule`},{default:f(()=>[...S[7]||=[a(`enableGraticule`,-1)]]),_:1}),S[11]||=a(`、 `,-1),p(y,{kind:`method`,to:`#api-method-disable-graticule`},{default:f(()=>[...S[8]||=[a(`disableGraticule`,-1)]]),_:1}),S[12]||=a(`、 `,-1),p(y,{kind:`method`,to:`#api-method-enable-scale-line`},{default:f(()=>[...S[9]||=[a(`enableScaleLine`,-1)]]),_:1}),S[13]||=a(` 与对应关闭方法。 `,-1)])]),preview:f(()=>[p(k)]),_:1},8,[`source`,`snippet`])]),l(`section`,I,[S[15]||=l(`h2`,{class:`doc-h2`},`ControlService API`,-1),S[16]||=l(`h3`,{id:`api-properties`,class:`doc-h3`},`属性`,-1),p(v,{columns:i,rows:s}),S[17]||=l(`h3`,{id:`api-methods`,class:`doc-h3`},`方法`,-1),p(v,{columns:u,rows:d}),p(O,{type:`info`,closable:!1,"show-icon":``,title:`清理由 Earth 统一负责`},{default:f(()=>[...S[14]||=[a(` ControlService 没有公开 destroy()。组件卸载时调用 earth.destroy()，会一并移除已启用的经纬网和比例尺。 `,-1)]]),_:1})]),p(C,{"section-id":`api-complete`,title:`完整公开 API`,description:`完整展示 ControlService 的两个只读属性、四个运行期方法和两个公开选项别名；下方表格继续展开 OpenLayers 选项的全部字段和引擎默认值。`,"type-names":[`ControlService`,`GraticuleOptions`,`ScaleLineOptions`]}),l(`section`,L,[S[36]||=l(`h2`,{class:`doc-h2`},`选项与默认值`,-1),p(G,null,{default:f(()=>[p(W,{name:`graticule`},{title:f(()=>[...S[18]||=[l(`strong`,null,`GraticuleOptions`,-1)]]),default:f(()=>[l(`p`,null,[S[20]||=a(` 这是包根导出的 OpenLayers 选项别名；类型目录可查询它的导出身份与别名表达式： `,-1),p(y,{kind:`type`,to:`/api/types#api-type-graticule-options`},{default:f(()=>[...S[19]||=[a(`GraticuleOptions`,-1)]]),_:1}),S[21]||=a(`。 `,-1)]),p(U,{column:2,border:``},{default:f(()=>[p(H,{label:`showLabels`},{default:f(()=>[...S[22]||=[a(`true`,-1)]]),_:1}),p(H,{label:`wrapX`},{default:f(()=>[...S[23]||=[a(`true`,-1)]]),_:1}),p(H,{label:`zIndex`},{default:f(()=>[...S[24]||=[a(`9999`,-1)]]),_:1}),p(H,{label:`标签位置`},{default:f(()=>[...S[25]||=[a(`lon / lat 均为 0.985`,-1)]]),_:1}),p(H,{label:`默认描边`,span:2},{default:f(()=>[...S[26]||=[a(`rgba(0, 0, 0, 0.3)，宽度 1`,-1)]]),_:1})]),_:1}),S[27]||=l(`h3`,{class:`doc-h3`},`全部公开选项`,-1),p(v,{columns:b,rows:x})]),_:1}),p(W,{name:`scale-line`},{title:f(()=>[...S[28]||=[l(`strong`,null,`ScaleLineOptions`,-1)]]),default:f(()=>[l(`p`,null,[S[30]||=a(` 这是包根导出的 OpenLayers 选项别名；类型目录可查询它的导出身份与别名表达式： `,-1),p(y,{kind:`type`,to:`/api/types#api-type-scale-line-options`},{default:f(()=>[...S[29]||=[a(`ScaleLineOptions`,-1)]]),_:1}),S[31]||=a(`。 `,-1)]),p(U,{column:3,border:``},{default:f(()=>[p(H,{label:`bar`},{default:f(()=>[...S[32]||=[a(`true`,-1)]]),_:1}),p(H,{label:`text`},{default:f(()=>[...S[33]||=[a(`true`,-1)]]),_:1}),p(H,{label:`minWidth`},{default:f(()=>[...S[34]||=[a(`100`,-1)]]),_:1})]),_:1}),S[35]||=l(`h3`,{class:`doc-h3`},`全部公开选项`,-1),p(v,{columns:b,rows:w})]),_:1})]),_:1})]),l(`section`,R,[S[41]||=l(`h2`,{class:`doc-h2`},`相关导出类型`,-1),l(`div`,z,[p(y,{kind:`type`,to:`/api/types#api-type-control-service`},{default:f(()=>[...S[37]||=[a(`ControlService`,-1)]]),_:1}),p(y,{kind:`type`,to:`/api/types#api-type-graticule-options`},{default:f(()=>[...S[38]||=[a(`GraticuleOptions`,-1)]]),_:1}),p(y,{kind:`type`,to:`/api/types#api-type-scale-line-options`},{default:f(()=>[...S[39]||=[a(`ScaleLineOptions`,-1)]]),_:1}),p(y,{kind:`type`,to:`/api/types#api-type-earth-options-property-controls`},{default:f(()=>[...S[40]||=[a(`EarthOptions.controls`,-1)]]),_:1})])])]),l(`aside`,B,[p(g,{title:`地图控件（Controls）`,items:n})])])}}});export{H as default};