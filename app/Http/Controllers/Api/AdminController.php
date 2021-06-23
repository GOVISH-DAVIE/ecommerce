<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Properties;
use CreatePropertiesTable;
use Illuminate\Http\Request;
use Illuminate\Http\File;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  upload images 
     */

    public function uploadImages()
    {
        # code...
        $images = array();
        if (isset($_FILES['files'])) {
          
                foreach ($_FILES['files']['name'] as $file => $value) {

                    Storage::putFileAs('public/', new File($_FILES["files"]["tmp_name"][$file]),  STR::random(10) . time() . '.' . pathinfo($_FILES["files"]["name"][$file], PATHINFO_EXTENSION));
                    array_push($images, STR::random(10) . time() . '.' . pathinfo($_FILES["files"]["name"][$file], PATHINFO_EXTENSION));
                }
                return json_encode($images);
            
            # code...

        } else {
            return false;
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return  $this->uploadImages();
        $s = new Properties();
        $s->amount = $request->input('amount');
        $s->images = $this->uploadImages();
        $s->Title = $request->input('title');
        $s->finalimage = $this->uploadFinalImage($request);
        $s->save();
        return json_encode( array('data' => 'success' ));
    }


    public function uploadFinalImage($request)
    {

        if ($request->hasFile('finalPrint')) {
            if ($_FILES['finalPrint']['error']) {
                # code...
                return false;
            } else {
                // Get file name with the extension
                $filenameWithExt = $request->file('finalPrint')->getClientOriginalName();
                //  Get just filename
                $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
                //  Get just ext
                $extension = $request->file('finalPrint')->getClientOriginalExtension();
                // file name to store
                $fileNameToStore = Str::random(10) . '_' . time() . '.' . $extension;
                // Upload Image
                $path = $request->file('finalPrint')->storeAs('public', $fileNameToStore);
                return $fileNameToStore;
            }
        } else {
            return false;
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
