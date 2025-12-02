"use client";

import { usePathname } from "next/navigation"

export function Navbar() {
    const path = usePathname()
    const drawerStyle = `flex-[1] h-screen flex flex-col justify-center px-6 space-y-2`
    const drawerTyleStyle = `px-3 py-2 hover:bg-gray-100 transition rounded`

    const tyleStyle = (link: string) => {
        return link == path ? `${drawerTyleStyle} bg-gray-100` : drawerTyleStyle
    }

    return (
        <section className={drawerStyle}>
            <a href="/" className={tyleStyle("/")}>About</a>
            <a href="/projects" className={tyleStyle("/projects")}>Projects</a>
        </section>
    )
}