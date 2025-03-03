export async function getData() {
    const res = await fetch('http://localhost:3000/api/', { next: { revalidate: 0 } })
    const data = await res.json()
    return data.data[data.data.length - 1].message.toString()
}