import{At as e,B as t,Nt as n,P as r,Q as i,R as a,ct as o,fn as s,it as c,j as l,tt as u,x as d,xt as f,z as p,zt as m}from"./TypeExpression-D6csDz4V.js";import{B as h,H as g,V as _,W as v,a as y,n as b,t as x,z as S}from"./index-4uKXPGRf.js";var C={class:`example-demo`},w={class:`example-demo__control-panel descriptor-demo__controls`},T={class:`example-demo__control-grid descriptor-demo__settings`,role:`group`,"aria-label":`Descriptor 创建设置`},E={class:`example-demo__actions descriptor-demo__toolbar`},D={class:`example-demo__action-group descriptor-demo__action-group`,role:`group`,"aria-label":`创建与更新`},O={class:`example-demo__action-buttons descriptor-demo__action-buttons`},k={class:`example-demo__action-group descriptor-demo__action-group`,role:`group`,"aria-label":`显示控制`},A={class:`example-demo__action-buttons descriptor-demo__action-buttons`},j={class:`example-demo__action-group descriptor-demo__action-group`,role:`group`,"aria-label":`关闭与销毁`},M={class:`example-demo__action-buttons descriptor-demo__action-buttons`},N=`docs-services-descriptor`,P=d(t({__name:`DescriptorDemo`,setup(t){let d=[{label:`温度`,value:`23°C`,color:`var(--el-color-danger)`},{label:`风速`,value:`3.2 m/s`,color:`var(--el-color-primary)`}],m=e(null),h=n(null),g=n(null),_=e(`list`),v=e(`list`),x=e(`hide`),S=e({source:`—`,type:`—`,detail:`点击列表项或关闭按钮后显示当前载荷`}),P=e(`等待创建`),F=e(0),I=1,L=[],R=(e,t)=>{S.value={source:e,type:t.type,detail:t.item===void 0?`data.version=${t.data?.version??`—`}`:`${t.item.label} = ${t.item.value}`}},z=()=>{for(let e of L)e();L=[]},B=()=>{z(),g.value?.destroy(),g.value=null},V=()=>{let e=document.createElement(`div`);return e.className=`docs-descriptor-custom`,e.textContent=`这是调用方提供的 HTMLElement 内容`,e},H=()=>{let e=h.value;if(e===null)return;B();let t={id:`descriptor-demo`,position:e.view.toProjectedCoordinates([116.4074,39.9042]),header:`站点监测`,footer:`点击列表项查看事件`,close:!0,closeAction:x.value,draggable:!0,fixedLine:!0,fixedLineColor:`var(--el-color-primary)`,fixedMode:`position`,data:{version:I},onClose:e=>R(`spec.onClose`,e),onItemClick:e=>R(`spec.onItemClick`,e)},n=_.value===`list`?e.overlays.createDescriptor({...t,type:`list`,content:d}):e.overlays.createDescriptor({...t,type:`custom`,content:_.value===`text`?`自定义文本内容`:V()});L=[n.on(`click`,e=>R(`handle.on(click)`,e)),n.on(`close`,e=>R(`handle.on(close)`,e))],v.value=_.value,g.value=n,P.value=`已创建 ${_.value} Descriptor（${n.id}）`},U=()=>{let e=g.value;e!==null&&(I+=1,e.update({header:`站点监测 v${I}`,footer:I%2==0?void 0:`内容已通过 patch 更新`,content:v.value===`list`?[{label:`温度`,value:`${22+I}°C`,color:`var(--el-color-danger)`},{label:`状态`,value:`在线`,color:`var(--el-color-success)`}]:`DescriptorPatch 更新后的文本 v${I}`,data:{version:I},draggable:I%2==0,fixedLine:!0}),P.value=`update() 已应用 DescriptorPatch v${I}`)},W=()=>{let e=h.value,t=g.value;if(e===null||t===null)return;F.value=(F.value+1)%2;let n=F.value===0?[116.4074,39.9042]:[116.445,39.925];t.setPosition(e.view.toProjectedCoordinates(n)),P.value=`setPosition() 已移动到第 ${F.value+1} 个位置`},G=()=>{g.value?.show(),P.value=`已调用 show()`},K=()=>{g.value?.hide(),P.value=`已调用 hide()；句柄与订阅仍然有效`},q=()=>{let e=g.value;if(e===null)return;let t=x.value;e.close(),P.value=t===`hide`?`close() 按 hide 策略隐藏，可再次 show()`:`close() 按 destroy 策略销毁，旧句柄失效`,t===`destroy`&&(g.value=null,z())},J=e=>{e!==`hide`&&e!==`destroy`||(x.value=e,g.value?.update({closeAction:e}),P.value=`关闭策略已更新为 ${e}`)},Y=()=>{B(),P.value=`已显式调用 destroy() 并注销 handle.on() 监听`};return u(()=>{if(m.value===null)return;let e=y({id:N,target:m.value,view:{zoom:9},controls:{zoom:!0,rotate:!1,attribution:!0}});b(e,`vector`);let t=e.view.toProjectedCoordinates([116.4074,39.9042]),n=e.layers.add({kind:`vector`,id:`descriptor-anchor-layer`,zIndex:10});e.elements.add({id:`descriptor-anchor`,layerId:n.id,geometry:{type:`point`,controlPoints:[t]},style:{symbol:{type:`circle`,radius:10,fill:{type:`solid`,color:`#f56c6c`},stroke:{color:`#ffffff`,width:4}},text:{text:`Descriptor 定位点`,fontSize:13,fontWeight:`bold`,offsetY:34,padding:[4,7,4,7],fill:{type:`solid`,color:`#1f2937`},stroke:{color:`#ffffff`,width:3},backgroundFill:{type:`solid`,color:`rgba(255, 255, 255, 0.9)`}}}}),e.view.flyTo(t,9),h.value=e,H()}),i(()=>{B(),h.value?.destroy(),h.value=null}),(e,t)=>{let n=o(`el-alert`),i=o(`el-radio-button`),u=o(`el-radio-group`),d=o(`el-option`),h=o(`el-select`),v=o(`el-button`),y=o(`el-descriptions-item`),b=o(`el-descriptions`);return c(),r(`div`,C,[p(n,{type:`info`,closable:!1,"show-icon":``,title:`列表项点击和关闭会同时进入 spec 回调与 handle.on() 订阅；两条路径都需要按各自生命周期清理。`}),l(`div`,w,[l(`div`,T,[p(u,{modelValue:_.value,"onUpdate:modelValue":t[0]||=e=>_.value=e,"aria-label":`Descriptor 内容类型`},{default:f(()=>[p(i,{value:`list`},{default:f(()=>[...t[2]||=[a(`列表`,-1)]]),_:1}),p(i,{value:`text`},{default:f(()=>[...t[3]||=[a(`文本`,-1)]]),_:1}),p(i,{value:`dom`},{default:f(()=>[...t[4]||=[a(`HTMLElement`,-1)]]),_:1})]),_:1},8,[`modelValue`]),p(h,{modelValue:x.value,"onUpdate:modelValue":t[1]||=e=>x.value=e,class:`descriptor-demo__close-action`,"aria-label":`关闭策略`,onChange:J},{default:f(()=>[p(d,{label:`关闭时隐藏`,value:`hide`}),p(d,{label:`关闭时销毁`,value:`destroy`})]),_:1},8,[`modelValue`])]),l(`div`,E,[l(`div`,D,[t[8]||=l(`span`,null,`创建与更新`,-1),l(`div`,O,[p(v,{type:`primary`,onClick:H},{default:f(()=>[...t[5]||=[a(`按当前内容重新创建`,-1)]]),_:1}),p(v,{disabled:g.value===null,onClick:U},{default:f(()=>[...t[6]||=[a(`update patch`,-1)]]),_:1},8,[`disabled`]),p(v,{disabled:g.value===null,onClick:W},{default:f(()=>[...t[7]||=[a(`setPosition`,-1)]]),_:1},8,[`disabled`])])]),l(`div`,k,[t[11]||=l(`span`,null,`显示控制`,-1),l(`div`,A,[p(v,{disabled:g.value===null,onClick:G},{default:f(()=>[...t[9]||=[a(`show`,-1)]]),_:1},8,[`disabled`]),p(v,{disabled:g.value===null,onClick:K},{default:f(()=>[...t[10]||=[a(`hide`,-1)]]),_:1},8,[`disabled`])])]),l(`div`,j,[t[14]||=l(`span`,null,`关闭与销毁`,-1),l(`div`,M,[p(v,{disabled:g.value===null,type:`warning`,plain:``,onClick:q},{default:f(()=>[...t[12]||=[a(`close`,-1)]]),_:1},8,[`disabled`]),p(v,{disabled:g.value===null,type:`danger`,plain:``,onClick:Y},{default:f(()=>[...t[13]||=[a(`destroy`,-1)]]),_:1},8,[`disabled`])])])])]),l(`div`,{ref_key:`mapTarget`,ref:m,class:`example-stage`},null,512),p(n,{class:`descriptor-demo__status`,closable:!1,title:P.value,type:`success`,"show-icon":``,"aria-live":`polite`},null,8,[`title`]),p(b,{column:1,border:``,title:`当前事件载荷`},{default:f(()=>[p(y,{label:`来源`},{default:f(()=>[a(s(S.value.source),1)]),_:1}),p(y,{label:`类型`},{default:f(()=>[a(s(S.value.type),1)]),_:1}),p(y,{label:`数据`},{default:f(()=>[a(s(S.value.detail),1)]),_:1})]),_:1})])}}}),[[`__scopeId`,`data-v-7a6551bd`]]),F=`<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useEarth } from '@vrsim/earth-engine-ol';
import type { Coordinate, DescriptorEvent, DescriptorHandle, DescriptorListItem, Earth } from '@vrsim/earth-engine-ol';
import '@vrsim/earth-engine-ol/style.css';
import { createConfiguredLayer } from '../../config/mapSources';

const EARTH_ID = 'docs-services-descriptor';

interface DescriptorData {
  version: number;
}

interface CurrentEvent {
  source: string;
  type: string;
  detail: string;
}

const initialItems: readonly DescriptorListItem[] = [
  { label: '温度', value: '23°C', color: 'var(--el-color-danger)' },
  { label: '风速', value: '3.2 m/s', color: 'var(--el-color-primary)' }
];

const mapTarget = ref<HTMLDivElement | null>(null);
const earthRef = shallowRef<Earth | null>(null);
const descriptorRef = shallowRef<DescriptorHandle<DescriptorData> | null>(null);
const contentMode = ref<'list' | 'text' | 'dom'>('list');
const activeContentMode = ref<'list' | 'text' | 'dom'>('list');
const closeAction = ref<'hide' | 'destroy'>('hide');
const currentEvent = ref<CurrentEvent>({ source: '—', type: '—', detail: '点击列表项或关闭按钮后显示当前载荷' });
const status = ref('等待创建');
const positionIndex = ref(0);

let version = 1;
let offDescriptorEvents: Array<() => void> = [];

const showEvent = (source: string, event: DescriptorEvent<DescriptorData>) => {
  currentEvent.value = {
    source,
    type: event.type,
    detail: event.item === undefined ? \`data.version=\${event.data?.version ?? '—'}\` : \`\${event.item.label} = \${event.item.value}\`
  };
};

const disposeEventSubscriptions = () => {
  for (const off of offDescriptorEvents) off();
  offDescriptorEvents = [];
};

const destroyCurrent = () => {
  disposeEventSubscriptions();
  descriptorRef.value?.destroy();
  descriptorRef.value = null;
};

const customElement = (): HTMLDivElement => {
  const element = document.createElement('div');
  element.className = 'docs-descriptor-custom';
  element.textContent = '这是调用方提供的 HTMLElement 内容';
  return element;
};

// #region descriptor-create
const createDescriptor = () => {
  const earth = earthRef.value;
  if (earth === null) return;
  destroyCurrent();
  const position = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  const common = {
    id: 'descriptor-demo',
    position,
    header: '站点监测',
    footer: '点击列表项查看事件',
    close: true,
    closeAction: closeAction.value,
    draggable: true,
    fixedLine: true,
    fixedLineColor: 'var(--el-color-primary)',
    fixedMode: 'position' as const,
    data: { version },
    onClose: (event: DescriptorEvent<DescriptorData>) => showEvent('spec.onClose', event),
    onItemClick: (event: DescriptorEvent<DescriptorData>) => showEvent('spec.onItemClick', event)
  };

  const descriptor =
    contentMode.value === 'list'
      ? earth.overlays.createDescriptor<DescriptorData>({ ...common, type: 'list', content: initialItems })
      : earth.overlays.createDescriptor<DescriptorData>({
          ...common,
          type: 'custom',
          content: contentMode.value === 'text' ? '自定义文本内容' : customElement()
        });

  offDescriptorEvents = [
    descriptor.on('click', (event) => showEvent('handle.on(click)', event)),
    descriptor.on('close', (event) => showEvent('handle.on(close)', event))
  ];
  activeContentMode.value = contentMode.value;
  descriptorRef.value = descriptor;
  status.value = \`已创建 \${contentMode.value} Descriptor（\${descriptor.id}）\`;
};
// #endregion descriptor-create

const patchDescriptor = () => {
  const descriptor = descriptorRef.value;
  if (descriptor === null) return;
  version += 1;
  descriptor.update({
    header: \`站点监测 v\${version}\`,
    footer: version % 2 === 0 ? undefined : '内容已通过 patch 更新',
    content:
      activeContentMode.value === 'list'
        ? [
            { label: '温度', value: \`\${22 + version}°C\`, color: 'var(--el-color-danger)' },
            { label: '状态', value: '在线', color: 'var(--el-color-success)' }
          ]
        : \`DescriptorPatch 更新后的文本 v\${version}\`,
    data: { version },
    draggable: version % 2 === 0,
    fixedLine: true
  });
  status.value = \`update() 已应用 DescriptorPatch v\${version}\`;
};

const moveDescriptor = () => {
  const earth = earthRef.value;
  const descriptor = descriptorRef.value;
  if (earth === null || descriptor === null) return;
  positionIndex.value = (positionIndex.value + 1) % 2;
  const lonLat: Coordinate = positionIndex.value === 0 ? [116.4074, 39.9042] : [116.445, 39.925];
  descriptor.setPosition(earth.view.toProjectedCoordinates(lonLat));
  status.value = \`setPosition() 已移动到第 \${positionIndex.value + 1} 个位置\`;
};

const showDescriptor = () => {
  descriptorRef.value?.show();
  status.value = '已调用 show()';
};

const hideDescriptor = () => {
  descriptorRef.value?.hide();
  status.value = '已调用 hide()；句柄与订阅仍然有效';
};

const closeDescriptor = () => {
  const descriptor = descriptorRef.value;
  if (descriptor === null) return;
  const action = closeAction.value;
  descriptor.close();
  status.value = action === 'hide' ? 'close() 按 hide 策略隐藏，可再次 show()' : 'close() 按 destroy 策略销毁，旧句柄失效';
  if (action === 'destroy') {
    descriptorRef.value = null;
    disposeEventSubscriptions();
  }
};

const changeCloseAction = (value: string | number | boolean | undefined) => {
  if (value !== 'hide' && value !== 'destroy') return;
  closeAction.value = value;
  descriptorRef.value?.update({ closeAction: value });
  status.value = \`关闭策略已更新为 \${value}\`;
};

const destroyDescriptor = () => {
  destroyCurrent();
  status.value = '已显式调用 destroy() 并注销 handle.on() 监听';
};

onMounted(() => {
  if (mapTarget.value === null) return;
  const earth = useEarth({
    id: EARTH_ID,
    target: mapTarget.value,
    view: { zoom: 9 },
    controls: { zoom: true, rotate: false, attribution: true }
  });
  createConfiguredLayer(earth, 'vector');
  const anchor = earth.view.toProjectedCoordinates([116.4074, 39.9042]);
  const anchorLayer = earth.layers.add({ kind: 'vector', id: 'descriptor-anchor-layer', zIndex: 10 });
  earth.elements.add({
    id: 'descriptor-anchor',
    layerId: anchorLayer.id,
    geometry: { type: 'point', controlPoints: [anchor] },
    style: {
      symbol: {
        type: 'circle',
        radius: 10,
        fill: { type: 'solid', color: '#f56c6c' },
        stroke: { color: '#ffffff', width: 4 }
      },
      text: {
        text: 'Descriptor 定位点',
        fontSize: 13,
        fontWeight: 'bold',
        offsetY: 34,
        padding: [4, 7, 4, 7],
        fill: { type: 'solid', color: '#1f2937' },
        stroke: { color: '#ffffff', width: 3 },
        backgroundFill: { type: 'solid', color: 'rgba(255, 255, 255, 0.9)' }
      }
    }
  });
  earth.view.flyTo(anchor, 9);
  earthRef.value = earth;
  createDescriptor();
});

onBeforeUnmount(() => {
  destroyCurrent();
  earthRef.value?.destroy();
  earthRef.value = null;
});
<\/script>

<template>
  <div class="example-demo">
    <el-alert type="info" :closable="false" show-icon title="列表项点击和关闭会同时进入 spec 回调与 handle.on() 订阅；两条路径都需要按各自生命周期清理。" />

    <div class="example-demo__control-panel descriptor-demo__controls">
      <div class="example-demo__control-grid descriptor-demo__settings" role="group" aria-label="Descriptor 创建设置">
        <el-radio-group v-model="contentMode" aria-label="Descriptor 内容类型">
          <el-radio-button value="list">列表</el-radio-button>
          <el-radio-button value="text">文本</el-radio-button>
          <el-radio-button value="dom">HTMLElement</el-radio-button>
        </el-radio-group>
        <el-select v-model="closeAction" class="descriptor-demo__close-action" aria-label="关闭策略" @change="changeCloseAction">
          <el-option label="关闭时隐藏" value="hide" />
          <el-option label="关闭时销毁" value="destroy" />
        </el-select>
      </div>

      <div class="example-demo__actions descriptor-demo__toolbar">
        <div class="example-demo__action-group descriptor-demo__action-group" role="group" aria-label="创建与更新">
          <span>创建与更新</span>
          <div class="example-demo__action-buttons descriptor-demo__action-buttons">
            <el-button type="primary" @click="createDescriptor">按当前内容重新创建</el-button>
            <el-button :disabled="descriptorRef === null" @click="patchDescriptor">update patch</el-button>
            <el-button :disabled="descriptorRef === null" @click="moveDescriptor">setPosition</el-button>
          </div>
        </div>
        <div class="example-demo__action-group descriptor-demo__action-group" role="group" aria-label="显示控制">
          <span>显示控制</span>
          <div class="example-demo__action-buttons descriptor-demo__action-buttons">
            <el-button :disabled="descriptorRef === null" @click="showDescriptor">show</el-button>
            <el-button :disabled="descriptorRef === null" @click="hideDescriptor">hide</el-button>
          </div>
        </div>
        <div class="example-demo__action-group descriptor-demo__action-group" role="group" aria-label="关闭与销毁">
          <span>关闭与销毁</span>
          <div class="example-demo__action-buttons descriptor-demo__action-buttons">
            <el-button :disabled="descriptorRef === null" type="warning" plain @click="closeDescriptor">close</el-button>
            <el-button :disabled="descriptorRef === null" type="danger" plain @click="destroyDescriptor">destroy</el-button>
          </div>
        </div>
      </div>
    </div>

    <div ref="mapTarget" class="example-stage"></div>

    <el-alert class="descriptor-demo__status" :closable="false" :title="status" type="success" show-icon aria-live="polite" />
    <el-descriptions :column="1" border title="当前事件载荷">
      <el-descriptions-item label="来源">{{ currentEvent.source }}</el-descriptions-item>
      <el-descriptions-item label="类型">{{ currentEvent.type }}</el-descriptions-item>
      <el-descriptions-item label="数据">{{ currentEvent.detail }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style scoped>
.descriptor-demo__settings {
  grid-template-columns: minmax(min(100%, 320px), max-content) minmax(min(100%, 150px), 1fr);
}

.descriptor-demo__settings > *,
.descriptor-demo__settings :deep(.el-radio-group) {
  max-width: 100%;
}

.descriptor-demo__settings :deep(.el-radio-group) {
  overflow-x: auto;
  overflow-y: hidden;
}

.descriptor-demo__close-action {
  width: min(150px, 100%);
}

.descriptor-demo__toolbar {
  align-items: flex-start;
  gap: 10px;
}

.descriptor-demo__action-group {
  max-width: 100%;
}

.descriptor-demo__status {
  margin: 14px 0;
}

:global(.docs-descriptor-custom) {
  padding: 10px 12px;
  color: var(--el-text-color-primary);
  background: var(--el-fill-color-light);
  border: 1px dashed var(--el-border-color);
  border-radius: var(--el-border-radius-base);
}

@media (max-width: 560px) {
  .descriptor-demo__settings {
    display: grid;
    grid-template-columns: 1fr;
  }

  .descriptor-demo__settings :deep(.el-radio-group),
  .descriptor-demo__close-action,
  .descriptor-demo__action-group {
    width: 100%;
  }

  .descriptor-demo__toolbar,
  .descriptor-demo__action-buttons {
    display: grid;
    grid-template-columns: 1fr;
  }

  .descriptor-demo__action-buttons :deep(.el-button) {
    width: 100%;
    height: auto;
    min-height: 32px;
    white-space: normal;
  }
}
</style>
`,I={class:`doc-page-layout`},L={class:`doc-page`},R={id:`overview`,class:`doc-prose`},z={id:`example-descriptor-lifecycle`,class:`doc-prose`},B={id:`patch-and-events`,class:`doc-prose`},V={id:`close-policy`,class:`doc-prose`},H={id:`method-reference`,class:`doc-prose`},U={class:`doc-page-layout__aside`},W=t({__name:`DescriptorView`,setup(e){let t=x(F,`descriptor-create`),n=[{id:`overview`,label:`复合对象与内容`},{id:`example-descriptor-lifecycle`,label:`列表、Patch、事件与关闭策略`},{id:`patch-and-events`,label:`Patch 与事件`},{id:`close-policy`,label:`关闭策略`},{id:`method-reference`,label:`创建与句柄方法`},{id:`api`,label:`完整 API`}],i=[{prop:`name`,label:`type`,width:130},{prop:`content`,label:`content`,width:300,linkTypes:!0},{prop:`events`,label:`交互`,width:300},{prop:`desc`,label:`适用场景`,width:300}],s=[{name:`list`,content:`readonly DescriptorListItem[]`,events:`点击项目产生 click 事件，包含 item 与 index`,desc:`结构化键值、状态清单`},{name:`custom`,content:`string | HTMLElement`,events:`不产生列表项目语义`,desc:`简单文本或调用方自管 DOM 内容`}],u=[{prop:`name`,label:`方法`,width:210,presentation:`method`},{prop:`params`,label:`参数`,width:390,linkTypes:!0},{prop:`returns`,label:`返回值`,width:220,linkTypes:!0},{prop:`desc`,label:`说明`,width:410}],d=[{anchor:`api-service-create-descriptor`,href:`/api/types#api-type-overlay-service-method-create-descriptor`,name:`OverlayService.createDescriptor`,params:`spec: DescriptorSpec<T>`,returns:`DescriptorHandle<T>`,desc:`原子创建 Descriptor DOM、可选连接线与交互绑定`},{anchor:`api-handle-update`,href:`/api/types#api-type-descriptor-handle-method-update`,name:`update`,params:`patch: DescriptorPatch<T>`,returns:`void`,desc:`原子更新内容、位置、标题、关闭回调、拖动、固定线和 data`},{anchor:`api-handle-set-position`,href:`/api/types#api-type-descriptor-handle-method-set-position`,name:`setPosition`,params:`position: Coordinate`,returns:`void`,desc:`移动 Descriptor；固定连接线同步更新`},{anchor:`api-handle-show`,href:`/api/types#api-type-descriptor-handle-method-show`,name:`show`,params:`—`,returns:`void`,desc:`显示 Descriptor 与关联视觉资源`},{anchor:`api-handle-hide`,href:`/api/types#api-type-descriptor-handle-method-hide`,name:`hide`,params:`—`,returns:`void`,desc:`隐藏但保留句柄、内容、订阅和位置`},{anchor:`api-handle-close`,href:`/api/types#api-type-descriptor-handle-method-close`,name:`close`,params:`—`,returns:`void`,desc:`触发 close 事件，并按 closeAction 执行 hide 或 destroy`},{anchor:`api-handle-on`,href:`/api/types#api-type-descriptor-handle-method-on`,name:`on`,params:`type: 'click' | 'close', listener: (event: DescriptorEvent<T>) => void`,returns:`() => void`,desc:`订阅句柄事件；返回幂等注销函数`},{anchor:`api-handle-destroy`,href:`/api/types#api-type-descriptor-handle-method-destroy`,name:`destroy`,params:`—`,returns:`void`,desc:`幂等销毁 DOM、连接线、拖动与事件资源`}],y=[`DescriptorHandle`,`DescriptorSpec`,`DescriptorPatch`,`DescriptorContent`,`DescriptorListItem`,`DescriptorEvent`,`OverlayService`],b={OverlayService:[`createDescriptor`]};return(e,x)=>{let C=o(`el-alert`),w=o(`el-descriptions-item`),T=o(`el-descriptions`),E=o(`el-card`),D=o(`el-col`),O=o(`el-row`);return c(),r(`div`,I,[l(`article`,L,[x[26]||=l(`header`,{class:`doc-hero`},[l(`span`,{class:`doc-hero__eyebrow`},`地图服务`),l(`h1`,null,`Descriptor`),l(`p`,null,`Descriptor 是内置结构的 Overlay 复合对象：它统一管理内容 DOM、标题与底部、拖动、关闭、点击事件，以及可选的定位点连接线 Element。`)],-1),l(`section`,R,[x[4]||=l(`h2`,{class:`doc-h2`},`复合对象与内容`,-1),l(`p`,null,[x[1]||=a(` 通过 `,-1),p(v,{kind:`method`,to:`#api-service-create-descriptor`},{default:f(()=>[...x[0]||=[a(`earth.overlays.createDescriptor`,-1)]]),_:1}),x[2]||=a(` 创建。创建、更新和销毁会把 Overlay、连接线与交互绑定作为一个整体处理；不要另行操作内部 Overlay 或连接线。 `,-1)]),p(_,{columns:i,rows:s}),p(C,{class:`doc-prose__alert`,type:`info`,closable:!1,"show-icon":``,title:`HTMLElement 仍属于调用方业务内容`},{default:f(()=>[...x[3]||=[a(` 自定义 HTMLElement 会被挂入 Descriptor 的 Earth-owned 包装节点；销毁时从地图解绑，但引擎不会清空调用方节点内容或替你移除业务监听。 `,-1)]]),_:1})]),l(`section`,z,[p(h,{title:`列表、Patch、事件与关闭策略`,source:m(F),snippet:m(t),"source-lang":`vue`,"snippet-lang":`typescript`},{description:f(()=>[l(`p`,null,[x[6]||=a(` 示例切换列表、文本和 HTMLElement 内容，实际运行 createDescriptor、update、setPosition、show、hide、close、on 与 destroy。列表点击和关闭同时展示 spec 回调与 `,-1),p(v,{kind:`method`,to:`#api-handle-on`},{default:f(()=>[...x[5]||=[a(`handle.on`,-1)]]),_:1}),x[7]||=a(` 订阅路径。 `,-1)])]),preview:f(()=>[p(P)]),_:1},8,[`source`,`snippet`])]),l(`section`,B,[x[13]||=l(`h2`,{class:`doc-h2`},`Patch 与事件`,-1),p(T,{column:1,border:``},{default:f(()=>[p(w,{label:`内容与文案`},{default:f(()=>[...x[8]||=[a(`content、header、footer 可以更新；header/footer 显式传 undefined 表示清除。`,-1)]]),_:1}),p(w,{label:`交互`},{default:f(()=>[...x[9]||=[a(`draggable 控制拖动；fixedLine 与 fixedLineColor 控制连接线；fixedMode 决定拖动后保持地图坐标还是屏幕像素。`,-1)]]),_:1}),p(w,{label:`回调替换`},{default:f(()=>[...x[10]||=[a(`onClose、onItemClick 可由 patch 替换，显式 undefined 表示清除 spec 回调。`,-1)]]),_:1}),p(w,{label:`句柄订阅`},{default:f(()=>[...x[11]||=[a(`on('click' | 'close') 返回独立 disposer；更新 spec 回调不会注销 handle.on 订阅。`,-1)]]),_:1}),p(w,{label:`数据`},{default:f(()=>[...x[12]||=[a(`data 在 DescriptorEvent 中以只读值提供；显式 undefined 可清除。`,-1)]]),_:1})]),_:1})]),l(`section`,V,[x[24]||=l(`h2`,{class:`doc-h2`},`关闭策略`,-1),p(O,{gutter:16},{default:f(()=>[p(D,{xs:24,md:12},{default:f(()=>[p(E,{shadow:`never`},{header:f(()=>[...x[14]||=[l(`strong`,null,`closeAction: 'hide'`,-1)]]),default:f(()=>[x[15]||=l(`p`,null,`close() 触发关闭事件后隐藏；句柄仍有效，可再次 show()，订阅也继续保留。`,-1)]),_:1})]),_:1}),p(D,{xs:24,md:12},{default:f(()=>[p(E,{shadow:`never`},{header:f(()=>[...x[16]||=[l(`strong`,null,`closeAction: 'destroy'`,-1)]]),default:f(()=>[x[17]||=l(`p`,null,`close() 触发关闭事件后销毁整个复合对象；旧句柄除幂等清理外进入失效状态。`,-1)]),_:1})]),_:1})]),_:1}),l(`p`,null,[p(v,{kind:`method`,to:`#api-handle-hide`},{default:f(()=>[...x[18]||=[a(`hide`,-1)]]),_:1}),x[21]||=a(` 永远只隐藏， `,-1),p(v,{kind:`method`,to:`#api-handle-destroy`},{default:f(()=>[...x[19]||=[a(`destroy`,-1)]]),_:1}),x[22]||=a(` 永远销毁；只有 `,-1),p(v,{kind:`method`,to:`#api-handle-close`},{default:f(()=>[...x[20]||=[a(`close`,-1)]]),_:1}),x[23]||=a(` 读取 closeAction。earth.overlays.clear() 与 earth.destroy() 不受 closeAction 影响，都会销毁资源。 `,-1)])]),l(`section`,H,[x[25]||=l(`h2`,{class:`doc-h2`},`创建与句柄方法`,-1),p(_,{columns:u,rows:d})]),p(S,{"type-names":y,"member-names":b,title:`Descriptor 完整 API`,description:`这里直接列出 Descriptor 内容、创建配置、Patch、事件、句柄，以及 OverlayService.createDescriptor 的全部参数和返回类型。`})]),l(`aside`,U,[p(g,{title:`Descriptor`,items:n})])])}}});export{W as default};