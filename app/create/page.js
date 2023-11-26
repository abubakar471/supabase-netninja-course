"use client"

import supabase from "@/config/supabaseClient";

const { useState } = require("react")

const Page = () => {
    const [title, setTitle] = useState("");
    const [method, setMethod] = useState("");
    const [ratings, setRatings] = useState("");
    const [formError, setFormError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase.from("smoothies").insert([{ title, method, ratings }]);
        // now if u want to get the updated version than you can simply run this instead of the above
        // const { data, error } = await supabase.from("smoothies").insert([{ title, method, ratings }]).select();
        // the above line of comment because supabase by default not return the updated error , so we have to call it back

        if (error) {
            setFormError("something went wrong while submitting form");
            console.log("error in submit form : ", error);
        }


        setFormError(null);
        setTitle("");
        setMethod("");
        setRatings("");
        alert("done adding");

    }

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <form onSubmit={handleSubmit} className="flex flex-col w-[600px] bg-white  rounded-md shadow-lg p-4">
                <input className="p-2 rounded-sm border outline-none my-2" type="text" id="title" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="p-2 rounded-sm border outline-none my-2" type="text" id="method" placeholder="method" value={method} onChange={(e) => setMethod(e.target.value)} />
                <input className="p-2 rounded-sm border outline-none my-2" type="text" id="ratings" placeholder="ratings" value={ratings} onChange={(e) => setRatings(e.target.value)} />
                <button type="submit">create</button>
                {formError && (<p>{formError}</p>)}
            </form>
        </div>
    )
}

export default Page