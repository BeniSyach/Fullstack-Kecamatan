<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:'.User::class,
                'kode_kecamatan' => 'required',
                'role_user' => 'required',
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }

    public function messages(): array
    {
        return [
            // Nama
            'name.required' => ':attribute Tidak Boleh Kosong',
            'name.string' => ':attribute Harus Text',
            'name.max' => ':attribute text maximal 200 digit',
            // Email
            'email.required' => ':attribute Tidak Boleh Kosong',
            'email.string' => ':attribute Harus Text',
            'email.email' => ':attribute Harus alamat Email',
            'email.max' => ':attribute text maximal 200 digit',
            'email.unique' => ':attribute Tidak Boleh Sama',
            // Kode Kecamatan
            'kode_kecamatan.required' => ':attribute Tidak Boleh Kosong',
            // Role User
            'role_user.required' => ':attribute Tidak Boleh Kosong',
            // password
            'password.required' => ':attribute Tidak Boleh Kosong',
            'password.confirmed' => ':attribute Password Harus Sama',
        ];
    }

    public function attributes(): array
    {
        return [
            'name' => 'Nama Anda',
                'email' => 'Email Anda',
                'kode_kecamatan' => 'Kode Kecamatan',
                'role_user' => 'Role User',
                'password' => 'Password',
        ];
    }
}
