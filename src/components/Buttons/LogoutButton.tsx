'use client';
import {Button} from "@/components/ui/button";
import {logout} from "@/actions/logout";

export default function LogoutButton() {
    function handleLogout() {
        logout();
    }
    return <Button className="fixed left-8 bottom-8" variant="tertiary" onClick={handleLogout}>Logout</Button>
}