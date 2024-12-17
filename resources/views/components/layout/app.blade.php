<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Finsweet | {{ $title ?? 'Finsweet' }}</title>
    @vite('resources/css/app.css')
</head>

<body class="bg-white">

    {{-- Navbar --}}
    <x-layout.navbar></x-layout.navbar>


    {{-- main section --}}
    <main>
        {{ $slot }}
    </main>

    {{-- Footer --}}


    {{-- JS --}}
    <script src="{{ asset('asset/js/script.js') }}"></script>

    {{-- Ionics Icons --}}
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>
