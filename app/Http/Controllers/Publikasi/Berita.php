<?php

namespace App\Http\Controllers\Publikasi;

use App\Http\Controllers\Controller;
use App\Models\Berita_Model;
use App\Models\KategoriBerita_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request as FacadesRequest;

class Berita extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan']; 
        // ambil data berita menurut kode kecamatannya
        $berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(12);    
        $kategori_berita = KategoriBerita_Model::select('*')->get();

        return Inertia::render('Publikasi/Berita',[
            'judul'=>'Berita',
            'domain' => $domain,
            'berita' => $berita,
            'kategori_berita' =>$kategori_berita
        ]);
    }

    public function detailBerita($slug){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan']; 
        // ambil detail data berita menurut kode kecamatannya
        $berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->where('tb_berita.slug_berita',$slug)->first();    
        // ambil data berita menurut kode kecamatannya
        $get_berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->paginate(4);          
        $kategori_berita = KategoriBerita_Model::select('*')->get();

        return Inertia::render('Publikasi/Detail/DetailBerita',[
            'judul'=>'Berita',
            'domain' => $domain,
            'berita' => $berita,
            'detail_berita' =>$get_berita,
            'kategori_berita' =>$kategori_berita
        ]); 
    }
}
