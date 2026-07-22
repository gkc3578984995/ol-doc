import{A as e,At as t,B as n,Nt as r,P as i,Q as a,R as o,ct as s,fn as c,it as l,j as u,tt as d,x as f,xt as p,z as m,zt as h}from"./TypeExpression-D6csDz4V.js";import{A as g,B as _,F as v,H as y,I as b,L as x,M as S,N as C,P as w,U as T,V as E,W as D,a as O,j as k,k as A,n as j,t as M,z as N}from"./index-4uKXPGRf.js";var P={class:`example-demo`},F={class:`example-demo__control-panel`},I={class:`layer-kinds-demo__source`},L={class:`example-demo__action-group`},R={class:`example-demo__action-buttons example-demo__actions`},z=`docs-core-layer-kinds`,B=`docs-layer-kind-elements`,V=f(n({__name:`LayerKindsDemo`,setup(e,{expose:n}){let f=t(null),h=r(null),_=r(null),y=r(null),T=t([]),E=t(`vector`),D=t(`等待创建 external 原生图层`),M=[{label:`矢量底图`,value:`vector`},{label:`影像底图`,value:`satellite`}],N=()=>{let e=h.value;e!==null&&(T.value=e.layers.query().map(e=>({id:e.id,kind:e.kind,source:e.kind===`native`?`OpenLayers VectorLayer`:e.kind===`tile`?`部署期底图配置`:`Earth Element 容器`,ownership:e.kind===`native`?`external`:`earth`})))},V=()=>{let e=h.value;if(e===null)return;e.elements.remove({module:B}),e.layers.clear(),j(e,E.value);let t=e.layers.add({kind:`vector`,id:`mixed-elements`,wrapX:!0,declutter:!0,zIndex:10}),n=e.view.toProjectedCoordinates([116.05,39.9]);e.elements.add({id:`layer-kind-earth-circle`,module:B,layerId:t.id,geometry:{type:`circle`,center:n,radius:28e3},style:{fill:{type:`pattern`,pattern:`diagonal`,color:`#2563eb`,backgroundColor:`rgba(219,234,254,0.72)`,size:16,lineWidth:3},strokes:[{color:`#1d4ed8`,width:4}],text:{text:`Earth vector`,fontSize:14,fontWeight:`bold`,fill:{type:`solid`,color:`#1e3a8a`},stroke:{color:`#ffffff`,width:3}}}});let r=y.value??new g({source:new A});y.value=r;let i=r.getSource();if(i!==null){i.clear();let t=new k(new x([...e.view.toProjectedCoordinates([116.75,39.9])]));t.setStyle(new C({image:new b({radius:18,fill:new v({color:`#f97316`}),stroke:new w({color:`#ffffff`,width:4})}),text:new S({text:`external native`,offsetY:34,font:`bold 14px sans-serif`,fill:new v({color:`#9a3412`}),stroke:new w({color:`#ffffff`,width:3})})})),i.addFeature(t)}_.value=e.layers.add({kind:`native`,id:`external-native-layer`,layer:r,ownership:`external`}),D.value=`external VectorLayer 已挂载，所有权仍属于调用方`,N()},H=()=>{_.value?.remove(),_.value=null,D.value=y.value?.getSource()instanceof A?`Earth 已解绑；调用方仍可读取 VectorLayer 与 VectorSource`:`外部资源不可用`,N()},U=()=>{let e=h.value;e?.elements.remove({module:B}),e?.layers.clear(),_.value=null,D.value=y.value?.getSource()instanceof A?`全部 Layer 句柄已清理；external 原生资源仍由调用方持有`:`外部资源不可用`,N()},W=e=>{e!==`vector`&&e!==`satellite`||(E.value=e,V())},G=()=>{let e=h.value;e!==null&&e.view.animateFlyTo(e.view.toProjectedCoordinates([116.4074,39.9042]),{zoom:5,duration:450})};return n({reset:()=>{E.value=`vector`,V(),G()},focus:G}),d(()=>{if(f.value===null)return;let e=O({id:z,target:f.value,view:{zoom:5},controls:{zoom:!0,rotate:!1,attribution:!0}});h.value=e,V(),G()}),a(()=>{h.value?.destroy(),h.value=null,_.value=null,y.value=null}),(e,t)=>{let n=s(`el-segmented`),r=s(`el-tag`),a=s(`el-button`),d=s(`el-table-column`),h=s(`el-table`),g=s(`el-alert`);return l(),i(`div`,P,[u(`div`,F,[u(`div`,I,[t[1]||=u(`span`,null,`部署期底图配置`,-1),m(n,{modelValue:E.value,"onUpdate:modelValue":t[0]||=e=>E.value=e,options:M,"aria-label":`选择底图配置`,onChange:W},null,8,[`modelValue`]),m(r,{effect:`plain`},{default:p(()=>[o(c(E.value),1)]),_:1})]),u(`div`,L,[u(`div`,R,[m(a,{type:`primary`,onClick:V},{default:p(()=>[...t[2]||=[o(`创建三类图层`,-1)]]),_:1}),m(a,{disabled:_.value===null,onClick:H},{default:p(()=>[...t[3]||=[o(`用 Layer.remove() 移除 native`,-1)]]),_:1},8,[`disabled`]),m(a,{type:`danger`,plain:``,disabled:T.value.length===0,onClick:U},{default:p(()=>[...t[4]||=[o(`清空全部图层`,-1)]]),_:1},8,[`disabled`])])])]),u(`div`,{ref_key:`mapTarget`,ref:f,class:`example-stage`},null,512),m(h,{class:`layer-kinds-demo__table`,data:T.value,border:``,size:`small`,"empty-text":`当前没有图层`},{default:p(()=>[m(d,{prop:`id`,label:`图层 ID`,"min-width":`180`}),m(d,{prop:`kind`,label:`kind`,width:`100`}),m(d,{prop:`source`,label:`来源`,"min-width":`180`}),m(d,{prop:`ownership`,label:`资源所有权`,"min-width":`140`})]),_:1},8,[`data`]),m(g,{class:`example-demo__alert layer-kinds-demo__alert`,type:`info`,closable:!1,"show-icon":``},{title:p(()=>[...t[5]||=[o(`external 只解绑，不替调用方销毁原生资源`,-1)]]),default:p(()=>[o(` `+c(D.value)+`。地图中的蓝色纹理圆来自 Earth vector，橙色点来自 external native。 `,1)]),_:1})])}}}),[[`__scopeId`,`data-v-5e0a2fd2`]]),H=`<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import CircleStyle from 'ol/style/Circle.js';
import Fill from 'ol/style/Fill.js';
import Stroke from 'ol/style/Stroke.js';
import Style from 'ol/style/Style.js';
import TextStyle from 'ol/style/Text.js';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth, Layer, LayerKind } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';
import type { MapSourceName } from '../config/mapSources';

const EARTH_ID = 'docs-core-layer-kinds';
const ELEMENT_MODULE = 'docs-layer-kind-elements';

interface LayerRow {
  id: string;
  kind: LayerKind;
  source: '部署期底图配置' | 'Earth Element 容器' | 'OpenLayers VectorLayer';
  ownership: 'earth' | 'external';
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const nativeLayer = shallowRef<Layer | null>(null);
const externalOlLayer = shallowRef<VectorLayer<VectorSource> | null>(null);
const rows = ref<LayerRow[]>([]);
const selectedBasemap = ref<MapSourceName>('vector');
const externalResourceState = ref('等待创建 external 原生图层');
const basemapOptions = [
  { label: '矢量底图', value: 'vector' },
  { label: '影像底图', value: 'satellite' }
] as const;

const refreshRows = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  rows.value = earth.layers.query().map((layer) => ({
    id: layer.id,
    kind: layer.kind,
    source: layer.kind === 'native' ? 'OpenLayers VectorLayer' : layer.kind === 'tile' ? '部署期底图配置' : 'Earth Element 容器',
    ownership: layer.kind === 'native' ? 'external' : 'earth'
  }));
};

// #region layer-kinds
const createLayerKinds = () => {
  const earth = earthRef.value;
  if (earth === null) return;

  earth.elements.remove({ module: ELEMENT_MODULE });
  earth.layers.clear();
  createConfiguredLayer(earth, selectedBasemap.value);
  const engineLayer = earth.layers.add({ kind: 'vector', id: 'mixed-elements', wrapX: true, declutter: true, zIndex: 10 });
  const engineCenter = earth.view.toProjectedCoordinates([116.05, 39.9]);
  earth.elements.add({
    id: 'layer-kind-earth-circle',
    module: ELEMENT_MODULE,
    layerId: engineLayer.id,
    geometry: { type: 'circle', center: engineCenter, radius: 28_000 },
    style: {
      fill: { type: 'pattern', pattern: 'diagonal', color: '#2563eb', backgroundColor: 'rgba(219,234,254,0.72)', size: 16, lineWidth: 3 },
      strokes: [{ color: '#1d4ed8', width: 4 }],
      text: {
        text: 'Earth vector',
        fontSize: 14,
        fontWeight: 'bold',
        fill: { type: 'solid', color: '#1e3a8a' },
        stroke: { color: '#ffffff', width: 3 }
      }
    }
  });

  const externalLayer = externalOlLayer.value ?? new VectorLayer({ source: new VectorSource() });
  externalOlLayer.value = externalLayer;
  const externalSource = externalLayer.getSource();
  if (externalSource !== null) {
    externalSource.clear();
    const marker = new Feature(new Point([...earth.view.toProjectedCoordinates([116.75, 39.9])]));
    marker.setStyle(
      new Style({
        image: new CircleStyle({ radius: 18, fill: new Fill({ color: '#f97316' }), stroke: new Stroke({ color: '#ffffff', width: 4 }) }),
        text: new TextStyle({
          text: 'external native',
          offsetY: 34,
          font: 'bold 14px sans-serif',
          fill: new Fill({ color: '#9a3412' }),
          stroke: new Stroke({ color: '#ffffff', width: 3 })
        })
      })
    );
    externalSource.addFeature(marker);
  }
  nativeLayer.value = earth.layers.add({
    kind: 'native',
    id: 'external-native-layer',
    layer: externalLayer,
    ownership: 'external'
  });
  externalResourceState.value = 'external VectorLayer 已挂载，所有权仍属于调用方';
  refreshRows();
};

const removeNativeByHandle = () => {
  nativeLayer.value?.remove();
  nativeLayer.value = null;
  externalResourceState.value =
    externalOlLayer.value?.getSource() instanceof VectorSource ? 'Earth 已解绑；调用方仍可读取 VectorLayer 与 VectorSource' : '外部资源不可用';
  refreshRows();
};

const clearAllLayers = () => {
  const earth = earthRef.value;
  earth?.elements.remove({ module: ELEMENT_MODULE });
  earth?.layers.clear();
  nativeLayer.value = null;
  externalResourceState.value =
    externalOlLayer.value?.getSource() instanceof VectorSource ? '全部 Layer 句柄已清理；external 原生资源仍由调用方持有' : '外部资源不可用';
  refreshRows();
};
// #endregion layer-kinds

const switchBasemap = (value: string | number | boolean | undefined) => {
  if (value !== 'vector' && value !== 'satellite') return;
  selectedBasemap.value = value;
  createLayerKinds();
};

const focus = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  earth.view.animateFlyTo(earth.view.toProjectedCoordinates([116.4074, 39.9042]), { zoom: 5, duration: 450 });
};

const reset = () => {
  selectedBasemap.value = 'vector';
  createLayerKinds();
  focus();
};

defineExpose({ reset, focus });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 5 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  earthRef.value = earth;
  createLayerKinds();
  focus();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  nativeLayer.value = null;
  externalOlLayer.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel">
      <div class="layer-kinds-demo__source">
        <span>部署期底图配置</span>
        <el-segmented v-model="selectedBasemap" :options="basemapOptions" aria-label="选择底图配置" @change="switchBasemap" />
        <el-tag effect="plain">{{ selectedBasemap }}</el-tag>
      </div>

      <div class="example-demo__action-group">
        <div class="example-demo__action-buttons example-demo__actions">
          <el-button type="primary" @click="createLayerKinds">创建三类图层</el-button>
          <el-button :disabled="nativeLayer === null" @click="removeNativeByHandle">用 Layer.remove() 移除 native</el-button>
          <el-button type="danger" plain :disabled="rows.length === 0" @click="clearAllLayers">清空全部图层</el-button>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-table class="layer-kinds-demo__table" :data="rows" border size="small" empty-text="当前没有图层">
      <el-table-column prop="id" label="图层 ID" min-width="180" />
      <el-table-column prop="kind" label="kind" width="100" />
      <el-table-column prop="source" label="来源" min-width="180" />
      <el-table-column prop="ownership" label="资源所有权" min-width="140" />
    </el-table>

    <el-alert class="example-demo__alert layer-kinds-demo__alert" type="info" :closable="false" show-icon>
      <template #title>external 只解绑，不替调用方销毁原生资源</template>
      {{ externalResourceState }}。地图中的蓝色纹理圆来自 Earth vector，橙色点来自 external native。
    </el-alert>
  </div>
</template>

<style scoped>
.layer-kinds-demo__table {
  margin-top: 16px;
}

.layer-kinds-demo__source {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  color: var(--doc-muted);
  font-size: 14px;
}

.layer-kinds-demo__source :deep(.el-segmented) {
  max-width: 100%;
}

.layer-kinds-demo__alert {
  margin-top: 16px;
}

@media (max-width: 640px) {
  .layer-kinds-demo__source :deep(.el-segmented) {
    flex: 1 1 100%;
    width: 100%;
  }
}
</style>
`,U={class:`example-demo`},W={class:`example-demo__control-panel`},G={class:`example-demo__action-group`},K={class:`example-demo__action-buttons example-demo__actions`},q={class:`layer-service-demo__opacity`},J={class:`layer-service-demo__result`},Y=`docs-core-layer-service`,X=`business-layer`,Z=`business-marker`,Q=f(n({__name:`LayerServiceDemo`,setup(n,{expose:f}){let h=t(null),g=r(null),_=r(null),v=t(.75),y=t([]),b=t(`全部图层`),x=t(`等待操作`),S=e(()=>y.value.find(({id:e})=>e===X)),C=e=>{let t=g.value;t!==null&&(y.value=t.layers.query(e).map(e=>({id:e.id,kind:e.kind,visible:e.visible,opacity:e.opacity,zIndex:e.zIndex})),b.value=e===void 0?`全部图层`:`${e} 图层`)},w=()=>{let e=g.value;if(e===null||e.layers.get(X)!==void 0)return;let t=e.layers.add({kind:`vector`,id:X,opacity:v.value,zIndex:20}),n=e.view.toProjectedCoordinates([116.4074,39.9042]);e.elements.add({id:Z,layerId:t.id,geometry:{type:`point`,controlPoints:[n]},style:{symbol:{type:`circle`,radius:10,fill:{type:`solid`,color:`#409eff`},stroke:{color:`#ffffff`,width:3}}}}),_.value=t,x.value=`已新增 ${t.id}`,C()},T=e=>{let t=Array.isArray(e)?e[0]??v.value:e;v.value=t,_.value?.update({opacity:t}),x.value=`已通过 update() 设置透明度 ${t.toFixed(2)}`,C()},E=()=>{_.value?.show(),x.value=`已调用 show()`,C()},D=()=>{_.value?.hide(),x.value=`已调用 hide()`,C()},k=()=>{let e=g.value;if(e===null||_.value===null)return;e.elements.remove({layerId:X});let t=e.layers.remove(X);_.value=null,x.value=t?`已通过 layers.remove() 移除业务图层`:`未找到业务图层`,C()},A=()=>{let e=g.value;e!==null&&e.view.animateFlyTo(e.view.toProjectedCoordinates([116.4074,39.9042]),{zoom:5,duration:450})};return f({reset:()=>{v.value=.75,_.value===null?w():(_.value.update({visible:!0,opacity:v.value}),x.value=`已恢复业务图层、显隐与透明度`,C()),A()},focus:A}),d(()=>{if(h.value===null)return;let e=O({id:Y,target:h.value,view:{zoom:5},controls:{zoom:!0,rotate:!1,attribution:!0}});j(e,`vector`),g.value=e,w(),A()}),a(()=>{g.value?.destroy(),g.value=null,_.value=null}),(e,t)=>{let n=s(`el-alert`),r=s(`el-button`),a=s(`el-slider`),d=s(`el-tag`),f=s(`el-table-column`),g=s(`el-table`);return l(),i(`div`,U,[m(n,{class:`example-demo__alert`,title:`Earth 创建时会自动准备 id 为 default 的矢量图层；示例另建 business-layer，避免把业务数据与默认容器混在一起。`,type:`info`,closable:!1,"show-icon":``}),u(`div`,W,[u(`div`,G,[u(`div`,K,[m(r,{type:`primary`,disabled:_.value!==null,onClick:w},{default:p(()=>[...t[3]||=[o(`新增业务图层`,-1)]]),_:1},8,[`disabled`]),m(r,{disabled:_.value===null||S.value?.visible===!0,onClick:E},{default:p(()=>[...t[4]||=[o(`显示`,-1)]]),_:1},8,[`disabled`]),m(r,{disabled:_.value===null||S.value?.visible===!1,onClick:D},{default:p(()=>[...t[5]||=[o(`隐藏`,-1)]]),_:1},8,[`disabled`]),m(r,{type:`danger`,plain:``,disabled:_.value===null,onClick:k},{default:p(()=>[...t[6]||=[o(`移除业务图层`,-1)]]),_:1},8,[`disabled`]),m(r,{onClick:t[0]||=e=>C()},{default:p(()=>[...t[7]||=[o(`查询全部`,-1)]]),_:1}),m(r,{onClick:t[1]||=e=>C(`vector`)},{default:p(()=>[...t[8]||=[o(`只查 vector`,-1)]]),_:1})])]),u(`div`,q,[t[9]||=u(`span`,null,`业务图层透明度`,-1),m(a,{modelValue:v.value,"onUpdate:modelValue":t[2]||=e=>v.value=e,min:0,max:1,step:.05,disabled:_.value===null,onChange:T},null,8,[`modelValue`,`disabled`]),m(d,{effect:`plain`},{default:p(()=>[o(c(v.value.toFixed(2)),1)]),_:1})])]),u(`div`,{ref_key:`mapTarget`,ref:h,class:`example-stage`},null,512),u(`div`,J,[u(`span`,null,c(x.value),1),m(d,{type:`info`,effect:`plain`},{default:p(()=>[o(`当前查询：`+c(b.value),1)]),_:1})]),m(g,{data:y.value,border:``,size:`small`,"empty-text":`没有匹配的图层`},{default:p(()=>[m(f,{prop:`id`,label:`ID`,"min-width":`150`}),m(f,{prop:`kind`,label:`类型`,width:`90`}),m(f,{label:`可见`,width:`80`},{default:p(e=>[m(d,{type:e.row.visible?`success`:`info`,size:`small`},{default:p(()=>[o(c(e.row.visible?`是`:`否`),1)]),_:2},1032,[`type`])]),_:1}),m(f,{prop:`opacity`,label:`透明度`,width:`90`}),m(f,{label:`zIndex`,width:`90`},{default:p(e=>[o(c(e.row.zIndex??`—`),1)]),_:1})]),_:1},8,[`data`])])}}}),[[`__scopeId`,`data-v-d9ddf8dd`]]),$=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth, Layer, LayerKind } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';

