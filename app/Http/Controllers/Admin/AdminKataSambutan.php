<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateKataSambuatanRequest;
use App\Models\KataSambutan_Model;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminKataSambutan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        $get_kataSambutan = KataSambutan_Model::where('kode_kecamatan',$get_kd_kecamatan)->first();

     
        
        return Inertia::render('Admin/AdminKataSambuatan',[
            'domain' => $domain,
            'status' => session('status'),
            'getKataSambutan' => $get_kataSambutan
        ]);
    }

    public function update(UpdateKataSambuatanRequest $request, KataSambutan_Model $kata_sambutan)
    {
        $request->validated();

        $hapus_gambar_camat=KataSambutan_Model::find(request()->segment(3));
        unlink($hapus_gambar_camat->gambar_camat);

        $imageName = time().'.'.$request->gambar_camat->extension();
        $uploadedImage = $request->gambar_camat->move(public_path('images'), $imageName);
        $imagePath = 'images/' . $imageName;

        $kata_sambutan::find(request()->segment(3))->update([
            'nama_kepala_camat'=> $request->nama_kepala_camat,
            'gambar_camat'=> $imagePath,
            'judul_kataSambutan'=> $request->judul_kataSambutan,
            'isi_kataSambutan'=> $request->isi_kataSambutan,
        ]);
        return redirect(route('AdminKataSambutan'))->with('message','Data Berhasil Di Ubah');
    }

    public function storeImage(Request $request)
    {
        if ($request->file('upload')) {
            $GetDomain = FacadesRequest::getHost();
            $imageName = time().'.'.$request->file('upload')->extension();
            $uploadedImage = $request->file('upload')->move(public_path('images'), $imageName);
            $imagePath ='http://'.$GetDomain. ':8000/images/' . $imageName;
    
            return response()->json(['fileName' =>  $imageName, 'uploaded'=> 1, 'url' => $imagePath]);
        }
        return response()->json(['message' => 'File upload failed'], 400);    
    }

    public function getTokenCSRF()
    {
        $csrfToken = csrf_token();

    }
}