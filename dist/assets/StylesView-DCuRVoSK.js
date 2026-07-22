import{A as e,At as t,B as n,M as r,N as i,Nt as a,P as o,Q as s,R as c,T as l,ct as u,fn as d,it as f,j as p,ot as m,tt as h,x as g,xt as _,z as v,zt as y}from"./TypeExpression-D6csDz4V.js";import{B as b,H as x,O as S,V as C,W as w,a as T,n as E,t as D,z as O}from"./index-4uKXPGRf.js";var k=[`data-preview-mode`],A={class:`example-demo__control-panel pattern-fill-demo__control-panel`},j={class:`example-demo__control-grid pattern-fill-demo__controls`},M={class:`example-demo__action-row pattern-fill-demo__actions`},N={class:`example-demo__action-group`},P={class:`example-demo__action-buttons pattern-fill-demo__action-buttons`},F={class:`example-demo__feedback pattern-fill-demo__status`,"aria-label":`纹理示例当前状态`},ee={class:`pattern-fill-demo__stage-wrap`},te=`docs-elements-pattern-fill`,I=`pattern-fill-elements`,ne=7,re=6.25,L=g(n({__name:`PatternFillDemo`,setup(n,{expose:i}){let g=[{value:`diagonal`,label:`斜线 diagonal`,mapLabel:`斜线`},{value:`cross`,label:`交叉 cross`,mapLabel:`交叉`},{value:`dot`,label:`圆点 dot`,mapLabel:`圆点`},{value:`horizontal`,label:`水平 horizontal`,mapLabel:`水平`},{value:`vertical`,label:`垂直 vertical`,mapLabel:`垂直`}],y=[4,8,16,32,64,128],b=[[115,40.75],[116.45,40.75],[117.9,40.75],[115.75,39.95],[117.2,39.95]],x=[`pattern-preview-polygon`,`pattern-preview-symbol`,`pattern-preview-text-fill`,`pattern-preview-text-background`],S=t(null),C=a(null),w=a(null),D=t(`wide`),O=t(`diagonal`),L=t(`#2563eb`),R=t(`rgba(255, 255, 255, 0.78)`),z=t(16),B=t(3),V=t(3),H=t(`set`),U=null,W=e(()=>g.find(({value:e})=>e===O.value)?.label??O.value),G=e=>e<=520?`narrow`:`wide`,K=e=>e===`narrow`?re:ne,q=()=>K(S.value===null?D.value:G(S.value.clientWidth)),J=()=>({type:`pattern`,pattern:O.value,color:L.value??`#2563eb`,size:z.value,...O.value===`dot`?{dotRadius:V.value}:{lineWidth:B.value},backgroundColor:R.value??`rgba(255, 255, 255, 0.78)`}),Y=()=>({color:L.value??`#2563eb`,size:z.value,...O.value===`dot`?{dotRadius:V.value}:{lineWidth:B.value},backgroundColor:R.value??`rgba(255, 255, 255, 0.78)`}),X=(e,t,n,r=.23,i=.18)=>e.view.toProjectedCoordinates([[t-r,n-i],[t+r,n-i],[t+r,n+i],[t-r,n+i]]),ie=(e,t)=>({fill:{type:`pattern`,pattern:e,color:`#2563eb`,size:16,lineWidth:2,dotRadius:2.6,backgroundColor:`rgba(239, 246, 255, 0.88)`},strokes:[{color:`#1d4ed8`,width:2}],text:{text:t,fontSize:13,fontWeight:`bold`,fill:{type:`solid`,color:`#0f172a`},stroke:{color:`#ffffff`,width:3},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.86)`},padding:[4,7,4,7]}}),Z=e=>{g.forEach(({value:t,mapLabel:n},r)=>{let[i,a]=b[r]??[116.45,40.75];e.elements.add({id:`pattern-gallery-${t}`,layerId:I,module:`pattern-gallery`,geometry:{type:`polygon`,controlPoints:X(e,i,a,.28,.18)},style:ie(t,n)})})},ae=e=>{e.elements.add({id:x[0],layerId:I,module:`pattern-preview`,geometry:{type:`polygon`,controlPoints:X(e,115.2,38.9,.38,.25)}}),e.elements.add({id:x[1],layerId:I,module:`pattern-preview`,geometry:{type:`point`,controlPoints:e.view.toProjectedCoordinates([[117.7,38.9]])}}),e.elements.add({id:x[2],layerId:I,module:`pattern-preview`,geometry:{type:`point`,controlPoints:e.view.toProjectedCoordinates([[115.2,37.85]])}}),e.elements.add({id:x[3],layerId:I,module:`pattern-preview`,geometry:{type:`point`,controlPoints:e.view.toProjectedCoordinates([[117.7,37.85]])}})},Q=()=>{let e=C.value;if(e===null)return;let t=J();e.styles.set({id:x[0]},{fill:t,strokes:[{color:`#0f766e`,width:3}],text:{text:`Polygon.fill`,fontSize:14,fontWeight:`bold`,fill:{type:`solid`,color:`#0f172a`},stroke:{color:`#ffffff`,width:3}}}),e.styles.set({id:x[1]},{symbol:{type:`circle`,radius:34,fill:t,stroke:{color:`#0f766e`,width:4}},text:{text:`CircleSymbol.fill`,fontSize:13,offsetY:52,fill:{type:`solid`,color:`#0f172a`},stroke:{color:`#ffffff`,width:3}}}),e.styles.set({id:x[2]},{text:{text:`Text.fill`,fontSize:27,fontWeight:`bold`,fill:t,stroke:{color:`#ffffff`,width:4},backgroundFill:{type:`solid`,color:`rgba(15, 23, 42, 0.88)`},backgroundStroke:{color:`rgba(255, 255, 255, 0.92)`,width:2},padding:[8,10,8,10]}}),e.styles.set({id:x[3]},{text:{text:`Text.backgroundFill`,fontSize:17,fontWeight:`bold`,fill:{type:`solid`,color:`#0f172a`},stroke:{color:`#ffffff`,width:2},backgroundFill:t,backgroundStroke:{color:`#0f766e`,width:2},padding:[12,14,12,14]}}),H.value=`set`},oe=()=>{let e=C.value;if(e===null)return;let t=Y(),n=[[x[0],{fill:t}],[x[1],{symbol:{fill:t}}],[x[2],{text:{fill:t}}],[x[3],{text:{backgroundFill:t}}]];for(let[t,r]of n)e.styles.patch({id:t},r);H.value=`patch`},$=()=>{let e=C.value,t=w.value;e===null||t===null||e.view.animateFlyTo(t,{zoom:q(),duration:450})};return i({reset:()=>{O.value=`diagonal`,L.value=`#2563eb`,R.value=`rgba(255, 255, 255, 0.78)`,z.value=16,B.value=3,V.value=3,Q(),$()},focus:$}),h(()=>{if(S.value===null)return;D.value=G(S.value.clientWidth);let e=T({id:te,target:S.value,view:{zoom:q()},controls:{zoom:!0,rotate:!1,attribution:!0}});E(e,`vector`).update({opacity:.42}),e.layers.add({kind:`vector`,id:I,zIndex:30,declutter:!1}),w.value=e.view.toProjectedCoordinates([116.45,39.3]),C.value=e,Z(e),ae(e),Q(),$(),U=new ResizeObserver(([t])=>{if(t===void 0)return;let n=G(t.contentRect.width);n!==D.value&&(D.value=n,e.view.setZoom(K(n)))}),U.observe(S.value)}),s(()=>{U?.disconnect(),U=null,C.value?.destroy(),C.value=null,w.value=null}),(e,t)=>{let n=u(`el-alert`),i=u(`el-option`),a=u(`el-select`),s=u(`el-form-item`),h=u(`el-color-picker`),b=u(`el-slider`),x=u(`el-button`),C=u(`el-tag`);return f(),o(`div`,{class:`example-demo pattern-fill-demo`,"data-preview-mode":D.value},[p(`div`,A,[v(n,{class:`pattern-fill-demo__alert`,type:`info`,closable:!1,"show-icon":``,title:`纹理尺寸使用 4 / 8 / 16 / 32 / 64 / 128 六档缓存值；dot 调整圆点半径，其余纹理调整线宽。`}),p(`div`,j,[v(s,{label:`纹理类型`},{default:_(()=>[v(a,{modelValue:O.value,"onUpdate:modelValue":t[0]||=e=>O.value=e,"aria-label":`纹理类型`,onChange:Q},{default:_(()=>[(f(),o(l,null,m(g,e=>v(i,{key:e.value,label:e.label,value:e.value},null,8,[`label`,`value`])),64))]),_:1},8,[`modelValue`])]),_:1}),v(s,{label:`前景色`},{default:_(()=>[v(h,{modelValue:L.value,"onUpdate:modelValue":t[1]||=e=>L.value=e,"show-alpha":``,"aria-label":`纹理前景色`},null,8,[`modelValue`])]),_:1}),v(s,{label:`背景色`},{default:_(()=>[v(h,{modelValue:R.value,"onUpdate:modelValue":t[2]||=e=>R.value=e,"show-alpha":``,"aria-label":`纹理背景色`},null,8,[`modelValue`])]),_:1}),v(s,{label:`单元尺寸（离散）`},{default:_(()=>[v(a,{modelValue:z.value,"onUpdate:modelValue":t[3]||=e=>z.value=e,"aria-label":`纹理单元尺寸`},{default:_(()=>[(f(),o(l,null,m(y,e=>v(i,{key:e,label:`${e}px`,value:e},null,8,[`label`,`value`])),64))]),_:1},8,[`modelValue`])]),_:1}),O.value===`dot`?(f(),r(s,{key:1,label:`圆点半径`},{default:_(()=>[v(b,{modelValue:V.value,"onUpdate:modelValue":t[5]||=e=>V.value=e,min:1,max:8,step:.5,"show-input":``,"aria-label":`纹理圆点半径`},null,8,[`modelValue`])]),_:1})):(f(),r(s,{key:0,label:`线宽`},{default:_(()=>[v(b,{modelValue:B.value,"onUpdate:modelValue":t[4]||=e=>B.value=e,min:1,max:8,step:.5,"show-input":``,"aria-label":`纹理线宽`},null,8,[`modelValue`])]),_:1}))]),p(`div`,M,[p(`div`,N,[p(`div`,P,[v(x,{type:`primary`,onClick:Q},{default:_(()=>[...t[6]||=[c(`应用 styles.set()`,-1)]]),_:1}),v(x,{onClick:oe},{default:_(()=>[...t[7]||=[c(`应用 styles.patch()`,-1)]]),_:1})])]),p(`div`,F,[v(C,{effect:`plain`},{default:_(()=>[c(d(W.value),1)]),_:1}),v(C,{type:H.value===`set`?`success`:`warning`,effect:`plain`},{default:_(()=>[c(`最近操作：`+d(H.value),1)]),_:1},8,[`type`])])])]),p(`div`,ee,[p(`div`,{ref_key:`mapTarget`,ref:S,class:`example-stage pattern-fill-demo__stage`},null,512),t[8]||=p(`div`,{class:`pattern-fill-demo__legend`},[p(`span`,null,[p(`strong`,null,`纹理画廊：`),c(`地图上部按 3 + 2 排列五种纹理。`)]),p(`span`,null,[p(`strong`,null,`应用目标：`),c(`地图下部按 2 + 2 展示 Polygon、CircleSymbol、Text.fill 与 Text.backgroundFill。`)])],-1)])],8,k)}}}),[[`__scopeId`,`data-v-8c8a034d`]]),R=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, PatternFillSpec, StylePatch, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

type PatternName = PatternFillSpec['pattern'];
type PatternSize = 4 | 8 | 16 | 32 | 64 | 128;
type PreviewMode = 'wide' | 'narrow';

const EARTH_ID = 'docs-elements-pattern-fill';
const LAYER_ID = 'pattern-fill-elements';
const PREVIEW_ZOOM = 7;
const NARROW_PREVIEW_ZOOM = 6.25;
const patterns = [
  { value: 'diagonal', label: '斜线 diagonal', mapLabel: '斜线' },
  { value: 'cross', label: '交叉 cross', mapLabel: '交叉' },
  { value: 'dot', label: '圆点 dot', mapLabel: '圆点' },
  { value: 'horizontal', label: '水平 horizontal', mapLabel: '水平' },
  { value: 'vertical', label: '垂直 vertical', mapLabel: '垂直' }
] as const satisfies readonly { value: PatternName; label: string; mapLabel: string }[];
const patternSizes = [4, 8, 16, 32, 64, 128] as const satisfies readonly PatternSize[];
const galleryPositions = [
  [115, 40.75],
  [116.45, 40.75],
  [117.9, 40.75],
  [115.75, 39.95],
  [117.2, 39.95]
] as const;

const previewIds = ['pattern-preview-polygon', 'pattern-preview-symbol', 'pattern-preview-text-fill', 'pattern-preview-text-background'] as const;
const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const focusCenter = shallowRef<Coordinate | null>(null);
const previewMode = ref<PreviewMode>('wide');
const selectedPattern = ref<PatternName>('diagonal');
const foreground = ref<string | null>('#2563eb');
const background = ref<string | null>('rgba(255, 255, 255, 0.78)');
const size = ref<PatternSize>(16);
const lineWidth = ref(3);
const dotRadius = ref(3);
const latestAction = ref<'set' | 'patch'>('set');
let previewResizeObserver: ResizeObserver | null = null;

const selectedPatternLabel = computed(() => patterns.find(({ value }) => value === selectedPattern.value)?.label ?? selectedPattern.value);
const previewModeForWidth = (width: number): PreviewMode => (width <= 520 ? 'narrow' : 'wide');
const previewZoomForMode = (mode: PreviewMode) => (mode === 'narrow' ? NARROW_PREVIEW_ZOOM : PREVIEW_ZOOM);
const previewZoom = () => previewZoomForMode(mapTarget.value === null ? previewMode.value : previewModeForWidth(mapTarget.value.clientWidth));

const patternFill = (): PatternFillSpec => ({
  type: 'pattern',
  pattern: selectedPattern.value,
  color: foreground.value ?? '#2563eb',
  size: size.value,
  ...(selectedPattern.value === 'dot' ? { dotRadius: dotRadius.value } : { lineWidth: lineWidth.value }),
  backgroundColor: background.value ?? 'rgba(255, 255, 255, 0.78)'
});

const patternPatch = (): Omit<PatternFillSpec, 'type' | 'pattern'> => ({
  color: foreground.value ?? '#2563eb',
  size: size.value,
  ...(selectedPattern.value === 'dot' ? { dotRadius: dotRadius.value } : { lineWidth: lineWidth.value }),
  backgroundColor: background.value ?? 'rgba(255, 255, 255, 0.78)'
});

const polygonAround = (earth: Earth, longitude: number, latitude: number, dx = 0.23, dy = 0.18) =>
  earth.view.toProjectedCoordinates([
    [longitude - dx, latitude - dy],
    [longitude + dx, latitude - dy],
    [longitude + dx, latitude + dy],
    [longitude - dx, latitude + dy]
  ]);

const galleryStyle = (pattern: PatternName, label: string): StyleSpec => ({
  fill: {
    type: 'pattern',
    pattern,
    color: '#2563eb',
    size: 16,
    lineWidth: 2,
    dotRadius: 2.6,
    backgroundColor: 'rgba(239, 246, 255, 0.88)'
  },
  strokes: [{ color: '#1d4ed8', width: 2 }],
  text: {
    text: label,
    fontSize: 13,
    fontWeight: 'bold',
    fill: { type: 'solid', color: '#0f172a' },
    stroke: { color: '#ffffff', width: 3 },
    backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.86)' },
    padding: [4, 7, 4, 7]
  }
});

const addGallery = (earth: Earth) => {
  patterns.forEach(({ value, mapLabel }, index) => {
    const [longitude, latitude] = galleryPositions[index] ?? [116.45, 40.75];
    earth.elements.add({
      id: \`pattern-gallery-\${value}\`,
      layerId: LAYER_ID,
      module: 'pattern-gallery',
      geometry: { type: 'polygon', controlPoints: polygonAround(earth, longitude, latitude, 0.28, 0.18) },
      style: galleryStyle(value, mapLabel)
    });
  });
};

const addPreviewTargets = (earth: Earth) => {
  earth.elements.add({
    id: previewIds[0],
    layerId: LAYER_ID,
    module: 'pattern-preview',
    geometry: { type: 'polygon', controlPoints: polygonAround(earth, 115.2, 38.9, 0.38, 0.25) }
  });
  earth.elements.add({
    id: previewIds[1],
    layerId: LAYER_ID,
    module: 'pattern-preview',
    geometry: { type: 'point', controlPoints: earth.view.toProjectedCoordinates([[117.7, 38.9]]) }
  });
  earth.elements.add({
    id: previewIds[2],
    layerId: LAYER_ID,
    module: 'pattern-preview',
    geometry: { type: 'point', controlPoints: earth.view.toProjectedCoordinates([[115.2, 37.85]]) }
  });
  earth.elements.add({
    id: previewIds[3],
    layerId: LAYER_ID,
    module: 'pattern-preview',
    geometry: { type: 'point', controlPoints: earth.view.toProjectedCoordinates([[117.7, 37.85]]) }
  });
};

// #region pattern-fill-set
const applyPattern = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  const fill = patternFill();

  earth.styles.set(
    { id: previewIds[0] },
    {
      fill,
      strokes: [{ color: '#0f766e', width: 3 }],
      text: {
        text: 'Polygon.fill',
        fontSize: 14,
        fontWeight: 'bold',
        fill: { type: 'solid', color: '#0f172a' },
        stroke: { color: '#ffffff', width: 3 }
      }
    }
  );
  earth.styles.set(
    { id: previewIds[1] },
    {
      symbol: { type: 'circle', radius: 34, fill, stroke: { color: '#0f766e', width: 4 } },
      text: {
        text: 'CircleSymbol.fill',
        fontSize: 13,
        offsetY: 52,
        fill: { type: 'solid', color: '#0f172a' },
        stroke: { color: '#ffffff', width: 3 }
      }
    }
  );
  earth.styles.set(
    { id: previewIds[2] },
    {
      text: {
        text: 'Text.fill',
        fontSize: 27,
        fontWeight: 'bold',
        fill,
        stroke: { color: '#ffffff', width: 4 },
        backgroundFill: { type: 'solid', color: 'rgba(15, 23, 42, 0.88)' },
        backgroundStroke: { color: 'rgba(255, 255, 255, 0.92)', width: 2 },
        padding: [8, 10, 8, 10]
      }
    }
  );
  earth.styles.set(
    { id: previewIds[3] },
    {
      text: {
        text: 'Text.backgroundFill',
        fontSize: 17,
        fontWeight: 'bold',
        fill: { type: 'solid', color: '#0f172a' },
        stroke: { color: '#ffffff', width: 2 },
        backgroundFill: fill,
        backgroundStroke: { color: '#0f766e', width: 2 },
        padding: [12, 14, 12, 14]
      }
    }
  );
  latestAction.value = 'set';
};
// #endregion pattern-fill-set

// #region pattern-fill-patch
const patchPatternParameters = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  const patch = patternPatch();
  const patches: readonly [string, StylePatch][] = [
    [previewIds[0], { fill: patch }],
    [previewIds[1], { symbol: { fill: patch } }],
    [previewIds[2], { text: { fill: patch } }],
    [previewIds[3], { text: { backgroundFill: patch } }]
  ];
  for (const [id, stylePatch] of patches) earth.styles.patch({ id }, stylePatch);
  latestAction.value = 'patch';
};
// #endregion pattern-fill-patch

const focus = () => {
  const earth = earthRef.value;
  const center = focusCenter.value;
  if (earth === null || center === null) return;
  earth.view.animateFlyTo(center, { zoom: previewZoom(), duration: 450 });
};

const reset = () => {
  selectedPattern.value = 'diagonal';
  foreground.value = '#2563eb';
  background.value = 'rgba(255, 255, 255, 0.78)';
  size.value = 16;
  lineWidth.value = 3;
  dotRadius.value = 3;
  applyPattern();
  focus();
};

defineExpose({ reset, focus });

onMounted(() => {
  if (mapTarget.value === null) return;
  previewMode.value = previewModeForWidth(mapTarget.value.clientWidth);
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: previewZoom() },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.42 });
  earth.layers.add({ kind: 'vector', id: LAYER_ID, zIndex: 30, declutter: false });
  focusCenter.value = earth.view.toProjectedCoordinates([116.45, 39.3]);
  earthRef.value = earth;
  addGallery(earth);
  addPreviewTargets(earth);
  applyPattern();
  focus();

  previewResizeObserver = new ResizeObserver(([entry]) => {
    if (entry === undefined) return;
    const nextMode = previewModeForWidth(entry.contentRect.width);
    if (nextMode === previewMode.value) return;
    previewMode.value = nextMode;
    earth.view.setZoom(previewZoomForMode(nextMode));
  });
  previewResizeObserver.observe(mapTarget.value);
});

onBeforeUnmount(() => {
  previewResizeObserver?.disconnect();
  previewResizeObserver = null;
  earthRef.value?.destroy();
  earthRef.value = null;
  focusCenter.value = null;
});
<\/script>

<template>
  <div class="example-demo pattern-fill-demo" :data-preview-mode="previewMode">
    <div class="example-demo__control-panel pattern-fill-demo__control-panel">
      <el-alert
        class="pattern-fill-demo__alert"
        type="info"
        :closable="false"
        show-icon
        title="纹理尺寸使用 4 / 8 / 16 / 32 / 64 / 128 六档缓存值；dot 调整圆点半径，其余纹理调整线宽。"
      />
      <div class="example-demo__control-grid pattern-fill-demo__controls">
        <el-form-item label="纹理类型">
          <el-select v-model="selectedPattern" aria-label="纹理类型" @change="applyPattern">
            <el-option v-for="item in patterns" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="前景色">
          <el-color-picker v-model="foreground" show-alpha aria-label="纹理前景色" />
        </el-form-item>
        <el-form-item label="背景色">
          <el-color-picker v-model="background" show-alpha aria-label="纹理背景色" />
        </el-form-item>
        <el-form-item label="单元尺寸（离散）">
          <el-select v-model="size" aria-label="纹理单元尺寸">
            <el-option v-for="item in patternSizes" :key="item" :label="\`\${item}px\`" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="selectedPattern !== 'dot'" label="线宽">
          <el-slider v-model="lineWidth" :min="1" :max="8" :step="0.5" show-input aria-label="纹理线宽" />
        </el-form-item>
        <el-form-item v-else label="圆点半径">
          <el-slider v-model="dotRadius" :min="1" :max="8" :step="0.5" show-input aria-label="纹理圆点半径" />
        </el-form-item>
      </div>

      <div class="example-demo__action-row pattern-fill-demo__actions">
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons pattern-fill-demo__action-buttons">
            <el-button type="primary" @click="applyPattern">应用 styles.set()</el-button>
            <el-button @click="patchPatternParameters">应用 styles.patch()</el-button>
          </div>
        </div>
        <div class="example-demo__feedback pattern-fill-demo__status" aria-label="纹理示例当前状态">
          <el-tag effect="plain">{{ selectedPatternLabel }}</el-tag>
          <el-tag :type="latestAction === 'set' ? 'success' : 'warning'" effect="plain">最近操作：{{ latestAction }}</el-tag>
        </div>
      </div>
    </div>

    <div class="pattern-fill-demo__stage-wrap">
      <div ref="mapTarget" class="example-stage pattern-fill-demo__stage"></div>
      <div class="pattern-fill-demo__legend">
        <span><strong>纹理画廊：</strong>地图上部按 3 + 2 排列五种纹理。</span>
        <span><strong>应用目标：</strong>地图下部按 2 + 2 展示 Polygon、CircleSymbol、Text.fill 与 Text.backgroundFill。</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern-fill-demo {
  container: pattern-fill / inline-size;
}

.pattern-fill-demo__alert {
  margin: 0;
}

.pattern-fill-demo__controls {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 14px 16px;
}

.pattern-fill-demo__controls :deep(.el-form-item) {
  margin: 0;
}

.pattern-fill-demo__controls :deep(.el-select),
.pattern-fill-demo__controls :deep(.el-slider) {
  width: 100%;
}

.pattern-fill-demo__stage-wrap {
  display: grid;
  gap: 10px;
}

.pattern-fill-demo__stage {
  height: 520px;
}

.pattern-fill-demo__legend {
  display: grid;
  gap: 4px;
  padding: 10px 12px;
  border: 1px solid var(--doc-border);
  border-radius: 10px;
  background: var(--doc-surface);
  color: var(--doc-text);
  font-size: 12px;
}

@container pattern-fill (max-width: 520px) {
  .pattern-fill-demo__stage {
    height: 420px;
  }
}
</style>
`,z={class:`example-demo styles-demo`},B={class:`example-demo__control-panel`},V={class:`example-demo__action-group styles-demo__control-group`},H={class:`example-demo__action-buttons`},U={class:`example-demo__action-group styles-demo__control-group`},W={class:`example-demo__action-buttons`},G={class:`example-demo__feedback styles-demo__status`,"aria-live":`polite`},K={class:`styles-demo__stage-wrap`},q={key:0,class:`styles-demo__spotlight`,"aria-hidden":`true`},J=`docs-elements-styles`,Y=`style-preview`,X=`style-preview-elements`,ie=g(n({__name:`StylesDemo`,setup(n){let g=Object.keys(S),b=new Set([`point-default`,`icon-default`,`transform-handle`]),x={"point-default":`默认圆点`,"icon-default":`默认图标`,"line-default":`默认线`,"arrow-default":`末端箭头`,"polygon-default":`默认面`,"measure-default":`测量样式`,"draw-preview":`绘制预览`,"transform-handle":`变换锚点`},C=t(null),w=a(null),D=a(null),O=t(`point-default`),k=t(`#f56c6c`),A=t(`set`),j=e(()=>b.has(O.value)),M=e(()=>A.value===`set`?`完整替换 set()`:`局部合并 patch()`),N=e=>b.has(O.value)?{type:`point`,controlPoints:[e]}:O.value===`polygon-default`?{type:`polygon`,controlPoints:[[e[0]-22e3,e[1]-15e3],[e[0]+22e3,e[1]-15e3],[e[0]+17e3,e[1]+17e3],[e[0]-17e3,e[1]+17e3]]}:{type:`polyline`,controlPoints:[[e[0]-3e4,e[1]-13e3],e,[e[0]+3e4,e[1]+13e3]]},P=()=>{let e=w.value,t=D.value;e===null||t===null||e.view.animateFlyTo(t,{zoom:j.value?12:10.2,duration:450})},F=()=>{let e=w.value,t=D.value;e===null||t===null||(e.elements.remove({id:Y}),e.elements.add({id:Y,module:`style-preview`,layerId:X,geometry:N(t)}),e.styles.set({id:Y},S[O.value]),A.value=`set`,P())},ee=()=>{let e=w.value;if(e===null)return;let t=k.value??`#f56c6c`,n;n=O.value===`point-default`||O.value===`transform-handle`?{symbol:{fill:{color:t}}}:O.value===`icon-default`?{symbol:{color:t}}:O.value===`polygon-default`?{fill:{color:t}}:{strokes:[{color:t,width:5,lineCap:`round`,lineJoin:`round`}]},e.styles.patch({id:Y},n),A.value=`patch`,P()};return h(()=>{if(C.value===null)return;let e=T({id:J,target:C.value,view:{zoom:12},controls:{zoom:!0,rotate:!1,attribution:!0}});E(e,`vector`).update({opacity:.5}),e.layers.add({kind:`vector`,id:X,zIndex:20,declutter:!0}),D.value=e.view.toProjectedCoordinates([116.4074,39.9042]),w.value=e,F()}),s(()=>{w.value?.destroy(),w.value=null,D.value=null}),(e,t)=>{let n=u(`el-option`),a=u(`el-select`),s=u(`el-form-item`),h=u(`el-button`),b=u(`el-color-picker`),S=u(`el-form`),w=u(`el-tag`),T=u(`el-descriptions-item`),E=u(`el-descriptions`);return f(),o(`div`,z,[p(`div`,B,[v(S,{class:`example-demo__control-grid styles-demo__controls`,"label-position":`top`},{default:_(()=>[p(`div`,V,[t[3]||=p(`strong`,null,`完整替换`,-1),v(s,{label:`样式预设`},{default:_(()=>[v(a,{modelValue:O.value,"onUpdate:modelValue":t[0]||=e=>O.value=e,onChange:F},{default:_(()=>[(f(!0),o(l,null,m(y(g),e=>(f(),r(n,{key:e,label:`${x[e]} · ${e}`,value:e},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),_:1}),p(`div`,H,[v(h,{type:`primary`,onClick:F},{default:_(()=>[...t[2]||=[c(`应用 styles.set()`,-1)]]),_:1})])]),p(`div`,U,[t[5]||=p(`strong`,null,`保留其余字段`,-1),v(s,{label:`局部颜色`},{default:_(()=>[v(b,{modelValue:k.value,"onUpdate:modelValue":t[1]||=e=>k.value=e,"aria-label":`局部更新颜色`},null,8,[`modelValue`])]),_:1}),p(`div`,W,[v(h,{onClick:ee},{default:_(()=>[...t[4]||=[c(`应用 styles.patch()`,-1)]]),_:1})])])]),_:1}),p(`div`,G,[v(w,{type:`primary`,effect:`dark`},{default:_(()=>[c(d(x[O.value]),1)]),_:1}),v(w,{effect:`plain`},{default:_(()=>[p(`code`,null,d(O.value),1)]),_:1}),v(w,{type:A.value===`set`?`success`:`warning`,effect:`plain`},{default:_(()=>[c(`当前结果：`+d(M.value),1)]),_:1},8,[`type`])])]),p(`div`,K,[p(`div`,{ref_key:`mapTarget`,ref:C,class:`example-stage styles-demo__stage`},null,512),t[6]||=p(`div`,{class:`styles-demo__map-label`},`预览对象`,-1),j.value?(f(),o(`div`,q)):i(``,!0)]),v(E,{class:`styles-demo__semantics`,column:2,border:``,size:`small`},{default:_(()=>[v(T,{label:`styles.set()`},{default:_(()=>[...t[7]||=[c(`用选中的 `,-1),p(`code`,null,`StyleSpec`,-1),c(` 完整替换当前样式。`,-1)]]),_:1}),v(T,{label:`styles.patch()`},{default:_(()=>[...t[8]||=[c(`只合并颜色等局部字段，未提供的字段继续保留。`,-1)]]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-a2449cff`]]),Z=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { stylePresets, useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, ShapeInput, StylePatch, StylePresetName } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-elements-styles';
const PREVIEW_ID = 'style-preview';
const PREVIEW_LAYER_ID = 'style-preview-elements';
const presetNames = Object.keys(stylePresets) as StylePresetName[];
const pointPresetNames = new Set<StylePresetName>(['point-default', 'icon-default', 'transform-handle']);

const presetLabels: Record<StylePresetName, string> = {
  'point-default': '默认圆点',
  'icon-default': '默认图标',
  'line-default': '默认线',
  'arrow-default': '末端箭头',
  'polygon-default': '默认面',
  'measure-default': '测量样式',
  'draw-preview': '绘制预览',
  'transform-handle': '变换锚点'
};

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const previewCenter = shallowRef<Coordinate | null>(null);
const presetName = ref<StylePresetName>('point-default');
const accentColor = ref<string | null>('#f56c6c');
const currentAction = ref<'set' | 'patch'>('set');

const isPointPreset = computed(() => pointPresetNames.has(presetName.value));
const currentActionLabel = computed(() => (currentAction.value === 'set' ? '完整替换 set()' : '局部合并 patch()'));

const geometryForPreset = (center: Coordinate): ShapeInput => {
  if (pointPresetNames.has(presetName.value)) return { type: 'point', controlPoints: [center] };
  if (presetName.value === 'polygon-default') {
    return {
      type: 'polygon',
      controlPoints: [
        [center[0] - 22_000, center[1] - 15_000],
        [center[0] + 22_000, center[1] - 15_000],
        [center[0] + 17_000, center[1] + 17_000],
        [center[0] - 17_000, center[1] + 17_000]
      ]
    };
  }
  return {
    type: 'polyline',
    controlPoints: [[center[0] - 30_000, center[1] - 13_000], center, [center[0] + 30_000, center[1] + 13_000]]
  };
};

const focusPreview = () => {
  const earth = earthRef.value;
  const center = previewCenter.value;
  if (earth === null || center === null) return;
  earth.view.animateFlyTo(center, { zoom: isPointPreset.value ? 12 : 10.2, duration: 450 });
};

// #region style-preset
const applyPreset = () => {
  const earth = earthRef.value;
  const center = previewCenter.value;
  if (earth === null || center === null) return;

  earth.elements.remove({ id: PREVIEW_ID });
  earth.elements.add({
    id: PREVIEW_ID,
    module: 'style-preview',
    layerId: PREVIEW_LAYER_ID,
    geometry: geometryForPreset(center)
  });
  earth.styles.set({ id: PREVIEW_ID }, stylePresets[presetName.value]);
  currentAction.value = 'set';
  focusPreview();
};
// #endregion style-preset

// #region style-patch
const patchAccent = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  const patchColor = accentColor.value ?? '#f56c6c';
  let patch: StylePatch;
  if (presetName.value === 'point-default' || presetName.value === 'transform-handle') {
    patch = { symbol: { fill: { color: patchColor } } };
  } else if (presetName.value === 'icon-default') {
    patch = { symbol: { color: patchColor } };
  } else if (presetName.value === 'polygon-default') {
    patch = { fill: { color: patchColor } };
  } else {
    patch = { strokes: [{ color: patchColor, width: 5, lineCap: 'round', lineJoin: 'round' }] };
  }
  earth.styles.patch({ id: PREVIEW_ID }, patch);
  currentAction.value = 'patch';
  focusPreview();
};
// #endregion style-patch

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 12 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.5 });
  earth.layers.add({ kind: 'vector', id: PREVIEW_LAYER_ID, zIndex: 20, declutter: true });
  previewCenter.value = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earthRef.value = earth;
  applyPreset();
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  previewCenter.value = null;
});
<\/script>

<template>
  <div class="example-demo styles-demo">
    <div class="example-demo__control-panel">
      <el-form class="example-demo__control-grid styles-demo__controls" label-position="top">
        <div class="example-demo__action-group styles-demo__control-group">
          <strong>完整替换</strong>
          <el-form-item label="样式预设">
            <el-select v-model="presetName" @change="applyPreset">
              <el-option v-for="name in presetNames" :key="name" :label="\`\${presetLabels[name]} · \${name}\`" :value="name" />
            </el-select>
          </el-form-item>
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="applyPreset">应用 styles.set()</el-button>
          </div>
        </div>
        <div class="example-demo__action-group styles-demo__control-group">
          <strong>保留其余字段</strong>
          <el-form-item label="局部颜色">
            <el-color-picker v-model="accentColor" aria-label="局部更新颜色" />
          </el-form-item>
          <div class="example-demo__action-buttons">
            <el-button @click="patchAccent">应用 styles.patch()</el-button>
          </div>
        </div>
      </el-form>

      <div class="example-demo__feedback styles-demo__status" aria-live="polite">
        <el-tag type="primary" effect="dark">{{ presetLabels[presetName] }}</el-tag>
        <el-tag effect="plain"
          ><code>{{ presetName }}</code></el-tag
        >
        <el-tag :type="currentAction === 'set' ? 'success' : 'warning'" effect="plain">当前结果：{{ currentActionLabel }}</el-tag>
      </div>
    </div>

    <div class="styles-demo__stage-wrap">
      <div ref="mapTarget" class="example-stage styles-demo__stage"></div>
      <div class="styles-demo__map-label">预览对象</div>
      <div v-if="isPointPreset" class="styles-demo__spotlight" aria-hidden="true"></div>
    </div>

    <el-descriptions class="styles-demo__semantics" :column="2" border size="small">
      <el-descriptions-item label="styles.set()">用选中的 <code>StyleSpec</code> 完整替换当前样式。</el-descriptions-item>
      <el-descriptions-item label="styles.patch()">只合并颜色等局部字段，未提供的字段继续保留。</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.styles-demo__controls {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
}

.styles-demo__control-group {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 10px;
}

.styles-demo__control-group > strong {
  grid-column: 1 / -1;
}

.styles-demo__control-group :deep(.el-form-item) {
  min-width: 0;
  margin: 0;
}

.styles-demo__control-group :deep(.el-select) {
  width: 100%;
  max-width: 250px;
}

.styles-demo__stage-wrap {
  position: relative;
}

.styles-demo__stage {
  height: 460px;
}

.styles-demo__map-label {
  position: absolute;
  top: 14px;
  left: 50%;
  z-index: 2;
  padding: 5px 10px;
  border: 1px solid var(--el-color-primary-light-5);
  border-radius: 999px;
  background: color-mix(in srgb, var(--el-bg-color) 92%, transparent);
  color: var(--el-text-color-primary);
  font-size: 12px;
  font-weight: 700;
  transform: translateX(-50%);
  pointer-events: none;
}

.styles-demo__spotlight {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 58px;
  height: 58px;
  border: 2px dashed var(--el-color-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--el-color-primary) 15%, transparent);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.styles-demo__semantics {
  margin-top: 14px;
}

@media (max-width: 640px) {
  .styles-demo__control-group {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .styles-demo__control-group :deep(.el-form-item),
  .styles-demo__control-group :deep(.el-select) {
    width: 100%;
    max-width: 100%;
  }

  .styles-demo__stage {
    height: 380px;
  }
}
</style>
`,ae={class:`doc-page-layout`},Q={class:`doc-page`},oe={id:`overview`,class:`doc-prose`},$={id:`style-fields`,class:`doc-prose`},se={id:`presets`,class:`doc-prose`},ce={id:`example-element-styles`,class:`doc-prose`},le={id:`example-pattern-fill`,class:`doc-prose`},ue={id:`native-style`,class:`doc-prose`},de={id:`api-actions`,class:`doc-prose`},fe={class:`doc-page-layout__aside`},pe=n({__name:`StylesView`,setup(e){let n=`${D(Z,`style-preset`)}\n\n${D(Z,`style-patch`)}`,r=`${D(R,`pattern-fill-set`)}\n\n${D(R,`pattern-fill-patch`)}`,i=t(null),a=()=>i.value?.reset(),s=()=>i.value?.focus(),l=[{id:`overview`,label:`结构化样式模型`},{id:`style-fields`,label:`StyleSpec 字段`},{id:`presets`,label:`内置 stylePresets`},{id:`example-element-styles`,label:`预设、set 与 patch`},{id:`example-pattern-fill`,label:`五种纹理与应用目标`},{id:`native-style`,label:`nativeStyle 边界`},{id:`api-actions`,label:`样式方法`},{id:`api`,label:`完整 API`}],d=[{prop:`name`,label:`字段`,width:150,presentation:`property`},{prop:`type`,label:`类型`,width:320,linkTypes:!0},{prop:`desc`,label:`说明`,width:430}],m=[{anchor:`api-style-symbol`,name:`symbol`,type:`CircleSymbolSpec | IconSymbolSpec`,desc:`Point 的圆点或图标`},{anchor:`api-style-strokes`,name:`strokes`,type:`StrokeSpec[]`,desc:`一层或多层描边，按数组顺序叠加`},{anchor:`api-style-fill`,name:`fill`,type:`SolidFillSpec | PatternFillSpec`,desc:`面图形的纯色或纹理填充`},{anchor:`api-style-text`,name:`text`,type:`TextSpec`,desc:`文字内容与外观`},{anchor:`api-style-decorations`,name:`decorations`,type:`ArrowDecorationSpec[]`,desc:`普通路径箭头；固定线饰使用 linework`},{anchor:`api-style-linework`,name:`linework`,type:`LineworkSpec`,desc:`由 lineStyles 生成的路径线饰`},{anchor:`api-style-z-index`,name:`zIndex`,type:`number`,desc:`同一图层内的样式绘制顺序`}],h=[{name:`point-default`,type:`Point`,desc:`蓝色圆点与白色边框`},{name:`icon-default`,type:`Point`,desc:`内置 Data URL 定位图标`},{name:`line-default`,type:`路径`,desc:`蓝色圆角实线`},{name:`arrow-default`,type:`路径`,desc:`蓝色实线与末端箭头`},{name:`polygon-default`,type:`闭合面`,desc:`蓝色边框与半透明填充`},{name:`measure-default`,type:`测量`,desc:`双层虚线、控制点与测量文字`},{name:`draw-preview`,type:`绘制`,desc:`绘制预览使用的高对比样式`},{name:`transform-handle`,type:`交互锚点`,desc:`橙色边框的白色控制点`}],g=[{prop:`name`,label:`方法`,width:170,presentation:`method`},{prop:`params`,label:`参数`,width:390,linkTypes:!0},{prop:`returns`,label:`返回值`,width:150,linkTypes:!0},{prop:`desc`,label:`说明`,width:410}],S=[{anchor:`api-method-style-set`,href:`/api/types#api-type-style-service-method-set`,name:`set`,params:`selector: ElementSelector, style: StyleInput`,returns:`void`,desc:`完整替换全部匹配 Element 的样式`},{anchor:`api-method-style-patch`,href:`/api/types#api-type-style-service-method-patch`,name:`patch`,params:`selector: ElementSelector, patch: StylePatch`,returns:`void`,desc:`逐层合并结构化样式；数组整体替换，undefined 删除字段`}],T=[`StyleInput`,`StyleSpec`,`StylePatch`,`ElementStyleState`,`StyleService`,`StylePresetName`,`CircleSymbolSpec`,`IconSymbolSpec`,`StrokeSpec`,`SolidFillSpec`,`PatternFillSpec`,`TextSpec`,`ArrowDecorationSpec`,`Color`,`NativeStyleRef`],E=[`stylePresets`];return(e,t)=>{let D=u(`el-alert`),k=u(`el-descriptions-item`),A=u(`el-descriptions`);return f(),o(`div`,ae,[p(`article`,Q,[t[50]||=p(`header`,{class:`doc-hero`},[p(`span`,{class:`doc-hero__eyebrow`},`地图元素`),p(`h1`,null,`样式（Styles）`),p(`p`,null,`StyleSpec 是可校验、可复制、可更新的业务样式；earth.styles 负责按 ElementSelector 完整替换或局部合并。`)],-1),p(`section`,oe,[t[7]||=p(`h2`,{class:`doc-h2`},`结构化样式模型`,-1),p(`p`,null,[v(w,{kind:`type`,to:`/api/types#api-type-style-input`},{default:_(()=>[...t[0]||=[c(`StyleInput`,-1)]]),_:1}),t[2]||=c(` 是结构化 `,-1),v(w,{kind:`type`,to:`/api/types#api-type-style-spec`},{default:_(()=>[...t[1]||=[c(`StyleSpec`,-1)]]),_:1}),t[3]||=c(` 与 OpenLayers `,-1),t[4]||=p(`code`,null,`nativeStyle`,-1),t[5]||=c(` 的互斥联合。日常业务优先使用结构化分支，它能参与快照、复制、StylePatch 和动画。 `,-1)]),v(D,{type:`success`,closable:!1,"show-icon":``,title:`样式也服从状态真源`},{default:_(()=>[...t[6]||=[c(` ElementState.style 保存规范样式或受控原生引用。直接修改 olFeature.getStyle() 不会反向写入业务状态，并可能在下一次投影时被覆盖。 `,-1)]]),_:1})]),p(`section`,$,[t[8]||=p(`h2`,{class:`doc-h2`},`StyleSpec 字段`,-1),v(C,{columns:d,rows:m})]),p(`section`,se,[t[12]||=p(`h2`,{class:`doc-h2`},`内置 stylePresets`,-1),p(`p`,null,[t[10]||=c(` 根入口运行时值 `,-1),v(w,{kind:`property`,to:`#api-value-style-presets`},{default:_(()=>[...t[9]||=[c(`stylePresets`,-1)]]),_:1}),t[11]||=c(` 提供八个命名预设。每次读取属性都会得到独立 StyleSpec，调用方修改一份对象不会污染以后读取的结果。 `,-1)]),t[13]||=p(`div`,{id:`api-value-style-presets`},null,-1),v(C,{columns:[{prop:`name`,label:`预设名`,width:220,presentation:`property`},{prop:`type`,label:`适用对象`,width:150},{prop:`desc`,label:`默认外观`,width:430}],rows:h})]),p(`section`,ce,[v(b,{title:`预设、set 与 patch`,source:y(Z),snippet:n,"source-lang":`vue`,"snippet-lang":`typescript`},{description:_(()=>[p(`p`,null,[t[16]||=c(` 示例从 stylePresets 选择独立样式，通过 `,-1),v(w,{kind:`method`,to:`#api-method-style-set`},{default:_(()=>[...t[14]||=[c(`styles.set`,-1)]]),_:1}),t[17]||=c(` 完整替换，再用 `,-1),v(w,{kind:`method`,to:`#api-method-style-patch`},{default:_(()=>[...t[15]||=[c(`styles.patch`,-1)]]),_:1}),t[18]||=c(` 只修改颜色。地图始终聚焦预览对象，上方标签明确区分完整替换与局部合并。 `,-1)])]),preview:_(()=>[v(ie)]),_:1},8,[`source`])]),p(`section`,le,[v(b,{title:`五种纹理与应用目标`,source:y(R),snippet:r,"source-lang":`vue`,"snippet-lang":`typescript`,"show-reset":``,"show-focus":``,onReset:a,onFocus:s},{description:_(()=>[p(`p`,null,[t[26]||=c(` 上排同时展示 `,-1),t[27]||=p(`code`,null,`diagonal`,-1),t[28]||=c(`、`,-1),t[29]||=p(`code`,null,`cross`,-1),t[30]||=c(`、`,-1),t[31]||=p(`code`,null,`dot`,-1),t[32]||=c(`、`,-1),t[33]||=p(`code`,null,`horizontal`,-1),t[34]||=c(` 与 `,-1),t[35]||=p(`code`,null,`vertical`,-1),t[36]||=c(` 五种 `,-1),v(w,{kind:`type`,to:`/api/types#api-type-pattern-fill-spec`},{default:_(()=>[...t[19]||=[c(`PatternFillSpec`,-1)]]),_:1}),t[37]||=c(`。下排把同一纹理应用到 `,-1),v(w,{kind:`property`,to:`/api/types#api-type-style-spec-property-fill`},{default:_(()=>[...t[20]||=[c(`Polygon.fill`,-1)]]),_:1}),t[38]||=c(`、 `,-1),v(w,{kind:`property`,to:`/api/types#api-type-circle-symbol-spec-property-fill`},{default:_(()=>[...t[21]||=[c(`CircleSymbol.fill`,-1)]]),_:1}),t[39]||=c(`、 `,-1),v(w,{kind:`property`,to:`/api/types#api-type-text-spec-property-fill`},{default:_(()=>[...t[22]||=[c(`Text.fill`,-1)]]),_:1}),t[40]||=c(` 与 `,-1),v(w,{kind:`property`,to:`/api/types#api-type-text-spec-property-background-fill`},{default:_(()=>[...t[23]||=[c(`Text.backgroundFill`,-1)]]),_:1}),t[41]||=c(`，并可用 `,-1),v(w,{kind:`method`,to:`#api-method-style-set`},{default:_(()=>[...t[24]||=[c(`styles.set`,-1)]]),_:1}),t[42]||=c(` 完整替换或 `,-1),v(w,{kind:`method`,to:`#api-method-style-patch`},{default:_(()=>[...t[25]||=[c(`styles.patch`,-1)]]),_:1}),t[43]||=c(` 局部调整颜色、尺寸、线宽和圆点半径。 `,-1)])]),preview:_(()=>[v(L,{ref_key:`patternFillDemoRef`,ref:i},null,512)]),_:1},8,[`source`])]),p(`section`,ue,[t[48]||=p(`h2`,{class:`doc-h2`},`nativeStyle 边界`,-1),v(A,{column:1,border:``},{default:_(()=>[v(k,{label:`输入形式`},{default:_(()=>[...t[44]||=[p(`code`,null,`{ nativeStyle }`,-1),c(` 必须是唯一字段，不能和 symbol、strokes、fill 等结构化字段混用。`,-1)]]),_:1}),v(k,{label:`状态形式`},{default:_(()=>[...t[45]||=[c(`ElementState 只保存当前 Earth 签发的 NativeStyleRef，不把 OpenLayers Style 放入 Core 状态。`,-1)]]),_:1}),v(k,{label:`更新能力`},{default:_(()=>[...t[46]||=[c(`可以用 styles.set() 完整替换；styles.patch()、结构化属性动画与序列化不支持原生样式。`,-1)]]),_:1}),v(k,{label:`兼容承诺`},{default:_(()=>[...t[47]||=[c(`原生样式是高级逃生口，不承诺跨 OpenLayers 主版本可移植。`,-1)]]),_:1})]),_:1})]),p(`section`,de,[t[49]||=p(`h2`,{class:`doc-h2`},`样式方法`,-1),v(C,{columns:g,rows:S})]),v(O,{"type-names":T,"runtime-names":E,compact:``,description:`先展示每个类型的用途；精确签名、联合分支和属性按需展开。日常配置优先参考上方字段表与示例。`})]),p(`aside`,fe,[v(x,{title:`样式（Styles）`,items:l})])])}}});export{pe as default};