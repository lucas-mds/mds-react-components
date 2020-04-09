## Description

A Non-Modal component that can be dragged, minimized and closed. 
Made with styled-components and react-draggable.

Simple Idea: 

<img src="imgs/simple-idea.gif" width="600">

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
Simple usage result:

<img src="imgs/example-01.png" width="300">

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

Controlled Non-Modal result:

<img src="imgs/example-02.png" width="300">

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
Custom Header result:

<img src="imgs/example-03.png" width="300">
