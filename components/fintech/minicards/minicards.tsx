import {ArrowsUpDownIcon, BanknotesIcon, BuildingLibraryIcon, CreditCardIcon} from "@heroicons/react/24/outline";
import Minicard from "@/components/fintech/minicards/minicard";

function Minicards() {
    return <div className="flex flex-wrap mt-4 gap-6">
        <Minicard title="Credit amount" price={1200}>
            <CreditCardIcon className="w-8 h-8"/>
        </Minicard>
        <Minicard title="Transfer to other banks" price={150}>
            <ArrowsUpDownIcon className="w-8 h-8"/>
        </Minicard>
        <Minicard title="Amount in bank" price={1500}>
            <BuildingLibraryIcon className="w-8 h-8"/>
        </Minicard>
        <Minicard title="Upcoming payments" price={1650}>
            <BanknotesIcon className="w-8 h-8"/>
        </Minicard>
    </div>
}

export default Minicards;