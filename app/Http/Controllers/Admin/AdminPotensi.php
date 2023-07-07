<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreListKecamatanRequest;
use App\Http\Requests\StoreListPotensiRequest;
use App\Http\Requests\UpdateKecamatanRequest;
use App\Http\Requests\UpdatePotensiRequest;
use App\Models\Detail_Potensi_Model;
use App\Models\Kecamatan;
use App\Models\Potensi_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AdminPotensi extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_all_potensi = Potensi_Model::latest()->paginate(10);

        
        return Inertia::render('Admin/ListPotensi',[
            'domain' => $domain,
            'status' => session('status'),
            'getAllPotensi' => $get_all_potensi
        ]);
    }

    public function create(){
        return Inertia::render('Admin/TambahListPotensi');
    }

    public function store(StoreListPotensiRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $slug = Str::of($request->judul_potensi)->snake();  

        $potensi = new Potensi_Model();
        $potensi->kode_kecamatan = $get_kd_kecamatan;
        $potensi->judul_potensi = $request->judul_potensi;
        $potensi->slug_potensi = $slug;
        $potensi->save();

        $get_id_latest = Potensi_Model::latest()->first();
        $id_terakhir = $get_id_latest['idPotensi'];

        $detail_potensi = new Detail_Potensi_Model();
        $detail_potensi->kode_kecamatan = $get_kd_kecamatan;
        $detail_potensi->potensi_id = $id_terakhir;
        $detail_potensi->gambar_potensi = "Belum Ada Konten/gambar";
        $detail_potensi->konten_potensi = "Belum Ada Konten/gambar";
        $detail_potensi->save();

        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Potensi_Model::where('idPotensi',$id)->first();
        return Inertia::render('Admin/EditListPotensi',[
            'ListPotensi' => $data
        ]);
    }

    public function update(UpdatePotensiRequest $request, Potensi_Model $potensi){
        $slug = Str::of($request->judul_potensi)->snake();  

        $potensi::find(request()->segment(4))->update([
            'judul_potensi' => $request->judul_potensi,
            'slug_potensi' => $slug
        ]);
        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id){
        $detailPotensi = Detail_Potensi_Model::where('potensi_id',$id);
        $detailPotensi->delete();
        $potensi =Potensi_Model::find($id);
        $potensi->delete();
        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Hapus');
    }

    public function detail_edit($id)
    {
        $data = Detail_Potensi_Model::where('potensi_id',$id)->first();
        return Inertia::render('Admin/EditDetailListPotensi',[
            'ListDetailPotensi' => $data
        ]);
    }

    public function update_detail(UpdatePotensiRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $detail_potensi = new Detail_Potensi_Model();
        $detail_potensi->kode_kecamatan = $get_kd_kecamatan;
        $detail_potensi->judul_potensi = $request->judul_potensi;
        $detail_potensi->save();

        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Ubah');
    }
}
