<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePegawaiRequest extends FormRequest
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
            'nama_pegawai' => 'required|string|max:200',
            'gambar_pegawai' => 'required|image|mimes:jpeg,jpg,png,gif|max:5000',
            'jabatan_pegawai' => 'required|string|max:200',
            'motivasi_pegawai' => 'required|string|max:200',
            'link_facebook' => 'required|string|max:200',
            'link_instagram' => 'required|string|max:200',
            'link_twitter' => 'required|string|max:200',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Tupoksi
            'nama_pegawai.required' => ':attribute Tidak Boleh Kosong',
            'nama_pegawai.string' => ':attribute Harus Text',
            // judul Tupoksi
            'gambar_pegawai.required' => ':attribute Tidak Boleh Kosong',
            'gambar_pegawai.image' => ':attribute harus foto/gambar',
            'gambar_pegawai.mimes' => ':attribute File harus berektensi jpeg,jpg,png,gif',
            'gambar_pegawai.max' => ':attribute tidak lebih dari 5 MB',
            // judul Tupoksi
            'jabatan_pegawai.string' => ':attribute Harus Text',
            'jabatan_pegawai.max' => ':attribute text maximal 200 digit',
            // judul Tupoksi
            'motivasi_pegawai.string' => ':attribute Harus Text',
            'motivasi_pegawai.max' => ':attribute text maximal 200 digit',
            // judul Tupoksi
            'link_facebook.string' => ':attribute Harus Text',
            'link_facebook.max' => ':attribute text maximal 200 digit',
            // Deskripsi Tupoksi
            'link_instagram.required' => ':attribute Tidak Boleh Kosong',
            'link_instagram.string' => ':attribute Harus Text',
            'link_instagram.max' => ':attribute text maximal 200 digit',
            // Isi Tupoksi
            'link_twitter.required' => ':attribute Tidak Boleh Kosong',
            'link_twitter.string' => ':attribute Harus Text',
            'link_twitter.max' => ':attribute text maximal 200 digit',
        ];
    }

    public function attributes(): array
    {
        return [
            'nama_pegawai' => 'Nama Pegawai',
            'gambar_pegawai' => 'Gambar Pegawai',
            'jabatan_pegawai' => 'Jabatan Pegawai',
            'motivasi_pegawai' => 'Motivasi Pegawai',
            'link_facebook' => 'Link Facebook',
            'link_instagram' => 'Link Instagram',
            'link_twitter' => 'Link Twitter',
        ];
    }
}
