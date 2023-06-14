<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Adat_dan_budaya_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class AdatDanBudaya extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil data Adat Dan Budaya dari kode Kecamatan
        $adatDanBudaya = Adat_dan_budaya_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();
        
        return Inertia::render('Profile/AdatDanBudaya',[
            'AdatDanBudaya' => $adatDanBudaya,
            'domain' => $domain
        ]);
    }
}
