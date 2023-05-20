import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import SampleAPI from "./api/SampleAPI";
import makeToast from "../components/toast";

const SampleContext = createContext();

export const SampleProvider = ({ children }) => {
  const {
    data: posts,
    isLoading: postsLoading,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ["post"],
    queryFn: SampleAPI.getAllPosts,
    onSuccess: () => {
      //makeToast({ type: "success", message: "Data fetched successfully" });
    },
  });

  return (
    <SampleContext.Provider
      value={{
        posts,
        postsLoading,
        refetchPosts,
      }}
    >
      {children}
    </SampleContext.Provider>
  );
};

export default SampleContext;
