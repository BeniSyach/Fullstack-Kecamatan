import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

interface ChildProps {
    data: string;
}

const FooterLandingPage: React.FC<ChildProps> = (props) => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="w-1/3 mt-5">
                        <Footer.Brand
                            alt="logo Kecamatan"
                            href="/"
                            name={props.data}
                            src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                        />
                        <p className="mt-5 dark:text-white">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Excepturi aliquid, non libero deleniti fuga
                            nostrum distinctio illo perspiciatis enim
                            reprehenderit! Voluptas placeat aspernatur
                            voluptatibus pariatur, voluptatum dolorem magnam
                            doloribus! A.
                        </p>
                    </div>

                    <div className="grid w-9/12 grid-cols-2 gap-8 px-4 py-8 md:grid-cols-4 ml-10">
                        <div>
                            <Footer.Title title="Tentang Kami" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Visi & Misi</Footer.Link>
                                <Footer.Link href="#">Sejarah</Footer.Link>
                                <Footer.Link href="#">Wisata</Footer.Link>
                                <Footer.Link href="#">Tupoksi</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Bantuan" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Kontak Kami</Footer.Link>
                                <Footer.Link href="#">Pelayanan</Footer.Link>
                                <Footer.Link href="#">SP4N Lapor</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Kebijakan pribadi
                                </Footer.Link>
                                <Footer.Link href="#">Lisensi</Footer.Link>
                                <Footer.Link href="#">
                                    Syarat & Ketentuan
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="download" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Dokumen Publik
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Dokumen Hukum
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="Dinas Kominfostan Kabupten Deli Serdang™"
                        href="#"
                        year={2023}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                    </div>
                </div>
            </div>
        </Footer>
    );
};
export default FooterLandingPage;
