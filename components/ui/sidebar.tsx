"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-maroon text-white h-full flex flex-col">
      <div className="p-4 text-center font-bold text-lg">Admin Dashboard</div>
      <nav className="flex-1">
        <ul className="space-y-2 p-4">
          <li>
            <Link href="/admin/overview" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/admin/posts" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/admin/categories" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Categories
            </Link>
          </li>
          <li>
            <Link href="/admin/pages" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/admin/comments" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Comments
            </Link>
          </li>
          <li>
            <Link href="/admin/media" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Media
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Settings
            </Link>
          </li>
          <li>
            <Link href="/admin/profile" className="block py-2 px-4 rounded hover:bg-white hover:text-maroon">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}