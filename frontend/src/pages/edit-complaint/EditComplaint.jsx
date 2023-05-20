/* eslint-disable no-console */
import React, { useContext, useState , useEffect } from "react";
import axios from "axios";
import ComplaintContext from "../../contexts/ComplaintContext";
import GovAuthAPI from "../../contexts/api/GovAuthAPI";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditComplaint = () => {
	const PRESET_NAME = "x3uai9p5";
	const CLOUD_NAME = "dnf7u8aus";
	const { editComplaint , complaint , setComplaint ,getComplaint } = useContext(ComplaintContext);
	const[province,setProvince]=useState();
	const[district,setDistrict]=useState();
	const[authority,setAuthority]=useState();
	const [image, setImage] = useState("");
	const [url, setUrl] = useState("");
	const [auths, setAuths] = useState([]);
    const[details,setDetails]=useState({});


	const name=localStorage.getItem("name");
	const id1=localStorage.getItem("uId")
	const nic=localStorage.getItem("nic")

    const {id}=useParams();
    getComplaint(id);

    const handleChange = (e) => {
		setComplaint(e.target.value);
	};

	useEffect(() => {
		//setIsLoading(true);
        
		GovAuthAPI.getGovAuths().then((response) => {
			setAuths(response.data);
            setUrl(complaint.image)
		//console.log(products.values("productName"));
			//setIsLoading(false);
		});
	},[]);


	const onChangeAuthority = (event) => {
		const value = event.target.value;
		setAuthority(value);
	  };

	const onChangeProvince = (event) => {
		const value = event.target.value;
		setProvince(value);
	  };

	  const onChangeDistrict = (event) => {
		const value = event.target.value;
		setDistrict(value);
	  };

	console.log(province);
	console.log(district);

	const submitImage = (e) => {
		const image=e.target.files[0]
		setImage(image)
		console.log(CLOUD_NAME);
		console.log(PRESET_NAME);
		const data1 = new FormData();
		data1.append("file", image);
		data1.append("upload_preset", PRESET_NAME);
		data1.append("cloud_name", CLOUD_NAME);

		axios
			.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data1)
			.then((res) => {
				const url1 = res.data.secure_url;
				console.log(url1);
				setUrl(url1);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleSubmit = (e) => {

		e.preventDefault();

		const newComplaint = {
			id:id,
			complaintTitle:e.target.complaintTitle.value,
            description:e.target.description.value,
			authority:complaint.authority,
            province:province,
            district:district,
            location:e.target.location.value,
            emergencyNo:e.target.emergencyNo.value,
            image:url,
            citizenId:id1,
            complaintStatus:complaint.complaintStatus,
		};
		editComplaint(newComplaint);

	};


	return (
		<>			
			<br></br>
			<br></br>
			<br></br>
			<center>
				<div>
					<div className="text-3xl">Edit Complaint</div>
					<div className="block p-8 rounded-3xl border border-gray-300 shadow-lg bg-white max-w-screen-md max-h-full mt-6">
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Complaint Title
									</label>

									<div className="flex ...">
										<input
											type="text"
                                            value={complaint.complaintTitle}
                                            onChange={handleChange}
											className="form-control block w-80 px-3 py-1.5 text-base border-red-800 font-normal text-gray-700 bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="complaintTitle"
											aria-describedby="emailHelp123"
											placeholder=""
										></input>
									</div>
								</div>
								<div className="form-group mb-6">
									<label htmlFor="fname">Description</label>
									<div className="flex ...">
										<input
											type="text"
                                            value={complaint.description}
                                            onChange={handleChange}
											className="form-control block w-80 px-3 py-1.5 text-base border-red-800 font-normal text-gray-700 bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="description"
											aria-describedby="emailHelp124"
											placeholder=""
										></input>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-10">
									<label htmlFor="fname">Citizen Name</label>
									<div className="flex ...">
										<input
											type="text"
                                            value={name}
                                            onChange={handleChange}
											className="form-control block w-80 px-3 py-1.5 text-base  border-red-800 font-normal text-gray-700  bg-white bg-clip-padding border border-solid  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="citizenName"
											aria-describedby="emailHelp123"
											placeholder=""
											readOnly="true"
										></input>
									</div>
								</div>

								<div className="form-group mb-6">
									<label htmlFor="fname">Emergency No</label>
									<div className="flex ...">
										<input
											type="number"
                                            value={complaint.emergencyNo}
                                            onChange={handleChange}
											className="form-control block w-80 px-3 py-1.5 text-base border-red-800 font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="emergencyNo"
											aria-describedby="emailHelp124"
											placeholder=""
										></input>
									</div>
								</div>
							</div>
		<div>
		<label htmlFor="fname">Authority</label>
		<div className="mb-6">
      <select className="border w-80 border-solid py-1.5 rounded border-red-800 text-center" onChange={onChangeAuthority}>
	    <option slected>select Authority</option>
		{auths.map((authority,key)=>(		
		<option value={authority._id}>{authority.name}</option>
		))}
	  </select>
	  </div>
	  </div>
	<div className="grid grid-cols-2 mb-6 gap-x-10  w-72">
		<div className="-ml-[220px] ">
		<label htmlFor="fname">Province</label>
      <select className="border w-80 border-solid py-1.5 rounded border-red-800 text-center" onChange={onChangeProvince}>
	    <option slected>{complaint.province}</option>
		{Province.map((province,key)=>(		
		<option value={province}>{province}</option>
		))}
	  </select>
	  </div>
	  <div>
	  <label htmlFor="fname" className="ml-36">District</label>
      <select className="border w-80 border-solid py-1.5 rounded border-red-800 text-center" onChange={onChangeDistrict}>
	   <option selected>{complaint.district}</option>
	   {districts.filter((elem) => elem.province == province).map((district,key)=>(
				<option>{district.name}</option>
	   ))}
      </select>
	  </div>
    </div>

	<div className="mb-6">
	<label className="labelClass" htmlFor="fname">Location </label>
	<textarea id="location" rows="4" 
	          class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-red-900 focus:ring-gray-500 focus:border-gray-500" 
			  placeholder="Write the direction for the location..."
              value={complaint.location}>

	</textarea>
	</div>

							<div className="">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Image
									</label>

                                    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">
        <div class="m-4">
            <label class="inline-block mb-2 text-gray-500">Complaint Image</label>
            <div class="flex items-center justify-center w-full">
                <label
                    class="flex flex-col w- h-32 border-4 border-gray-400 border-dashed hover:bg-gray-100 hover:border-red-700">
                    {complaint.image==="" ? (<div class="flex flex-col items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Attach a file</p>
                    </div>):(<div className="ml- mt-1">
                      {complaint.image==="" ?(<h3>uploading...</h3>):
                      (  <img className="w-28 h-28" src={url}/>)}
                    </div>)}
                    <input type="file" class="opacity-0" onChange={submitImage} />
                </label>
            </div>
        </div>
        
    </div>
								</div>
							</div>
							
							<div className="form-group form-check text-center mb-6"></div>
							<button
								type="submit"
								className="w-full px-6 py-2.5  bg-red-700  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								EDIT
							</button>
						</form>
					</div>
				</div>
			</center>
			<br></br>
			<br></br>
			<br></br>
		</>
	);

	

};

const Province=["Western", "Central", "Eastern", "Northern", "North Western", "North Central", "Sabaragamuwa","Southern", "Uva"]
const Authority=["RDA","LECO"]
const districts = [
	{ name: 'Colombo', province: 'Western' },
	{ name: 'Gampaha', province: 'Western' },
	{ name: 'Kalutara', province: 'Western' },
	{ name: 'Kandy', province: 'Central' },
	{ name: 'Matale', province: 'Central' },
	{ name: 'Nuwara Eliya', province: 'Central' },
	{ name: 'Trincomalee', province: 'Eastern' },
	{ name: 'Batticaloa', province: 'Eastern' },
	{ name: 'Ampara', province: 'Eastern' },
	{ name: 'Jaffna', province: 'Northern' },
	{ name: 'Kilinochchi', province: 'Northern' },
	{ name: 'Mannar', province: 'Northern' },
	{ name: 'Vavuniya', province: 'Northern' },
	{ name: 'Mullaitivu', province: 'Northern' },
	{ name: 'Puttalam', province: 'North Western' },
	{ name: 'Kurunegala', province: 'North Western' },
	{ name: 'Anuradhapura', province: 'North Central' },
	{ name: 'Polonnaruwa', province: 'North Central' },
	{ name: 'Kegalle', province: 'Sabaragamuwa' },
	{ name: 'Ratnapura', province: 'Sabaragamuwa' },
	{ name: 'Galle', province: 'Southern' },
	{ name: 'Matara', province: 'Southern' },
	{ name: 'Hambantota', province: 'Southern' },
	{ name: 'Badulla', province: 'Uva' },
	{ name: 'Moneragala', province: 'Uva' },
  ];

export default EditComplaint;
