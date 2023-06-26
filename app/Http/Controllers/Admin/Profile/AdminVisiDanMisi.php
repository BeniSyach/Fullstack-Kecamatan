<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVisiMisiRequest;
use App\Models\Kecamatan;
use App\Models\VisiDanMisi_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminVisiDanMisi extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_VisiDanMisi = VisiDanMisi_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        return Inertia::render('Admin/Profile/VisiDanMisi',[
            'domain' => $domain,
            'status' => session('status'),
            'getVisiDanMisi' => $get_VisiDanMisi
        ]);
    }

    public function updateVisiMisi(StoreVisiMisiRequest $request,VisiDanMisi_Model $visiMisi){

        $visiMisi::find(request()->segment(4))->update([
        'judul_VisiDanMisi'=>$request->judul_VisiDanMisi,
        'deskripsi_VisiDanMisi'=>$request->deskripsi_VisiDanMisi,
        'isi_Visi'=>$request->isi_Visi,
        'isi_Misi'=>$request->isi_Misi
        ]);
        return redirect()->back()->with('message','Data Berhasil Diubah');
    }
}
