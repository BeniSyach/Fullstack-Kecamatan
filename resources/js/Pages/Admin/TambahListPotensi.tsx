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

const TambahListPotensi: React.FC<PageProps> = ({ auth }) => {
    const { data, setData, post, errors, processing } = useForm({
        judul_potensi: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahPotensi"));
    };

    return (
        <Flowbite>
            <Head title="Tambah List Potensi" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah List Potensi</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_potensi"
                                    value="Judul Potensi"
                                />
                            </div>
                            <TextInput
                                id="judul_potensi"
                                name="judul_potensi"
                                value={data.judul_potensi}
                                onChange={(e) =>
                                    setData("judul_potensi", e.target.value)
                                }
                                placeholder="Judul Potensi"
                                required
                            />
                            <InputError
                                message={errors.judul_potensi}
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
                    </form>
                </div>
            </AuthenticatedLayout>
        </Flowbite>
    );
};
export default TambahListPotensi;
