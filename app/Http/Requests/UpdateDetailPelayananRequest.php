<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDetailPelayananRequest extends FormRequest
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
            'gambar_pelayanan' => 'required|image|mimes:jpeg,jpg,png,gif|max:5000',
            'konten_pelayanan' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Foto
            'gambar_pelayanan.required' => ':attribute Tidak Boleh Kosong',
            'gambar_pelayanan.image' => ':attribute harus foto/gambar',
            'gambar_pelayanan.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'gambar_pelayanan.max' => ':attribute tidak lebih dari 5 MB',
            // konten potensi
            'konten_pelayanan.required' =>':attribute Tidak Boleh Kosong'
        ];
    }

    public function attributes(): array
    {
        return [
            'gambar_pelayanan' => 'Foto Pelayanan',
            'konten_pelayanan' => 'Konten',
        ];
    }
}
