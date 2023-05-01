import React from "react";
import logo from "../prohealth-logo.png"


function Navigation() {


  return (
    // <!-- Sidenav -->
<div>
<ul class="flex border-b border-gray-500">
<div className="justify-start mr-5">
    <a href="https://prohealthptot.com/">
    <img className="w-16 h-16" src={logo} alt="logo"/>
    </a>
</div>
  <li class="mt-6 mr-1">
    <a class="bg-white inline-block border-gray-500 border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/">Home</a>
  </li>
  <li class="mt-6 mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/PTOT">Physical and Occupational therapy-PDF</a>
  </li>
  <li class="mt-6 mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/APOS">APOS-PDF</a>
  </li>
  <li class="mt-6 mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" href="/Auth">Auth-PDF</a>
  </li>
  <li class="mt-6 mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" href="/Other">Single-PDF</a>
  </li>
  <form class="flex">
    <input class="mt-8 mr-3 border rounded border-blue-500 h-7 p-1 text-left border-2" type="search" placeholder="Search PDF..." />
    <input class="mt-6 mr-1 p-1 border border-blue-500 border-2 rounded text-blue-600 font-semibold" type="submit"/>
  </form>
</ul>
</div>
  )
}

export default Navigation