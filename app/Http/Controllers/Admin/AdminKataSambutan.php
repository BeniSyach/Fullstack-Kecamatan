<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateKataSambuatanRequest;
use App\Models\KataSambutan_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminKataSambutan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_kataSambutan = KataSambutan_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        return Inertia::render('Admin/AdminKataSambuatan',[
            'domain' => $domain,
            'status' => session('status'),
            'getKataSambutan' => $get_kataSambutan
        ]);
    }

    public function update(UpdateKataSambuatanRequest $request, KataSambutan_Model $kata_sambutan)
    {
        $kata_sambutan::find(request()->segment(4))->update([
            'nama_kepala_camat'=> $request->nama_kepala_camat,
            'gambar_camat'=> $request->gambar_camat,
            'judul_kataSambutan'=> $request->judul_kataSambutan,
            'isi_kataSambutan'=> $request->isi_kataSambutan,
        ]);
        return redirect(route('listKecamatan'))->with('message','Data Berhasil Di Ubah');
    }
}