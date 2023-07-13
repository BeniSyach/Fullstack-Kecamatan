<?php

namespace App\Http\Controllers;

use App\Models\Unduhan_Model;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Http\Response;

class UnduhanController extends Controller
{

    public function index()
    {

    }

    public function GetAllApi()
    {
        $kodeKecamatan = request()->segment(3);
        try {
            $listunduhan = Unduhan_Model::where('kode_kecamatan',$kodeKecamatan)->get();
            // $listunduhan = unduhan_Model::all();
            return response()->json($listunduhan, Response::HTTP_OK);
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
