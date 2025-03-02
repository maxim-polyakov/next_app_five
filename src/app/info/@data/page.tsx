import { getData } from "@/app/actions/getData"

export default function MapData() {
    return (
        <>
            <text>{getData()}</text>
        </>
    )
}