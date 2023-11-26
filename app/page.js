"use client"

import SmoothieCard from '@/components/SmoothieCard';
import supabase from '@/config/supabaseClient'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from('smoothies').select();

      if (error) {
        setFetchError("could not fetch the smoothies");
        setSmoothies(null);
        console.log("error fetching smoothies : ", smoothies);
      }

      if (data) {
        console.log(data)
        setSmoothies(data);
        setFetchError(null);
      }
    }

    fetchSmoothies();
  }, [])


  return (
    <div>
      <h1>home page {">"} </h1>
      <div>
        {fetchError && (<p>{fetchError}</p>)}

        <div className='flex items-center justify-evenly w-full'>
          {smoothies && (
            smoothies.map((smoothie) => (
              <SmoothieCard key={smoothie._id} smoothie={smoothie} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
