<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLetakGeografisRequest;
use App\Models\Kecamatan;
use App\Models\LetakGeografis_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminLetakGeografis extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_letak_geografis = LetakGeografis_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        return Inertia::render('Admin/Profile/LetakGeografis',[
            'domain' => $domain,
            'status' => session('status'),
            'getLetakGeografis' => $get_letak_geografis
        ]);
    }

    public function updateLetakGeografis(StoreLetakGeografisRequest $request, LetakGeografis_Model $geografis){

        $geografis::find(request()->segment(4))->update([
            'judul_letak_geografis'=>$request->judul_letak_geografis,
            'Deskripsi_letak_geografis'=>$request->Deskripsi_letak_geografis,
            'isi_letak_geografis'=>$request->isi_letak_geografis,

        ]);

        return redirect()->back()->with('message','data berhasil diubah');
    }
}
