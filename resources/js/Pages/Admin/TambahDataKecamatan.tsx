import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, Modal, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const TambahDataKecamatan: React.FC<PageProps> = ({ auth }) => {
    const { data, setData, post, errors, processing } = useForm({
        judul_website: "",
        domain_kecamatan: "",
        kode_kecamatan: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahDataKecamatan"));
    };

    return (
        <Flowbite>
            <Head title="Tambah Data Kecamatan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah Data Kecamatan</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_website"
                                    value="Nama Kecamatan"
                                />
                            </div>
                            <TextInput
                                id="judul_website"
                                name="judul_website"
                                value={data.judul_website}
                                onChange={(e) =>
                                    setData("judul_website", e.target.value)
                                }
                                placeholder="Nama Kecamatan"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="domain_kecamatan"
                                    value="Domain Kecamatan"
                                />
                            </div>
                            <TextInput
                                id="domain_kecamatan"
                                name="domain_kecamatan"
                                value={data.domain_kecamatan}
                                onChange={(e) =>
                                    setData("domain_kecamatan", e.target.value)
                                }
                                placeholder="Domain Kecamatan"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="kode_kecamatan"
                                    value="Kode Kecamatan"
                                />
                            </div>
                            <TextInput
                                id="kode_kecamatan"
                                name="kode_kecamatan"
                                value={data.kode_kecamatan}
                                onChange={(e) =>
                                    setData("kode_kecamatan", e.target.value)
                                }
                                placeholder="Kode Kecamatan"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <Button
                                className="mt-3"
                                type="submit"
                                disabled={processing}
                            >
                                Tambah
                            </Button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default TambahDataKecamatan;