const EARTH_ID = 'docs-core-layer-service';
const BUSINESS_LAYER_ID = 'business-layer';
const BUSINESS_ELEMENT_ID = 'business-marker';

interface LayerRow {
  id: string;
  kind: LayerKind;
  visible: boolean;
  opacity: number;
  zIndex: number | undefined;
}

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const businessLayer = shallowRef<Layer | null>(null);
const opacity = ref(0.75);
const rows = ref<LayerRow[]>([]);
const queryLabel = ref('全部图层');
const operationResult = ref('等待操作');

const businessState = computed(() => rows.value.find(({ id }) => id === BUSINESS_LAYER_ID));

// #region layer-lifecycle
const refreshLayers = (kind?: LayerKind) => {
  const earth = earthRef.value;
  if (earth === null) return;

  rows.value = earth.layers.query(kind).map((layer) => ({
    id: layer.id,
    kind: layer.kind,
    visible: layer.visible,
    opacity: layer.opacity,
    zIndex: layer.zIndex
  }));
  queryLabel.value = kind === undefined ? '全部图层' : \`\${kind} 图层\`;
};

const addBusinessLayer = () => {
  const earth = earthRef.value;
  if (earth === null || earth.layers.get(BUSINESS_LAYER_ID) !== undefined) return;

  const layer = earth.layers.add({
    kind: 'vector',
    id: BUSINESS_LAYER_ID,
    opacity: opacity.value,
    zIndex: 20
  });
  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earth.elements.add({
    id: BUSINESS_ELEMENT_ID,
    layerId: layer.id,
    geometry: { type: 'point', controlPoints: [center] },
    style: {
      symbol: {
        type: 'circle',
        radius: 10,
        fill: { type: 'solid', color: '#409eff' },
        stroke: { color: '#ffffff', width: 3 }
      }
    }
  });

  businessLayer.value = layer;
  operationResult.value = \`已新增 \${layer.id}\`;
  refreshLayers();
};
// #endregion layer-lifecycle

const updateOpacity = (value: number | number[]) => {
  const nextOpacity = Array.isArray(value) ? (value[0] ?? opacity.value) : value;
  opacity.value = nextOpacity;
  businessLayer.value?.update({ opacity: nextOpacity });
  operationResult.value = \`已通过 update() 设置透明度 \${nextOpacity.toFixed(2)}\`;
  refreshLayers();
};

const showBusinessLayer = () => {
  businessLayer.value?.show();
  operationResult.value = '已调用 show()';
  refreshLayers();
};

const hideBusinessLayer = () => {
  businessLayer.value?.hide();
  operationResult.value = '已调用 hide()';
  refreshLayers();
};

const removeBusinessLayer = () => {
  const earth = earthRef.value;
  if (earth === null || businessLayer.value === null) return;

  earth.elements.remove({ layerId: BUSINESS_LAYER_ID });
  const removed = earth.layers.remove(BUSINESS_LAYER_ID);
  businessLayer.value = null;
  operationResult.value = removed ? '已通过 layers.remove() 移除业务图层' : '未找到业务图层';
  refreshLayers();
};

const focus = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  earth.view.animateFlyTo(earth.view.toProjectedCoordinates([116.4074, 39.9042]), { zoom: 5, duration: 450 });
};

const reset = () => {
  opacity.value = 0.75;
  if (businessLayer.value === null) {
    addBusinessLayer();
  } else {
    businessLayer.value.update({ visible: true, opacity: opacity.value });
    operationResult.value = '已恢复业务图层、显隐与透明度';
    refreshLayers();
  }
  focus();
};

defineExpose({ reset, focus });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 5 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earthRef.value = earth;
  addBusinessLayer();
  focus();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  businessLayer.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <el-alert
      class="example-demo__alert"
      title="Earth 创建时会自动准备 id 为 default 的矢量图层；示例另建 business-layer，避免把业务数据与默认容器混在一起。"
      type="info"
      :closable="false"
      show-icon
    />

    <div class="example-demo__control-panel">
      <div class="example-demo__action-group">
        <div class="example-demo__action-buttons example-demo__actions">
          <el-button type="primary" :disabled="businessLayer !== null" @click="addBusinessLayer">新增业务图层</el-button>
          <el-button :disabled="businessLayer === null || businessState?.visible === true" @click="showBusinessLayer">显示</el-button>
          <el-button :disabled="businessLayer === null || businessState?.visible === false" @click="hideBusinessLayer">隐藏</el-button>
          <el-button type="danger" plain :disabled="businessLayer === null" @click="removeBusinessLayer">移除业务图层</el-button>
          <el-button @click="refreshLayers()">查询全部</el-button>
          <el-button @click="refreshLayers('vector')">只查 vector</el-button>
        </div>
      </div>

      <div class="layer-service-demo__opacity">
        <span>业务图层透明度</span>
        <el-slider v-model="opacity" :min="0" :max="1" :step="0.05" :disabled="businessLayer === null" @change="updateOpacity" />
        <el-tag effect="plain">{{ opacity.toFixed(2) }}</el-tag>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <div class="layer-service-demo__result">
      <span>{{ operationResult }}</span>
      <el-tag type="info" effect="plain">当前查询：{{ queryLabel }}</el-tag>
    </div>
    <el-table :data="rows" border size="small" empty-text="没有匹配的图层">
      <el-table-column prop="id" label="ID" min-width="150" />
      <el-table-column prop="kind" label="类型" width="90" />
      <el-table-column label="可见" width="80">
        <template #default="scope">
          <el-tag :type="scope.row.visible ? 'success' : 'info'" size="small">{{ scope.row.visible ? '是' : '否' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="opacity" label="透明度" width="90" />
      <el-table-column label="zIndex" width="90">
        <template #default="scope">{{ scope.row.zIndex ?? '—' }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.layer-service-demo__opacity {
  display: grid;
  grid-template-columns: auto minmax(160px, 320px) auto;
  align-items: center;
  gap: 14px;
  color: var(--el-text-color-regular);
  font-size: 14px;
}

.layer-service-demo__result {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 14px 0 10px;
  color: var(--el-text-color-regular);
  font-size: 14px;
}

@media (max-width: 640px) {
  .layer-service-demo__opacity {
    grid-template-columns: 1fr auto;
  }

  .layer-service-demo__opacity :deep(.el-slider) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}
</style>
`,ee={class:`doc-page-layout`},te={class:`doc-page`},ne={id:`overview`,class:`doc-prose`},re={id:`layer-specs`,class:`doc-prose`},ie={id:`example-layer-management`,class:`doc-prose`},ae={id:`example-layer-kinds`,class:`doc-prose`},oe={id:`api`,class:`doc-prose`},se={id:`ownership`,class:`doc-prose`},ce={id:`related-types`,class:`doc-prose`},le={class:`core-type-links`},ue={class:`doc-page-layout__aside`},de=`const business = earth.layers.add({
  kind: 'vector',
  id: 'business',
  visible: true,
  opacity: 1,
  zIndex: 10,
  wrapX: true,
  declutter: false
});`,fe=`const base = earth.layers.add({
  kind: 'tile',
  preset: 'osm'
});

const xyz = earth.layers.add({
  kind: 'tile',
  preset: 'xyz',
  url: 'https://example.com/{z}/{x}/{y}.png',
  attributions: '© 数据提供方'
});`,pe=`import TileLayer from 'ol/layer/Tile.js';

const native = earth.layers.add({
  kind: 'native',
  layer: new TileLayer(),
  ownership: 'external'
});`,me=n({__name:`LayerServiceView`,setup(e){let n=M($,`layer-lifecycle`),r=M(H,`layer-kinds`),a=t(null),c=t(null),d=()=>a.value?.reset(),f=()=>a.value?.focus(),g=()=>c.value?.reset(),v=()=>c.value?.focus(),b=t(`vector`),x=[{id:`overview`,label:`图层模型`},{id:`layer-specs`,label:`创建配置`},{id:`example-layer-management`,label:`图层管理`},{id:`example-layer-kinds`,label:`三类图层与所有权`},{id:`api`,label:`Layers API`,children:[{id:`api-layer-service`,label:`LayerService`},{id:`api-layer-properties`,label:`Layer 属性`},{id:`api-layer-methods`,label:`Layer 方法`}]},{id:`api-complete`,label:`完整公开 API`},{id:`ownership`,label:`所有权与状态真源`},{id:`related-types`,label:`相关导出类型`}],S=[{prop:`name`,label:`方法`,width:180,presentation:`method`},{prop:`params`,label:`参数`,width:280,linkTypes:!0},{prop:`returns`,label:`返回值`,width:230,linkTypes:!0},{prop:`desc`,label:`说明`,width:360}],C=[{anchor:`api-method-add`,href:`/api/types#api-type-layer-service-method-add`,name:`add`,params:`spec: PublicLayerSpec`,returns:`Layer`,desc:`创建矢量、瓦片或原生图层，ID 不可重复`},{anchor:`api-method-get`,href:`/api/types#api-type-layer-service-method-get`,name:`get`,params:`id: string`,returns:`Layer | undefined`,desc:`按 ID 获取活动图层句柄`},{anchor:`api-method-query`,href:`/api/types#api-type-layer-service-method-query`,name:`query`,params:`kind?: LayerKind`,returns:`readonly Layer[]`,desc:`按注册顺序查询；省略 kind 时返回全部图层`},{anchor:`api-method-remove`,href:`/api/types#api-type-layer-service-method-remove`,name:`remove`,params:`id: string`,returns:`boolean`,desc:`按 ID 移除；不存在时返回 false`},{anchor:`api-method-clear`,href:`/api/types#api-type-layer-service-method-clear`,name:`clear`,params:`—`,returns:`void`,desc:`清空可移除图层；仍承载 Element 的图层会拒绝移除`}],w=[{prop:`name`,label:`属性`,width:170,presentation:`property`},{prop:`type`,label:`类型`,width:240,linkTypes:!0},{prop:`desc`,label:`说明`,width:370}],O=[{anchor:`api-property-id`,href:`/api/types#api-type-layer-property-id`,name:`id`,type:`string`,desc:`图层唯一 ID`},{anchor:`api-property-state`,href:`/api/types#api-type-layer-property-state`,name:`state`,type:`Readonly<LayerState>`,desc:`不可变状态快照`},{anchor:`api-property-kind`,href:`/api/types#api-type-layer-property-kind`,name:`kind`,type:`LayerKind`,desc:`vector、tile 或 native`},{anchor:`api-property-visible`,href:`/api/types#api-type-layer-property-visible`,name:`visible`,type:`boolean`,desc:`当前显隐状态`},{anchor:`api-property-opacity`,href:`/api/types#api-type-layer-property-opacity`,name:`opacity`,type:`number`,desc:`当前透明度，范围 0–1`},{anchor:`api-property-z-index`,href:`/api/types#api-type-layer-property-z-index`,name:`zIndex`,type:`number | undefined`,desc:`当前层级`},{anchor:`api-property-ol-layer`,href:`/api/types#api-type-layer-property-ol-layer`,name:`olLayer`,type:`BaseLayer`,desc:`OpenLayers 外部对象；面向高级集成`}],k=[{anchor:`api-method-layer-update`,href:`/api/types#api-type-layer-method-update`,name:`update`,params:`patch: LayerPatch`,returns:`void`,desc:`原子更新显隐、透明度或层级`},{anchor:`api-method-layer-show`,href:`/api/types#api-type-layer-method-show`,name:`show`,params:`—`,returns:`void`,desc:`把 visible 更新为 true`},{anchor:`api-method-layer-hide`,href:`/api/types#api-type-layer-method-hide`,name:`hide`,params:`—`,returns:`void`,desc:`把 visible 更新为 false`},{anchor:`api-method-layer-remove`,href:`/api/types#api-type-layer-method-remove`,name:`remove`,params:`—`,returns:`void`,desc:`移除当前图层；句柄上的重复调用幂等`}];return(e,t)=>{let A=s(`el-statistic`),j=s(`el-col`),M=s(`el-row`),P=s(`el-alert`),F=s(`el-tab-pane`),I=s(`el-tabs`),L=s(`el-descriptions-item`),R=s(`el-descriptions`);return l(),i(`div`,ee,[u(`article`,te,[t[60]||=u(`header`,{class:`doc-hero`},[u(`span`,{class:`doc-hero__eyebrow`},`核心`),u(`h1`,null,`图层（Layers）`),u(`p`,null,`earth.layers 接受判别式配置创建图层，并返回只读状态驱动的 Layer 句柄；业务状态通过句柄更新，不依赖 OpenLayers 对象反向同步。`)],-1),u(`section`,ne,[t[5]||=u(`h2`,{class:`doc-h2`},`图层模型`,-1),m(M,{gutter:16,class:`core-stat-grid`},{default:p(()=>[m(j,{xs:24,sm:8},{default:p(()=>[m(A,{title:`公开图层类型`,value:3},{suffix:p(()=>[...t[1]||=[o(`种`,-1)]]),_:1})]),_:1}),m(j,{xs:24,sm:8},{default:p(()=>[m(A,{title:`初始默认图层`,value:1},{suffix:p(()=>[...t[2]||=[o(`个`,-1)]]),_:1})]),_:1}),m(j,{xs:24,sm:8},{default:p(()=>[m(A,{title:`状态真源`,value:1},{suffix:p(()=>[...t[3]||=[o(`份 LayerState`,-1)]]),_:1})]),_:1})]),_:1}),m(P,{type:`info`,closable:!1,"show-icon":``,title:`每个 Earth 初始包含 default 矢量图层`},{default:p(()=>[...t[4]||=[u(`code`,null,`earth.layers.query()`,-1),o(` 会包含它；Element 未指定 layerId 时使用该图层。default 被移除后，后续创建默认归属的 Element 会按需重建它。 `,-1)]]),_:1})]),u(`section`,re,[t[16]||=u(`h2`,{class:`doc-h2`},`创建配置`,-1),u(`p`,null,[m(D,{kind:`type`,to:`/api/types#api-type-public-layer-spec`},{default:p(()=>[...t[6]||=[o(`PublicLayerSpec`,-1)]]),_:1}),t[7]||=o(` 是三个分支的联合类型。先用 `,-1),t[8]||=u(`code`,null,`kind`,-1),t[9]||=o(` 区分图层，再填写对应数据源字段。 `,-1)]),m(I,{modelValue:b.value,"onUpdate:modelValue":t[0]||=e=>b.value=e,class:`core-spec-tabs`},{default:p(()=>[m(F,{label:`Vector`,name:`vector`},{default:p(()=>[u(`p`,null,[m(D,{kind:`type`,to:`/api/types#api-type-vector-layer-spec`},{default:p(()=>[...t[10]||=[o(`VectorLayerSpec`,-1)]]),_:1}),t[11]||=o(` 由引擎创建 VectorSource，适合承载 Element。 `,-1)]),m(T,{code:de,lang:`ts`})]),_:1}),m(F,{label:`Tile`,name:`tile`},{default:p(()=>[u(`p`,null,[m(D,{kind:`type`,to:`/api/types#api-type-tile-layer-spec`},{default:p(()=>[...t[12]||=[o(`TileLayerSpec`,-1)]]),_:1}),t[13]||=o(` 支持 OSM、XYZ、compact-xyz 与原生 TileSource 分支。 `,-1)]),m(T,{code:fe,lang:`ts`})]),_:1}),m(F,{label:`Native`,name:`native`},{default:p(()=>[u(`p`,null,[m(D,{kind:`type`,to:`/api/types#api-type-native-layer-spec`},{default:p(()=>[...t[14]||=[o(`NativeLayerSpec`,-1)]]),_:1}),t[15]||=o(` 接入调用方已有的 OpenLayers 图层。`,-1)]),m(T,{code:pe,lang:`ts`})]),_:1})]),_:1},8,[`modelValue`])]),u(`section`,ie,[m(_,{title:`创建、查询与更新图层`,source:h($),snippet:h(n),"show-reset":``,"show-focus":``,onReset:d,onFocus:f},{description:p(()=>[u(`p`,null,[t[23]||=o(` 示例通过 `,-1),m(D,{kind:`method`,to:`#api-method-add`},{default:p(()=>[...t[17]||=[o(`add`,-1)]]),_:1}),t[24]||=o(` 创建业务图层，用 `,-1),m(D,{kind:`method`,to:`#api-method-query`},{default:p(()=>[...t[18]||=[o(`query`,-1)]]),_:1}),t[25]||=o(` 展示实时列表，并调用 Layer 的 `,-1),m(D,{kind:`method`,to:`#api-method-layer-update`},{default:p(()=>[...t[19]||=[o(`update`,-1)]]),_:1}),t[26]||=o(`、 `,-1),m(D,{kind:`method`,to:`#api-method-layer-show`},{default:p(()=>[...t[20]||=[o(`show`,-1)]]),_:1}),t[27]||=o(`、 `,-1),m(D,{kind:`method`,to:`#api-method-layer-hide`},{default:p(()=>[...t[21]||=[o(`hide`,-1)]]),_:1}),t[28]||=o(` 与 `,-1),m(D,{kind:`method`,to:`#api-method-layer-remove`},{default:p(()=>[...t[22]||=[o(`remove`,-1)]]),_:1}),t[29]||=o(`。 `,-1)])]),preview:p(()=>[m(Q,{ref_key:`layerServiceDemoRef`,ref:a},null,512)]),_:1},8,[`source`,`snippet`])]),u(`section`,ae,[m(_,{title:`Vector、Tile、Native 与所有权`,source:h(H),snippet:h(r),"show-reset":``,"show-focus":``,onReset:g,onFocus:v},{description:p(()=>[u(`p`,null,[t[33]||=o(` 示例并列创建三种 `,-1),m(D,{kind:`type`,to:`/api/types#api-type-public-layer-spec`},{default:p(()=>[...t[30]||=[o(`PublicLayerSpec`,-1)]]),_:1}),t[34]||=o(`：蓝色纹理圆来自 Earth vector，橙色点来自 external native，底图来自部署期配置。使用 `,-1),m(D,{kind:`method`,to:`#api-method-layer-remove`},{default:p(()=>[...t[31]||=[o(`Layer.remove`,-1)]]),_:1}),t[35]||=o(` 移除句柄，并通过 `,-1),m(D,{kind:`method`,to:`#api-method-clear`},{default:p(()=>[...t[32]||=[o(`LayerService.clear`,-1)]]),_:1}),t[36]||=o(` 显式清空全部图层。 `,-1)])]),preview:p(()=>[m(V,{ref_key:`layerKindsDemoRef`,ref:c},null,512)]),_:1},8,[`source`,`snippet`])]),u(`section`,oe,[t[38]||=u(`h2`,{class:`doc-h2`},`Layers API`,-1),t[39]||=u(`h3`,{id:`api-layer-service`,class:`doc-h3`},`LayerService`,-1),m(E,{columns:S,rows:C}),m(P,{class:`doc-prose__alert`,type:`warning`,closable:!1,"show-icon":``,title:`Layer 是服务返回的句柄`},{default:p(()=>[...t[37]||=[o(` 虽然 Layer 是包根导出的类，但不能由用户直接构造；请始终从 earth.layers.add()、get() 或 query() 获得实例。 `,-1)]]),_:1}),t[40]||=u(`h3`,{id:`api-layer-properties`,class:`doc-h3`},`Layer 属性`,-1),m(E,{columns:w,rows:O}),t[41]||=u(`h3`,{id:`api-layer-methods`,class:`doc-h3`},`Layer 方法`,-1),m(E,{columns:S,rows:k})]),m(N,{"section-id":`api-complete`,title:`完整公开 API`,description:`完整展示 LayerService、Layer 句柄，以及 vector、tile、native 的全部判别分支、状态、Patch、所有权和瓦片地址函数。`,"type-names":[`LayerService`,`Layer`,`LayerState`,`LayerPatch`,`LayerKind`,`LayerOwnership`,`PublicLayerSpec`,`VectorLayerSpec`,`TileLayerCommonSpec`,`TileLayerSpec`,`NativeLayerSpec`,`TileUrlFunction`]}),u(`section`,se,[t[52]||=u(`h2`,{class:`doc-h2`},`所有权与状态真源`,-1),m(R,{column:1,border:``},{default:p(()=>[m(L,{label:`external`},{default:p(()=>[...t[42]||=[o(`默认值。Earth 移除或销毁时只解绑原生图层/数据源，不 dispose 调用方资源。`,-1)]]),_:1}),m(L,{label:`earth`},{default:p(()=>[...t[43]||=[o(`资源成功交接后由 Earth 持有，在移除或销毁时负责 dispose。`,-1)]]),_:1}),m(L,{label:`preset`},{default:p(()=>[...t[44]||=[o(`OSM、XYZ、compact-xyz 与引擎创建的 VectorSource 固定由 Earth 管理。`,-1)]]),_:1})]),_:1}),u(`p`,null,[t[47]||=o(` Native 图层初次挂载时会捕获展示状态；之后直接修改 `,-1),t[48]||=u(`code`,null,`olLayer`,-1),t[49]||=o(` 不会反向写入 `,-1),m(D,{kind:`property`,to:`#api-property-state`},{default:p(()=>[...t[45]||=[o(`Layer.state`,-1)]]),_:1}),t[50]||=o(`。需要持久变更时调用 `,-1),m(D,{kind:`method`,to:`#api-method-layer-update`},{default:p(()=>[...t[46]||=[o(`Layer.update`,-1)]]),_:1}),t[51]||=o(`。 `,-1)])]),u(`section`,ce,[t[59]||=u(`h2`,{class:`doc-h2`},`相关导出类型`,-1),u(`div`,le,[m(D,{kind:`type`,to:`/api/types#api-type-layer-service`},{default:p(()=>[...t[53]||=[o(`LayerService`,-1)]]),_:1}),m(D,{kind:`type`,to:`/api/types#api-type-layer`},{default:p(()=>[...t[54]||=[o(`Layer`,-1)]]),_:1}),m(D,{kind:`type`,to:`/api/types#api-type-layer-state`},{default:p(()=>[...t[55]||=[o(`LayerState`,-1)]]),_:1}),m(D,{kind:`type`,to:`/api/types#api-type-layer-patch`},{default:p(()=>[...t[56]||=[o(`LayerPatch`,-1)]]),_:1}),m(D,{kind:`type`,to:`/api/types#api-type-public-layer-spec`},{default:p(()=>[...t[57]||=[o(`PublicLayerSpec`,-1)]]),_:1}),m(D,{kind:`type`,to:`/api/types#api-type-layer-ownership`},{default:p(()=>[...t[58]||=[o(`LayerOwnership`,-1)]]),_:1})])])]),u(`aside`,ue,[m(y,{title:`图层（Layers）`,items:x})])])}}});export{me as default};