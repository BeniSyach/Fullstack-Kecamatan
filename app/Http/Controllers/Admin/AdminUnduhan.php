<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreListUnduhanRequest;
use App\Http\Requests\UpdateUnduhanRequest;
use App\Models\Detail_Unduhan_Model;
use App\Models\Kecamatan;
use App\Models\Unduhan_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AdminUnduhan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_all_unduhan = Unduhan_Model::latest()->paginate(10);

        
        return Inertia::render('Admin/ListUnduhan',[
            'domain' => $domain,
            'status' => session('status'),
            'getAllUnduhan' => $get_all_unduhan
        ]);
    }

    public function create(){
        return Inertia::render('Admin/TambahListUnduhan');
    }

    public function store(StoreListUnduhanRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $slug = Str::of($request->judul_unduhan)->snake();  

        $unduhan = new Unduhan_Model();
        $unduhan->kode_kecamatan = $get_kd_kecamatan;
        $unduhan->judul_unduhan = $request->judul_unduhan;
        $unduhan->slug_unduhan = $slug;
        $unduhan->save();

        $get_id_latest = Unduhan_Model::latest()->first();
        $id_terakhir = $get_id_latest['idUnduhan'];

        $detail_unduhan = new Detail_Unduhan_Model();
        $detail_unduhan->kode_kecamatan = $get_kd_kecamatan;
        $detail_unduhan->unduhan_id = $id_terakhir;
        $detail_unduhan->dokumen = "Belum Ada Konten/gambar";
        $detail_unduhan->jumlah_unduhan = 0;
        $detail_unduhan->save();

        return redirect(route('AdminUnduhan'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Unduhan_Model::where('idUnduhan',$id)->first();
        return Inertia::render('Admin/EditListunduhan',[
            'Listunduhan' => $data
        ]);
    }

    public function update(UpdateUnduhanRequest $request, Unduhan_Model $unduhan){
        $slug = Str::of($request->judul_unduhan)->snake();  

        $unduhan::find(request()->segment(4))->update([
            'judul_unduhan' => $request->judul_unduhan,
            'slug_unduhan' => $slug
        ]);
        return redirect(route('AdminUnduhan'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id){
        $detailunduhan = Detail_Unduhan_Model::where('unduhan_id',$id);
        $detailunduhan->delete();
        $unduhan =Unduhan_Model::find($id);
        $unduhan->delete();
        return redirect(route('AdminUnduhan'))->with('message','Data Berhasil Di Hapus');
    }

    public function detail_edit($id)
    {
        $data = Detail_Unduhan_Model::where('unduhan_id',$id)->first();
        return Inertia::render('Admin/EditDetailListunduhan',[
            'ListDetailunduhan' => $data
        ]);
    }

    public function update_detail(UpdateUnduhanRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $detail_unduhan = new Detail_Unduhan_Model();
        $detail_unduhan->kode_kecamatan = $get_kd_kecamatan;
        $detail_unduhan->judul_unduhan = $request->judul_unduhan;
        $detail_unduhan->save();

        return redirect(route('AdminUnduhan'))->with('message','Data Berhasil Di Ubah');
    }
}
