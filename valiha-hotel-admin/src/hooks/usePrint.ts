import { useCallback, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

type UsePrintReturnType = [
  React.MutableRefObject<any>,
  boolean,
  () => void
];

const usePrint = (): UsePrintReturnType => {
  const componentRef = useRef<any>(null);

  const onBeforeGetContentResolve = useRef<(() => void) | null>(null);

  const [loading, setLoading] = useState(false);

  const handleAfterPrint = useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);

    return new Promise<void>((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        if (onBeforeGetContentResolve.current) {
          onBeforeGetContentResolve.current();
        }
      }, 2000);
    });
  }, [setLoading]);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, []);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforeGetContent: handleOnBeforeGetContent,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  });

  return [componentRef, loading, handlePrint];
};

export default usePrint;
