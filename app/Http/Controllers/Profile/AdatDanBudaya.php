<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class AdatDanBudaya extends Controller
{
    public function index(){

        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        
        return Inertia::render('Profile/AdatDanBudaya',[
            'judul'=>'Adat & Budaya',
            'Deskripsi'=>'ldnasodnasokdnaskndoasfbnsaknflaks',
            'domain' => $domain
        ]);
    }
}
