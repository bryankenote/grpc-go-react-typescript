import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { HelloReply, HelloRequest } from "../../protobuf/helloworld";
import { greeterService } from "../../services/greeterService";
import { queryKeys } from "./queryKeys";

export const useSayHello = (request: HelloRequest) => {
  const [response, setResponse] = useState<HelloReply>();
  const { data, refetch, ...rest } = useQuery(
    queryKeys.sayHello(request.name),
    ({ queryKey }) => greeterService.sayHello({ name: queryKey[1] }),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (!data?.response) return;
    (async () => {
      setResponse(await data?.response);
    })();
  }, [data?.response]);

  return {
    ...rest,
    sayHello: refetch,
    response,
  };
};

export const useSayHelloAgain = (request: HelloRequest) => {
  const [response, setResponse] = useState<HelloReply>();
  const { data, refetch, ...rest } = useQuery(
    queryKeys.sayHello(request.name),
    ({ queryKey }) => greeterService.sayHello({ name: queryKey[1] }),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (!data?.response) return;
    (async () => {
      setResponse(await data?.response);
    })();
  }, [data?.response]);

  return {
    ...rest,
    sayHello: refetch,
    response,
  };
};
