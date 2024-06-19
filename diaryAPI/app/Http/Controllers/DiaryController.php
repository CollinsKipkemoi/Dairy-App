<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Diary;
use Illuminate\Http\Request;
use App\Http\Resources\DiaryResource;

class DiaryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $diaries = Diary::all();
        return response()->json($diaries);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'diaryTitle' => 'required',
            'diaryDate' => 'required | date',
            'diaryText' => 'required | max:1000',
        ]);

        $diary = Diary::create($validatedData);

        return new DiaryResource($diary);
    }

    /**
     * Display the specified resource.
     */
    public function show(Diary $diary)
    {
        return new DiaryResource($diary);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Diary $diary)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Diary $diary)
    {
        $validatedData = $request->validate([
            'diaryTitle' => 'required',
            'diaryDate' => 'required | date',
            'diaryText' => 'required | max:1000',
        ]);

        $diary->update($validatedData);

        return new DiaryResource($diary);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Diary $diary)
    {
        //
    }
}
