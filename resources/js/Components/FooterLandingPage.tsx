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
                    <div>
                        <Footer.Brand
                            alt="logo Kecamatan"
                            href="/"
                            name={props.data}
                            src="/assets/image/logo/logo_kabupaten_deli_serdang.png"
                        />
                    </div>
                    <div className="grid w-9/12 grid-cols-2 gap-8 px-4 py-8 md:grid-cols-4">
                        <div>
                            <Footer.Title title="Company" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">About</Footer.Link>
                                <Footer.Link href="#">Careers</Footer.Link>
                                <Footer.Link href="#">Brand Center</Footer.Link>
                                <Footer.Link href="#">Blog</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="help center" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Discord Server
                                </Footer.Link>
                                <Footer.Link href="#">Twitter</Footer.Link>
                                <Footer.Link href="#">Facebook</Footer.Link>
                                <Footer.Link href="#">Contact Us</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">Licensing</Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="download" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">iOS</Footer.Link>
                                <Footer.Link href="#">Android</Footer.Link>
                                <Footer.Link href="#">Windows</Footer.Link>
                                <Footer.Link href="#">MacOS</Footer.Link>
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
