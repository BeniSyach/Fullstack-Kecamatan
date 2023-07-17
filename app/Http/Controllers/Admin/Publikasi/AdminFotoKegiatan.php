<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFotoRequest;
use App\Http\Requests\UpdateFotoRequest;
use App\Models\Foto_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminFotoKegiatan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // get data foto dengan kode kecamatan
        $foto = Foto_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10);

        
        return Inertia::render('Admin/Publikasi/AdminFotoKegiatan',[
            'domain' => $domain,
            'status' => session('status'),
            'foto' => $foto
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Publikasi/TambahFotoKegiatan');
    }

    public function store(StoreFotoRequest $request)
    {
        $request->validated();
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        // upload foto
         $imageName = time().'.'.$request->foto->extension();
         $uploadedImage = $request->foto->move(public_path('images/foto_kegiatan/'), $imageName);
         $imagePath = 'images/foto_kegiatan/' . $imageName;          

        $foto = new Foto_Model();
        $foto->kode_kecamatan = $get_kd_kecamatan;
        $foto->judul_foto_kegiatan = $request->judul_foto_kegiatan;
        $foto->foto = $imagePath;
        $foto->save();
        return redirect(route('AdminFotoKegiatan'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Foto_Model::where('idFoto',$id)->first();
        return Inertia::render('Admin/Publikasi/EditFotoKegiatan',[
            'foto' => $data,
        ]);
    }

    public function update(UpdateFotoRequest $request, Foto_Model $foto)
    {
        $request->validated();

        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];      

         // Hapus Foto Sebelumnya
         $hapus_foto=Foto_Model::find(request()->segment(4));
         unlink($hapus_foto->foto);
 
          // upload foto Baru
          $imageName = time().'.'.$request->foto->extension();
          $uploadedImage = $request->foto->move(public_path('images/foto_kegiatan/'), $imageName);
          $imagePath = 'images/foto_kegiatan/' . $imageName;       

        $foto::find(request()->segment(4))->update([
            'kode_kecamatan' => $get_kd_kecamatan,
            'judul_foto_kegiatan' => $request->judul_foto_kegiatan,
            'foto' =>  $imagePath,
        ]);
        return redirect(route('AdminFotoKegiatan'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id)
    {
        $foto =Foto_Model::find($id);
        unlink($foto->foto);
        $foto->delete();
        return redirect(route('AdminFotoKegiatan'))->with('message','Data Berhasil Di Hapus');
    }
}
