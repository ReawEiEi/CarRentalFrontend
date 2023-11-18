import styles from './productcard.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';

export default function ProductCard({ carName, imgSrc, onCompare }: { carName: string, imgSrc: string, onCompare?: Function }) {

    return (
        <InteractiveCard contentName={carName}>
            <div className='w-full h-[70%] relative rounded-t-lg '>
                <Image src={imgSrc}
                    alt={'Product Picture'}
                    fill={true}
                    className='object-cover rounded-t-lg' />
            </div>
            <div className='w-full h-[15%] p-[10px] text-black'>
                {carName}
            </div>
            {
                onCompare ? <button className='block text-sm h-[10%] rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 shadow-sm text-white'
                    onClick={(e) => { e.stopPropagation(); e.preventDefault(); onCompare(carName) }}>Compare</button>
                    : ''
            }

        </InteractiveCard>
    );
}