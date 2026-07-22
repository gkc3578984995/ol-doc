import{A as e,At as t,B as n,Nt as r,P as i,Q as a,R as o,ct as s,fn as c,it as l,j as u,tt as d,x as f,xt as p,z as m,zt as h}from"./TypeExpression-D6csDz4V.js";import{B as g,H as _,V as v,W as y,a as b,n as x,t as S,z as C}from"./index-4uKXPGRf.js";var w={class:`example-demo`},T={class:`example-demo__control-panel`},E={class:`example-demo__action-group`},D={class:`example-demo__action-buttons example-demo__actions`},O=`docs-core-view-service`,k=f(n({__name:`ViewServiceDemo`,setup(n){let f=t(null),h=r(null),g=t(116.4074),_=t(39.9042),v=t(8),y=t(null),S=t(null),C=t(`default`),k=t(!0),A=t(`等待操作`),j=e(()=>y.value===null?`—`:`${y.value[0].toFixed(2)}, ${y.value[1].toFixed(2)}`),M=e(()=>S.value===null?`—`:`${S.value[0].toFixed(5)}, ${S.value[1].toFixed(5)}`),N=()=>{let e=h.value;if(e===null)return;let t=e.view.getCenter();if(t===void 0)return;y.value=[t[0],t[1]];let n=e.view.toGeographicCoordinates([t[0],t[1]]);S.value=[n[0],n[1]]},P=()=>{let e=h.value;if(e!==null)return e.view.toProjectedCoordinates([g.value,_.value])},F=()=>{let e=h.value,t=P();e===null||t===void 0||(e.view.flyTo(t,v.value),A.value=`已立即定位`,N())},I=()=>{let e=h.value,t=P();e===null||t===void 0||(A.value=`动画进行中`,e.view.animateFlyTo(t,{zoom:v.value,duration:900,callback:e=>{A.value=e?`动画已完成`:`动画已取消`,N()}}))},L=()=>{let e=h.value;e!==null&&(A.value=`返回初始位置中`,e.view.flyHome({duration:800,callback:e=>{A.value=e?`已返回初始位置`:`返回动画已取消`,N()}}))},R=()=>{h.value?.view.useCrosshairCursor(),C.value=`crosshair`},z=()=>{h.value?.view.useDefaultCursor(),C.value=`default`},B=e=>{let t=!!e;k.value=t,h.value?.view.setDragEnabled(t)};return d(()=>{if(f.value===null)return;let e=b({id:O,target:f.value,controls:{zoom:!0,rotate:!1,attribution:!0}});x(e,`vector`),h.value=e,F()}),a(()=>{h.value?.destroy(),h.value=null}),(e,t)=>{let n=s(`el-input-number`),r=s(`el-form-item`),a=s(`el-form`),d=s(`el-button`),h=s(`el-switch`),y=s(`el-descriptions-item`),b=s(`el-descriptions`);return l(),i(`div`,w,[u(`div`,T,[m(a,{class:`example-demo__control-grid view-service-demo__form`,inline:``,"label-position":`top`},{default:p(()=>[m(r,{label:`经度`},{default:p(()=>[m(n,{modelValue:g.value,"onUpdate:modelValue":t[0]||=e=>g.value=e,min:-180,max:180,step:.1,precision:4},null,8,[`modelValue`])]),_:1}),m(r,{label:`纬度`},{default:p(()=>[m(n,{modelValue:_.value,"onUpdate:modelValue":t[1]||=e=>_.value=e,min:-85,max:85,step:.1,precision:4},null,8,[`modelValue`])]),_:1}),m(r,{label:`缩放级别`},{default:p(()=>[m(n,{modelValue:v.value,"onUpdate:modelValue":t[2]||=e=>v.value=e,min:2,max:18,step:1},null,8,[`modelValue`])]),_:1})]),_:1}),u(`div`,E,[u(`div`,D,[m(d,{type:`primary`,onClick:F},{default:p(()=>[...t[4]||=[o(`立即定位`,-1)]]),_:1}),m(d,{onClick:I},{default:p(()=>[...t[5]||=[o(`动画定位`,-1)]]),_:1}),m(d,{onClick:L},{default:p(()=>[...t[6]||=[o(`返回初始位置`,-1)]]),_:1}),m(d,{type:C.value===`crosshair`?`primary`:void 0,plain:``,onClick:R},{default:p(()=>[...t[7]||=[o(`十字光标`,-1)]]),_:1},8,[`type`]),m(d,{type:C.value==="default"?`primary`:void 0,plain:``,onClick:z},{default:p(()=>[...t[8]||=[o(`默认光标`,-1)]]),_:1},8,[`type`]),m(h,{modelValue:k.value,"onUpdate:modelValue":t[3]||=e=>k.value=e,"active-text":`允许拖拽`,"inactive-text":`禁止拖拽`,onChange:B},null,8,[`modelValue`])])])]),u(`div`,{ref_key:`mapTarget`,ref:f,class:`example-stage`},null,512),m(b,{class:`view-service-demo__details`,column:1,border:``},{default:p(()=>[m(y,{label:`当前投影坐标`},{default:p(()=>[o(c(j.value),1)]),_:1}),m(y,{label:`转换后的经纬度`},{default:p(()=>[o(c(M.value),1)]),_:1}),m(y,{label:`动画状态`},{default:p(()=>[o(c(A.value),1)]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-5c881ed8`]]),A=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Earth } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';

const EARTH_ID = 'docs-core-view-service';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const longitude = ref(116.4074);
const latitude = ref(39.9042);
const zoom = ref(8);
const projected = ref<readonly [number, number] | null>(null);
const geographic = ref<readonly [number, number] | null>(null);
const cursor = ref<'default' | 'crosshair'>('default');
const dragEnabled = ref(true);
const animationStatus = ref('等待操作');

const projectedLabel = computed(() => (projected.value === null ? '—' : \`\${projected.value[0].toFixed(2)}, \${projected.value[1].toFixed(2)}\`));
const geographicLabel = computed(() => (geographic.value === null ? '—' : \`\${geographic.value[0].toFixed(5)}, \${geographic.value[1].toFixed(5)}\`));

// #region view-navigation
const readCurrentCenter = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  const center = earth.view.getCenter();
  if (center === undefined) return;

  projected.value = [center[0], center[1]];
  const lonLat = earth.view.toGeographicCoordinates([center[0], center[1]]);
  geographic.value = [lonLat[0], lonLat[1]];
};

const targetCenter = (): readonly [number, number] | undefined => {
  const earth = earthRef.value;
  if (earth === null) return undefined;
  return earth.view.toProjectedCoordinates([longitude.value, latitude.value]);
};

const flyTo = () => {
  const earth = earthRef.value;
  const center = targetCenter();
  if (earth === null || center === undefined) return;

  earth.view.flyTo(center, zoom.value);
  animationStatus.value = '已立即定位';
  readCurrentCenter();
};

const animateFlyTo = () => {
  const earth = earthRef.value;
  const center = targetCenter();
  if (earth === null || center === undefined) return;

  animationStatus.value = '动画进行中';
  earth.view.animateFlyTo(center, {
    zoom: zoom.value,
    duration: 900,
    callback: (completed) => {
      animationStatus.value = completed ? '动画已完成' : '动画已取消';
      readCurrentCenter();
    }
  });
};

const flyHome = () => {
  const earth = earthRef.value;
  if (earth === null) return;

  animationStatus.value = '返回初始位置中';
  earth.view.flyHome({
    duration: 800,
    callback: (completed) => {
      animationStatus.value = completed ? '已返回初始位置' : '返回动画已取消';
      readCurrentCenter();
    }
  });
};

const useCrosshair = () => {
  earthRef.value?.view.useCrosshairCursor();
  cursor.value = 'crosshair';
};

const useDefaultCursor = () => {
  earthRef.value?.view.useDefaultCursor();
  cursor.value = 'default';
};

const changeDrag = (value: string | number | boolean) => {
  const enabled = Boolean(value);
  dragEnabled.value = enabled;
  earthRef.value?.view.setDragEnabled(enabled);
};
// #endregion view-navigation

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earthRef.value = earth;
  flyTo();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel">
      <el-form class="example-demo__control-grid view-service-demo__form" inline label-position="top">
        <el-form-item label="经度">
          <el-input-number v-model="longitude" :min="-180" :max="180" :step="0.1" :precision="4" />
        </el-form-item>
        <el-form-item label="纬度">
          <el-input-number v-model="latitude" :min="-85" :max="85" :step="0.1" :precision="4" />
        </el-form-item>
        <el-form-item label="缩放级别">
          <el-input-number v-model="zoom" :min="2" :max="18" :step="1" />
        </el-form-item>
      </el-form>

      <div class="example-demo__action-group">
        <div class="example-demo__action-buttons example-demo__actions">
          <el-button type="primary" @click="flyTo">立即定位</el-button>
          <el-button @click="animateFlyTo">动画定位</el-button>
          <el-button @click="flyHome">返回初始位置</el-button>
          <el-button :type="cursor === 'crosshair' ? 'primary' : undefined" plain @click="useCrosshair">十字光标</el-button>
          <el-button :type="cursor === 'default' ? 'primary' : undefined" plain @click="useDefaultCursor">默认光标</el-button>
          <el-switch v-model="dragEnabled" active-text="允许拖拽" inactive-text="禁止拖拽" @change="changeDrag" />
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-descriptions class="view-service-demo__details" :column="1" border>
      <el-descriptions-item label="当前投影坐标">{{ projectedLabel }}</el-descriptions-item>
      <el-descriptions-item label="转换后的经纬度">{{ geographicLabel }}</el-descriptions-item>
      <el-descriptions-item label="动画状态">{{ animationStatus }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.view-service-demo__form {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
}

.view-service-demo__details {
  margin-top: 16px;
}

@media (max-width: 640px) {
  .view-service-demo__form :deep(.el-form-item) {
    display: flex;
    margin-right: 0;
    width: 100%;
  }

  .view-service-demo__form :deep(.el-input-number) {
    width: 100%;
  }
}
</style>
`,j={class:`example-demo`},M={class:`example-demo__toolbar`},N=`docs-core-view-world-pixel`,P=`view-world-path`,F=f(n({__name:`ViewWorldPixelDemo`,setup(n){let f=t(null),h=r(null),g=t(),_=t(null),v=t(null),y=t(),S=t(),C=t(`auto`),w=t(2),T=null,E=e(()=>_.value===null?`—`:_.value.map(e=>e.toFixed(0)).join(`, `)),D=e(()=>v.value===null?`—`:v.value.map(e=>e.toFixed(2)).join(`, `)),O=()=>{w.value=T?.matches===!0?1:2},k=()=>{T=window.matchMedia(`(max-width: 640px)`),O(),T.addEventListener(`change`,O)},A=()=>{T?.removeEventListener(`change`,O),T=null},F=()=>{let e=f.value;if(e!==null)return[e.clientWidth/2,e.clientHeight/2]},I=()=>{let e=h.value,t=F();e===null||t===void 0||(_.value=t,v.value=e.view.coordinateAtPixel(t)??null,g.value=e.view.getZoom(),y.value=e.view.worldWidth(),S.value=v.value===null?void 0:e.view.worldIndex(v.value[0]))},L=()=>{let e=h.value,t=F(),n=e?.view.getCenter();if(e==null||t===void 0||n===void 0)return;let r=[[n[0]-22e3,n[1]-8e3],[n[0],n[1]+12e3],[n[0]+22e3,n[1]-8e3]],i=e.view.normalizeToViewWorld(r),a=e.view.worldIndex(n[0]),o=e.view.restoreToWorld(i,a),s=e.view.translateCoordinatesToPixel(t,o);s!==void 0&&e.elements.update({id:P},{geometry:{type:`polyline`,controlPoints:s}}),I()},R=()=>{C.value=C.value===`pointer`?`auto`:`pointer`,h.value?.view.setCursor(C.value)};return d(()=>{if(k(),f.value===null)return;let e=b({id:N,target:f.value,controls:{zoom:!0,rotate:!1,attribution:!0}});x(e,`vector`);let t=e.layers.add({kind:`vector`,id:`view-world-elements`,zIndex:20}),n=e.view.toProjectedCoordinates([116.4074,39.9042]);e.view.setCenter(n),e.view.setZoom(9),e.elements.add({id:P,layerId:t.id,geometry:{type:`polyline`,controlPoints:[n,[n[0]+1,n[1]+1]]},style:{strokes:[{color:`#ffffff`,width:8},{color:`#409eff`,width:4}]}}),h.value=e,L()}),a(()=>{A(),h.value?.destroy(),h.value=null}),(e,t)=>{let n=s(`el-button`),r=s(`el-descriptions-item`),a=s(`el-descriptions`);return l(),i(`div`,j,[u(`div`,M,[m(n,{type:`primary`,onClick:I},{default:p(()=>[...t[0]||=[o(`读取视口中心`,-1)]]),_:1}),m(n,{onClick:L},{default:p(()=>[...t[1]||=[o(`把路径移到中心像素`,-1)]]),_:1}),m(n,{type:C.value===`pointer`?`primary`:void 0,plain:``,onClick:R},{default:p(()=>[...t[2]||=[o(`切换 pointer 光标`,-1)]]),_:1},8,[`type`])]),u(`div`,{ref_key:`mapTarget`,ref:f,class:`example-stage`},null,512),m(a,{class:`view-world-demo__details`,column:w.value,border:``},{default:p(()=>[m(r,{label:`中心像素`},{default:p(()=>[o(c(E.value),1)]),_:1}),m(r,{label:`当前 zoom`},{default:p(()=>[o(c(g.value??`—`),1)]),_:1}),m(r,{label:`对应坐标`},{default:p(()=>[o(c(D.value),1)]),_:1}),m(r,{label:`世界副本索引`},{default:p(()=>[o(c(S.value??`—`),1)]),_:1}),m(r,{label:`世界宽度`,span:w.value},{default:p(()=>[o(c(y.value?.toFixed(2)??`—`),1)]),_:1},8,[`span`])]),_:1},8,[`column`])])}}}),[[`__scopeId`,`data-v-ac31e45d`]]),I=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, Pixel } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../config/mapSources';

const EARTH_ID = 'docs-core-view-world-pixel';
const PATH_ID = 'view-world-path';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const zoom = ref<number | undefined>();
const centerPixel = ref<Pixel | null>(null);
const coordinate = ref<Coordinate | null>(null);
const worldWidth = ref<number | undefined>();
const worldIndex = ref<number | undefined>();
const cursor = ref('auto');
const detailsColumn = ref<1 | 2>(2);
let detailsMediaQuery: MediaQueryList | null = null;

const pixelLabel = computed(() => (centerPixel.value === null ? '—' : centerPixel.value.map((value) => value.toFixed(0)).join(', ')));
const coordinateLabel = computed(() => (coordinate.value === null ? '—' : coordinate.value.map((value) => value.toFixed(2)).join(', ')));

const syncDetailsColumn = () => {
  detailsColumn.value = detailsMediaQuery?.matches === true ? 1 : 2;
};

const observeDetailsLayout = () => {
  detailsMediaQuery = window.matchMedia('(max-width: 640px)');
  syncDetailsColumn();
  detailsMediaQuery.addEventListener('change', syncDetailsColumn);
};

const stopObservingDetailsLayout = () => {
  detailsMediaQuery?.removeEventListener('change', syncDetailsColumn);
  detailsMediaQuery = null;
};

const viewportCenterPixel = (): Pixel | undefined => {
  const target = mapTarget.value;
  if (target === null) return undefined;
  return [target.clientWidth / 2, target.clientHeight / 2];
};

// #region view-world-pixel
const readPixelAndWorld = () => {
  const earth = earthRef.value;
  const pixel = viewportCenterPixel();
  if (earth === null || pixel === undefined) return;

  centerPixel.value = pixel;
  coordinate.value = earth.view.coordinateAtPixel(pixel) ?? null;
  zoom.value = earth.view.getZoom();
  worldWidth.value = earth.view.worldWidth();
  worldIndex.value = coordinate.value === null ? undefined : earth.view.worldIndex(coordinate.value[0]);
};

const movePathToViewportCenter = () => {
  const earth = earthRef.value;
  const pixel = viewportCenterPixel();
  const center = earth?.view.getCenter();
  if (earth === null || earth === undefined || pixel === undefined || center === undefined) return;

  const path: readonly Coordinate[] = [
    [center[0] - 22_000, center[1] - 8_000],
    [center[0], center[1] + 12_000],
    [center[0] + 22_000, center[1] - 8_000]
  ];
  const normalized = earth.view.normalizeToViewWorld(path);
  const index = earth.view.worldIndex(center[0]);
  const restored = earth.view.restoreToWorld(normalized, index);
  const translated = earth.view.translateCoordinatesToPixel(pixel, restored);
  if (translated !== undefined) earth.elements.update({ id: PATH_ID }, { geometry: { type: 'polyline', controlPoints: translated } });
  readPixelAndWorld();
};

const setPointerCursor = () => {
  cursor.value = cursor.value === 'pointer' ? 'auto' : 'pointer';
  earthRef.value?.view.setCursor(cursor.value);
};
// #endregion view-world-pixel

onMounted(() => {
  observeDetailsLayout();
  if (mapTarget.value === null) return;
  const earth = useEarth({ id: EARTH_ID, target: mapTarget.value, controls: { zoom: true, rotate: false, attribution: true } });
  createConfiguredLayer(earth, 'vector');
  const layer = earth.layers.add({ kind: 'vector', id: 'view-world-elements', zIndex: 20 });
  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earth.view.setCenter(center);
  earth.view.setZoom(9);
  earth.elements.add({
    id: PATH_ID,
    layerId: layer.id,
    geometry: { type: 'polyline', controlPoints: [center, [center[0] + 1, center[1] + 1]] },
    style: {
      strokes: [
        { color: '#ffffff', width: 8 },
        { color: '#409eff', width: 4 }
      ]
    }
  });
  earthRef.value = earth;
  movePathToViewportCenter();
});

onBeforeUnmount(() => {
  stopObservingDetailsLayout();
  earthRef.value?.destroy();
  earthRef.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__toolbar">
      <el-button type="primary" @click="readPixelAndWorld">读取视口中心</el-button>
      <el-button @click="movePathToViewportCenter">把路径移到中心像素</el-button>
      <el-button :type="cursor === 'pointer' ? 'primary' : undefined" plain @click="setPointerCursor">切换 pointer 光标</el-button>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-descriptions class="view-world-demo__details" :column="detailsColumn" border>
      <el-descriptions-item label="中心像素">{{ pixelLabel }}</el-descriptions-item>
      <el-descriptions-item label="当前 zoom">{{ zoom ?? '—' }}</el-descriptions-item>
      <el-descriptions-item label="对应坐标">{{ coordinateLabel }}</el-descriptions-item>
      <el-descriptions-item label="世界副本索引">{{ worldIndex ?? '—' }}</el-descriptions-item>
      <el-descriptions-item label="世界宽度" :span="detailsColumn">{{ worldWidth?.toFixed(2) ?? '—' }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.view-world-demo__details {
  margin-top: 16px;
}

.view-world-demo__details :deep(.el-descriptions__content) {
  min-width: 0;
  overflow-wrap: anywhere;
}
</style>
`,L={class:`doc-page-layout`},R={class:`doc-page`},z={id:`overview`,class:`doc-prose`},B={id:`example-view-navigation`,class:`doc-prose`},V={id:`example-view-world-pixel`,class:`doc-prose`},H={id:`api`,class:`doc-prose`},U={id:`coordinate-contract`,class:`doc-prose`},W={id:`related-types`,class:`doc-prose`},G={class:`core-type-links`},K={class:`doc-page-layout__aside`},q=n({__name:`ViewServiceView`,setup(e){let t=S(A,`view-navigation`),n=S(I,`view-world-pixel`),r=[{id:`overview`,label:`职责与坐标语义`},{id:`example-view-navigation`,label:`定位与视图控制`},{id:`example-view-world-pixel`,label:`像素与世界副本`},{id:`api`,label:`ViewService API`,children:[{id:`api-properties`,label:`属性`},{id:`api-options`,label:`动画选项`},{id:`api-basic-view`,label:`视图状态`},{id:`api-navigation`,label:`定位动画`},{id:`api-coordinates`,label:`坐标转换`},{id:`api-world-pixel`,label:`世界副本与像素`},{id:`api-overloads`,label:`全部重载`}]},{id:`api-complete`,label:`完整公开 API`},{id:`coordinate-contract`,label:`坐标输入契约`},{id:`related-types`,label:`相关导出类型`}],a=[{prop:`name`,label:`属性`,width:180,presentation:`property`},{prop:`type`,label:`类型`,width:220,linkTypes:!0},{prop:`desc`,label:`说明`,width:360}],c=[{prop:`name`,label:`方法`,width:220,presentation:`method`},{prop:`params`,label:`参数`,width:390,linkTypes:!0},{prop:`returns`,label:`返回值`,width:270,linkTypes:!0},{prop:`desc`,label:`说明`,width:340}],d=[{anchor:`api-property-ol-view`,href:`/api/types#api-type-view-service-property-ol-view`,name:`olView`,type:`View`,desc:`当前 OpenLayers View；面向高级集成的只读外部对象`}],f=[{prop:`name`,label:`属性`,width:170,presentation:`property`},{prop:`required`,label:`必填`,width:80},{prop:`type`,label:`类型`,width:290,linkTypes:!0},{prop:`default`,label:`默认值`,width:180},{prop:`desc`,label:`说明`,width:350}],b=[{anchor:`api-option-view-animation-duration`,name:`duration`,required:`否`,type:`number`,default:`2000`,desc:`动画时长，单位毫秒；必须为大于或等于 0 的有限数字`},{anchor:`api-option-view-animation-easing`,name:`easing`,required:`否`,type:`(progress: number) => number`,default:`OpenLayers 默认`,desc:`把线性进度映射为动画进度`},{anchor:`api-option-view-animation-callback`,name:`callback`,required:`否`,type:`(completed: boolean) => void`,default:`—`,desc:`动画自然完成时传 true，被取消时传 false`},{anchor:`api-option-fly-to-zoom`,name:`zoom`,required:`否`,type:`number`,default:`保持当前 zoom`,desc:`仅 FlyToOptions 提供；目标缩放级别必须是有限数字`}],x=[{anchor:`api-method-get-center`,href:`/api/types#api-type-view-service-method-get-center`,name:`getCenter`,params:`—`,returns:`Coordinate | undefined`,desc:`读取当前 View 投影下的中心点`},{anchor:`api-method-set-center`,href:`/api/types#api-type-view-service-method-set-center`,name:`setCenter`,params:`center: Coordinate`,returns:`void`,desc:`立即设置当前 View 投影下的中心点`},{anchor:`api-method-get-zoom`,href:`/api/types#api-type-view-service-method-get-zoom`,name:`getZoom`,params:`—`,returns:`number | undefined`,desc:`读取当前缩放级别`},{anchor:`api-method-set-zoom`,href:`/api/types#api-type-view-service-method-set-zoom`,name:`setZoom`,params:`zoom: number`,returns:`void`,desc:`立即设置缩放级别`},{anchor:`api-method-set-cursor`,href:`/api/types#api-type-view-service-method-set-cursor`,name:`setCursor`,params:`cursor: string`,returns:`void`,desc:`设置地图容器的 CSS cursor`},{anchor:`api-method-use-default-cursor`,href:`/api/types#api-type-view-service-method-use-default-cursor`,name:`useDefaultCursor`,params:`—`,returns:`void`,desc:`把 cursor 恢复为 'auto'`},{anchor:`api-method-use-crosshair-cursor`,href:`/api/types#api-type-view-service-method-use-crosshair-cursor`,name:`useCrosshairCursor`,params:`—`,returns:`void`,desc:`把 cursor 设置为 'crosshair'`},{anchor:`api-method-set-drag-enabled`,href:`/api/types#api-type-view-service-method-set-drag-enabled`,name:`setDragEnabled`,params:`enabled: boolean`,returns:`void`,desc:`切换当前地图中的 DragPan 交互`}],w=[{anchor:`api-method-fly-home`,href:`/api/types#api-type-view-service-method-fly-home`,name:`flyHome`,params:`options?: ViewAnimationOptions`,returns:`void`,desc:`动画返回引擎 home center，缩放级别固定为 4`},{anchor:`api-method-animate-fly-to`,href:`/api/types#api-type-view-service-method-animate-fly-to`,name:`animateFlyTo`,params:`center: Coordinate, options?: FlyToOptions`,returns:`void`,desc:`动画定位；默认时长 2000 ms，省略 zoom 时保留当前级别`},{anchor:`api-method-fly-to`,href:`/api/types#api-type-view-service-method-fly-to`,name:`flyTo`,params:`center: Coordinate, zoom?: number`,returns:`void`,desc:`立即定位；省略 zoom 时保留当前级别`}],T=[{anchor:`api-method-to-projected-coordinates`,href:`/api/types#api-type-view-service-method-to-projected-coordinates`,name:`toProjectedCoordinates`,params:`Coordinate | readonly number[] | readonly Coordinate[]`,returns:`与输入层级一致的新坐标`,desc:`EPSG:4326 → 当前 View 投影；嵌套三维坐标保留 Z`},{anchor:`api-method-to-geographic-coordinates`,href:`/api/types#api-type-view-service-method-to-geographic-coordinates`,name:`toGeographicCoordinates`,params:`Coordinate | readonly number[] | readonly Coordinate[]`,returns:`与输入层级一致的新坐标`,desc:`当前 View 投影 → EPSG:4326；嵌套三维坐标保留 Z`}],E=[{anchor:`api-method-world-width`,href:`/api/types#api-type-view-service-method-world-width`,name:`worldWidth`,params:`—`,returns:`number | undefined`,desc:`读取当前投影世界宽度`},{anchor:`api-method-world-index`,href:`/api/types#api-type-view-service-method-world-index`,name:`worldIndex`,params:`x: number`,returns:`number | undefined`,desc:`计算 X 坐标所在的世界副本索引`},{anchor:`api-method-normalize-to-view-world`,href:`/api/types#api-type-view-service-method-normalize-to-view-world`,name:`normalizeToViewWorld`,params:`Coordinate | readonly Coordinate[] | readonly (readonly Coordinate[])[]`,returns:`与输入层级一致的新坐标`,desc:`把坐标平移到当前 View 所在世界副本`},{anchor:`api-method-restore-to-world`,href:`/api/types#api-type-view-service-method-restore-to-world`,name:`restoreToWorld`,params:`coordinates, index: number | undefined`,returns:`与输入层级一致的新坐标`,desc:`把规范坐标恢复到指定世界副本`},{anchor:`api-method-coordinate-at-pixel`,href:`/api/types#api-type-view-service-method-coordinate-at-pixel`,name:`coordinateAtPixel`,params:`pixel: Pixel`,returns:`Coordinate | undefined`,desc:`把视口像素换算为当前投影坐标`},{anchor:`api-method-translate-coordinates-to-pixel`,href:`/api/types#api-type-view-service-method-translate-coordinates-to-pixel`,name:`translateCoordinatesToPixel`,params:`pixel: Pixel, coordinates`,returns:`与输入层级一致的新坐标 | undefined`,desc:`以像素对应坐标为平移目标，整体移动坐标集合`}],D=[{anchor:`api-overload-to-projected-single`,name:`toProjectedCoordinates`,params:`coordinates: readonly [number, number]`,returns:`readonly [number, number]`,desc:`单个二维经纬度坐标`},{anchor:`api-overload-to-projected-flat`,name:`toProjectedCoordinates`,params:`coordinates: readonly number[]`,returns:`readonly number[]`,desc:`二维扁平坐标；按 XY 两两分组`},{anchor:`api-overload-to-projected-nested`,name:`toProjectedCoordinates`,params:`coordinates: readonly (readonly number[])[]`,returns:`readonly Coordinate[]`,desc:`一层嵌套二维或三维坐标`},{anchor:`api-overload-to-geographic-single`,name:`toGeographicCoordinates`,params:`coordinates: readonly [number, number]`,returns:`readonly [number, number]`,desc:`单个二维投影坐标`},{anchor:`api-overload-to-geographic-flat`,name:`toGeographicCoordinates`,params:`coordinates: readonly number[]`,returns:`readonly number[]`,desc:`二维扁平投影坐标`},{anchor:`api-overload-to-geographic-nested`,name:`toGeographicCoordinates`,params:`coordinates: readonly (readonly number[])[]`,returns:`readonly Coordinate[]`,desc:`一层嵌套二维或三维投影坐标`},{anchor:`api-overload-normalize-point`,name:`normalizeToViewWorld`,params:`coordinates: Coordinate`,returns:`Coordinate`,desc:`单个坐标`},{anchor:`api-overload-normalize-line`,name:`normalizeToViewWorld`,params:`coordinates: readonly Coordinate[]`,returns:`readonly Coordinate[]`,desc:`一组坐标`},{anchor:`api-overload-normalize-groups`,name:`normalizeToViewWorld`,params:`coordinates: readonly (readonly Coordinate[])[]`,returns:`readonly (readonly Coordinate[])[]`,desc:`多组坐标`},{anchor:`api-overload-restore-point`,name:`restoreToWorld`,params:`coordinates: Coordinate, index: number | undefined`,returns:`Coordinate`,desc:`单个坐标`},{anchor:`api-overload-restore-line`,name:`restoreToWorld`,params:`coordinates: readonly Coordinate[], index: number | undefined`,returns:`readonly Coordinate[]`,desc:`一组坐标`},{anchor:`api-overload-restore-groups`,name:`restoreToWorld`,params:`coordinates: readonly (readonly Coordinate[])[], index: number | undefined`,returns:`readonly (readonly Coordinate[])[]`,desc:`多组坐标`},{anchor:`api-overload-translate-point`,name:`translateCoordinatesToPixel`,params:`pixel: Pixel, coordinates: Coordinate`,returns:`Coordinate | undefined`,desc:`平移单个坐标`},{anchor:`api-overload-translate-line`,name:`translateCoordinatesToPixel`,params:`pixel: Pixel, coordinates: readonly Coordinate[]`,returns:`readonly Coordinate[] | undefined`,desc:`整体平移一组坐标`},{anchor:`api-overload-translate-groups`,name:`translateCoordinatesToPixel`,params:`pixel: Pixel, coordinates: readonly (readonly Coordinate[])[]`,returns:`readonly (readonly Coordinate[])[] | undefined`,desc:`整体平移多组坐标`}];return(e,S)=>{let O=s(`el-descriptions-item`),j=s(`el-descriptions`),M=s(`el-alert`);return l(),i(`div`,L,[u(`article`,R,[S[36]||=u(`header`,{class:`doc-hero`},[u(`span`,{class:`doc-hero__eyebrow`},`核心`),u(`h1`,null,`视图（View）`),u(`p`,null,`通过 earth.view 统一处理中心点、缩放、定位动画、坐标投影、世界副本与像素换算。`)],-1),u(`section`,z,[S[4]||=u(`h2`,{class:`doc-h2`},`职责与坐标语义`,-1),m(j,{column:1,border:``},{default:p(()=>[m(O,{label:`业务坐标`},{default:p(()=>[...S[0]||=[o(`Element 与 View 的坐标始终使用当前 View 投影。`,-1)]]),_:1}),m(O,{label:`经纬度输入`},{default:p(()=>[...S[1]||=[o(`显式调用 toProjectedCoordinates，把 EPSG:4326 经纬度转换到当前 View。`,-1)]]),_:1}),m(O,{label:`经纬度输出`},{default:p(()=>[...S[2]||=[o(`显式调用 toGeographicCoordinates，把当前 View 坐标转换回 EPSG:4326。`,-1)]]),_:1}),m(O,{label:`OL 逃生口`},{default:p(()=>[...S[3]||=[o(`olView 是外部 OpenLayers 类型；直接修改时由调用方承担状态一致性责任。`,-1)]]),_:1})]),_:1})]),u(`section`,B,[m(g,{title:`定位、转换与视图控制`,source:h(A),snippet:h(t)},{description:p(()=>[u(`p`,null,[S[8]||=o(` 输入经纬度后先调用 `,-1),m(y,{kind:`method`,to:`#api-method-to-projected-coordinates`},{default:p(()=>[...S[5]||=[o(`toProjectedCoordinates`,-1)]]),_:1}),S[9]||=o(`，再使用 `,-1),m(y,{kind:`method`,to:`#api-method-fly-to`},{default:p(()=>[...S[6]||=[o(`flyTo`,-1)]]),_:1}),S[10]||=o(` 或 `,-1),m(y,{kind:`method`,to:`#api-method-animate-fly-to`},{default:p(()=>[...S[7]||=[o(`animateFlyTo`,-1)]]),_:1}),S[11]||=o(` 定位。光标与拖拽开关同样由 ViewService 管理。 `,-1)])]),preview:p(()=>[m(k)]),_:1},8,[`source`,`snippet`])]),u(`section`,V,[m(g,{title:`像素换算与世界副本`,source:h(I),snippet:h(n)},{description:p(()=>[u(`p`,null,[S[14]||=o(` 示例读取视口中心像素，调用 `,-1),m(y,{kind:`method`,to:`#api-method-coordinate-at-pixel`},{default:p(()=>[...S[12]||=[o(`coordinateAtPixel`,-1)]]),_:1}),S[15]||=o(` 换算坐标，再用 `,-1),m(y,{kind:`method`,to:`#api-method-translate-coordinates-to-pixel`},{default:p(()=>[...S[13]||=[o(`translateCoordinatesToPixel`,-1)]]),_:1}),S[16]||=o(` 平移路径；同时展示世界宽度、世界索引和跨世界坐标恢复。 `,-1)])]),preview:p(()=>[m(F)]),_:1},8,[`source`,`snippet`])]),u(`section`,H,[S[17]||=u(`h2`,{class:`doc-h2`},`ViewService API`,-1),S[18]||=u(`h3`,{id:`api-properties`,class:`doc-h3`},`属性`,-1),m(v,{columns:a,rows:d}),S[19]||=u(`h3`,{id:`api-options`,class:`doc-h3`},`ViewAnimationOptions 与 FlyToOptions`,-1),S[20]||=u(`p`,null,`FlyToOptions 继承前三个 ViewAnimationOptions 字段，并额外增加 zoom。`,-1),m(v,{columns:f,rows:b}),S[21]||=u(`h3`,{id:`api-basic-view`,class:`doc-h3`},`视图状态与交互`,-1),m(v,{columns:c,rows:x}),S[22]||=u(`h3`,{id:`api-navigation`,class:`doc-h3`},`定位动画`,-1),m(v,{columns:c,rows:w}),S[23]||=u(`h3`,{id:`api-coordinates`,class:`doc-h3`},`坐标转换`,-1),m(v,{columns:c,rows:T}),S[24]||=u(`h3`,{id:`api-world-pixel`,class:`doc-h3`},`世界副本与像素`,-1),m(v,{columns:c,rows:E}),S[25]||=u(`h3`,{id:`api-overloads`,class:`doc-h3`},`坐标结构的全部重载`,-1),S[26]||=u(`p`,null,`以下重载都返回新数组，不修改输入；单点、线和多组坐标会保持各自输入层级。`,-1),m(v,{columns:c,rows:D})]),m(C,{"section-id":`api-complete`,title:`完整公开 API`,description:`完整展示 ViewService 属性、所有方法重载、参数和返回值，以及两个动画选项类型与坐标、像素类型。`,"type-names":[`ViewService`,`ViewAnimationOptions`,`FlyToOptions`,`Coordinate`,`Pixel`]}),u(`section`,U,[S[28]||=u(`h2`,{class:`doc-h2`},`坐标输入契约`,-1),m(M,{type:`warning`,closable:!1,"show-icon":``,title:`三维单点必须放在嵌套数组中`},{default:p(()=>[...S[27]||=[o(` 直接传入 `,-1),u(`code`,null,`[x, y, z]`,-1),o(` 会按“奇数长度的二维扁平数组”拒绝；三维单点应写为 `,-1),u(`code`,null,`[[x, y, z]]`,-1),o(`。 `,-1)]]),_:1}),S[29]||=u(`ul`,{class:`doc-list core-contract-list`},[u(`li`,null,`扁平数组必须非空、长度为偶数，并始终按二维坐标解释。`),u(`li`,null,`嵌套坐标允许二维或三维，Z 值原样保留。`),u(`li`,null,`输入必须是普通、稠密且只包含有限数值的数组。`),u(`li`,null,`转换不会修改输入，返回冻结的新数组；无效输入抛出 InvalidArgumentError。`)],-1)]),u(`section`,W,[S[35]||=u(`h2`,{class:`doc-h2`},`相关导出类型`,-1),u(`div`,G,[m(y,{kind:`type`,to:`/api/types#api-type-view-service`},{default:p(()=>[...S[30]||=[o(`ViewService`,-1)]]),_:1}),m(y,{kind:`type`,to:`/api/types#api-type-view-animation-options`},{default:p(()=>[...S[31]||=[o(`ViewAnimationOptions`,-1)]]),_:1}),m(y,{kind:`type`,to:`/api/types#api-type-fly-to-options`},{default:p(()=>[...S[32]||=[o(`FlyToOptions`,-1)]]),_:1}),m(y,{kind:`type`,to:`/api/types#api-type-coordinate`},{default:p(()=>[...S[33]||=[o(`Coordinate`,-1)]]),_:1}),m(y,{kind:`type`,to:`/api/types#api-type-pixel`},{default:p(()=>[...S[34]||=[o(`Pixel`,-1)]]),_:1})])])]),u(`aside`,K,[m(_,{title:`视图（View）`,items:r})])])}}});export{q as default};