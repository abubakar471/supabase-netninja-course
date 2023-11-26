import Link from "next/link"

const SmoothieCard = ({ smoothie }) => {
    return (
        <div className="bg-white shadow-lg rounded-md p-4 w-[300px] h-[200px]">
            <div>{smoothie?.title}</div>
            <div>{smoothie?.method}</div>
            <div>{smoothie?.ratings}</div>

            <Link href={`/update/${smoothie.id}`}>Edit</Link>
        </div>
    )
}

export default SmoothieCard