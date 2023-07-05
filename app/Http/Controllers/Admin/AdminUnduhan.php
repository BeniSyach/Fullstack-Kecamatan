<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreListKecamatanRequest;
use App\Http\Requests\UpdateKecamatanRequest;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminUnduhan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_all_kecamatan = Kecamatan::latest()->paginate(10);

        
        return Inertia::render('Admin/ListKecamatan',[
            'domain' => $domain,
            'status' => session('status'),
            'getAllKecamatan' => $get_all_kecamatan
        ]);
    }

    public function create(){
        return Inertia::render('Admin/TambahDataKecamatan');
    }

    public function store(StoreListKecamatanRequest $request){

        $kecamatan = new Kecamatan();
        $kecamatan->judul_website = $request->judul_website;
        $kecamatan->domain_kecamatan = $request->domain_kecamatan;
        $kecamatan->kode_kecamatan = $request->kode_kecamatan;
        $kecamatan->save();
        return redirect(route('listKecamatan'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id){
        $data = Kecamatan::where('idDomain',$id)->first();
        return Inertia::render('Admin/EditDataKecamatan',[
            'kecamatan' => $data
        ]);
    }

    public function update(UpdateKecamatanRequest $request, Kecamatan $kecamatan){
        $kecamatan::find(request()->segment(4))->update([
            'domain_kecamatan' => $request->domain_kecamatan,
            'kode_kecamatan' => $request->kode_kecamatan,
            'judul_website' => $request->judul_website
        ]);
        return redirect(route('listKecamatan'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id){
        $kecamatan =Kecamatan::find($id);
        $kecamatan->delete();
        return redirect(route('listKecamatan'))->with('message','Data Berhasil Di Hapus');
    }
}
