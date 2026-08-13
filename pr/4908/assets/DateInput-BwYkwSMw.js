import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{d as r,f as ee,i,n as te,r as a}from"./ime-Dkhyp7Au.js";import{E as ne,J as re,O as ie,V as o,Z as s,m as ae,nt as oe,pt as c,t as l}from"./utils-D_w15ViX.js";import{t as u}from"./jsx-runtime-DqZldVDK.js";import{n as se}from"./useTooltip-RRR-XE7C.js";import{n as ce,t as d}from"./Spinner-1pAZ9Kql.js";import{n as le,t as f}from"./VisuallyHidden-DDrJpIxj.js";import{n as p,r as ue}from"./SizeContext-fcGnTOs5.js";import{r as de,t as m}from"./i18n-DTdYgCtY.js";import{i as h,t as g}from"./Icon-Ub1xJUR2.js";import{n as fe}from"./usePopover-DSidcQWE.js";import{t as _}from"./Popover-D-5lLEKl.js";import{t as pe}from"./Tooltip-Bl7Kg8UD.js";import{a as me,i as v}from"./hooks-b-g5KjGz.js";import{i as y,n as he,o as ge,t as b}from"./Calendar-CPKxpz1P.js";import{t as _e}from"./Field-BarhlBXb.js";import{a as ve,c as x,o as ye,s as be,t as S}from"./Field-CGXV8VKx.js";import{a as C,i as xe,n as w,r as Se}from"./InputGroupContext-DfUisVOG.js";function T({label:e,isLabelHidden:t=!1,description:n,isOptional:r=!1,isRequired:a=!1,isDisabled:s=!1,disabledMessage:l,value:u,onChange:d,changeAction:f,isLoading:p=!1,min:m,max:g,dateConstraints:_,placeholder:pe,size:v,status:y,statusVariant:b=`attached`,labelTooltip:S,hasClear:C=!1,numberOfMonths:w=1,weekStartsOn:T,format:k=`date_long`,width:Ce,xstyle:we,className:Te,style:Ee,ref:De,...Oe}){let A=de(),ke=pe??A(`@astryx.dateInput.placeholder`),j=ue(v,`md`),M=(0,E.useId)(),N=(0,E.useId)(),P=(0,E.useId)(),F=(0,E.useId)(),I=(0,E.useRef)(null),L=(0,E.useRef)(null),R=(0,E.useRef)(void 0),z=Se(),[,B]=(0,E.useTransition)(),[V,H]=(0,E.useOptimistic)(u),U=p||V!==u,W=s||U,G=s&&!!l,K=se({placement:`above`,focusTrigger:`always`,isEnabled:G}),{isDateDisabled:q}=ge({min:m,max:g,dateConstraints:_}),{statusIcon:Ae,describedBy:je}=me({status:y,statusVariant:b,isInGroup:!!z}),{ariaLabelledBy:Me,ariaDescribedBy:Ne}=ae(N,[n?P:null,b!==`tooltip`&&y?.message?F:null,je,G?K.describedBy:null],z),[J,Y]=(0,E.useState)(null),Pe=(0,E.useRef)(u);u!==Pe.current&&(Pe.current=u,u!==R.current&&(R.current=void 0,J!==null&&Y(null)));let Fe=(0,E.useCallback)(e=>typeof k==`function`?k(e):re(oe(e),k),[k]),Ie=J===null?V&&/^\d{4}-\d{2}-\d{2}$/.test(V)?Fe(V):``:J,X=J===null||!J.trim()?!0:o(J)!==null,Z=fe({dialogLabel:A(`@astryx.dateInput.dialogLabel`),closeButtonLabel:A(`@astryx.dateInput.closeCalendar`),onHide:()=>I.current?.focus()}),Le=(0,E.useCallback)(()=>{W||(Z.isOpen?Z.hide():Z.show())},[W,Z]),Re=(0,E.useCallback)(()=>{!W&&!Z.isOpen&&Z.show({skipAutoFocus:!0})},[W,Z]),Q=(0,E.useCallback)(e=>{U||(d?.(e),f&&B(async()=>{H(e),await f(e)}))},[U,d,f,B,H]),ze=(0,E.useCallback)(()=>{Q(void 0),I.current?.focus()},[Q]),Be=(0,E.useCallback)(e=>{Q(e),Y(null),Z.hide()},[Q,Z]),Ve=(0,E.useCallback)(e=>{if(W)return;let t=e.target.value;Y(t);let n=o(t);if(n&&c(n)!==u&&!q(n)){let e=c(n);R.current=e,Q(e),L.current?.navigateTo(e)}},[u,Q,q,W]),$=(0,E.useCallback)(()=>{if(J===null)return;if(!J.trim()){u!==void 0&&Q(void 0),Y(null);return}let e=o(J);if(e&&!q(e)){let t=c(e);t!==u&&Q(t)}Y(null)},[J,u,Q,q]),He=(0,E.useCallback)(()=>{$()},[$]),Ue=(0,E.useCallback)(e=>{te(e.nativeEvent)||(e.key===`Escape`&&Z.isOpen?(e.preventDefault(),Z.hide()):(e.key===`ArrowDown`||e.altKey&&e.key===`ArrowDown`)&&!Z.isOpen?(e.preventDefault(),W||Z.show({skipAutoFocus:!0})):e.key===`Enter`&&(e.preventDefault(),$()))},[Z,$,W]),We=(0,D.jsxs)(`div`,{ref:e=>{Z.triggerRef(e),K.ref(e)},...Oe,...ie(i(`date-input`,{size:j,status:y?.type??null,disabled:s?`disabled`:null}),ee(x.base,O[j],W&&x.disabled,y&&ve[y.type],y&&!W&&be[y.type],y&&ye[y.type],z&&xe.inGroup,we),Te,Ee),children:[z&&(0,D.jsx)(le,{id:N,children:e}),(0,D.jsx)(`button`,{type:`button`,onClick:Le,disabled:W,"aria-label":Z.isOpen?A(`@astryx.dateInput.toggleCalendarClose`):A(`@astryx.dateInput.openCalendar`),...{0:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`},1:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto astryx1h6gzvc`}}[!!W<<0],children:(0,D.jsx)(h,{icon:`calendar`,size:`sm`,color:`secondary`,...i(`date-input-toggle-icon`,{state:Z.isOpen?`expanded`:`collapsed`})})}),(0,D.jsx)(`input`,{ref:ne(De,I),id:M,type:`text`,role:`combobox`,value:Ie,onChange:Ve,onBlur:He,onClick:Re,onKeyDown:Ue,placeholder:ke,disabled:W&&!G,"aria-disabled":G?`true`:void 0,readOnly:G||void 0,"aria-labelledby":Me,"aria-describedby":Ne,"aria-required":a===!0?`true`:void 0,"aria-invalid":y?.type===`error`||!X?`true`:void 0,"aria-busy":U||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5`},2:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc`},1:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4`},3:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4`}}[!!W<<1|!X<<0]}),(0,D.jsx)(le,{as:`div`,role:`alert`,"aria-live":`assertive`,children:X?``:`Invalid date`}),C&&u!==void 0&&!W&&(0,D.jsx)(`button`,{type:`button`,onClick:ze,"aria-label":A(`@astryx.dateInput.clear`,{label:e}),className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`,children:(0,D.jsx)(h,{icon:`close`,size:`sm`,color:`secondary`,...i(`date-input-clear-icon`)})}),U&&(0,D.jsx)(ce,{size:`sm`}),Ae,Z.render((0,D.jsx)(he,{handleRef:L,mode:`single`,value:V,onChange:Be,min:m,max:g,dateConstraints:_,numberOfMonths:w,weekStartsOn:T}),{placement:`below`,alignment:`start`}),G&&K.renderTooltip(l)]});return z?We:(0,D.jsx)(_e,{label:e,isLabelHidden:t,description:n,inputID:M,descriptionID:n?P:void 0,isOptional:r,isRequired:a,isDisabled:s,status:y?{type:y.type,message:y.message,messageID:y.message?F:void 0}:void 0,statusVariant:b,labelTooltip:S,width:Ce,children:We})}var E,D,O,k=e((()=>{E=t(n(),1),r(),S(),g(),f(),w(),C(),p(),d(),b(),y(),v(),_(),pe(),l(),s(),D=u(),a(),m(),O={sm:{kZKoxP:`astryx6k0iem`,k7Eaqz:`astryxfb3i0g`,$$css:!0},md:{kZKoxP:`astryx1ueg155`,k7Eaqz:`astryxfb3i0g`,$$css:!0},lg:{kZKoxP:`astryxssyfek`,k7Eaqz:`astryxfb3i0g`,$$css:!0}},T.displayName=`DateInput`,T.__docgenInfo={description:`A date picker component combining a text input with a calendar popover.

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
\`\`\``,defaultValue:{value:`'date_long'`,computed:!1}}},composes:[`Omit`]}})),Ce=e((()=>{k()}));export{T as n,k as r,Ce as t};