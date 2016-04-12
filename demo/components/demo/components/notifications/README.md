Notifications are divided into Toasts and Alerts.

Toasts notify the user of action results whereas Alerts notify
the user about application-wide state changes.

Contrary to Toasts, Alerts take up the whole width of their container.

Page level notifications are fixed to the top of the page whereas
container-local notifications are statically placed by the user.

Use the `NglNotificationService` for page level notifications
or the `inline` attribute, along with the `[type]` and `[severity]`
attribute bindings, on the `ngl-notification` component,
for container-local notifications.
