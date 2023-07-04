<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Models\Kecamatan;
use App\Models\Video_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;

class AdminVideoKegiatan extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];

        $video = Video_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10);
        
        return Inertia::render('Admin/Publikasi/AdminVideoKegiatan',[
            'domain' => $domain,
            'status' => session('status'),
            'video' => $video
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Publikasi/TambahDataVideo');
    }

    public function store(StoreVideoRequest $request)
    {

    }

    public function edit($id)
    {

    }

    public function update(UpdateVideoRequest $request, Video_Model $video)
    {

    }

    public function hapus($id)
    {
        
    }
}
