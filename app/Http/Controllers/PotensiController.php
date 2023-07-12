<?php

namespace App\Http\Controllers;

use App\Models\Potensi_Model;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PotensiController extends Controller
{
    public function index()
    {

    }

    public function GetAllApi()
    {
        $kodeKecamatan = request()->segment(3);
        try {
            $listPotensi = Potensi_Model::where('kode_kecamatan',$kodeKecamatan)->get();
            // $listPotensi = Potensi_Model::all();
            return response()->json($listPotensi, Response::HTTP_OK);
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
