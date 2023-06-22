interface Props {}

const Kerjasama: React.FC<Props> = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
                    Dinas Yang Bekerjasama
                </h2>
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                    <a href="#" className="flex justify-center items-center">
                        <img
                            src="https://portal.deliserdangkab.go.id/wp-content/berkas/1686018101.png"
                            alt=""
                        />
                        <p>Kabupaten Deli serdang</p>
                    </a>
                    <a href="#" className="flex justify-center items-center">
                        <img
                            src="https://portal.deliserdangkab.go.id/wp-content/berkas/1686018101.png"
                            alt=""
                        />
                        <p>Kabupaten Deli serdang</p>
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Kerjasama;
