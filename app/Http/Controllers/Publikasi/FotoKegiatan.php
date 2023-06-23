<?php

namespace App\Http\Controllers\Publikasi;

use App\Http\Controllers\Controller;
use App\Models\Foto_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class FotoKegiatan extends Controller
{
    public function index()
    {
         // ambil url domain
         $GetDomain = FacadesRequest::getHost();
         $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
         // get kode Kecamatan
         $get_kd_kecamatan = $domain['kode_kecamatan']; 
         // get data foto dengan kode kecamatan
         $foto = Foto_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(8);


        return Inertia::render('Publikasi/Foto_Kegiatan',[
            'domain' => $domain,
            'foto' => $foto
        ]);
    }
}