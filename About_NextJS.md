# NextJS

## Page trong NextJS

## Dynamic Route

## Routing Basic

## Custom App Component

## Custom App Component for TS

```ts
import React from 'react';
import { AppProps } from 'next/app';

// Class
export default class MyApp extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <this.props.Component {...this.props.pageProps} />
      </div>
    );
  }
}

// Functional
export const MyApp: React.FC<AppProps> = ({Component, pageProps}) =>{
    return (
        <div className="root-app">
            <Component {...pageProps}>
        </div>
    )
}
```
