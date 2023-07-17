import { Head, useForm } from "@inertiajs/react";
import {
    Button,
    Flowbite,
    Label,
    Modal,
    Select,
    TextInput,
} from "flowbite-react";
import { FormEventHandler, useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import InputError from "@/Components/InputError";

interface Props {
    user: {
        id: number;
        name: string;
        email: string;
        password: any;
        kode_kecamatan: string;
        role_user: string;
    };
    kecamatan: any;
}

const EditUser: React.FC<PageProps & Props> = ({ auth, user, kecamatan }) => {
    const { data, setData, put, errors, processing } = useForm({
        name: user.name,
        email: user.email,
        kode_kecamatan: user.kode_kecamatan,
        role_user: user.role_user,
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route("updateUsers", { id: user.id }));
    };

    return (
        <Flowbite>
            <Head title="Edit User" />
            <AuthenticatedLayout user={auth.user} header={<h4> Edit User</h4>}>
                <div className="space-y-6 w-1/2 ml-5">
                    <form onSubmit={submit}>
                        <div>
                            <div className="mt-2 block">
                                <Label htmlFor="name" value="Nama Lengkap" />
                            </div>
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                placeholder="Nama Lengkap"
                                required
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label htmlFor="email" value="Email Anda" />
                            </div>
                            <TextInput
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                placeholder="Email Anda"
                                required
                            />
                        </div>
                        <div className="max-w-md" id="select">
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="kode_kecamatan"
                                    value="Kode Kecamatan"
                                />
                            </div>
                            <Select
                                id="kode_kecamatan"
                                onChange={(e) =>
                                    setData("kode_kecamatan", e.target.value)
                                }
                                required
                            >
                                <option>Pilih Kecamatan</option>
                                {kecamatan && kecamatan.length > 0 ? (
                                    <>
                                        {kecamatan.map((kec, k: number) => (
                                            <option
                                                key={k}
                                                value={kec.kode_kecamatan}
                                            >
                                                {kec.judul_website}
                                            </option>
                                        ))}
                                    </>
                                ) : (
                                    <p>Data Tidak Ada</p>
                                )}
                            </Select>
                            <InputError
                                message={errors.kode_kecamatan}
                                className="mt-2"
                            />
                        </div>
                        <div className="max-w-md" id="select">
                            <div className="mt-2 block">
                                <Label htmlFor="role_user" value="Role User" />
                            </div>
                            <Select
                                id="role_user"
                                onChange={(e) =>
                                    setData("role_user", e.target.value)
                                }
                                required
                            >
                                <option>Pilih Role User</option>
                                <option value="1">Super Admin</option>
                                <option value="2">Admin Kecamatan</option>
                                <option value="3">Warga</option>
                            </Select>
                            <InputError
                                message={errors.role_user}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <div className="mt-2 block">
                                <Label htmlFor="password" value="Password" />
                            </div>
                            <TextInput
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Password"
                                required
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
export default EditUser;
