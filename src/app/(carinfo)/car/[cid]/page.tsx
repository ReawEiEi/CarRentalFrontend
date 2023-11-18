import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"

export default async function CarDetailPage({ params }: { params: { cid: string } }) {

    const carDetail = await getCar(params.cid)
    /*
    Mock Data for Demonstration Only 
    */
    /*
    const mockCarRepo = new Map()
    mockCarRepo.set("001", { name: "Honda Civic", image: "/img/civic.jpg" })
    mockCarRepo.set("002", { name: "Honda Accord", image: "/img/accord.jpg" })
    mockCarRepo.set("003", { name: "Toyota Fortuner", image: "/img/fortuner.jpg" })
    mockCarRepo.set("004", { name: "Tesla Model 3", image: "/img/tesla.jpg" })
    */
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium text-black">{carDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={carDetail.data.picture} alt="Product Picture" width={0} height={0} sizes="100vw" className="rounded-lg w-[30%] bg-black" />
                <div className="text-md mx-5 text-black text-left">{carDetail.data.description}</div>
                <div className="text-md mx-5 text-black">Doors: {carDetail.data.doors}</div>
                <div className="text-md mx-5 text-black">Seats: {carDetail.data.seats}</div>
                <div className="text-md mx-5 text-black">Large Bags: {carDetail.data.largebags}</div>
                <div className="text-md mx-5 text-black">Small Bags: {carDetail.data.smallbags}</div>
                <div className="text-md mx-5 text-black">Daily Rental Rate: {carDetail.data.dayRate} (insurance included)</div>
                <Link href={`/reservations?id${params.cid}&model=${carDetail.data.model}`}>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1">
                        Make Reservation
                    </button>
                </Link>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{ cid: '001' }, { cid: '002' }, { cid: '003' }, { cid: '004' }]
}