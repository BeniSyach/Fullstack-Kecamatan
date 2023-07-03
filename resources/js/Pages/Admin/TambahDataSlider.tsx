import { Head, useForm } from "@inertiajs/react";
import {
    Button,
    FileInput,
    Flowbite,
    Label,
    Modal,
    TextInput,
} from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const TambahDataSlider: React.FC<PageProps> = ({ auth }) => {
    const { data, setData, post, errors, processing } = useForm({
        gambar_slider: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahSlider"));
    };

    return (
        <Flowbite>
            <Head title="Tambah Data Slider" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah Data Slider</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="gambar_slider"
                                    value="Nama Slider"
                                />
                            </div>
                            <FileInput
                                helperText="Ukuran Gambar Tidak Lebih dari 2 Mb"
                                id="gambar_slider"
                                name="gambar_slider"
                                onChange={(e) =>
                                    setData("gambar_slider", e.target.value)
                                }
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
export default TambahDataSlider;
