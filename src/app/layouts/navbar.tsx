import React from "react";

export default function Navbar(props: any) {
    return (
        <>
            <nav className="font-semibold flex flex-col text-center sm:flex-row sm:text-left
 sm:justify-between py-4 px-6 bg-orange-600 text-stone-100 shadow
 sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">Sistema de Livros</div>
                <div>
                    <a href="/" className="rounded-md bg-slate-300 text-black text-sm no-underline hover:bg-yellow-400 ml-2 py-2 px-4">
                        Home</a>
                    <a href="/livros" className="rounded-md bg-slate-300 text-black text-sm no-underline hover:bg-emerald-600 ml-2 py-2 px-4">
                        Livros</a></div>
            </nav>
        </>);
}
