<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWisataRequest;
use App\Http\Requests\UpdateWisataRequest;
use App\Models\Kecamatan;
use App\Models\Wisata_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AdminWisata extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // get data wisata dengan kode kecamatan
        $wisata = Wisata_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10); 

        return Inertia::render('Admin/Publikasi/AdminWisata',[
            'domain' => $domain,
            'status' => session('status'),
            'wisata' => $wisata
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Publikasi/TambahDataWisata');
    }

    public function store(StoreWisataRequest $request)
    {

        $request->validated();

          // ambil url domain
          $GetDomain = FacadesRequest::getHost();
          $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
          // get kode Kecamatan
          $get_kd_kecamatan = $domain['kode_kecamatan'];
  
          // Membuat slug dari Judul wisata
          $slug = Str::of($request->judul_wisata)->snake();

        // upload foto
        $imageName = time().'.'.$request->foto_wisata->extension();
        $uploadedImage = $request->foto_wisata->move(public_path('images/foto_wisata/'), $imageName);
        $imagePath = 'images/foto_wisata/' . $imageName;  
  
          $wisata = new Wisata_Model();
          $wisata->kode_kecamatan = $get_kd_kecamatan;
          $wisata->judul_wisata = $request->judul_wisata;
          $wisata->slug_wisata =$slug;
          $wisata->foto_wisata = $imagePath;
          $wisata->deskripsi_wisata = $request->deskripsi_wisata;
          $wisata->konten_wisata = $request->konten_wisata;
          $wisata->save();      
        return redirect(route('AdminWisata'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Wisata_Model::where('idWisata',$id)->first();
        return Inertia::render('Admin/Publikasi/EditDataWisata',[
            'wisata' => $data,
        ]);
    }

    public function update(UpdateWisataRequest $request, Wisata_Model $wisata)
    {
        $request->validated();

         // ambil url domain
         $GetDomain = FacadesRequest::getHost();
         $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
         // get kode Kecamatan
         $get_kd_kecamatan = $domain['kode_kecamatan'];
 
         // Membuat slug dari Judul Berita
         $slug = Str::of($request->judul_wisata)->snake();       

          // Hapus Gambar Berita Sebelumnya
        $hapus_gambar=Wisata_Model::find(request()->segment(4));
        unlink($hapus_gambar->foto_wisata);

         // upload gambar Baru
         $imageName = time().'.'.$request->foto_wisata->extension();
         $uploadedImage = $request->foto_wisata->move(public_path('images/foto_wisata/'), $imageName);
         $imagePath = 'images/foto_wisata/' . $imageName;       
 
         $wisata::find(request()->segment(4))->update([
             'kode_kecamatan' => $get_kd_kecamatan,
             'judul_wisata' => $request->judul_wisata,
             'slug_berita' =>$slug,
             'foto_wisata' => $imagePath,
             'deskripsi_wisata' => $request->deskripsi_wisata,
             'konten_wisata' => $request->konten_wisata
         ]);
        return redirect(route('AdminWisata'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id)
    {
        $wisata =Wisata_Model::find($id);
        $wisata->delete();
        return redirect(route('AdminWisata'))->with('message','Data Berhasil Di Hapus');
    }
}
