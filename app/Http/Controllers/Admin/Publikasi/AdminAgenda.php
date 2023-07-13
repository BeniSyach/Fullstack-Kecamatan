<?php

namespace App\Http\Controllers\Admin\Publikasi;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAgendaRequest;
use App\Http\Requests\StoreWisataRequest;
use App\Http\Requests\UpdateAgendaRequest;
use App\Http\Requests\UpdateWisataRequest;
use App\Models\Agenda_Model;
use App\Models\Kecamatan;
use App\Models\Wisata_Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AdminAgenda extends Controller
{
    public function index(Request $request): Response
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];
        // get data wisata dengan kode kecamatan
        $agenda = Agenda_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(10); 

        return Inertia::render('Admin/Publikasi/AdminAgenda',[
            'domain' => $domain,
            'status' => session('status'),
            'agenda' => $agenda
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Publikasi/TambahDataAgenda');
    }

    public function store(StoreAgendaRequest $request)
    {
          // ambil url domain
          $GetDomain = FacadesRequest::getHost();
          $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
          // get kode Kecamatan
          $get_kd_kecamatan = $domain['kode_kecamatan'];
  
          // Membuat slug dari Judul Berita
          $slug = Str::of($request->judul_agenda)->snake();
  
          $berita = new Agenda_Model();
          $berita->kode_kecamatan = $get_kd_kecamatan;
          $berita->judul_agenda = $request->judul_agenda;
          $berita->slug_agenda =$slug;
          $berita->tanggal_agenda = $request->tanggal_agenda;
          $berita->isi_agenda = $request->isi_agenda;
          $berita->save();      
        return redirect(route('AdminAgenda'))->with('message','Data Berhasil Di Tambah');
    }

    public function edit($id)
    {
        $data = Agenda_Model::where('idAgenda',$id)->first();
        return Inertia::render('Admin/Publikasi/EditDataAgenda',[
            'agenda' => $data,
        ]);
    }

    public function update(UpdateAgendaRequest $request, Agenda_Model $wisata)
    {
         // ambil url domain
         $GetDomain = FacadesRequest::getHost();
         $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
         // get kode Kecamatan
         $get_kd_kecamatan = $domain['kode_kecamatan'];
 
         // Membuat slug dari Judul Berita
         $slug = Str::of($request->judul_agenda)->snake();       
 
         $wisata::find(request()->segment(4))->update([
             'kode_kecamatan' => $get_kd_kecamatan,
             'judul_agenda' => $request->judul_agenda,
             'slug_agenda' =>$slug,
             'tanggal_agenda' => $request->tanggal_agenda,
             'isi_agenda' => $request->isi_agenda,
         ]);
        return redirect(route('AdminAgenda'))->with('message','Data Berhasil Di Ubah');
    }

    public function hapus($id)
    {
        $agenda =Agenda_Model::find($id);
        $agenda->delete();
        return redirect(route('AdminAgenda'))->with('message','Data Berhasil Di Hapus');
    }
}
