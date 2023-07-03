import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FormEventHandler } from "react";

interface myUser {
    pegawai: {
        idKepegawaian: number;
        nama_pegawai: string;
        gambar_pegawai: string;
        jabatan_pegawai: string;
        motivasi_pegawai: string;
        link_facebook: string;
        link_instagram: string;
        link_twitter: string;
    };
}

const TambahPegawai: React.FC<PageProps & myUser> = ({ auth, pegawai }) => {
    const { data, setData, post, errors, processing } = useForm({
        nama_pegawai: pegawai.nama_pegawai,
        gambar_pegawai: pegawai.gambar_pegawai,
        jabatan_pegawai: pegawai.jabatan_pegawai,
        motivasi_pegawai: pegawai.motivasi_pegawai,
        link_facebook: pegawai.link_facebook,
        link_instagram: pegawai.link_instagram,
        link_twitter: pegawai.link_twitter,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahPegawai"));
    };
    return (
        <Flowbite>
            <Head title="Tambah Pegawai" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah Pegawai</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="nama_pegawai"
                                    value="Nama Pegawai"
                                />
                            </div>
                            <TextInput
                                id="nama_pegawai"
                                name="nama_pegawai"
                                value={data.nama_pegawai}
                                onChange={(e) =>
                                    setData("nama_pegawai", e.target.value)
                                }
                                placeholder="Nama Pegawai"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="gambar_pegawai"
                                    value="Gambar Pegawai"
                                />
                            </div>
                            <img
                                src={data.gambar_pegawai}
                                alt="Foto Pegawai"
                                className="w-1/3 mb-10"
                            />
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="gambar_pegawai"
                                name="gambar_pegawai"
                                onChange={(e) =>
                                    setData("gambar_pegawai", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="jabatan_pegawai"
                                    value="jabatan pegawai"
                                />
                            </div>
                            <TextInput
                                id="jabatan_pegawai"
                                name="jabatan_pegawai"
                                value={data.jabatan_pegawai}
                                onChange={(e) =>
                                    setData("jabatan_pegawai", e.target.value)
                                }
                                placeholder="jabatan pegawai"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="motivasi_pegawai"
                                    value="Motivasi Pegawai"
                                />
                            </div>
                            <TextInput
                                id="motivasi_pegawai"
                                name="motivasi_pegawai"
                                value={data.motivasi_pegawai}
                                onChange={(e) =>
                                    setData("motivasi_pegawai", e.target.value)
                                }
                                placeholder="Motivasi Pegawai"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="link_facebook"
                                    value="Link Facebook"
                                />
                            </div>
                            <TextInput
                                id="link_facebook"
                                name="link_facebook"
                                value={data.link_facebook}
                                onChange={(e) =>
                                    setData("link_facebook", e.target.value)
                                }
                                placeholder="Link Facebook"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="link_instagram"
                                    value="Link Instagram"
                                />
                            </div>
                            <TextInput
                                id="link_instagram"
                                name="link_instagram"
                                value={data.link_instagram}
                                onChange={(e) =>
                                    setData("link_instagram", e.target.value)
                                }
                                placeholder="Link Instagram"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="link_twitter"
                                    value="Link Twitter"
                                />
                            </div>
                            <TextInput
                                id="link_twitter"
                                name="link_twitter"
                                value={data.link_twitter}
                                onChange={(e) =>
                                    setData("link_twitter", e.target.value)
                                }
                                placeholder="Link Twitter"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <Button
                                className="mt-3"
                                type="submit"
                                disabled={processing}
                            >
                                Ubah
                            </Button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default TambahPegawai;
