<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Models\Adat_dan_budaya_Model;
use App\Models\Kecamatan;
use App\Models\Kepegawaian_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminKepegawaian extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_kepegawaian = Kepegawaian_Model::where('kode_kecamatan',$get_kd_kecamatan)->get();

        
        return Inertia::render('Admin/Profile/AdminKepegawaian',[
            'domain' => $domain,
            'status' => session('status'),
            'getKepegawaian' => $get_kepegawaian
        ]);
    }
}
