<?php

namespace App\Http\Controllers\Publikasi;

use App\Http\Controllers\Controller;
use App\Models\Agenda_Model;
use App\Models\Berita_Model;
use App\Models\Kecamatan;
use App\Models\Wisata_Model;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Wisata extends Controller
{
    public function index()
    {
         // ambil url domain
         $GetDomain = FacadesRequest::getHost();
         $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
         // get kode Kecamatan
         $get_kd_kecamatan = $domain['kode_kecamatan']; 
         // get data wisata dengan kode kecamatan
         $wisata = Wisata_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(8); 

        return Inertia::render('Publikasi/Wisata',[
            'domain' => $domain,
            'wisata' => $wisata
        ]);
    }

    public function detailWisata($slug){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan']; 
        // ambil detail data wisata menurut kode kecamatannya
        $wisata = Wisata_Model::where('kode_kecamatan',$get_kd_kecamatan)->where('slug_wisata',$slug)->first();
          // ambil data berita menurut kode kecamatannya
          $get_berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->paginate(4);         
              
        $agenda = Agenda_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(3);

        return Inertia::render('Publikasi/Detail/DetailWisata',[
            'judul'=>'Berita',
            'domain' => $domain,
            'wisata' => $wisata,
            'detail_berita' =>$get_berita,
            'agenda' => $agenda
        ]); 
}
}