import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as c,ct as l,fn as u,it as d,j as f,ln as ee,ot as p,tt as m,x as h,xt as g,z as _}from"./TypeExpression-D6csDz4V.js";import{R as v,U as te,a as y,n as b}from"./index-4uKXPGRf.js";import{n as x,r as S,t as C}from"./shapeExamples-q799yh_J.js";var ne={class:`example-demo shape-catalog`},re={class:`example-demo__control-panel`,"aria-label":`筛选 ShapeType`},ie={class:`example-demo__control-grid shape-catalog__filters`},ae={class:`example-demo__action-row`},w={class:`example-demo__action-group`},oe={class:`example-demo__action-buttons`},se={class:`example-demo__feedback`,"aria-live":`polite`},ce={class:`shape-catalog__explorer`},le={class:`shape-catalog__list-panel`,"aria-label":`ShapeType 视觉目录`},ue={class:`shape-catalog__groups`},de={class:`shape-catalog__group-heading`},fe={class:`shape-catalog__cards`},pe={class:`shape-catalog__glyph`,"aria-hidden":`true`},me={class:`shape-catalog__card-copy`},he={class:`shape-catalog__preview-panel`,"aria-label":`选中 Shape 预览`},ge={class:`shape-catalog__selected-heading`,"aria-live":`polite`},_e={class:`shape-catalog__map-wrap`},ve={class:`shape-catalog__map-label`},ye={class:`shape-catalog__type-links`},T={class:`shape-catalog__code`,"aria-label":`最小创建代码`},E={class:`shape-catalog__code-title`},be=`docs-elements-shapes`,D=`shape-preview`,O=`shape-preview-highlight`,k=`shape-preview-guides`,A=`shape-preview-elements`,j=`shape-preview-highlight`,M=`shape-preview-guides`,N=3e4,P=8.1,F=`polygon`,I=h(n({__name:`ShapesDemo`,setup(n,{expose:h}){let I={point:{stroke:`#2563eb`,fill:`#409eff`},path:{stroke:`#0891b2`,fill:`rgba(8, 145, 178, 0.35)`},radial:{stroke:`#047857`,fill:`rgba(5, 150, 105, 0.35)`},area:{stroke:`#6d28d9`,fill:`rgba(124, 58, 237, 0.35)`},arrow:{stroke:`#c2410c`,fill:`rgba(234, 88, 12, 0.38)`}},L={point:`●`,path:`⌁`,radial:`◎`,area:`◆`,arrow:`➤`},R=t(null),z=i(null),B=i(null),V=i(null),H=t(F),U=t(``),W=t(`all`),G=e(()=>x[H.value]),xe=[{label:`全部类别（20）`,value:`all`},...S.map(e=>({label:`${e.label}（${e.examples.length}）`,value:e.id}))],K=e(()=>U.value.trim().toLocaleLowerCase(`zh-CN`)),q=e(()=>S.filter(e=>W.value===`all`||W.value===e.id).map(e=>({...e,examples:e.examples.filter(e=>K.value===``||[e.label,e.type,e.group,e.points,e.render,e.description].join(` `).toLocaleLowerCase(`zh-CN`).includes(K.value))})).filter(e=>e.examples.length>0)),J=e(()=>q.value.reduce((e,t)=>e+t.examples.length,0)),Y=e=>Number(e.toFixed(2)).toLocaleString(`zh-CN`),X=e=>`[${e.slice(0,2).map(Y).join(`, `)}]`,Se=e(()=>{let e=V.value?.renderGeometry;if(e===void 0)return`尚未读取`;if(e.type===`point`)return`Point · 坐标 ${X(e.coordinates)}`;if(e.type===`polyline`)return`Polyline · ${e.coordinates.length} 个坐标`;if(e.type===`polygon`){let t=e.coordinates.reduce((e,t)=>e+t.length,0);return`Polygon · ${e.coordinates.length} 个环 · ${t} 个坐标`}return`Circle · 中心 ${X(e.center)} · View 半径 ${Y(e.radius)}`}),Ce=e(()=>{let e=V.value?.extent;return e===void 0?`尚未读取`:`[${e.map(Y).join(`, `)}]`}),we=e(()=>{let e=V.value?.extentPoints;return e===void 0?`尚未读取`:e.map(X).join(` → `)}),Te=e(()=>{let e=V.value?.rangePoints;if(e===void 0)return`尚未读取`;if(e.length===0)return`0 组 · Circle 通过 center + radius 精确表达`;let t=e.reduce((e,t)=>e+t.length,0);return`${e.length} 组 · ${t} 个最终坐标`}),Ee=e(()=>{let e=V.value?.controlPoints;return e===void 0?`尚未读取`:e===null?`null · Circle 不使用 controlPoints`:`${e.length} 个 · ${e.map(X).join(`、`)}`}),De=e(()=>{let e=V.value;return e===null?`尚未读取`:e.center===null?`null · 仅 Circle 有值`:X(e.center)}),Oe=e(()=>{let e=V.value;return e===null?`尚未读取`:e.radius===null?`null · 仅 Circle 有值`:`${Y(e.radius.meters)} 米 · ${Y(e.radius.projected)} View 投影单位`}),ke=e(()=>{if(H.value===`circle`)return`const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);

earth.elements.add({
  geometry: {
    type: 'circle',
    center,
    radius: 54_000 // 米
  }
});`;let e=G.value.normalizedPoints.map((e,t)=>`point${t+1}`).join(`, `);return`// point1…pointN 均为当前 View 投影坐标
earth.elements.add({
  geometry: {
    type: '${H.value}',
    controlPoints: [${e}]
  }
});`}),Ae=e=>{let t=I[e.groupId];return e.type===`point`?{symbol:{type:`circle`,radius:17,fill:{type:`solid`,color:t.fill},stroke:{color:`#ffffff`,width:5}},zIndex:20}:e.render===`LineString`?{strokes:[{color:`#ffffff`,width:12,lineCap:`round`,lineJoin:`round`},{color:t.stroke,width:7,lineCap:`round`,lineJoin:`round`}],zIndex:20}:{strokes:[{color:`#ffffff`,width:11,lineCap:`round`,lineJoin:`round`},{color:t.stroke,width:5,lineCap:`round`,lineJoin:`round`}],fill:{type:`solid`,color:t.fill},zIndex:20}},je=e=>{let t=I[e.groupId].stroke;return e.type===`point`?{symbol:{type:`circle`,radius:29,fill:{type:`solid`,color:`rgba(255, 255, 255, 0.12)`},stroke:{color:t,width:9}},zIndex:10}:e.render===`LineString`?{strokes:[{color:t,width:22,lineCap:`round`,lineJoin:`round`}],zIndex:10}:{strokes:[{color:t,width:18,lineCap:`round`,lineJoin:`round`}],fill:{type:`solid`,color:`rgba(255, 255, 255, 0.1)`},zIndex:10}},Me=(e,t)=>{if(t.type===`circle`){let n=[t.center[0],t.center[1]],r=v(e.view.olView.getProjection(),1,[n[0],n[1]],`m`),i=t.radius/r;return[n,[n[0]+i,n[1]]]}let n=t.controlPoints;if(typeof n[0]!=`number`)return n;let r=n,i=[];for(let e=0;e<r.length;e+=2)i.push([r[e],r[e+1]]);return i},Ne=(e,t)=>{t.length>1&&e.elements.add({id:`shape-preview-control-path`,module:k,layerId:M,geometry:{type:`polyline`,controlPoints:t},style:{strokes:[{color:`rgba(255, 255, 255, 0.96)`,width:7,lineDash:[9,7],lineCap:`round`},{color:`#334155`,width:2,lineDash:[9,7],lineCap:`round`}],zIndex:30}});for(let[n,r]of t.entries())e.elements.add({id:`shape-preview-control-${n+1}`,module:k,layerId:M,geometry:{type:`point`,controlPoints:[r]},style:{symbol:{type:`circle`,radius:9,fill:{type:`solid`,color:`#1f2937`},stroke:{color:`#ffffff`,width:4}},text:{text:String(n+1),fontSize:11,fontWeight:`bold`,fill:{type:`solid`,color:`#ffffff`}},zIndex:40}})},Z=()=>{let e=z.value,t=B.value;e===null||t===null||e.view.animateFlyTo(t,{zoom:P,duration:420})},Q=e=>{let t=z.value,n=B.value;if(t===null||n===null)return;t.elements.remove({module:D}),t.elements.remove({module:O}),t.elements.remove({module:k}),H.value=e;let r={type:e,...x[e]},i=C(e,n,N);t.elements.add({id:`shape-preview-highlight-${e}`,module:O,layerId:j,geometry:i,style:je(r)});let a=t.elements.add({id:`shape-preview-${e}`,module:D,layerId:A,geometry:C(e,n,N),style:Ae(r)}),o=a.geometryDetails;V.value=o,Ne(t,Me(t,a.state.geometry)),Z()},$=()=>{U.value=``,W.value=`all`};return h({reset:()=>{$(),H.value=F,Q(F)},focusSelected:Z}),m(()=>{if(R.value===null)return;let e=y({id:be,target:R.value,view:{zoom:P},controls:{zoom:!0,rotate:!1,attribution:!0}});b(e,`vector`).update({opacity:.45}),e.layers.add({kind:`vector`,id:j,zIndex:18,declutter:!1}),e.layers.add({kind:`vector`,id:A,zIndex:20,declutter:!1}),e.layers.add({kind:`vector`,id:M,zIndex:30,declutter:!1}),z.value=e,B.value=e.view.toProjectedCoordinates([116.4074,39.9042]),Q(H.value)}),o(()=>{z.value?.destroy(),z.value=null,B.value=null,V.value=null}),(e,t)=>{let n=l(`el-input`),i=l(`el-option`),o=l(`el-select`),m=l(`el-button`),h=l(`el-tag`),v=l(`el-scrollbar`),y=l(`el-empty`),b=l(`el-descriptions-item`),x=l(`el-link`),S=l(`el-descriptions`);return d(),a(`div`,ne,[f(`div`,re,[f(`div`,ie,[_(n,{modelValue:U.value,"onUpdate:modelValue":t[0]||=e=>U.value=e,clearable:``,placeholder:`搜索中文名或 ShapeType`,"aria-label":`搜索 ShapeType`},null,8,[`modelValue`]),_(o,{modelValue:W.value,"onUpdate:modelValue":t[1]||=e=>W.value=e,"aria-label":`按图形类别筛选`},{default:g(()=>[(d(),a(c,null,p(xe,e=>_(i,{key:e.value,label:e.label,value:e.value},null,8,[`label`,`value`])),64))]),_:1},8,[`modelValue`])]),f(`div`,ae,[f(`div`,w,[f(`div`,oe,[_(m,{disabled:U.value===``&&W.value===`all`,onClick:$},{default:g(()=>[...t[2]||=[s(`清除筛选`,-1)]]),_:1},8,[`disabled`])])]),f(`div`,se,[_(h,{type:`info`,effect:`plain`},{default:g(()=>[s(`找到 `+u(J.value)+` / 20`,1)]),_:1})])])]),f(`div`,ce,[f(`section`,le,[t[4]||=f(`div`,{class:`shape-catalog__panel-heading`},[f(`div`,null,[f(`strong`,null,`选择图形`),f(`span`,null,`点击卡片，在右侧地图查看最终效果`)])],-1),J.value>0?(d(),r(v,{key:0,"max-height":`690px`,class:`shape-catalog__scrollbar`},{default:g(()=>[f(`div`,ue,[(d(!0),a(c,null,p(q.value,e=>(d(),a(`section`,{key:e.id,class:`shape-catalog__group`},[f(`div`,de,[f(`h4`,null,u(e.label),1),_(h,{size:`small`,effect:`plain`},{default:g(()=>[s(u(e.examples.length),1)]),_:2},1024)]),f(`div`,fe,[(d(!0),a(c,null,p(e.examples,e=>(d(),r(m,{key:e.type,class:ee([`shape-catalog__card`,{"is-selected":H.value===e.type}]),type:H.value===e.type?`primary`:void 0,plain:H.value!==e.type,"aria-pressed":H.value===e.type,onClick:t=>Q(e.type)},{default:g(()=>[f(`span`,pe,u(L[e.groupId]),1),f(`span`,me,[f(`strong`,null,u(e.label),1),f(`code`,null,u(e.type),1),f(`small`,null,u(e.points),1)])]),_:2},1032,[`class`,`type`,`plain`,`aria-pressed`,`onClick`]))),128))])]))),128))])]),_:1})):(d(),r(y,{key:1,"image-size":72,description:`没有匹配的图形类型`},{default:g(()=>[_(m,{type:`primary`,plain:``,onClick:$},{default:g(()=>[...t[3]||=[s(`查看全部 20 种 Shape`,-1)]]),_:1})]),_:1}))]),f(`section`,he,[f(`div`,ge,[f(`div`,null,[t[5]||=f(`span`,null,`当前图形`,-1),f(`h4`,null,[s(u(G.value.label)+` `,1),f(`code`,null,u(H.value),1)])]),_(m,{type:`primary`,plain:``,onClick:Z},{default:g(()=>[...t[6]||=[s(`重新聚焦`,-1)]]),_:1})]),f(`div`,_e,[f(`div`,{ref_key:`mapTarget`,ref:R,class:`example-stage shape-catalog__stage`},null,512),f(`div`,ve,[f(`strong`,null,u(G.value.label),1),f(`code`,null,u(H.value),1),t[7]||=f(`span`,null,`数字为控制点顺序，虚线为控制路径`,-1)])]),_(S,{class:`shape-catalog__details`,column:1,border:``},{default:g(()=>[_(b,{label:`中文名称`},{default:g(()=>[s(u(G.value.label),1)]),_:1}),_(b,{label:`英文类型`},{default:g(()=>[f(`code`,null,u(H.value),1)]),_:1}),_(b,{label:`类别与输入`},{default:g(()=>[s(u(G.value.group)+` · `+u(G.value.points),1)]),_:1}),_(b,{label:`最终渲染`},{default:g(()=>[s(u(G.value.render)+` · `+u(G.value.description),1)]),_:1}),_(b,{label:`完整静态几何`},{default:g(()=>[s(u(Se.value),1)]),_:1}),_(b,{label:`地图坐标范围`},{default:g(()=>[f(`code`,null,u(Ce.value),1)]),_:1}),_(b,{label:`范围角点`},{default:g(()=>[f(`code`,null,u(we.value),1)]),_:1}),_(b,{label:`最终轮廓点`},{default:g(()=>[s(u(Te.value),1)]),_:1}),_(b,{label:`规范控制点`},{default:g(()=>[f(`code`,null,u(Ee.value),1)]),_:1}),_(b,{label:`圆心`},{default:g(()=>[f(`code`,null,u(De.value),1)]),_:1}),_(b,{label:`半径`},{default:g(()=>[f(`code`,null,u(Oe.value),1)]),_:1}),_(b,{label:`相关类型`},{default:g(()=>[f(`span`,ye,[_(x,{type:`primary`,href:`/api/types#api-type-shape-type`},{default:g(()=>[...t[8]||=[s(`ShapeType`,-1)]]),_:1}),_(x,{type:`primary`,href:`/api/types#api-type-shape-input`},{default:g(()=>[...t[9]||=[s(`ShapeInput`,-1)]]),_:1}),_(x,{type:`primary`,href:`/api/types#api-type-shape-state`},{default:g(()=>[...t[10]||=[s(`ShapeState`,-1)]]),_:1}),_(x,{type:`primary`,href:`/api/types#api-type-element-geometry-details`},{default:g(()=>[...t[11]||=[s(`ElementGeometryDetails`,-1)]]),_:1}),_(x,{type:`primary`,href:`/api/types#api-type-element-render-geometry`},{default:g(()=>[...t[12]||=[s(`ElementRenderGeometry`,-1)]]),_:1}),_(x,{type:`primary`,href:`/api/types#api-type-map-extent`},{default:g(()=>[...t[13]||=[s(`MapExtent`,-1)]]),_:1})])]),_:1})]),_:1}),f(`div`,T,[f(`div`,E,[t[15]||=f(`strong`,null,`最小创建代码`,-1),_(h,{size:`small`,effect:`plain`},{default:g(()=>[...t[14]||=[s(`TypeScript`,-1)]]),_:1})]),_(te,{code:ke.value,lang:`typescript`},null,8,[`code`])])])])])}}}),[[`__scopeId`,`data-v-4904e14c`]]),L=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { getPointResolution } from 'ol/proj.js';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, ElementGeometryDetails, ShapeInput, ShapeType, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import CodeBlock from '../../components/docs/CodeBlock.vue';
import { createConfiguredLayer } from '../../config/mapSources';
import { createShapeExampleInput, shapeExampleByType, shapeExampleGroups, type ShapeExample, type ShapeExampleGroupId } from '../../config/shapeExamples';

