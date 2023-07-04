<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWisataRequest;
use App\Http\Requests\UpdateWisataRequest;
use App\Models\Kecamatan;
use App\Models\Wisata_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminWisata extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // get data wisata dengan kode kecamatan
        $wisata = Wisata_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10); 

        return Inertia::render('Admin/Publikasi/AdminWisata',[
            'domain' => $domain,
            'status' => session('status'),
            'wisata' => $wisata
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Publikasi/AdminVideoKegiatan');
    }

    public function store(StoreWisataRequest $request)
    {

    }

    public function edit($id)
    {

    }

    public function update(UpdateWisataRequest $request, Wisata_Model $video)
    {

    }

    public function hapus($id)
    {
        
    }
}
