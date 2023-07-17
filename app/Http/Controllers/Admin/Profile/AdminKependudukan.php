<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreKependudukanRequest;
use App\Models\Kecamatan;
use App\Models\Kependudukan_Model;
use App\Models\LetakGeografis_Model;
use App\Models\Sejarah_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminKependudukan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_kependudukan = Kependudukan_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        return Inertia::render('Admin/Profile/Kependudukan',[
            'domain' => $domain,
            'status' => session('status'),
            'getKependudukan' => $get_kependudukan
        ]);
    }

    public function updateKependudukan(StoreKependudukanRequest $request, Kependudukan_Model $penduduk)
    {
        $request->validated();
        
        $penduduk::find(request()->segment(4))->update([
            'judul_kependudukan'=>$request->judul_kependudukan,
            'deskripsi_kependudukan'=>$request->deskripsi_kependudukan,
            'isi_kependudukan'=>$request->isi_kependudukan
        ]);

        return redirect()->back()->with('message','Data Berhasil Diubah');
    }
}
