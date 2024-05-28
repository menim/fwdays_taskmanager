import {ReactNode, Suspense} from "react";

export default function LoginLayout({children}: {children: ReactNode}) {
    return <Suspense fallback="Loading...">{children}</Suspense>;
}