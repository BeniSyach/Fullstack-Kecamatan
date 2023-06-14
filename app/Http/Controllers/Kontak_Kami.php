<?php

namespace App\Http\Controllers;

use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class Kontak_Kami extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode_kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        return Inertia::render('Kontak_Kami',[
            'domain' => $domain
        ]);
    }
}
