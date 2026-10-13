import { useEffect, useState } from "react";

export const API_STATUS = {
  loading: "loading",
  success: "success",
  error: "error",
};

const LOADING_STATE = { status: API_STATUS.loading, response: null };
const ERROR_STATE = { status: API_STATUS.error, response: null };

export function useApi(request) {
  const [state, setState] = useState(LOADING_STATE);

  useEffect(() => {
    const controller = new AbortController();

    request({ signal: controller.signal })
      .then((response) => setState({ status: API_STATUS.success, response }))
      .catch(() => {
        if (!controller.signal.aborted) {
          setState(ERROR_STATE);
        }
      });

    return () => controller.abort();
  }, [request]);

  return state;
}
