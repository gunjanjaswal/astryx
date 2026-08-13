import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{l as r,n as i,t as a,u as ee}from"./themeProps-BLML-F6E.js";import{$ as o,A as te,E as ne,O as re,U as s,X as ie,ht as c,it as ae,m as oe,t as l}from"./utils-BuW-ky-j.js";import{t as u}from"./jsx-runtime-DqZldVDK.js";import{n as se}from"./useTooltip-BHvim3zP.js";import{n as ce,t as d}from"./Spinner-Bk7TM9RN.js";import{n as f,t as p}from"./VisuallyHidden-DDrJpIxj.js";import{n as m,r as le}from"./SizeContext-fcGnTOs5.js";import{r as ue,t as h}from"./i18n-DkLOMKJ3.js";import{t as g}from"./Icon-B0iRiI-K.js";import{t as _}from"./Icon-Dbw8drz4.js";import{n as de}from"./usePopover-DU8ZcQCb.js";import{t as v}from"./Popover-BLGxdp2v.js";import{t as fe}from"./Tooltip-D2ITaKL4.js";import{a as pe,i as y}from"./hooks-DXEs04uc.js";import{i as b,n as me,o as he,t as x}from"./Calendar-DC9EqlCG.js";import{t as ge}from"./Field-fdsaWhkE.js";import{a as _e,c as S,o as ve,s as ye,t as C}from"./Field-G865r8n2.js";import{a as w,i as be,n as T,r as xe}from"./InputGroupContext-DfUisVOG.js";function E({label:e,isLabelHidden:t=!1,description:n,isOptional:r=!1,isRequired:a=!1,isDisabled:o=!1,disabledMessage:l,value:u,onChange:d,changeAction:p,isLoading:m=!1,min:h,max:_,dateConstraints:v,placeholder:fe,size:y,status:b,statusVariant:x=`attached`,labelTooltip:C,hasClear:w=!1,numberOfMonths:T=1,weekStartsOn:E,format:A=`date_long`,width:Se,xstyle:Ce,className:we,style:Te,ref:Ee,...De}){let j=ue(),Oe=fe??j(`@astryx.dateInput.placeholder`),ke=le(y,`md`),M=(0,D.useId)(),N=(0,D.useId)(),P=(0,D.useId)(),F=(0,D.useId)(),I=(0,D.useRef)(null),L=(0,D.useRef)(null),R=(0,D.useRef)(void 0),z=xe(),[,B]=(0,D.useTransition)(),[V,H]=(0,D.useOptimistic)(u),U=m||V!==u,W=o||U,G=o&&!!l,K=se({placement:`above`,focusTrigger:`always`,isEnabled:G}),{isDateDisabled:q}=he({min:h,max:_,dateConstraints:v}),{statusIcon:Ae,describedBy:je}=pe({status:b,statusVariant:x,isInGroup:!!z}),{ariaLabelledBy:Me,ariaDescribedBy:Ne}=oe(N,[n?P:null,x!==`tooltip`&&b?.message?F:null,je,G?K.describedBy:null],z),[J,Y]=(0,D.useState)(null),Pe=(0,D.useRef)(u);u!==Pe.current&&(Pe.current=u,u!==R.current&&(R.current=void 0,J!==null&&Y(null)));let Fe=(0,D.useCallback)(e=>typeof A==`function`?A(e):ie(ae(e),A),[A]),Ie=J===null?V&&/^\d{4}-\d{2}-\d{2}$/.test(V)?Fe(V):``:J,X=J===null||!J.trim()?!0:s(J)!==null,Z=de({dialogLabel:j(`@astryx.dateInput.dialogLabel`),closeButtonLabel:j(`@astryx.dateInput.closeCalendar`),onHide:()=>{ne()&&I.current?.focus()}}),Le=(0,D.useCallback)(()=>{W||(Z.isOpen?Z.hide():Z.show())},[W,Z]),Re=(0,D.useCallback)(()=>{!W&&!Z.isOpen&&Z.show({skipAutoFocus:!0})},[W,Z]),Q=(0,D.useCallback)(e=>{U||(d?.(e),p&&B(async()=>{H(e),await p(e)}))},[U,d,p,B,H]),ze=(0,D.useCallback)(()=>{Q(void 0),I.current?.focus()},[Q]),Be=(0,D.useCallback)(e=>{Q(e),Y(null),Z.hide()},[Q,Z]),Ve=(0,D.useCallback)(e=>{if(W)return;let t=e.target.value;Y(t);let n=s(t);if(n&&c(n)!==u&&!q(n)){let e=c(n);R.current=e,Q(e),L.current?.navigateTo(e)}},[u,Q,q,W]),$=(0,D.useCallback)(()=>{if(J===null)return;if(!J.trim()){u!==void 0&&Q(void 0),Y(null);return}let e=s(J);if(e&&!q(e)){let t=c(e);t!==u&&Q(t)}Y(null)},[J,u,Q,q]),He=(0,D.useCallback)(()=>{$()},[$]),Ue=(0,D.useCallback)(e=>{e.key===`Escape`&&Z.isOpen?(e.preventDefault(),Z.hide()):(e.key===`ArrowDown`||e.altKey&&e.key===`ArrowDown`)&&!Z.isOpen?(e.preventDefault(),W||Z.show({skipAutoFocus:!0})):e.key===`Enter`&&(e.preventDefault(),$())},[Z,$,W]),We=(0,O.jsxs)(`div`,{ref:e=>{Z.triggerRef(e),K.ref(e)},...De,...te(i(`date-input`,{size:ke,status:b?.type??null,disabled:o?`disabled`:null}),ee(S.base,k[ke],W&&S.disabled,b&&_e[b.type],b&&!W&&ye[b.type],b&&ve[b.type],z&&be.inGroup,Ce),we,Te),children:[z&&(0,O.jsx)(f,{id:N,children:e}),(0,O.jsx)(`button`,{type:`button`,onClick:Le,disabled:W,"aria-label":Z.isOpen?j(`@astryx.dateInput.toggleCalendarClose`):j(`@astryx.dateInput.openCalendar`),...{0:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`},1:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto astryx1h6gzvc`}}[!!W<<0],children:(0,O.jsx)(g,{icon:`calendar`,size:`sm`,color:`secondary`,...i(`date-input-toggle-icon`,{state:Z.isOpen?`expanded`:`collapsed`})})}),(0,O.jsx)(`input`,{ref:re(Ee,I),id:M,type:`text`,role:`combobox`,value:Ie,onChange:Ve,onBlur:He,onClick:Re,onKeyDown:Ue,placeholder:Oe,disabled:W&&!G,"aria-disabled":G?`true`:void 0,readOnly:G||void 0,"aria-labelledby":Me,"aria-describedby":Ne,"aria-required":a===!0?`true`:void 0,"aria-invalid":b?.type===`error`||!X?`true`:void 0,"aria-busy":U||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5`},2:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc`},1:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4`},3:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4`}}[!!W<<1|!X<<0]}),(0,O.jsx)(f,{as:`div`,role:`alert`,"aria-live":`assertive`,children:X?``:`Invalid date`}),w&&u!==void 0&&!W&&(0,O.jsx)(`button`,{type:`button`,onClick:ze,"aria-label":j(`@astryx.dateInput.clear`,{label:e}),className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`,children:(0,O.jsx)(g,{icon:`close`,size:`sm`,color:`secondary`,...i(`date-input-clear-icon`)})}),U&&(0,O.jsx)(ce,{size:`sm`}),Ae,Z.render((0,O.jsx)(me,{handleRef:L,mode:`single`,value:V,onChange:Be,min:h,max:_,dateConstraints:v,numberOfMonths:T,weekStartsOn:E}),{placement:`below`,alignment:`start`}),G&&K.renderTooltip(l)]});return z?We:(0,O.jsx)(ge,{label:e,isLabelHidden:t,description:n,inputID:M,descriptionID:n?P:void 0,isOptional:r,isRequired:a,isDisabled:o,status:b?{type:b.type,message:b.message,messageID:b.message?F:void 0}:void 0,statusVariant:x,labelTooltip:C,width:Se,children:We})}var D,O,k,A=e((()=>{D=t(n(),1),r(),C(),_(),p(),T(),w(),m(),d(),x(),b(),y(),v(),fe(),l(),o(),O=u(),a(),h(),k={sm:{kZKoxP:`astryx6k0iem`,k7Eaqz:`astryxfb3i0g`,$$css:!0},md:{kZKoxP:`astryx1ueg155`,k7Eaqz:`astryxfb3i0g`,$$css:!0},lg:{kZKoxP:`astryxssyfek`,k7Eaqz:`astryxfb3i0g`,$$css:!0}},E.displayName=`DateInput`,E.__docgenInfo={description:`A date picker component combining a text input with a calendar popover.

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
\`\`\``,defaultValue:{value:`'date_long'`,computed:!1}}},composes:[`Omit`]}})),Se=e((()=>{A()}));export{E as n,A as r,Se as t};