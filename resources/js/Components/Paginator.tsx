import { Link } from "@inertiajs/react";
import { Button, Flowbite } from "flowbite-react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <Flowbite>
            <div className="inline-flex rounded-md shadow-sm" role="group">
                {prev && (
                    <Link href={prev}>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                        >
                            «
                        </button>
                    </Link>
                )}
                <Link href="#">
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-r border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                    >
                        {current}
                    </button>
                </Link>
                {next && (
                    <Link href={next}>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                        >
                            »
                        </button>
                    </Link>
                )}
            </div>
            {/* </Button.Group> */}
        </Flowbite>
    );
};

export default Paginator;
