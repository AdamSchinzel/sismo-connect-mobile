import {
  SismoConnect,
  SismoConnectClient,
  SismoConnectClientConfig,
  SismoConnectResponse,
} from "@sismo-core/sismo-connect-client";
import { Dispatch, useEffect, useMemo, useState } from "react";

export type SismoConnectHook = {
  sismoConnect: SismoConnectClient;
  response: SismoConnectResponse | null;
  setResponse: Dispatch<any>;
};

export type SismoConnectProps = {
  config: SismoConnectClientConfig;
};

export const useZkConnect = ({ config }: SismoConnectProps): SismoConnectHook => {
  const [response, setResponse] = useState<any>(null);

  const sismoConnect = useMemo(() => {
    return SismoConnect(config);
  }, [config]);

  useEffect(() => {
    const zkConnectResponse = sismoConnect.getResponse();
    if (zkConnectResponse) setResponse(zkConnectResponse);
  }, []);

  return {
    sismoConnect,
    response,
    setResponse,
  };
};
