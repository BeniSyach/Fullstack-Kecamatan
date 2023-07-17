<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePelayananRequest extends FormRequest
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
            'judul_pelayanan' => 'required|string|max:200',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Foto
            'judul_pelayanan.required' => ':attribute Tidak Boleh Kosong',
            'judul_pelayanan.string' => ':attribute Harus Text',
            'judul_pelayanan.max' => ':attribute text maximal 200 digit',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_pelayanan' => 'Judul pelayanan'
        ];
    }
}
