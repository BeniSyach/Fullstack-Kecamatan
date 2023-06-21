<?php

namespace App\Http\Controllers;

use App\Models\KataSambutan_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class KataSambutan extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode_kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_kataSambutan = KataSambutan_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        return Inertia::render('Profile/KataSambutan',[
            'domain' => $domain,
            'getKataSambutan' => $get_kataSambutan
        ]);
    }
}
