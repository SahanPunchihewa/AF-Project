import { useContext, useState, useEffect } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import ComplaintAPI from "../../contexts/api/ComplaintAPI";
import {ImSearch} from "react-icons/im";
const ResolvedComplaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const id=localStorage.getItem("uId");
	var count=0;



    useEffect(() => {
		//setIsLoading(true);
		ComplaintAPI.getComplaints().then((response) => {
			setComplaints(response.data);
		//console.log(products.values("productName"));
		//	setIsLoading(false);
		});
	}, []);

	complaints
		.filter((elem) => elem.citizenId._id == id && elem.complaintStatus == "resolved")
		.map(
			() => (
			count++
			)
		);

    return ( 
        <>
		{count !== 0 ?(
        <div>
        <div className="flex gap-2 ml-[400px]">
				<input
				    className="ml-[100px] mt-10 mb-8 py-5 w-80 h-2 border-2 border-gray-700 rounded-lg"
					type="text"
					placeholder="    Enter Complaint Title.."
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
				/>
				<ImSearch className="mt-12 -ml-12 w-6 h-7 fill-gray-700"/>
				</div>
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
					<table className="ml-32 w-[1000px] border-collapse bg-white text-left text-sm text-gray-500">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Complaint Title
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Description
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Province
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									District
								</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>

								<th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
							</tr>
						</thead>
						{complaints.filter((val) => {
							if (searchTerm == "") {
								return val;
							} else if (val.complaintTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
								return val;
							}
						}).filter((elem) => elem.complaintStatus == "resolved" && elem.citizenId._id===id)
						.map((complaint, key) => (
							<tbody className="divide-y divide-gray-100 border-t border-gray-100 h-24" key={key}>
								<tr className="hover:bg-gray-50">
									<th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
										<div className="relative">
											<img
												className="h-24 w-24 rounded-lg object-cover object-center"
												src={complaint.image}
												alt=""
											/>
										</div>
									</th>
									<td className="px-6 py-4">
										<div className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-s ">
											{complaint.complaintTitle}
										</div>
									</td>
									<td className="px-6 py-4">{complaint.description}</td>
									<td className="px-6 py-4">{complaint.province}</td>
                                    <td className="px-6 py-4">{complaint.district}</td>
                                    <td className="px-6 py-4">
                                        <div className="w-24 py-2 bg-green-200 ml-1 border-2 border-green-600 rounded"> 
                                        <div className="ml-5 font-semibold text-green-600 ">{complaint.complaintStatus}</div>
                                        </div>
                                    </td>
									<td className="px-6 py-4">
										<div>
											<button onClick={() => deleteProduct(product._id)}>
												<RiDeleteBin2Fill className="fill-red-600 w-[20px] h-[20px] hover:fill-red-500 -ml-5 " />
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
        </div>):(<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
				<img src="/noComplaints.svg" className="ml-[500px] w-72 h-72 px-10 py-10"/>
				<div className="font font-semibold text-2xl ml-[480px] mb-10" >No Resolved Complaints</div>
			</div>)}
        </>
     );}
 
export default ResolvedComplaints;