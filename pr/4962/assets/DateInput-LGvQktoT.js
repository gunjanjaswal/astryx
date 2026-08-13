import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{l as r,n as i,t as a,u as ee}from"./themeProps-BLML-F6E.js";import{E as te,J as ne,O as re,V as o,Z as s,m as ie,nt as ae,pt as c,t as l}from"./utils-BesPgzBU.js";import{t as u}from"./jsx-runtime-DqZldVDK.js";import{n as oe}from"./useTooltip-DVJR6_fE.js";import{n as se,t as d}from"./Spinner-CRl66jV7.js";import{n as ce,t as f}from"./VisuallyHidden-DDrJpIxj.js";import{n as p,r as le}from"./SizeContext-fcGnTOs5.js";import{r as ue,t as m}from"./i18n-B9wmCCUW.js";import{t as de}from"./Icon-CkjDmmF2.js";import{t as h}from"./Icon-DzF2ts4S.js";import{n as fe}from"./usePopover-BhD2ozqc.js";import{t as g}from"./Popover-0r0yBHN_.js";import{t as pe}from"./Tooltip-BVNNqKc0.js";import{a as me,i as _}from"./hooks-B8bTjHtr.js";import{i as v,n as he,o as ge,t as y}from"./Calendar-C-QdBgaf.js";import{t as _e}from"./Field-rWq9eok7.js";import{a as ve,c as b,n as ye,o as be,s as xe,t as x}from"./Field-CGIz1oZ7.js";import{a as S,i as Se,n as C,r as Ce}from"./InputGroupContext-DfUisVOG.js";function w({label:e,isLabelHidden:t=!1,description:n,isOptional:r=!1,isRequired:a=!1,isDisabled:s=!1,disabledMessage:l,value:u,onChange:d,changeAction:f,isLoading:p=!1,min:m,max:h,dateConstraints:g,placeholder:pe,size:_,status:v,statusVariant:y=`attached`,labelTooltip:x,hasClear:S=!1,numberOfMonths:C=1,weekStartsOn:w,format:O=`date_long`,width:k,xstyle:we,className:Te,style:Ee,ref:De,...Oe}){let A=ue(),ke=pe??A(`@astryx.dateInput.placeholder`),Ae=le(_,`md`),j=(0,T.useId)(),M=(0,T.useId)(),N=(0,T.useId)(),P=(0,T.useId)(),F=(0,T.useRef)(null),I=(0,T.useRef)(null),L=(0,T.useRef)(void 0),R=Ce(),[,z]=(0,T.useTransition)(),[B,V]=(0,T.useOptimistic)(u),H=p||B!==u,U=s||H,W=s&&!!l,G=oe({placement:`above`,focusTrigger:`always`,isEnabled:W}),{isDateDisabled:K}=ge({min:m,max:h,dateConstraints:g}),{statusIcon:je,describedBy:Me}=me({status:v,statusVariant:y,isInGroup:!!R}),{ariaLabelledBy:Ne,ariaDescribedBy:Pe}=ie(M,[n?N:null,y!==`tooltip`&&v?.message?P:null,Me,W?G.describedBy:null],R),[q,J]=(0,T.useState)(null),Y=(0,T.useRef)(u);u!==Y.current&&(Y.current=u,u!==L.current&&(L.current=void 0,q!==null&&J(null)));let Fe=(0,T.useCallback)(e=>typeof O==`function`?O(e):ne(ae(e),O),[O]),Ie=q===null?B&&/^\d{4}-\d{2}-\d{2}$/.test(B)?Fe(B):``:q,X=q===null||!q.trim()?!0:o(q)!==null,Z=fe({dialogLabel:A(`@astryx.dateInput.dialogLabel`),closeButtonLabel:A(`@astryx.dateInput.closeCalendar`),onHide:()=>F.current?.focus()}),Le=(0,T.useCallback)(()=>{U||(Z.isOpen?Z.hide():Z.show())},[U,Z]),Re=(0,T.useCallback)(()=>{!U&&!Z.isOpen&&Z.show({skipAutoFocus:!0})},[U,Z]),Q=(0,T.useCallback)(e=>{H||(d?.(e),f&&z(async()=>{V(e),await f(e)}))},[H,d,f,z,V]),ze=(0,T.useCallback)(()=>{Q(void 0),F.current?.focus()},[Q]),Be=(0,T.useCallback)(e=>{Q(e),J(null),Z.hide()},[Q,Z]),Ve=(0,T.useCallback)(e=>{if(U)return;let t=e.target.value;J(t);let n=o(t);if(n&&c(n)!==u&&!K(n)){let e=c(n);L.current=e,Q(e),I.current?.navigateTo(e)}},[u,Q,K,U]),$=(0,T.useCallback)(()=>{if(q===null)return;if(!q.trim()){u!==void 0&&Q(void 0),J(null);return}let e=o(q);if(e&&!K(e)){let t=c(e);t!==u&&Q(t)}J(null)},[q,u,Q,K]),He=(0,T.useCallback)(()=>{$()},[$]),Ue=(0,T.useCallback)(e=>{e.key===`Escape`&&Z.isOpen?(e.preventDefault(),Z.hide()):(e.key===`ArrowDown`||e.altKey&&e.key===`ArrowDown`)&&!Z.isOpen?(e.preventDefault(),U||Z.show({skipAutoFocus:!0})):e.key===`Enter`&&(e.preventDefault(),$())},[Z,$,U]),We=(0,E.jsxs)(`div`,{ref:e=>{Z.triggerRef(e),G.ref(e)},...Oe,...re(i(`date-input`,{size:Ae,status:v?.type??null,disabled:s?`disabled`:null}),ee(b.base,D[Ae],U&&b.disabled,v&&ve[v.type],v&&!U&&xe[v.type],v&&be[v.type],R&&Se.inGroup,we),Te,Ee),children:[R&&(0,E.jsx)(ce,{id:M,children:e}),(0,E.jsx)(`button`,{type:`button`,onClick:Le,disabled:U,"aria-label":Z.isOpen?A(`@astryx.dateInput.toggleCalendarClose`):A(`@astryx.dateInput.openCalendar`),...{0:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`},1:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto astryx1h6gzvc`}}[!!U<<0],children:(0,E.jsx)(de,{icon:`calendar`,size:`sm`,color:`secondary`,...i(`date-input-toggle-icon`,{state:Z.isOpen?`expanded`:`collapsed`})})}),(0,E.jsx)(`input`,{ref:te(De,F),id:j,type:`text`,role:`combobox`,value:Ie,onChange:Ve,onBlur:He,onClick:Re,onKeyDown:Ue,placeholder:ke,disabled:U&&!W,"aria-disabled":W?`true`:void 0,readOnly:W||void 0,"aria-labelledby":Ne,"aria-describedby":Pe,"aria-required":a===!0?`true`:void 0,"aria-invalid":v?.type===`error`||!X?`true`:void 0,"aria-busy":H||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5`},2:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc`},1:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4`},3:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4`}}[!!U<<1|!X<<0]}),(0,E.jsx)(ce,{as:`div`,role:`alert`,"aria-live":`assertive`,children:X?``:`Invalid date`}),S&&u!==void 0&&!U&&(0,E.jsx)(ye,{label:A(`@astryx.dateInput.clear`,{label:e}),onClick:ze}),H&&(0,E.jsx)(se,{size:`sm`}),je,Z.render((0,E.jsx)(he,{handleRef:I,mode:`single`,value:B,onChange:Be,min:m,max:h,dateConstraints:g,numberOfMonths:C,weekStartsOn:w}),{placement:`below`,alignment:`start`}),W&&G.renderTooltip(l)]});return R?We:(0,E.jsx)(_e,{label:e,isLabelHidden:t,description:n,inputID:j,descriptionID:n?N:void 0,isOptional:r,isRequired:a,isDisabled:s,status:v?{type:v.type,message:v.message,messageID:v.message?P:void 0}:void 0,statusVariant:y,labelTooltip:x,width:k,children:We})}var T,E,D,O=e((()=>{T=t(n(),1),r(),x(),h(),f(),C(),S(),p(),d(),y(),v(),_(),g(),pe(),l(),s(),E=u(),a(),m(),D={sm:{kZKoxP:`astryx6k0iem`,k7Eaqz:`astryxfb3i0g`,$$css:!0},md:{kZKoxP:`astryx1ueg155`,k7Eaqz:`astryxfb3i0g`,$$css:!0},lg:{kZKoxP:`astryxssyfek`,k7Eaqz:`astryxfb3i0g`,$$css:!0}},w.displayName=`DateInput`,w.__docgenInfo={description:`A date picker component combining a text input with a calendar popover.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
/>
\`\`\``,methods:[],displayName:`DateInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the input (required for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and input.`},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the field stays focusable (via \`aria-disabled\`)
so the reason is discoverable by keyboard and assistive technology.
Typing and calendar activation stay blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`The selected date in ISO format (YYYY-MM-DD).`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`void`}}},description:`Callback fired when the date changes.
Called with undefined when input is cleared.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void | Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},min:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Minimum selectable date in ISO format.`},max:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Maximum selectable date in ISO format.`},dateConstraints:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`function`,raw:`(date: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`boolean`}}}],raw:`ReadonlyArray<(date: Date) => boolean>`},description:`Custom date constraint functions. Date is disabled if ANY function returns false.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when no date is selected.
@default "Select a date"`},size:{required:!1,tsType:{name:`unknown`},description:`The size of the input.
- 'sm': Compact size (18px height)
- 'md': Default size (26px height)
@default 'md'`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the input.
When set, displays a colored border and status icon.
If message is provided, displays below the input.`},statusVariant:{required:!1,tsType:{name:`FieldStatusVariantMap`},description:`How the status message is placed relative to the input.
- 'attached': message overlaps directly below the input (bordered treatment)
- 'detached': message floats below as a separate element with spacing
- 'tooltip': no message box; the status icon becomes a focusable info-tip button that reveals the message on hover, keyboard focus, or tap
@default 'attached'`,defaultValue:{value:`'attached'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},hasClear:{required:!1,tsType:{name:`boolean`},description:`Whether to show a clear button when a date is set.
When clicked, resets the value to undefined and returns focus to the input.
@default false`,defaultValue:{value:`false`,computed:!1}},numberOfMonths:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Number of months to display in the calendar popover.
@default 1`,defaultValue:{value:`1`,computed:!1}},weekStartsOn:{required:!1,tsType:{name:`union`,raw:`DayOfWeek | DayOfWeekName`,elements:[{name:`union`,raw:`0 | 1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},{name:`union`,raw:`| 'sun'
| 'mon'
| 'tue'
| 'wed'
| 'thu'
| 'fri'
| 'sat'`,elements:[{name:`literal`,value:`'sun'`},{name:`literal`,value:`'mon'`},{name:`literal`,value:`'tue'`},{name:`literal`,value:`'wed'`},{name:`literal`,value:`'thu'`},{name:`literal`,value:`'fri'`},{name:`literal`,value:`'sat'`}]}]},description:`First day of week in the calendar popover. Accepts a number
(0 = Sunday … 6 = Saturday) or a three-letter day name ('sun'–'sat',
case-insensitive).
@default 0`},format:{required:!1,tsType:{name:`union`,raw:`DateInputFormat | ((value: ISODateString) => string)`,elements:[{name:`Extract`,elements:[{name:`union`,raw:`| 'relative'
| 'relative_short'
| 'auto'
| 'date'
| 'date_long'
| 'date_weekday'
| 'date_time'
| 'time'
| 'system_date'
| 'system_date_time'
| 'system_time'
| 'unix_seconds'`,elements:[{name:`literal`,value:`'relative'`},{name:`literal`,value:`'relative_short'`},{name:`literal`,value:`'auto'`},{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'date_time'`},{name:`literal`,value:`'time'`},{name:`literal`,value:`'system_date'`},{name:`literal`,value:`'system_date_time'`},{name:`literal`,value:`'system_time'`},{name:`literal`,value:`'unix_seconds'`}]},{name:`union`,raw:`'date' | 'date_long' | 'date_weekday' | 'system_date'`,elements:[{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'system_date'`}]}],raw:`Extract<
  TimestampFormat,
  'date' | 'date_long' | 'date_weekday' | 'system_date'
>`},{name:`unknown`}]},description:`How the committed date value is displayed in the text field. Accepts a
named format reused from \`Timestamp\`'s \`format\` vocabulary (so the same
literal renders the same date shape in both components) or a function that
maps the ISO value to a custom display string.

- \`'date_long'\` (default): long-month date, e.g. "March 21, 2026"
- \`'date'\`: short-month date, e.g. "Mar 21, 2026"
- \`'date_weekday'\`: short weekday + date, e.g. "Wed, Mar 21, 2026"
- \`'system_date'\`: ISO 8601 calendar date, e.g. "2026-03-21"
- \`(value: ISODateString) => string\`: fully custom display string

Formatting applies only to the committed value — never to text the user is
actively typing. A custom function's output that \`parseDateInput\` cannot
read back can't be re-committed after an edit; external \`value\` changes
always recompute the display from the ISO value.

@default 'date_long'
@example
\`\`\`
<DateInput label="Ship date" value={date} onChange={setDate} format="date" />
<DateInput
  label="Ship date"
  value={date}
  onChange={setDate}
  format={iso => new Date(iso + 'T00:00').toDateString()}
/>
\`\`\``,defaultValue:{value:`'date_long'`,computed:!1}}},composes:[`Omit`]}})),k=e((()=>{O()}));export{w as n,O as r,k as t};