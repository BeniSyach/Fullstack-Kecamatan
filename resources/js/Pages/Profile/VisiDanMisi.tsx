import Jumbroton from "@/Components/Jumbroton";
import Letter from "@/Components/Letter";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import { Breadcrumb, Flowbite } from "flowbite-react";
import React from "react";
import FooterLandingPage from "../../Components/FooterLandingPage";

interface Props {
    domain: {
        judul_website: string;
    };
    judul: string;
    Deskripsi: string;
}

const VisiDanMisi: React.FC<Props> = ({ domain, judul, Deskripsi }) => {
    const pathname = window.location.pathname;
    return (
        <Flowbite>
            <Head title="Visi Dan Misi" />
            <Navbar data={domain.judul_website} />
            <Jumbroton judul={judul} Deskripsi={Deskripsi} />

            <div className="flex flex-row bg-white dark:bg-gray-900">
                <div className=" w-8/12">
                    <main className="pt-3 pb-16 lg:pt-3 lg:pb-24 ">
                        <div className="flex justify-start px-4">
                            <article className="px-4 w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert dark:text-white">
                                <header className="mb-4 lg:mb-6 not-format">
                                    <Breadcrumb
                                        className=" my-5"
                                        aria-label="Default breadcrumb example"
                                    >
                                        <Breadcrumb.Item href="/">
                                            <p>Home</p>
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item href={pathname}>
                                            {judul}
                                        </Breadcrumb.Item>
                                    </Breadcrumb>
                                    <address className="flex items-center mb-6 not-italic">
                                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                            <img
                                                className="mr-4 w-16 h-16 rounded-full"
                                                src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                                alt="Jese Leos"
                                            />
                                            <div>
                                                <a
                                                    href="#"
                                                    rel="author"
                                                    className="text-xl font-bold text-gray-900 dark:text-white"
                                                >
                                                    Jese Leos
                                                </a>
                                                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                                    Graphic Designer, educator &
                                                    CEO Flowbite
                                                </p>
                                                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                                                    <time title="February 8th, 2022">
                                                        Feb. 8, 2022
                                                    </time>
                                                </p>
                                            </div>
                                        </div>
                                    </address>
                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                        Best practices for successful prototypes
                                    </h1>
                                </header>
                                <p className="lead">
                                    Flowbite is an open-source library of UI
                                    components built with the utility-first
                                    classes from Tailwind CSS. It also includes
                                    interactive elements such as dropdowns,
                                    modals, datepickers.
                                </p>
                                <p>
                                    Before going digital, you might benefit from
                                    scribbling down some ideas in a sketchbook.
                                    This way, you can think things through
                                    before committing to an actual design
                                    project.
                                </p>
                                <p>
                                    But then I found a{" "}
                                    <a href="https://flowbite.com">
                                        component library based on Tailwind CSS
                                        called Flowbite
                                    </a>
                                    . It comes with the most commonly used UI
                                    components, such as buttons, navigation
                                    bars, cards, form elements, and more which
                                    are conveniently built with the utility
                                    classes from Tailwind CSS.
                                </p>
                                <figure>
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                                        alt=""
                                    />
                                    <figcaption>
                                        Digital art by Anonymous
                                    </figcaption>
                                </figure>
                                <h2>Getting started with Flowbite</h2>
                                <p>
                                    First of all you need to understand how
                                    Flowbite works. This library is not another
                                    framework. Rather, it is a set of components
                                    based on Tailwind CSS that you can just
                                    copy-paste from the documentation.
                                </p>
                                <p>
                                    It also includes a JavaScript file that
                                    enables interactive components, such as
                                    modals, dropdowns, and datepickers which you
                                    can optionally include into your project via
                                    CDN or NPM.
                                </p>
                                <p>
                                    You can check out the{" "}
                                    <a href="https://flowbite.com/docs/getting-started/quickstart/">
                                        quickstart guide
                                    </a>{" "}
                                    to explore the elements by including the CDN
                                    files into your project. But if you want to
                                    build a project with Flowbite I recommend
                                    you to follow the build tools steps so that
                                    you can purge and minify the generated CSS.
                                </p>
                                <p>
                                    You'll also receive a lot of useful
                                    application UI, marketing UI, and e-commerce
                                    pages that can help you get started with
                                    your projects even faster. You can check out
                                    this{" "}
                                    <a href="https://flowbite.com/docs/components/tables/">
                                        comparison table
                                    </a>{" "}
                                    to better understand the differences between
                                    the open-source and pro version of Flowbite.
                                </p>
                                <h2>When does design come in handy?</h2>
                                <p>
                                    While it might seem like extra work at a
                                    first glance, here are some key moments in
                                    which prototyping will come in handy:
                                </p>
                                <ol>
                                    <li>
                                        <strong>Usability testing</strong>. Does
                                        your user know how to exit out of
                                        screens? Can they follow your intended
                                        user journey and buy something from the
                                        site you’ve designed? By running a
                                        usability test, you’ll be able to see
                                        how users will interact with your design
                                        once it’s live;
                                    </li>
                                    <li>
                                        <strong>Involving stakeholders</strong>.
                                        Need to check if your GDPR consent boxes
                                        are displaying properly? Pass your
                                        prototype to your data protection team
                                        and they can test it for real;
                                    </li>
                                    <li>
                                        <strong>Impressing a client</strong>.
                                        Prototypes can help explain or even sell
                                        your idea by providing your client with
                                        a hands-on experience;
                                    </li>
                                    <li>
                                        <strong>
                                            Communicating your vision
                                        </strong>
                                        . By using an interactive medium to
                                        preview and test design elements,
                                        designers and developers can understand
                                        each other — and the project — better.
                                    </li>
                                </ol>
                                <h3>Laying the groundwork for best design</h3>
                                <p>
                                    Before going digital, you might benefit from
                                    scribbling down some ideas in a sketchbook.
                                    This way, you can think things through
                                    before committing to an actual design
                                    project.
                                </p>
                                <p>
                                    Let's start by including the CSS file inside
                                    the <code>head</code> tag of your HTML.
                                </p>
                                <h3>Understanding typography</h3>
                                <h4>Type properties</h4>
                                <p>
                                    A typeface is a collection of letters. While
                                    each letter is unique, certain shapes are
                                    shared across letters. A typeface represents
                                    shared patterns across a collection of
                                    letters.
                                </p>
                                <h4>Baseline</h4>
                                <p>
                                    A typeface is a collection of letters. While
                                    each letter is unique, certain shapes are
                                    shared across letters. A typeface represents
                                    shared patterns across a collection of
                                    letters.
                                </p>
                                <h4>Measurement from the baseline</h4>
                                <p>
                                    A typeface is a collection of letters. While
                                    each letter is unique, certain shapes are
                                    shared across letters. A typeface represents
                                    shared patterns across a collection of
                                    letters.
                                </p>
                                <h3>Type classification</h3>
                                <h4>Serif</h4>
                                <p>
                                    A serif is a small shape or projection that
                                    appears at the beginning or end of a stroke
                                    on a letter. Typefaces with serifs are
                                    called serif typefaces. Serif fonts are
                                    classified as one of the following:
                                </p>
                            </article>
                        </div>
                    </main>
                </div>
                <div className=" m-10">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl divide-y divide-gray-100 font-bold tracking-tight text-gray-900 dark:text-white">
                            Agenda Kegiatan
                        </h5>

                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Application UI v2.0.0{" "}
                                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                                        Latest
                                    </span>
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on January 13th, 2022
                                </time>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get access to over 20+ pages including a
                                    dashboard layout, charts, kanban board,
                                    calendar, and pre-order E-commerce &
                                    Marketing pages.
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                >
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>{" "}
                                    Download ZIP
                                </a>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Figma v1.3.0
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on December 7th, 2021
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    All of the pages and components are first
                                    designed in Figma and we keep a parity
                                    between the two versions even as we update
                                    the project.
                                </p>
                            </li>
                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <svg
                                        aria-hidden="true"
                                        className="w-3 h-3 text-blue-800 dark:text-blue-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                    Flowbite Library v1.2.2
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    Released on December 2nd, 2021
                                </time>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get started with dozens of web components
                                    and interactive elements built on top of
                                    Tailwind CSS.
                                </p>
                            </li>
                        </ol>
                    </div>
                    <div className="mt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Berita Terbaru
                        </h5>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="berita-box my-5">
                            <a
                                href="#"
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg  w-[100px] p-1"
                                    src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                                    alt=""
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise
                                        technology acquisitions of 2021 so far,
                                        in reverse chronological order.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Letter />
            <FooterLandingPage data={domain.judul_website} />
        </Flowbite>
    );
};
export default VisiDanMisi;
