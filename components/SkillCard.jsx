import Image from "next/image";

const SkillCard = ({ name, src }) => (
    <div className='flex items-center h-full p-4 border border-[#5651e5] hover:border-purple-500 hover:shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40 cursor-pointer'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={src} width='64px' height='64px' alt={name} />
            </div>
            <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>{name}</h3>
            </div>
        </div>
    </div>
);

export default SkillCard;