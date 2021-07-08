@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="row ">
 
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col">User Email</th>
                <th scope="col">Amount</th>
                <th scope="col">View Property</th>
                <th scope="col">Property Title</th>
              </tr>
            </thead>
            <tbody>
             @foreach ($orders as $item)
             <tr>
                <th scope="row">1</th>
                <td>{{$item->user->name}}</td>
                <td>{{ $item->user->email}}</td>
                <td>{{$item->amount }}</td>
                <td>
                <a href="/index/{{$item->property_id }}" class="btn btn-primary"> view</a>
                </td>
                <td>{{$item->property->Title }}</td>
              </tr> 
             @endforeach
            </tbody>
          </table>

        </div>
    </div>
@endsection
