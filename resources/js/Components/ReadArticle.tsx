export default function ReadArticle() {
    return (
        <section className="py-8 lg:py-10 bg-gray-50 dark:bg-gray-800">
            <div className="px-4 mx-auto max-w-screen-xl ">
                <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                    Berita Terbaru
                </h2>
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    <article className="max-w-xs">
                        <a href="#">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                                className="mb-5 rounded-lg"
                                alt="Image 1"
                            />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Our first office</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                            Over the past year, Volosoft has undergone many
                            changes! After months of preparation.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                        >
                            Read in 2 minutes
                        </a>
                    </article>
                    <article className="max-w-xs">
                        <a href="#">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                                className="mb-5 rounded-lg"
                                alt="Image 2"
                            />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Enterprise design tips</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                            Over the past year, Volosoft has undergone many
                            changes! After months of preparation.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                        >
                            Read in 12 minutes
                        </a>
                    </article>
                    <article className="max-w-xs">
                        <a href="#">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                                className="mb-5 rounded-lg"
                                alt="Image 3"
                            />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">We partnered with Google</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                            Over the past year, Volosoft has undergone many
                            changes! After months of preparation.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                        >
                            Read in 8 minutes
                        </a>
                    </article>
                    <article className="max-w-xs">
                        <a href="#">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                                className="mb-5 rounded-lg"
                                alt="Image 4"
                            />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href="#">Our first project with React</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">
                            Over the past year, Volosoft has undergone many
                            changes! After months of preparation.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                        >
                            Read in 4 minutes
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}
