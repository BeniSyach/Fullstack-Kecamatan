import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, TextInput } from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import InputError from "@/Components/InputError";

const TambahListPelayanan: React.FC<PageProps> = ({ auth }) => {
    const { data, setData, post, errors, processing } = useForm({
        judul_pelayanan: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahPelayanan"));
    };

    return (
        <Flowbite>
            <Head title="Tambah List Pelayanan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah List Pelayanan</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_pelayanan"
                                    value="Judul Pelayanan"
                                />
                            </div>
                            <TextInput
                                id="judul_pelayanan"
                                name="judul_pelayanan"
                                value={data.judul_pelayanan}
                                onChange={(e) =>
                                    setData("judul_pelayanan", e.target.value)
                                }
                                placeholder="Judul Pelayanan"
                                required
                            />
                            <InputError
                                message={errors.judul_pelayanan}
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
export default TambahListPelayanan;
