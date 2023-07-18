<?php

namespace App\Http\Controllers;

use App\Models\Agenda_Model;
use App\Models\Berita_Model;
use App\Models\Detail_Pelayanan_Model;
use App\Models\Kecamatan;
use App\Models\Pelayanan_Model;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class PelayananController extends Controller
{

    public function index()
    {

    }

    public function GetAllApi()
    {
        $kodeKecamatan = request()->segment(3);
        try {
            $listPelayanan = Pelayanan_Model::where('kode_kecamatan',$kodeKecamatan)->get();
            // $listPelayanan = Pelayanan_Model::all();
            return response()->json($listPelayanan, Response::HTTP_OK);
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function detail($slug)
    {
        // ambil url domain
        $GetDomain = FacadesRequest::getHost();
        $domain = Kecamatan::where('domain_kecamatan',$GetDomain)->first();
        // get kode Kecamatan
        $get_kd_kecamatan = $domain['kode_kecamatan'];   
        
        $get_id_pelayanan = Pelayanan_Model::where('slug_pelayanan',$slug)->first();
        $id_pelayanan = $get_id_pelayanan['idPelayanan'];

        $pelayanan = Detail_Pelayanan_Model::where('pelayanan_id',$id_pelayanan)->first();

        // ambil data berita menurut kode kecamatannya
        $get_berita = Berita_Model::join('tb_kategori_berita','tb_berita.kategori_berita_id','=','tb_kategori_berita.idKategoriBerita')->join('users','tb_berita.penulis_berita','=','users.id')->select('tb_berita.*','tb_kategori_berita.jenis_kategori_berita','users.name')->where('tb_berita.kode_kecamatan',$get_kd_kecamatan)->paginate(4);   
        $agenda = Agenda_Model::where('kode_kecamatan',$get_kd_kecamatan)->latest()->paginate(3);
        
        return Inertia::render('Pelayanan/Detail',[
            'judul'=>'Detail Pelayanan',
            'domain' => $domain,
            'pelayanan' => $pelayanan,
            'detail_berita' =>$get_berita,
            'agenda' => $agenda
        ]); 
    }
}
