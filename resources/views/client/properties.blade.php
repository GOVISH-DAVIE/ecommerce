@extends('layouts.app')

@section('content') 
<div id="Properties" data-tk="{{ csrf_token() }}" data-Propertiesid="{{ $property }}">
</div>


@endsection