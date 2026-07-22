import{A as e,At as t,B as n,M as r,N as i,Nt as a,P as o,Q as s,R as c,T as l,ct as u,dn as d,fn as f,it as p,j as m,ot as h,tt as g,x as _,xt as v,z as y,zt as b}from"./TypeExpression-D6csDz4V.js";import{B as x,H as S,V as C,W as w,a as T,n as E,t as D,z as O}from"./index-4uKXPGRf.js";var ee={class:`example-demo`},te={class:`example-demo__control-panel element-query-demo__control-panel`},ne={class:`example-demo__control-grid element-query-demo__filters`},re={class:`example-demo__field element-query-demo__field`},ie={class:`example-demo__field element-query-demo__field`},ae={class:`example-demo__field element-query-demo__field`},oe={class:`example-demo__field element-query-demo__field`},se={class:`example-demo__field element-query-demo__field`},k={class:`example-demo__action-row`},A={class:`example-demo__action-group element-query-demo__action-group`,role:`group`,"aria-label":`查询操作`},j={class:`example-demo__action-buttons`},M={class:`example-demo__feedback element-query-demo__feedback`,"aria-live":`polite`},N={class:`element-query-demo__stage-wrap`},P={class:`example-demo__control-panel element-query-demo__actions`},F={class:`example-demo__action-row`},I={class:`example-demo__field element-query-demo__field`},L={class:`example-demo__action-group element-query-demo__action-group`,role:`group`,"aria-label":`查询结果操作`},ce={class:`example-demo__action-buttons`},le={class:`example-demo__feedback element-query-demo__feedback`,"aria-live":`polite`},R=`docs-elements-query`,z=`query-demo-elements`,B=9.5,ue=10,V=_(n({__name:`ElementQueryDemo`,setup(n){let _=t(null),b=a(null),x=t(`all`),S=t(`all`),C=t(`all`),w=t(!1),D=t(2),O=t([]),V=t(`query-center`),H=t(`等待查询`),U=a(null),W=new Set,G=e(()=>{let e=U.value;return e===null?{}:{left:`${e[0]}px`,top:`${e[1]}px`,width:`${Math.max(1,e[2]-e[0])}px`,height:`${Math.max(1,e[3]-e[1])}px`}}),K=(e,t,n=0)=>{let r=t===`selected`;return{text:e,offsetY:n,fontSize:r?14:12,fontWeight:r?`bold`:`normal`,padding:[4,7,4,7],fill:{type:`solid`,color:`#111827`},backgroundFill:{type:`solid`,color:t===`muted`?`rgba(255, 255, 255, 0.7)`:`rgba(255, 255, 255, 0.94)`},backgroundStroke:{color:r?`#f59e0b`:`#ffffff`,width:r?2:1}}},q=(e,t,n,r)=>{let i=r===`selected`,a=r!==`muted`,o=i?`#f59e0b`:t===`vehicles`?`#409eff`:`#67c23a`,s=`rgba(148, 163, 184, 0.55)`;return n===`point`?{symbol:{type:`circle`,radius:i?20:a?16:13,fill:{type:`solid`,color:a?o:s},stroke:{color:`#ffffff`,width:i?5:3}},text:K(e,r,i?42:36),zIndex:i?30:a?20:10}:n===`polyline`?{strokes:[{color:a?`#ffffff`:`rgba(255, 255, 255, 0.65)`,width:i?13:a?10:7,lineCap:`round`,lineJoin:`round`},{color:a?o:s,width:i?7:a?5:3,lineCap:`round`,lineJoin:`round`}],text:K(e,r,i?30:25),zIndex:i?30:a?20:10}:{strokes:[{color:a?`#ffffff`:`rgba(255, 255, 255, 0.65)`,width:i?11:a?8:6},{color:a?o:s,width:i?6:a?4:3}],fill:{type:`solid`,color:i?`rgba(245, 158, 11, 0.38)`:a?t===`vehicles`?`rgba(64, 158, 255, 0.3)`:`rgba(103, 194, 58, 0.3)`:`rgba(148, 163, 184, 0.16)`},text:K(e,r),zIndex:i?30:a?20:10}},J=()=>{let e=b.value;if(e!==null)for(let t of e.elements.query()){let e=t.id===V.value?`selected`:W.has(t.id)?`matched`:`muted`;t.update({style:q(t.state.data?.label??t.id,t.state.module??`—`,t.state.type,e)})}},Y=e=>{let t=e.state.geometry;if(t.type===`circle`)return[t.center[0],t.center[1]];if(t.controlPoints.length===0)return;let[n,r]=t.controlPoints.reduce((e,t)=>[e[0]+t[0],e[1]+t[1]],[0,0]);return[n/t.controlPoints.length,r/t.controlPoints.length]},X=()=>{let e=b.value?.elements.get(V.value);if(e===void 0)return;let t=Y(e);t!==void 0&&b.value?.view.animateFlyTo(t,{zoom:ue,duration:450})},Z=()=>{let e=b.value?.elements.get(V.value);e!==void 0&&(U.value=null,J(),X(),H.value=e.state.visible?`已定位：${e.state.data?.label??e.id}`:`已选择：${e.state.data?.label??e.id}（当前隐藏）`)},de=e=>{V.value=e.id,Z()},Q=()=>{let e=b.value;if(e===null)return;let t={...x.value===`all`?{}:{module:x.value},...S.value===`all`?{}:{type:S.value},...C.value===`all`?{}:{visible:C.value===`visible`},...w.value?{predicate:e=>(e.data?.priority??0)>=D.value}:{}},n=Object.keys(t).length===0?e.elements.query():e.elements.query(t);W=new Set(n.map(({id:e})=>e)),U.value=null,O.value=n.map(({state:e})=>({id:e.id,label:e.data?.label??e.id,type:e.type,module:e.module??`—`,priority:e.data?.priority??0,visible:e.visible})),O.value.some(({id:e})=>e===V.value)||(V.value=O.value[0]?.id??``),J(),V.value&&X(),H.value=`query() 匹配 ${n.length} 个 Element`},fe=()=>{let e=b.value?.elements.get(V.value);U.value=null,H.value=e===void 0?`get('${V.value}') → undefined`:`get('${V.value}') → ${e.state.data?.label}`,e!==void 0&&(J(),X())},pe=()=>{let e=b.value?.elements.getScreenExtent(V.value);U.value=e??null,H.value=e===void 0?`目标当前没有可见屏幕范围`:`屏幕范围：[${e.map(e=>e.toFixed(1)).join(`, `)}]`,J()},$=e=>{let t=b.value;if(t===null)return;let n=t.elements.atPixel([e.pixel[0],e.pixel[1]]);if(n===void 0){U.value=null,H.value=`atPixel()：点击位置未命中 Element`;return}V.value=n.element.id,U.value=null,J(),H.value=`atPixel() 命中：${n.element.state.data?.label??n.element.id}`};return g(()=>{if(_.value===null)return;let e=T({id:R,target:_.value,view:{zoom:B},controls:{zoom:!0,rotate:!1,attribution:!0}});E(e,`vector`).update({opacity:.5}),e.layers.add({kind:`vector`,id:z,zIndex:20,declutter:!0});let t=e.view.toProjectedCoordinates([116.4074,39.9042]);e.view.flyTo(t,B);let n=[{id:`query-center`,module:`vehicles`,label:`中心车辆`,priority:3,visible:!0,geometry:{type:`point`,controlPoints:[[t[0]-13e3,t[1]+9e3]]}},{id:`query-vehicle-route`,module:`vehicles`,label:`巡检路线`,priority:2,visible:!0,geometry:{type:`polyline`,controlPoints:[[t[0]-18e3,t[1]-9e3],[t[0]-7e3,t[1]-3e3],[t[0]+2e3,t[1]-1e4]]}},{id:`query-facility-range`,module:`facilities`,label:`服务范围`,priority:4,visible:!0,geometry:{type:`circle`,center:[t[0]+12e3,t[1]-7e3],radius:5500}},{id:`query-facility-point`,module:`facilities`,label:`北侧站点`,priority:2,visible:!0,geometry:{type:`point`,controlPoints:[[t[0]+14e3,t[1]+1e4]]}},{id:`query-vehicle-hidden`,module:`vehicles`,label:`离线车辆`,priority:1,visible:!1,geometry:{type:`point`,controlPoints:[[t[0],t[1]+14e3]]}}];for(let t of n)e.elements.add({id:t.id,module:t.module,layerId:z,visible:t.visible,data:{label:t.label,priority:t.priority},geometry:t.geometry,style:q(t.label,t.module,t.geometry.type,t.id===V.value?`selected`:`matched`)});b.value=e,e.map.on(`singleclick`,$),Q()}),s(()=>{b.value?.map.un(`singleclick`,$),b.value?.destroy(),b.value=null,W.clear()}),(e,t)=>{let n=u(`el-option`),a=u(`el-select`),s=u(`el-switch`),g=u(`el-input-number`),b=u(`el-button`),T=u(`el-tag`),E=u(`el-table-column`),R=u(`el-table`);return p(),o(`div`,ee,[m(`div`,te,[m(`div`,ne,[m(`div`,re,[t[6]||=m(`span`,null,`模块`,-1),y(a,{modelValue:x.value,"onUpdate:modelValue":t[0]||=e=>x.value=e,"aria-label":`模块条件`},{default:v(()=>[y(n,{label:`全部模块`,value:`all`}),y(n,{label:`vehicles`,value:`vehicles`}),y(n,{label:`facilities`,value:`facilities`})]),_:1},8,[`modelValue`])]),m(`div`,ie,[t[7]||=m(`span`,null,`图形类型`,-1),y(a,{modelValue:S.value,"onUpdate:modelValue":t[1]||=e=>S.value=e,"aria-label":`图形类型条件`},{default:v(()=>[y(n,{label:`全部类型`,value:`all`}),y(n,{label:`point`,value:`point`}),y(n,{label:`polyline`,value:`polyline`}),y(n,{label:`circle`,value:`circle`})]),_:1},8,[`modelValue`])]),m(`div`,ae,[t[8]||=m(`span`,null,`显隐`,-1),y(a,{modelValue:C.value,"onUpdate:modelValue":t[2]||=e=>C.value=e,"aria-label":`显隐条件`},{default:v(()=>[y(n,{label:`全部显隐`,value:`all`}),y(n,{label:`仅可见`,value:`visible`}),y(n,{label:`仅隐藏`,value:`hidden`})]),_:1},8,[`modelValue`])]),m(`div`,oe,[t[9]||=m(`span`,null,`Predicate`,-1),y(s,{modelValue:w.value,"onUpdate:modelValue":t[3]||=e=>w.value=e,"active-text":`启用 predicate`},null,8,[`modelValue`])]),m(`div`,se,[t[10]||=m(`span`,null,`最低优先级`,-1),y(g,{modelValue:D.value,"onUpdate:modelValue":t[4]||=e=>D.value=e,min:1,max:4,disabled:!w.value,"aria-label":`最低优先级`},null,8,[`modelValue`,`disabled`])])]),m(`div`,k,[m(`div`,A,[m(`div`,j,[y(b,{type:`primary`,onClick:Q},{default:v(()=>[...t[11]||=[c(`执行 query()`,-1)]]),_:1})])]),m(`div`,M,[y(T,{type:`primary`,effect:`plain`},{default:v(()=>[c(f(H.value),1)]),_:1})])])]),m(`div`,N,[m(`div`,{ref_key:`mapTarget`,ref:_,class:`example-stage element-query-demo__stage`},null,512),y(T,{class:`element-query-demo__map-hint`,type:`primary`,effect:`dark`},{default:v(()=>[...t[12]||=[c(`点击图形执行 atPixel()`,-1)]]),_:1}),U.value?(p(),o(`div`,{key:0,class:`element-query-demo__screen-extent`,style:d(G.value)},[...t[13]||=[m(`span`,null,`getScreenExtent()`,-1)]],4)):i(``,!0)]),m(`div`,P,[m(`div`,F,[m(`div`,I,[t[14]||=m(`span`,null,`查询结果`,-1),y(a,{modelValue:V.value,"onUpdate:modelValue":t[5]||=e=>V.value=e,"aria-label":`选择查询结果`,onChange:Z},{default:v(()=>[V.value&&!O.value.some(e=>e.id===V.value)?(p(),r(n,{key:0,label:`${V.value} · 未匹配当前条件`,value:V.value},null,8,[`label`,`value`])):i(``,!0),(p(!0),o(l,null,h(O.value,e=>(p(),r(n,{key:e.id,label:`${e.label} · ${e.id}`,value:e.id},null,8,[`label`,`value`]))),128))]),_:1},8,[`modelValue`])]),m(`div`,L,[m(`div`,ce,[y(b,{onClick:fe},{default:v(()=>[...t[15]||=[c(`get()`,-1)]]),_:1}),y(b,{onClick:pe},{default:v(()=>[...t[16]||=[c(`getScreenExtent()`,-1)]]),_:1})])]),m(`div`,le,[y(T,{type:`success`,effect:`plain`},{default:v(()=>[c(`匹配 `+f(O.value.length)+` 个`,1)]),_:1})])])]),y(R,{data:O.value,border:``,size:`small`,"row-key":`id`,"highlight-current-row":``,"current-row-key":V.value,"empty-text":`没有匹配的 Element`,class:`element-query-demo__table`,onRowClick:de},{default:v(()=>[y(E,{prop:`label`,label:`名称`,"min-width":`130`}),y(E,{prop:`id`,label:`ID`,"min-width":`170`}),y(E,{prop:`type`,label:`ShapeType`,"min-width":`100`}),y(E,{prop:`module`,label:`Module`,"min-width":`110`}),y(E,{prop:`priority`,label:`优先级`,width:`80`}),y(E,{label:`可见`,width:`78`},{default:v(e=>[c(f(e.row.visible?`是`:`否`),1)]),_:1})]),_:1},8,[`data`,`current-row-key`])])}}}),[[`__scopeId`,`data-v-badf4bb8`]]),H=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import type MapBrowserEvent from 'ol/MapBrowserEvent.js';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, Earth, Element, ElementSelector, ScreenExtent, ShapeType, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-elements-query';
const BUSINESS_LAYER_ID = 'query-demo-elements';
const MAP_ZOOM = 9.5;
const FOCUS_ZOOM = 10;

