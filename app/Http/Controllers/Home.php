<?php

namespace App\Http\Controllers;

use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class Home extends Controller
{
    public function index(){

        $GetDomain = FacadesRequest::getHost();

        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();

        return Inertia::render('Home',[
            'domain' => $domain
        ]);
    }
}
