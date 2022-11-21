import { useQuery } from "react-query";
import { HelloRequest } from "../../protobuf/helloworld_pb";
import { greeterService } from "../../services/greeterService";
import { queryKeys } from "./queryKeys";

export interface ISayHelloProps {
  message: string;
}

export const useSayHello = (props: ISayHelloProps) => {
  const query = useQuery(
    queryKeys.sayHello(props.message),
    ({ queryKey }) => {
      const request = new HelloRequest();
      request.setName(queryKey[1]);
      return greeterService.sayHello(request, null);
    },
    {
      enabled: false,
    }
  );

  const { data, refetch, ...rest } = query;
  const response = {
    message: data?.getMessage(),
  };

  return {
    ...rest,
    sayHello: refetch,
    response,
  };
};

export const useSayHelloAgain = (props: ISayHelloProps) => {
  const query = useQuery(
    queryKeys.sayHello(props.message),
    ({ queryKey }) => {
      const request = new HelloRequest();
      request.setName(queryKey[1]);
      return greeterService.sayHelloAgain(request, null);
    },
    {
      enabled: false,
    }
  );

  const { data, refetch, ...rest } = query;
  const response = {
    message: data?.getMessage(),
  };

  return {
    ...rest,
    sayHello: refetch,
    response,
  };
};
