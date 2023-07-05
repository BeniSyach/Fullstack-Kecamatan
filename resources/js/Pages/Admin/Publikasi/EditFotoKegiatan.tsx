import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import CKEditorComponen from "@/Components/CKEditorComponen";

interface Props {
    foto: {
        judul_foto_kegiatan: string;
        foto: string;
    };
}

const EditFotoKegiatan: React.FC<PageProps & Props> = ({ auth, foto }) => {
    const { data, setData, post, errors, processing } = useForm({
        judul_foto_kegiatan: foto.judul_foto_kegiatan,
        foto: foto.foto,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("updateFotoAdminFotoKegiatan"));
    };

    return (
        <Flowbite>
            <Head title="Edit Foto" />
            <AuthenticatedLayout user={auth.user} header={<h4> Edit Foto</h4>}>
                <div className="space-y-6 ml-5">
                    <form onSubmit={submit}>
                        <div className="max-w-xl">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_foto_kegiatan"
                                    value="Judul Foto"
                                />
                            </div>
                            <TextInput
                                id="judul_foto_kegiatan"
                                name="judul_foto_kegiatan"
                                value={data.judul_foto_kegiatan}
                                onChange={(e) =>
                                    setData(
                                        "judul_foto_kegiatan",
                                        e.target.value
                                    )
                                }
                                placeholder="Judul Foto"
                                required
                            />
                        </div>
                        <div className="max-w-md">
                            <div className="mt-2 block">
                                <Label htmlFor="foto" value="Foto" />
                            </div>
                            <img
                                src={data.foto}
                                alt="Foto Berita"
                                className="w-1/3 mb-3"
                            />
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="foto"
                                name="foto"
                                onChange={(e) =>
                                    setData("foto", e.target.value)
                                }
                            />
                        </div>

                        <div className="w-full">
                            <Button
                                className="mt-3"
                                type="submit"
                                disabled={processing}
                            >
                                Edit
                            </Button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default EditFotoKegiatan;
