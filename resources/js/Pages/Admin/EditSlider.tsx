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

interface Props {
    slider: {
        idSlider: number;
        gambar_slider: any;
    };
}

const EditSlider: React.FC<PageProps & Props> = ({ auth, slider }) => {
    const { data, setData, put, errors, processing } = useForm({
        gambar_slider: slider.gambar_slider,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("updateSlider", { id: slider.idSlider }));
    };

    return (
        <Flowbite>
            <Head title="Edit Slider" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Edit Slider</h4>}
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
                            <img
                                src={data.gambar_slider}
                                alt="Foto Camat"
                                className="w-1/3 mb-10"
                            />
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
                                Ubah
                            </Button>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default EditSlider;
