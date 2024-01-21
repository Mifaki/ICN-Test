type TableBodyProps = {
    image: string
    buy: string
    sell: string
    profitNum: string
    profitPercents: string
}

type TableProps = {
    head: string[]
    body: TableBodyProps[]
    caption: string
}

const Table = ({
    head,
    body,
    caption
}: TableProps) => {
    return (
        <table className="table-auto destkop-sm text-center overflow-auto">
            <thead>
                <tr className="font-bold text-white bg-[#2792DF]">
                    {head.map((head, index) => {
                        return (
                            <th key={index} className="p-2">{head}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {body.map((body, index) => {
                    return (
                        <tr key={index} className={`font-medium ${index % 2 === 0 ? 'bg-white' : 'bg-[#F2F5F9]'}`}>
                            <td className="flex justify-center items-center p-2">
                                <img src={body.image} alt={body.image} />
                            </td>
                            <td className="p-2">Rp {body.buy}</td>
                            <td className="p-2">Rp {body.sell}</td>
                            <td className="p-2">Rp {body.profitNum}</td>
                            <td className="text-[#188035] p-2">{body.profitPercents}%</td>
                        </tr>
                    )
                })}
                <tr className={`destkop-caption font-medium ${body.length % 2 === 0 ? 'bg-white' : 'bg-[#F2F5F9]'} text-[#A9ACAF]`}>
                    <td colSpan={head.length} className="p-2">
                        {caption}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table