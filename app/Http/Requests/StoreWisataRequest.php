<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWisataRequest extends FormRequest
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
            'judul_wisata' => 'required|string|max:200',
            'foto_wisata' => 'required|image|mimes:jpeg,jpg,png,gif|max:5000',
            'deskripsi_wisata' => 'required|string|max:200',
            'konten_wisata' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Tupoksi
            'judul_wisata.required' => ':attribute Tidak Boleh Kosong',
            'judul_wisata.string' => ':attribute Harus Text',
            'judul_wisata.max' => ':attribute Text tidak lebih dari 200 kata',
            // judul Tupoksi
            'foto_wisata.required' => ':attribute Tidak Boleh Kosong',
            'foto_wisata.image' => ':attribute harus foto/gambar',
            'foto_wisata.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'foto_wisata.max' => ':attribute tidak lebih dari 5 MB',
            // judul Tupoksi
            'deskripsi_wisata.required' => ':attribute Tidak Boleh Kosong',
            'deskripsi_wisata.string' => ':attribute Harus Text',
            // 
            'konten_wisata.string' => ':attribute Harus Text',
           
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_wisata' => 'Judul Wisata',
            'foto_wisata' => 'Foto Wisata',
            'deskripsi_wisata' => 'Deskripsi Wisata',
            'konten_wisata' => 'Isi Wisata',
        ];
    }
}
