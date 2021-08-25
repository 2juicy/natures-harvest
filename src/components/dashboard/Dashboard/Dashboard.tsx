import React, { useState } from "react";
import Alert from "../../authentication/Alert/Alert";

export default function Dashboard() {
  const [error, setError] = useState("");

  return (
    <div>
      <h1 className="title">This component is empty for now</h1>
      {error && <Alert message={error} setError={setError} />}
    </div>
  );
}
