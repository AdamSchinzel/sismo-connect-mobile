import { ZkConnect, ZkConnectClient, ZkConnectClientConfig, ZkConnectResponse } from "@sismo-core/zk-connect-client";
import { Dispatch, useEffect, useMemo, useState } from "react";

export type ZkConnectHook = {
  response: ZkConnectResponse | null;
  zkConnect: ZkConnectClient;
  setResponse: Dispatch<any>;
};

export type ZkConnectProps = {
  config: ZkConnectClientConfig;
};

export const useZkConnect = ({ config }: ZkConnectProps): ZkConnectHook => {
  const [response, setResponse] = useState<any>(null);

  const zkConnect = useMemo(() => {
    return ZkConnect(config);
  }, [config]);

  useEffect(() => {
    const zkConnectResponse = zkConnect.getResponse();
    if (zkConnectResponse) setResponse(zkConnectResponse);
  }, []);

  return {
    zkConnect,
    response,
    setResponse,
  };
};
