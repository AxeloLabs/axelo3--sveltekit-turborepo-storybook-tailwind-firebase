import{P as D,M as S}from"./MarginDecorator-624582c6.js";import{Default as s,actionsData as f}from"./Task.stories-b19746c3.js";import"./index-045b47e0.js";import"./index-b7956fed.js";import"./chunk-OPEUWD42-a3b45fd8.js";const y={component:D,decorators:[()=>S],title:"PureTaskList",argTypes:{onPinTask:{action:"onPinTask"},onArchiveTask:{action:"onArchiveTask"}}},o=L=>({Component:D,props:L,on:{...f}}),a=o.bind({});a.args={tasks:[{...s.args.task,id:"1",title:"Task 1"},{...s.args.task,id:"2",title:"Task 2"},{...s.args.task,id:"3",title:"Task 3"},{...s.args.task,id:"4",title:"Task 4"},{...s.args.task,id:"5",title:"Task 5"},{...s.args.task,id:"6",title:"Task 6"}]};const t=o.bind({});t.args={tasks:[...a.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]};const r=o.bind({});r.args={tasks:[],loading:!0};const e=o.bind({});e.args={...r.args,loading:!1};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  Component: PureTaskList,
  props: args,
  on: {
    ...TaskStories.actionsData
  }
})`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  Component: PureTaskList,
  props: args,
  on: {
    ...TaskStories.actionsData
  }
})`,...(k=(d=t.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var m,g,T;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  Component: PureTaskList,
  props: args,
  on: {
    ...TaskStories.actionsData
  }
})`,...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var u,l,P;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  Component: PureTaskList,
  props: args,
  on: {
    ...TaskStories.actionsData
  }
})`,...(P=(l=e.parameters)==null?void 0:l.docs)==null?void 0:P.source}}};const A=["Default","WithPinnedTasks","Loading","Empty"];export{a as Default,e as Empty,r as Loading,t as WithPinnedTasks,A as __namedExportsOrder,y as default};
//# sourceMappingURL=TaskList.stories-ca1a14fe.js.map
