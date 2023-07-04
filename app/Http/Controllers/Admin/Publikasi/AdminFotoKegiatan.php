<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Models\Foto_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminFotoKegiatan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // get data foto dengan kode kecamatan
        $foto = Foto_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10);

        
        return Inertia::render('Admin/Publikasi/AdminFotoKegiatan',[
            'domain' => $domain,
            'status' => session('status'),
            'foto' => $foto
        ]);
    }
}
