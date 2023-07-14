<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateKataSambuatanRequest extends FormRequest
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
            'nama_kepala_camat' => 'required|string|max:200',
            'gambar_camat' => 'required|image|mimes:jpeg,jpg,png,gif|max:5000',
            'judul_kataSambutan' => 'required|string|max:200',
            'isi_kataSambutan' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Website
            'nama_kepala_camat.required' => ':attribute Tidak Boleh Kosong',
            'nama_kepala_camat.string' => ':attribute Harus Text',
            'nama_kepala_camat.max' => ':attribute text maximal 200 digit',
            // gambar camat
            'gambar_camat.required' => ':attribute Tidak Boleh Kosong',
            'gambar_camat.image' => ':attribute harus foto/gambar',
            'gambar_camat.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'gambar_camat.max' => ':attribute tidak lebih dari 5 MB',
            // judul Kata Sambutan
            'judul_kataSambutan.required' => ':attribute Tidak Boleh Kosong',
            'judul_kataSambutan.string' => ':attribute Harus Text',
            'judul_kataSambutan.max' => ':attribute text maximal 200 digit',
            // Isi Kata Sambutan
            'isi_kataSambutan.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'nama_kepala_camat' => 'Nama Camat',
            'gambar_camat' => 'Foto',
            'judul_kataSambutan' => 'Judul Kata Sambutan',
            'isi_kataSambutan' => 'Isi Kata Sambutan',
        ];
    }
}
