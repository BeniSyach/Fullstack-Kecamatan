<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBeritaRequest;
use App\Http\Requests\UpdateBeritaRequest;
use App\Models\Berita_Model;
use App\Models\KategoriBerita_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AdminBerita extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
               // ambil data berita menurut kode kecamatannya
               $berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10);

        
        return Inertia::render('Admin/Publikasi/AdminBerita',[
            'domain' => $domain,
            'status' => session('status'),
            'getBerita' => $berita
        ]);
    }

    public function create()
    {
 
        $kategori_berita = KategoriBerita_Model::all();
        return Inertia::render('Admin/Publikasi/TambahDataBerita',[
            'kategori_berita' => $kategori_berita
        ]);
    }

    public function store(StoreBeritaRequest $request)
    {   
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        // Membuat slug dari Judul Berita
        $slug = Str::of($request->judul_berita)->snake();

        $berita = new Berita_Model();
        $berita->kode_kecamatan = $get_kd_kecamatan;
        $berita->judul_berita = $request->judul_berita;
        $berita->slug_berita =$slug;
        $berita->gambar_berita = $request->gambar_berita;
        $berita->isi_berita = $request->isi_berita;
        $berita->kategori_berita_id = $request->kategori_berita_id;
        $berita->penulis_berita = $request->user()->id;
        $berita->save();
        return redirect(route('AdminBerita'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $kategori_berita = KategoriBerita_Model::all();
        $data = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('idBerita',$id)->first();
        return Inertia::render('Admin/Publikasi/EditDataBerita',[
            'berita' => $data,
            'kategori_berita' => $kategori_berita
        ]);
    }

    public function update(UpdateBeritaRequest $request, Berita_Model $berita)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        // Membuat slug dari Judul Berita
        $slug = Str::of($request->judul_berita)->snake();       

        $berita::find(request()->segment(4))->update([
            'kode_kecamatan' => $get_kd_kecamatan,
            'judul_berita' => $request->judul_berita,
            'slug_berita' =>$slug,
            'gambar_berita' => $request->gambar_berita,
            'isi_berita' => $request->isi_berita,
            'kategori_berita_id' => $request->kategori_berita_id,
            'penulis_berita' => $request->user()->id,
        ]);
        return redirect(route('AdminBerita'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id)
    {
        $berita =Berita_Model::find($id);
        $berita->delete();
        return redirect(route('AdminBerita'))->with('message','Data Berhasil Di Hapus');
    }
}
