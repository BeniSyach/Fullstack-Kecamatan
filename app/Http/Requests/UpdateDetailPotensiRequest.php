<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDetailPotensiRequest extends FormRequest
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
            'gambar_potensi' => 'required|image|mimes:jpeg,jpg,png,gif|max:5000',
            'konten_potensi' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Foto
            'gambar_potensi.required' => ':attribute Tidak Boleh Kosong',
            'gambar_potensi.image' => ':attribute harus foto/gambar',
            'gambar_potensi.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'gambar_potensi.max' => ':attribute tidak lebih dari 5 MB',
            // konten potensi
            'konten_potensi.required' =>':attribute Tidak Boleh Kosong'
        ];
    }

    public function attributes(): array
    {
        return [
            'gambar_potensi' => 'Foto Potensi',
            'konten_potensi' => 'Konten',
        ];
    }
}
