<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Sejarah_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Sejarah extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // ambil kode kecamatan melalui domain
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $sejarah = Sejarah_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        return Inertia::render('Profile/Sejarah',[
            'sejarah' => $sejarah,
            'domain' => $domain
        ]);
    }
}
