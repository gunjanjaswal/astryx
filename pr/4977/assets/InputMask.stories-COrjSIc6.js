import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{t as i}from"./Text-CyPoZcCT.js";import{i as a,t as o}from"./Stack-srZUN5cK.js";import{t as s}from"./Text-CMi_0D3q.js";import{n as c,t as l}from"./src-D1LFhu9J.js";function u(e){let[t,n]=(0,d.useState)(``);return(0,f.jsx)(c,{...e,value:t,onChange:n})}var d,f,p,m,h,g,_,v;e((()=>{d=t(n()),l(),o(),s(),f=r(),p={title:`Lab/InputMask`,component:c,tags:[`autodocs`]},m={render:()=>(0,f.jsxs)(a,{gap:4,children:[(0,f.jsx)(u,{mask:`phone-us`,label:`Phone number`}),(0,f.jsx)(u,{mask:`zip-us`,label:`ZIP code`}),(0,f.jsx)(u,{mask:`ssn`,label:`SSN`}),(0,f.jsx)(u,{mask:`credit-card`,label:`Card number`})]})},h={render:()=>(0,f.jsxs)(a,{gap:4,children:[(0,f.jsx)(u,{mask:{pattern:`###-###`,placeholder:`•`},label:`Sort code`,formatHint:`Six digits, e.g. 123-456`}),(0,f.jsx)(u,{mask:{pattern:`(+1) ### ### ####`},label:`Phone with country code`})]})},g={render:function(){let[e,t]=(0,d.useState)(`55512`);return(0,f.jsxs)(a,{gap:4,children:[(0,f.jsx)(c,{mask:`phone-us`,label:`Phone number`,value:e,onChange:t,hasClear:!0,status:e.length>0&&e.length<10?{type:`error`,message:`Enter all 10 digits`}:void 0}),(0,f.jsxs)(i,{children:[`Raw value: `,e===``?`(empty)`:e]})]})}},_={render:()=>(0,f.jsxs)(a,{gap:4,children:[(0,f.jsx)(c,{mask:`phone-us`,label:`Disabled`,value:`5551234567`,isDisabled:!0}),(0,f.jsx)(c,{mask:`phone-us`,label:`Disabled with reason`,value:`5551234567`,isDisabled:!0,disabledMessage:`Verified numbers cannot be edited`}),(0,f.jsx)(c,{mask:`ssn`,label:`Read-only`,value:`123456789`,isReadOnly:!0}),(0,f.jsx)(c,{mask:`credit-card`,label:`Validating`,value:`4111111111111111`,isLoading:!0})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <VStack gap={4}>
      <ControlledMask mask="phone-us" label="Phone number" />
      <ControlledMask mask="zip-us" label="ZIP code" />
      <ControlledMask mask="ssn" label="SSN" />
      <ControlledMask mask="credit-card" label="Card number" />
    </VStack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <VStack gap={4}>
      <ControlledMask mask={{
      pattern: '###-###',
      placeholder: '•'
    }} label="Sort code" formatHint="Six digits, e.g. 123-456" />
      <ControlledMask mask={{
      pattern: '(+1) ### ### ####'
    }} label="Phone with country code" />
    </VStack>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function ValidationStory() {
    const [value, setValue] = useState('55512');
    const incomplete = value.length > 0 && value.length < 10;
    return <VStack gap={4}>
        <InputMask mask="phone-us" label="Phone number" value={value} onChange={setValue} hasClear status={incomplete ? {
        type: 'error',
        message: 'Enter all 10 digits'
      } : undefined} />
        <Text>Raw value: {value === '' ? '(empty)' : value}</Text>
      </VStack>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <VStack gap={4}>
      <InputMask mask="phone-us" label="Disabled" value="5551234567" isDisabled />
      <InputMask mask="phone-us" label="Disabled with reason" value="5551234567" isDisabled disabledMessage="Verified numbers cannot be edited" />
      <InputMask mask="ssn" label="Read-only" value="123456789" isReadOnly />
      <InputMask mask="credit-card" label="Validating" value="4111111111111111" isLoading />
    </VStack>
}`,..._.parameters?.docs?.source}}},v=[`NamedMasks`,`CustomPattern`,`ValidationAndClear`,`States`]}))();export{h as CustomPattern,m as NamedMasks,_ as States,g as ValidationAndClear,v as __namedExportsOrder,p as default};