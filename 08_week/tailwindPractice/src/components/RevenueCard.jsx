export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="bg-white rounded shadow-sm">
        <div>
            {title}
            ?
        </div>
        <div className="flex justify-between">
            <div>
                {amount}
            </div>
        </div>
    </div>
}