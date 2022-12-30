# NextJS

\- Xây dựng trang HTML tại thời điểm build và pre-rendered trang đó cho browser với JS tối thiểu mỗi khi trang được tải lại ==> Hydration
\- Hỗ trợ config kiểu render (SSG, SSR, CSR and ISR) cho từng trang khác nhau

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

Docs: https://drive.google.com/file/d/1YKvpah7EiEJido83nWIbA5pfu9O1amUR/view

## Hydrate function

\- Tương tự như render(), nhưng hydrate sẽ chứa sẵn nội dung HTML của trang web được render bởi ReactDOMServer. Sau đó React sẽ thêm các ràng buộc event listeners vào markup(mẫu HTML) đã được render

## SSG, SSR, CSR and ISR

### Pre-rendering (Không bị reload khi trở lại trang)

\- Render sẵn file HTML bên phía server ==> JS Loads ==> Hydration

_No Pre-rendering_
\- Tải file HTML rỗng ==> JS Loads ==> Append vào root

### SSG - Static Site Generation (Mặc định bởi nextjs) 

\- Build 1 lần, mỗi lần request thì gửi luôn file static HTML

\- Next build ==> file static HTML ==> User request ==> send file HTML

### SSR - Server Side Rendering

\- Tạo file HTML dựa trên mỗi request (đợi server xử lý)
\- Khi nào thì sử dụng SSR: https://github.com/vercel/next.js/discussions/10437#discussioncomment-90459

### CSR - Client Side Rendering

\- Static Generation without Data + Fetch Data on the Client-side
\- Tạo file markup sẵn ==> show markup ==> fetch data từ client ==> show data

### ISR - Incremental Static Regeneration (revalidate)

\- Next.js hỗ trợ việc tạo hoặc cập nhật lại static file sau khi built
\- ISR cho phép sử dụng lại những phần khởi tạo đó của từng trang mà không cần phải rebuild toàn bộ trang web