interface DemoData {
  label: string;
  priority: number;
}

interface ResultRow {
  id: string;
  label: string;
  type: ShapeType;
  module: string;
  priority: number;
  visible: boolean;
}

type VisualState = 'selected' | 'matched' | 'muted';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const moduleFilter = ref('all');
const typeFilter = ref<'all' | ShapeType>('all');
const visibilityFilter = ref<'all' | 'visible' | 'hidden'>('all');
const usePriority = ref(false);
const minimumPriority = ref(2);
const results = ref<ResultRow[]>([]);
const selectedId = ref('query-center');
const status = ref('等待查询');
const screenExtent = shallowRef<ScreenExtent | null>(null);
let matchedIds = new Set<string>();

const screenExtentStyle = computed(() => {
  const extent = screenExtent.value;
  if (extent === null) return {};
  return {
    left: \`\${extent[0]}px\`,
    top: \`\${extent[1]}px\`,
    width: \`\${Math.max(1, extent[2] - extent[0])}px\`,
    height: \`\${Math.max(1, extent[3] - extent[1])}px\`
  };
});

const textStyle = (label: string, visualState: VisualState, offsetY = 0): NonNullable<StyleSpec['text']> => {
  const selected = visualState === 'selected';
  const matched = visualState !== 'muted';
  return {
    text: label,
    offsetY,
    fontSize: selected ? 14 : 12,
    fontWeight: selected ? 'bold' : 'normal',
    padding: [4, 7, 4, 7],
    fill: { type: 'solid', color: '#111827' },
    backgroundFill: { type: 'solid', color: matched ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.7)' },
    backgroundStroke: { color: selected ? '#f59e0b' : '#ffffff', width: selected ? 2 : 1 }
  };
};

const shapeStyle = (label: string, module: string, type: ShapeType, visualState: VisualState): StyleSpec => {
  const selected = visualState === 'selected';
  const matched = visualState !== 'muted';
  const color = selected ? '#f59e0b' : module === 'vehicles' ? '#409eff' : '#67c23a';
  const mutedColor = 'rgba(148, 163, 184, 0.55)';
  if (type === 'point') {
    return {
      symbol: {
        type: 'circle',
        radius: selected ? 20 : matched ? 16 : 13,
        fill: { type: 'solid', color: matched ? color : mutedColor },
        stroke: { color: '#ffffff', width: selected ? 5 : 3 }
      },
      text: textStyle(label, visualState, selected ? 42 : 36),
      zIndex: selected ? 30 : matched ? 20 : 10
    };
  }
  if (type === 'polyline') {
    return {
      strokes: [
        { color: matched ? '#ffffff' : 'rgba(255, 255, 255, 0.65)', width: selected ? 13 : matched ? 10 : 7, lineCap: 'round', lineJoin: 'round' },
        { color: matched ? color : mutedColor, width: selected ? 7 : matched ? 5 : 3, lineCap: 'round', lineJoin: 'round' }
      ],
      text: textStyle(label, visualState, selected ? 30 : 25),
      zIndex: selected ? 30 : matched ? 20 : 10
    };
  }
  return {
    strokes: [
      { color: matched ? '#ffffff' : 'rgba(255, 255, 255, 0.65)', width: selected ? 11 : matched ? 8 : 6 },
      { color: matched ? color : mutedColor, width: selected ? 6 : matched ? 4 : 3 }
    ],
    fill: {
      type: 'solid',
      color: selected
        ? 'rgba(245, 158, 11, 0.38)'
        : matched
          ? module === 'vehicles'
            ? 'rgba(64, 158, 255, 0.3)'
            : 'rgba(103, 194, 58, 0.3)'
          : 'rgba(148, 163, 184, 0.16)'
    },
    text: textStyle(label, visualState),
    zIndex: selected ? 30 : matched ? 20 : 10
  };
};

const updatePresentation = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  for (const element of earth.elements.query<DemoData>()) {
    const visualState: VisualState = element.id === selectedId.value ? 'selected' : matchedIds.has(element.id) ? 'matched' : 'muted';
    element.update({ style: shapeStyle(element.state.data?.label ?? element.id, element.state.module ?? '—', element.state.type, visualState) });
  }
};

const centerFor = (element: Element<DemoData>): Coordinate | undefined => {
  const geometry = element.state.geometry;
  if (geometry.type === 'circle') return [geometry.center[0], geometry.center[1]];
  if (geometry.controlPoints.length === 0) return undefined;
  const [x, y] = geometry.controlPoints.reduce<[number, number]>((sum, point) => [sum[0] + point[0], sum[1] + point[1]], [0, 0]);
  return [x / geometry.controlPoints.length, y / geometry.controlPoints.length];
};

const animateToSelected = () => {
  const element = earthRef.value?.elements.get<DemoData>(selectedId.value);
  if (element === undefined) return;
  const center = centerFor(element);
  if (center === undefined) return;
  earthRef.value?.view.animateFlyTo(center, { zoom: FOCUS_ZOOM, duration: 450 });
};

const focusSelected = () => {
  const element = earthRef.value?.elements.get<DemoData>(selectedId.value);
  if (element === undefined) return;
  screenExtent.value = null;
  updatePresentation();
  animateToSelected();
  status.value = element.state.visible
    ? \`已定位：\${element.state.data?.label ?? element.id}\`
    : \`已选择：\${element.state.data?.label ?? element.id}（当前隐藏）\`;
};

const selectRow = (row: ResultRow) => {
  selectedId.value = row.id;
  focusSelected();
};

// #region element-query
const runQuery = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  const selector: ElementSelector<DemoData> = {
    ...(moduleFilter.value === 'all' ? {} : { module: moduleFilter.value }),
    ...(typeFilter.value === 'all' ? {} : { type: typeFilter.value }),
    ...(visibilityFilter.value === 'all' ? {} : { visible: visibilityFilter.value === 'visible' }),
    ...(usePriority.value ? { predicate: (state) => (state.data?.priority ?? 0) >= minimumPriority.value } : {})
  };
  const matched = Object.keys(selector).length === 0 ? earth.elements.query<DemoData>() : earth.elements.query(selector);
  matchedIds = new Set(matched.map(({ id }) => id));
  screenExtent.value = null;
  results.value = matched.map(({ state }) => ({
    id: state.id,
    label: state.data?.label ?? state.id,
    type: state.type,
    module: state.module ?? '—',
    priority: state.data?.priority ?? 0,
    visible: state.visible
  }));
  if (!results.value.some(({ id }) => id === selectedId.value)) selectedId.value = results.value[0]?.id ?? '';
  updatePresentation();
  if (selectedId.value) animateToSelected();
  status.value = \`query() 匹配 \${matched.length} 个 Element\`;
};

const getSelected = () => {
  const element = earthRef.value?.elements.get<DemoData>(selectedId.value);
  screenExtent.value = null;
  status.value = element === undefined ? \`get('\${selectedId.value}') → undefined\` : \`get('\${selectedId.value}') → \${element.state.data?.label}\`;
  if (element !== undefined) {
    updatePresentation();
    animateToSelected();
  }
};

const inspectExtent = () => {
  const extent = earthRef.value?.elements.getScreenExtent(selectedId.value);
  screenExtent.value = extent ?? null;
  status.value = extent === undefined ? '目标当前没有可见屏幕范围' : \`屏幕范围：[\${extent.map((value) => value.toFixed(1)).join(', ')}]\`;
  updatePresentation();
};

const hitAtPixel = (event: MapBrowserEvent) => {
  const earth = earthRef.value;
  if (earth === null) return;
  const hit = earth.elements.atPixel<DemoData>([event.pixel[0]!, event.pixel[1]!]);
  if (hit === undefined) {
    screenExtent.value = null;
    status.value = 'atPixel()：点击位置未命中 Element';
    return;
  }
  selectedId.value = hit.element.id;
  screenExtent.value = null;
  updatePresentation();
  status.value = \`atPixel() 命中：\${hit.element.state.data?.label ?? hit.element.id}\`;
};
// #endregion element-query

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: MAP_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.5 });
  earth.layers.add({ kind: 'vector', id: BUSINESS_LAYER_ID, zIndex: 20, declutter: true });
  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  earth.view.flyTo(center, MAP_ZOOM);
  const items = [
    {
      id: 'query-center',
      module: 'vehicles',
      label: '中心车辆',
      priority: 3,
      visible: true,
      geometry: { type: 'point', controlPoints: [[center[0] - 13_000, center[1] + 9_000]] }
    },
    {
      id: 'query-vehicle-route',
      module: 'vehicles',
      label: '巡检路线',
      priority: 2,
      visible: true,
      geometry: {
        type: 'polyline',
        controlPoints: [
          [center[0] - 18_000, center[1] - 9_000],
          [center[0] - 7_000, center[1] - 3_000],
          [center[0] + 2_000, center[1] - 10_000]
        ]
      }
    },
    {
      id: 'query-facility-range',
      module: 'facilities',
      label: '服务范围',
      priority: 4,
      visible: true,
      geometry: { type: 'circle', center: [center[0] + 12_000, center[1] - 7_000], radius: 5_500 }
    },
    {
      id: 'query-facility-point',
      module: 'facilities',
      label: '北侧站点',
      priority: 2,
      visible: true,
      geometry: { type: 'point', controlPoints: [[center[0] + 14_000, center[1] + 10_000]] }
    },
    {
      id: 'query-vehicle-hidden',
      module: 'vehicles',
      label: '离线车辆',
      priority: 1,
      visible: false,
      geometry: { type: 'point', controlPoints: [[center[0], center[1] + 14_000]] }
    }
  ] as const;
  for (const item of items) {
    earth.elements.add<DemoData>({
      id: item.id,
      module: item.module,
      layerId: BUSINESS_LAYER_ID,
      visible: item.visible,
      data: { label: item.label, priority: item.priority },
      geometry: item.geometry,
      style: shapeStyle(item.label, item.module, item.geometry.type, item.id === selectedId.value ? 'selected' : 'matched')
    });
  }
  earthRef.value = earth;
  earth.map.on('singleclick', hitAtPixel);
  runQuery();
});

onBeforeUnmount(() => {
  earthRef.value?.map.un('singleclick', hitAtPixel);
  earthRef.value?.destroy();
  earthRef.value = null;
  matchedIds.clear();
});
<\/script>

<template>
  <div class="example-demo">
    <div class="example-demo__control-panel element-query-demo__control-panel">
      <div class="example-demo__control-grid element-query-demo__filters">
        <div class="example-demo__field element-query-demo__field">
          <span>模块</span>
          <el-select v-model="moduleFilter" aria-label="模块条件">
            <el-option label="全部模块" value="all" />
            <el-option label="vehicles" value="vehicles" />
            <el-option label="facilities" value="facilities" />
          </el-select>
        </div>
        <div class="example-demo__field element-query-demo__field">
          <span>图形类型</span>
          <el-select v-model="typeFilter" aria-label="图形类型条件">
            <el-option label="全部类型" value="all" />
            <el-option label="point" value="point" />
            <el-option label="polyline" value="polyline" />
            <el-option label="circle" value="circle" />
          </el-select>
        </div>
        <div class="example-demo__field element-query-demo__field">
          <span>显隐</span>
          <el-select v-model="visibilityFilter" aria-label="显隐条件">
            <el-option label="全部显隐" value="all" />
            <el-option label="仅可见" value="visible" />
            <el-option label="仅隐藏" value="hidden" />
          </el-select>
        </div>
        <div class="example-demo__field element-query-demo__field">
          <span>Predicate</span>
          <el-switch v-model="usePriority" active-text="启用 predicate" />
        </div>
        <div class="example-demo__field element-query-demo__field">
          <span>最低优先级</span>
          <el-input-number v-model="minimumPriority" :min="1" :max="4" :disabled="!usePriority" aria-label="最低优先级" />
        </div>
      </div>
      <div class="example-demo__action-row">
        <div class="example-demo__action-group element-query-demo__action-group" role="group" aria-label="查询操作">
          <div class="example-demo__action-buttons">
            <el-button type="primary" @click="runQuery">执行 query()</el-button>
          </div>
        </div>
        <div class="example-demo__feedback element-query-demo__feedback" aria-live="polite">
          <el-tag type="primary" effect="plain">{{ status }}</el-tag>
        </div>
      </div>
    </div>

    <div class="element-query-demo__stage-wrap">
      <div ref="mapTarget" class="example-stage element-query-demo__stage"></div>
      <el-tag class="element-query-demo__map-hint" type="primary" effect="dark">点击图形执行 atPixel()</el-tag>
      <div v-if="screenExtent" class="element-query-demo__screen-extent" :style="screenExtentStyle">
        <span>getScreenExtent()</span>
      </div>
    </div>

    <div class="example-demo__control-panel element-query-demo__actions">
      <div class="example-demo__action-row">
        <div class="example-demo__field element-query-demo__field">
          <span>查询结果</span>
          <el-select v-model="selectedId" aria-label="选择查询结果" @change="focusSelected">
            <el-option v-if="selectedId && !results.some((row) => row.id === selectedId)" :label="\`\${selectedId} · 未匹配当前条件\`" :value="selectedId" />
            <el-option v-for="row in results" :key="row.id" :label="\`\${row.label} · \${row.id}\`" :value="row.id" />
          </el-select>
        </div>
        <div class="example-demo__action-group element-query-demo__action-group" role="group" aria-label="查询结果操作">
          <div class="example-demo__action-buttons">
            <el-button @click="getSelected">get()</el-button>
            <el-button @click="inspectExtent">getScreenExtent()</el-button>
          </div>
        </div>
        <div class="example-demo__feedback element-query-demo__feedback" aria-live="polite">
          <el-tag type="success" effect="plain">匹配 {{ results.length }} 个</el-tag>
        </div>
      </div>
    </div>

    <el-table
      :data="results"
      border
      size="small"
      row-key="id"
      highlight-current-row
      :current-row-key="selectedId"
      empty-text="没有匹配的 Element"
      class="element-query-demo__table"
      @row-click="selectRow"
    >
      <el-table-column prop="label" label="名称" min-width="130" />
      <el-table-column prop="id" label="ID" min-width="170" />
      <el-table-column prop="type" label="ShapeType" min-width="100" />
      <el-table-column prop="module" label="Module" min-width="110" />
      <el-table-column prop="priority" label="优先级" width="80" />
      <el-table-column label="可见" width="78">
        <template #default="scope">{{ scope.row.visible ? '是' : '否' }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>
.element-query-demo__filters {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr));
}

.element-query-demo__field :deep(.el-select) {
  width: 100%;
  max-width: 210px;
}

.element-query-demo__field :deep(.el-input-number) {
  max-width: 100%;
}

.element-query-demo__actions {
  margin-top: 14px;
}

.element-query-demo__stage-wrap {
  position: relative;
}

.element-query-demo__map-hint {
  position: absolute;
  top: 12px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  pointer-events: none;
}

.element-query-demo__screen-extent {
  position: absolute;
  z-index: 3;
  border: 2px dashed var(--el-color-warning);
  border-radius: 6px;
  background: color-mix(in srgb, var(--el-color-warning) 12%, transparent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--el-color-warning) 16%, transparent);
  pointer-events: none;
}

.element-query-demo__screen-extent span {
  position: absolute;
  top: -26px;
  left: 0;
  padding: 3px 7px;
  border-radius: 4px;
  background: var(--el-color-warning);
  color: var(--el-color-white);
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.element-query-demo__stage :deep(.ol-viewport) {
  cursor: pointer;
}

.element-query-demo__table :deep(.el-table__row) {
  cursor: pointer;
}
</style>
`,U={class:`doc-page-layout`},W={class:`doc-page`},G={id:`overview`,class:`doc-prose`},K={id:`selector`,class:`doc-prose`},q={id:`example-element-query`,class:`doc-prose`},J={id:`screen-query`,class:`doc-prose`},Y={id:`api-actions`,class:`doc-prose`},X={class:`doc-page-layout__aside`},Z=n({__name:`ElementQueryView`,setup(e){let t=D(H,`element-query`),n=[{id:`overview`,label:`查询入口`},{id:`selector`,label:`ElementSelector`},{id:`example-element-query`,label:`组合查询与地图高亮`},{id:`screen-query`,label:`像素命中与屏幕范围`},{id:`api-actions`,label:`查询方法`},{id:`api`,label:`完整 API`}],r=[{prop:`name`,label:`条件`,width:140,presentation:`property`},{prop:`type`,label:`类型`,width:320,linkTypes:!0},{prop:`desc`,label:`语义`,width:430}],i=[{anchor:`api-selector-id`,name:`id`,type:`string`,desc:`匹配单个 ID；不能与 ids 同时设置`},{anchor:`api-selector-ids`,name:`ids`,type:`readonly string[]`,desc:`匹配一组 ID；输入会形成独立查询快照`},{anchor:`api-selector-module`,name:`module`,type:`string`,desc:`按业务模块匹配`},{anchor:`api-selector-layer-id`,name:`layerId`,type:`string`,desc:`按渲染图层 ID 匹配`},{anchor:`api-selector-type`,name:`type`,type:`ShapeType`,desc:`按图形类型匹配`},{anchor:`api-selector-visible`,name:`visible`,type:`boolean`,desc:`按业务显隐状态匹配`},{anchor:`api-selector-predicate`,name:`predicate`,type:`(state: Readonly<ElementState<T>>) => boolean`,desc:`追加自定义只读判断；与其他条件采用 AND 语义`}],a=[{prop:`name`,label:`方法`,width:190,presentation:`method`},{prop:`params`,label:`参数`,width:320,linkTypes:!0},{prop:`returns`,label:`返回值`,width:280,linkTypes:!0},{prop:`desc`,label:`说明`,width:390}],s=[{anchor:`api-method-get`,href:`/api/types#api-type-element-service-method-get`,name:`get`,params:`id: string`,returns:`Element<T> | undefined`,desc:`按 ID 获取当前代次句柄；缺失返回 undefined`},{anchor:`api-method-query`,href:`/api/types#api-type-element-service-method-query`,name:`query`,params:`selector?: ElementSelector<T>`,returns:`readonly Element<T>[]`,desc:`按注册顺序返回冻结数组；省略 selector 查询全部`},{anchor:`api-method-at-pixel`,href:`/api/types#api-type-element-service-method-at-pixel`,name:`atPixel`,params:`pixel: Pixel`,returns:`ElementHit<T> | undefined`,desc:`返回像素位置最先命中的 Element 与所属 Layer`},{anchor:`api-method-screen-extent`,href:`/api/types#api-type-element-service-method-get-screen-extent`,name:`getScreenExtent`,params:`target: string | Element`,returns:`ScreenExtent | undefined`,desc:`返回当前视口中的屏幕包围范围；不可见或缺失时返回 undefined`}],l=[`ElementSelector`,`ElementHit`,`ScreenExtent`,`ElementService`],d={ElementService:[`get`,`query`,`atPixel`,`getScreenExtent`]};return(e,f)=>{let h=u(`el-card`),g=u(`el-col`),_=u(`el-row`),T=u(`el-alert`);return p(),o(`div`,U,[m(`article`,W,[f[20]||=m(`header`,{class:`doc-hero`},[m(`span`,{class:`doc-hero__eyebrow`},`地图元素`),m(`h1`,null,`查询与选择器`),m(`p`,null,`get 负责单 ID 查找，query 负责状态条件组合，atPixel 与 getScreenExtent 则把 Element 查询连接到当前地图视口。`)],-1),m(`section`,G,[f[3]||=m(`h2`,{class:`doc-h2`},`查询入口`,-1),y(_,{gutter:16},{default:v(()=>[y(g,{xs:24,md:8},{default:v(()=>[y(h,{shadow:`never`},{default:v(()=>[...f[0]||=[m(`strong`,null,`get(id)`,-1),m(`p`,null,`已知唯一 ID 时使用，缺失不是异常。`,-1)]]),_:1})]),_:1}),y(g,{xs:24,md:8},{default:v(()=>[y(h,{shadow:`never`},{default:v(()=>[...f[1]||=[m(`strong`,null,`query(selector?)`,-1),m(`p`,null,`按业务状态组合过滤，可省略条件查询全部。`,-1)]]),_:1})]),_:1}),y(g,{xs:24,md:8},{default:v(()=>[y(h,{shadow:`never`},{default:v(()=>[...f[2]||=[m(`strong`,null,`屏幕查询`,-1),m(`p`,null,`按像素命中或读取 Element 的屏幕范围。`,-1)]]),_:1})]),_:1})]),_:1})]),m(`section`,K,[f[8]||=m(`h2`,{class:`doc-h2`},`ElementSelector`,-1),m(`p`,null,[y(w,{kind:`type`,to:`/api/types#api-type-element-selector`},{default:v(()=>[...f[4]||=[c(`ElementSelector<T>`,-1)]]),_:1}),f[5]||=c(` 的已设置字段全部采用 AND 语义。`,-1),f[6]||=m(`code`,null,`predicate`,-1),f[7]||=c(` 接收只读状态快照，不应在回调中发起嵌套写操作。 `,-1)]),y(C,{columns:r,rows:i})]),m(`section`,q,[y(x,{title:`组合查询与地图高亮`,source:b(H),snippet:b(t),"source-lang":`vue`,"snippet-lang":`typescript`},{description:v(()=>[m(`p`,null,[f[12]||=c(` 示例组合 module、type、visible 和 predicate 条件；匹配对象会在地图上保持高亮，未匹配对象会降弱。选择表格行后可继续调用 `,-1),y(w,{kind:`method`,to:`#api-method-get`},{default:v(()=>[...f[9]||=[c(`get`,-1)]]),_:1}),f[13]||=c(` 与 `,-1),y(w,{kind:`method`,to:`#api-method-screen-extent`},{default:v(()=>[...f[10]||=[c(`getScreenExtent`,-1)]]),_:1}),f[14]||=c(`，返回范围会以橙色虚线框画在地图上；也可以直接点击图形体验 `,-1),y(w,{kind:`method`,to:`#api-method-at-pixel`},{default:v(()=>[...f[11]||=[c(`atPixel`,-1)]]),_:1}),f[15]||=c(` 命中。 `,-1)])]),preview:v(()=>[y(V)]),_:1},8,[`source`,`snippet`])]),m(`section`,J,[f[17]||=m(`h2`,{class:`doc-h2`},`像素命中与屏幕范围`,-1),f[18]||=m(`ul`,null,[m(`li`,null,[m(`code`,null,`Pixel`),c(` 以地图视口左上角为原点，单位为 CSS 像素。`)]),m(`li`,null,[m(`code`,null,`atPixel()`),c(` 返回 Element 和 Layer 的成对结果；没有一致命中时返回 undefined。`)]),m(`li`,null,[m(`code`,null,`getScreenExtent()`),c(` 可接收 ID 或当前 Earth 的句柄；其他 Earth 或旧代次句柄会被拒绝。`)]),m(`li`,null,`屏幕结果只描述当前渲染状态，不进入 ElementState，也不能替代业务几何。`)],-1),y(T,{type:`warning`,closable:!1,"show-icon":``,title:`读取与批量写入的空条件规则不同`},{default:v(()=>[...f[16]||=[c(` query() 可以省略 selector 来读取全部；update、hide、show 和 remove 必须提供至少一个明确条件，清空全部只能调用 clear()。 `,-1)]]),_:1})]),m(`section`,Y,[f[19]||=m(`h2`,{class:`doc-h2`},`查询方法`,-1),y(C,{columns:a,rows:s})]),y(O,{"type-names":l,"member-names":d,description:`完整列出选择器、命中结果、屏幕范围和四个查询方法；所有参数与返回类型都可继续点击。`})]),m(`aside`,X,[y(S,{title:`查询与选择器`,items:n})])])}}});export{Z as default};