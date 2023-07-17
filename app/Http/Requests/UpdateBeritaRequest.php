<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBeritaRequest extends FormRequest
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
            'judul_berita' => 'required|string|max:200',
            'gambar_berita' => 'required|image|mimes:jpeg,jpg,png,gif|max:5000',
            'isi_berita' => 'required',
            'kategori_berita_id' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Tupoksi
            'judul_berita.required' => ':attribute Tidak Boleh Kosong',
            'judul_berita.string' => ':attribute Harus Text',
            // judul Tupoksi
            'gambar_berita.required' => ':attribute Tidak Boleh Kosong',
            'gambar_berita.image' => ':attribute harus foto/gambar',
            'gambar_berita.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'gambar_berita.max' => ':attribute tidak lebih dari 5 MB',
            // judul Tupoksi
            'isi_berita.string' => ':attribute Harus Text',
            // judul Tupoksi
            'kategori_berita_id.required' => ':attribute Tidak Boleh Kosong',
            'kategori_berita_id.string' => ':attribute Harus Text',
           
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_berita' => 'Judul Berita',
            'gambar_berita' => 'Gambar Berita',
            'isi_berita' => 'Isi Berita',
            'kategori_berita_id' => 'Kategori Berita',
        ];
    }
}
