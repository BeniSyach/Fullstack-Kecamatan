<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Kepegawaian extends Controller
{
    public function index(){

        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();

        return Inertia::render('Profile/Kepegawaian',[
            'judul'=>'Kepegawaian',
            'Deskripsi'=>'dnasjldnasknaksfnaknfkladnfk',
            'domain' => $domain
        ]);
    }
}
