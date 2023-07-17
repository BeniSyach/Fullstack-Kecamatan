<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAgendaRequest extends FormRequest
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
            'judul_agenda' => 'required|string|max:200',
            'tanggal_agenda' => 'required',
            'isi_agenda' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            // judul Kependudukan
            'judul_agenda.required' => ':attribute Tidak Boleh Kosong',
            'judul_agenda.string' => ':attribute Harus Text',
            'judul_agenda.max' => ':attribute text maximal 200 digit',
            // Deskripsi Kependudukan
            'tanggal_agenda.required' => ':attribute Tidak Boleh Kosong',
            // Isi Kependudukan
            'isi_agenda.required' => ':attribute Tidak Boleh Kosong',
        ];
    }

    public function attributes(): array
    {
        return [
            'judul_agenda' => 'Judul Agenda',
            'tanggal_agenda' => 'Tanggal Agenda',
            'isi_agenda' => 'Konten Agenda',
        ];
    }
}
