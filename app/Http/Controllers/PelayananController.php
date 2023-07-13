<?php

namespace App\Http\Controllers;

use App\Models\Pelayanan_Model;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Http\Response;

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

    public function detail()
    {
        
    }
}