const EARTH_ID = 'docs-elements-shapes';
const SHAPE_MODULE = 'shape-preview';
const HIGHLIGHT_MODULE = 'shape-preview-highlight';
const GUIDE_MODULE = 'shape-preview-guides';
const SHAPE_LAYER_ID = 'shape-preview-elements';
const HIGHLIGHT_LAYER_ID = 'shape-preview-highlight';
const GUIDE_LAYER_ID = 'shape-preview-guides';
const PREVIEW_SCALE = 30_000;
const PREVIEW_ZOOM = 8.1;
const DEFAULT_SHAPE: ShapeType = 'polygon';

type CatalogGroupFilter = 'all' | ShapeExampleGroupId;

const groupColors: Record<ShapeExampleGroupId, { readonly stroke: string; readonly fill: string }> = {
  point: { stroke: '#2563eb', fill: '#409eff' },
  path: { stroke: '#0891b2', fill: 'rgba(8, 145, 178, 0.35)' },
  radial: { stroke: '#047857', fill: 'rgba(5, 150, 105, 0.35)' },
  area: { stroke: '#6d28d9', fill: 'rgba(124, 58, 237, 0.35)' },
  arrow: { stroke: '#c2410c', fill: 'rgba(234, 88, 12, 0.38)' }
};

const groupGlyphs: Record<ShapeExampleGroupId, string> = {
  point: '●',
  path: '⌁',
  radial: '◎',
  area: '◆',
  arrow: '➤'
};

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const previewCenter = shallowRef<readonly [number, number] | null>(null);
const selectedGeometryDetails = shallowRef<ElementGeometryDetails | null>(null);
const selectedType = ref<ShapeType>(DEFAULT_SHAPE);
const catalogQuery = ref('');
const selectedGroup = ref<CatalogGroupFilter>('all');

