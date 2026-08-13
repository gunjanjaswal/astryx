import{i as e}from"./preload-helper-CT_b8DTk.js";import{d as t,f as n,i as r}from"./ime-Dkhyp7Au.js";import{O as i,t as a}from"./utils-D_w15ViX.js";import{t as o}from"./jsx-runtime-DqZldVDK.js";import{d as s,f as c,i as l,n as u}from"./useTheme-CIlcMfEF.js";import{a as d,i as f}from"./Icon-Ub1xJUR2.js";function p({state:e,size:t=`md`,isDisabled:a=!1,children:o,ref:s,className:c,style:l,xstyle:u,...d}){let f=e===`checked`,p=e===`indeterminate`,y=f||p;return(0,m.jsx)(`span`,{ref:s,"aria-hidden":`true`,...i(r(`checkbox-indicator`,{size:t,checked:f?`checked`:p?`indeterminate`:null,disabled:a?`disabled`:null},{legacyNames:[`checkbox`]}),n(h.box,g[t],y?h.checked:h.unchecked,a&&h.disabled,a&&!y&&h.disabledUnchecked,u),c,l),...d,children:o??(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`svg`,{viewBox:`0 0 10 10`,...n(h.checkmark,_[t],f&&h.checkmarkVisible),children:(0,m.jsx)(`path`,{d:`M8.5 2.5L4 7.5L1.5 5`,stroke:`currentColor`,strokeWidth:`1.5`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,m.jsx)(`span`,{...n(h.indeterminateMark,v[t],p&&h.indeterminateMarkVisible)})]})})}var m,h,g,_,v,y=e((()=>{t(),a(),m=o(),h={box:{kB7OPa:`astryx9f619`,k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,kmuXW:`astryx2lah0s`,kMzoRj:`astryx1litavf`,ksu8eU:`astryx1y0btm7`,kaIpWk:`astryxx3sua9`,k1ekBW:`astryxts7igz`,kIyJzY:`astryxuedmi6 astryx12w9bfk`,kAMwcw:`astryxlr8y92`,$$css:!0},unchecked:{kMwMTN:`astryxqwr325`,kVAM5u:`astryxvy26l8 astryxvr0s6v`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx10xzikg astryx1orexks`,$$css:!0},checked:{kMwMTN:`astryx17wrial`,kVAM5u:`astryxad5do astryx1nccqs`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx1ewilqj astryxe50u90`,$$css:!0},disabled:{kSiTet:`astryxbyyjgo`,kVAM5u:`astryx14i3s5s astryxzl8x75`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},disabledUnchecked:{kWkggS:`astryxwmxj5m astryxejnnay`,$$css:!0},checkmark:{k1xSpc:`astryx1s85apg`,kMwMTN:`astryx17wrial astryxs5hli`,$$css:!0},checkmarkVisible:{k1xSpc:`astryx1lliihq`,$$css:!0},indeterminateMark:{k1xSpc:`astryx1s85apg`,kWkggS:`astryx1azo05 astryxwvh9j7`,kaIpWk:`astryxjspbzw`,$$css:!0},indeterminateMarkVisible:{k1xSpc:`astryx1lliihq`,$$css:!0}},g={sm:{kzqmXN:`astryxw4jnvo`,kZKoxP:`astryx1qx5ct2`,$$css:!0},md:{kzqmXN:`astryxvy4d1p`,kZKoxP:`astryxxk0z11`,$$css:!0}},_={sm:{kzqmXN:`astryxsmyaan`,kZKoxP:`astryx1kpxq89`,$$css:!0},md:{kzqmXN:`astryx6jxa94`,kZKoxP:`astryx1v9usgg`,$$css:!0}},v={sm:{kzqmXN:`astryx1fsd2vl`,kZKoxP:`astryx36qwtl`,$$css:!0},md:{kzqmXN:`astryxsmyaan`,kZKoxP:`astryx36qwtl`,$$css:!0}},p.displayName=`CheckboxIndicator`,p.__docgenInfo={description:`The default checkbox visual: a square box with a checkmark or an
indeterminate bar.

Decorative and non-interactive — it renders \`aria-hidden\` and owns no input,
role, or focus behavior. The focus ring lives on the owner's control wrapper
(see CheckboxInput), so a theme that replaces this component keeps a visible
focus indicator for free. Themes replace it wholesale through
\`defineTheme({indicators: {checkbox: MyCheckbox}})\`, or restyle it through
the \`checkbox\` theme target like any other component.

@example
\`\`\`tsx
<CheckboxIndicator state="indeterminate" size="sm" />
\`\`\``,methods:[],displayName:`CheckboxIndicator`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref forwarded to the indicator's root element.`},state:{required:!0,tsType:{name:`IndicatorFamilyMap[F]`,raw:`IndicatorFamilyMap[F]`},description:`Which state to draw. The state space is fixed by the family.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`Control size.
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the owning control is disabled. Purely visual — the owner still
owns the actual disabled semantics.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered inside the indicator chrome *instead of* the state mark.
CheckboxInput uses this to show a loading Spinner inside the box while a
change action is pending.`}},composes:[`Omit`]}}));function b({state:e,size:t=`md`,isDisabled:r=!1,children:a,ref:o,className:s,style:c,xstyle:l,...u}){return a==null?e===`checked`?(0,x.jsx)(f,{...u,icon:`check`,size:S[t],color:r?`disabled`:`accent`,xstyle:l,className:s,style:c}):null:(0,x.jsx)(`span`,{...u,ref:o,"aria-hidden":`true`,...i(n(l),s,c),children:a})}var x,S,C=e((()=>{t(),d(),a(),x=o(),S={sm:`sm`,md:`sm`},b.displayName=`CheckIndicator`,b.__docgenInfo={description:`The default single-selection mark: a checkmark when chosen, nothing when not.

Decorative and non-interactive — it renders \`aria-hidden\` and owns no role,
state, or focus behavior; the option or row that hosts it keeps all of that.

@example
\`\`\`tsx
<CheckIndicator state={isSelected ? 'checked' : 'unchecked'} size="sm" />
\`\`\`

Swap every single-selection mark for a radio:

@example
\`\`\`tsx
import {RadioIndicator} from '@astryxdesign/core/Indicator';

defineTheme({name: 'brand', indicators: {check: RadioIndicator}});
\`\`\``,methods:[],displayName:`CheckIndicator`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref forwarded to the indicator's root element.`},state:{required:!0,tsType:{name:`IndicatorFamilyMap[F]`,raw:`IndicatorFamilyMap[F]`},description:`Which state to draw. The state space is fixed by the family.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`Control size.
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the owning control is disabled. Purely visual — the owner still
owns the actual disabled semantics.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered inside the indicator chrome *instead of* the state mark.
CheckboxInput uses this to show a loading Spinner inside the box while a
change action is pending.`}},composes:[`Omit`]}}));function w({state:e,size:t=`md`,isDisabled:a=!1,children:o,ref:s,className:c,style:l,xstyle:u,...d}){let f=e!==`unchecked`;return(0,T.jsx)(`span`,{ref:s,"aria-hidden":`true`,...i(r(`radio-indicator`,{size:t,checked:f?`checked`:null,disabled:a?`disabled`:null},{legacyNames:[`radio`]}),n(E.circle,D[t],f?E.checked:E.unchecked,a&&E.disabled,a&&!f&&E.disabledUnchecked,u),c,l),...d,children:o??(f&&(0,T.jsx)(`span`,{...i(r(`radio-indicator-dot`,{size:t},{legacyNames:[`radio-dot`]}),n(E.dot,O[t]))}))})}var T,E,D,O,k=e((()=>{t(),a(),T=o(),E={circle:{kB7OPa:`astryx9f619`,k1xSpc:`astryx78zum5`,kGNEyG:`astryx6s0dn4`,kjj79g:`astryxl56j7k`,kmuXW:`astryx2lah0s`,kMzoRj:`astryx1litavf`,ksu8eU:`astryx1y0btm7`,kaIpWk:`astryxjspbzw`,k1ekBW:`astryxts7igz`,kIyJzY:`astryxuedmi6 astryx12w9bfk`,kAMwcw:`astryxlr8y92`,$$css:!0},unchecked:{kVAM5u:`astryxvy26l8 astryxvr0s6v`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx10xzikg astryx1orexks`,$$css:!0},checked:{kVAM5u:`astryxad5do astryx1nccqs`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:`astryx1ewilqj astryxe50u90`,$$css:!0},disabled:{kSiTet:`astryxbyyjgo`,kVAM5u:`astryx14i3s5s astryxzl8x75`,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},disabledUnchecked:{kWkggS:`astryxwmxj5m astryxejnnay`,$$css:!0},dot:{kaIpWk:`astryxjspbzw`,kWkggS:`astryx1azo05 astryxwvh9j7`,$$css:!0}},D={sm:{kzqmXN:`astryxw4jnvo`,kZKoxP:`astryx1qx5ct2`,$$css:!0},md:{kzqmXN:`astryxvy4d1p`,kZKoxP:`astryxxk0z11`,$$css:!0}},O={sm:{kzqmXN:`astryx1xc55vz`,kZKoxP:`astryxdk7pt`,$$css:!0},md:{kzqmXN:`astryx1fsd2vl`,kZKoxP:`astryx170jfvy`,$$css:!0}},w.displayName=`RadioIndicator`,w.__docgenInfo={description:`The default radio visual: a circle with a filled inner dot when selected.

Decorative and non-interactive — it renders \`aria-hidden\` and owns no input,
role, or focus behavior. Themes replace it wholesale through
\`defineTheme({indicators: {radio: MyRadio}})\`, or restyle it through the
\`radio\` / \`radio-dot\` theme targets like any other component.

Unlike an icon, a radio draws in *both* states — an empty circle when
unchecked. That is what makes it usable as a selection indicator in
components whose default is "a checkmark when selected, nothing otherwise".

@example
\`\`\`tsx
<RadioIndicator state="checked" size="md" />
\`\`\``,methods:[],displayName:`RadioIndicator`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref forwarded to the indicator's root element.`},state:{required:!0,tsType:{name:`IndicatorFamilyMap[F]`,raw:`IndicatorFamilyMap[F]`},description:`Which state to draw. The state space is fixed by the family.`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:`Control size.
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the owning control is disabled. Purely visual — the owner still
owns the actual disabled semantics.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered inside the indicator chrome *instead of* the state mark.
CheckboxInput uses this to show a loading Spinner inside the box while a
change action is pending.`}},composes:[`Omit`]}}));function A(e){return e==null?null:typeof e==`string`?s(e):e}function j(e){return A(e)?.indicators??null}function M(e,t){return j(t)?.[e]??N[e]}var N,P=e((()=>{c(),y(),C(),k(),N={check:b,checkbox:p,radio:w}}));function F(e){return M(e,l())}var I=e((()=>{u(),P()})),L,R=e((()=>{L={astryx1odsvnm:`astryx1odsvnm`,$$css:!0}})),z=e((()=>{y(),C(),k(),P(),I(),R()}));export{F as a,I as i,L as n,w as o,R as r,k as s,z as t};