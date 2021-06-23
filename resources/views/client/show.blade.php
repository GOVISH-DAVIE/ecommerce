@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="row ">

            <div class=" col-md-8">
                <div id="ShowItem" data-ShowItemid="{{ $property }}"></div>
            </div>
            <div class=" col-md-4">
                <div id="ShowPayment" data-AuthData="{{ auth()->user() }}" data-ShowPaymentid="{{ $property }}"></div>

            </div>
        </div>
    </div>
@endsection
