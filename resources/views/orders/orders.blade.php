@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="row ">

          {{json_encode($orders)}}

        </div>
    </div>
@endsection
