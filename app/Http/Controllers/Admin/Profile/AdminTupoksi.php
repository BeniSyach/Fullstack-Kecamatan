<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTupoksiRequest;
use App\Models\Adat_dan_budaya_Model;
use App\Models\Kecamatan;
use App\Models\Tupoksi_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminTupoksi extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_tupoksi = Tupoksi_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        return Inertia::render('Admin/Profile/AdminTupoksi',[
            'domain' => $domain,
            'status' => session('status'),
            'getTupoksi' => $get_tupoksi
        ]);
    }

    public function updateTupoksi(StoreTupoksiRequest $request,Tupoksi_Model $tupoksi)
    {
        $request->validated();
        $tupoksi::find(request()->segment(4))->update([
            'judul_tupoksi' => $request->judul_tupoksi,
            'deskripsi_tupoksi' => $request->deskripsi_tupoksi,
            'isi_tupoksi' => $request->isi_tupoksi
        ]);
        return redirect()->back()->with('message','Data Berhasil Diubah');
    }
}
