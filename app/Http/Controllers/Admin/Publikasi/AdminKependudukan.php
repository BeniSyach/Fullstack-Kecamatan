<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Kependudukan_Model;
use App\Models\LetakGeografis_Model;
use App\Models\Sejarah_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminKependudukan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_kependudukan = Kependudukan_Model::where('kode_kecamatan',$get_kd_kecamatan)->get();

        
        return Inertia::render('Admin/Profile/Kependudukan',[
            'domain' => $domain,
            'status' => session('status'),
            'getAllKecamatan' => $get_kependudukan
        ]);
    }
}
