import { Head, useForm } from "@inertiajs/react";
import { Button, Flowbite, Label, Select, TextInput } from "flowbite-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FormEventHandler } from "react";
import InputError from "../../Components/InputError";

interface data {
    kecamatan: any;
}

const TambahUsers: React.FC<PageProps & data> = ({ auth, kecamatan }) => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        kode_kecamatan: "",
        role_user: "",
        password: "",
        password_confirmation: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("tambahUsers"));
    };
    return (
        <Flowbite>
            <Head title="Tambah User" />
            <AuthenticatedLayout
                user={auth.user}
                header={<h4> Tambah User</h4>}
            >
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
                            <InputError
                                message={errors.name}
                                className="mt-2"
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
                            <InputError
                                message={errors.email}
                                className="mt-2"
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
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                placeholder="Password"
                                required
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <div className="mt-2 block">
                                <Label
                                    htmlFor="password_confirmation"
                                    value="Konfirmasi Password"
                                />
                            </div>
                            <TextInput
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                placeholder="Konfirmasi Password"
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
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
export default TambahUsers;