const selectedExample = computed(() => shapeExampleByType[selectedType.value]);
const groupFilterOptions = [
  { label: '全部类别（20）', value: 'all' },
  ...shapeExampleGroups.map((group) => ({ label: \`\${group.label}（\${group.examples.length}）\`, value: group.id }))
] satisfies readonly { readonly label: string; readonly value: CatalogGroupFilter }[];

const normalizedQuery = computed(() => catalogQuery.value.trim().toLocaleLowerCase('zh-CN'));
const filteredGroups = computed(() =>
  shapeExampleGroups
    .filter((group) => selectedGroup.value === 'all' || selectedGroup.value === group.id)
    .map((group) => ({
      ...group,
      examples: group.examples.filter((example) => {
        if (normalizedQuery.value === '') return true;
        return [example.label, example.type, example.group, example.points, example.render, example.description]
          .join(' ')
          .toLocaleLowerCase('zh-CN')
          .includes(normalizedQuery.value);
      })
    }))
    .filter((group) => group.examples.length > 0)
);
const filteredCount = computed(() => filteredGroups.value.reduce((count, group) => count + group.examples.length, 0));

const formatMapNumber = (value: number) => Number(value.toFixed(2)).toLocaleString('zh-CN');
const formatCoordinate = (coordinate: Coordinate) => \`[\${coordinate.slice(0, 2).map(formatMapNumber).join(', ')}]\`;
const geometryDetailsSummary = computed(() => {
  const geometry = selectedGeometryDetails.value?.renderGeometry;
  if (geometry === undefined) return '尚未读取';
  if (geometry.type === 'point') return \`Point · 坐标 \${formatCoordinate(geometry.coordinates)}\`;
  if (geometry.type === 'polyline') return \`Polyline · \${geometry.coordinates.length} 个坐标\`;
  if (geometry.type === 'polygon') {
    const coordinateCount = geometry.coordinates.reduce((count, ring) => count + ring.length, 0);
    return \`Polygon · \${geometry.coordinates.length} 个环 · \${coordinateCount} 个坐标\`;
  }
  return \`Circle · 中心 \${formatCoordinate(geometry.center)} · View 半径 \${formatMapNumber(geometry.radius)}\`;
});
const geometryExtentSummary = computed(() => {
  const extent = selectedGeometryDetails.value?.extent;
  return extent === undefined ? '尚未读取' : \`[\${extent.map(formatMapNumber).join(', ')}]\`;
});
const extentPointsSummary = computed(() => {
  const points = selectedGeometryDetails.value?.extentPoints;
  return points === undefined ? '尚未读取' : points.map(formatCoordinate).join(' → ');
});
const rangePointsSummary = computed(() => {
  const groups = selectedGeometryDetails.value?.rangePoints;
  if (groups === undefined) return '尚未读取';
  if (groups.length === 0) return '0 组 · Circle 通过 center + radius 精确表达';
  const coordinateCount = groups.reduce((count, points) => count + points.length, 0);
  return \`\${groups.length} 组 · \${coordinateCount} 个最终坐标\`;
});
const controlPointsSummary = computed(() => {
  const points = selectedGeometryDetails.value?.controlPoints;
  if (points === undefined) return '尚未读取';
  if (points === null) return 'null · Circle 不使用 controlPoints';
  return \`\${points.length} 个 · \${points.map(formatCoordinate).join('、')}\`;
});
const circleCenterSummary = computed(() => {
  const details = selectedGeometryDetails.value;
  if (details === null) return '尚未读取';
  return details.center === null ? 'null · 仅 Circle 有值' : formatCoordinate(details.center);
});
const circleRadiusSummary = computed(() => {
  const details = selectedGeometryDetails.value;
  if (details === null) return '尚未读取';
  if (details.radius === null) return 'null · 仅 Circle 有值';
  return \`\${formatMapNumber(details.radius.meters)} 米 · \${formatMapNumber(details.radius.projected)} View 投影单位\`;
});

const minimalCode = computed(() => {
  if (selectedType.value === 'circle') {
    return \`const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);

earth.elements.add({
  geometry: {
    type: 'circle',
    center,
    radius: 54_000 // 米
  }
});\`;
  }

  const pointNames = selectedExample.value.normalizedPoints.map((_point, index) => \`point\${index + 1}\`).join(', ');
  return \`// point1…pointN 均为当前 View 投影坐标
earth.elements.add({
  geometry: {
    type: '\${selectedType.value}',
    controlPoints: [\${pointNames}]
  }
});\`;
});

const styleFor = (example: ShapeExample): StyleSpec => {
  const colors = groupColors[example.groupId];
  if (example.type === 'point') {
    return {
      symbol: {
        type: 'circle',
        radius: 17,
        fill: { type: 'solid', color: colors.fill },
        stroke: { color: '#ffffff', width: 5 }
      },
      zIndex: 20
    };
  }

  if (example.render === 'LineString') {
    return {
      strokes: [
        { color: '#ffffff', width: 12, lineCap: 'round', lineJoin: 'round' },
        { color: colors.stroke, width: 7, lineCap: 'round', lineJoin: 'round' }
      ],
      zIndex: 20
    };
  }

  return {
    strokes: [
      { color: '#ffffff', width: 11, lineCap: 'round', lineJoin: 'round' },
      { color: colors.stroke, width: 5, lineCap: 'round', lineJoin: 'round' }
    ],
    fill: { type: 'solid', color: colors.fill },
    zIndex: 20
  };
};

const highlightStyleFor = (example: ShapeExample): StyleSpec => {
  const color = groupColors[example.groupId].stroke;
  if (example.type === 'point') {
    return {
      symbol: {
        type: 'circle',
        radius: 29,
        fill: { type: 'solid', color: 'rgba(255, 255, 255, 0.12)' },
        stroke: { color, width: 9 }
      },
      zIndex: 10
    };
  }

  if (example.render === 'LineString') {
    return {
      strokes: [{ color, width: 22, lineCap: 'round', lineJoin: 'round' }],
      zIndex: 10
    };
  }

  return {
    strokes: [{ color, width: 18, lineCap: 'round', lineJoin: 'round' }],
    fill: { type: 'solid', color: 'rgba(255, 255, 255, 0.1)' },
    zIndex: 10
  };
};

const inputPointsFor = (earth: Earth, geometry: ShapeInput): readonly Coordinate[] => {
  if (geometry.type === 'circle') {
    const center: Coordinate = [geometry.center[0]!, geometry.center[1]!];
    const projection = earth.view.olView.getProjection();
    const metersPerProjectionUnit = getPointResolution(projection, 1, [center[0], center[1]], 'm');
    const projectedRadius = geometry.radius / metersPerProjectionUnit;
    return [center, [center[0] + projectedRadius, center[1]]];
  }

  const points = geometry.controlPoints;
  if (typeof points[0] !== 'number') return points as readonly Coordinate[];
  const flatPoints = points as readonly number[];
  const result: Coordinate[] = [];
  for (let index = 0; index < flatPoints.length; index += 2) result.push([flatPoints[index]!, flatPoints[index + 1]!]);
  return result;
};

const addGuides = (earth: Earth, points: readonly Coordinate[]) => {
  if (points.length > 1) {
    earth.elements.add({
      id: 'shape-preview-control-path',
      module: GUIDE_MODULE,
      layerId: GUIDE_LAYER_ID,
      geometry: { type: 'polyline', controlPoints: points },
      style: {
        strokes: [
          { color: 'rgba(255, 255, 255, 0.96)', width: 7, lineDash: [9, 7], lineCap: 'round' },
          { color: '#334155', width: 2, lineDash: [9, 7], lineCap: 'round' }
        ],
        zIndex: 30
      }
    });
  }

  for (const [index, coordinate] of points.entries()) {
    earth.elements.add({
      id: \`shape-preview-control-\${index + 1}\`,
      module: GUIDE_MODULE,
      layerId: GUIDE_LAYER_ID,
      geometry: { type: 'point', controlPoints: [coordinate] },
      style: {
        symbol: {
          type: 'circle',
          radius: 9,
          fill: { type: 'solid', color: '#1f2937' },
          stroke: { color: '#ffffff', width: 4 }
        },
        text: {
          text: String(index + 1),
          fontSize: 11,
          fontWeight: 'bold',
          fill: { type: 'solid', color: '#ffffff' }
        },
        zIndex: 40
      }
    });
  }
};

const focusSelected = () => {
  const earth = earthRef.value;
  const center = previewCenter.value;
  if (earth === null || center === null) return;
  earth.view.animateFlyTo(center, { zoom: PREVIEW_ZOOM, duration: 420 });
};

const renderShape = (type: ShapeType) => {
  const earth = earthRef.value;
  const center = previewCenter.value;
  if (earth === null || center === null) return;

  earth.elements.remove({ module: SHAPE_MODULE });
  earth.elements.remove({ module: HIGHLIGHT_MODULE });
  earth.elements.remove({ module: GUIDE_MODULE });
  selectedType.value = type;

  const example: ShapeExample = { type, ...shapeExampleByType[type] };
  const geometry = createShapeExampleInput(type, center, PREVIEW_SCALE);
  earth.elements.add({
    id: \`shape-preview-highlight-\${type}\`,
    module: HIGHLIGHT_MODULE,
    layerId: HIGHLIGHT_LAYER_ID,
    geometry,
    style: highlightStyleFor(example)
  });

  // #region shape-gallery
  const element = earth.elements.add({
    id: \`shape-preview-\${type}\`,
    module: SHAPE_MODULE,
    layerId: SHAPE_LAYER_ID,
    geometry: createShapeExampleInput(type, center, PREVIEW_SCALE),
    style: styleFor(example)
  });
  const info = element.geometryDetails;
  selectedGeometryDetails.value = info;
  // #endregion shape-gallery

  addGuides(earth, inputPointsFor(earth, element.state.geometry));
  focusSelected();
};

const clearFilters = () => {
  catalogQuery.value = '';
  selectedGroup.value = 'all';
};

const reset = () => {
  clearFilters();
  selectedType.value = DEFAULT_SHAPE;
  renderShape(DEFAULT_SHAPE);
};

defineExpose({ reset, focusSelected });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: PREVIEW_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.45 });
  earth.layers.add({ kind: 'vector', id: HIGHLIGHT_LAYER_ID, zIndex: 18, declutter: false });
  earth.layers.add({ kind: 'vector', id: SHAPE_LAYER_ID, zIndex: 20, declutter: false });
  earth.layers.add({ kind: 'vector', id: GUIDE_LAYER_ID, zIndex: 30, declutter: false });
  earthRef.value = earth;
  previewCenter.value = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  renderShape(selectedType.value);
});

onBeforeUnmount(() => {
  earthRef.value?.destroy();
  earthRef.value = null;
  previewCenter.value = null;
  selectedGeometryDetails.value = null;
});
<\/script>

<template>
  <div class="example-demo shape-catalog">
    <div class="example-demo__control-panel" aria-label="筛选 ShapeType">
      <div class="example-demo__control-grid shape-catalog__filters">
        <el-input v-model="catalogQuery" clearable placeholder="搜索中文名或 ShapeType" aria-label="搜索 ShapeType" />
        <el-select v-model="selectedGroup" aria-label="按图形类别筛选">
          <el-option v-for="option in groupFilterOptions" :key="option.value" :label="option.label" :value="option.value" />
        </el-select>
      </div>
      <div class="example-demo__action-row">
        <div class="example-demo__action-group">
          <div class="example-demo__action-buttons">
            <el-button :disabled="catalogQuery === '' && selectedGroup === 'all'" @click="clearFilters">清除筛选</el-button>
          </div>
        </div>
        <div class="example-demo__feedback" aria-live="polite">
          <el-tag type="info" effect="plain">找到 {{ filteredCount }} / 20</el-tag>
        </div>
      </div>
    </div>

    <div class="shape-catalog__explorer">
      <section class="shape-catalog__list-panel" aria-label="ShapeType 视觉目录">
        <div class="shape-catalog__panel-heading">
          <div>
            <strong>选择图形</strong>
            <span>点击卡片，在右侧地图查看最终效果</span>
          </div>
        </div>

        <el-scrollbar v-if="filteredCount > 0" max-height="690px" class="shape-catalog__scrollbar">
          <div class="shape-catalog__groups">
            <section v-for="group in filteredGroups" :key="group.id" class="shape-catalog__group">
              <div class="shape-catalog__group-heading">
                <h4>{{ group.label }}</h4>
                <el-tag size="small" effect="plain">{{ group.examples.length }}</el-tag>
              </div>
              <div class="shape-catalog__cards">
                <el-button
                  v-for="example in group.examples"
                  :key="example.type"
                  class="shape-catalog__card"
                  :class="{ 'is-selected': selectedType === example.type }"
                  :type="selectedType === example.type ? 'primary' : undefined"
                  :plain="selectedType !== example.type"
                  :aria-pressed="selectedType === example.type"
                  @click="renderShape(example.type)"
                >
                  <span class="shape-catalog__glyph" aria-hidden="true">{{ groupGlyphs[example.groupId] }}</span>
                  <span class="shape-catalog__card-copy">
                    <strong>{{ example.label }}</strong>
                    <code>{{ example.type }}</code>
                    <small>{{ example.points }}</small>
                  </span>
                </el-button>
              </div>
            </section>
          </div>
        </el-scrollbar>

        <el-empty v-else :image-size="72" description="没有匹配的图形类型">
          <el-button type="primary" plain @click="clearFilters">查看全部 20 种 Shape</el-button>
        </el-empty>
      </section>

      <section class="shape-catalog__preview-panel" aria-label="选中 Shape 预览">
        <div class="shape-catalog__selected-heading" aria-live="polite">
          <div>
            <span>当前图形</span>
            <h4>
              {{ selectedExample.label }} <code>{{ selectedType }}</code>
            </h4>
          </div>
          <el-button type="primary" plain @click="focusSelected">重新聚焦</el-button>
        </div>

        <div class="shape-catalog__map-wrap">
          <div ref="mapTarget" class="example-stage shape-catalog__stage"></div>
          <div class="shape-catalog__map-label">
            <strong>{{ selectedExample.label }}</strong>
            <code>{{ selectedType }}</code>
            <span>数字为控制点顺序，虚线为控制路径</span>
          </div>
        </div>

        <el-descriptions class="shape-catalog__details" :column="1" border>
          <el-descriptions-item label="中文名称">{{ selectedExample.label }}</el-descriptions-item>
          <el-descriptions-item label="英文类型"
            ><code>{{ selectedType }}</code></el-descriptions-item
          >
          <el-descriptions-item label="类别与输入">{{ selectedExample.group }} · {{ selectedExample.points }}</el-descriptions-item>
          <el-descriptions-item label="最终渲染">{{ selectedExample.render }} · {{ selectedExample.description }}</el-descriptions-item>
          <el-descriptions-item label="完整静态几何">{{ geometryDetailsSummary }}</el-descriptions-item>
          <el-descriptions-item label="地图坐标范围"
            ><code>{{ geometryExtentSummary }}</code></el-descriptions-item
          >
          <el-descriptions-item label="范围角点"
            ><code>{{ extentPointsSummary }}</code></el-descriptions-item
          >
          <el-descriptions-item label="最终轮廓点">{{ rangePointsSummary }}</el-descriptions-item>
          <el-descriptions-item label="规范控制点"
            ><code>{{ controlPointsSummary }}</code></el-descriptions-item
          >
          <el-descriptions-item label="圆心"
            ><code>{{ circleCenterSummary }}</code></el-descriptions-item
          >
          <el-descriptions-item label="半径"
            ><code>{{ circleRadiusSummary }}</code></el-descriptions-item
          >
          <el-descriptions-item label="相关类型">
            <span class="shape-catalog__type-links">
              <el-link type="primary" href="/api/types#api-type-shape-type">ShapeType</el-link>
              <el-link type="primary" href="/api/types#api-type-shape-input">ShapeInput</el-link>
              <el-link type="primary" href="/api/types#api-type-shape-state">ShapeState</el-link>
              <el-link type="primary" href="/api/types#api-type-element-geometry-details">ElementGeometryDetails</el-link>
              <el-link type="primary" href="/api/types#api-type-element-render-geometry">ElementRenderGeometry</el-link>
              <el-link type="primary" href="/api/types#api-type-map-extent">MapExtent</el-link>
            </span>
          </el-descriptions-item>
        </el-descriptions>

        <div class="shape-catalog__code" aria-label="最小创建代码">
          <div class="shape-catalog__code-title">
            <strong>最小创建代码</strong>
            <el-tag size="small" effect="plain">TypeScript</el-tag>
          </div>
          <CodeBlock :code="minimalCode" lang="typescript" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.shape-catalog__filters {
  grid-template-columns: minmax(220px, 1fr) minmax(170px, 0.55fr);
}

.shape-catalog__explorer {
  display: grid;
  grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
  align-items: start;
  gap: 16px;
}

.shape-catalog__list-panel,
.shape-catalog__preview-panel {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--el-border-color-light, var(--doc-border));
  border-radius: 12px;
  background: var(--el-bg-color, var(--doc-surface));
}

.shape-catalog__panel-heading,
.shape-catalog__selected-heading {
  display: flex;
  min-height: 58px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 14px;
  border-bottom: 1px solid var(--el-border-color-lighter, var(--doc-border));
}

.shape-catalog__panel-heading div,
.shape-catalog__selected-heading > div {
  display: grid;
  min-width: 0;
  gap: 3px;
}

.shape-catalog__panel-heading strong,
.shape-catalog__selected-heading h4 {
  margin: 0;
  color: var(--el-text-color-primary, var(--doc-text));
  font-size: 14px;
}

.shape-catalog__panel-heading span,
.shape-catalog__selected-heading span {
  color: var(--el-text-color-secondary, var(--doc-muted));
  font-size: 12px;
}

.shape-catalog__selected-heading h4 {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  font-size: 17px;
}

.shape-catalog__selected-heading code {
  color: var(--doc-primary-deep);
  font-size: 12px;
}

.shape-catalog__scrollbar {
  padding: 14px 6px 14px 14px;
}

.shape-catalog__groups {
  display: grid;
  gap: 18px;
  padding-right: 8px;
}

.shape-catalog__group-heading {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.shape-catalog__group-heading h4 {
  margin: 0;
  color: var(--el-text-color-primary, var(--doc-text));
  font-size: 13px;
}

.shape-catalog__cards {
  display: grid;
  gap: 8px;
}

.shape-catalog__card.el-button {
  justify-content: flex-start;
  width: 100%;
  min-width: 0;
  height: auto;
  min-height: 64px;
  margin: 0;
  padding: 9px 11px;
  text-align: left;
}

.shape-catalog__card.el-button + .shape-catalog__card.el-button {
  margin-left: 0;
}

.shape-catalog__card.is-selected {
  box-shadow: 0 0 0 2px var(--el-color-primary-light-7, var(--doc-primary));
}

.shape-catalog__glyph {
  display: grid;
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 9px;
  background: var(--el-fill-color, var(--doc-surface-soft));
  color: var(--doc-primary-deep);
  font-size: 19px;
}

.shape-catalog__card.is-selected .shape-catalog__glyph {
  background: var(--el-color-white, var(--doc-surface));
  color: var(--el-color-primary, var(--doc-primary-deep));
}

.shape-catalog__card-copy {
  display: grid;
  min-width: 0;
  gap: 2px;
  margin-left: 10px;
}

.shape-catalog__card-copy :is(strong, code, small) {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shape-catalog__card-copy code {
  font-size: 11px;
  opacity: 0.82;
}

.shape-catalog__card-copy small {
  font-size: 11px;
  opacity: 0.68;
}

.shape-catalog__map-wrap {
  position: relative;
  margin: 14px;
}

.shape-catalog__stage {
  height: 430px;
  border-radius: 12px;
}

.shape-catalog__map-label {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  display: grid;
  max-width: calc(100% - 80px);
  padding: 9px 11px;
  gap: 2px;
  border: 1px solid var(--el-border-color-light, var(--doc-border));
  border-radius: 9px;
  background: var(--el-bg-color-overlay, var(--doc-surface));
  box-shadow: var(--el-box-shadow-light, var(--doc-shadow));
  pointer-events: none;
}

.shape-catalog__map-label strong {
  color: var(--el-text-color-primary, var(--doc-text));
  font-size: 14px;
}

.shape-catalog__map-label code {
  color: var(--doc-primary-deep);
  font-size: 11px;
}

.shape-catalog__map-label span {
  color: var(--el-text-color-secondary, var(--doc-muted));
  font-size: 10px;
}

.shape-catalog__details {
  margin: 0 14px 14px;
}

.shape-catalog__details code {
  color: var(--doc-primary-deep);
}

.shape-catalog__type-links {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
}

.shape-catalog__code {
  margin: 0 14px 14px;
  overflow: hidden;
  border: 1px solid var(--el-border-color-light, var(--doc-border));
  border-radius: 9px;
  background: var(--doc-code-background);
}

.shape-catalog__code-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px;
  border-bottom: 1px solid var(--el-border-color-light, var(--doc-border));
  color: var(--el-text-color-primary, var(--doc-text));
  font-size: 12px;
}

@media (max-width: 1500px) {
  .shape-catalog__filters {
    grid-template-columns: minmax(0, 1fr) minmax(160px, 0.55fr);
  }

  .shape-catalog__explorer {
    grid-template-columns: 1fr;
  }

  .shape-catalog__preview-panel {
    grid-row: 1;
  }

  .shape-catalog__list-panel {
    grid-row: 2;
  }

  .shape-catalog__cards {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .shape-catalog__filters {
    grid-template-columns: 1fr;
  }

  .shape-catalog__filters > * {
    width: 100%;
  }

  .shape-catalog__selected-heading {
    align-items: flex-start;
  }

  .shape-catalog__selected-heading .el-button {
    flex: 0 0 auto;
  }

  .shape-catalog__map-wrap,
  .shape-catalog__details,
  .shape-catalog__code {
    margin-right: 10px;
    margin-left: 10px;
  }

  .shape-catalog__stage {
    height: 360px;
  }

  .shape-catalog__cards {
    grid-template-columns: 1fr;
  }
}
</style>
`;export{I as n,L as t};