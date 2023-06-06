export default function Jumbroton({
    judul,
    Deskripsi,
}: {
    judul: string;
    Deskripsi: string;
}) {
    return (
        <section className=" bg-slate-400 dark:bg-gray-500">
            <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 grid  gap-8 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        {judul}
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                        {Deskripsi}
                    </p>
                </div>
            </div>
        </section>
    );
}
