<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Agenda_Model;
use App\Models\Berita_Model;
use App\Models\Kecamatan;
use App\Models\Tupoksi_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Tupoksi extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // ambil tupoksi dari kode Kecamatan
        $tupoksi = Tupoksi_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

        
        $berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(4); 

        $agenda = Agenda_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(3);

        return Inertia::render('Profile/Tupoksi',[
            'tupoksi' => $tupoksi,
            'domain' => $domain,
            'berita' => $berita,
            'agenda' => $agenda
        ]);
    }
}
