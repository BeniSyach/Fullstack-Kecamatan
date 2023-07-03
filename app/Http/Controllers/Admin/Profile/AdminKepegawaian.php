<?php

namespace App\Http\Controllers\Admin\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePegawaiRequest;
use App\Http\Requests\UpdatePegawaiRequest;
use App\Models\Kecamatan;
use App\Models\Kepegawaian_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminKepegawaian extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
       // ambil gambar slider melalui kode kecamatan
       $get_kepegawaian = Kepegawaian_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10);

        
        return Inertia::render('Admin/Profile/AdminKepegawaian',[
            'domain' => $domain,
            'status' => session('status'),
            'getKepegawaian' => $get_kepegawaian
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Profile/TambahDataPegawai');
    }

    public function store(StorePegawaiRequest $request)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $pegawai = new Kepegawaian_Model();
        $pegawai->kode_kecamatan = $get_kd_kecamatan;
        $pegawai->nama_pegawai=  $request->nama_pegawai;
        $pegawai->gambar_pegawai = $request->gambar_pegawai;
        $pegawai->jabatan_pegawai=  $request->jabatan_pegawai;
        $pegawai->motivasi_pegawai=  $request->motivasi_pegawai;
        $pegawai->link_facebook=  $request->link_facebook;
        $pegawai->link_instagram=  $request->link_instagram;
        $pegawai->link_twitter=  $request->link_twitter;
        $pegawai->save();
        return redirect(route('AdminKepegawaian'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Kepegawaian_Model::where('idKepegawaian',$id)->first();
        return Inertia::render('Admin/Profile/EditDataKepegawaian',[
            'pegawai' => $data
        ]);
    }

    public function update(UpdatePegawaiRequest $request, Kepegawaian_Model $pegawai)
    {
        $pegawai::find(request()->segment(4))->update([
            'nama_pegawai'=>  $request->nama_pegawai,
            'gambar_pegawai' => $request->gambar_pegawai,
            'jabatan_pegawai'=>  $request->jabatan_pegawai,
            'motivasi_pegawai'=>  $request->motivasi_pegawai,
            'link_facebook'=>  $request->link_facebook,
            'link_instagram'=>  $request->link_instagram,
            'link_twitter'=>  $request->link_twitter,
        ]);
        return redirect(route('AdminKepegawaian'))->with('message','Data Berhasil Diubah');
    }

    public function hapus($id)
    {
        $kecamatan =Kepegawaian_Model::find($id);
        $kecamatan->delete();
        return redirect(route('AdminKepegawaian'))->with('message','Data Berhasil Di Hapus');
    }
}
