## NativeHideContentsOnPageBlur
Hide contents when the page is no longer shown

## Features
- Automatically hide contents when the page is no longer visible, because another page is shown without closing the current page.
- Hiding the content prevents unnecessary renders and datasource refreshes while logic triggered from other pages manipulates the data
- On blur action: when the page is no longer visible
- On focus action: when the user returns to the page
- Detailed logging can be turned on
- Give the widget a meaningful name so the logging makes sense.

## Limitations
- Only use nanoflows for the blur/focus actions
- Some content will reset to their initial state if hidden using this widget, like a tab container that will show the default tab i.s.o. the selected tab, and a listview that will revert to top

## Usage
- Place the widget on the page
- Put content inside the widget that you want to be hidden when the page is no longer shown
- Configure the blur or focus actions for custom logic
