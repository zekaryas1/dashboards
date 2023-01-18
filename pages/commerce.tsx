import MapChart from "@/components/commerce/worldchart";
import CommerceCards from "@/components/commerce/commerceCards";

import dynamic from "next/dynamic";

const SalesPredictions = dynamic(import("@/components/commerce/salesPrediction"), {
  ssr: false,
});

function Commerce() {


    return <div className="p-8 w-full overflow-y-scroll">
        <h3 className="text-3xl font-bold">Ecommerce dashboard</h3>
        <p className="mb-4 text-neutral-500">Latest analytic information</p>

        <CommerceCards/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div className="border-2 p-4">
                <div className="flex justify-between mb-4 items-end">
                    <div>
                        <h2 className="text-xl font-bold">Sells by country</h2>
                        <p className="text-neutral-500">Report on Top selles in each country</p>
                    </div>
                    <select className="p-2">
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                        <option value="weekly">Weekly</option>
                    </select>
                </div>

                <MapChart/>

            </div>
            <div className="border-2 p-4">
                <div className="flex justify-between mb-4 items-end">
                    <div>
                        <h2 className="text-xl font-bold">Sales predictions</h2>
                        <p className="text-neutral-500">Report on what market will look like</p>
                    </div>
                    <select className="p-2">
                        <option value="yearly">Next month</option>
                        <option value="monthly">Next 3 months</option>
                        <option value="weekly">Next 7 months</option>
                    </select>
                </div>

                <SalesPredictions/>

            </div>
        </div>

    </div>
}

export default Commerce;