---
'@astryxdesign/core': patch
---

[fix] DateInput / DateTimeInput: the hardcoded English validation strings ("Invalid date", "Invalid time") announced in the assertive live regions, and the focused-and-empty time placeholder hints ("e.g., 2:30 PM" / "e.g., 14:30"), now route through the i18n translator so they localize with the rest of the component. Adds `@astryx.dateInput.invalidDate`, `@astryx.dateTimeInput.invalidTime`, `@astryx.dateTimeInput.timeHint12h`, and `@astryx.dateTimeInput.timeHint24h` to the `en` catalog. (#4546)

@cixzhang
