<?php

namespace App\Http\Requests;

use App\Models\Kecamatan;
use Illuminate\Foundation\Http\FormRequest;

class StoreListKecamatanRequest extends FormRequest
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
            'judul_website' => 'required|string|max:100',
            'domain_kecamatan' => 'required|string|max:50|unique:'.Kecamatan::class,
            'kode_kecamatan' => 'required|numeric|max:10|unique:'.Kecamatan::class,
        ];
    }

    public function messages(): array
    {
        return [
            // judul Website
            'judul_website.required' => ':attribute Tidak Boleh Kosong',
            'judul_website.string' => ':attribute Harus Text',
            'judul_website.max' => ':attribute text maximal 100 digit',
            'judul_website.match' => ':attribute harus text atau angka',
            // Domain Website
            'domain_kecamatan.required' => ':attribute Tidak Boleh Kosong',
            'domain_kecamatan.string' => ':attribute Harus Text',
            'domain_kecamatan.max' => ':attribute text maximal 100 digit',
            'domain_kecamatan.unique' => ':attribute tidak boleh sama',
            // kode Kecamatan
            'kode_kecamatan.required' => ':attribute Tidak Boleh Kosong',
            'kode_kecamatan.numeric' => ':attribute Harus angka',
            'kode_kecamatan.max' => ':attribute text maximal 10 digit',
            'kode_kecamatan.match' => ':attribute harus text atau angka',
            'kode_kecamatan.unique' => ':attribute tidak boleh sama',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_website' => 'Judul Website',
            'domain_kecamatan' => 'Domain Kecamatan',
            'kode_kecamatan' => 'Kode Kecamatan',
        ];
    }
}
