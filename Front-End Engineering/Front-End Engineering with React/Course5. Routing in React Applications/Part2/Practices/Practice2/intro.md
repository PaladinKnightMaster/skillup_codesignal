# Navigating the Galactic Dashboard

In our space mission, we need to ensure that only the crew with the appropriate security clearance can access the **Engine Status**. For now, we'll simulate clearance with a boolean flag. Update the `App.js` routes to redirect to the dashboard if `hasClearance` is set to `false`, using the `<Navigate>` component that we covered in our lesson.