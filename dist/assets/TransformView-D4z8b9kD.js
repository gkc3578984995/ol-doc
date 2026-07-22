import{A as e,At as t,B as n,M as r,Nt as i,P as a,Q as o,R as s,T as ee,ct as c,fn as l,it as u,j as d,ot as te,tt as f,x as p,xt as m,z as h,zt as g}from"./TypeExpression-D6csDz4V.js";import{B as _,H as v,W as y,n as b,s as x,t as S,z as C}from"./index-4uKXPGRf.js";import{t as w}from"./shapeExamples-q799yh_J.js";import{n as T,t as E}from"./interactionExamples-Cqkv5PPr.js";var D={class:`example-demo transform-session-demo`},ne={class:`transform-session-demo__catalog`,"aria-label":`Transform 目标目录`},re={class:`example-demo__control-panel transform-session-demo__control-panel`},ie={class:`example-demo__action-group`},ae={class:`example-demo__action-buttons`},oe={class:`example-demo__field`},se={class:`example-demo__action-row transform-session-demo__secondary-actions`},ce={class:`example-demo__action-group`},le={class:`example-demo__action-buttons`},ue={class:`example-demo__action-group`},de={class:`example-demo__action-buttons`},fe={class:`example-demo__action-group`},pe={class:`example-demo__action-buttons`},me={class:`example-demo__feedback transform-session-demo__feedback`,"aria-live":`polite`},he={class:`example-demo__control-panel transform-session-demo__toolbar-controls`},ge={class:`example-demo__action-group`},_e={class:`example-demo__action-buttons transform-session-demo__toolbar-actions`},ve={class:`example-demo__action-buttons transform-session-demo__toolbar-actions`},ye={class:`transform-session-demo__map-shell`},O=`docs-transform-targets`,k=`docs-transform-a`,A=`docs-transform-b`,be=`docs-transform`,xe=`polygon`,Se=`data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="56" viewBox="0 0 48 56"%3E%3Cpath fill="%237c3aed" stroke="white" stroke-width="3" d="M24 2C12.4 2 3 11.4 3 23c0 15.8 21 31 21 31s21-15.2 21-31C45 11.4 35.6 2 24 2Z"/%3E%3Ccircle cx="24" cy="23" r="8" fill="white"/%3E%3C/svg%3E`,j=p(n({__name:`TransformSessionDemo`,setup(n,{expose:p}){let _=t(null),v=i(null),y=i(null),S=i(null),C=i(null),j=i(null),M=t(xe),N=t(`circle`),P=t(`idle`),F=t(`transform`),I=t(`未选择`),L=t(`选择目录目标后启动 Session`),R=t(`尚未执行撤销 / 重做`),z=t(0),B=t(0),V=t(!0),H=t(!1),U=t(!1),W=t(!1),Ce=[],G=e(()=>P.value===`active`),K=e(()=>G.value&&I.value!==`未选择`),we=e(()=>y.value!==null&&S.value!==null),q=e(()=>E[M.value]),J=e(()=>E[N.value]),Y=e(()=>(I.value,C.value?.toolbar!==void 0&&!W.value)),Te=T.map(e=>({target:e.label,translate:e.transform.translate?`支持`:`— 不支持`,rotate:e.transform.rotate?`支持`:`— 不支持`,scale:e.transform.scale?`支持`:`— 不支持`,vertex:e.transform.vertex?`支持`:`— 不支持`,note:e.description})),X=()=>{for(let e of Ce.splice(0))e()},Z=()=>{C.value?.status===`active`&&C.value.cancel(),X(),C.value=null,P.value=`idle`,F.value=`transform`,I.value=`未选择`,W.value=!1,V.value=!0},Ee=()=>({selector:{module:be},translate:`feature`,scale:!0,stretch:!0,rotate:!0,historyLimit:20,toolbar:{offset:[0,14],visible:!0},policy:`replace`}),De=(e,t)=>{let n=t===`primary`?`#7c3aed`:`#059669`;return e===`point-icon`?{symbol:{type:`icon`,src:Se,size:[48,56],anchor:[.5,1],anchorXUnits:`fraction`,anchorYUnits:`fraction`},text:{text:t===`primary`?`A`:`B`,offsetY:18,fontSize:14,fill:{type:`solid`,color:n}}}:e===`polyline`?{strokes:[{color:n,width:7}],text:{text:t===`primary`?`A`:`B`,fontSize:18,fontWeight:`bold`,fill:{type:`solid`,color:n}}}:{strokes:[{color:n,width:5}],fill:{type:`solid`,color:t===`primary`?`rgba(124, 58, 237, 0.30)`:`rgba(16, 185, 129, 0.30)`},text:{text:t===`primary`?`A`:`B`,fontSize:24,fontWeight:`bold`,fill:{type:`solid`,color:n}}}},Oe=e=>{let t=j.value;if(t!==null)return[t[0]+(e===`primary`?-27e3:27e3),t[1]]},ke=e=>{let t=v.value,n=Oe(e);if(t===null||n===void 0)return null;let r=e===`primary`?k:A;t.elements.get(r)?.remove();let i=e===`primary`?q.value:J.value;return t.elements.add({id:r,layerId:O,module:be,geometry:w(i.type,n,i.type===`point`?1:7e3),style:De(i.id,e),data:{example:i.id,role:e}})},Ae=e=>T[(T.findIndex(t=>t.id===e)+1)%T.length].id,Q=()=>{y.value=ke(`primary`),S.value=ke(`secondary`)},je=e=>{G.value||(Z(),M.value=e,N.value=Ae(e),Q(),L.value=`A 为 ${E[e].label}，B 为 ${J.value.label}`,R.value=`尚未执行撤销 / 重做`,z.value=0,$())},Me=e=>{C.value=e,P.value=e.status,F.value=e.mode,z.value=0,W.value=!1,V.value=!0,H.value=!1,U.value=!1;let t=e=>{z.value+=1,L.value=e};Ce=[e.on(`select`,({element:e})=>{I.value=e.id,L.value=`select · ${e.id}`}),e.on(`selectEnd`,({element:e})=>{I.value=`未选择`,L.value=`selectEnd · ${e.id}`}),e.on(`translateEnd`,()=>t(`translateEnd · 已形成一条历史命令`)),e.on(`rotateEnd`,()=>t(`rotateEnd · 已形成一条历史命令`)),e.on(`scaleEnd`,()=>t(`scaleEnd · 已形成一条历史命令`)),e.on(`edit`,()=>t(`edit · 顶点工作态已更新`)),e.on(`copyPreviewConfirm`,({element:e})=>{B.value+=1,L.value=`copyPreviewConfirm · ${e.id}`}),e.on(`remove`,({element:e})=>{e.id===k&&(y.value=null),e.id===A&&(S.value=null),I.value=`未选择`,L.value=`remove · ${e.id}；可用“重置示例”恢复`}),e.on(`error`,({error:e})=>{L.value=e instanceof Error?e.message:`Transform 操作失败`})]},Ne=()=>{let e=v.value;if(e===null)return;Z();let t=e.transform.start(Ee());Me(t),I.value=`未选择`,L.value=`start · 请在地图中单击 A 或 B`},Pe=()=>{let e=v.value,t=y.value;if(e===null||t===null)return;Z();let n=e.transform.select(t,Ee());Me(n),I.value=t.id,L.value=`select(element) · ${t.id}`},Fe=()=>{let e=C.value,t=v.value;if(e===null||t===null)return;let n=I.value===k?A:k,r=t.elements.get(n);r!==void 0&&(e.replaceSelected(r,{retainHistory:!1}),I.value=r.id,L.value=`replaceSelected · ${r.id}`)},Ie=e=>{C.value?.setMode(e),F.value=C.value?.mode??e,L.value=`setMode · ${e}`},Le=()=>{R.value=C.value?.undo()===!0?`已撤销最近一次完整操作`:`没有可撤销操作`},Re=()=>{R.value=C.value?.redo()===!0?`已重做下一次操作`:`没有可重做操作`},ze=()=>{let e=C.value?.copy({module:`docs-transform-copy`});e!==void 0&&(L.value=`copy · ${e.id}`)},Be=()=>C.value?.remove(),Ve=()=>{let e=C.value?.toolbar;e===void 0||W.value||(V.value=!V.value,V.value?e.show():e.hide())},He=()=>{C.value?.toolbar?.setActive(`edit`),L.value=`toolbar.setActive · edit`},Ue=()=>{let e=C.value?.toolbar;e===void 0||W.value||(H.value=!H.value,e.updateItem(`remove`,{disabled:H.value,title:H.value?`删除已禁用`:`删除`}))},We=()=>{let e=C.value?.toolbar;e===void 0||W.value||(U.value=!U.value,e.updateOptions({offset:U.value?[28,22]:[0,14],className:`docs-transform-toolbar`,visible:!0}))},Ge=()=>{C.value?.toolbar?.destroy(),W.value=!0,V.value=!1},Ke=()=>{C.value?.finish(),C.value!==null&&(P.value=C.value.status),X()},qe=()=>{C.value?.cancel(),C.value!==null&&(P.value=C.value.status),X()},$=()=>{let e=v.value,t=j.value;e===null||t===null||e.view.flyTo(t,10)};return p({reset:()=>{Z(),v.value?.elements.remove({module:`docs-transform-copy`}),B.value=0,z.value=0,R.value=`尚未执行撤销 / 重做`,L.value=`已恢复 A / B 目标与 Transform 资源`,Q(),$()},focus:$}),f(()=>{if(_.value===null)return;let e=new x({target:_.value,view:{zoom:10},controls:{zoom:!0,rotate:!1,attribution:!0}});b(e,`vector`),e.layers.add({kind:`vector`,id:O,zIndex:30}),j.value=e.view.toProjectedCoordinates([116.41,39.92]),v.value=e,Q(),$()}),o(()=>{Z(),v.value?.destroy(),v.value=null,y.value=null,S.value=null}),(e,t)=>{let n=c(`el-alert`),i=c(`el-button`),o=c(`el-descriptions-item`),f=c(`el-descriptions`),p=c(`el-radio-button`),v=c(`el-radio-group`),b=c(`el-tag`),x=c(`el-table-column`),S=c(`el-table`);return u(),a(`div`,D,[h(n,{class:`example-demo__alert`,type:`info`,closable:!1,"show-icon":``,title:`紫色 A 是目录主目标，绿色 B 是替换目标；选框、手柄和工具栏只属于当前 Transform Session。`}),d(`div`,ne,[(u(!0),a(ee,null,te(g(T),e=>(u(),r(i,{key:e.id,class:`transform-session-demo__target-card`,type:M.value===e.id?`primary`:`default`,plain:M.value!==e.id,disabled:G.value,"aria-pressed":M.value===e.id,onClick:t=>je(e.id)},{default:m(()=>[d(`span`,null,l(e.label),1),d(`small`,null,l(e.type),1)]),_:2},1032,[`type`,`plain`,`disabled`,`aria-pressed`,`onClick`]))),128))]),h(f,{class:`transform-session-demo__target-detail`,column:2,border:``},{default:m(()=>[h(o,{label:`A 主目标`},{default:m(()=>[s(l(q.value.label),1)]),_:1}),h(o,{label:`B 替换目标`},{default:m(()=>[s(l(J.value.label),1)]),_:1}),h(o,{label:`旋转`},{default:m(()=>[s(l(q.value.transform.rotate?`支持`:`— 不支持，Session 不会显示旋转手柄`),1)]),_:1}),h(o,{label:`缩放 / 顶点编辑`},{default:m(()=>[...t[0]||=[s(`支持`,-1)]]),_:1}),h(o,{label:`说明`,span:2},{default:m(()=>[s(l(q.value.description),1)]),_:1})]),_:1}),d(`div`,re,[d(`div`,ie,[t[4]||=d(`span`,null,`目标选择`,-1),d(`div`,ae,[h(i,{type:`primary`,onClick:Ne},{default:m(()=>[...t[1]||=[s(`start() 后地图选择`,-1)]]),_:1}),h(i,{disabled:y.value===null,onClick:Pe},{default:m(()=>[...t[2]||=[s(`select(A)`,-1)]]),_:1},8,[`disabled`]),h(i,{disabled:!K.value||!we.value,onClick:Fe},{default:m(()=>[...t[3]||=[s(`replaceSelected(A / B)`,-1)]]),_:1},8,[`disabled`])])]),d(`div`,oe,[t[7]||=d(`span`,null,`编辑模式`,-1),h(v,{"model-value":F.value,disabled:!K.value,"onUpdate:modelValue":Ie},{default:m(()=>[h(p,{value:`transform`},{default:m(()=>[...t[5]||=[s(`变换`,-1)]]),_:1}),h(p,{value:`edit`},{default:m(()=>[...t[6]||=[s(`顶点编辑`,-1)]]),_:1})]),_:1},8,[`model-value`,`disabled`])]),d(`div`,se,[d(`div`,ce,[t[10]||=d(`span`,null,`历史`,-1),d(`div`,le,[h(i,{disabled:!K.value,onClick:Le},{default:m(()=>[...t[8]||=[s(`撤销`,-1)]]),_:1},8,[`disabled`]),h(i,{disabled:!K.value,onClick:Re},{default:m(()=>[...t[9]||=[s(`重做`,-1)]]),_:1},8,[`disabled`])])]),d(`div`,ue,[t[13]||=d(`span`,null,`选中对象`,-1),d(`div`,de,[h(i,{disabled:!K.value,onClick:ze},{default:m(()=>[...t[11]||=[s(`复制`,-1)]]),_:1},8,[`disabled`]),h(i,{disabled:!K.value,type:`danger`,plain:``,onClick:Be},{default:m(()=>[...t[12]||=[s(`删除选中`,-1)]]),_:1},8,[`disabled`])])]),d(`div`,fe,[t[16]||=d(`span`,null,`会话`,-1),d(`div`,pe,[h(i,{disabled:!G.value,onClick:Ke},{default:m(()=>[...t[14]||=[s(`完成并提交`,-1)]]),_:1},8,[`disabled`]),h(i,{disabled:!G.value,onClick:qe},{default:m(()=>[...t[15]||=[s(`取消并回滚`,-1)]]),_:1},8,[`disabled`])])])]),d(`div`,me,[h(b,{type:G.value?`success`:`info`},{default:m(()=>[s(l(P.value),1)]),_:1},8,[`type`])])]),d(`div`,he,[d(`div`,ge,[t[19]||=d(`strong`,null,`Toolbar`,-1),d(`div`,_e,[h(i,{size:`small`,disabled:!Y.value,onClick:He},{default:m(()=>[...t[17]||=[s(`高亮编辑项`,-1)]]),_:1},8,[`disabled`]),h(i,{size:`small`,disabled:!Y.value,onClick:Ve},{default:m(()=>[s(l(V.value?`隐藏`:`显示`),1)]),_:1},8,[`disabled`]),h(i,{size:`small`,disabled:!Y.value,onClick:Ue},{default:m(()=>[s(l(H.value?`启用删除项`:`禁用删除项`),1)]),_:1},8,[`disabled`]),h(i,{size:`small`,disabled:!Y.value,onClick:We},{default:m(()=>[s(l(U.value?`恢复位置`:`调整位置`),1)]),_:1},8,[`disabled`])]),d(`div`,ve,[h(i,{size:`small`,type:`danger`,plain:``,disabled:!Y.value,onClick:Ge},{default:m(()=>[...t[18]||=[s(`销毁 Toolbar`,-1)]]),_:1},8,[`disabled`])])])]),d(`div`,ye,[d(`div`,{ref_key:`mapTarget`,ref:_,class:`example-stage`},null,512),t[20]||=d(`div`,{class:`transform-session-demo__map-guide`},`选择 A 或 B；拖拽图形、外框手柄，或切换到顶点编辑`,-1)]),h(f,{class:`transform-session-demo__summary`,column:2,border:``},{default:m(()=>[h(o,{label:`当前选择`},{default:m(()=>[s(l(I.value),1)]),_:1}),h(o,{label:`当前模式`},{default:m(()=>[s(l(F.value),1)]),_:1}),h(o,{label:`完整操作数`},{default:m(()=>[s(l(z.value),1)]),_:1}),h(o,{label:`复制数`},{default:m(()=>[s(l(B.value),1)]),_:1}),h(o,{label:`最近事件`},{default:m(()=>[s(l(L.value),1)]),_:1}),h(o,{label:`撤销 / 重做`},{default:m(()=>[s(l(R.value),1)]),_:1})]),_:1}),t[21]||=d(`h4`,{class:`transform-session-demo__matrix-title`},`目标支持矩阵`,-1),h(S,{data:g(Te),border:``,size:`small`},{default:m(()=>[h(x,{prop:`target`,label:`目标`,"min-width":`190`}),h(x,{prop:`translate`,label:`平移`,"min-width":`90`}),h(x,{prop:`rotate`,label:`旋转`,"min-width":`110`}),h(x,{prop:`scale`,label:`缩放 / 拉伸`,"min-width":`130`}),h(x,{prop:`vertex`,label:`顶点模式`,"min-width":`110`}),h(x,{prop:`note`,label:`能力说明 / 不支持项`,"min-width":`330`})]),_:1},8,[`data`])])}}}),[[`__scopeId`,`data-v-8aad6b0b`]]),M=`<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { Earth, type Coordinate, type Element, type StyleSpec, type TransformMode, type TransformSession } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';
import { interactionTargetById, interactionTargetExamples, type InteractionTargetId } from '../../config/interactionExamples';
import { createShapeExampleInput } from '../../config/shapeExamples';

const LAYER_ID = 'docs-transform-targets';
const FIRST_ID = 'docs-transform-a';
const SECOND_ID = 'docs-transform-b';
const MODULE = 'docs-transform';
const DEFAULT_TARGET: InteractionTargetId = 'polygon';
const ICON_SOURCE =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="56" viewBox="0 0 48 56"%3E%3Cpath fill="%237c3aed" stroke="white" stroke-width="3" d="M24 2C12.4 2 3 11.4 3 23c0 15.8 21 31 21 31s21-15.2 21-31C45 11.4 35.6 2 24 2Z"/%3E%3Ccircle cx="24" cy="23" r="8" fill="white"/%3E%3C/svg%3E';

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const firstRef = shallowRef<Element | null>(null);
const secondRef = shallowRef<Element | null>(null);
const sessionRef = shallowRef<TransformSession | null>(null);
const mapCenter = shallowRef<Coordinate | null>(null);
const selectedTargetId = ref<InteractionTargetId>(DEFAULT_TARGET);
const companionTargetId = ref<InteractionTargetId>('circle');
const status = ref<'idle' | TransformSession['status']>('idle');
const mode = ref<TransformMode>('transform');
const selectedId = ref('未选择');
const lastEvent = ref('选择目录目标后启动 Session');
const historyResult = ref('尚未执行撤销 / 重做');
const operationCount = ref(0);
const copyCount = ref(0);
const toolbarVisible = ref(true);
const toolbarRemoveDisabled = ref(false);
const toolbarShifted = ref(false);
const toolbarDestroyed = ref(false);
let disposers: Array<() => void> = [];

const isActive = computed(() => status.value === 'active');
const hasSelection = computed(() => isActive.value && selectedId.value !== '未选择');
const hasBothTargets = computed(() => firstRef.value !== null && secondRef.value !== null);
const selectedTarget = computed(() => interactionTargetById[selectedTargetId.value]);
const companionTarget = computed(() => interactionTargetById[companionTargetId.value]);
const hasToolbar = computed(() => {
  selectedId.value;
  return sessionRef.value?.toolbar !== undefined && !toolbarDestroyed.value;
});
const supportRows = interactionTargetExamples.map((target) => ({
  target: target.label,
  translate: target.transform.translate ? '支持' : '— 不支持',
  rotate: target.transform.rotate ? '支持' : '— 不支持',
  scale: target.transform.scale ? '支持' : '— 不支持',
  vertex: target.transform.vertex ? '支持' : '— 不支持',
  note: target.description
}));

const releaseListeners = () => {
  for (const dispose of disposers.splice(0)) dispose();
};

const cancelSession = () => {
  if (sessionRef.value?.status === 'active') sessionRef.value.cancel();
  releaseListeners();
  sessionRef.value = null;
  status.value = 'idle';
  mode.value = 'transform';
  selectedId.value = '未选择';
  toolbarDestroyed.value = false;
  toolbarVisible.value = true;
};

const sessionOptions = () => ({
  selector: { module: MODULE },
  translate: 'feature' as const,
  scale: true,
  stretch: true,
  rotate: true,
  historyLimit: 20,
  toolbar: { offset: [0, 14] as const, visible: true },
  policy: 'replace' as const
});

const styleFor = (id: InteractionTargetId, role: 'primary' | 'secondary'): StyleSpec => {
  const color = role === 'primary' ? '#7c3aed' : '#059669';
  const fill = role === 'primary' ? 'rgba(124, 58, 237, 0.30)' : 'rgba(16, 185, 129, 0.30)';
  if (id === 'point-icon') {
    return {
      symbol: {
        type: 'icon',
        src: ICON_SOURCE,
        size: [48, 56],
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction'
      },
      text: { text: role === 'primary' ? 'A' : 'B', offsetY: 18, fontSize: 14, fill: { type: 'solid', color } }
    };
  }
  if (id === 'polyline') {
    return {
      strokes: [{ color, width: 7 }],
      text: { text: role === 'primary' ? 'A' : 'B', fontSize: 18, fontWeight: 'bold', fill: { type: 'solid', color } }
    };
  }
  return {
    strokes: [{ color, width: 5 }],
    fill: { type: 'solid', color: fill },
    text: { text: role === 'primary' ? 'A' : 'B', fontSize: 24, fontWeight: 'bold', fill: { type: 'solid', color } }
  };
};

const targetCenter = (role: 'primary' | 'secondary'): readonly [number, number] | undefined => {
  const center = mapCenter.value;
  if (center === null) return undefined;
  return [center[0] + (role === 'primary' ? -27_000 : 27_000), center[1]];
};

const createTarget = (role: 'primary' | 'secondary') => {
  const earth = earthRef.value;
  const center = targetCenter(role);
  if (earth === null || center === undefined) return null;
  const id = role === 'primary' ? FIRST_ID : SECOND_ID;
  earth.elements.get(id)?.remove();
  const definition = role === 'primary' ? selectedTarget.value : companionTarget.value;
  return earth.elements.add({
    id,
    layerId: LAYER_ID,
    module: MODULE,
    geometry: createShapeExampleInput(definition.type, center, definition.type === 'point' ? 1 : 7_000),
    style: styleFor(definition.id, role),
    data: { example: definition.id, role }
  });
};

const nextCompanion = (id: InteractionTargetId) => {
  const index = interactionTargetExamples.findIndex((example) => example.id === id);
  return interactionTargetExamples[(index + 1) % interactionTargetExamples.length].id;
};

const createTargetPair = () => {
  firstRef.value = createTarget('primary');
  secondRef.value = createTarget('secondary');
};

const selectCatalogTarget = (id: InteractionTargetId) => {
  if (isActive.value) return;
  cancelSession();
  selectedTargetId.value = id;
  companionTargetId.value = nextCompanion(id);
  createTargetPair();
  lastEvent.value = \`A 为 \${interactionTargetById[id].label}，B 为 \${companionTarget.value.label}\`;
  historyResult.value = '尚未执行撤销 / 重做';
  operationCount.value = 0;
  focus();
};

const bindSession = (session: TransformSession) => {
  sessionRef.value = session;
  status.value = session.status;
  mode.value = session.mode;
  operationCount.value = 0;
  toolbarDestroyed.value = false;
  toolbarVisible.value = true;
  toolbarRemoveDisabled.value = false;
  toolbarShifted.value = false;

  const markOperation = (event: string) => {
    operationCount.value += 1;
    lastEvent.value = event;
  };
  disposers = [
    session.on('select', ({ element }) => {
      selectedId.value = element.id;
      lastEvent.value = \`select · \${element.id}\`;
    }),
    session.on('selectEnd', ({ element }) => {
      selectedId.value = '未选择';
      lastEvent.value = \`selectEnd · \${element.id}\`;
    }),
    session.on('translateEnd', () => markOperation('translateEnd · 已形成一条历史命令')),
    session.on('rotateEnd', () => markOperation('rotateEnd · 已形成一条历史命令')),
    session.on('scaleEnd', () => markOperation('scaleEnd · 已形成一条历史命令')),
    session.on('edit', () => markOperation('edit · 顶点工作态已更新')),
    session.on('copyPreviewConfirm', ({ element }) => {
      copyCount.value += 1;
      lastEvent.value = \`copyPreviewConfirm · \${element.id}\`;
    }),
    session.on('remove', ({ element }) => {
      if (element.id === FIRST_ID) firstRef.value = null;
      if (element.id === SECOND_ID) secondRef.value = null;
      selectedId.value = '未选择';
      lastEvent.value = \`remove · \${element.id}；可用“重置示例”恢复\`;
    }),
    session.on('error', ({ error }) => {
      lastEvent.value = error instanceof Error ? error.message : 'Transform 操作失败';
    })
  ];
};

// #region transform-start-select-replace
const startWaiting = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  cancelSession();
  const session = earth.transform.start(sessionOptions());
  bindSession(session);
  selectedId.value = '未选择';
  lastEvent.value = 'start · 请在地图中单击 A 或 B';
};

const selectFirst = () => {
  const earth = earthRef.value;
  const element = firstRef.value;
  if (earth === null || element === null) return;
  cancelSession();
  const session = earth.transform.select(element, sessionOptions());
  bindSession(session);
  selectedId.value = element.id;
  lastEvent.value = \`select(element) · \${element.id}\`;
};

const replaceSelected = () => {
  const session = sessionRef.value;
  const earth = earthRef.value;
  if (session === null || earth === null) return;
  const nextId = selectedId.value === FIRST_ID ? SECOND_ID : FIRST_ID;
  const next = earth.elements.get(nextId);
  if (next === undefined) return;
  session.replaceSelected(next, { retainHistory: false });
  selectedId.value = next.id;
  lastEvent.value = \`replaceSelected · \${next.id}\`;
};
// #endregion transform-start-select-replace

// #region transform-session-and-toolbar
const setMode = (nextMode: TransformMode) => {
  sessionRef.value?.setMode(nextMode);
  mode.value = sessionRef.value?.mode ?? nextMode;
  lastEvent.value = \`setMode · \${nextMode}\`;
};

const undo = () => {
  historyResult.value = sessionRef.value?.undo() === true ? '已撤销最近一次完整操作' : '没有可撤销操作';
};

const redo = () => {
  historyResult.value = sessionRef.value?.redo() === true ? '已重做下一次操作' : '没有可重做操作';
};

const copy = () => {
  const copied = sessionRef.value?.copy({ module: 'docs-transform-copy' });
  if (copied !== undefined) lastEvent.value = \`copy · \${copied.id}\`;
};

const remove = () => sessionRef.value?.remove();

const toggleToolbar = () => {
  const toolbar = sessionRef.value?.toolbar;
  if (toolbar === undefined || toolbarDestroyed.value) return;
  toolbarVisible.value = !toolbarVisible.value;
  if (toolbarVisible.value) toolbar.show();
  else toolbar.hide();
};

const markToolbarEdit = () => {
  sessionRef.value?.toolbar?.setActive('edit');
  lastEvent.value = 'toolbar.setActive · edit';
};

const toggleRemoveDisabled = () => {
  const toolbar = sessionRef.value?.toolbar;
  if (toolbar === undefined || toolbarDestroyed.value) return;
  toolbarRemoveDisabled.value = !toolbarRemoveDisabled.value;
  toolbar.updateItem('remove', { disabled: toolbarRemoveDisabled.value, title: toolbarRemoveDisabled.value ? '删除已禁用' : '删除' });
};

const shiftToolbar = () => {
  const toolbar = sessionRef.value?.toolbar;
  if (toolbar === undefined || toolbarDestroyed.value) return;
  toolbarShifted.value = !toolbarShifted.value;
  toolbar.updateOptions({ offset: toolbarShifted.value ? [28, 22] : [0, 14], className: 'docs-transform-toolbar', visible: true });
};

const destroyToolbar = () => {
  sessionRef.value?.toolbar?.destroy();
  toolbarDestroyed.value = true;
  toolbarVisible.value = false;
};

const finish = () => {
  sessionRef.value?.finish();
  if (sessionRef.value !== null) status.value = sessionRef.value.status;
  releaseListeners();
};

const cancel = () => {
  sessionRef.value?.cancel();
  if (sessionRef.value !== null) status.value = sessionRef.value.status;
  releaseListeners();
};
// #endregion transform-session-and-toolbar

const focus = () => {
  const earth = earthRef.value;
  const center = mapCenter.value;
  if (earth === null || center === null) return;
  earth.view.flyTo(center, 10);
};

const reset = () => {
  cancelSession();
  earthRef.value?.elements.remove({ module: 'docs-transform-copy' });
  copyCount.value = 0;
  operationCount.value = 0;
  historyResult.value = '尚未执行撤销 / 重做';
  lastEvent.value = '已恢复 A / B 目标与 Transform 资源';
  createTargetPair();
  focus();
};

defineExpose({ reset, focus });

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = new Earth({
    target: mapTarget.value,
    view: { zoom: 10 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  earth.layers.add({ kind: 'vector', id: LAYER_ID, zIndex: 30 });
  mapCenter.value = earth.view.toProjectedCoordinates([116.41, 39.92]);
  earthRef.value = earth;
  createTargetPair();
  focus();
});

onBeforeUnmount(() => {
  cancelSession();
  earthRef.value?.destroy();
  earthRef.value = null;
  firstRef.value = null;
  secondRef.value = null;
});
<\/script>

<template>
  <div class="example-demo transform-session-demo">
    <el-alert
      class="example-demo__alert"
      type="info"
      :closable="false"
      show-icon
      title="紫色 A 是目录主目标，绿色 B 是替换目标；选框、手柄和工具栏只属于当前 Transform Session。"
    />

    <div class="transform-session-demo__catalog" aria-label="Transform 目标目录">
      <el-button
        v-for="target in interactionTargetExamples"
        :key="target.id"
        class="transform-session-demo__target-card"
        :type="selectedTargetId === target.id ? 'primary' : 'default'"
        :plain="selectedTargetId !== target.id"
        :disabled="isActive"
        :aria-pressed="selectedTargetId === target.id"
        @click="selectCatalogTarget(target.id)"
      >
        <span>{{ target.label }}</span>
        <small>{{ target.type }}</small>
      </el-button>
    </div>

    <el-descriptions class="transform-session-demo__target-detail" :column="2" border>
      <el-descriptions-item label="A 主目标">{{ selectedTarget.label }}</el-descriptions-item>
      <el-descriptions-item label="B 替换目标">{{ companionTarget.label }}</el-descriptions-item>
      <el-descriptions-item label="旋转">
        {{ selectedTarget.transform.rotate ? '支持' : '— 不支持，Session 不会显示旋转手柄' }}
      </el-descriptions-item>
      <el-descriptions-item label="缩放 / 顶点编辑">支持</el-descriptions-item>
      <el-descriptions-item label="说明" :span="2">{{ selectedTarget.description }}</el-descriptions-item>
    </el-descriptions>

    <div class="example-demo__control-panel transform-session-demo__control-panel">
      <div class="example-demo__action-group">
        <span>目标选择</span>
        <div class="example-demo__action-buttons">
          <el-button type="primary" @click="startWaiting">start() 后地图选择</el-button>
          <el-button :disabled="firstRef === null" @click="selectFirst">select(A)</el-button>
          <el-button :disabled="!hasSelection || !hasBothTargets" @click="replaceSelected">replaceSelected(A / B)</el-button>
        </div>
      </div>
      <div class="example-demo__field">
        <span>编辑模式</span>
        <el-radio-group :model-value="mode" :disabled="!hasSelection" @update:model-value="setMode">
          <el-radio-button value="transform">变换</el-radio-button>
          <el-radio-button value="edit">顶点编辑</el-radio-button>
        </el-radio-group>
      </div>
      <div class="example-demo__action-row transform-session-demo__secondary-actions">
        <div class="example-demo__action-group">
          <span>历史</span>
          <div class="example-demo__action-buttons">
            <el-button :disabled="!hasSelection" @click="undo">撤销</el-button>
            <el-button :disabled="!hasSelection" @click="redo">重做</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>选中对象</span>
          <div class="example-demo__action-buttons">
            <el-button :disabled="!hasSelection" @click="copy">复制</el-button>
            <el-button :disabled="!hasSelection" type="danger" plain @click="remove">删除选中</el-button>
          </div>
        </div>
        <div class="example-demo__action-group">
          <span>会话</span>
          <div class="example-demo__action-buttons">
            <el-button :disabled="!isActive" @click="finish">完成并提交</el-button>
            <el-button :disabled="!isActive" @click="cancel">取消并回滚</el-button>
          </div>
        </div>
      </div>
      <div class="example-demo__feedback transform-session-demo__feedback" aria-live="polite">
        <el-tag :type="isActive ? 'success' : 'info'">{{ status }}</el-tag>
      </div>
    </div>
    <div class="example-demo__control-panel transform-session-demo__toolbar-controls">
      <div class="example-demo__action-group">
        <strong>Toolbar</strong>
        <div class="example-demo__action-buttons transform-session-demo__toolbar-actions">
          <el-button size="small" :disabled="!hasToolbar" @click="markToolbarEdit">高亮编辑项</el-button>
          <el-button size="small" :disabled="!hasToolbar" @click="toggleToolbar">{{ toolbarVisible ? '隐藏' : '显示' }}</el-button>
          <el-button size="small" :disabled="!hasToolbar" @click="toggleRemoveDisabled">
            {{ toolbarRemoveDisabled ? '启用删除项' : '禁用删除项' }}
          </el-button>
          <el-button size="small" :disabled="!hasToolbar" @click="shiftToolbar">{{ toolbarShifted ? '恢复位置' : '调整位置' }}</el-button>
        </div>
        <div class="example-demo__action-buttons transform-session-demo__toolbar-actions">
          <el-button size="small" type="danger" plain :disabled="!hasToolbar" @click="destroyToolbar">销毁 Toolbar</el-button>
        </div>
      </div>
    </div>
    <div class="transform-session-demo__map-shell">
      <div ref="mapTarget" class="example-stage"></div>
      <div class="transform-session-demo__map-guide">选择 A 或 B；拖拽图形、外框手柄，或切换到顶点编辑</div>
    </div>
    <el-descriptions class="transform-session-demo__summary" :column="2" border>
      <el-descriptions-item label="当前选择">{{ selectedId }}</el-descriptions-item>
      <el-descriptions-item label="当前模式">{{ mode }}</el-descriptions-item>
      <el-descriptions-item label="完整操作数">{{ operationCount }}</el-descriptions-item>
      <el-descriptions-item label="复制数">{{ copyCount }}</el-descriptions-item>
      <el-descriptions-item label="最近事件">{{ lastEvent }}</el-descriptions-item>
      <el-descriptions-item label="撤销 / 重做">{{ historyResult }}</el-descriptions-item>
    </el-descriptions>

    <h4 class="transform-session-demo__matrix-title">目标支持矩阵</h4>
    <el-table :data="supportRows" border size="small">
      <el-table-column prop="target" label="目标" min-width="190" />
      <el-table-column prop="translate" label="平移" min-width="90" />
      <el-table-column prop="rotate" label="旋转" min-width="110" />
      <el-table-column prop="scale" label="缩放 / 拉伸" min-width="130" />
      <el-table-column prop="vertex" label="顶点模式" min-width="110" />
      <el-table-column prop="note" label="能力说明 / 不支持项" min-width="330" />
    </el-table>
  </div>
</template>

<style scoped>
.transform-session-demo__catalog {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.transform-session-demo__target-card.el-button {
  height: auto;
  min-width: 0;
  margin: 0;
  padding: 10px 12px;
  white-space: normal;
}

.transform-session-demo__target-card :deep(span) {
  display: grid;
  width: 100%;
  justify-items: start;
  gap: 3px;
  text-align: left;
}

.transform-session-demo__target-detail {
  margin-bottom: 12px;
}

.transform-session-demo__control-panel {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
}

.transform-session-demo__feedback,
.transform-session-demo__secondary-actions {
  grid-column: 1 / -1;
}

.transform-session-demo__feedback {
  align-self: stretch;
}

.transform-session-demo__secondary-actions {
  align-items: stretch;
}

.transform-session-demo__toolbar-actions + .transform-session-demo__toolbar-actions {
  padding-top: 8px;
  border-top: 1px solid var(--doc-border);
}

.transform-session-demo__map-shell {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.transform-session-demo__map-guide {
  position: absolute;
  top: 12px;
  left: 50%;
  z-index: 2;
  max-width: calc(100% - 32px);
  padding: 7px 12px;
  border: 1px solid var(--doc-border);
  border-radius: 999px;
  background: color-mix(in srgb, var(--doc-surface) 94%, transparent);
  color: var(--doc-text);
  font-size: 12px;
  text-align: center;
  transform: translateX(-50%);
  pointer-events: none;
}

.transform-session-demo__summary {
  margin-top: 14px;
}

.transform-session-demo__matrix-title {
  margin: 18px 0 10px;
  color: var(--doc-text);
}
</style>
`,N={class:`doc-page-layout`},P={class:`doc-page`},F={id:`overview`,class:`doc-prose`},I={id:`method-examples`,class:`doc-prose`},L={id:`example-transform-session`,class:`doc-prose`},R={id:`events`,class:`doc-prose`},z={id:`working-state`,class:`doc-prose`},B={id:`visual-animation`,class:`doc-prose`},V={id:`lifecycle`,class:`doc-prose`},H={class:`doc-page-layout__aside`},U=n({__name:`TransformView`,setup(e){let n=[{id:`overview`,label:`选择与模式`},{id:`method-examples`,label:`API 与示例`},{id:`example-transform-session`,label:`多类型目标的选择、替换、变换与 Toolbar 管理`},{id:`events`,label:`事件族`},{id:`working-state`,label:`工作态与事务`},{id:`visual-animation`,label:`视觉和动画边界`},{id:`lifecycle`,label:`终态与清理`},{id:`api`,label:`完整 API`}],r=S(M,`transform-session-and-toolbar`),i=t(null),o=()=>i.value?.reset(),ee=()=>i.value?.focus(),l=[{owner:`TransformService`,members:`start() / select()`,focus:`地图查询选择与直接选择`},{owner:`TransformSession`,members:`selected / status / mode / toolbar`,focus:`当前会话属性`},{owner:`TransformSession`,members:`select() / replaceSelected()`,focus:`会话内选择与目标替换`},{owner:`TransformSession`,members:`setMode() / undo() / redo()`,focus:`模式和历史控制`},{owner:`TransformSession`,members:`copy() / remove()`,focus:`复制与删除当前目标`},{owner:`TransformSession`,members:`finish() / cancel() / on()`,focus:`事务终态和事件`},{owner:`TransformToolbarHandle`,members:`setActive() / updateItem()`,focus:`激活项与项目状态`},{owner:`TransformToolbarHandle`,members:`updateOptions() / show() / hide() / destroy()`,focus:`位置、显隐与释放`}],te=[{family:`选择`,events:`select / selectEnd`,meaning:`目标进入或离开当前 Session`},{family:`手柄`,events:`enterHandle / leaveHandle`,meaning:`携带 key 和建议 cursor`},{family:`平移`,events:`translateStart / translating / translateEnd`,meaning:`一次完整平移操作`},{family:`旋转`,events:`rotateStart / rotating / rotateEnd`,meaning:`一次完整旋转操作`},{family:`缩放`,events:`scaleStart / scaling / scaleEnd`,meaning:`缩放或单轴拉伸过程`},{family:`编辑`,events:`edit`,meaning:`Transform Edit 顶点工作态变化`},{family:`资源`,events:`copyPreviewConfirm / copyPreviewCancel / remove / error`,meaning:`复制预览、删除与错误结果`}],f=[{operation:`平移 / 顶点编辑`,hover:`move`,active:`grabbing`},{operation:`旋转`,hover:`grab`,active:`grabbing`},{operation:`水平 / 垂直拉伸`,hover:`ew-resize / ns-resize`,active:`保持对应 resize`},{operation:`对角缩放`,hover:`nesw-resize / nwse-resize`,active:`保持对应 resize`}],p=[`TransformService`,`TransformOptions`,`TransformSession`,`TransformEventMap`,`TransformMode`,`TransformTranslateMode`,`TransformReplaceOptions`,`TransformToolbarHandle`,`TransformToolbarOptions`,`TransformToolbarOptionsPatch`,`TransformToolbarItemSpec`,`TransformToolbarItemPatch`];return(e,t)=>{let b=c(`el-card`),x=c(`el-col`),S=c(`el-row`),w=c(`el-table-column`),T=c(`el-link`),E=c(`el-table`),D=c(`el-alert`);return u(),a(`div`,N,[d(`article`,P,[t[50]||=d(`header`,{class:`doc-hero`},[d(`span`,{class:`doc-hero__eyebrow`},`地图交互`),d(`h1`,null,`变换（Transform）`),d(`p`,null,`在同一个 Session 中选择 Element，完成平移、缩放、拉伸、旋转、顶点编辑、复制与撤销重做。`)],-1),d(`section`,F,[t[8]||=d(`h2`,{class:`doc-h2`},`先启动等待选择，或直接选择目标`,-1),h(S,{gutter:16},{default:m(()=>[h(x,{xs:24,md:12},{default:m(()=>[h(b,{shadow:`never`},{default:m(()=>[...t[0]||=[d(`strong`,null,`earth.transform.start(options)`,-1),d(`p`,null,`创建等待用户在地图中选择 Element 的 Session；selector、predicate 和 layerIds 可以约束候选范围。`,-1)]]),_:1})]),_:1}),h(x,{xs:24,md:12},{default:m(()=>[h(b,{shadow:`never`},{default:m(()=>[...t[1]||=[d(`strong`,null,`earth.transform.select(element, options)`,-1),d(`p`,null,`校验 Element 归属后立即选中目标，适合列表、搜索结果或业务按钮驱动的操作。`,-1)]]),_:1})]),_:1})]),_:1}),d(`p`,null,[h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-set-mode`},{default:m(()=>[...t[2]||=[s(`setMode`,-1)]]),_:1}),t[3]||=s(` 在 `,-1),t[4]||=d(`code`,null,`transform`,-1),t[5]||=s(` 外包框模式与 `,-1),t[6]||=d(`code`,null,`edit`,-1),t[7]||=s(` 顶点编辑模式之间切换；两种模式共享 Session 历史和最终事务。 `,-1)])]),d(`section`,I,[t[10]||=d(`h2`,{class:`doc-h2`},`公开成员如何对应到示例`,-1),t[11]||=d(`p`,null,`同一张地图同时放置 A、B 两个 Element，可观察 start 查询选择、直接 select、replaceSelected、历史以及 Toolbar 控制的视觉差异。`,-1),h(E,{data:l,border:``,stripe:``},{default:m(()=>[h(w,{prop:`owner`,label:`归属`,"min-width":`190`}),h(w,{prop:`members`,label:`属性 / 方法`,"min-width":`310`}),h(w,{prop:`focus`,label:`示例重点`,"min-width":`280`}),h(w,{label:`示例`,width:`120`},{default:m(()=>[h(T,{type:`primary`,href:`#example-transform-session`},{default:m(()=>[...t[9]||=[s(`查看示例`,-1)]]),_:1})]),_:1})]),_:1})]),d(`section`,L,[h(_,{title:`多类型目标的选择、替换、变换与 Toolbar 管理`,source:g(M),snippet:g(r),"show-reset":``,"show-focus":``,onReset:o,onFocus:ee},{description:m(()=>[d(`p`,null,[t[16]||=s(` 示例通过 `,-1),h(y,{kind:`method`,to:`/api/types#api-type-transform-service-method-select`},{default:m(()=>[...t[12]||=[s(`transform.select`,-1)]]),_:1}),t[17]||=s(` 启动已选中会话，展示模式切换、 `,-1),h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-undo`},{default:m(()=>[...t[13]||=[s(`undo`,-1)]]),_:1}),t[18]||=s(`、 `,-1),h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-redo`},{default:m(()=>[...t[14]||=[s(`redo`,-1)]]),_:1}),t[19]||=s(`、 `,-1),h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-copy`},{default:m(()=>[...t[15]||=[s(`copy`,-1)]]),_:1}),t[20]||=s(`、 `,-1),t[21]||=d(`code`,null,`replaceSelected`,-1),t[22]||=s(` 与 Toolbar 的显隐、更新和销毁。状态区只显示当前结果，不输出事件日志。 `,-1)])]),preview:m(()=>[h(j,{ref_key:`transformSessionDemoRef`,ref:i},null,512)]),_:1},8,[`source`,`snippet`])]),d(`section`,R,[t[27]||=d(`h2`,{class:`doc-h2`},`事件按操作族组织`,-1),d(`p`,null,[h(y,{kind:`type`,to:`/api/types#api-type-transform-event-map`},{default:m(()=>[...t[23]||=[s(`TransformEventMap`,-1)]]),_:1}),t[25]||=s(` 把开始、过程和结束分开；用 `,-1),h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-on`},{default:m(()=>[...t[24]||=[s(`on`,-1)]]),_:1}),t[26]||=s(` 订阅后保存返回的注销函数，页面离开时主动调用。 `,-1)]),h(E,{data:te,border:``},{default:m(()=>[h(w,{prop:`family`,label:`事件族`,width:`110`}),h(w,{prop:`events`,label:`事件`,"min-width":`330`}),h(w,{prop:`meaning`,label:`语义`,"min-width":`310`})]),_:1})]),d(`section`,z,[t[36]||=d(`h2`,{class:`doc-h2`},`工作态、历史与 Store 提交`,-1),d(`ul`,null,[t[32]||=d(`li`,null,`拖拽帧只更新临时目标；一次完整操作结束后形成一条 Session 历史命令。`,-1),d(`li`,null,[h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-finish`},{default:m(()=>[...t[28]||=[s(`finish`,-1)]]),_:1}),t[29]||=s(` 在整个 Session 结束时一次提交最终事务。 `,-1)]),d(`li`,null,[h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-cancel`},{default:m(()=>[...t[30]||=[s(`cancel`,-1)]]),_:1}),t[31]||=s(` 丢弃尚未提交的预览和历史工作态。 `,-1)]),t[33]||=d(`li`,null,`跨世界副本只改变展示坐标；业务状态、事务和历史始终保存规范世界坐标。`,-1),t[34]||=d(`li`,null,`Circle 的历史半径保持米制；平移和旋转不改变业务半径，缩放按既定规则更新。`,-1)]),h(D,{type:`info`,closable:!1,"show-icon":``,title:`复制不是动画快照`},{default:m(()=>[...t[35]||=[s(` copy() 复制规范 ElementState，可覆盖 module、layerId、style 等字段；交互预览、动画 elapsed、Handle 和临时样式都不会进入副本。 `,-1)]]),_:1})]),d(`section`,B,[t[38]||=d(`h2`,{class:`doc-h2`},`手柄视觉与动画协作`,-1),h(E,{data:f,border:``},{default:m(()=>[h(w,{prop:`operation`,label:`操作`,"min-width":`180`}),h(w,{prop:`hover`,label:`悬停`,"min-width":`210`}),h(w,{prop:`active`,label:`按下 / 操作中`,"min-width":`210`})]),_:1}),t[39]||=d(`p`,null,`选框、手柄、复制预览和 Tooltip 都属于 Session 临时资源；Edit 模式使用与独立 Edit 相同的蓝色锚点语义，不显示 Transform 选框。`,-1),h(D,{type:`warning`,closable:!1,"show-icon":``,title:`不同动画具有不同 Transform 策略`},{default:m(()=>[...t[37]||=[s(` dash-flow 与 path-travel 使用 follow-preview，时间继续推进并跟随 Transform 工作几何；pulse 及 blink、highlight、alert、grow、radar-scan、center-spread、fade 使用 pause-and-suppress。两种策略都不会把动画帧写入交互工作态或 Store。 `,-1)]]),_:1})]),d(`section`,V,[t[49]||=d(`h2`,{class:`doc-h2`},`终态与清理`,-1),d(`p`,null,[t[42]||=s(` TransformSession 暴露 `,-1),h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-finish`},{default:m(()=>[...t[40]||=[s(`finish`,-1)]]),_:1}),t[43]||=s(` 和 `,-1),h(y,{kind:`method`,to:`/api/types#api-type-transform-session-method-cancel`},{default:m(()=>[...t[41]||=[s(`cancel`,-1)]]),_:1}),t[44]||=s(`，但没有公开 `,-1),t[45]||=d(`code`,null,`destroy()`,-1),t[46]||=s(`。组件卸载时若 Session 仍为 active，先调用 cancel()；随后执行全部事件注销函数，最后 earth.destroy() 会释放工具栏、光标、Tooltip 和内部协调资源。 `,-1)]),d(`p`,null,[h(y,{kind:`property`,to:`/api/types#api-type-transform-session-property-toolbar`},{default:m(()=>[...t[47]||=[s(`toolbar`,-1)]]),_:1}),t[48]||=s(` 是可选句柄；若调用方主动取得并单独管理它，可用其 destroy() 幂等释放工具栏视图，但这不等于结束 Transform Session。 `,-1)])]),h(C,{"type-names":p,title:`Transform 完整 API`,description:`完整展示 Transform 的 Service、Session、Options、EventMap、选择替换选项，以及 Toolbar 的配置、项目和控制句柄。`})]),d(`aside`,H,[h(v,{title:`变换（Transform）`,items:n})])])}}});export{U as default};