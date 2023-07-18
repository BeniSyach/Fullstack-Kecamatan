import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import InputError from "@/Components/InputError";

type data = {
    gambar_slider: File | null;
};

const TambahDataSlider: React.FC<PageProps> = ({ auth }) => {
    const { data, setData, post, errors, processing, progress } = useForm<data>(
        {
            gambar_slider: null,
        }
    );

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
                                    value="Gambar Slider"
                                />
                            </div>
                            <FileInput
                                id="gambar_slider"
                                helperText={
                                    <>
                                        <span className="font-medium">
                                            Gambar
                                        </span>{" "}
                                        maximal ukuran maximal lebar : 3200
                                        pixel dan tinggi : 350 Pixel
                                    </>
                                }
                                name="gambar_slider"
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setData(
                                            "gambar_slider",
                                            e.target.files[0]
                                        );
                                    }
                                }}
                            />
                            <InputError
                                message={errors.gambar_slider}
                                className="mt-2"
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
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default TambahDataSlider;
