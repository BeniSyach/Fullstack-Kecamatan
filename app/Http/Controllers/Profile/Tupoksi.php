<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Tupoksi_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Tupoksi extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil tupoksi dari kode Kecamatan
        $tupoksi = Tupoksi_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        return Inertia::render('Profile/Tupoksi',[
            'tupoksi' => $tupoksi,
            'domain' => $domain
        ]);
    }
}
