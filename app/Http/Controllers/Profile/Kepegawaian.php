<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Kecamatan;
use App\Models\Kepegawaian_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Kepegawaian extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil data anggota pegawai melalui kode kecamatan
        $pegawai = Kepegawaian_Model::where('kode_kecamatan',$get_kd_kecamatan)->get();

        return Inertia::render('Profile/Kepegawaian',[
            'judul'=>'Kepegawaian',
            'Deskripsi'=>'Menu Ini Menampilkan Data Kepegawaian',
            'domain' => $domain,
            'pegawai' => $pegawai
        ]);
    }
}
