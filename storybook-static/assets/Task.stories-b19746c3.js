import{T as g}from"./MarginDecorator-624582c6.js";import{a as r}from"./chunk-OPEUWD42-a3b45fd8.js";import"./index-045b47e0.js";import"./index-b7956fed.js";const u={onPinTask:r("onPinTask"),onArchiveTask:r("onArchiveTask")},_={component:g,title:"Task",excludeStories:/.*Data$/,argTypes:{onPinTask:{action:"onPinTask"},onArchiveTask:{action:"onArchiveTask"}}},o=({onArchiveTask:P,onPinTask:h,...A})=>({Component:g,props:A,on:{...u}}),a=o.bind({});a.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX"}};const n=o.bind({});n.args={task:{...a.args.task,state:"TASK_PINNED"}};const s=o.bind({});s.args={task:{...a.args.task,state:"TASK_ARCHIVED"}};var e,t,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`({
  onArchiveTask,
  onPinTask,
  ...args
}) => ({
  Component: Task,
  props: args,
  on: {
    ...actionsData
  }
})`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,p,T;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
  onArchiveTask,
  onPinTask,
  ...args
}) => ({
  Component: Task,
  props: args,
  on: {
    ...actionsData
  }
})`,...(T=(p=n.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var k,m,d;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
  onArchiveTask,
  onPinTask,
  ...args
}) => ({
  Component: Task,
  props: args,
  on: {
    ...actionsData
  }
})`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const f=["actionsData","Default","Pinned","Archived"];export{s as Archived,a as Default,n as Pinned,f as __namedExportsOrder,u as actionsData,_ as default};
//# sourceMappingURL=Task.stories-b19746c3.js.map
