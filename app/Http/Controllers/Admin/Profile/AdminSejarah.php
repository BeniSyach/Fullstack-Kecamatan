<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSejarahRequest;
use App\Models\Kecamatan;
use App\Models\Sejarah_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminSejarah extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_sejarah = Sejarah_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();
       
        return Inertia::render('Admin/Profile/Sejarah',[
            'domain' => $domain,
            'status' => session('status'),
            'mySejarah' => $get_sejarah,
            'sejarah' => $get_sejarah
        ]);
    }

    public function updateSejarah(StoreSejarahRequest $request, Sejarah_Model $sejarah)
    {

        $request->validated();

        $sejarah::find(request()->segment(4))->update([
            'judul_sejarah'=>$request->judul_sejarah,
            'Deskripsi_sejarah'=>$request->Deskripsi_sejarah,
            'penulis_sejarah'=>$request->penulis_sejarah,
            'jabatan_penulis_sejarah' => $request->jabatan_penulis_sejarah,
            'isi_sejarah' => $request->isi_sejarah
        ]);

        return redirect()->back()->with('message','Data Berhasil Diubah');
    }

}
