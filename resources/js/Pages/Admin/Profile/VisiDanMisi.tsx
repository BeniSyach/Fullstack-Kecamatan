import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface Props {
    getVisiDanMisi: {
        id_VisiDanMisi: number;
        judul_VisiDanMisi: string;
        deskripsi_VisiDanMisi: string;
        isi_Visi: any;
        isi_Misi: any;
    };
}

interface CustomFormData {
    [key: string]: unknown;
    judul_VisiDanMisi: string;
    deskripsi_VisiDanMisi: string;
    isi_Visi: any;
    isi_Misi: any;
}

const VisiDanMisi: React.FC<PageProps & Props> = ({ auth, getVisiDanMisi }) => {
    const [EditorContentVisi, SetEditorContentVisi] = useState(
        getVisiDanMisi.isi_Visi
    );
    const handleEditorChangeVisi = (contentVisi: any) => {
        SetEditorContentVisi(contentVisi);
        setData("isi_Visi", EditorContentVisi);
    };

    const [EditorContentMisi, SetEditorContentMisi] = useState(
        getVisiDanMisi.isi_Misi
    );
    const handleEditorChangeMisi = (contentMisi: any) => {
        SetEditorContentMisi(contentMisi);
        setData("isi_Misi", EditorContentMisi);
    };

    const { data, setData, put, errors, processing } = useForm<CustomFormData>({
        judul_VisiDanMisi: getVisiDanMisi.judul_VisiDanMisi,
        deskripsi_VisiDanMisi: getVisiDanMisi.deskripsi_VisiDanMisi,
        isi_Visi: getVisiDanMisi.isi_Visi,
        isi_Misi: getVisiDanMisi.isi_Misi,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route("updateVisiMisi", { id: getVisiDanMisi.id_VisiDanMisi }));
    };

    return (
        <Flowbite>
            <Head title="Setting Visi Dan Misi" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Visi Dan Misi</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-4xl flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="judul_VisiDanMisi"
                                    value="Judul Visi Dan Misi"
                                />
                            </div>
                            <TextInput
                                id="judul_VisiDanMisi"
                                name="judul_VisiDanMisi"
                                value={data.judul_VisiDanMisi}
                                onChange={(e) =>
                                    setData("judul_VisiDanMisi", e.target.value)
                                }
                                placeholder="Judul Visi Dan Misi"
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="deskripsi_VisiDanMisi"
                                    value="Deskripsi Singkat Visi Dan Misi"
                                />
                            </div>
                            <TextInput
                                id="deskripsi_VisiDanMisi"
                                name="deskripsi_VisiDanMisi"
                                value={data.deskripsi_VisiDanMisi}
                                onChange={(e) =>
                                    setData(
                                        "deskripsi_VisiDanMisi",
                                        e.target.value
                                    )
                                }
                                placeholder="Deskripsi Singkat Visi Dan Misi"
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <Label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Isi Visi
                            </Label>
                            <CKEditorComponen
                                value={EditorContentVisi}
                                onchange={handleEditorChangeVisi}
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <Label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Isi Misi
                            </Label>
                            <CKEditorComponen
                                value={EditorContentMisi}
                                onchange={handleEditorChangeMisi}
                            />
                        </div>
                    </div>
                    <Button
                        className="my-5"
                        color="success"
                        type="submit"
                        disabled={processing}
                    >
                        Ubah
                    </Button>
                </form>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default VisiDanMisi;
