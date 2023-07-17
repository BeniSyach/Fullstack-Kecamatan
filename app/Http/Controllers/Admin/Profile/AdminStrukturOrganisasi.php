<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreStrukturOrganisasiRequest;
use App\Models\Kecamatan;
use App\Models\StrukturOrganisasi_Model;
use App\Models\VisiDanMisi_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminStrukturOrganisasi extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_StrukturOrganisasi = StrukturOrganisasi_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        return Inertia::render('Admin/Profile/AdminStrukturOrganisasi',[
            'domain' => $domain,
            'status' => session('status'),
            'getStrukturOrganisasi' => $get_StrukturOrganisasi
        ]);
    }

    public function updateStrukturOrganisasi(StoreStrukturOrganisasiRequest $request,StrukturOrganisasi_Model $strukturOrganisasi)
    {

        $request->validated();

        $strukturOrganisasi::find(request()->segment(4))->update([
        'judul_struktur_organisasi'=>$request->judul_struktur_organisasi,
        'deskripsi_struktur_organisasi'=>$request->deskripsi_struktur_organisasi,
        'isi_struktur_organisasi'=>$request->isi_struktur_organisasi
        ]);
        return redirect()->back()->with('message','Data Berhasil Diubah');
    }
}
