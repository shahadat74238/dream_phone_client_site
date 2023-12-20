import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePhones = () => {
  const axios = useAxios();

  const { data: phones, isLoading: phoneLoading } = useQuery({
    queryKey: ["phones"],
    queryFn: async () => {
      const res = await axios.get("/phone");
      return res.data;
    },
  });

  return [phones, phoneLoading];
};

export default usePhones;
