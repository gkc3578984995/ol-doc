import{A as e,At as t,B as n,L as r,M as i,N as a,Nt as o,P as s,Q as c,R as l,T as u,ct as d,fn as f,it as p,j as m,ot as h,tt as g,x as _,xt as v,yt as y,z as b,zt as x}from"./TypeExpression-D6csDz4V.js";import{B as S,H as C,V as w,W as T,a as E,n as D,r as O,t as k,z as A}from"./index-4uKXPGRf.js";var j={class:`example-demo linework-demo`},M={class:`example-demo__control-panel`},N={class:`example-demo__feedback linework-demo__status`,"aria-live":`polite`},P={class:`linework-demo__stage-wrap`},F=`docs-elements-linework`,I=`linework-preview`,L=`linework-preview-guide`,R=`linework-preview-elements`,z=_(n({__name:`LineworkDemo`,setup(n){let r=[`center-cross`,`center-dot`,`center-dot-pair`],_=[`none`,`tick`,`alternating-tick`,`double-tick`,`square`,`circle`,`center-cross`,`center-dot`,`center-dot-pair`,`inline-text`],x={none:`无装饰`,tick:`单侧短线`,"alternating-tick":`交替短线`,"double-tick":`双侧短线`,square:`方块`,circle:`圆环`,"center-cross":`中心十字`,"center-dot":`中心点`,"center-dot-pair":`中心点对`,"inline-text":`路径文字`},S={solid:`单轨实线`,dashed:`单轨虚线`,double:`双轨：实线 + 虚线`,none:`无轨道，仅斜杠`},C=t(null),w=o(null),T=o(null),k=t(`polyline`),A=t(`solid`),z=t(`center-dot`),B=t(`bar`),V=t(`arrow`),H=t(`#f56c6c`),U=t(`供水管线`),W=t(!0),G=t(96),K=e(()=>k.value===`polyline`&&A.value!==`double`&&A.value!==`none`),q=e(()=>A.value===`none`?`斜杠`:x[z.value]),J=e(()=>H.value??`#f56c6c`),Y=e=>r.includes(e),X=e(()=>A.value===`none`?!1:z.value===`inline-text`||Y(z.value)),Z=(e,t)=>{let n=/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(e);return n===null?e:`rgba(${Number.parseInt(n[1],16)}, ${Number.parseInt(n[2],16)}, ${Number.parseInt(n[3],16)}, ${t})`},Q=()=>O.polyline({color:J.value,lines:`solid`,caps:{start:`bar`,end:`arrow`},decoration:`tick`}),ee=()=>O.polygon({color:J.value,lines:`solid`,decoration:`tick`}),te=()=>O.polyline({color:J.value,lines:`solid`,caps:{start:`bar`,end:`arrow`},decoration:`center-dot`,repeatSpacingPx:G.value}),ne=()=>{let e=A.value,t=z.value;if(e===`solid`&&t===`tick`&&B.value===`bar`&&V.value===`arrow`)return Q();if(e===`solid`&&t===`center-dot`&&B.value===`bar`&&V.value===`arrow`&&W.value)return te();if(e===`none`)return O.polyline({color:J.value,lines:`none`,decoration:`slash`});if(e===`double`){let e=[`solid`,`dashed`];return t===`inline-text`?O.polyline({color:J.value,lines:e,decoration:`inline-text`,text:U.value.trim()||`路径文字`,textStyle:{background:{color:`#ffffff`,paddingPx:4},outline:{color:`#ffffff`,width:3},fontWeight:`bold`},...W.value?{repeatSpacingPx:G.value}:{}}):Y(t)?O.polyline({color:J.value,lines:e,decoration:t,...W.value?{repeatSpacingPx:G.value}:{}}):O.polyline({color:J.value,lines:e,decoration:t})}let n={start:B.value,end:V.value};return t===`inline-text`?O.polyline({color:J.value,lines:e,caps:n,decoration:`inline-text`,text:U.value.trim()||`路径文字`,textStyle:{background:{color:`#ffffff`,paddingPx:4},outline:{color:`#ffffff`,width:3},fontWeight:`bold`},...W.value?{repeatSpacingPx:G.value}:{}}):Y(t)?O.polyline({color:J.value,lines:e,caps:n,decoration:t,...W.value?{repeatSpacingPx:G.value}:{}}):O.polyline({color:J.value,lines:e,caps:n,decoration:t})},re=()=>{let e=A.value,t=z.value;if(e===`solid`&&t===`tick`)return ee();if(e===`none`)return O.polygon({color:J.value,lines:`none`,decoration:`slash`});let n=e===`double`?[`solid`,`dashed`]:e;return t===`inline-text`?O.polygon({color:J.value,lines:n,decoration:`inline-text`,text:U.value.trim()||`路径文字`,textStyle:{background:{color:`#ffffff`,paddingPx:4},outline:{color:`#ffffff`,width:3},fontWeight:`bold`},...W.value?{repeatSpacingPx:G.value}:{}}):Y(t)?O.polygon({color:J.value,lines:n,decoration:t,...W.value?{repeatSpacingPx:G.value}:{}}):O.polygon({color:J.value,lines:n,decoration:t})},ie=()=>k.value===`polyline`?ne():re(),ae=e=>k.value===`polyline`?{type:`curve-polyline`,controlPoints:[[e[0]-27e3,e[1]-11e3],[e[0]-9e3,e[1]+14e3],[e[0]+1e4,e[1]-1e4],[e[0]+27e3,e[1]+13e3]]}:{type:`polygon`,controlPoints:[[e[0]-22e3,e[1]-15e3],[e[0]+22e3,e[1]-15e3],[e[0]+18e3,e[1]+16e3],[e[0]-18e3,e[1]+16e3]]},$=(e=!1)=>{let t=w.value,n=T.value;if(t===null||n===null)return;let r=ae(n),i=ie();t.elements.remove({module:`linework-preview`}),A.value!==`none`&&t.elements.add({id:L,module:`linework-preview`,layerId:R,geometry:r,style:{strokes:[{color:`rgba(255, 255, 255, 0.96)`,width:9,lineCap:`round`,lineJoin:`round`}],zIndex:1}}),t.elements.add({id:I,module:`linework-preview`,layerId:R,geometry:r,style:k.value===`polygon`?{...i,fill:{type:`solid`,color:Z(J.value,.14)},zIndex:10}:{...i,zIndex:10}}),e&&t.view.animateFlyTo(n,{zoom:10.2,duration:350})};return y(k,()=>$(!0),{flush:`post`}),y([A,z,B,V,H,U,W,G],()=>$(),{flush:`post`}),g(()=>{if(C.value===null)return;let e=E({id:F,target:C.value,view:{zoom:10.2},controls:{zoom:!0,rotate:!1,attribution:!0}});D(e,`vector`).update({opacity:.48}),e.layers.add({kind:`vector`,id:R,zIndex:30,declutter:!0}),T.value=e.view.toProjectedCoordinates([116.4074,39.9042]),w.value=e,$(!0)}),c(()=>{w.value?.destroy(),w.value=null,T.value=null}),(e,t)=>{let n=d(`el-radio-button`),r=d(`el-radio-group`),o=d(`el-form-item`),c=d(`el-option`),g=d(`el-select`),y=d(`el-input`),w=d(`el-switch`),T=d(`el-input-number`),E=d(`el-color-picker`),D=d(`el-form`),O=d(`el-tag`),F=d(`el-descriptions-item`),I=d(`el-descriptions`);return p(),s(`div`,j,[m(`div`,M,[b(D,{class:`example-demo__control-grid linework-demo__controls`,"label-position":`top`},{default:v(()=>[b(o,{label:`路径范围`},{default:v(()=>[b(r,{modelValue:k.value,"onUpdate:modelValue":t[0]||=e=>k.value=e},{default:v(()=>[b(n,{value:`polyline`},{default:v(()=>[...t[9]||=[l(`开放路径`,-1)]]),_:1}),b(n,{value:`polygon`},{default:v(()=>[...t[10]||=[l(`闭合外环`,-1)]]),_:1})]),_:1},8,[`modelValue`])]),_:1}),b(o,{label:`轨道`},{default:v(()=>[b(g,{modelValue:A.value,"onUpdate:modelValue":t[1]||=e=>A.value=e},{default:v(()=>[(p(),s(u,null,h(S,(e,t)=>b(c,{key:t,label:e,value:t},null,8,[`label`,`value`])),64))]),_:1},8,[`modelValue`])]),_:1}),b(o,{label:`沿线装饰`},{default:v(()=>[b(g,{modelValue:z.value,"onUpdate:modelValue":t[2]||=e=>z.value=e,disabled:A.value===`none`},{default:v(()=>[(p(),s(u,null,h(_,e=>b(c,{key:e,label:`${x[e]} · ${e}`,value:e},null,8,[`label`,`value`])),64))]),_:1},8,[`modelValue`,`disabled`])]),_:1}),b(o,{label:`起点端帽`},{default:v(()=>[b(g,{modelValue:B.value,"onUpdate:modelValue":t[3]||=e=>B.value=e,disabled:!K.value},{default:v(()=>[b(c,{label:`无`,value:`none`}),b(c,{label:`横杠`,value:`bar`}),b(c,{label:`箭头`,value:`arrow`})]),_:1},8,[`modelValue`,`disabled`])]),_:1}),b(o,{label:`终点端帽`},{default:v(()=>[b(g,{modelValue:V.value,"onUpdate:modelValue":t[4]||=e=>V.value=e,disabled:!K.value},{default:v(()=>[b(c,{label:`无`,value:`none`}),b(c,{label:`横杠`,value:`bar`}),b(c,{label:`箭头`,value:`arrow`})]),_:1},8,[`modelValue`,`disabled`])]),_:1}),b(o,{label:`路径文字`},{default:v(()=>[b(y,{modelValue:U.value,"onUpdate:modelValue":t[5]||=e=>U.value=e,disabled:z.value!==`inline-text`||A.value===`none`},null,8,[`modelValue`,`disabled`])]),_:1}),b(o,{label:`重复铺满路径`},{default:v(()=>[b(w,{modelValue:W.value,"onUpdate:modelValue":t[6]||=e=>W.value=e,disabled:!X.value,"aria-label":`切换中心内容是否重复铺满路径`},null,8,[`modelValue`,`disabled`])]),_:1}),b(o,{label:`重复间距（CSS px）`},{default:v(()=>[b(T,{modelValue:G.value,"onUpdate:modelValue":t[7]||=e=>G.value=e,disabled:!X.value||!W.value,min:1,max:400,step:8,"controls-position":`right`},null,8,[`modelValue`,`disabled`])]),_:1}),b(o,{label:`统一颜色`},{default:v(()=>[b(E,{modelValue:H.value,"onUpdate:modelValue":t[8]||=e=>H.value=e,"aria-label":`线饰颜色`},null,8,[`modelValue`])]),_:1})]),_:1}),m(`div`,N,[b(O,{type:`primary`,effect:`dark`},{default:v(()=>[l(f(k.value===`polyline`?`开放路径`:`闭合外环`),1)]),_:1}),b(O,{effect:`plain`},{default:v(()=>[l(`轨道：`+f(S[A.value]),1)]),_:1}),b(O,{type:`success`,effect:`plain`},{default:v(()=>[l(`装饰：`+f(q.value),1)]),_:1}),K.value?(p(),i(O,{key:0,type:`warning`,effect:`plain`},{default:v(()=>[l(`端帽：`+f(B.value)+` → `+f(V.value),1)]),_:1})):a(``,!0),X.value?(p(),i(O,{key:1,type:`info`,effect:`plain`},{default:v(()=>[l(` 位置：`+f(W.value?`每 ${G.value} CSS px`:`累计长度中点一次`),1)]),_:1})):a(``,!0),t[11]||=m(`span`,null,`修改任一选项，地图会立即刷新。`,-1)])]),m(`div`,P,[m(`div`,{ref_key:`mapTarget`,ref:C,class:`example-stage linework-demo__stage`},null,512),t[12]||=m(`div`,{class:`linework-demo__map-label`},`当前 Linework 效果`,-1)]),b(I,{class:`linework-demo__rules`,column:2,border:``,size:`small`},{default:v(()=>[b(F,{label:`开放单轨`},{default:v(()=>[...t[13]||=[l(`可同时使用起点、终点端帽和沿线装饰。`,-1)]]),_:1}),b(F,{label:`双轨 / 闭合环`},{default:v(()=>[...t[14]||=[l(`端帽会禁用，避免产生没有明确定义的组合。`,-1)]]),_:1}),b(F,{label:`中心内容`},{default:v(()=>[...t[15]||=[l(`三种中心 glyph 与路径文字可保持中点一次，也可按锚点间距铺满整个路径。`,-1)]]),_:1}),b(F,{label:`文字间距`},{default:v(()=>[...t[16]||=[l(`间距不会随文字宽度自动增大；文字重叠时，对应轨道切口仍会合并。`,-1)]]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-8de80962`]]),B=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';
import { lineStyles, useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, LineCapType, LinePattern, ShapeInput, StyleSpec, TrackedLineDecorationType } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-elements-linework';
const PREVIEW_ID = 'linework-preview';
const GUIDE_ID = 'linework-preview-guide';
const PREVIEW_LAYER_ID = 'linework-preview-elements';

type PreviewKind = 'polyline' | 'polygon';
type TrackMode = LinePattern | 'double' | 'none';
type DecorationMode = TrackedLineDecorationType | 'inline-text';
type CenterDecorationMode = Extract<TrackedLineDecorationType, 'center-cross' | 'center-dot' | 'center-dot-pair'>;

const centerDecorationOptions: readonly CenterDecorationMode[] = ['center-cross', 'center-dot', 'center-dot-pair'];

const decorationOptions: readonly DecorationMode[] = [
  'none',
  'tick',
  'alternating-tick',
  'double-tick',
  'square',
  'circle',
  'center-cross',
  'center-dot',
  'center-dot-pair',
  'inline-text'
];

const decorationLabels: Record<DecorationMode, string> = {
  none: '无装饰',
  tick: '单侧短线',
  'alternating-tick': '交替短线',
  'double-tick': '双侧短线',
  square: '方块',
  circle: '圆环',
  'center-cross': '中心十字',
  'center-dot': '中心点',
  'center-dot-pair': '中心点对',
  'inline-text': '路径文字'
};

const trackLabels: Record<TrackMode, string> = {
  solid: '单轨实线',
  dashed: '单轨虚线',
  double: '双轨：实线 + 虚线',
  none: '无轨道，仅斜杠'
};

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const previewCenter = shallowRef<Coordinate | null>(null);
const kind = ref<PreviewKind>('polyline');
const tracks = ref<TrackMode>('solid');
const decoration = ref<DecorationMode>('center-dot');
const startCap = ref<LineCapType>('bar');
const endCap = ref<LineCapType>('arrow');
const color = ref<string | null>('#f56c6c');
const inlineText = ref('供水管线');
const repeatEnabled = ref(true);
const repeatSpacingPx = ref(96);

const capsEnabled = computed(() => kind.value === 'polyline' && tracks.value !== 'double' && tracks.value !== 'none');
const decorationLabel = computed(() => (tracks.value === 'none' ? '斜杠' : decorationLabels[decoration.value]));
const activeColor = computed(() => color.value ?? '#f56c6c');
const isCenterDecoration = (value: DecorationMode): value is CenterDecorationMode => centerDecorationOptions.includes(value as CenterDecorationMode);
const repeatableContentEnabled = computed(() => (tracks.value === 'none' ? false : decoration.value === 'inline-text' || isCenterDecoration(decoration.value)));

const colorWithAlpha = (value: string, alpha: number): string => {
  const match = /^#([\\da-f]{2})([\\da-f]{2})([\\da-f]{2})$/i.exec(value);
  if (match === null) return value;
  return \`rgba(\${Number.parseInt(match[1]!, 16)}, \${Number.parseInt(match[2]!, 16)}, \${Number.parseInt(match[3]!, 16)}, \${alpha})\`;
};

// #region linework-factory
const createDefaultLineworkStyle = (): StyleSpec =>
  lineStyles.polyline({
    color: activeColor.value,
    lines: 'solid',
    caps: { start: 'bar', end: 'arrow' },
    decoration: 'tick'
  });

const createDefaultPolygonLineworkStyle = (): StyleSpec =>
  lineStyles.polygon({
    color: activeColor.value,
    lines: 'solid',
    decoration: 'tick'
  });

const createRepeatedCenterLineworkStyle = (): StyleSpec =>
  lineStyles.polyline({
    color: activeColor.value,
    lines: 'solid',
    caps: { start: 'bar', end: 'arrow' },
    decoration: 'center-dot',
    repeatSpacingPx: repeatSpacingPx.value
  });
// #endregion linework-factory

const createPolylineStyle = (): StyleSpec => {
  const trackMode = tracks.value;
  const decorationMode = decoration.value;
  if (trackMode === 'solid' && decorationMode === 'tick' && startCap.value === 'bar' && endCap.value === 'arrow') return createDefaultLineworkStyle();
  if (trackMode === 'solid' && decorationMode === 'center-dot' && startCap.value === 'bar' && endCap.value === 'arrow' && repeatEnabled.value) {
    return createRepeatedCenterLineworkStyle();
  }
  if (trackMode === 'none') return lineStyles.polyline({ color: activeColor.value, lines: 'none', decoration: 'slash' });

  if (trackMode === 'double') {
    const lines = ['solid', 'dashed'] as const;
    if (decorationMode === 'inline-text') {
      return lineStyles.polyline({
        color: activeColor.value,
        lines,
        decoration: 'inline-text',
        text: inlineText.value.trim() || '路径文字',
        textStyle: { background: { color: '#ffffff', paddingPx: 4 }, outline: { color: '#ffffff', width: 3 }, fontWeight: 'bold' },
        ...(repeatEnabled.value ? { repeatSpacingPx: repeatSpacingPx.value } : {})
      });
    }
    if (isCenterDecoration(decorationMode)) {
      return lineStyles.polyline({
        color: activeColor.value,
        lines,
        decoration: decorationMode,
        ...(repeatEnabled.value ? { repeatSpacingPx: repeatSpacingPx.value } : {})
      });
    }
    return lineStyles.polyline({ color: activeColor.value, lines, decoration: decorationMode });
  }

  const caps = { start: startCap.value, end: endCap.value };
  if (decorationMode === 'inline-text') {
    return lineStyles.polyline({
      color: activeColor.value,
      lines: trackMode,
      caps,
      decoration: 'inline-text',
      text: inlineText.value.trim() || '路径文字',
      textStyle: { background: { color: '#ffffff', paddingPx: 4 }, outline: { color: '#ffffff', width: 3 }, fontWeight: 'bold' },
      ...(repeatEnabled.value ? { repeatSpacingPx: repeatSpacingPx.value } : {})
    });
  }
  if (isCenterDecoration(decorationMode)) {
    return lineStyles.polyline({
      color: activeColor.value,
      lines: trackMode,
      caps,
      decoration: decorationMode,
      ...(repeatEnabled.value ? { repeatSpacingPx: repeatSpacingPx.value } : {})
    });
  }
  return lineStyles.polyline({ color: activeColor.value, lines: trackMode, caps, decoration: decorationMode });
};

const createPolygonStyle = (): StyleSpec => {
  const trackMode = tracks.value;
  const decorationMode = decoration.value;
  if (trackMode === 'solid' && decorationMode === 'tick') return createDefaultPolygonLineworkStyle();
  if (trackMode === 'none') return lineStyles.polygon({ color: activeColor.value, lines: 'none', decoration: 'slash' });

  const lines: LinePattern | readonly [LinePattern, LinePattern] = trackMode === 'double' ? ['solid', 'dashed'] : trackMode;
  if (decorationMode === 'inline-text') {
    return lineStyles.polygon({
      color: activeColor.value,
      lines,
      decoration: 'inline-text',
      text: inlineText.value.trim() || '路径文字',
      textStyle: { background: { color: '#ffffff', paddingPx: 4 }, outline: { color: '#ffffff', width: 3 }, fontWeight: 'bold' },
      ...(repeatEnabled.value ? { repeatSpacingPx: repeatSpacingPx.value } : {})
    });
  }
  if (isCenterDecoration(decorationMode)) {
    return lineStyles.polygon({
      color: activeColor.value,
      lines,
      decoration: decorationMode,
      ...(repeatEnabled.value ? { repeatSpacingPx: repeatSpacingPx.value } : {})
    });
  }
  return lineStyles.polygon({ color: activeColor.value, lines, decoration: decorationMode });
};

const createLineworkStyle = (): StyleSpec => (kind.value === 'polyline' ? createPolylineStyle() : createPolygonStyle());

const createGeometry = (center: Coordinate): ShapeInput => {
  if (kind.value === 'polyline') {
    return {
      type: 'curve-polyline',
      controlPoints: [
        [center[0] - 27_000, center[1] - 11_000],
        [center[0] - 9_000, center[1] + 14_000],
        [center[0] + 10_000, center[1] - 10_000],
        [center[0] + 27_000, center[1] + 13_000]
      ]
    };
  }
  return {
    type: 'polygon',
    controlPoints: [
      [center[0] - 22_000, center[1] - 15_000],
      [center[0] + 22_000, center[1] - 15_000],
      [center[0] + 18_000, center[1] + 16_000],
      [center[0] - 18_000, center[1] + 16_000]
    ]
  };
};

// #region linework-apply
const applyLinework = (focus = false) => {
  const earth = earthRef.value;
  const center = previewCenter.value;
  if (earth === null || center === null) return;

  const geometry = createGeometry(center);
  const style = createLineworkStyle();
  earth.elements.remove({ module: 'linework-preview' });

  if (tracks.value !== 'none') {
    earth.elements.add({
      id: GUIDE_ID,
      module: 'linework-preview',
      layerId: PREVIEW_LAYER_ID,
      geometry,
      style: { strokes: [{ color: 'rgba(255, 255, 255, 0.96)', width: 9, lineCap: 'round', lineJoin: 'round' }], zIndex: 1 }
    });
  }

  earth.elements.add({
    id: PREVIEW_ID,
    module: 'linework-preview',
    layerId: PREVIEW_LAYER_ID,
    geometry,
    style:
      kind.value === 'polygon' ? { ...style, fill: { type: 'solid', color: colorWithAlpha(activeColor.value, 0.14) }, zIndex: 10 } : { ...style, zIndex: 10 }
  });
  if (focus) earth.view.animateFlyTo(center, { zoom: 10.2, duration: 350 });
};
// #endregion linework-apply

watch(kind, () => applyLinework(true), { flush: 'post' });
watch([tracks, decoration, startCap, endCap, color, inlineText, repeatEnabled, repeatSpacingPx], () => applyLinework(), { flush: 'post' });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 10.2 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.48 });
  earth.layers.add({ kind: 'vector', id: PREVIEW_LAYER_ID, zIndex: 30, declutter: true });
  previewCenter.value = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earthRef.value = earth;
  applyLinework(true);
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  previewCenter.value = null;
});
<\/script>

<template>
  <div class="example-demo linework-demo">
    <div class="example-demo__control-panel">
      <el-form class="example-demo__control-grid linework-demo__controls" label-position="top">
        <el-form-item label="路径范围">
          <el-radio-group v-model="kind">
            <el-radio-button value="polyline">开放路径</el-radio-button>
            <el-radio-button value="polygon">闭合外环</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="轨道">
          <el-select v-model="tracks">
            <el-option v-for="(label, value) in trackLabels" :key="value" :label="label" :value="value" />
          </el-select>
        </el-form-item>
        <el-form-item label="沿线装饰">
          <el-select v-model="decoration" :disabled="tracks === 'none'">
            <el-option v-for="item in decorationOptions" :key="item" :label="\`\${decorationLabels[item]} · \${item}\`" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="起点端帽">
          <el-select v-model="startCap" :disabled="!capsEnabled">
            <el-option label="无" value="none" /><el-option label="横杠" value="bar" /><el-option label="箭头" value="arrow" />
          </el-select>
        </el-form-item>
        <el-form-item label="终点端帽">
          <el-select v-model="endCap" :disabled="!capsEnabled">
            <el-option label="无" value="none" /><el-option label="横杠" value="bar" /><el-option label="箭头" value="arrow" />
          </el-select>
        </el-form-item>
        <el-form-item label="路径文字">
          <el-input v-model="inlineText" :disabled="decoration !== 'inline-text' || tracks === 'none'" />
        </el-form-item>
        <el-form-item label="重复铺满路径">
          <el-switch v-model="repeatEnabled" :disabled="!repeatableContentEnabled" aria-label="切换中心内容是否重复铺满路径" />
        </el-form-item>
        <el-form-item label="重复间距（CSS px）">
          <el-input-number
            v-model="repeatSpacingPx"
            :disabled="!repeatableContentEnabled || !repeatEnabled"
            :min="1"
            :max="400"
            :step="8"
            controls-position="right"
          />
        </el-form-item>
        <el-form-item label="统一颜色">
          <el-color-picker v-model="color" aria-label="线饰颜色" />
        </el-form-item>
      </el-form>

      <div class="example-demo__feedback linework-demo__status" aria-live="polite">
        <el-tag type="primary" effect="dark">{{ kind === 'polyline' ? '开放路径' : '闭合外环' }}</el-tag>
        <el-tag effect="plain">轨道：{{ trackLabels[tracks] }}</el-tag>
        <el-tag type="success" effect="plain">装饰：{{ decorationLabel }}</el-tag>
        <el-tag v-if="capsEnabled" type="warning" effect="plain">端帽：{{ startCap }} → {{ endCap }}</el-tag>
        <el-tag v-if="repeatableContentEnabled" type="info" effect="plain">
          位置：{{ repeatEnabled ? \`每 \${repeatSpacingPx} CSS px\` : '累计长度中点一次' }}
        </el-tag>
        <span>修改任一选项，地图会立即刷新。</span>
      </div>
    </div>

    <div class="linework-demo__stage-wrap">
      <div ref="mapTarget" class="example-stage linework-demo__stage"></div>
      <div class="linework-demo__map-label">当前 Linework 效果</div>
    </div>

    <el-descriptions class="linework-demo__rules" :column="2" border size="small">
      <el-descriptions-item label="开放单轨">可同时使用起点、终点端帽和沿线装饰。</el-descriptions-item>
      <el-descriptions-item label="双轨 / 闭合环">端帽会禁用，避免产生没有明确定义的组合。</el-descriptions-item>
      <el-descriptions-item label="中心内容">三种中心 glyph 与路径文字可保持中点一次，也可按锚点间距铺满整个路径。</el-descriptions-item>
      <el-descriptions-item label="文字间距">间距不会随文字宽度自动增大；文字重叠时，对应轨道切口仍会合并。</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.linework-demo__controls {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr));
}

.linework-demo__controls :deep(.el-form-item) {
  min-width: 0;
  margin: 0;
}

.linework-demo__controls :deep(.el-select),
.linework-demo__controls :deep(.el-input),
.linework-demo__controls :deep(.el-input-number) {
  width: 190px;
}

.linework-demo__stage-wrap {
  position: relative;
}

.linework-demo__stage {
  height: 470px;
}

.linework-demo__map-label {
  position: absolute;
  top: 14px;
  left: 50%;
  z-index: 2;
  padding: 5px 10px;
  border: 1px solid var(--el-color-danger-light-5);
  border-radius: 999px;
  background: color-mix(in srgb, var(--el-bg-color) 92%, transparent);
  color: var(--el-text-color-primary);
  font-size: 12px;
  font-weight: 700;
  transform: translateX(-50%);
  pointer-events: none;
}

.linework-demo__rules {
  margin-top: 14px;
}

@media (max-width: 640px) {
  .linework-demo__controls {
    grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr));
  }

  .linework-demo__controls :deep(.el-form-item),
  .linework-demo__controls :deep(.el-select),
  .linework-demo__controls :deep(.el-input),
  .linework-demo__controls :deep(.el-input-number) {
    width: 100%;
    margin-right: 0;
  }

  .linework-demo__stage {
    height: 400px;
  }
}
</style>
`,V={class:`doc-page-layout`},H={class:`doc-page`},U={id:`overview`,class:`doc-prose`},W={id:`example-linework`,class:`doc-prose`},G={id:`factory-options`,class:`doc-prose`},K={id:`shape-compatibility`,class:`doc-prose`},q={id:`advanced-state`,class:`doc-prose`},J={id:`api-actions`,class:`doc-prose`},Y={class:`doc-page-layout__aside`},X=n({__name:`LineworkView`,setup(e){let t=`${k(B,`linework-factory`)}\n\n${k(B,`linework-apply`)}`,n=[{id:`overview`,label:`优先使用 lineStyles`},{id:`example-linework`,label:`生成路径线饰`},{id:`factory-options`,label:`工厂选项`},{id:`shape-compatibility`,label:`Shape 兼容矩阵`},{id:`advanced-state`,label:`高级状态引用`},{id:`api-actions`,label:`工厂方法`},{id:`api`,label:`完整 API`}],i=[{prop:`name`,label:`选项`,width:150,presentation:`property`},{prop:`type`,label:`类型`,width:360,linkTypes:!0},{prop:`desc`,label:`规则`,width:450}],a=[{name:`color`,type:`Color`,desc:`轨道、端帽和装饰共用颜色；默认红色`},{name:`lines`,type:`LinePattern | readonly [LinePattern, LinePattern] | "none"`,desc:`单轨、双轨或无轨道；省略为单轨实线`},{name:`caps`,type:`LineCapsOptions`,desc:`仅开放单轨可用`},{name:`decoration`,type:`TrackedLineDecorationType | DecorationOnlyLineType | InlineTextLineDecorationType`,desc:`选择沿线装饰、斜杠或路径文字`},{name:`repeatSpacingPx`,type:`number`,desc:`仅三种中心 glyph 与 inline-text 可用；省略时位于累计长度中点，传正有限数时按该 CSS px 间距铺满 contour`},{name:`text`,type:`string`,desc:`仅 inline-text 必填；显示在一个或多个路径锚点`},{name:`textStyle`,type:`InlineLineTextStyleOptions`,desc:`仅调整路径文字外观，不改变间距或旋转`}],o=[{prop:`name`,label:`方法`,width:190,presentation:`method`},{prop:`params`,label:`参数`,width:350,linkTypes:!0},{prop:`returns`,label:`返回值`,width:190,linkTypes:!0},{prop:`desc`,label:`说明`,width:420}],c=[{anchor:`api-method-line-polyline`,href:`/api/types#api-type-line-style-factories-method-polyline`,name:`polyline`,params:`options?: PolylineLineStyleOptions`,returns:`StyleSpec`,desc:`生成开放路径使用的轨道、端帽、装饰或路径文字`},{anchor:`api-method-line-polygon`,href:`/api/types#api-type-line-style-factories-method-polygon`,name:`polygon`,params:`options?: PolygonLineStyleOptions`,returns:`StyleSpec`,desc:`生成 Polygon 闭合外环使用的轨道、装饰或路径文字`}],u=[`LineStyleFactories`,`PolylineLineStyleOptions`,`PolygonLineStyleOptions`,`LinePattern`,`LineCapType`,`LineCapsOptions`,`TrackedLineDecorationType`,`DecorationOnlyLineType`,`InlineTextLineDecorationType`,`InlineLineTextStyleOptions`,`LineworkSpec`,`PathTrackSpec`,`PathTrackStrokeSpec`,`PathCapSpec`,`PathGlyphSpec`,`PathGlyphPrimitiveSpec`,`PathGlyphStrokeSpec`,`PathDecorationSpec`,`InlinePathTextPlacementSpec`,`InlinePathTextSpec`,`PathContourPolicySpec`],f=[`lineStyles`];return(e,h)=>{let g=d(`el-alert`),_=d(`el-descriptions-item`),y=d(`el-descriptions`);return p(),s(`div`,V,[m(`article`,H,[h[25]||=m(`header`,{class:`doc-hero`},[m(`span`,{class:`doc-hero__eyebrow`},`地图元素`),m(`h1`,null,`路径线饰（Linework）`),m(`p`,null,`lineStyles 把单轨、双轨、端帽、固定装饰与路径文字展开为完整 StyleSpec；中心内容既可只放在中点，也可按 CSS 像素间距铺满路径。`)],-1),m(`section`,U,[h[8]||=m(`h2`,{class:`doc-h2`},`优先使用 lineStyles`,-1),m(`p`,null,[h[2]||=l(` 日常代码从根入口运行时值 `,-1),h[3]||=m(`code`,null,`lineStyles`,-1),h[4]||=l(` 调用 `,-1),b(T,{kind:`method`,to:`#api-method-line-polyline`},{default:v(()=>[...h[0]||=[l(`polyline()`,-1)]]),_:1}),h[5]||=l(` 或 `,-1),b(T,{kind:`method`,to:`#api-method-line-polygon`},{default:v(()=>[...h[1]||=[l(`polygon()`,-1)]]),_:1}),h[6]||=l(`。 工厂执行严格判别校验，复制输入，并返回可以直接写入 Element 或 Draw 的独立 StyleSpec。 `,-1)]),b(g,{type:`success`,closable:!1,"show-icon":``,title:`工厂是规范入口`},{default:v(()=>[...h[7]||=[l(` 普通装饰间距、glyph 尺寸、闭合缝、文字切口和轮廓策略由工厂统一展开。只有中心十字、中心点、中心点对和路径文字通过 repeatSpacingPx 开放重复间距，业务代码不需要手工拼接低层 LineworkSpec。 `,-1)]]),_:1})]),m(`section`,W,[b(S,{title:`生成路径线饰`,source:x(B),snippet:t,"source-lang":`vue`,"snippet-lang":`typescript`},{description:v(()=>[m(`p`,null,[h[10]||=l(` 示例使用 Element Plus 组合开放/闭合轮廓、轨道、端帽与装饰，调用 lineStyles 工厂后把返回的 `,-1),b(T,{kind:`type`,to:`/api/types#api-type-style-spec`},{default:v(()=>[...h[9]||=[l(`StyleSpec`,-1)]]),_:1}),h[11]||=l(` 写入 Element。修改任一选项都会立即刷新地图；当前轨道、装饰和端帽会用标签明确标出。 选择中心十字、中心点、中心点对或路径文字后，还可以切换“累计长度中点一次”与“按 CSS 像素间距铺满”。 `,-1)])]),preview:v(()=>[b(z)]),_:1},8,[`source`])]),m(`section`,G,[h[12]||=m(`h2`,{class:`doc-h2`},`工厂选项`,-1),b(w,{columns:i,rows:a}),h[13]||=r(`<ul><li>开放单轨可组合端帽和重复装饰；端帽会避让对应端点的首枚或末枚装饰。</li><li>双轨与 Polygon 不使用端帽；无轨道时只允许 <code>slash</code>。</li><li>选择 <code>inline-text</code> 时必须提供文字，并且不能再组合其他沿线装饰。</li><li><code>repeatSpacingPx</code> 只适用于 <code>center-cross</code>、<code>center-dot</code>、<code>center-dot-pair</code> 与 <code>inline-text</code>。省略时只在累计长度中点放置一次；传入大于 0 的有限数时，相邻副本严格保持该 CSS 像素间距。 </li><li><code>repeatSpacingPx</code> 为 0、负数、NaN、无穷值，或用于其他 decoration 时会同步抛出参数错误，不会回退或自动修正。</li><li>间距按相邻副本的锚点计算，不随文字宽度自动增大或抽稀；间距小于文字视觉宽度时文字可能重叠。</li><li>重复的中心 glyph 和文字会为每个副本切断轨道；重叠切口会合并，虚线跨过全部切口后仍延续原相位。</li></ul>`,1)]),m(`section`,K,[h[19]||=m(`h2`,{class:`doc-h2`},`Shape 兼容矩阵`,-1),b(y,{column:1,border:``},{default:v(()=>[b(_,{label:`lineStyles.polyline()`},{default:v(()=>[...h[14]||=[l(`polyline、lune-polyline、curve-polyline；最终轮廓必须是开放路径。`,-1)]]),_:1}),b(_,{label:`lineStyles.polygon()`},{default:v(()=>[...h[15]||=[l(`polygon、ellipse、全部面箭头、rectangle、triangle、equilateral-triangle、assemble-polygon、closed-curve-polygon、sector、lune-polygon。`,-1)]]),_:1}),b(_,{label:`不支持`},{default:v(()=>[...h[16]||=[l(`point 与 circle 没有路径轮廓声明，不能应用 linework。`,-1)]]),_:1}),b(_,{label:`Polygon 规则`},{default:v(()=>[...h[17]||=[l(`只装饰最终 Polygon 的外环；重复内容在闭合缝两侧保持固定间距，并把余量集中在缝处。`,-1)]]),_:1})]),_:1}),b(g,{class:`doc-prose__alert`,type:`warning`,closable:!1,"show-icon":``,title:`轮廓不匹配会拒绝整次写入`},{default:v(()=>[...h[18]||=[l(` 把 polyline 工厂结果写入闭合 Shape，或把 polygon 工厂结果写入开放 Shape，会在提交前抛出参数错误，不留下部分状态。 `,-1)]]),_:1})]),m(`section`,q,[h[22]||=m(`h2`,{class:`doc-h2`},`高级状态引用`,-1),m(`p`,null,[b(T,{kind:`type`,to:`/api/types#api-type-linework-spec`},{default:v(()=>[...h[20]||=[l(`LineworkSpec`,-1)]]),_:1}),h[21]||=l(` 及其 PathTrack、PathCap、PathGlyph、PathDecoration、InlinePathTextPlacement、InlinePathText 子类型是公开的可序列化状态协议，主要用于读取、快照、审计与高级静态互操作。常规样式配置仍应由 lineStyles 工厂生成。 `,-1)]),h[23]||=m(`p`,null,` 这些低层类型不包含运行时回调，不引用 OpenLayers，也不会从 Feature 反向恢复；修改 Element 样式时仍通过 StyleSpec、styles.set() 或 styles.patch() 提交。 `,-1)]),m(`section`,J,[h[24]||=m(`h2`,{class:`doc-h2`},`工厂方法`,-1),b(w,{columns:o,rows:c})]),b(A,{"type-names":u,"runtime-names":f,compact:``,description:`先展示工厂与状态类型的用途；精确签名和属性按需展开。常规创建只需使用上方两个工厂方法。`})]),m(`aside`,Y,[b(C,{title:`路径线饰（Linework）`,items:n})])])}}});export{X as default};