## Description

A Non-Modal component that can be dragged, minimized and closed. 
Made with styled-components and react-draggable.

Usage for a chat component: 

<img src="imgs/simple-idea.gif" width="600">

Simple Usage:
```jsx
<NonModalWindow
  open
  minimized={false}
  header={<YourHeaderComponent />}
  content="Cool content"
  position="bottom"
  align="center"
  dragProps={{
    bounds: 'parent',
    axis: 'x',
  }}
/>
```

Controlled Usage:

```jsx
...
// You simple control the state of open and minimized.
const [state, setState] = useState({
  open: false,
  minimized: false,
});

...
<NonModalWindow
  open={state.open}
  minimized={state.minimized}
  header={<ControlledHeader />}
  content="Cool content"
  position="bottom"
  align="left"
  dragProps={{
    bounds: 'parent',
    axis: 'x',
  }}
/>
```

See the 'demos' folder for detailed code.
