<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateDataKecamatannRequest;
use App\Models\Kecamatan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class Kontak_Kami extends Controller
{
    public function index(){
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();

        return Inertia::render('Admin/DataKecamatan',[
            'domain' => $domain,
        ]);
    }

    public function update(UpdateDataKecamatannRequest $request, Kecamatan $data_kecamatan)
    {
        $request->validated();

        $data_kecamatan::find(request()->segment(3))->update([
            'alamat'=> $request->alamat,
            'nohp'=> $request->nohp,
            'email'=> $request->email,
        ]);
        return redirect(route('data_kecamatan'))->with('message','Data Berhasil Di Ubah');
    }
}
