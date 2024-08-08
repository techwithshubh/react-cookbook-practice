import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

const Important = () => {
  const initialValue = "Initial value";
  const [data, setData] = useState(initialValue);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (data !== initialValue) {
      setDirty(true);
    }
  }, [data, initialValue]);

  return (
    <div className="mx-auto max-w-xl my-8 flex flex-col gap-4">
      <Textarea onChange={(evt) => setData(evt.target.value)}>
        { data }
      </Textarea>
      <Button onClick={() => setDirty(false)} disabled={!dirty}>Submit</Button>
      {/* Prompt is not supported in react router 6 */}
      {/* <Prompt
          when={dirty}
          message={() => 'Do you really want to leave?'}
        /> */}
    </div>
  );
};

export default Important;
