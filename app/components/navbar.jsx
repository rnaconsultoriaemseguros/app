"use client"
import { useState } from 'react';
import Image from "next/image";

export default function NavBar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
            <nav className="p-2 shadow-lg">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#2B3E59] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                                onClick={toggleMobileMenu}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <svg
                                    className={isMobileMenuOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                <svg
                                    className={isMobileMenuOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center sm:items-stretch sm:justify-start justify-end mr-2">
                            <div className="flex flex-shrink-0 items-center">
                                <Image className="object-cover" src="/logo.png" alt="R N A Consultoria em Seguros" width={130} height={60} priority={true} />
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 hidden sm:block sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="relative ml-3">
                                <div>
                                    <a href="#" className="text-[#211C1B] hover:bg-[#2B3E59] hover:text-white rounded-full px-3 mx-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                    <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white rounded-full mx-3 px-3 py-2 text-sm font-medium">Quem Somos</a>
                                    <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white rounded-full mx-3 px-3 py-2 text-sm font-medium">Produtos e Serviços</a>
                                    <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white rounded-full mx-3 px-3 py-2 text-sm font-medium">Parceiros</a>
                                    <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white rounded-full mx-3 px-3 py-2 text-sm font-medium">Convênios</a>
                                    <a href="#" className="bg-[#2B3E59] text-white hover:transition-all hover:bg-[#A5B9D3] hover:text-[#211C1B] rounded-full mx-3 px-3 py-2 text-sm font-medium">Entre em Contato</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isMobileMenuOpen ? 'block sm:hidden' : 'hidden sm:hidden'} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="text-[#211C1B] block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                        <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white block rounded-md px-3 py-2 text-base font-medium">Quem Somos</a>
                        <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white block rounded-md px-3 py-2 text-base font-medium">Produtos e Serviços</a>
                        <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white block rounded-md px-3 py-2 text-base font-medium">Parceiros</a>
                        <a href="#" className="text-[#211C1B] hover:transition-all hover:bg-[#2B3E59] hover:text-white block rounded-md px-3 py-2 text-base font-medium">Convênios</a>
                        <a href="#" className="bg-[#2B3E59] text-white hover:transition-all hover:bg-[#A5B9D3] hover:text-white block rounded-md px-3 py-2 text-base font-medium">Entre em Contato</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
