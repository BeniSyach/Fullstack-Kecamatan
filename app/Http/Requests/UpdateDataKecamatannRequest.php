<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDataKecamatannRequest extends FormRequest
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
            'alamat' => 'required|string',
            'nohp' => 'required|string',
            'email' => 'required|string',
        ];
    }

    public function messages(): array
    {
        return [
            // Alamat
            'alamat.required' => ':attribute Tidak Boleh Kosong',
            'alamat.string' => ':attribute Harus Text',
            // Alamat
            'alamat.required' => ':attribute Tidak Boleh Kosong',
            'alamat.string' => ':attribute Harus Text',
            // email
            'email.required' => ':attribute Tidak Boleh Kosong',
            'email.string' => ':attribute Harus Text',
        ];
    }

    public function attributes(): array
    {
        return [
            'alamat' => 'Alamat',
            'nohp' => 'No Handphone',
            'email' => 'email',
        ];
    }
}
