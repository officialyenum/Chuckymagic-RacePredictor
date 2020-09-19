@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <canvas id="canvas"></canvas>
        {{-- <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div> --}}
    </div>
</div>
@endsection

@section('script')
{{-- <script src="{{ asset('js/controller.js')}}"></script> --}}
    <script src="{{ asset('js/dist/createjs.min.js')}}"></script>
    <script type = "text/javascript">
        let sources = ["utilities","CText","CButton","CPlayer","CGame","CMain"];
        for (let index = 0; index < sources.length; index++) {
            let script = document.createElement("script");
            script.setAttribute("type", "text/javascript");
            script.setAttribute("src", `{{ asset('js/${sources[index]}.js')}}`);
            document.head.appendChild(script);
        }
    </script>
@endsection
