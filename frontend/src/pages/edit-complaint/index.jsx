import React from "react";
import EditComplaint from "./EditComplaint";

// ComplaintProvider
import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {
	return (
		<>
			<ComplaintProvider>
				<EditComplaint />
			</ComplaintProvider>
		</>
	);
};

export default index;