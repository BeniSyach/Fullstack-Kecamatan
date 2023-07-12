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

const TambahListUnduhan: React.FC<PageProps> = ({ auth }) => {
    const { data, setData, post, errors, processing } = useForm({
        judul_unduhan: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahUnduhan"));
    };

    return (
        <Flowbite>
            <Head title="Tambah List Unduhan" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah List Unduhan</h4>}
            >
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="judul_unduhan"
                                    value="Judul unduhan"
                                />
                            </div>
                            <TextInput
                                id="judul_unduhan"
                                name="judul_unduhan"
                                value={data.judul_unduhan}
                                onChange={(e) =>
                                    setData("judul_unduhan", e.target.value)
                                }
                                placeholder="Judul unduhan"
                                required
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
export default TambahListUnduhan;
