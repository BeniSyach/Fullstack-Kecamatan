<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreListKecamatanRequest;
use App\Http\Requests\StoreListPelayananRequest;
use App\Http\Requests\UpdateKecamatanRequest;
use App\Http\Requests\UpdatePelayananRequest;
use App\Models\Detail_Pelayanan_Model;
use App\Models\Kecamatan;
use App\Models\Pelayanan_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AdminPelayanan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_all_pelayanan = Pelayanan_Model::latest()->paginate(10);

        
        return Inertia::render('Admin/ListPelayanan',[
            'domain' => $domain,
            'status' => session('status'),
            'getAllPelayanan' => $get_all_pelayanan
        ]);
    }

    public function create(){
        return Inertia::render('Admin/TambahListPotensi');
    }

    public function store(StoreListPelayananRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $slug = Str::of($request->judul_potensi)->snake();  

        $potensi = new Pelayanan_Model();
        $potensi->kode_kecamatan = $get_kd_kecamatan;
        $potensi->judul_potensi = $request->judul_potensi;
        $potensi->slug_potensi = $slug;
        $potensi->save();

        $get_id_latest = Pelayanan_Model::latest()->first();
        $id_terakhir = $get_id_latest['idPotensi'];

        $detail_potensi = new Detail_Pelayanan_Model();
        $detail_potensi->kode_kecamatan = $get_kd_kecamatan;
        $detail_potensi->potensi_id = $id_terakhir;
        $detail_potensi->gambar_potensi = "Belum Ada Konten/gambar";
        $detail_potensi->konten_potensi = "Belum Ada Konten/gambar";
        $detail_potensi->save();

        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Pelayanan_Model::where('idPotensi',$id)->first();
        return Inertia::render('Admin/EditListPotensi',[
            'ListPotensi' => $data
        ]);
    }

    public function update(UpdatePelayananRequest $request, Pelayanan_Model $potensi){
        $slug = Str::of($request->judul_potensi)->snake();  

        $potensi::find(request()->segment(4))->update([
            'judul_potensi' => $request->judul_potensi,
            'slug_potensi' => $slug
        ]);
        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id){
        $detailPotensi = Detail_Pelayanan_Model::where('potensi_id',$id);
        $detailPotensi->delete();
        $potensi =Pelayanan_Model::find($id);
        $potensi->delete();
        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Hapus');
    }

    public function detail_edit($id)
    {
        $data = Detail_Pelayanan_Model::where('potensi_id',$id)->first();
        return Inertia::render('Admin/EditDetailListPotensi',[
            'ListDetailPotensi' => $data
        ]);
    }

    public function update_detail(UpdatePelayananRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $detail_potensi = new Detail_Pelayanan_Model();
        $detail_potensi->kode_kecamatan = $get_kd_kecamatan;
        $detail_potensi->judul_potensi = $request->judul_potensi;
        $detail_potensi->save();

        return redirect(route('AdminPotensi'))->with('message','Data Berhasil Di Ubah');
    }
}
