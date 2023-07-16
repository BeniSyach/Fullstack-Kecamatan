import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, Modal, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import InputError from "@/Components/InputError";

interface Props {
    kecamatan: {
        idDomain: number;
        domain_kecamatan: string;
        kode_kecamatan: any;
        judul_website: string;
    };
}

const EditDataKecamatan: React.FC<PageProps & Props> = ({
    auth,
    kecamatan,
}) => {
    const { data, setData, put, errors, processing } = useForm({
        judul_website: kecamatan.judul_website,
        domain_kecamatan: kecamatan.domain_kecamatan,
        kode_kecamatan: kecamatan.kode_kecamatan,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("updateDataKecamatan", { id: kecamatan.idDomain }));
    };

    return (
        <Flowbite>
            <Head title="Edit Data Kecamatan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit Data Kecamatan</h4>}
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
                            <InputError
                                message={errors.judul_website}
                                className="mt-2"
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
                            <InputError
                                message={errors.domain_kecamatan}
                                className="mt-2"
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
                                type="number"
                                id="kode_kecamatan"
                                name="kode_kecamatan"
                                value={data.kode_kecamatan}
                                onChange={(e) =>
                                    setData("kode_kecamatan", e.target.value)
                                }
                                placeholder="Kode Kecamatan"
                                required
                            />
                            <InputError
                                message={errors.kode_kecamatan}
                                className="mt-2"
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
export default EditDataKecamatan;
