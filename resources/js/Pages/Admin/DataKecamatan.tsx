import CKEditorComponen from "@/Components/CKEditorComponen";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { Button, FileInput, Flowbite, Label, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState, FormEventHandler, useEffect } from "react";
import InputError from "@/Components/InputError";
import Swal from "sweetalert2";

interface Props {
    domain: {
        idDomain: number;
        alamat: string;
        nohp: string;
        email: string;
    };
    flash: {
        message?: string;
        // Add more flash message types if needed
    };
}

const DataKecamatan: React.FC<PageProps & Props> = ({
    auth,
    domain,
    flash,
}) => {
    const { data, setData, post, errors, processing } = useForm({
        alamat: domain.alamat,
        nohp: domain.nohp,
        email: domain.email,
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("update_kecamatan", { id: domain.idDomain }));
    };

    useEffect(() => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "dark",
            customClass: {
                popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
        });
        if (flash && flash.message) {
            Toast.fire({
                icon: "success",
                title: flash.message,
            });
        }
        // else if (flash && flash.error) {
        //     Toast.fire({
        //         icon: "error",
        //         title: "Data Gagal Diubah",
        //     });
        // }
    }, [flash]);
    return (
        <Flowbite>
            <Head title="Setting Data Kecamatan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4>Form Data Kecamatan</h4>}
            >
                <form onSubmit={submit} className="mx-5">
                    <div className="flex max-w-2xl flex-col gap-4 ml-3">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="alamat" value="Alamat" />
                            </div>
                            <TextInput
                                id="alamat"
                                name="alamat"
                                value={data.alamat}
                                onChange={(e) =>
                                    setData("alamat", e.target.value)
                                }
                                placeholder="Alamat"
                                required
                            />
                            <InputError
                                message={errors.alamat}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nohp" value="No Handphone" />
                            </div>
                            <TextInput
                                id="nohp"
                                name="nohp"
                                value={data.nohp}
                                onChange={(e) =>
                                    setData("nohp", e.target.value)
                                }
                                placeholder="No Handphone"
                                required
                            />
                            <InputError
                                message={errors.nohp}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Alamat Email Kantor"
                                />
                            </div>
                            <TextInput
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Alamat Email Kantor"
                                required
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
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
export default DataKecamatan;
