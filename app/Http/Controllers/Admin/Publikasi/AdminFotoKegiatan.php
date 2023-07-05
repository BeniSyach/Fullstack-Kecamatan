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
        return redirect(route('AdminFotoKegiatan'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id)
    {
        $foto =Foto_Model::find($id);
        $foto->delete();
        return redirect(route('AdminFotoKegiatan'))->with('message','Data Berhasil Di Hapus');
    }
}
