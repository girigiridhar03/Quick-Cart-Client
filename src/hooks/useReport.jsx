import { createReport } from "@/api/report.api";
import { useDispatch, useSelector } from "react-redux";

const useReport = () => {
  const { reportLoading, error } = useSelector((state) => state.report);
  const dispatch = useDispatch();

  const postReport = async (body) => {
    try {
      await dispatch(createReport(body)).unwrap();
    } catch (error) {
      return error;
    }
  };

  return {
    reportLoading,
    error,
    postReport,
  };
};

export default useReport;
