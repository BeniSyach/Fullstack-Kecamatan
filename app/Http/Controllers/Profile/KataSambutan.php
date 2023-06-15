<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Adat_dan_budaya_Model;
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
         // get kode Kecamatan
         $get_kd_kecamatan = $domain['kode_kecamatan'];
         // ambil data Kata Sambutan dari kode Kecamatan
         $kata_sambutan = KataSambutan_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();
         
         return Inertia::render('Profile/KataSambutan',[
            'kata_sambutan' => $kata_sambutan,
             'domain' => $domain
         ]);
    }
}