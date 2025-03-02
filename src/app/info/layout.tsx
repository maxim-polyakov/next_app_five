
export const metadata = {
    title: 'Info page',
    description: 'info page description',
}

export default function InfoLayout({children, data}: {
    children: React.ReactNode,
    data:React.ReactNode,
}) {
    return (
        <div className="container max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            {children}
            <div className="grid grid-cols-2">
                {data}
            </div>
        </div>
    )
}