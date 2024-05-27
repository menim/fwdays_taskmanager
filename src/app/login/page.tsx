"use client";

import { login } from '@/actions/login'
import { useSearchParams } from 'next/navigation';

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function LoginPage() {
    const searchParams = useSearchParams();
    const  error  = searchParams.get('error');
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-1/3">
                <h1 className="text-center text-white text-3xl">Login please</h1>
                <form action={login}>
                    <Label className="text-white" htmlFor="email">Email:</Label>
                    <Input className="mb-2" id="email" name="email" type="email" required />
                    <Label className="text-white" htmlFor="password">Password:</Label>
                    <Input className="mb-4" id="password" name="password" type="password" required />
                    <Button variant="tertiary">Log in</Button>
                </form>
                {error && <p className="text-red-600 font-semibold mt-4">{decodeURIComponent(error as string)}</p>}
            </div>
        </div>
    )
}
