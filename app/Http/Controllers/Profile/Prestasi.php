<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Prestasi_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Prestasi extends Controller
{
    
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil data prestasi dengan kode kecamatan
        $prestasi = Prestasi_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();
        
        return Inertia::render('Profile/Prestasi',[
            'prestasi' => $prestasi,
            'domain' => $domain
        ]);
    }
}
