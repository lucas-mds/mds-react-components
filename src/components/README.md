Simple Usage:
```jsx
<NonModalWindow
  open={open}
  minimized={minimized}
  title="Nice Title"
  content="Cool content"
  position="bottom"
  align="right"
  dragProps={{
    bounds: 'parent',
    axis: 'x',
  }}
/>
```

Controlled with Icons

```jsx
<NonModalWindow
  open={open}
  toggleOpen={toggleOpen}
  minimized={minimized}
  toggleMinimized={toggleMinimized}
  minimizeIcon={<FiMinus />}
  maximizeIcon={<FiMinus />}
  closeIcon={<MdClose />}
  title="Nice Non-Modal Title"
  content="Cool content"
  position="bottom"
  align="right"
  dragProps={{
    bounds: 'parent',
    axis: 'x',
  }}
/>
```
Custom Header

```jsx
<NonModalWindow
  open={state.open}
  minimized={state.minimized}
  content="Cool content"
  position="bottom"
  align="right"
  dragProps={{
    bounds: 'parent',
    axis: 'x',
  }}
  header={<CustomHeader />}
/>
```
