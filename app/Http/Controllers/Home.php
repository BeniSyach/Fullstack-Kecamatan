<?php

namespace App\Http\Controllers;

use App\Models\KataSambutan_Model;
use App\Models\Kecamatan;
use App\Models\Slider_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class Home extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode_kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil data Slider dari kode Kecamatan
        $slider = Slider_Model::where('kode_kecamatan',$get_kd_kecamatan)->get();
        // Ambil data Kata Sambutan Dari Kode Kecamatan
        $kata_sambutan = KataSambutan_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        return Inertia::render('Home',[
            'domain' => $domain,
            'slider' => $slider,
            'kata_sambutan' => $kata_sambutan
        ]);
    }
}
