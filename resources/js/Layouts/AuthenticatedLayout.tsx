import React, { PropsWithChildren, ReactNode, useState } from "react";
import { User } from "@/types";
import { Avatar, Dropdown, Sidebar } from "flowbite-react";
import { Link } from "@inertiajs/react";
import SideBar from "@/Components/SideBar";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex justify-start items-center">
                        <button
                            data-drawer-target="drawer-navigation"
                            data-drawer-toggle="drawer-navigation"
                            aria-controls="drawer-navigation"
                            onClick={toggleSidebar}
                            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                aria-hidden="true"
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Toggle sidebar</span>
                        </button>
                        <Link
                            href={route("dashboard")}
                            className="flex items-center justify-between mr-4"
                        >
                            <img
                                src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                className="mr-3 h-8"
                                alt="Flowbite Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Admin Kecamatan
                            </span>
                        </Link>
                        <form
                            action="#"
                            method="GET"
                            className="hidden md:block md:pl-2"
                        >
                            <label htmlFor="topbar-search" className="sr-only">
                                Cari
                            </label>
                            <div className="relative md:w-64 md:w-96">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="email"
                                    id="topbar-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Cari"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Dropdown
                            inline
                            label={
                                <Avatar
                                    alt="User settings"
                                    img="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    rounded
                                />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user.name}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user.email}
                                </span>
                            </Dropdown.Header>
                            <Link href={route("dashboard")}>
                                <Dropdown.Item>Dashboard</Dropdown.Item>
                            </Link>
                            <Link href={route("profile.edit")}>
                                <Dropdown.Item>Pengaturan Profil</Dropdown.Item>
                            </Link>

                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                <Dropdown.Item>Sign out</Dropdown.Item>
                            </Link>
                        </Dropdown>
                    </div>
                </div>
            </nav>

            <SideBar />

            <main className="p-4 md:ml-64 h-auto pt-16">
                {header && (
                    <div className="text-xl mx-auto py-6 px-4 sm:px-6 font-bold">
                        {header}
                    </div>
                )}
                {children}
            </main>
        </div>
    );
}
