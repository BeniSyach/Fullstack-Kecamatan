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
        return Inertia::render('Admin/TambahListPelayanan');
    }

    public function store(StoreListPelayananRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $slug = Str::of($request->judul_pelayanan)->snake();  

        $pelayanan = new Pelayanan_Model();
        $pelayanan->kode_kecamatan = $get_kd_kecamatan;
        $pelayanan->judul_pelayanan = $request->judul_pelayanan;
        $pelayanan->slug_pelayanan = $slug;
        $pelayanan->save();

        $get_id_latest = Pelayanan_Model::latest()->first();
        $id_terakhir = $get_id_latest['idPelayanan'];

        $detail_pelayanan = new Detail_Pelayanan_Model();
        $detail_pelayanan->kode_kecamatan = $get_kd_kecamatan;
        $detail_pelayanan->pelayanan_id = $id_terakhir;
        $detail_pelayanan->gambar_pelayanan = "Belum Ada Konten/gambar";
        $detail_pelayanan->konten_pelayanan = "Belum Ada Konten/gambar";
        $detail_pelayanan->save();

        return redirect(route('AdminPelayanan'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Pelayanan_Model::where('idPelayanan',$id)->first();
        return Inertia::render('Admin/EditListPelayanan',[
            'ListPelayanan' => $data
        ]);
    }

    public function update(UpdatePelayananRequest $request, Pelayanan_Model $pelayanan){
        $slug = Str::of($request->judul_pelayanan)->snake();  

        $pelayanan::find(request()->segment(4))->update([
            'judul_pelayanan' => $request->judul_pelayanan,
            'slug_pelayanan' => $slug
        ]);
        return redirect(route('AdminPelayanan'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id){
        $detailPelayanan = Detail_Pelayanan_Model::where('pelayanan_id',$id);
        $detailPelayanan->delete();
        $pelayanan =Pelayanan_Model::find($id);
        $pelayanan->delete();
        return redirect(route('AdminPelayanan'))->with('message','Data Berhasil Di Hapus');
    }

    public function detail_edit($id)
    {
        $data = Detail_Pelayanan_Model::where('pelayanan_id',$id)->first();
        return Inertia::render('Admin/EditDetailListPelayanan',[
            'ListDetailPelayanan' => $data
        ]);
    }

    public function update_detail(UpdatePelayananRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $detail_pelayanan = new Detail_Pelayanan_Model();
        $detail_pelayanan->kode_kecamatan = $get_kd_kecamatan;
        $detail_pelayanan->judul_pelayanan = $request->judul_pelayanan;
        $detail_pelayanan->save();

        return redirect(route('AdminPelayanan'))->with('message','Data Berhasil Di Ubah');
    }
}
