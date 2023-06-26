<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Sejarah_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminSejarah extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_sejarah = Sejarah_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        return Inertia::render('Admin/Profile/Sejarah',[
            'domain' => $domain,
            'status' => session('status'),
            'mySejarah' => $get_sejarah,
            'sejarah' => $get_sejarah
        ]);
    }

}
