interface childProps {
    jenis_kategori_berita: string;
}

interface Props {
    data: childProps[];
}

const KategoriBerita: React.FC<Props> = ({ data }) => {
    return (
        <section className="flex items-center py-10 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12">
                {/* <!-- Start coding here --> */}
                <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 md:rounded-lg">
                    <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                        <h1 className="dark:text-white">
                            Pilih Kategori Berita :{" "}
                        </h1>

                        {data && data.length > 0 ? (
                            <div
                                className="inline-flex flex-col w-full rounded-md shadow-sm md:w-auto md:flex-row"
                                role="group"
                            >
                                {data.map((data: childProps, k: number) => (
                                    <button
                                        key={k}
                                        type="button"
                                        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-t-lg md:rounded-tr-none md:rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white"
                                    >
                                        {data.jenis_kategori_berita}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p>Tidak Ada Kategori Berita</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default KategoriBerita;
