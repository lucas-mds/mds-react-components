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
![Image of Simple Usage](imgs/example-01.png)

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
![Image of Simple Usage](imgs/example-02.png)

Custom Header

```jsx
<NonModalWindow
  open={open}
  minimized={minimized}
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
![Image of Simple Usage](imgs/example-03.png)
