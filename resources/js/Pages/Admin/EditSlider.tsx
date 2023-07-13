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
import InputError from "@/Components/InputError";
import { type } from "os";

interface Props {
    slider: {
        idSlider: number;
        gambar_slider: string;
    };
}

type data = {
    gambar_slider: File | null;
};

const EditSlider: React.FC<PageProps & Props> = ({ auth, slider }) => {
    const { data, setData, post, errors, processing, progress } = useForm<data>(
        {
            gambar_slider: null,
        }
    );

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("updateSlider", { id: slider.idSlider }));
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
                                src={`/${slider.gambar_slider}`}
                                alt="Foto Camat"
                                className="w-1/3 mb-10"
                            />
                            <FileInput
                                id="gambar_slider"
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
                                Ubah
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
export default EditSlider;
