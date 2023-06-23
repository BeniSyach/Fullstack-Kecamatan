<?php

namespace App\Http\Controllers\Publikasi;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Video_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class VideoKegiatan extends Controller
{
    public function index()
    {
         // ambil url domain
         $GetDomain = FacadesRequest::getHost();
         $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
         // get kode Kecamatan
         $get_kd_kecamatan = $domain['kode_kecamatan'];
         // get data video dengan kode kecamatan
         $video = Video_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(8);  

        return Inertia::render('Publikasi/Video_Kegiatan',[
            'domain' => $domain,
            'video' => $video
        ]);
    }
}