import HistoryItem from "@/components/fintech/history/historyItem";

function History() {
    return <div className="mt-4">
        <div className="flex">
            <div>
                <h3 className="text-3xl font-bold">History</h3>
                <p className="text-neutral-500">Transaction for last 6 months</p>
            </div>
        </div>


        <div className="mt-2 overflow-x-scroll">

            <HistoryItem name="Eliana cage" title="Loan received" time="10:43 AM" price={350} status="Completed"/>
            <HistoryItem name="Elizabeth nicolas" title="Car insurance" time="06:01 AM" price={4500} status="Pending"/>
            <HistoryItem name="Jack dorsal" title="Online payment" time="09:28 PM" price={120} status="Failed"/>
            <HistoryItem name="Tomas jef" title="Coffee tip" time="09:43 PM" price={4} status="Completed"/>


        </div>
    </div>;
}

export default History;