import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-B7Te67-h.js";import{c as ee,l as r,n as te,s as i,t as a,u as ne}from"./themeProps-BLML-F6E.js";import{$ as o,A as re,E as ie,O as ae,U as s,X as oe,at as se,gt as c,m as ce,t as l}from"./utils-Bo_O-Up4.js";import{t as u}from"./jsx-runtime-DqZldVDK.js";import{n as le}from"./useTooltip-BHvim3zP.js";import{n as ue,t as d}from"./Spinner-Bb53si-f.js";import{n as de,t as f}from"./VisuallyHidden-DDrJpIxj.js";import{n as p,r as fe}from"./SizeContext-fcGnTOs5.js";import{r as pe,t as m}from"./i18n-BDSrPsqz.js";import{t as me}from"./Icon-Liw6Boyx.js";import{t as h}from"./Icon-CTmJ-zFz.js";import{n as he}from"./usePopover-yu_Blzbh.js";import{t as g}from"./Popover-BuXLRCs0.js";import{t as _}from"./Tooltip-D2ITaKL4.js";import{a as ge,i as v}from"./hooks-DGbMMUxG.js";import{t as _e}from"./Field-RL6IB5QD.js";import{a as ve,c as y,n as ye,o as be,s as xe,t as b}from"./Field-BWyrxnqM.js";import{a as x,i as Se,n as S,r as Ce}from"./InputGroupContext-DfUisVOG.js";import{i as C,n as we,o as Te,t as w}from"./Calendar-C0OO4JBK.js";function T({label:e,isLabelHidden:t=!1,description:n,isOptional:r=!1,isRequired:i=!1,isDisabled:a=!1,disabledMessage:o,value:l,onChange:u,changeAction:d,isLoading:f=!1,min:p,max:m,dateConstraints:h,placeholder:g,size:_,status:v,statusVariant:b=`attached`,labelTooltip:x,hasClear:S=!1,numberOfMonths:C=1,weekStartsOn:w,format:T=`date_long`,width:k,xstyle:A,className:Ee,style:De,ref:Oe,...ke}){let j=pe(),Ae=g??j(`@astryx.dateInput.placeholder`),M=fe(_,`md`),N=(0,E.useId)(),P=(0,E.useId)(),F=(0,E.useId)(),I=(0,E.useId)(),L=(0,E.useRef)(null),je=(0,E.useRef)(null),R=(0,E.useRef)(void 0),z=Ce(),[,B]=(0,E.useTransition)(),[V,H]=(0,E.useOptimistic)(l),U=f||V!==l,W=a||U,G=a&&!!o,K=le({placement:`above`,focusTrigger:`always`,isEnabled:G}),{isDateDisabled:q}=Te({min:p,max:m,dateConstraints:h}),{statusIcon:Me,describedBy:Ne}=ge({status:v,statusVariant:b,isInGroup:!!z}),{ariaLabelledBy:Pe,ariaDescribedBy:Fe}=ce(P,[n?F:null,b!==`tooltip`&&v?.message?I:null,Ne,G?K.describedBy:null],z),[J,Y]=(0,E.useState)(null),Ie=(0,E.useRef)(l);l!==Ie.current&&(Ie.current=l,l!==R.current&&(R.current=void 0,J!==null&&Y(null)));let Le=(0,E.useCallback)(e=>typeof T==`function`?T(e):oe(se(e),T),[T]),Re=J===null?V&&/^\d{4}-\d{2}-\d{2}$/.test(V)?Le(V):``:J,X=J===null||!J.trim()?!0:s(J)!==null,Z=he({dialogLabel:j(`@astryx.dateInput.dialogLabel`),closeButtonLabel:j(`@astryx.dateInput.closeCalendar`),onHide:()=>{ie()&&L.current?.focus()}}),ze=(0,E.useCallback)(()=>{W||(Z.isOpen?Z.hide():Z.show())},[W,Z]),Be=(0,E.useCallback)(()=>{!W&&!Z.isOpen&&Z.show({skipAutoFocus:!0})},[W,Z]),Q=(0,E.useCallback)(e=>{U||(u?.(e),d&&B(async()=>{H(e),await d(e)}))},[U,u,d,B,H]),Ve=(0,E.useCallback)(()=>{Q(void 0),L.current?.focus()},[Q]),He=(0,E.useCallback)(e=>{Q(e),Y(null),Z.hide()},[Q,Z]),Ue=(0,E.useCallback)(e=>{if(W)return;let t=e.target.value;Y(t);let n=s(t);if(n&&c(n)!==l&&!q(n)){let e=c(n);R.current=e,Q(e),je.current?.navigateTo(e)}},[l,Q,q,W]),$=(0,E.useCallback)(()=>{if(J===null)return;if(!J.trim()){l!==void 0&&Q(void 0),Y(null);return}let e=s(J);if(e&&!q(e)){let t=c(e);t!==l&&Q(t)}Y(null)},[J,l,Q,q]),We=(0,E.useCallback)(()=>{$()},[$]),Ge=(0,E.useCallback)(e=>{e.key===`Escape`&&Z.isOpen?(e.preventDefault(),Z.hide()):(e.key===`ArrowDown`||e.altKey&&e.key===`ArrowDown`)&&!Z.isOpen?(e.preventDefault(),W||Z.show({skipAutoFocus:!0})):e.key===`Enter`&&(e.preventDefault(),$())},[Z,$,W]),Ke=(0,D.jsxs)(`div`,{ref:e=>{Z.triggerRef(e),K.ref(e)},...ke,...re(te(`date-input`,{size:M,status:v?.type??null,disabled:a?`disabled`:null}),ne(y.base,O[M],W&&y.disabled,v&&ve[v.type],v&&!W&&xe[v.type],v&&be[v.type],z&&Se.inGroup,A),Ee,De),children:[z&&(0,D.jsx)(de,{id:P,children:e}),(0,D.jsx)(`button`,{type:`button`,onClick:ze,disabled:W,"aria-label":Z.isOpen?j(`@astryx.dateInput.toggleCalendarClose`):j(`@astryx.dateInput.openCalendar`),...{0:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto`},1:{className:`astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto astryx1h6gzvc`}}[!!W<<0],children:(0,D.jsx)(me,{icon:`calendar`,size:`sm`,color:`secondary`,...te(`date-input-toggle-icon`,{state:Z.isOpen?`expanded`:`collapsed`})})}),(0,D.jsx)(`input`,{ref:ae(Oe,L),id:N,type:`text`,role:`combobox`,value:Re,onChange:Ue,onBlur:We,onClick:Be,onKeyDown:Ge,placeholder:Ae,disabled:W&&!G,"aria-disabled":G?`true`:void 0,readOnly:G||void 0,"aria-labelledby":Pe,"aria-describedby":Fe,"aria-required":i===!0?`true`:void 0,"aria-invalid":v?.type===`error`||!X?`true`:void 0,"aria-busy":U||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5`},2:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc`},1:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryxv1l7n4`},3:{className:`astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx1h6gzvc astryxv1l7n4`}}[!!W<<1|!X<<0]}),(0,D.jsx)(de,{as:`div`,role:`alert`,"aria-live":`assertive`,children:X?``:`Invalid date`}),S&&l!==void 0&&!W&&(0,D.jsx)(ye,{label:j(`@astryx.dateInput.clear`,{label:e}),onClick:Ve,iconClassName:ee(`date-input-clear-icon`)}),U&&(0,D.jsx)(ue,{size:`sm`}),Me,Z.render((0,D.jsx)(we,{handleRef:je,mode:`single`,value:V,onChange:He,min:p,max:m,dateConstraints:h,numberOfMonths:C,weekStartsOn:w}),{placement:`below`,alignment:`start`}),G&&K.renderTooltip(o)]});return z?Ke:(0,D.jsx)(_e,{label:e,isLabelHidden:t,description:n,inputID:N,descriptionID:n?F:void 0,isOptional:r,isRequired:i,isDisabled:a,status:v?{type:v.type,message:v.message,messageID:v.message?I:void 0}:void 0,statusVariant:b,labelTooltip:x,width:k,children:Ke})}var E,D,O,k=e((()=>{E=t(n(),1),r(),b(),h(),f(),S(),x(),p(),d(),w(),C(),v(),g(),_(),l(),o(),D=u(),a(),i(),m(),O={sm:{kZKoxP:`astryx6k0iem`,k7Eaqz:`astryxfb3i0g`,$$css:!0},md:{kZKoxP:`astryx1ueg155`,k7Eaqz:`astryxfb3i0g`,$$css:!0},lg:{kZKoxP:`astryxssyfek`,k7Eaqz:`astryxfb3i0g`,$$css:!0}},T.displayName=`DateInput`,T.__docgenInfo={description:`A date picker component combining a text input with a calendar popover.

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
\`\`\``,defaultValue:{value:`'date_long'`,computed:!1}}},composes:[`Omit`]}})),A=e((()=>{k()}));export{T as n,k as r,A as t};