<?php

namespace App\Http\Controllers\Publikasi;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Wisata_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Wisata extends Controller
{
    public function index()
    {
         // ambil url domain
         $GetDomain = FacadesRequest::getHost();
         $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
         // get kode Kecamatan
         $get_kd_kecamatan = $domain['kode_kecamatan']; 
         // get data wisata dengan kode kecamatan
         $wisata = Wisata_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(8); 

        return Inertia::render('Publikasi/Wisata',[
            'domain' => $domain,
            'wisata' => $wisata
        ]);
    }
}