<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Letak_Geografis extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        

        return Inertia::render('Profile/LetakGeografis',[
            'judul'=>'Letak Geografis',
            'Deskripsi' => 'djasldjsapkdmasklmdaslmdmnkfnaedinp',
            'domain' => $domain
        ]);
    }
    
}
