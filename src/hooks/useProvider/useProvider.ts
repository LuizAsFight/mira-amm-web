import {Provider} from "fuels";
import {NetworkUrl} from "@/src/utils/constants";
import {useQuery} from "@tanstack/react-query";

const useProvider = () => {
  const {data} = useQuery({
    queryKey: ['provider'],
    queryFn: async () => {
      console.log("Creating provider with network url", NetworkUrl);
      try {
        const provider = await Provider.create(NetworkUrl)
        console.log("Created provider", provider.url);
        return provider;
      } catch (e) {
        console.error("Error creating provider", e);
        throw e;
      }
    },
  });

  return data;
};

export default useProvider;
