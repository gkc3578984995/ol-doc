import{A as e,At as t,B as n,Nt as r,P as i,Q as a,R as o,T as s,ct as c,dn as l,fn as u,it as d,j as f,ln as p,ot as m,tt as h,x as g,xt as _,z as v,zt as y}from"./TypeExpression-D6csDz4V.js";import{B as b,H as x,V as S,W as C,a as w,n as T,t as E,z as D}from"./index-4uKXPGRf.js";var O={class:`example-demo context-menu-demo`},ee={class:`context-menu-demo__scenario-title`},te={class:`example-demo__control-panel context-menu-demo__controls`},ne={class:`example-demo__actions context-menu-demo__toolbar`},k={class:`example-demo__action-group context-menu-demo__action-group`,role:`group`,"aria-label":`注册与项目状态`},A={class:`example-demo__action-buttons context-menu-demo__action-buttons`},j={class:`example-demo__action-group context-menu-demo__action-group`,role:`group`,"aria-label":`菜单与注册清理`},M={class:`example-demo__action-buttons context-menu-demo__action-buttons`},N={class:`example-demo__action-row context-menu-demo__settings-row`},P={class:`example-demo__control-grid context-menu-demo__settings`},F={class:`example-demo__action-group context-menu-demo__setting-group`,role:`group`,"aria-label":`菜单主题控制`},re={class:`example-demo__action-buttons context-menu-demo__setting-buttons`},ie={class:`example-demo__action-group context-menu-demo__setting-group`,role:`group`,"aria-label":`菜单状态控制`},ae={class:`example-demo__action-buttons context-menu-demo__setting-buttons`},oe={class:`example-demo__feedback context-menu-demo__feedback`,"aria-live":`polite`},se=`docs-services-context-menu`,I=`context-menu-demo`,L=8.5,R=g(n({__name:`ContextMenuDemo`,setup(n,{expose:g}){let y=t(null),b=r(null),x=r(null),S=r(null),C=r(null),E=r([]),D=t(!1),R=t(`light`),z=t(null),B=t(`等待操作：请按下方提示在地图上单击右键`),V=t(),H=r(null),U=t(!1),W=t(!1),G=[{scope:`map`,title:`① 地图空白处`,result:`命中 map 注册`,color:`#67c23a`},{scope:`module`,title:`② 橙色标记`,result:`命中 module 注册`,color:`#e6a23c`},{scope:`element`,title:`③ 蓝色标记`,result:`命中 Element 注册`,color:`#409eff`}],K=e(()=>{let e=V.value;return e===void 0?`未注册`:`${e.visible?`显示`:`隐藏`} / ${e.disabled?`禁用`:`可用`}`}),q=(e,t,n,r=!1)=>({symbol:{type:`circle`,radius:n,fill:{type:`solid`,color:t},stroke:{color:r?`#f56c6c`:`#ffffff`,width:r?6:4}},text:{text:e,fontSize:14,fontWeight:`bold`,offsetY:n*2+14,padding:[5,8,5,8],fill:{type:`solid`,color:`#1f2937`},stroke:{color:`#ffffff`,width:3},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.94)`},backgroundStroke:{color:t,width:2}},zIndex:r?40:30}),J=()=>{let e=b.value;if(e===null||!D.value){V.value=void 0;return}V.value=e.contextMenu.getItemState(`map`,`inspect`)},Y=()=>{let e=E.value;E.value=[],D.value=!1,V.value=void 0;let t;for(let n of e)try{n.destroy()}catch(e){t??=e}if(B.value=e.length===0?`当前没有菜单注册`:`三项注册已全部注销；右键不会再显示自定义菜单`,t!==void 0)throw t},X=(e,t)=>{C.value?.update({visible:!0,geometry:{type:`point`,controlPoints:[e]},style:q(t,`#67c23a`,11,!0)})},Z=()=>{let e=b.value,t=x.value,n=S.value;if(e===null||t===null||n===null)return;Y();let r=[];try{r.push(e.contextMenu.register(`map`,{items:[{key:`inspect`,label:`在此显示坐标`},{key:`labels`,label:`显示地图提示`,mutexKey:`clean`},{key:`clean`,label:`切换为清爽提示`,visible:!1,mutexKey:`labels`},{key:`more`,label:`视图操作`,children:[{key:`home`,label:`返回三个演示位置`},{key:`close`,label:`关闭菜单`}]}],before:({coordinate:e})=>e.every(Number.isFinite),onSelect:({item:t,coordinate:n})=>{z.value=`map`,B.value=`map：${t.label}`,t.key===`inspect`&&X(n,`map 菜单结果`),(t.key===`labels`||t.key===`clean`)&&X(n,t.key===`labels`?`已切换提示`:`清爽提示`),t.key===`home`&&$(),t.key===`close`&&e.contextMenu.close()}})),r.push(e.contextMenu.register({module:I},{items:[{key:`module-highlight`,label:`突出 module 标记`}],onSelect:({element:e,module:n})=>{U.value=!U.value,t.update({style:q(U.value?`module 已命中`:`② module`,U.value?`#67c23a`:`#e6a23c`,U.value?23:17,U.value)}),z.value=`module`,B.value=`module：${n??`—`}，目标 ${e?.id??`—`}`}})),r.push(e.contextMenu.register(n,{items:[{key:`element-highlight`,label:`突出精确 Element`}],onSelect:({element:e})=>{W.value=!W.value,n.update({style:q(W.value?`Element 已命中`:`③ Element`,W.value?`#f56c6c`:`#409eff`,W.value?24:17,W.value)}),z.value=`element`,B.value=`Element：${e?.id??`—`}；即使 module 相同，也优先使用精确注册`}}))}catch(e){for(let e of r)e.destroy();throw e}E.value=r,D.value=!0,B.value=`三层菜单已注册：Element 优先于 module，module 优先于 map`,J()},ce=()=>{let e=b.value;if(e===null||!D.value)return;let t=!(e.contextMenu.getItemState(`map`,`inspect`)?.disabled??!1);e.contextMenu.setItemState(`map`,`inspect`,{disabled:t}),z.value=`map`,B.value=t?`map 的“在此显示坐标”已禁用`:`map 的“在此显示坐标”已启用`,J()},le=()=>{let e=b.value;if(e===null||!D.value)return;let t=e.contextMenu.toggleItem(`map`,`labels`);z.value=`map`,B.value=`map 的“显示地图提示”切换为${t.visible?`显示`:`隐藏`}，互斥项同步反转`,J()},ue=e=>{e!==`light`&&e!==`dark`||(R.value=e,b.value?.contextMenu.setTheme(e))},Q=()=>{let e=b.value?.contextMenu.toggleTheme();e!==void 0&&(R.value=e)},de=()=>{if(!D.value){B.value=`当前没有菜单注册，无法清除菜单项目状态`;return}let e=S.value;e!==null&&(b.value?.contextMenu.clearElementState(e.id),W.value=!1,e.update({style:q(`③ Element`,`#409eff`,17)}),z.value=`element`,B.value=`已清除 ${e.id} 保存的菜单状态，注册仍然有效`)},fe=()=>{if(!D.value){B.value=`当前没有菜单注册，也没有可关闭的自定义菜单`;return}b.value?.contextMenu.close(),B.value=`只关闭当前菜单，三项注册仍然有效`},$=()=>{let e=H.value;e!==null&&b.value?.view.animateFlyTo(e,{zoom:L,duration:450})};return g({reset:()=>{let e=b.value;e!==null&&(U.value=!1,W.value=!1,z.value=null,C.value?.update({visible:!1}),x.value?.update({style:q(`② module`,`#e6a23c`,17)}),S.value?.update({style:q(`③ Element`,`#409eff`,17)}),D.value?(e.contextMenu.setItemState(`map`,`inspect`,{visible:!0,disabled:!1}),e.contextMenu.setItemState(`map`,`labels`,{visible:!0}),e.contextMenu.clearElementState(`context-menu-element-marker`),B.value=`已恢复三层命中场景与菜单状态`,J()):Z(),R.value=`light`,e.contextMenu.setTheme(`light`),$())},focusSelected:$}),h(()=>{if(y.value===null)return;let e=w({id:se,target:y.value,view:{zoom:L},controls:{zoom:!0,rotate:!1,attribution:!0}});T(e,`vector`).update({opacity:.52});let t=e.layers.add({kind:`vector`,id:`context-menu-elements`,zIndex:10,declutter:!0}),n=e.view.toProjectedCoordinates([116.4074,39.9042]);H.value=n,x.value=e.elements.add({id:`context-menu-module-marker`,module:I,layerId:t.id,geometry:{type:`point`,controlPoints:[[n[0]-42e3,n[1]]]},style:q(`② module`,`#e6a23c`,17)}),S.value=e.elements.add({id:`context-menu-element-marker`,module:I,layerId:t.id,geometry:{type:`point`,controlPoints:[[n[0]+42e3,n[1]]]},style:q(`③ Element`,`#409eff`,17)}),C.value=e.elements.add({id:`context-menu-map-result`,module:`context-menu-result`,layerId:t.id,visible:!1,geometry:{type:`point`,controlPoints:[n]},style:q(`map 菜单结果`,`#67c23a`,11,!0)}),b.value=e,e.view.flyTo(n,L),Z()}),a(()=>{try{Y()}finally{try{b.value?.destroy()}finally{b.value=null,x.value=null,S.value=null,C.value=null}}}),(e,t)=>{let n=c(`el-alert`),r=c(`el-card`),a=c(`el-col`),h=c(`el-row`),g=c(`el-button`),b=c(`el-segmented`),x=c(`el-tag`),S=c(`el-descriptions-item`),C=c(`el-descriptions`);return d(),i(`div`,O,[v(n,{type:`info`,closable:!1,"show-icon":``,title:`分别右键地图空白处、橙色标记和蓝色标记；每个位置只出现其优先级最高的一套菜单。`}),v(h,{class:`context-menu-demo__scenarios`,gutter:12},{default:_(()=>[(d(),i(s,null,m(G,e=>v(a,{key:e.scope,xs:24,sm:8},{default:_(()=>[v(r,{class:p([`context-menu-demo__scenario`,{"is-active":z.value===e.scope}]),shadow:`never`},{default:_(()=>[f(`div`,ee,[f(`span`,{class:`context-menu-demo__dot`,style:l({backgroundColor:e.color})},null,4),f(`strong`,null,u(e.title),1)]),f(`span`,null,u(e.result),1)]),_:2},1032,[`class`])]),_:2},1024)),64))]),_:1}),f(`div`,te,[f(`div`,ne,[f(`div`,k,[t[4]||=f(`span`,null,`注册与项目状态`,-1),f(`div`,A,[v(g,{type:`primary`,disabled:D.value,onClick:Z},{default:_(()=>[...t[1]||=[o(`重新注册三层菜单`,-1)]]),_:1},8,[`disabled`]),v(g,{disabled:!D.value,onClick:ce},{default:_(()=>[...t[2]||=[o(`切换 map 项禁用状态`,-1)]]),_:1},8,[`disabled`]),v(g,{disabled:!D.value,onClick:le},{default:_(()=>[...t[3]||=[o(`切换 map 互斥项`,-1)]]),_:1},8,[`disabled`])])]),f(`div`,j,[t[7]||=f(`span`,null,`菜单与注册清理`,-1),f(`div`,M,[v(g,{disabled:!D.value,onClick:fe},{default:_(()=>[...t[5]||=[o(`关闭当前菜单`,-1)]]),_:1},8,[`disabled`]),v(g,{disabled:!D.value,type:`danger`,plain:``,onClick:Y},{default:_(()=>[...t[6]||=[o(`注销三项注册`,-1)]]),_:1},8,[`disabled`])])])]),f(`div`,N,[f(`div`,P,[f(`div`,F,[f(`div`,re,[v(b,{modelValue:R.value,"onUpdate:modelValue":t[0]||=e=>R.value=e,options:[`light`,`dark`],"aria-label":`右键菜单主题`,onChange:ue},null,8,[`modelValue`]),v(g,{plain:``,onClick:Q},{default:_(()=>[...t[8]||=[o(`切换菜单主题`,-1)]]),_:1})])]),f(`div`,ie,[f(`div`,ae,[v(g,{plain:``,disabled:!D.value,onClick:de},{default:_(()=>[...t[9]||=[o(`清除 Element 状态`,-1)]]),_:1},8,[`disabled`])])])]),f(`div`,oe,[v(x,{type:D.value?`success`:`info`,effect:`plain`},{default:_(()=>[o(u(D.value?`已注册`:`已注销`),1)]),_:1},8,[`type`])])])]),f(`div`,{ref_key:`mapTarget`,ref:y,class:`example-stage`},null,512),v(C,{class:`context-menu-demo__result`,column:1,border:``,"aria-live":`polite`},{default:_(()=>[v(S,{label:`最近可见结果`},{default:_(()=>[o(u(B.value),1)]),_:1}),v(S,{label:`map inspect 状态`},{default:_(()=>[o(u(K.value),1)]),_:1}),v(S,{label:`当前菜单主题`},{default:_(()=>[o(u(R.value),1)]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-ca85c858`]]),z=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { ContextMenuHandle, ContextMenuItemState, Coordinate, Earth, Element as EarthElement, StyleSpec } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-services-context-menu';
const MODULE = 'context-menu-demo';
const MAP_ZOOM = 8.5;

type Scope = 'map' | 'module' | 'element';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const moduleMarkerRef = shallowRef<EarthElement | null>(null);
const elementMarkerRef = shallowRef<EarthElement | null>(null);
const actionMarkerRef = shallowRef<EarthElement | null>(null);
const handles = shallowRef<ContextMenuHandle[]>([]);
const registered = ref(false);
const theme = ref<'light' | 'dark'>('light');
const selectedScope = ref<Scope | null>(null);
const selectedAction = ref('等待操作：请按下方提示在地图上单击右键');
const mapItemState = ref<ContextMenuItemState | undefined>();
const sceneCenter = shallowRef<Coordinate | null>(null);
const moduleActive = ref(false);
const elementActive = ref(false);

const scenarios = [
  { scope: 'map', title: '① 地图空白处', result: '命中 map 注册', color: '#67c23a' },
  { scope: 'module', title: '② 橙色标记', result: '命中 module 注册', color: '#e6a23c' },
  { scope: 'element', title: '③ 蓝色标记', result: '命中 Element 注册', color: '#409eff' }
] as const;

const stateLabel = computed(() => {
  const state = mapItemState.value;
  if (state === undefined) return '未注册';
  return \`\${state.visible ? '显示' : '隐藏'} / \${state.disabled ? '禁用' : '可用'}\`;
});

const pointStyle = (label: string, color: string, radius: number, selected = false): StyleSpec => ({
  symbol: {
    type: 'circle',
    radius,
    fill: { type: 'solid', color },
    stroke: { color: selected ? '#f56c6c' : '#ffffff', width: selected ? 6 : 4 }
  },
  text: {
    text: label,
    fontSize: 14,
    fontWeight: 'bold',
    offsetY: radius * 2 + 14,
    padding: [5, 8, 5, 8],
    fill: { type: 'solid', color: '#1f2937' },
    stroke: { color: '#ffffff', width: 3 },
    backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.94)' },
    backgroundStroke: { color, width: 2 }
  },
  zIndex: selected ? 40 : 30
});

const refreshState = () => {
  const earth = earthRef.value;
  if (earth === null || !registered.value) {
    mapItemState.value = undefined;
    return;
  }
  mapItemState.value = earth.contextMenu.getItemState('map', 'inspect');
};

const destroyRegistrations = () => {
  const registrations = handles.value;
  handles.value = [];
  registered.value = false;
  mapItemState.value = undefined;
  let cleanupError: unknown;
  for (const handle of registrations) {
    try {
      handle.destroy();
    } catch (error) {
      cleanupError ??= error;
    }
  }
  selectedAction.value = registrations.length === 0 ? '当前没有菜单注册' : '三项注册已全部注销；右键不会再显示自定义菜单';
  if (cleanupError !== undefined) throw cleanupError;
};

const showMapResult = (coordinate: Coordinate, label: string) => {
  actionMarkerRef.value?.update({
    visible: true,
    geometry: { type: 'point', controlPoints: [coordinate] },
    style: pointStyle(label, '#67c23a', 11, true)
  });
};

// #region context-menu-register
const registerMenus = () => {
  const earth = earthRef.value;
  const moduleMarker = moduleMarkerRef.value;
  const elementMarker = elementMarkerRef.value;
  if (earth === null || moduleMarker === null || elementMarker === null) return;

  destroyRegistrations();
  const nextHandles: ContextMenuHandle[] = [];
  try {
    nextHandles.push(
      earth.contextMenu.register('map', {
        items: [
          { key: 'inspect', label: '在此显示坐标' },
          { key: 'labels', label: '显示地图提示', mutexKey: 'clean' },
          { key: 'clean', label: '切换为清爽提示', visible: false, mutexKey: 'labels' },
          {
            key: 'more',
            label: '视图操作',
            children: [
              { key: 'home', label: '返回三个演示位置' },
              { key: 'close', label: '关闭菜单' }
            ]
          }
        ],
        before: ({ coordinate }) => coordinate.every(Number.isFinite),
        onSelect: ({ item, coordinate }) => {
          selectedScope.value = 'map';
          selectedAction.value = \`map：\${item.label}\`;
          if (item.key === 'inspect') showMapResult(coordinate, 'map 菜单结果');
          if (item.key === 'labels' || item.key === 'clean') showMapResult(coordinate, item.key === 'labels' ? '已切换提示' : '清爽提示');
          if (item.key === 'home') focusScenes();
          if (item.key === 'close') earth.contextMenu.close();
        }
      })
    );
    nextHandles.push(
      earth.contextMenu.register(
        { module: MODULE },
        {
          items: [{ key: 'module-highlight', label: '突出 module 标记' }],
          onSelect: ({ element, module }) => {
            moduleActive.value = !moduleActive.value;
            moduleMarker.update({
              style: pointStyle(
                moduleActive.value ? 'module 已命中' : '② module',
                moduleActive.value ? '#67c23a' : '#e6a23c',
                moduleActive.value ? 23 : 17,
                moduleActive.value
              )
            });
            selectedScope.value = 'module';
            selectedAction.value = \`module：\${module ?? '—'}，目标 \${element?.id ?? '—'}\`;
          }
        }
      )
    );
    nextHandles.push(
      earth.contextMenu.register(elementMarker, {
        items: [{ key: 'element-highlight', label: '突出精确 Element' }],
        onSelect: ({ element }) => {
          elementActive.value = !elementActive.value;
          elementMarker.update({
            style: pointStyle(
              elementActive.value ? 'Element 已命中' : '③ Element',
              elementActive.value ? '#f56c6c' : '#409eff',
              elementActive.value ? 24 : 17,
              elementActive.value
            )
          });
          selectedScope.value = 'element';
          selectedAction.value = \`Element：\${element?.id ?? '—'}；即使 module 相同，也优先使用精确注册\`;
        }
      })
    );
  } catch (error) {
    for (const handle of nextHandles) handle.destroy();
    throw error;
  }

  handles.value = nextHandles;
  registered.value = true;
  selectedAction.value = '三层菜单已注册：Element 优先于 module，module 优先于 map';
  refreshState();
};
// #endregion context-menu-register

const setInspectDisabled = () => {
  const earth = earthRef.value;
  if (earth === null || !registered.value) return;
  const disabled = !(earth.contextMenu.getItemState('map', 'inspect')?.disabled ?? false);
  earth.contextMenu.setItemState('map', 'inspect', { disabled });
  selectedScope.value = 'map';
  selectedAction.value = disabled ? 'map 的“在此显示坐标”已禁用' : 'map 的“在此显示坐标”已启用';
  refreshState();
};

const toggleLabels = () => {
  const earth = earthRef.value;
  if (earth === null || !registered.value) return;
  const next = earth.contextMenu.toggleItem('map', 'labels');
  selectedScope.value = 'map';
  selectedAction.value = \`map 的“显示地图提示”切换为\${next.visible ? '显示' : '隐藏'}，互斥项同步反转\`;
  refreshState();
};

const setMenuTheme = (value: string | number | boolean | undefined) => {
  if (value !== 'light' && value !== 'dark') return;
  theme.value = value;
  earthRef.value?.contextMenu.setTheme(value);
};

const toggleMenuTheme = () => {
  const next = earthRef.value?.contextMenu.toggleTheme();
  if (next !== undefined) theme.value = next;
};

const clearMarkerState = () => {
  if (!registered.value) {
    selectedAction.value = '当前没有菜单注册，无法清除菜单项目状态';
    return;
  }
  const marker = elementMarkerRef.value;
  if (marker === null) return;
  earthRef.value?.contextMenu.clearElementState(marker.id);
  elementActive.value = false;
  marker.update({ style: pointStyle('③ Element', '#409eff', 17) });
  selectedScope.value = 'element';
  selectedAction.value = \`已清除 \${marker.id} 保存的菜单状态，注册仍然有效\`;
};

const closeMenu = () => {
  if (!registered.value) {
    selectedAction.value = '当前没有菜单注册，也没有可关闭的自定义菜单';
    return;
  }
  earthRef.value?.contextMenu.close();
  selectedAction.value = '只关闭当前菜单，三项注册仍然有效';
};

const focusScenes = () => {
  const center = sceneCenter.value;
  if (center !== null) earthRef.value?.view.animateFlyTo(center, { zoom: MAP_ZOOM, duration: 450 });
};

const reset = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  moduleActive.value = false;
  elementActive.value = false;
  selectedScope.value = null;
  actionMarkerRef.value?.update({ visible: false });
  moduleMarkerRef.value?.update({ style: pointStyle('② module', '#e6a23c', 17) });
  elementMarkerRef.value?.update({ style: pointStyle('③ Element', '#409eff', 17) });
  if (!registered.value) {
    registerMenus();
  } else {
    earth.contextMenu.setItemState('map', 'inspect', { visible: true, disabled: false });
    earth.contextMenu.setItemState('map', 'labels', { visible: true });
    earth.contextMenu.clearElementState('context-menu-element-marker');
    selectedAction.value = '已恢复三层命中场景与菜单状态';
    refreshState();
  }
  theme.value = 'light';
  earth.contextMenu.setTheme('light');
  focusScenes();
};

defineExpose({ reset, focusSelected: focusScenes });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: MAP_ZOOM },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector').update({ opacity: 0.52 });
  const layer = earth.layers.add({ kind: 'vector', id: 'context-menu-elements', zIndex: 10, declutter: true });
  const center = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  sceneCenter.value = center;

  moduleMarkerRef.value = earth.elements.add({
    id: 'context-menu-module-marker',
    module: MODULE,
    layerId: layer.id,
    geometry: { type: 'point', controlPoints: [[center[0] - 42_000, center[1]]] },
    style: pointStyle('② module', '#e6a23c', 17)
  });
  elementMarkerRef.value = earth.elements.add({
    id: 'context-menu-element-marker',
    module: MODULE,
    layerId: layer.id,
    geometry: { type: 'point', controlPoints: [[center[0] + 42_000, center[1]]] },
    style: pointStyle('③ Element', '#409eff', 17)
  });
  actionMarkerRef.value = earth.elements.add({
    id: 'context-menu-map-result',
    module: 'context-menu-result',
    layerId: layer.id,
    visible: false,
    geometry: { type: 'point', controlPoints: [center] },
    style: pointStyle('map 菜单结果', '#67c23a', 11, true)
  });
  earthRef.value = earth;
  earth.view.flyTo(center, MAP_ZOOM);
  registerMenus();
});

onBeforeUnmount(() => {
  try {
    destroyRegistrations();
  } finally {
    try {
      earthRef.value?.destroy();
    } finally {
      earthRef.value = null;
      moduleMarkerRef.value = null;
      elementMarkerRef.value = null;
      actionMarkerRef.value = null;
    }
  }
});
<\/script>

<template>
  <div class="example-demo context-menu-demo">
    <el-alert type="info" :closable="false" show-icon title="分别右键地图空白处、橙色标记和蓝色标记；每个位置只出现其优先级最高的一套菜单。" />

    <el-row class="context-menu-demo__scenarios" :gutter="12">
      <el-col v-for="scenario in scenarios" :key="scenario.scope" :xs="24" :sm="8">
        <el-card class="context-menu-demo__scenario" shadow="never" :class="{ 'is-active': selectedScope === scenario.scope }">
          <div class="context-menu-demo__scenario-title">
            <span class="context-menu-demo__dot" :style="{ backgroundColor: scenario.color }"></span>
            <strong>{{ scenario.title }}</strong>
          </div>
          <span>{{ scenario.result }}</span>
        </el-card>
      </el-col>
    </el-row>

    <div class="example-demo__control-panel context-menu-demo__controls">
      <div class="example-demo__actions context-menu-demo__toolbar">
        <div class="example-demo__action-group context-menu-demo__action-group" role="group" aria-label="注册与项目状态">
          <span>注册与项目状态</span>
          <div class="example-demo__action-buttons context-menu-demo__action-buttons">
            <el-button type="primary" :disabled="registered" @click="registerMenus">重新注册三层菜单</el-button>
            <el-button :disabled="!registered" @click="setInspectDisabled">切换 map 项禁用状态</el-button>
            <el-button :disabled="!registered" @click="toggleLabels">切换 map 互斥项</el-button>
          </div>
        </div>
        <div class="example-demo__action-group context-menu-demo__action-group" role="group" aria-label="菜单与注册清理">
          <span>菜单与注册清理</span>
          <div class="example-demo__action-buttons context-menu-demo__action-buttons">
            <el-button :disabled="!registered" @click="closeMenu">关闭当前菜单</el-button>
            <el-button :disabled="!registered" type="danger" plain @click="destroyRegistrations">注销三项注册</el-button>
          </div>
        </div>
      </div>

      <div class="example-demo__action-row context-menu-demo__settings-row">
        <div class="example-demo__control-grid context-menu-demo__settings">
          <div class="example-demo__action-group context-menu-demo__setting-group" role="group" aria-label="菜单主题控制">
            <div class="example-demo__action-buttons context-menu-demo__setting-buttons">
              <el-segmented v-model="theme" :options="['light', 'dark']" aria-label="右键菜单主题" @change="setMenuTheme" />
              <el-button plain @click="toggleMenuTheme">切换菜单主题</el-button>
            </div>
          </div>
          <div class="example-demo__action-group context-menu-demo__setting-group" role="group" aria-label="菜单状态控制">
            <div class="example-demo__action-buttons context-menu-demo__setting-buttons">
              <el-button plain :disabled="!registered" @click="clearMarkerState">清除 Element 状态</el-button>
            </div>
          </div>
        </div>
        <div class="example-demo__feedback context-menu-demo__feedback" aria-live="polite">
          <el-tag :type="registered ? 'success' : 'info'" effect="plain">{{ registered ? '已注册' : '已注销' }}</el-tag>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-descriptions class="context-menu-demo__result" :column="1" border aria-live="polite">
      <el-descriptions-item label="最近可见结果">{{ selectedAction }}</el-descriptions-item>
      <el-descriptions-item label="map inspect 状态">{{ stateLabel }}</el-descriptions-item>
      <el-descriptions-item label="当前菜单主题">{{ theme }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.context-menu-demo__toolbar {
  align-items: flex-start;
  gap: 10px;
}

.context-menu-demo__action-group {
  max-width: 100%;
}

.context-menu-demo__scenarios {
  margin-top: 14px;
  margin-bottom: 14px;
}

.context-menu-demo__scenario {
  height: 100%;
  border-color: var(--doc-border);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.context-menu-demo__scenario.is-active {
  border-color: var(--doc-primary);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--doc-primary) 20%, transparent);
}

.context-menu-demo__scenario-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.context-menu-demo__dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.context-menu-demo__settings {
  flex: 2 1 420px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
}

.context-menu-demo__setting-buttons > *,
.context-menu-demo__setting-buttons :deep(.el-segmented) {
  max-width: 100%;
}

.context-menu-demo__result {
  margin-top: 14px;
}

.context-menu-demo__result :deep(.el-descriptions__content) {
  overflow-wrap: anywhere;
}

@media (max-width: 767px) {
  .context-menu-demo__scenario {
    margin-bottom: 8px;
  }
}

@media (max-width: 560px) {
  .context-menu-demo__toolbar,
  .context-menu-demo__action-buttons,
  .context-menu-demo__settings,
  .context-menu-demo__setting-buttons {
    display: grid;
    grid-template-columns: 1fr;
  }

  .context-menu-demo__action-group,
  .context-menu-demo__action-buttons :deep(.el-button),
  .context-menu-demo__setting-group,
  .context-menu-demo__setting-buttons :deep(.el-button) {
    width: 100%;
  }

  .context-menu-demo__action-buttons :deep(.el-button),
  .context-menu-demo__setting-buttons :deep(.el-button) {
    height: auto;
    min-height: 32px;
    white-space: normal;
  }
}
</style>
`,B={class:`doc-page-layout`},V={class:`doc-page`},H={id:`overview`,class:`doc-prose`},U={id:`example-context-menu-lifecycle`,class:`doc-prose`},W={id:`lifecycle`,class:`doc-prose`},G={id:`method-reference`,class:`doc-prose`},K={class:`doc-page-layout__aside`},q=n({__name:`ContextMenuView`,setup(e){let n=E(z,`context-menu-register`),r=t(null),a=()=>r.value?.reset(),s=()=>r.value?.focusSelected(),l=[{id:`overview`,label:`目标与菜单树`},{id:`example-context-menu-lifecycle`,label:`三层优先级、状态与清理`},{id:`lifecycle`,label:`三种生命周期动作`},{id:`method-reference`,label:`服务方法`},{id:`api`,label:`完整 API`}],u=[{target:`'map'`,scope:`map`,state:`支持`,desc:`兜底级：地图空白或没有更具体注册时命中`},{target:`{ module: string }`,scope:`module`,state:`按 Element 保存`,desc:`中间级：命中同名 module 且没有精确 Element 注册时命中`},{target:`Element`,scope:`element`,state:`支持`,desc:`最高级：精确命中当前 Earth 中仍有效的 Element 句柄`}],p=[{prop:`target`,label:`注册目标`,width:220,linkTypes:!0},{prop:`scope`,label:`回调 scope`,width:120},{prop:`state`,label:`项目状态`,width:160},{prop:`desc`,label:`行为`,width:360}],m=[{prop:`name`,label:`方法`,width:210,presentation:`method`},{prop:`params`,label:`参数`,width:360,linkTypes:!0},{prop:`returns`,label:`返回值`,width:220,linkTypes:!0},{prop:`desc`,label:`说明`,width:380}],h=[{anchor:`api-method-register`,href:`/api/types#api-type-context-menu-service-method-register`,name:`register`,params:`target: ContextMenuTarget, spec: ContextMenuSpec`,returns:`ContextMenuHandle`,desc:`注册地图、module 或 Element 菜单；返回本次注册的独立句柄`},{anchor:`api-method-get-item-state`,href:`/api/types#api-type-context-menu-service-method-get-item-state`,name:`getItemState`,params:`target: ContextMenuStateTarget, key: string`,returns:`ContextMenuItemState | undefined`,desc:`读取 map 或 Element 保存的可见、禁用状态快照`},{anchor:`api-method-set-item-state`,href:`/api/types#api-type-context-menu-service-method-set-item-state`,name:`setItemState`,params:`target: ContextMenuStateTarget, key: string, patch: Partial<ContextMenuItemState>`,returns:`void`,desc:`部分更新项目的 visible 与 disabled`},{anchor:`api-method-toggle-item`,href:`/api/types#api-type-context-menu-service-method-toggle-item`,name:`toggleItem`,params:`target: ContextMenuStateTarget, key: string`,returns:`ContextMenuItemState`,desc:`切换项目显隐，并按 mutexKey 更新互斥项目`},{anchor:`api-method-set-theme`,href:`/api/types#api-type-context-menu-service-method-set-theme`,name:`setTheme`,params:`theme: 'light' | 'dark'`,returns:`void`,desc:`显式设置当前 Earth 的菜单主题`},{anchor:`api-method-toggle-theme`,href:`/api/types#api-type-context-menu-service-method-toggle-theme`,name:`toggleTheme`,params:`—`,returns:`'light' | 'dark'`,desc:`在明暗菜单主题间切换并返回新主题`},{anchor:`api-method-clear-element-state`,href:`/api/types#api-type-context-menu-service-method-clear-element-state`,name:`clearElementState`,params:`elementId: string`,returns:`void`,desc:`清除指定 Element 保存的项目状态；不注销菜单`},{anchor:`api-method-close`,href:`/api/types#api-type-context-menu-service-method-close`,name:`close`,params:`—`,returns:`void`,desc:`只关闭当前可见菜单；注册、主题和项目状态均保留`},{anchor:`api-method-handle-destroy`,href:`/api/types#api-type-context-menu-handle-method-destroy`,name:`ContextMenuHandle.destroy`,params:`—`,returns:`void`,desc:`幂等注销一次 register()；不影响其他注册`}],g=[`ContextMenuService`,`ContextMenuHandle`,`ContextMenuTarget`,`ContextMenuStateTarget`,`ContextMenuSpec`,`ContextMenuItemSpec`,`ContextMenuItemContext`,`ContextMenuItemState`];return(e,t)=>{let w=c(`el-alert`),T=c(`el-card`),E=c(`el-col`),O=c(`el-row`);return d(),i(`div`,B,[f(`article`,V,[t[25]||=f(`header`,{class:`doc-hero`},[f(`span`,{class:`doc-hero__eyebrow`},`地图服务`),f(`h1`,null,`右键菜单（ContextMenu）`),f(`p`,null,`通过 earth.contextMenu 为地图、业务模块或 Element 注册菜单树，并用独立句柄、项目状态和菜单视图三套 API 管理各自生命周期。`)],-1),f(`section`,H,[t[9]||=f(`h2`,{class:`doc-h2`},`目标与菜单树`,-1),f(`p`,null,[v(C,{kind:`method`,to:`#api-method-register`},{default:_(()=>[...t[0]||=[o(`register`,-1)]]),_:1}),t[2]||=o(` 接受 `,-1),v(C,{kind:`type`,to:`/api/types#api-type-context-menu-target`},{default:_(()=>[...t[1]||=[o(`ContextMenuTarget`,-1)]]),_:1}),t[3]||=o(`。右键命中 Element 时只选择一项注册，固定优先级为 `,-1),t[4]||=f(`strong`,null,`Element → module → map`,-1),t[5]||=o(`，不会把三套项目合并；同一注册内的 `,-1),t[6]||=f(`code`,null,`children`,-1),t[7]||=o(` 构成级联菜单。 `,-1)]),v(S,{columns:p,rows:u}),v(w,{class:`doc-prose__alert`,type:`info`,closable:!1,"show-icon":``,title:`before 是显示前守卫`},{default:_(()=>[...t[8]||=[f(`code`,null,`before(context)`,-1),o(` 只有严格返回 `,-1),f(`code`,null,`true`,-1),o(` 时项目才可用；其他返回值或异常会保留项目但将其禁用。`,-1),f(`code`,null,`onSelect`,-1),o(` 只会收到可用项目，载荷包含坐标、像素以及可选的 Element、module 和 Layer。 `,-1)]]),_:1})]),f(`section`,U,[v(b,{title:`三层优先级、状态与清理`,source:y(z),snippet:y(n),"source-lang":`vue`,"snippet-lang":`typescript`,"show-reset":``,"show-focus":``,onReset:a,onFocus:s},{description:_(()=>[f(`p`,null,[t[14]||=o(` 示例在三个可区分位置注册 map、module 和 Element 菜单，菜单动作会直接放置或改变地图标记；同时运行 `,-1),v(C,{kind:`method`,to:`#api-method-get-item-state`},{default:_(()=>[...t[10]||=[o(`getItemState`,-1)]]),_:1}),t[15]||=o(`、 `,-1),v(C,{kind:`method`,to:`#api-method-set-item-state`},{default:_(()=>[...t[11]||=[o(`setItemState`,-1)]]),_:1}),t[16]||=o(`、主题与互斥操作，并明确区分 `,-1),v(C,{kind:`method`,to:`#api-method-handle-destroy`},{default:_(()=>[...t[12]||=[o(`handle.destroy`,-1)]]),_:1}),t[17]||=o(` 和 `,-1),v(C,{kind:`method`,to:`#api-method-close`},{default:_(()=>[...t[13]||=[o(`service.close`,-1)]]),_:1}),t[18]||=o(`。 `,-1)])]),preview:_(()=>[v(R,{ref_key:`contextMenuDemoRef`,ref:r},null,512)]),_:1},8,[`source`,`snippet`])]),f(`section`,W,[t[23]||=f(`h2`,{class:`doc-h2`},`三种生命周期动作不要混用`,-1),v(O,{gutter:16},{default:_(()=>[v(E,{xs:24,md:8},{default:_(()=>[v(T,{shadow:`never`},{default:_(()=>[...t[19]||=[f(`strong`,null,`handle.destroy()`,-1),f(`p`,null,`注销一次 register() 返回的注册。其他目标与其他 handle 保持不变。`,-1)]]),_:1})]),_:1}),v(E,{xs:24,md:8},{default:_(()=>[v(T,{shadow:`never`},{default:_(()=>[...t[20]||=[f(`strong`,null,`service.close()`,-1),f(`p`,null,`只关闭屏幕上正在显示的菜单，不删除注册，也不重置状态。`,-1)]]),_:1})]),_:1}),v(E,{xs:24,md:8},{default:_(()=>[v(T,{shadow:`never`},{default:_(()=>[...t[21]||=[f(`strong`,null,`项目 state`,-1),f(`p`,null,`visible、disabled 与 mutexKey 是展示状态；Element 删除时其保存状态会同步清理。`,-1)]]),_:1})]),_:1})]),_:1}),v(w,{class:`doc-prose__alert`,type:`warning`,closable:!1,"show-icon":``,title:`浏览器原生菜单由当前 Earth 的 viewport 管理`},{default:_(()=>[...t[22]||=[o(` 引擎只在对应地图视口内阻止浏览器原生 contextmenu，不在 document 级屏蔽。earth.destroy() 会移除监听并清理全部注册。 `,-1)]]),_:1})]),f(`section`,G,[t[24]||=f(`h2`,{class:`doc-h2`},`服务方法`,-1),v(S,{columns:m,rows:h})]),v(D,{"type-names":g,title:`ContextMenu 完整 API`,description:`这里直接列出 ContextMenu 的全部根导出类型、配置字段、回调载荷、句柄和服务方法。`})]),f(`aside`,K,[v(x,{title:`右键菜单（ContextMenu）`,items:l})])])}}});export{q as default};