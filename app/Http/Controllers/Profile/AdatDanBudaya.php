<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Adat_dan_budaya_Model;
use App\Models\Agenda_Model;
use App\Models\Berita_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class AdatDanBudaya extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil data Adat Dan Budaya dari kode Kecamatan
        $adatDanBudaya = Adat_dan_budaya_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        $berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(4); 

        $agenda = Agenda_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(3);
        
        return Inertia::render('Profile/AdatDanBudaya',[
            'AdatDanBudaya' => $adatDanBudaya,
            'domain' => $domain,
            'berita' => $berita,
            'agenda' => $agenda
        ]);
    }
}
