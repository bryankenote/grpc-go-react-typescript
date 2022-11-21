import { useState } from "react";
import { useSayHelloAgain } from "./hooks/queries/greeterService";

const App = () => {
  const [message, setMessage] = useState<string>("");
  const { sayHello, response } = useSayHelloAgain({ message });

  const onButtonClick = async () => {
    await sayHello();
  };

  return (
    <>
      <h1>Simple message reverser over gRPC</h1>
      <p>
        (Don't ask me why you would actually want to reverse a string
        server-side, this is just for fun!
      </p>
      <label title="Type a message in realtime over the gRPC wire">
        Type a message in realtime over the gRPC wire:
      </label>
      <br />
      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={onButtonClick}>Send message</button>
      <p>And see the response message here: {response.message}</p>
    </>
  );
};

export default App;
