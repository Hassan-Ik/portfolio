"use client";
import { navItems } from "@/data";
import { useEffect, useState} from "react";
import Link from 'next/link';

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Footer from "@/components/Footer";
import { getOS } from "@/lib/utils";

type Blog = {
    id: number;
    title: string;
    description: string;
    slug: string;
  };

  const Blogs = () => {

    const [blogs, setBlogs] =  useState<Blog[]>([]);
    const [search, setSearch] = useState("");
    const [filteredBlogs, setFilteredBlogs] =  useState<Blog[]>([]);

      
    useEffect(() => {

        const fetchData = async () => {
            try {
                // local server url
                let req_url;
                if(getOS() == "Windows") {
                    req_url = "http://localhost:3000/blogs.json"
                } else {

                    req_url = "https://hassan-portfolio-seven.vercel.app/blogs.json"
                }

                console.log(getOS())
                const res = await fetch(req_url); // Adjust the path as needed
                const data = await res.json();
                setBlogs(data)
                console.log(data); // Do something with the data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);
    
    useEffect(() => {
        const results = blogs.length > 0 
            ? blogs.filter((blog) => blog.title?.toLowerCase().includes(search.toLowerCase())) 
            : [];
        setFilteredBlogs(results);
      }, [search, blogs]);
    
    return (
        <main className="relative bg-slate-900 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-10xl w-full">
                <FloatingNav navItems={navItems} />
                <div className="max-w-2xl mx-auto p-6">
                <h1 className="text-3xl font-bold mt-12 mb-4 text-center">My Blogs</h1>
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 pl-4 mb-4 text-gray-700 bg-slate-950 border border-x-2 border-y-2 border-purple-900 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                <ul className="space-y-4">
                    {filteredBlogs.length > 0 ? (
                    filteredBlogs.map((blog) => (
                        <li key={blog.id} className="p-4 border rounded-md border-purple-600 shadow-md">
                        <Link href={`/blogs/${blog.slug}`} className="text-xl font-semibold text-white hover:underline">
                            {blog.title}
                        </Link>
                        <p className="text-gray-400">{blog.description}</p>
                        </li>
                    ))
                    ) : (
                    <p className="text-gray-400">No blogs found.</p>
                    )}
                </ul>
                </div>
                <Footer />
            </div>
        </main>
    );
}


export default Blogs;