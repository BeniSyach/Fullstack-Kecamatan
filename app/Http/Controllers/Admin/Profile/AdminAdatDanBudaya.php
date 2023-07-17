<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAdatDanBudaya;
use App\Models\Adat_dan_budaya_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminAdatDanBudaya extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_adatDanBudaya = Adat_dan_budaya_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        return Inertia::render('Admin/Profile/AdatDanBudaya',[
            'domain' => $domain,
            'status' => session('status'),
            'getAdatDanBudaya' => $get_adatDanBudaya
        ]);
    }

    public function updateAdatDanBudaya(StoreAdatDanBudaya $request,Adat_dan_budaya_Model $budaya){
        $request->validated();
        $budaya::find(request()->segment(4))->update([
            'judul_adatDanBudaya'=>$request->judul_adatDanBudaya,
            'deskripsi_adatDanBudaya'=>$request->deskripsi_adatDanBudaya,
            'isi_adatDanBudaya'=>$request->isi_adatDanBudaya
        ]);
        return redirect()->back()->with('message','Data Berhasil Diubah');
    }
}
