<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreFotoRequest extends FormRequest
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
            'judul_foto_kegiatan' => 'required|string|max:200',
            'foto' => 'required|image|mimes:jpeg,jpg,png,gif|max:5000',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Foto
            'judul_foto_kegiatan.required' => ':attribute Tidak Boleh Kosong',
            'judul_foto_kegiatan.string' => ':attribute Harus Text',
            'judul_foto_kegiatan.max' => ':attribute text maximal 200 digit',
            // foto
            'foto.required' => ':attribute Tidak Boleh Kosong',
            'foto.image' => ':attribute harus foto/gambar',
            'foto.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'foto.max' => ':attribute tidak lebih dari 5 MB',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_foto_kegiatan' => 'Judul Foto Kegiatan',
            'foto' => 'Foto',
        ];
    }
}
