import {ReactNode, Suspense} from "react";

export default function SignupLayout({children}: {children: ReactNode}) {
    return <Suspense fallback="Loading...">{children}</Suspense>;
}