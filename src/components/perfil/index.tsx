import Link from "next/link";

interface LabelProps {
    id:string;
    img: string;
    name: string;
}
export function Perfil({ id, img, name }: LabelProps) {
    return (
        
        <div className="group flex flex-col items-center perspective">
            <Link href={`/${id}`}>
                <div className="w-32 h-32 border-2 border-blue-950 rounded-full overflow-hidden transform group-hover:-rotateY-180 transition-all duration-300 relative">
                    <div className="w-full h-full transform rotateY-0">
                        <img src={img} alt={name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="w-full h-full transform rotateY-180 absolute inset-0 flex items-center justify-center text-center font-bold bg-white text-blue-950 opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                        {name}
                    </div>
                </div>
            </Link>

        </div>




    )
}